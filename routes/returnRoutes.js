const express = require('express');
const router = express.Router();
const returnController = require('../controllers/returnController');

// Student/Faculty routes
router.get('/', returnController.showReturnForm);
router.post('/', returnController.submitReturnRequest);

// Admin routes
router.get('/show', returnController.showAllReturns);
router.post('/show/update/:id', returnController.updateReturnStatus);

router.get('/delete/:id', returnController.deleteReturn);

module.exports = router;

