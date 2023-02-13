const express=require('express');
const cors =require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();
//Crear el servidor /aplicacion de express
/* 
console.log(process.env);
 */
const app =express();


//base de datos 
dbConnection();
//directorio publico
app.use(express.static('public'));

//cors
app.use(cors());
//lectura y parseo del body
app.use(express.json());
//RUTAS
app.use('/api/auth',require('./routes/auth'))

app.listen(process.env.PORT,()=>{
    console.log(`servidor corriendo en puerto ${process.env.PORT}`)
})