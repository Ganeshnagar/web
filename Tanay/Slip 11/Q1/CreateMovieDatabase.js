const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});


connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server.');

    connection.query('CREATE DATABASE IF NOT EXISTS movie', (err, result) => {
        if (err) throw err;
        console.log('Database "movie" created or already exists.');

      
        connection.query('USE movie', (err) => {
            if (err) throw err;

            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS movies (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(100),
                    director VARCHAR(50),
                    year INT,
                    genre VARCHAR(50)
                )
            `;
            connection.query(createTableQuery, (err, result) => {
                if (err) throw err;
                console.log('Table "movies" created or already exists.');

                // Close connection
                connection.end();
            });
        });
    });
});