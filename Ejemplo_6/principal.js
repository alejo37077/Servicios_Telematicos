const express = require("express");
const app=express();
const puerto=1000;
const path=require("path");
const bodyparser=require('body-parser');
var nom1,ed1,ge1,te1,i=0;

app.use(bodyparser.urlencoded({extended: false}));

app.get('/', (req,res)=>{
   res.sendFile(path.join(__dirname, '/formulario.html'));
});
app.post('/',(req,res)=>{

        nom1[i]=req.body.name;
        ed1[i]=req.body.edad;
        ge1[i]=req.body.genero;
        te1[i]=req.body.telefono;
        i++;
//console.log(auxmensaje);
//res.send('El mensaje era:'+auxmensaje);
});
app.listen(puerto, ()=> {
console.log("ejecutando express");
});

