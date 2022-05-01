// Requerimos el objeto de express
const express = require('express');

//App de express 
const app = express()

//Puerto en el que vamos a ver nuestra app: localhost:30001
const port = 3001;


//Path inicial que responderá a la url localhost:3000
app.get('/',(req,res)=>{
    res.send('Hello world');
})

//Con esto inicializamos esta app
app.listen(port,()=>{
    console.log(`Ejemplo de app servidor escuchando en el puerto ${port}`);
})


//Respondiendo texto 
//localhost:3000/launchx
app.get('/launchx',(req,res)=>{
    res.send('Bienvenidos a LaunchX');
})
