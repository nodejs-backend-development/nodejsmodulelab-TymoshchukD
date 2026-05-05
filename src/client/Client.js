const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const fileStream = fs.createReadStream('input.txt');
const gzip = zlib.createGzip();

const req = http.request(
    {
        hostname: 'localhost',
        port: 3001,
        method: 'POST',
        headers: {
            'Content-Encoding': 'gzip',
        },
    },
    res => {
        console.log('Response status:', res.statusCode);
    },
);

fileStream.pipe(gzip).pipe(req);
