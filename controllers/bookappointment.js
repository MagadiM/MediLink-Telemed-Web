const db = require(`../database`)

exports.book = (req, res) => {

    const {firstname, lastname, email, phone, appointment_date, appointment_time} = req.body;
    if(!email || !firstname) {
        return res.render(`bookappointment`, {
            error: `Please enter all required fields`})
    }
    db.query(`select * from patients where email = ? AND firstname = ?`, [email, firstname], (err, result) => {
        if(err) {
            console.log(err)
        } else if (!result[0]) {
            res.status(404).render(`bookappointment`, {
                error: `Use Registered Email or Name`})
        } else if (result[0]) {
            var patient_id = result[0].patient_id
        }

        db.query(`insert into appointments set ?`, {firstname: firstname, appointment_date: appointment_date, email: email, appointment_time: appointment_time, patient_id: patient_id}, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.render(`bookappointment`, {
                    message: `Patient ${firstname} Appointment booked successfully`
                }
            )}
        })
    })
}