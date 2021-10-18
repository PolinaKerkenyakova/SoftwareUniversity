const router = require('express').Router();

router.get('/', async (req, res) => {
    const housings = await req.storage.getAllHousings();

    res.render('aprt-for-rent', { housings });
});

module.exports = router;