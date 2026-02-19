const Parcel = require('../models/parcelModel');
const mailer = require('../utils/mailer');

// Show parcel entry form
exports.showForm = (req, res) => {
  const type = req.query.type || 'student';
  res.render('pages/parcel_entry', { title: 'Parcel Entry', type });
};

// Add parcel
exports.addParcel = (req, res) => {
  const { type, name, roll_no, faculty_id, phone, courier_name, tracking_id, arrival_date } = req.body;
  const data = { type, name, roll_no, faculty_id, phone, courier_name, tracking_id, arrival_date };

  Parcel.addParcel(data, err => {
    if (err) throw err;
    res.redirect(`/parcels/entry?type=${type}`);
  });
};

// Student parcel list
exports.showStudentParcels = (req, res) => {
  Parcel.getAllStudentParcels((err, results) => {
    if (err) throw err;
    res.render('pages/student_parcel_list', {
      title: 'Student Parcels',
      parcels: results
    });
  });
};

// Faculty parcel list
exports.showFacultyParcels = (req, res) => {
  Parcel.getAllFacultyParcels((err, results) => {
    if (err) throw err;
    res.render('pages/faculty_parcel_list', {
      title: 'Faculty Parcels',
      parcels: results
    });
  });
};

// Update student parcel status

exports.updateStudentStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  // 1. Get parcel details (including phone)
  Parcel.getStudentParcelById(id, (err, parcelRows) => {
    if (err) throw err;

    const parcel = parcelRows[0];

    // 2. Update status
    Parcel.updateStudentParcelStatus(id, status, async () => {

      // 3. Send email only when Delivered
      if (status === "Delivered") {
        Parcel.getUserEmailByPhone(parcel.phone, async (err2, userRows) => {
          if (!err2 && userRows.length > 0) {
            const user = userRows[0];

            await mailer.sendMail(
              user.email,
              "Your Parcel Has Been Delivered",
              `<h3>Hello ${user.name},</h3>
               <p>Your parcel from <b>${parcel.courier_name}</b> has been marked as <b>Delivered</b>.</p>
               <p>Tracking ID: <b>${parcel.tracking_id}</b></p>`
            );
          }
        });
      }

      res.redirect('/parcels/student');
    });
  });
};


// Update faculty parcel status
exports.updateFacultyStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  Parcel.getFacultyParcelById(id, (err, parcelRows) => {
    if (err) throw err;

    const parcel = parcelRows[0];

    Parcel.updateFacultyParcelStatus(id, status, async () => {

      if (status === "Delivered") {
        Parcel.getUserEmailByPhone(parcel.phone, async (err2, userRows) => {
          if (!err2 && userRows.length > 0) {
            const user = userRows[0];

            await mailer.sendMail(
              user.email,
              "Your Faculty Parcel Has Been Delivered",
              `<h3>Hello ${user.name},</h3>
               <p>Your parcel from <b>${parcel.courier_name}</b> has been delivered.</p>
               <p>Tracking ID: <b>${parcel.tracking_id}</b></p>`
            );
          }
        });
      }

      res.redirect('/parcels/faculty');
    });
  });
};


// Delete student parcel
exports.deleteStudentParcel = (req, res) => {
  const { id } = req.params;

  Parcel.deleteStudentParcel(id, () => {
    res.redirect('/parcels/student');
  });
};

// Delete faculty parcel
exports.deleteFacultyParcel = (req, res) => {
  const { id } = req.params;

  Parcel.deleteFacultyParcel(id, () => {
    res.redirect('/parcels/faculty');
  });
};


