let mysql = require('mysql');



let connection = mysql.createPool({
    host     : 'subdomain.localhost',
    user     : 'root',
    password : '',
    database : 'akihvfyj_shifter',
    connectionLimit : 100,
    charset: 'utf8mb4'
  });
  

const mySqlQury =(qry)=>{
    return new Promise((resolve, reject)=>{
        connection.query(qry, (err, row)=>{
            if (err) return reject(err);
            resolve(row)
        })
    }) 
}

  
module.exports = {connection, mySqlQury}