const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'こんにちは', aaa: req.headers
    }));
});

server.listen(8000);