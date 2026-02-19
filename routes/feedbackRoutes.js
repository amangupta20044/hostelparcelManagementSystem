const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Student/Faculty routes
router.get('/', feedbackController.showForm);
router.post('/', feedbackController.submitFeedback);

// Admin routes
router.get('/show', feedbackController.showAllFeedback);
router.get('/show/deleteAll', feedbackController.deleteAllFeedback);

module.exports = router;
