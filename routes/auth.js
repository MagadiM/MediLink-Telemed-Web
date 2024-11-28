// helps manage navigation and routing
const express = require('express')
const registerPatient = require(`../controllers/registerPatients`)
const loginPatient = require(`../controllers/loginPatient`)
const registerDoctor = require(`../controllers/registerDoctor`)
const loginDoctor = require(`../controllers/loginDoctor`)
const bookAppointment = require(`../controllers/bookappointment`)
const viewDoctor = require(`../controllers/viewDoctor`)
const admin = require(`../controllers/admin`)
const router = require(`./pages`);
const deleted = require(`../controllers/delete`)


router.post(`/signup`, registerPatient.registerPatient)
router.post(`/signin`, loginPatient.loginpatient)

router.post(`/bookappointment`, isAuthenticated, bookAppointment.bookAppointment)

router.get(`/patient/viewdoctor`, isAuthenticated, bookAppointment.bookAppointment)
router.get(`/patient/viewdoctor`, isAuthenticated, viewDoctor.find)
router.get(`/viewpatient`, isAuthenticatedDoctor, viewoctor.viewpatient)
router.get(`/viewpatient`, isAuthenticatedDoctor, viewdoctor.findpatient)
router.get

module.export = router