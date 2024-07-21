const mysql = require('mysql2');

connection= mysql.createConnection({
    host:'database-1.c3k64ka8uysq.us-east-1.rds.amazonaws.com',
    user:'jenni',
    password:'%cubillas31',
    database:'formulario',
    port:'3306'
});

connection.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log('conectado a la base de datos')
    }
})

module.exports= connection;