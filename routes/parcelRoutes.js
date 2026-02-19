// const express = require('express');
// const router = express.Router();
// const parcelController = require('../controllers/parcelController');

// router.get('/entry', parcelController.showForm);
// router.post('/entry', parcelController.addParcel);

// router.get('/student', parcelController.showStudentParcels);
// router.get('/faculty', parcelController.showFacultyParcels);

// // NEW: update status + delete
// router.post('/faculty/update/:id', parcelController.updateFacultyStatus);
// router.get('/faculty/delete/:id', parcelController.deleteFacultyParcel);

// module.exports = router;

const express = require('express');
const router = express.Router();
const parcelController = require('../controllers/parcelController');

// Parcel Entry
router.get('/entry', parcelController.showForm);
router.post('/entry', parcelController.addParcel);

// Student parcel list
router.get('/student', parcelController.showStudentParcels);

// Update student parcel status
router.post('/student/update/:id', parcelController.updateStudentStatus);

// Delete student parcel
router.get('/student/delete/:id', parcelController.deleteStudentParcel);

// Faculty parcel list
router.get('/faculty', parcelController.showFacultyParcels);

// Update faculty parcel status
router.post('/faculty/update/:id', parcelController.updateFacultyStatus);

// Delete faculty parcel
router.get('/faculty/delete/:id', parcelController.deleteFacultyParcel);

module.exports = router;


