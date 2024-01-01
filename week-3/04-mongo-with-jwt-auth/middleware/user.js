const { jwtCode } = require('../jwtCode/jwtpass')
const jwt = require('jsonwebtoken');
console.log(jwtCode);
function adminMiddleware(req, res, next) {
    let jwtTokenOfUser = req.headers.authentication;
    let isValid = jwt.verify(jwtTokenOfUser, jwtCode);

    try {
        if (isValid) {
            req.headers.username = jwt.decode(jwtTokenOfUser, jwtCode);
            next()
        } else {
            res.status(404).send("invalid user name");
        }
    } catch (e) {
        res.send("error occured");
    }
}
module.exports = userMiddleware;