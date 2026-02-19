const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Student dashboard
// router.get('/student', dashboardController.showStudentDashboard);

// Faculty dashboard
router.get('/', dashboardController.showFacultyDashboard);

module.exports = router;
