const express = require('express');
const auth = require('../middleware/authMiddleware');
const User = require('../models/User');
const Course = require('../models/Course');
const router = express.Router();

// Add to cart
router.post('/add/:courseId', auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user.cart.includes(req.params.courseId)) {
    user.cart.push(req.params.courseId);
    await user.save();
  }
  res.send({ message: 'Added to cart' });
});

// Get cart
router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user._id).populate('cart');
  res.send(user.cart);
});

module.exports = router;