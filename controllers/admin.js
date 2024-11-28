`use strict;`
// importing pacakages
const db = require(`../database`)
const bcrypt = require(`bcryptjs`)

exports.adminregister = (req, res) => {
    const {username, role} = req.body;

    db.query(`select username from admin where username = ?`, [username],
        async (err, result) => {
            if (err) {
                console.log(err)
            } else if (result.length > 0){
                return res.render(`register`, {
                    error: `Username already in use exists`
                })
            } else if (!username) {
                return res.render(`register`, {
                    error: `Username field canbot be empty`
                })
            } else if (!role){
                return res.render(`register`, {
                    error: 'Role field cannot be empty'
                })
            }else if (password !== passwordConfirm){
                return res.render(`register`, {
                    error: `Passwords do not match.`
                })
            
            } else if (!password || password < 8) {
                return res. render(`register`, {
                    error: `Invalid Login`
                })
            }
            
    const hashedPassword = await bcrypt.hash(password, 8)
        db.query(`insert into admin set ?`, {username: username, role: role, password: hashedPassword}, (err, result) => {
            if(err){
                console.log(err);
            } else {
                res. render(`register`, {
                    message: `Registration Successful`
                })
            }
    })
})
}

exports.adminlogin = (req, res) => {
    const { email, password } = req.body

    if (!email || !password){
        return res.render(`login`, {
            error: `Input Email/Password`
        })
    } else {
        db.query(`select * from admin where username = ?`, [username],
            async (err, result) => {
                if(err) {
                    console.log(err);
                } else if (!result[0] || !await bcrypt.compare
                    (password, result[0].password)) {
                        return res.render(`login`, {
                            error: `Invalid Email or password!`
                        })
                    }
                })
            }
        }

exports.updatepatient = (req, res)=>{
    const {firstname, lastname, email, phone, date_of_birth, gender} = req.body
    // console.log(req.body);
    // console.log(req.params.id);
    db.query(`update patients set firstname = ?, lastname = ?, email = ?, gender = ?, date_of_birth = ?, phone = ?, address = ? where patient_id = ?`,[firstname, lastname, email, gender, date_of_birth, phone, address, req.params.id], (err, result)=>{
        
        // res.send(`Updated`)
        if(err){
            console.log(err);
            return res.redirect(`/viewpatient`)
            
        }else{
            db.query(`select patient_id, firstname, lastname, email, gender, address, phone from patients where status = 'active' `, (err, rows)=>{
                if(err){
                    console.log(err);
                    
                }else{
                    res.status(200).render(`viewpatient`, {rows})
                }
            })
        }
    })
}

exports.updatedoctor = (req, res) => {
    const {firstname, lastname, specialization, email, phone} = req.body

    db.query(`update doctors set firstname = ?, lastname = ?, specialization = ?, where specialization = ?`, [firstname, lastname, specialization, email, phone, req.params.id], (err, result) => {
        if (err) {
            console.log(err)
            return res.redirect(`/updatedoctor`)
        } else {
            db,query(`select firstname, lastname, specialization, email, phone from doctors where  specialization= ?`, (err, rows) => {
                if(err) {
                    console.log(err)
                } else {
                    res.status(200).render(`updatedoctor`, {rows})
                }
            })
        }
    })
}