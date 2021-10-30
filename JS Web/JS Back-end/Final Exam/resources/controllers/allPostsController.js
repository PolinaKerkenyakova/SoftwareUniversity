const router = require('express').Router();

router.get('/', async (req, res) => {
    const posts = await req.storage.getAllPosts();
    res.render('all-posts', { posts })
});


module.exports = router;