const mysql = require('mysql2');

const database = mysql.createConnection({
    host: 'localhost',
    user: 'maxapi',
    password: 'password',
    database: 'userapi'
});

database.connect((error) => {
    if(error) throw error;
    console.log('Successfully connected to the database.');
});

// export default database;
module.exports = database;