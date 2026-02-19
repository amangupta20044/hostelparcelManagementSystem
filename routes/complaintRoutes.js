const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');

router.get('/', complaintController.showForm);
router.post('/', complaintController.submitComplaint);

router.get('/show', complaintController.showAllComplaints);
router.post('/update', complaintController.updateStatus);

// NEW DELETE ROUTE
router.get('/delete/:id', complaintController.deleteComplaint);

module.exports = router;
