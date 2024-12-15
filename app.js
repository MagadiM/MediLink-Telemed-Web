// Importing express dotenv mysql2 nodemon bcryptjs 
const express = require('express')
const routes = express.Router();
const db = require('./database')
const cookieParser = require(`cookie-parser`)
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const cors = require('cors')
const session = require('express-session')
const path = require('path')

//const authRoutes = require('./routes/auth')
//const pages = require('./routes/pages')
require('dotenv').config()

// intializing the server with the express method
const app = express();
const port = process.env.PORT || 6200


app.use(cookieParser())
app.use(express.json())


// inbuilt function used to send data from client side when user fills the form
app.use(express.urlencoded({extended: true}))
//app.use(authRoutes)

// setting up static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));


// setting up the view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }))


//setting up a route for the default page
app.get(`/`, (req, res) => {
    res.render(`index.ejs`);
})

app.get(`/patient/login`, (req, res) => {
    res.render(`login`);
})

app.get(`/patient/patient`, (req, res) => {
    res.render(`patient`);
})

app.get(`/patient/register`, (req, res) => {
    res.render(`register`)
})

app.get(`/doctor/loginDoctor`, (req, res) => {
    res.render(`loginDoctor`)
})

app.get(`/doctor/doctor`, (req, res) => {
    res.render(`doctor`)
})

app.get(`/doctor/registerDoctor`, (req, res) => {
    res.render(`registerDoctor`)
})

app.get(`/contact`, (req, res) => {
    res.render(`contact`)
})

app.post(`/register`, (req, res) => {
    res.send(`user info registered`)
})

app.post(`/registerDoctor`, (req, res) => {
    res.send(`Doctor registered successfully!`)
})

app.post(`/patient/login`, (req, res) => {
    res.send(`Patient login successfully.`)
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})