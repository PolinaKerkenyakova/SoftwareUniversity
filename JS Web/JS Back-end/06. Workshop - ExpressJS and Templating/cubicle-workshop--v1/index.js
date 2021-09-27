const express = require('express');
const handlebars = require('express-handlebars');
const { about } = require('./controllers/about');
const { catalog } = require('./controllers/catalog');
const { create, post: createPost } = require('./controllers/create');
const { details } = require('./controllers/details');
const { edit, post: editPost } = require('./controllers/edit');
const { notFound } = require('./controllers/notFound');
const { init: storage } = require('./models/storage');

start();

async function start() {
    const port = process.env.PORT || 3000;

    const app = express();

    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs');

    app.use('/static', express.static('static'));

    app.use(express.urlencoded({extended: false}));

    app.use(await storage())

    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/create', create);
    app.post('/create', createPost);

    app.get('/edit/:id', edit);
    app.post('/edit/:id', editPost);

    app.all('*', notFound)

    app.listen(port, () => console.log(`Server listening on port ${port}`));
}
