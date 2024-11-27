// importing packages
const mysql = require('mysql2');
require('dotenv').config();

//create connection 
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

pool.getConnection((err, result) => {
    if (err){
        console.error('Unable to connect to database.')
    } else {
        console.log('Db connection successful.')
    }
})

module.exports = pool.promise();