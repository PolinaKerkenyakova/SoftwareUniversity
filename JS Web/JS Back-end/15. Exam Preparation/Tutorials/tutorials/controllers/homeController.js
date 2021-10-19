const router = require('express').Router();

router.get('/', async (req, res) => {

    if (req.user) {
        const courses = await req.storage.getAllCourses();

        res.render('home/user', { courses });
    } else {
        const courses = await req.storage.getTopThreeCourses();

        console.log(courses);
        res.render('home/guest', { courses })
    }
});

module.exports = router;