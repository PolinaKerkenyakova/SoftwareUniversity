const router = require('express').Router();

router.get('/', (req, res) => {

    if (req.user) {
        res.render('home/user', req.user);
    } else {
        res.render('home/guest')
    }
});

module.exports = router;