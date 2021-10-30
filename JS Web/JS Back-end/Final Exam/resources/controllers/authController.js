const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest, isUser } = require('../middlewares/guards.js');

router.get('/register', isGuest(), (req, res) => {
    res.render('user/register');
});

router.post('/register',
    isGuest(),
    body('firstName').isLength({ min: 3 }).withMessage('First name should be at least 3 chars long')
        .isAlpha().withMessage('First name should contains only english letters!'),
    body('lastName').isLength({ min: 5 }).withMessage('Last name should be at least 5 chars long')
        .isAlpha().withMessage('Last name should contains only english letters!'),
    body('email').matches(/[a-z]+@[a-z]+.[a-z]+/).withMessage('Email should follow the format: <name>@<domain>.<extension>!'),
    body('password').isLength({ min: 4 }).withMessage('Password should be at least 4 chars long'),
    //TODO change according to the requirements
    body('rePass').custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Passwords don\'t match')
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

            await req.auth.register(req.body.firstName, req.body.lastName, req.body.email, req.body.password);

            res.redirect('/');
            // TODO change redirect location
        } catch (err) {
            console.log(err);
            const ctx = {
                errors: err.message.split('\n'),
                userData: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                }
            }
            res.render('user/register', ctx);
        }
    }
);


router.get('/login', isGuest(), (req, res) => {
    res.render('user/login');
});

router.post('/login',
    isGuest(),
    body('email').matches(/[a-z]+@[a-z]+.[a-z]+/).withMessage('Email should follow the format: <name>@<domain>.<extension>!'),
    body('password').isLength({ min: 4 }).withMessage('Password should be at least 4 chars long'),
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
                }
            };

            res.render('user/login', ctx);
        }
    });

router.get('/logout', isUser(), (req, res) => {
    req.auth.logout();
    res.redirect('/');
});

module.exports = router;