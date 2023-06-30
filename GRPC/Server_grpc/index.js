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

const server = new grpc.Server();

const todos = [
    {
        id: '1',
        title: "todo 1",
        content: "content of todo 1"
    },
    {
        id: '2',
        title: "todo 2",
        content: "content of todo 2"
    },
];

server.addService(todoService.service, {
    ListTodo: (call,callback) => {
        callback(null,{
            todos: todos
        });
    },
    CreateTodo: (call,callback) => {
        let incomingNewTodo = call.request;
        todos.push(incomingNewTodo);
        callback(null,incomingNewTodo);
    },
    GetTodo: (call,callback) => {
        let incomingTodoRequest = call.request;
        let todoId = incomingTodoRequest.id;
        const response = todos.filter(todo => todo.id === todoId);
        if(response.length>0){
            callback(null,response);
        }else{
            callback({
                message: 'Todo not found'
            },null);
        }
    }
});

server.bindAsync('0.0.0.0:50051',grpc.ServerCredentials.createInsecure(),() => {
    server.start();
    console.log("server started");
});
