const Complaint = require('../models/complaintModel');

// Show complaint form for student/faculty
exports.showForm = (req, res) => {
  res.render('pages/complaints', { title: 'Submit Complaint' });
};

// Handle complaint submission
exports.submitComplaint = (req, res) => {
  const { name, role, complain_type, description } = req.body;

  if (!name || !role || !complain_type || !description) {
    return res.send('<h3>⚠️ All fields are required</h3>');
  }

  const data = {
    user_id: null, // link later with session if needed
    name,
    role,
    complain_type,
    description
  };

  Complaint.addComplaint(data, (err) => {
    if (err) throw err;
    res.send('<h3>✅ Complaint submitted successfully! <a href="/complaints">Submit another</a></h3>');
  });
};

// Admin: view all complaints
exports.showAllComplaints = (req, res) => {
  Complaint.getAllComplaints((err, results) => {
    if (err) throw err;
    res.render('pages/admin_complaints', { title: 'All Complaints', complaints: results });
  });
};

// Admin: update complaint status
exports.updateStatus = (req, res) => {
  const { complaint_id, status } = req.body;
  Complaint.updateStatus(complaint_id, status, (err) => {
    if (err) throw err;
    res.redirect('/complaints/admin');
  });
};

// Delete a complaint
exports.deleteComplaint = (req, res) => {
  const { id } = req.params;

  Complaint.deleteComplaint(id, err => {
    if (err) throw err;
    res.redirect('/complaints/show');
  });
};

