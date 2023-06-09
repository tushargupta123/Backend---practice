const http = require('http');
const PORT = 3000;
const server = http.createServer(function exec(request,response){
    console.log(request.url);
    if(request.url == '/home'){
        response.end("Welcome to home");
    }else{
        response.end("hello world! "+request.url);
    }
    console.log(request.method);
});

server.listen(PORT,function process(){
    console.log("Server is running on port "+PORT);
});