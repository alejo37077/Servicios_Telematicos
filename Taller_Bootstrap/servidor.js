const express = require("express");
const app=express();
const puerto=5000;

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static(__dirname+"/public"));

app.get('/', (req,res)=>{
   res.render("index", {variable:"PRODUCTOS"})
 });
 
app.listen(puerto, ()=> {
console.log("ejecutando express");
});

