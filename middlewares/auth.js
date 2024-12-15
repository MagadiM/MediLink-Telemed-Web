const jwt = require(`jsonwebtoken`)
const cookieParser = require(`cookie-parser`)

exports.isAuthenticated = (req, res) => {
    const token = req.cookies.userRegister;
    if(!token) {
        return res.render(`login`, {
            error: `Please Login to access the page.`
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.patients = decoded;
        next();
    } catch (error) {
        console.log(error)
        return res.redirect(`login`)
    }
}