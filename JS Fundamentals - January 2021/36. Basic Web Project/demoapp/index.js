const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const port = 5001;

app.engine('hbs', handlebars({
    layoutsDir: 'views',
    defaultLayout: 'main-layout',
    partialsDir: 'views/partials',
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
   res.render('index', { layout: false, name: 'Polly'});
});


app.listen(port, () => console.log(`Listening on port ${port}`));