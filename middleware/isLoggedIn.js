const jwt = require("jsonwebtoken")

function isLoggedIn(req, res, next) {
    let token = req.cookies.token

    if(token === "") {
        return res.send("Please login first")
    }

    var decoded = jwt.verify(token, "secretkey")

    req.decodedId = decoded.userId
    next()
}

module.exports = isLoggedIn