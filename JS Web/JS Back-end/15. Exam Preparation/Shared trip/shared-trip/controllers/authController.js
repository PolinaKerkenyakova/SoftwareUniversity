const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest, isUser } = require('../middlewares/guards.js');
const { getUserById } = require('../services/user.js')

router.get('/register', isGuest(), (req, res) => {
    res.render('user/register');
});

router.post('/register',
    isGuest(),
    body('email').matches(/[a-z]+@[a-z]+.[a-z]+/).withMessage('The email should be in the following format - "username@domain.bg'),
    body('password').isLength({ min: 4 }).withMessage('Password length should be at least 4 chars long'),
    body('rePass').custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Passwords don\'t match');
        }
        return true;
    }),
    async (req, res) => {

        const { errors } = validationResult(req);

        try {
            if (errors.length > 0) {
                throw new Error(Object.values(errors).map(e => e.msg).join('\n'));
                // TODO improve error messages
            }

            await req.auth.register(req.body.email, req.body.password, req.body.gender);

            res.redirect('/');

        } catch (err) {
            console.log(err);
            const ctx = {
                errors: err.message.split('\n'),
                userData: {
                    email: req.body.email,
                    gender: req.body.gender
                }
            }
            res.render('user/register', ctx);
        }
    }
);


router.get('/login', isGuest(), (req, res) => {
    res.render('user/login');
});

router.post('/login', isGuest(),
    body('email').matches(/[a-z]+@[a-z]+.[a-z]+/).withMessage('The email should be in the following format - "username@domain.bg'),
    body('password').isLength({ min: 4 }).withMessage('Password length should be at least 4 chars long'),
    async (req, res) => {
        try {

            await req.auth.login(req.body.email, req.body.password);
            res.redirect('/');

        } catch (err) {

            console.log(err.message);

            let errors = [err.message];

            if (err.type == 'credential') {
                errors = ['Incorrect username or password'];
            }

            const ctx = {
                errors,
                userData: {
                    email: req.body.email,
                    gender: req.body.gender
                }
            };

            res.render('user/login', ctx);
        }
    });

router.get('/logout', isUser(), (req, res) => {
    req.auth.logout();
    res.redirect('/');
});

router.get('/profile', isUser(), async (req, res) => {

    const user = await getUserById(req.user._id);
    const trips = await req.storage.getUserTrips(user.tripsHistory);
    user.trips = trips;

    res.render('user/profile.hbs', { user });
});

module.exports = router;