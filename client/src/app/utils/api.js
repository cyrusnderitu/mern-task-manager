// app/utils/api.js

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000/api';

export const getTasks = async () => {
  const res = await fetch(`${API_BASE}/tasks`, {
    credentials: 'include',
  });
  return res.json();
};

export const createTask = async (title) => {
  const res = await fetch(`${API_BASE}/tasks`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  return res.json();
};

export const updateTask = async (id, updates) => {
  const res = await fetch(`${API_BASE}/tasks/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  return res.json();
};

export const deleteTask = async (id) => {
  const res = await fetch(`${API_BASE}/tasks/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return res.json();
};
