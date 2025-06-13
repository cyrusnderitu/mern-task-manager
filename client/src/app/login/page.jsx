'use client'

import React, {useState} from 'react'
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        // Add your login logic here
        try {
            const res = await axios.post('/auth/login', {
                email,
                password
            })
            router.push('/dashboard') // Redirect to dashboard after successful login
            console.log('Login successful:', res.data)
        } catch (error) {
            console.error('Login failed:', error)
            // Handle error (e.g., show a message to the user)
            return
            
        }
    }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login to Task Manager</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Login
          </button>
          <div className="mt-2 text-center text-sm text-gray-600">
            <Link href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link href="/register" className="text-blue-600 hover:underline">
              Don't have an account? Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage