const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));


const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'john', password: 'john123' }
];


app.get('/', (req, res) => {
    res.send(`
        <h2>User Login</h2>
        <form method="POST" action="/login">
            Username: <input type="text" name="username"><br><br>
            Password: <input type="password" name="password"><br><br>
            <input type="submit" value="Login">
        </form>
    `);
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send(`<h3>Login Successful! Welcome ${username}</h3>`);
    } else {
        res.send(`<h3>Invalid username or password!</h3><a href="/">Try Again</a>`);
    }
});


app.listen(port, () => {
    console.log(`Login system running at http://localhost:${port}`);
});