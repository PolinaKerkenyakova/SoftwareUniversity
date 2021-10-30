const router = require('express').Router();

const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util/parsers');
const { getUserById, getUsersById } = require('../services/user');

router.get('/create', isUser(), (req, res) => {
    res.render('post/create');
});


router.post('/create', isUser(), async (req, res) => {

    try {
        const post = {
            title: req.body.title,
            keyword: req.body.keyword,
            location: req.body.location,
            creationDate: req.body.creationDate,
            image: req.body.image,
            description: req.body.description,
            author: req.user._id
        }

        await req.storage.createPost(post, req.user._id);

        res.redirect('/all-posts');

    } catch (err) {
        console.log(err);

        const ctx = {
            errors: parseError(err),
            post: {
                title: req.body.title,
                keyword: req.body.keyword,
                location: req.body.location,
                creationDate: req.body.creationDate,
                image: req.body.image,
                description: req.body.description
            }
        }

        res.render('post/create', ctx)
    }
});

router.get('/details/:id', async (req, res) => {

    const post = await req.storage.getPostById(req.params.id);
    const peopleVoted = await getUsersById(post.postVotes);

    const peopleEmails = [];
    peopleVoted.forEach(p => peopleEmails.push(p.email));

    const author = await getUserById(post.author);

    post.isAuthor = req.user && req.user._id == post.author;
    post.authorName = `${author.firstName} ${author.lastName}`;
    post.isUserVoted = post.postVotes.find(u => u == req.user._id);
    post.votersEmails = peopleEmails.join(', ');

    res.render('post/details', { post })

});

router.get('/delete/:id', isUser(), async (req, res) => {

    try {
        const post = await req.storage.getPostById(req.params.id);

        if (post.author != req.user._id) {
            throw new Error('You cannot delete a post that you have not created!');
        }

        await req.storage.deletePost(req.params.id);

        res.redirect('/all-posts');

    } catch (err) {
        console.log(err);
        res.redirect('/post/details' + req.params.id);
    }
});


router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const post = await req.storage.getPostById(req.params.id);

        if (post.author != req.user._id) {
            throw new Error('You cannot edit a post that you have not created!');
        }

        res.render('post/edit', { post });

    } catch (err) {
        console.log(err);

        res.redirect('/post/details' + req.params.id);
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {

    try {
        const post = {
            title: req.body.title,
            keyword: req.body.keyword,
            location: req.body.location,
            creationDate: req.body.creationDate,
            image: req.body.image,
            description: req.body.description
        }

        await req.storage.editPost(req.params.id, post);

        res.redirect('/post/details/' + req.params.id);
    } catch (err) {
        console.log(err);

        const ctx = {
            errors: parseError(err),
            post: {
                title: req.body.title,
                keyword: req.body.keyword,
                location: req.body.location,
                creationDate: req.body.creationDate,
                image: req.body.image,
                description: req.body.description
            }
        }

        res.render('post/edit', ctx)
    }
})


router.get('/voteUp/:id', isUser(), async (req, res) => {

    try {
        const post = await req.storage.getPostById(req.params.id);

        if (post.postVotes.find(u => u == req.user._id)) {
            throw new Error('You already voted for this post');
        }

        await req.storage.upVotePost(req.params.id, req.user._id);
        res.redirect('/post/details/' + req.params.id);

    } catch (err) {
        console.log(err);
        res.redirect('/post/details' + req.params.id);
    }
});

router.get('/voteDown/:id', isUser(), async (req, res) => {
    try {
        const post = await req.storage.getPostById(req.params.id);

        if (post.postVotes.find(u => u == req.user._id)) {
            throw new Error('You already voted for this post');
        }

        await req.storage.downVotePost(req.params.id, req.user._id);

        res.redirect('/post/details/' + req.params.id);

    } catch (err) {
        console.log(err);
        res.redirect('/post/details' + req.params.id);
    }
})
module.exports = router;