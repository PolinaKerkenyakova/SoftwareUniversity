const { isUser } = require('../middlewares/guards.js');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../util/parsers.js');
const { getHousingById, editHousingById } = require('../services/housing.js');


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

router.get('/details/:id', async (req, res) => {
    const housing = await req.storage.getHousingById(req.params.id);

    housing.homeRentedBy = housing.homeRentedBy.join(', ');

    housing.isAuthor = req.user && req.user._id == housing.owner;

    res.render('housing/details', { housing });
});

router.get('/delete/:id', isUser(), async (req, res) => {
    const housing = await getHousingById(req.params.id);

    if (housing._owner != req.user._id) {
        throw new Error('You cannot delete housing that you have not created!')
    }

    await req.storage.deleteHousingById(req.params.id);
    res.redirect('/housing-for-rent');
});

router.get('/edit/:id', isUser(), async (req, res) => {

    try {
        const housingData = await getHousingById(req.params.id);
        console.log(housing)

        if (housingData.owner != req.user._id) {
            throw new Error('You cannot edit a housing that you have not created!')
        }

        res.render('housing/edit', { housingData })

    } catch (err) {
        console.log(err.message);
        res.redirect('/houding/details/' + req.params.id);
    }


});

router.post('/edit/:id', isUser(), async (req, res) => {

    try {
        const housing = await getHousingById(req.params.id);

        if (housing.owner != req.user._id) {
            throw new Error('You cannot edit a housing that you have not created!')
        }

        const housingData = {
            name: req.body.name,
            type: req.body.type,
            year: Number(req.body.year),
            city: req.body.city,
            homeImage: req.body.homeImage,
            description: req.body.description,
            availablePieces: Number(req.body.availablePieces)
        }


        await editHousing(req.params.id, housingData);
        res.redirect('/housing/details/' + req.params.id);

    } catch (err) {

        const ctx = {
            errors: parseError(err),
            housingData: {
                _id: req.body._id,
                name: req.body.name,
                type: req.body.type,
                year: Number(req.body.year),
                city: req.body.city,
                homeImage: req.body.homeImage,
                description: req.body.description,
                availablePieces: Number(req.body.availablePieces)
            }
        }

        res.render('housing/edit', ctx)

    };
});
module.exports = router;