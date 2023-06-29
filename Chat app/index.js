const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const ejs = require('ejs');

const connect = require('./config/database-config');

const Chat = require('./models/chat')

const app = express();

const server = http.createServer(app);
const io = socketio(server);

app.use('/',express.static(__dirname+'/public'))

app.set('view engine', 'ejs');
app.get('/chat/:roomid',async(req,res) => {
    const chats = await Chat.find({
        roomid: req.params.roomid
    });
    res.render('index',{
        name: 'Tushar',
        id: req.params.roomid,
        chats: chats
    });
})

io.on('connection',(socket) => {
    socket.on('join_room',(data)=>{
        socket.join(data.roomid);
    })
    socket.on('msg_sent',async(data) => {
        const chat = await Chat.create({
            roomid: data.roomid,
            user: data.username,
            content: data.msg
        })
        io.to(data.roomid).emit('msg_received',data);
    })
    socket.on('typing',(data) => {
        socket.broadcast.to(data.roomid).emit('someone_typing');     // broadcast emit will not emit that event for that user and will emit for other users in same room
    })
})

server.listen(3000,async() => {
    console.log("server started")
    await connect();
    console.log("mongodb connected")
})