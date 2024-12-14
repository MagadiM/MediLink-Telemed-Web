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

require('dotenv').config()

// intializing the server with the express method
const app = express();
const port = process.env.PORT || 6200


app.use(cookieParser())
app.use(express.json())


// inbuilt function used to send data from client side when user fills the form
app.use(express.urlencoded({extended: true}))

// setting up a middleware 
// app.use(`/`, require(`./routes/pages`))
// app.use(`/`, require(`./routes/auth`))

// setting up static files from the public folder
app.use(express.static(`/public`))
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

app.get(`/login`, (req, res) => {
    res.render(`/patient`);
})

app.get(`/doctor/loginDoctor`, (req, res) => {
    res.render(`loginDoctor`)
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})