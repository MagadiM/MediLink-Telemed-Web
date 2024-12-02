// Importing express dotenv mysql2 nodemon bcryptjs 
const express = require('express')
const routes = express.Router;
const db = require('./database')
const cookieParser = require(`cookie-parser`)
const ejs = require('ejs')
const mysql = require('mysql2')
const session = require('express-session')
const path = require('path')
require('dotenv').config()

// intializing the server with the express method
const app = express()
const port = process.env.PORT || 6200

//setting up a route for the default page
app.get('/', (req, res) => {
    res.render("Welcome to MediLink.")
})

app.use(cookieParser)
app.use(express.json())


// inbuilt function used to send data from client side when user fills the form
app.use(express.urlencoded({extended: false}))

// setting up a middleware 
// inbuilt function used to parse data in the json format i.e {key:value}


app.set('view engine', 'ejs')

app.use(express.static(`public`))
// app.use(express.static(public/images))

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})