// This route is protected by the auth middleware, which checks for a valid JWT token.
// If the token is valid, it retrieves the user information and sends it back in the response.

const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

// GET /api/user/profile
router.get('/profile', protect, (req, res) => {
  res.status(200).json(req.user); // Only accessible if logged in
});

module.exports = router;