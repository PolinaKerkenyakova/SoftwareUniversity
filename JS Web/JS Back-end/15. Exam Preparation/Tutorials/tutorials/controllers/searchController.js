const router = require('express').Router();

router.get('/', async (req, res) => {
    const searchText = req.query.searchText

    const courses = await req.storage.searchCoursesByName(searchText);

    res.render('home/user', { courses });

});

module.exports = router;