const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.get('/download', (req, res) => {
   
    const filePath = path.join(__dirname, 'sample.txt');

  
    res.download(filePath, 'downloaded_sample.txt', (err) => {
        if (err) {
            console.error("Error downloading file:", err);
            res.status(404).send("File not found");
        }
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});