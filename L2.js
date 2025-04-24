var express=require('express')
var app=express();
// Home page 
app.get("/",function(req,res){
    res.set("content-type","text/html");
    res.send("<h1>hello world</h1>");
})

// about page 
app.listen(3005)
app.get("/about",(req,res)=>{
    res.set("content-type","text/plain");
    res.write("hello");//write after send but sen after write is get error 
    res.send();
});
// call
app.listen(5504,()=>{
    console.log('APP STANDERD');
})