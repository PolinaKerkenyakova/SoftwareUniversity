const Course = require('../models/Course.js');

async function createCourse(courseData) {

    const course = new Course(courseData);

    await course.save();
    return course;
}

async function getCourseById(id) {
    const course = Course.findById(id).lean();

    return course;
}

async function getAllCourses() {
    const courses = await Course.find({}).sort({ createdAt: 1 }).lean();

    return courses;
}

async function getTopThreeCourses() {

    const courses = Course.find({}).sort({ usersEnrolled: 1 }).limit(3).lean();
    return courses;
}


async function enrollInACourse(courseId, userId) {
    const course = await Course.findById(courseId);

    await course.usersEnrolled.push(userId);
    course.save();

    return course;
}

async function deleteCourse(id) {
    return Course.findByIdAndDelete(id);
}

async function editCourse(courseId, courseData) {
    const course = await Course.findById(courseId);
    course.title = courseData.title;
    course.description = courseData.description;
    course.imageUrl = courseData.imageUrl;
    course.duration = courseData.duration;

    return await course.save();
}

async function searchCoursesByName(searchText) {

    const courses = await Course.find({title: {$regex: searchText, $options: 'i'}}).lean();
    return courses;
}


module.exports = {
    createCourse,
    getCourseById,
    getAllCourses,
    getTopThreeCourses,
    enrollInACourse,
    deleteCourse,
    editCourse,
    searchCoursesByName
}