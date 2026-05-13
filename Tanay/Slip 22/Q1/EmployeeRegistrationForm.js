const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h2>Employee Registration Form</h2>
        <form method="POST" action="/submit">
            Name: <input type="text" name="name"><br><br>
            Email: <input type="text" name="email"><br><br>
            Mobile: <input type="text" name="mobile"><br><br>
            Department: <input type="text" name="department"><br><br>
            <input type="submit" value="Register">
        </form>
    `);
});


app.post('/submit', (req, res) => {
    const { name, email, mobile, department } = req.body;

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const mobileRegex = /^[0-9]{10}$/;
    const deptRegex = /^[A-Za-z ]+$/;

    if (!nameRegex.test(name)) return res.send("Name should contain only letters.");
    if (!emailRegex.test(email)) return res.send("Invalid email address.");
    if (!mobileRegex.test(mobile)) return res.send("Mobile number must be 10 digits.");
    if (!deptRegex.test(department)) return res.send("Department should contain only letters.");

    res.send(`<h3>Employee Registered Successfully!</h3>
              <p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Mobile: ${mobile}</p>
              <p>Department: ${department}</p>`);
});

app.listen(port, () => {
    console.log(`Employee registration form running at http://localhost:${port}`);
});