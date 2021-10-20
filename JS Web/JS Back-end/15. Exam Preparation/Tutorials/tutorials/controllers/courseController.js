const router = require('express').Router();

const { validationResult } = require('express-validator');
const { isUser } = require('../middlewares/guards.js');
const { parseError } = require('../util/parsers.js');

router.get('/create', (req, res) => {
    res.render('course/create');
});

router.post('/create', isUser(), async (req, res) => {

    const { errors } = validationResult(req);

    try {
        if (errors.length > 0) {
            throw new Error(Object.values(errors).map(e => e.msg).join('\n'));
        }

        const courseData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            duration: req.body.duration,
            author: req.user._id
        }

        await req.storage.createCourse(courseData);
        res.redirect('/')

    } catch (err) {
        console.log(err.message);

        const ctx = {
            errors: parseError(err),
            courseData: {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                duration: req.body.duration,
                author: req.user._id
            }
        }

        res.render('course/create', ctx);
    }
});

router.get('/details/:id', async (req, res) => {

    try {
        const course = await req.storage.getCourseById(req.params.id);
        course.isUser = req.user;
        course.isAuthor = req.user._id == course.author;
        course.isUserEnrolled = course.usersEnrolled.find(u => u == req.user._id);

        res.render('course/details', { course });
    } catch (err) {
        console.log(err)
    }
});

router.get('/enroll/:id', async (req, res) => {
    try {
        const course = await req.storage.getCourseById(req.params.id);

        const user = course.usersEnrolled.find(u => u == req.user._id);
      
        if (user) {
            throw new Error('You already enrolled for this course!')
        }

        await req.storage.enrollInACourse(req.params.id, req.user._id);
        res.redirect('/course/details/' + req.params.id);

    } catch (err) {
        console.log(err.message);
        res.redirect('/course/details/' + req.params.id);

    }
})


module.exports = router;