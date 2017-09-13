/**
 * Created by Cecil on 04.07.2017.
 */
var mysql = require('mysql'), connection = mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'admin',
    database:'firstDB'
});
connection.connect();
module.exports = connection;
