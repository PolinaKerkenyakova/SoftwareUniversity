const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest, isUser } = require('../middlewares/guards.js');

router.get('/register', isGuest(), (req, res) => {
    res.render('user/register');
});

router.post('/register',
    isGuest(),
    body('name').matches(/[A-Z][a-z]+ [A-Z][a-z]+/).withMessage('Please provide yourn full name in the following format: Jane Doe'),
    body('username')
        .isLength({ min: 5 }).withMessage('Username should be at least 5 chars long'),
    body('password').isLength({ min: 4 }).withMessage('Password should be at least 4 chars long'),
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

            await req.auth.register(req.body.name, req.body.username, req.body.password);

            res.redirect('/');
            // TODO change redirect location
        } catch (err) {
            console.log(err);
            const ctx = {
                errors: err.message.split('\n'),
                userData: {
                    name: req.body.name,
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

router.post('/login', isGuest(),
    body('username')
        .isLength({ min: 5 }).withMessage('Username should be at least 5 chars long'),
    body('password').isLength({ min: 4 }).withMessage('Password should be at least 4 chars long'),
    async (req, res) => {
        try {

            await req.auth.login(req.body.username, req.body.password);
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
                    username: req.body.username,
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