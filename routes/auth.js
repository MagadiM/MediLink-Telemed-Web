// helps manage navigation and routing
const express = require('express')
const router = express.Router();
const registerPatient = require(`../controllers/registerPatients`)
const loginPatient = require(`../controllers/loginPatient`)
const registerDoctor = require(`../controllers/registerDoctor`)
const loginDoctor = require(`../controllers/loginDoctor`)
const bookAppointment = require(`../controllers/bookappointment`)
const viewDoctor = require(`../controllers/viewDoctor`)
const admin = require(`../controllers/admin`)
//const { search } = require('./pages.js')
const deleted = require(`../controllers/delete`)


router.post(`/patient/register`, registerPatient.registerPatient)
router.post(`login`, loginPatient.loginpatient)

//router.post(`/bookappointment`, isAuthenticated, bookAppointment.bookAppointment)

router.get(`/patient/viewdoctor`, isAuthenticated, viewDoctor.doctor)
router.get(`/patient/viewdoctor`, isAuthenticated, viewDoctor.find)
router.get(`/viewpatient`, isAuthenticatedDoctor, viewDoctor.viewpatient)
router.get(`/viewpatient`, isAuthenticatedDoctor, viewDoctor.findpatient)

router.get(`/editpatient/:id`, isAuthenticateddoctor, viewDoctor.editpatient)
router.post(`/editpatient/:id`, isAuthenticateddoctor, viewDoctor.updatepatient)
router.get(`/delete/:id`, isAuthenticateddoctor, deleted.deleted)

router.post(`/controllers/registerDoctor`, registerDoctor.registerDoctor)
router.post(`logindoctor`, loginDoctor.logindoctor)

// router.post(`/admin`, admin.adminregister)
// router.post(`/admin`, admin.adminlogin)
// router.post(`/admin`, admin.updatedoctor)
// router.post(`/admin`, admin.updatepatient)

//router.get(`/admin`, admin.bookAppointment)

module.exports = router