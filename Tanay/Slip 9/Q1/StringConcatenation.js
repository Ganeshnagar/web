const http = require('http');
const url = require('url');

const htmlForm = `
<!DOCTYPE html>
<html>
<head>
    <title>Concatenate Strings</title>
</head>
<body>
    <h2>Enter Two Strings to Concatenate</h2>
    <form method="GET" action="/">
        <label>String 1:</label>
        <input type="text" name="str1"><br><br>
        <label>String 2:</label>
        <input type="text" name="str2"><br><br>
        <input type="submit" value="Concatenate">
    </form>
    <p>{{result}}</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    let result = '';

    if (query.str1 !== undefined && query.str2 !== undefined) {
        result = `Concatenated Result: ${query.str1 + query.str2}`;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlForm.replace('{{result}}', result));
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});