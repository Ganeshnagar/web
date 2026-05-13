const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

http.createServer((req, res) => {
  
    const filePath = path.join(__dirname, 'Welcome.html');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading file');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});