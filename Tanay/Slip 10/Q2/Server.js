const http = require('http'); 
const myModule = require('./Modules'); 

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    
    const currentTime = myModule.getCurrentDateTime();
    res.end(`Hello! Current date and time is: ${currentTime}`);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});