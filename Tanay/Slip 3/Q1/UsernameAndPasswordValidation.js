const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


const users = [
    { username: 'admin', password: '12345' },
    { username: 'user1', password: 'password' }
];


app.get('/', (req, res) => {
    res.send(`
        <h2>User Login</h2>
        <form method="POST" action="/login">
            <label>Username:</label>
            <input type="text" name="username" required><br><br>
            <label>Password:</label>
            <input type="password" name="password" required><br><br>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.send(`<h3>Login Successful! Welcome, ${username}.</h3>`);
    } else {
        res.send('<h3>Invalid username or password!</h3>');
    }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));