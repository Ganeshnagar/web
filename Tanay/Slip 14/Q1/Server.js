const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <h1>Welcome to My Simple Node.js Web Server</h1>
        <p>This server is running using Node.js!</p>
    `);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});