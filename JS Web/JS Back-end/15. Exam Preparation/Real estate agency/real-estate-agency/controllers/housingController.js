const { isUser } = require('../middlewares/guards.js');
const { body, validationResult } = require('express-validator');


const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
    res.render('housing/create');
});

router.post('/create', isUser(),
    (req, res) => {
        const { errors } = validationResult(req);

        try {
            if (errors.length > 0) {
                throw new Error(Object.values(errors).map(e => e.msg).join('\n'));
                // TODO improve error messages
            }

            await 

        } catch (err) {

        }
    });

router.get('/details:id', (req, res) => {
    res.resnder('housing/details');
});

module.exports = router;