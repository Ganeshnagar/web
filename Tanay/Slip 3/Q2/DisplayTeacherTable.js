const mysql = require('mysql');

// Create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',        
    password: '',       
    database: 'school'   
});


connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database!');

    const queryAll = 'SELECT * FROM Teacher';
    connection.query(queryAll, (err, results) => {
        if (err) throw err;
        console.log('All Teachers:');
        console.table(results);

  
        const queryHighSalary = 'SELECT * FROM Teacher WHERE salary > 20000';
        connection.query(queryHighSalary, (err, highSalaryTeachers) => {
            if (err) throw err;
            console.log('Teachers with salary > 20000:');
            console.table(highSalaryTeachers);

            connection.end();
        });
    });
});