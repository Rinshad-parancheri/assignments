const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course, User } = require("../db/index")
const { secret_password } = require("../jwtCode/jwtpass");
const jwt = require("jsonwebtoken");
// Admin Routes
router.post('/signup', (req, res) => {
    let userName = req.body.userName
    let password = req.body.password

    const newUser = {
        userName,
        password
    }
    console.log(newUser);
    Admin.create(newUser)
        .then(value => {
            res.status(200).json({
                msg: "User created succefully"
            })
        }).catch(err => {
            res.status(404).send("account creation failed")
        })
});

router.post('/signin', adminMiddleware, async (req, res) => {
    let userName = req.body.username;
    let password = req.body.username
    let isValidUser = await User.findOne({
        userName,
        password
    })
    if (isValidUser) {
        res.json({
            token: jwt.sign(userName, secret_password)
        })
    } else {
        res.json({
            msg: "user hasn't singed up"
        })
    }
})

router.post('/course', adminMiddleware, async (req, res) => {

    let title = req.body.title
    let description = req.body.description
    let price = req.body.price
    let image = req.body.image

    const newCourse = {
        title,
        description,
        image,
        price,
    }
    console.log(newCourse);
    let newCourseInDb = await Course.create(newCourse);

    res.status(200).json({
        msg: "course added perfectly",
        courseId: `${newCourseInDb._id}`
    })

});

router.get('/courses', adminMiddleware, (req, res) => {
    Course.find()
        .then((users) => {
            res.json({
                courses: users
            })
        })
});

module.exports = router;