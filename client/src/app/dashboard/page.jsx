'use client';

import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    axios.get('/user/profile')
      .then((res) => setUser(res.data))
      .catch(() => router.push('/login'));
  }, []);

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-xl bg-white shadow-lg rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome, {user.name}!</h2>
        <p className="text-gray-600">Email: {user.email}</p>
        <button
                onClick={async () => {
                await axios.post('/auth/logout');
                router.push('/login');
                }}
                className="mt-6 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
        Logout
      </button>
      </div>
    </div>
  );
}
