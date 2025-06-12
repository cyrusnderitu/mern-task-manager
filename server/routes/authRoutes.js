const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
    getUsers
} = require('../controllers/authController');

// POST /api/auth/register
router.post('/register', registerUser);

// POST /api/auth/login
router.post('/login', loginUser);

// POST /api/auth/logout
router.post('/logout', logoutUser);

// GET /api/auth/users
router.get('/users', getUsers);

module.exports = router;
