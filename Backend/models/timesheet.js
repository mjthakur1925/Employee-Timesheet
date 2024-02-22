const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },
  date: {
    type: Date,
    required: true
  },
  hoursWorked: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Timesheet', timesheetSchema);
