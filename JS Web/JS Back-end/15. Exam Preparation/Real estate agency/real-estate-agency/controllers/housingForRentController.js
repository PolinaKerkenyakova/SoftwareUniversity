const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('aprt-for-rent');
});

module.exports = router;