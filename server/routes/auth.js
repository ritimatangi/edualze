const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  const user = new User({ username, email, password: hashed });
  await user.save();
  res.send({ message: 'Registered Successfully' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('User not found');

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).send('Invalid password');

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.send({ token });
});

module.exports = router;
