const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '' 
});


connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server.');

  
    connection.query('CREATE DATABASE IF NOT EXISTS college', (err, result) => {
        if (err) throw err;
        console.log('Database "college" created or already exists.');

       
        connection.query('USE college', (err) => {
            if (err) throw err;

        
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(50),
                    age INT,
                    course VARCHAR(50)
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