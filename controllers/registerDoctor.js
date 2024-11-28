`use strict;`
// importing pacakages
const db = require(`../database`)
const bcrypt = require(`bcryptjs`)

exports.doctorregister = (req, res) => {
    const {doctor_id, firstname, lastname, specialization, phone, email, schedule, status} = req.body;
    // console.log(req.body)

    db.query(`select email from doctors where email = ?`, [email],
        async (err, result) => {
            if (err) {
                console.log(err)
            } else if (result.length > 0) {
                return res.render(`register`, {
                    error: `User email exists`
                })
            } else if (!email) {
                return res.render(`register`, {
                    error: `Empty Email field`
                })
            } else if (!firstname && ! lastname) {
                return res.render(`register`, {
                    error: `Name field cannot be empty.`
                })
            } else if (!specialization) {
                return res.render(`register`, {
                    error: `Specialization field cannot be empty`
                })
            } else if (password !== passwordConfirm) {
                return res.render(`register`, {
                    error: `Passwords do not match!`
                })
            } else if (!password || password.length < 8) {
                return res.render(`register`, {
                    error: `Password field is weak or empty`
                })
            }
            // initializing hashed password as a variable and hashing it using bcryptjs
             const hashedPassword = await bcrypt.hash(password, 8)
             db.query(`insert into doctors set ?`, {firstname:firstname, lastname: lastname, specialization: specialization, email: email, phone: phone, password: hashedPassword}, (err, result) => {
                if(err){
                    console.log(err);
                } else {
                    res. render(`register`, {
                        message: `Registration Successful`
                    })
                }
             })
        }
    )}