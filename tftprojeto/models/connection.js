var pg = require('pg'); 
 
const connectionString = "postgresql://postgres:tftprojeto@172.19.0.8:5000/db_test"  //Conectar com os dados normais da BD postgresql
const Pool = pg.Pool 
const pool = new Pool({ 
    connectionString, 
    max: 10, 
    ssl: { 
        require: true,  
        rejectUnauthorized: false 
    } 
}) 

module.exports = pool;