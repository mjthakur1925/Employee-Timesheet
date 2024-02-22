const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  reportingManager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manager'
  }
});

module.exports = mongoose.model('Employee', employeeSchema);
