const mysql = require('mysql2');
const pool =  mysql.createPool({
    user:'root',
    host:'localhost',
    password:'#Ash28jun#',
    database:'general'
});

module.exports = pool.promise();