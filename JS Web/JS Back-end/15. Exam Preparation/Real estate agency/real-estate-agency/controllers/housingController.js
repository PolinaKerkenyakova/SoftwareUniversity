const { isUser } = require('../middlewares/guards.js');
const { body, validationResult } = require('express-validator');
const {parseError} = require('../util/parsers.js');


const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
    res.render('housing/create');
});

router.post('/create', isUser(),
    async (req, res) => {
        const { errors } = validationResult(req);

        try {
            if (errors.length > 0) {
                throw new Error(Object.values(errors).map(e => e.msg).join('\n'));
            }

            const housingData = {
                name: req.body.name,
                type: req.body.type,
                year: Number(req.body.year),
                city: req.body.city,
                homeImage: req.body.homeImage,
                description: req.body.description,
                availablePieces: Number(req.body.availablePieces),
                owner: req.user._id
            }

            await req.storage.createHousing(housingData);

            res.redirect('/housing-for-rent')

        } catch (err) {

            console.log(err.message);


            const ctx = {
                errors: parseError(err),
                housingData: {
                    name: req.body.name,
                    type: req.body.type,
                    year: Number(req.body.year),
                    city: req.body.city,
                    homeImage: req.body.homeImage,
                    description: req.body.description,
                    availablePieces: Number(req.body.availablePieces)
                }
            }

            res.render('housing/create', ctx);


        }
    });

router.get('/details:id', (req, res) => {
    res.resnder('housing/details');
});

module.exports = router;