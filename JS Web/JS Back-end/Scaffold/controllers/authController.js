const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest } = require('../middlewares/guards.js');

router.get('/register', isGuest(), (req, res) => {
    res.render('user/register');
});

router.post('/register',
    isGuest(),
    // body('username').isLength({ min: 2 }), //TODO change according to the requirements
    async (req, res) => {

        const { errors } = validationResult(req);

        try {
            if (errors.length > 0) {
                throw new Error('Validation error');
                // TODO improve error messages
            }

            await req.auth.register(req.body.username, req.body.password);

            res.redirect('/');
            // TODO change redirect location
        } catch (err) {
            console.log(err);
            const ctx = {
                errors,
                userData: {
                    username: req.body.username,
                }
            }
            res.render('user/register', ctx);
        }
    }
);


router.get('/login', isGuest(), (req, res) => {
    res.render('user/login');
});

router.post('/login', isGuest(), async (req, res) => {
    try {

        await req.auth.login(req.body.username, req.body.password);
        res.redirect('/');

    } catch (err) {
        console.log(err.message);
        const ctx = {
            errors: [err.message],
            userData: {
                username: req.body.username,
            }
        };

        res.render('user/login', ctx);
    }
});

router.get('/logout', (req, res) => {
    req.auth.logout();
    res.redirect('/');
});

module.exports = router;