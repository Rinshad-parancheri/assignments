const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course, db } = require("../db");

router.post('/signup', async (req, res) => {
    let userName = req.body.userName;
    let password = req.body.password;


    const newUser = {
        userName,
        password
    }
    await User.create(newUser);

    res.json({
        msg: "user created"
    })


});

router.get('/courses', (req, res) => {
    Course.find()
        .then(courses => {
            res.json({
                courses
            })
        })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    let userName = req.headers.username;
    let courseId = req.params.courseId;


    await User.updateOne({
        userName: userName
    }, {
        "$push": {
            courses: courseId
        }
    })


    res.json({
        msg: "course purchase completely"
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

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    let userName = req.body.userName;
    const user = await User.findOne(userName);
    const courses = await Course.find({
        _id: {
            "$in": user.courses
        }
    })

    res.json({
        course: courses
    })

});

module.exports = router