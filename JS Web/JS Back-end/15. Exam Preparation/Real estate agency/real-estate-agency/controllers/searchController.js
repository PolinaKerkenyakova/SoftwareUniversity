const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('search')
});

router.post('/', async (req, res) => {
    const type = (req.body.search).toLowerCase();
    try {
        if (!(type == 'villa' || type == 'apartment' || type == 'house')) {
            throw new Error('Type could be only Villa, Apartment or House!')
        }

        const housings = await req.storage.getHousingByType(type);

        console.log(housings)
        res.render('search', housings)
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;