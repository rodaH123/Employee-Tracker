//connect to the database
const mysql = require('mysql2');

const db = mysql.createConnection({
host: 'localhost',
//Your MySQL username,
user:'root',
//Your MYSQL password
password: Fat@16@!ID&0!
database: 'employee_tracker'

});

module.exports = db;