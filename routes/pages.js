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

router.get(`register`, (req, res) => {
    res.render(`registerpatient`)
})

router.get(`registerDoctor`, (req, res) => {
    res.render(`registerDoctor`)
})

router.get(`login`, (req, res) => {
    res.render(`login`)
})

router.get(`loginDoctor`, (req, res) => {
    res.render(`loginDoctor`)
})

router.get(`doctor`, (req, res) => {
    res.render(`doctor`)
})

// router.get(`/admin`, (req, res) => {
//     res.render(`adminpage`)
// })

router.get(`patient`, isAuthenticated, (req, res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    res.set('Pragma', 'no-cache')
    res.set('expires', '0')
    res.render(`patient`, { patient: req.patients })
})

router.get(`doctor`, isAuthenticatedDoctor, (req, res) => {
    res.render(`doctor`, {doctor: req.doctors})
})

// router.get(`/admindashboard`, isAuthenticated, (req, res => {
//     res.render(`admindashboard`, {admin: req.admin})
// }))

router.get(`/bookappointment`, isAuthenticated, (req, res) => {
    res.render(`bookappointemnt`)
})

// router.get(`/patientlogout`, (req, res) => {
//     res.clearCookie(`userRegister`)
//     res.redirect(`/signin`)
// })

// router.get(`/doctorlogout`, (req, res) => {
//     res.clearCookie(`Doctor register.`)
//     res.redirect(`/login`)
// })

// router.get(`/adminlogout`, (req, res) => {
//     res.clearCookie(`Admin register.`)
//     res.redirect(`/login`)
// })

module.exports = router