const Feedback = require('../models/feedbackModel');

// Render feedback form (Student/Faculty)
exports.showForm = (req, res) => {
  res.render('pages/feedback', { title: 'Submit Feedback' });
};

// Handle form submission
exports.submitFeedback = (req, res) => {
  const { name, role, rating, comments } = req.body;

  if (!name || !role || !rating) {
    return res.send('<h3>⚠️ Please fill in all required fields!</h3>');
  }

  const data = {
    user_id: null,
    name,
    role,
    rating,
    comments
  };

  Feedback.addFeedback(data, (err) => {
    if (err) throw err;
    res.send('<h3>✅ Feedback submitted successfully! <a href="/feedback">Submit another</a></h3>');
  });
};

// Admin: show all feedback
exports.showAllFeedback = (req, res) => {
  Feedback.getAllFeedback((err, results) => {
    if (err) throw err;
    res.render('pages/admin_feedback', { title: 'All Feedback', feedbacks: results });
  });
};

// Admin: delete all feedback
exports.deleteAllFeedback = (req, res) => {
  Feedback.deleteAllFeedback((err) => {
    if (err) throw err;
    res.redirect('/feedback/show');
  });
};
  