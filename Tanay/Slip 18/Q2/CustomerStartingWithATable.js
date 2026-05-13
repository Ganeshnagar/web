const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'your_database_name' 
});


connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');

  
    const query = "SELECT * FROM customers WHERE name LIKE 'A%'";
    connection.query(query, (err, results) => {
        if (err) throw err;

        console.log('Customers whose name starts with A:');
        console.log(results);

       
        connection.end();
    });
});