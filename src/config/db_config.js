var mysql = require('mysql');
var util = require('util');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "petani_kopi"
});

const query= util.promisify(conn.query).bind(conn);

module.exports = query;