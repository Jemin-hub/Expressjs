var express =require('express');
var app=express();
// new incteance by calling function
app.get("/",function(req,res){
    res.set("content-type","text/html");
    res.send("<h1>hello world</h1>");
})
app.listen(3005)