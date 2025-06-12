const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authR = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
// Routes
app.use('/api/auth/', authR)
app.use('/api/user/', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});


// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1);
});