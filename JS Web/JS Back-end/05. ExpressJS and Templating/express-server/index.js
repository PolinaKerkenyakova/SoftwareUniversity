const express = require('express');
const catalogRouter = require('./catalog.js');

const app = express();
const port = 3000 || process.env.PORT;

app.use(catalogRouter);

app.get('/', (req, res) => {
    // res.status(200);
    // res.send('Hello from express.js');
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/info', (req, res) => {
    // res.sendFile(__dirname + '/demo.txt');
    // res.download(__dirname + '/demo.txt');
    res.download('./demo.txt');
});

app.all('/about', (req, res) => {
    res.send(`Working with all http methods >>> ${req.method}`)
})

app.all('*', (req, res) => {
    res.status(404);
    res.send('Ohh sorry the page is not found :(')
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});