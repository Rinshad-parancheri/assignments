const { Admin } = require('../db')
const zod = require('zod')
const admin = zod.object({
    userName: zod.string().email(),
    password: zod.string().min(5)
})
function adminMiddleware(req, res, next) {
    let userName = req.headers.username
    let password = req.headers.password


    Admin.findOne({
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


module.exports = adminMiddleware;