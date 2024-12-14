const db = require(`../database`)
const express = require(`express`)
const { search } = require('./pages')
const router = express.Router()

exports.doctor = (req, res) => {
    db.query(`select firstname, lastname, email, specialization, phone, doctor_id from doctors where status = "active"`, (err, rows) => {
        if(err){
            console.log(err)
        } else {
            res.render(`viewdoctors`, {rows});
        }
    })
}

exports.find = (req, res)=>{
    const search = req.body.search
    db.query(`select * from doctors where firstname like ? OR lastname LIKE ? OR email Like ? OR specialty like ?`, ["%" +search + '%', '%' + search + '%', '%' + search + '%', '%'+ search + `%`] , (err, rows)=>{
        if(!err){
            res.render(`viewdoctors`, {rows})
            
        }else{
            console.log(err);
            
        }
    })
}

exports.viewpatient = (req, res) => {
    db.query(`select patient_id, firstname, lastname, gender, phone from patients where patient_id = ?`, (err, rows) => {
        if(err){
            console.log(err)
        } else {
            res.status(200).render(`viewpatient`, {rows})
        }
    })
}

exports.findpatient = (req, res) => {
    const find = req.body.find;

    db.query(`select * from patients where firstname like ? or lastname like ? or email like ?`, ['%' + find + '%', '%' + find + '%', '%' + find + '%'], (err, rows) => {
        if(err){
            console.log(err)
        } else {
            res.status(200).render(`viewpatient`, {rows})
        }
    })
}

exports.editpatient = (req, res) => {
    db.query(`select * from patients where patient_id = ?`, [req.params.id], (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            res.render(`editpatient`, {rows})
        }
    })
}

exports.updatepatient = (req, res) => {
    const {firstname, lastname, email, address, phone, date_of_birth, gender} = req.body

    db.query(`update patients set firstname = ?, lastname = ?, email = ?, gender = ?, date_of_birth = ?, phone = ?, address = ? where patient_id = ?`, [firstname, lastnmae, email, gender, date_of_birth, phone, address, req.params.id], (err, result) => {
        if (err) {
            console.log(err)
            return res.redirect(`/viewpatient`)
        } else {
            db,query(`select patient_id, firstname, lastname, gender, address, phone from patients where  patient_id = ?`, (err, rows) => {
                if(err) {
                    console.log(err)
                } else {
                    res.status(200).render(`viewpatient`, {rows})
                }
            })
        }
    })
}