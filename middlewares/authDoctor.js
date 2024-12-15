const jwt = require(`jsonwebtoken`)
const cookieParser = require(`cookie-parser`)

exports.isAuthenticateddoctor = (req, res, next) => {
    const token = req.cookies.userRegister
    if(!token) {
        return res.render(`loginDoctor`, {
            error: `Please Login, session expired`
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.doctors = decoded
        next()
    } catch (error) {
        console.log(err)
        return redirect(`loginDoctor`)
    }
}