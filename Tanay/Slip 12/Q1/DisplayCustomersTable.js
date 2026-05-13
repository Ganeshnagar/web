const mysql = require('mysql');

// Connect to MySQL server (update credentials)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Replace with your MySQL password
    database: 'your_database_name' // Replace with your database name
});

// Connect to MySQL
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');

    // Select all records from 'customers' table
    connection.query('SELECT * FROM customers', (err, results, fields) => {
        if (err) throw err;

        console.log('Customer Records:');
        console.log(results); // Display result object on console

        // Close connection
        connection.end();
    });
});