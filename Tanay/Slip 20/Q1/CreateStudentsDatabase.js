const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '' 
});


connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server.');

  
    connection.query('CREATE DATABASE IF NOT EXISTS student', (err, result) => {
        if (err) throw err;
        console.log('Database "student" created or already exists.');


        connection.query('USE student', (err) => {
            if (err) throw err;

            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(50),
                    username VARCHAR(50),
                    password VARCHAR(50),
                    email VARCHAR(50)
                )
            `;
            connection.query(createTableQuery, (err, result) => {
                if (err) throw err;
                console.log('Table "students" created or already exists.');

              
                connection.end();
            });
        });
    });
});