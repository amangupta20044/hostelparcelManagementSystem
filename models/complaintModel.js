const db = require('../config/db');

const Complaint = {
  addComplaint: (data, callback) => {
    const sql = `INSERT INTO complaints (user_id, name, role, complain_type, description)
                 VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [data.user_id, data.name, data.role, data.complain_type, data.description], callback);
  },

  getAllComplaints: (callback) => {
    const sql = 'SELECT * FROM complaints ORDER BY created_at DESC';
    db.query(sql, callback);
  },

  updateStatus: (complaint_id, status, callback) => {
    const sql = 'UPDATE complaints SET status = ? WHERE complaint_id = ?';
    db.query(sql, [status, complaint_id], callback);
  },

  deleteComplaint: (id, callback) => {
    const sql = "DELETE FROM complaints WHERE complaint_id = ?";
    db.query(sql, [id], callback);
  }

};

module.exports = Complaint;
