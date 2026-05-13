// app.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML form
app.get('/', (req, res) => {
    res.send(`
        <h2>Append File Content</h2>
        <form method="POST" action="/append">
            <label>Source File Name:</label>
            <input type="text" name="sourceFile" required><br><br>
            <label>Destination File Name:</label>
            <input type="text" name="destFile" required><br><br>
            <button type="submit">Append</button>
        </form>
    `);
});

// Handle form submission
app.post('/append', (req, res) => {
    const sourceFile = req.body.sourceFile;
    const destFile = req.body.destFile;

    // Read content from source file
    fs.readFile(sourceFile, 'utf8', (err, data) => {
        if (err) {
            res.send(`Error reading source file: ${err.message}`);
            return;
        }

        // Append content to destination file
        fs.appendFile(destFile, data, (err) => {
            if (err) {
                res.send(`Error appending to destination file: ${err.message}`);
                return;
            }
            res.send(`Content from "${sourceFile}" appended to "${destFile}" successfully!`);
        });
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});