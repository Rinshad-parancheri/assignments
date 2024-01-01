const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:gBaHtH4oEtHVFjbv@cluster0.7hxnq9e.mongodb.net/courses_app');
const db =  'mongodb+srv://admin:gBaHtH4oEtHVFjbv@cluster0.7hxnq9e.mongodb.net/courses_app'

// Define schemas
const AdminSchema = new mongoose.Schema({
    userName: String,
    password: String
});

const UserSchema = new mongoose.Schema({
   userName: String,
   password: String,
   courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
   }]
});

const CourseSchema = new mongoose.Schema({
    title: String, 
    description: String,
    image: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    db,
    Course
}