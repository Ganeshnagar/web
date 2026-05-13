const http = require('http');
const myModule = require('./Module');

const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const dateTime = myModule.getCurrentDateTime();

    res.end(`<h2>Current Date and Time:</h2><p>${dateTime}</p>`);
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});