const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('./todo.proto',{
    keepCase:true,
    longs:String,
    enums:String,
    defaults:true,
    oneofs:true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var todoService = protoDescriptor.TodoService;

const client = new todoService('localhost:50051',grpc.credentials.createInsecure());
client.ListTodo({},(err,todos) => {
    if(!err){
        console.log(todos);
        client.CreateTodo({
            id:3,
            title: "Third todo",
            content: "yooo"
        },(err,todos) => {
            if(!err){
                console.log("created a new todo");
            }else{
                console.log(err)
            }
        })
    }else{
        console.log(err);
    }
})