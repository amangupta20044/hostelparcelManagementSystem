const Return = require('../models/returnModel');

// Show return form (Student/Faculty)
exports.showReturnForm = (req, res) => {
  res.render('pages/return_form', { title: 'Return Parcel' });
};

// Handle return request
exports.submitReturnRequest = (req, res) => {
  const { parcel_id, name, role, reason } = req.body;

  if (!parcel_id || !name || !role || !reason) {
    return res.send('<h3>⚠️ Please fill all fields.</h3>');
  }

  const data = {
    parcel_id,
    user_id: null, // can add session later
    name,
    role,
    reason
  };

  Return.addReturnRequest(data, (err) => {
    if (err) throw err;
    res.send('<h3>✅ Return request submitted successfully! <a href="/returns">Submit another</a></h3>');
  });
};

// Show all return requests (Admin/Guard)
exports.showAllReturns = (req, res) => {
  Return.getAllReturns((err, results) => {
    if (err) throw err;
    res.render('pages/admin_returns', { title: 'All Return Requests', returns: results });
  });
};

// Update parcel status
exports.updateReturnStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  Return.updateStatus(id, status, (err) => {
    if (err) throw err;
    res.redirect('/returns/show');
  });
};

// DELETE return request
exports.deleteReturn = (req, res) => {
  const { id } = req.params;

  Return.deleteReturn(id, (err) => {
    if (err) throw err;
    res.redirect("/returns/show");
  });
};
