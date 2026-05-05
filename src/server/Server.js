const http = require('http');

const server = http.createServer((req, res) => {
    try {
        const myURL = new URL(req.url, 'http://localhost:3000');
        const name = myURL.searchParams.get('name');

        res.writeHead(200, { 'Content-Type': 'text/plain' });

        if (name) {
            res.end(`Hello ${name}`);
        } else {
            res.end('You should provide name parameter');
        }

    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Server error');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});