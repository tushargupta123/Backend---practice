const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let blogList = [];

// middleware => used for authentication like precess before actually we can make request

function logger(req,res,next){
    console.log(req.url);
    console.log(req.body);
    next();
}

function isAuthenticated(req,res,next){
    console.log("user is authenticated");
    next();
}

app.use(logger);    // if we want to use logger middleware everywhere without calling it explicitly in every request

app.get('/blogs',isAuthenticated,(req,res) => {
    console.log("hitting");
    return res.status(200).json({
        data: blogList,
        success: true,
    });
})

app.post('/blogs',(req,res) => {
    blogList.push({name: req.body.name, age: req.body.age,id: Math.floor(Math.random() *1000 )});
    return res.status(201).json({
        success: true,
    });
})

app.get('/blogs/:id',(req,res) => {
    const result = blogList.filter((blog) => blog.id == req.params.id);
    return res.status(200).json({
        data: result,
        success: true,
    });
})

app.listen(PORT,() => {
    console.log("server started on PORT : " + PORT);
})