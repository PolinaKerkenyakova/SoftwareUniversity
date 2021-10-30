const router = require('express').Router();

const { isUser } = require('../middlewares/guards');
const { getUserPosts } = require('../services/user');

router.get('/', isUser(), async (req, res) => {

    const myPosts = await getUserPosts(req.user._id);
    myPosts.forEach(p => p.author = `${req.user.firstName} ${req.user.lastName}`);

    res.render('my-posts', { myPosts});
});

module.exports = router;