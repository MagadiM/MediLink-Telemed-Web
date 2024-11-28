`use strict;`
// importin pacakages
const db = require(`../database`)
const bcrypt = require(`bcryptjs`)

exports.patientregister = (req, res) => {
    const {patient_id, firstname, lastname, phone, email, address, gender, date_of_birth, password, passwordconfirm, status} = req.body;
    // console.log(req.body)

    db.query(`select email from patients where email = ?`, [email],
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
            } else if (!date_of_birth) {
                return res.render(`register`, {
                    error: `Date of birth cannot be empty`
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
            // initializing hashed password as a variable
             const hashedPassword = await bcrypt.hash(password, 8)
             db.query(`insert into patients set ?`, {firstname:firstname, lastname: lastname, email: email, phone: phone, address: address, gender:gender, date_of_birth: date_of_birth, password: hashedPassword}, (err, result) => {
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