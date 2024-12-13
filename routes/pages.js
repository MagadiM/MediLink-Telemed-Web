const express = require('express')
const router = express.Router();
const cookieParser = require('cookie-parser')
const {isAuthenticated} = require(`../middlewares/auth`)
const {isAuthenticatedDoctor} = require(`../middlewares/authDoctor`)

router.get(``, (req, res) => {
    res.render(`index`)
})

router.get(`/`, (req, res) => {
    res.render(`index`)
})

router.get(`/signup`, (req, res) => {
    res.render(`registerpatient`)
})

router.get(`/signup`, (req, res) => {
    res.render(`registerdoctor`)
})

router.get(`/loginPatient`, (req, res) => {
    res.render(`loginpatient`)
})

router.get(`/loginDoctor`, (req, res) => {
    res.render(`logindoctor`)
})

router.get(`/doctor`, (req, res) => {
    res.render(`doctorpage`)
})

router.get(`/admin`, (req, res) => {
    res.render(`adminpage`)
})

router.get(`/patientdashboard`, isAuthenticated, (req, res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    res.set('Pragma', 'no-cache')
    res.set('expires', '0')
    res.render(`dashboard`, { patient: req.patients })
})

router.get(`/doctordashboard`, isAuthenticatedDoctor, (req, res) => {
    res.render(`doctordashboard`, {doctor: req.doctors})
})

router.get(`/admindashboard`, isAuthenticated, (req, res => {
    res.render(`admindashboard`, {admin: req.admin})
}))

router.get(`/bookappointment`, isAuthenticated, (req, res) => {
    res.render(`bookappointemnt`)
})

router.get(`/patientlogout`, (req, res) => {
    res.clearCookie(`userRegister`)
    res.redirect(`/signin`)
})

router.get(`/doctorlogout`, (req, res) => {
    res.clearCookie(`Doctor register.`)
    res.redirect(`/login`)
})

router.get(`/adminlogout`, (req, res) => {
    res.clearCookie(`Admin register.`)
    res.redirect(`/login`)
})

module.exports = router