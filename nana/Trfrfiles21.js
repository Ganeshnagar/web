const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/download", (req, res) => {

    const file = path.join(__dirname, "sample.txt");

    res.download(file, function(err) {
        if (err) {
            console.log("Error in downloading file");
        } else {
            console.log("File downloaded successfully");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});