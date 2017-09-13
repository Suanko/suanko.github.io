/**
 * Created by Cecil on 04.07.2017.
 */
var connection = require('./connection.js');
exports.getPassword = function (login) {
    return new Promise(function (resolve, reject) {
        connection.query('SELECT * FROM user WHERE login =?', [login], function (err, rows, fields) {
            if(err){
                reject(err);
            }
            else if (rows.length ===0){
                reject(new Error('User not found!'))
            }
            else {
                resolve(rows);
            }
        });
    });
}