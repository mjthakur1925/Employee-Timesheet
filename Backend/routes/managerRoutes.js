const express = require('express');
const router = express.Router();
const managerController = require('../controllers/managerController');

// Define routes for manager related operations
router.get('/', managerController.getAllManagers);
router.post('/', managerController.createManager);
// Add more routes as needed

module.exports = router;
