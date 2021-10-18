const router = require('express').Router();

router.get('/', async (req, res) => {
    const housings = await req.storage.getLastThreeHousings();

    res.render('home', { housings });
});

module.exports = router;