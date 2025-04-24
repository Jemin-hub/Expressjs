// write a js one json objet an employee having properties lke name and age if user request for home page name should be display on browser 
// and if about page if uesr request age should be display on browser in red colcor and h2 tag 
var express=require('express')
var app=express();
person={
    name:"xyz",
    age:22

}
app.get("/",(req,res)=>{
    res.set("content-type","text/html");
    res.send(`<h1 style=color:red>${person.name}</h1>`);
})
app.get("/secpage",(req,res)=>{
    res.set("content-type","text/html");
    res.send(`<h1 style=color:red>${person.age}</h1>`);
})
app.listen(6002);