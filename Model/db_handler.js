// calling the my sql module 
let  mysql = require('../node_modules/mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

conn.connect((err) => {
    if(err) throw err;
    console.log("connected"); 
});