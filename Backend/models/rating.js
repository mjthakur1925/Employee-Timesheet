const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manager'
  },
  date: {
    type: Date,
    default: Date.now
  },
  rating: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Rating', ratingSchema);
