const http = require('http');

const app = http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
});

app.listen(5000);