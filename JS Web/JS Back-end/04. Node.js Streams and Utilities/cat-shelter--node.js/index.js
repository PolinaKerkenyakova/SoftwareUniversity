const http = require('http');
const port = process.env.PORT || 3000;
const handlers = require('./handlers')

http.createServer((req, res) => {

    handlers.forEach(handler => {
        if(!handler(res, req)) {
            return;
        }
    });
}).listen(port);