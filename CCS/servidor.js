const express = require("express");
const app=express();
const puerto=3000;

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static(__dirname + "/public"));

app.get('/', (req,res)=>{
   res.render("index", {titulo:"alejo",
                        parrafo:"alejo1",
                        Variable_n:"alejo2"})
});
app.get('/prueba', (req,res)=>{
    res.render("index", {titulo:"jhon1",
                         parrafo:"jhon2",
                         Variable_n:"jhon3"})
 });
app.listen(puerto, ()=> {
console.log("ejecutando express");
});