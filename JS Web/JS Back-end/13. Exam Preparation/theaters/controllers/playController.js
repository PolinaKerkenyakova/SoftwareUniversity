const { isUser } = require('../middlewares/guards');
const { parseErrors } = require('../utils/parsers.js');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {

    res.render('play/create');
});

router.post('/create', isUser(), async (req, res) => {
    console.log(req.body);

    try {
        const playData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            public: Boolean(req.body.public),
            author: req.user._id
        };

        await req.storage.createPlay(playData);

        res.redirect('/');

    } catch (err) {

        const ctx = {
            errors: parseErrors(err),
            playData: {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                public: Boolean(req.body.public)
            }
        };

        res.render('play/create', ctx);
    }
});

router.get('/details/:id', async (req, res) => {

    try {
        const play = await req.storage.getPlayById(req.params.id);

        play.hasUser = Boolean(req.user);
        play.isAuthor = req.user && req.user._id == play.author;
        play.liked = req.user && play.usersLikes.includes(req.user._id);

        console.log(req.user)

        res.render('play/details', { play });

    } catch (err) {
        console.log(err.message)
        res.redirect('/404');
    }


});

module.exports = router;