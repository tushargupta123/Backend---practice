const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',function(req,res){
    res.send("hello world!");
})

app.post('/home',function(req,res){
    res.json({
        message: "this is post request to home",
        success: true
    })
})

app.listen(PORT,function process(){
    console.log("server started");
})