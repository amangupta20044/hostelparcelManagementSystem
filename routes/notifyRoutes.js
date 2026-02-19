const express = require('express');
const router = express.Router();
const notifyController = require('../controllers/notifyController');

router.get('/send-now', notifyController.sendNow);

module.exports = router;
