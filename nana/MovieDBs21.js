const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err) {
    if (err) throw err;

    console.log("Connected!");

    con.query("CREATE DATABASE movieDB", function(err, result) {
        if (err) throw err;

        console.log("Database created");
        
        con.changeUser({ database: "movieDB" }, function(err) {
            if (err) throw err;
        
            let sql = `
                CREATE TABLE movies (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    movie_name VARCHAR(100),
                    hero VARCHAR(100),
                    release_year INT
                )
            `;

            con.query(sql, function(err, result) {
                if (err) throw err;

                console.log("Movies table created");

                con.end();
            });
        });
    });
});