const Course = require('../models/Course.js');

async function createCourse(courseData) {

    const course = new Course(courseData);

    await course.save();
    return course;
}

async function getCourseById(id) {
    const course = await Course.findById(id).lean();

    return course;
}

async function getAllCourses() {
    const courses = await Course.find({}).sort({ createdAt: 1 }).lean();

    return courses;
}

async function getTopThreeCourses() {

    const courses = Course.find({}).sort({usersEnrolled: usersEnrolled.length}).limit(3).lean(); //????????????
    return courses;
}




module.exports = {
    createCourse,
    getCourseById,
    getAllCourses,
    getTopThreeCourses,

}