const db = require('../config/db');

const Parcel = {

  // Add parcel (student or faculty)
  addParcel: (data, callback) => {
    if (data.type === 'faculty') {
      const sql = `INSERT INTO faculty_parcels 
        (faculty_name, faculty_id, phone, courier_name, tracking_id, arrival_date, status)
        VALUES (?, ?, ?, ?, ?, ?, 'Received')`;

      db.query(sql, [
        data.name, 
        data.faculty_id, 
        data.phone, 
        data.courier_name, 
        data.tracking_id, 
        data.arrival_date
      ], callback);

    } else {
      const sql = `INSERT INTO student_parcels 
        (student_name, roll_no, phone, courier_name, tracking_id, arrival_date, status)
        VALUES (?, ?, ?, ?, ?, ?, 'Received')`;

      db.query(sql, [
        data.name, 
        data.roll_no, 
        data.phone, 
        data.courier_name, 
        data.tracking_id, 
        data.arrival_date
      ], callback);
    }
  },

  // Fetch all parcels
  getAllStudentParcels: callback => {
    db.query("SELECT * FROM student_parcels ORDER BY arrival_date DESC", callback);
  },

  getAllFacultyParcels: callback => {
    db.query("SELECT * FROM faculty_parcels ORDER BY arrival_date DESC", callback);
  },

  // Fetch single parcel by id
  getStudentParcelById: (id, callback) => {
    db.query("SELECT * FROM student_parcels WHERE parcel_id=?", [id], callback);
  },

  getFacultyParcelById: (id, callback) => {
    db.query("SELECT * FROM faculty_parcels WHERE parcel_id=?", [id], callback);
  },

  // Update status
  updateStudentParcelStatus: (id, status, callback) => {
    db.query("UPDATE student_parcels SET status=? WHERE parcel_id=?", [status, id], callback);
  },

  updateFacultyParcelStatus: (id, status, callback) => {
    db.query("UPDATE faculty_parcels SET status=? WHERE parcel_id=?", [status, id], callback);
  },

  // Delete parcel
  deleteStudentParcel: (id, callback) => {
    db.query("DELETE FROM student_parcels WHERE parcel_id=?", [id], callback);
  },

  deleteFacultyParcel: (id, callback) => {
    db.query("DELETE FROM faculty_parcels WHERE parcel_id=?", [id], callback);
  },

  // ⭐ NEW: Fetch user email using phone number
  getUserEmailByPhone: (phone, callback) => {
    db.query("SELECT email, name FROM users WHERE phone = ?", [phone], callback);
  }

};

module.exports = Parcel;
