const mysql = require('mysql');

// Create MySQL connection (update credentials & database)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'your_database_name' 
});


connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');

   
    connection.query('SELECT * FROM students', (err, results, fields) => {
        if (err) throw err;

        console.log('Student Records:');
        console.log(results); 

       
        connection.end();
    });
});