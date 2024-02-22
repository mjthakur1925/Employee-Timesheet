const express = require('express');
const router = express.Router();
const timesheetController = require('../controllers/timesheetController');

// Define routes for timesheet related operations
router.get('/', timesheetController.getAllTimesheets);
router.post('/', timesheetController.createTimesheet);
// Add more routes as needed

module.exports = router;
