'use client';

import { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../utils/api';

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ username: 'User' });

  useEffect(() => {
    fetchTasks();
    fetchProfile();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    const data = await getTasks();
    setTasks(data);
    setLoading(false);
  };

  const fetchProfile = async () => {
    const res = await fetch('http://localhost:5000/api/auth/profile', {
      credentials: 'include',
    });
    const data = await res.json();
    if (data.username) setUser(data);
    alert(data.message || 'Profile loaded successfully');
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await createTask(title);
    setTitle('');
    fetchTasks();
  };

  const handleToggle = async (task) => {
    await updateTask(task._id, { completed: !task.completed });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleLogout = async () => {
    await fetch('http://localhost:5000/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Hello, {user.username} 👋
          </h2>
          <button
            onClick={handleLogout}
            className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <form onSubmit={handleCreate} className="flex gap-3 mb-6">
          <input
            type="text"
            className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="What do you need to do?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl">
            Add Task
          </button>
        </form>

        <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Tasks</h3>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <ul className="space-y-3">
            {tasks.length === 0 ? (
              <p className="text-gray-500">No tasks yet. Add some above 👆</p>
            ) : (
              tasks.map((task) => (
                <li
                  key={task._id}
                  className={`flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm border hover:shadow-md transition duration-200 ${
                    task.completed ? 'opacity-70' : ''
                  }`}
                >
                  <div
                    onClick={() => handleToggle(task)}
                    className={`flex-1 cursor-pointer ${
                      task.completed ? 'line-through text-gray-500' : 'text-gray-800'
                    }`}
                  >
                    {task.title}
                  </div>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    🗑
                  </button>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
