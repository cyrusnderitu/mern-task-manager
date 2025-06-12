const User = require('../models/User'); // Adjust the path as necessary
const createToken = require('../utils/createToken');

// Register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check for existing user
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'Email already in use' });

  const user = await User.create({ name, email, password });

  createToken(res, user._id); // Set cookie

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    message: 'User registered successfully'
  });
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  createToken(res, user._id); // Set cookie

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email
  });
};

// get users

const getUsers = async (req, res) => {
  const users = await User.find().select('-password').sort({ createdAt: -1 }) // Exclude password field
  res.status(200).json(users);
}
// Logout
const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = { registerUser, loginUser, logoutUser, getUsers };
