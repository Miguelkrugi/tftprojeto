var pg = require('pg'); 
 
const connectionString ="postgres://eumvhaqbuiocfn:ee538131a5a6342be636862cc7343237804431909cb1604d535243ce8c0e5600@ec2-3-229-161-70.compute-1.amazonaws.com:5432/d1fahila4mudhm"
 //"postgresql://postgres:tftprojeto@172.19.0.8:5000/db_test"  //Conectar com os dados normais da BD postgresql
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