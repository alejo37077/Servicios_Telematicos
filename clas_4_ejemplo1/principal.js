const express = require("express");
const app=express();
const puerto=3000;

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
//var nom1,ed1,ge1,te1,i=0;

//app.use(bodyparser.urlencoded({extended: false}));
app.get('/', (req,res)=>{
   res.render("index", {titulo:"Titulo dinamico.",parrafo:"Este es un parrafo de ejemplo",Variable_n:"Esta es la n-sima variable."})
});
//app.post('/',(req,res)=>{
//nom1=req.body.name;
//console.log(auxmensaje);
//res.send('El mensaje era:'+auxmensaje);
//});
app.listen(puerto, ()=> {
console.log("ejecutando express");
});
