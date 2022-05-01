// Requerimos el objeto de express
const express = require('express');

//App de express 
const app = express()

//Puerto en el que vamos a ver nuestra app: localhost:30001
const port = 3001;


//Path inicial que responderá a la url localhost:3001
app.get('/',(req,res)=>{
    res.send('Hello world');
})

//Con esto inicializamos esta app
app.listen(port,()=>{
    console.log(`Ejemplo de app servidor escuchando en el puerto ${port}`);
})


//Respondiendo texto 
//localhost:3001/launchx
app.get('/launchx',(req,res)=>{
    res.send('Bienvenidos a LaunchX');
})


//Regresando un objeto
//localhost:3001/explorersInNode
app.get('/explorersInNode',(req,res)=>{
    const explorer = {
        name: 'Explorer 100: Gabriel Torres',
        msg: 'Hola :D',
    }
    res.send(explorer);
})




//Query params: Recibir parámetros por la url
//localhost:3001/explorers/Dato_que_insertas_en_la_url_a_mano

//req.params = {"explorerName":"Gabriel Mendoza"}
app.get(`/explorers/:explorerName`,(req,res)=>{
    res.send(req.params)
})
//Lo que larga cuando insertas la url http://localhost:3001/explorers/Gabriel
//es {"explorername":"Gabriel"}

