// User Routes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// Route to get user details
router.get('/:userId', userController.getUserDetails);

module.exports = router;
