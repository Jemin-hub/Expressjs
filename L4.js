var express=require('express')
var app=express();
person={
    name:"xyz",
    id:2

}
app.get("/",(req,res)=>{
    // res.write(JSON.stringify(person));

    res.send(person);

})
app.listen(6005);