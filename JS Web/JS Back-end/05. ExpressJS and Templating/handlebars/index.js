const express = require('express');
const hbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

app.engine('.hbs', hbs({
    extname: '.hbs'
}));

app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('home.hbs')
})

app.listen(port)