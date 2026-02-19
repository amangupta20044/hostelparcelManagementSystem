const db = require('../config/db');

const Feedback = {
  // Add feedback
  addFeedback: (data, callback) => {
    const sql = `INSERT INTO feedback (user_id, name, role, rating, comments)
                 VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [data.user_id, data.name, data.role, data.rating, data.comments], callback);
  },

  // Get all feedback
  getAllFeedback: (callback) => {
    const sql = 'SELECT * FROM feedback ORDER BY created_at DESC';
    db.query(sql, callback);
  },

  // Delete all feedback
  deleteAllFeedback: (callback) => {
    const sql = 'DELETE FROM feedback';
    db.query(sql, callback);
  }
};

module.exports = Feedback;
