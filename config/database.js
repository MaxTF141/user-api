const mysql = require('mysql2');

const database = mysql.createConnection({
    host: '127.0.0.1',
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