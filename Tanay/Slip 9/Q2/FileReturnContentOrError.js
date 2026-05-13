const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
   
    const filePath = '.' + (req.url === '/' ? '/index.html' : req.url); // Replace file name 
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found: File does not exist');
        } else {
       
            const ext = path.extname(filePath).toLowerCase();
            let contentType = 'text/plain';
            if (ext === '.html') contentType = 'text/html';
            else if (ext === '.js') contentType = 'application/javascript';
            else if (ext === '.css') contentType = 'text/css';

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});