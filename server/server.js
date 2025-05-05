const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const cartRoutes = require('./routes/cart');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"));

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/cart', cartRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
