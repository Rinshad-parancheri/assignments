const { default: mongoose } = require("mongoose");
const { User } = require('../db')

function userMiddleware(req, res, next) {
    let userName = req.headers.username

    let password = req.headers.password
    User.findOne({
        userName,
        password
    }).then((value) => {
        next()
    }).catch((err) => {
        res.json({
            msg: "user doesn't exist"
        })
    })

}

module.exports = userMiddleware;