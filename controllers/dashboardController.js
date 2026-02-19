exports.showStudentDashboard = (req, res) => {
  res.render('pages/student_dashboard', { title: 'Student Dashboard' });
};

exports.showFacultyDashboard = (req, res) => {
  res.render('pages/faculty_dashboard', { title: 'Faculty Dashboard' });
};
