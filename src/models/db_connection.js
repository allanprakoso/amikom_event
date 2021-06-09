const fs = require('fs');
const mysql = require('mysql-await');


const connection = mysql.createConnection(
    JSON.parse(
        fs.readFileSync('db_config.json')
    )
);


module.exports = connection;