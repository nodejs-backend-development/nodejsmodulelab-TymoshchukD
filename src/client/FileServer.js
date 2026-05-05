const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        const gunzip = zlib.createGunzip();
        const writeStream = fs.createWriteStream('output.txt');

        req.pipe(gunzip).pipe(writeStream);

        req.on('end', () => {
            res.end('File received and saved');
        });
    }
});

server.listen(3001, () => {
    console.log('File server running on port 3001');
});