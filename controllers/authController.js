const User = require('../models/userModel');

// ------------------- LOGIN -------------------

// Show login page
exports.showLogin = (req, res) => {
  res.render('pages/login', { title: 'Login' });
};

// Handle login form submission
exports.handleLogin = (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.send('<h3>⚠️ All fields are required</h3>');
  }

  User.findByEmailAndRole(email, role, (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.send('<h3>❌ No account found with this email and role</h3>');
    }

    const user = results[0];

    if (user.password === password) {
      console.log(`✅ ${role} ${user.name} logged in successfully.`);
      if (user.role === 'Admin') {
        return res.redirect('/admin/dashboard');
      } else if (user.role === 'Student') {
        return res.redirect('/check');
      } else if (user.role === 'Faculty') {
        return res.redirect('/check');
      } else {
        return res.send('<h3>⚠️ Invalid user role.</h3>');
      }
    }
    else {
      return res.send('<h3>❌ Incorrect password</h3>');
    }
  });
};

// ------------------- REGISTRATION -------------------

// Show registration page
exports.showRegister = (req, res) => {
  res.render('pages/register', { title: 'Register' });
};

// Handle registration form
exports.handleRegister = (req, res) => {
  const { name, email, phone, password, role } = req.body;

  if (!name || !email || !phone || !password || !role) {
    return res.send('<h3>⚠️ All fields are required</h3>');
  }

  User.findByEmailAndRole(email, role, (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      return res.send('<h3>⚠️ User already registered with this email and role</h3>');
    }

    User.createUser(name, email, phone, password, role, (err2) => {
      if (err2) throw err2;
      console.log(`✅ New ${role} registered: ${name}`);
      res.send('<h3>✅ Registration successful! <a href="/login">Login now</a></h3>');
    });
  });
};
