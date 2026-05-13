const http = require('http');

const htmlForm = `
<!DOCTYPE html>
<html>
<head>
    <title>File Upload Form</title>
</head>
<body>
    <h2>Upload a File</h2>
    <form action="/upload" method="post" enctype="multipart/form-data">
        <label for="file">Choose file:</label>
        <input type="file" id="file" name="file"><br><br>
        <input type="submit" value="Upload">
    </form>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlForm);
    } else if (req.method === 'POST' && req.url === '/upload') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File uploaded successfully (simulation)');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});