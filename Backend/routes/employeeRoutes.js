const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Define routes for employee related operations
router.get('/', employeeController.getAllEmployees);
router.post('/', employeeController.createEmployee);
// Add more routes as needed

module.exports = router;
