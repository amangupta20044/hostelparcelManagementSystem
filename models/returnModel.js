const db = require('../config/db');

const Return = {
  // Add new return request
  addReturnRequest: (data, callback) => {
    const sql = `INSERT INTO returns (parcel_id, user_id, name, role, reason, status)
                 VALUES (?, ?, ?, ?, ?, 'Pending')`;
    db.query(sql, [data.parcel_id, data.user_id, data.name, data.role, data.reason], callback);
  },

  // Get all returns (for admin/guard)
  getAllReturns: (callback) => {
    const sql = 'SELECT * FROM returns ORDER BY request_date DESC';
    db.query(sql, callback);
  },

  // Update status
  updateStatus: (id, status, callback) => {
    const sql = 'UPDATE returns SET status = ? WHERE return_id = ?';
    db.query(sql, [status, id], callback);
  },

  deleteReturn: (id, callback) => {
    const sql = "DELETE FROM returns WHERE return_id=?";
    db.query(sql, [id], callback);
  }
};

module.exports = Return;
