const router = require('express').Router();

router.get('/catalog', (req, res) => {
    res.send('Catalog Page');
});

router.get('/catalog/:articleId', (req, res) => {
    console.log(req.params)
    res.send('Article created');
});

router.post('/catalog', (req, res) => {
    res.status(201)
    res.send('Article created');
});

module.exports = router;