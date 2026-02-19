const express = require('express');
const router = express.Router();

// Admin dashboard route
router.get('/dashboard', (req, res) => {
  res.render('pages/admin_dashboard', { title: 'Admin Dashboard' });
});

module.exports = router;
