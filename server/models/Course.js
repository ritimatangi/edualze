const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  CourseTitle: String,
  Description: String,
  Availability: String,
  Cost: String
});

// IMPORTANT: register model as 'Course', not 'courses'
module.exports = mongoose.model('Course', CourseSchema);
