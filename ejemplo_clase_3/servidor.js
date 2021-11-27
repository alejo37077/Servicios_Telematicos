const express = require("express");
const app=express();
const puerto=3000;

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
//var nom1,ed1,ge1,te1,i=0;

//app.use(bodyparser.urlencoded({extended: false}));
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
