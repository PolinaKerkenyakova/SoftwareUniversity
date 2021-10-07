const router = require('express').Router();

router.get('/create', (req, res) => {

    res.render('play/create');

});

router.post('/create', (req, res) => {
    console.log(req.body);

    try {

    res.redirect('/');
        
    } catch (err) {
        const ctx = {
            errors: [err.message],
        };

        res.render('/play/create', ctx);
    }
});

module.exports = router; 