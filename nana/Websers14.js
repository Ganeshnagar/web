const http = require("http");
const hostname = '127.0.0.1';
const server = http.createServer(function(req, res) {

    res.write("Hello World");
    res.end();

});

server.listen(3000);

console.log("Server running at port 3000");
console.log(`Server running at http://${hostname}:${port}/`);