// server/routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// GET /api/tasks
router.get('/', authMiddleware, getTasks);

// POST /api/tasks
router.post('/', authMiddleware, createTask);

// PUT /api/tasks/:id
router.put('/:id', authMiddleware, updateTask);

// DELETE /api/tasks/:id
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
