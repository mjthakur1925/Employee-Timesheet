const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

// Define routes for rating related operations
router.get('/', ratingController.getAllRatings);
router.post('/', ratingController.createRating);
// Add more routes as needed

module.exports = router;
