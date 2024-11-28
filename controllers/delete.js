const db = require(`../database`)

exports.deleted = (req, res) => {
    const deletedId = req.params.id

    db.query(`update patients where patient_id = ?`, [deleted], (err, result) => {
        if (err) {
            console.log(`Cannot deleted patient data.`)
            return res.render(`viewpatient`, {error: `Unable to delete patient data.`})
        } else {
            db.query(`select patient_id, firstname, lastname, gender, address, phone from patients where email = ?`, (err, rows) => {
                if (err) {
                    console.log(`Unable to relod patient data.`)
                    return res.render(`viewpatient`, {error: `cant relod patient data.`})
                } else {
                    res.status(200).render(`viewpatient`, {rows})
                }
        })
        }
    })
}