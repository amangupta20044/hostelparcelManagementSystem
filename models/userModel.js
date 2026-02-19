const db = require('../config/db');

const User = {
  // Find user by email and role
  findByEmailAndRole: (email, role, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ? AND role = ?';
    db.query(sql, [email, role], callback);
  },

  // Insert a new user
  createUser: (name, email, phone, password, role, callback) => {
    const sql = "INSERT INTO users (name, email, phone, password, role) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [name, email, phone, password, role], callback);
  }

};

module.exports = User;
