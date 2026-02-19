const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login routes
router.get('/login', authController.showLogin);
router.post('/login', authController.handleLogin);

// Register routes
router.get('/register', authController.showRegister);
router.post('/register', authController.handleRegister);

module.exports = router;
