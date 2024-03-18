const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
const server = app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

const io = require("socket.io")(server);
// let users = 0;
// io.on('connection', (client) => {
// client.emit('newuser',{msg:'hello bro/sis'});
// client.broadcast.emit('newuser',{msg:users});
// console.log('Client connected');
// client.send(`Client connected, ${client.id}`)
// client.emit('start', {client:client.id});
// client.on('disconnect', () => {
//     console.log('Client disconnected');
// });
// client.on('message', (msg) => {
//     console.log('Received message:', msg);
//     io.emit('message', msg);
// });
// client.on('chat', (msg) => {
//     console.log('Received chat:', msg);
//     io.emit('chat', msg);
// });
// users++;
// io.sockets.emit('broadcast', { num: users});
// client.on('disconnect', () => {
// users--;
// client.broadcast.emit('newuser',{msg:users});
// io.sockets.emit('broadcast', { num: users});
// });
// });
// io.of('namespace').on('connection', (client) => {
//     console.log('Client connected');
//     client.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
//     client.emit('chat', {msg:'Welcome to the chat room!'});
// });
// io.on('connection', (client) => {
//     console.log('Client connected', client.id);
//     client.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
//     client.on('join',({room})=>{
//         client.join(room);
//         io.sockets.in(room).emit('chat', {msg:`${client.id} user joined ${room}`} );
//     })
// });
// let room = 0;
// let noOfPpl = 0;
// let maxCap = 2;
// io.on('connection', (client) => {
//     console.log('Client connected', client.id);
//     client.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
//     client.join(room);
//     noOfPpl++;
//     io.sockets.in(room).emit('chat', {msg:`${client.id} user joined ${room}`} );
//     if (noOfPpl >= maxCap){
//         room++;
//         noOfPpl = 0;
//     }
// });
// io.on("connection", (client) => {
//   console.log("Client connected", client.id);
//   client.on("disconnect", () => {
//     console.log("Client disconnected");
//   });
//   client.on("join", ({ room }) => {
//     client.join(room);
//     io.sockets
//       .in(room)
//       .emit("chat", { msg: `${client.id} user joined ${room}` });
//   });
// });
// io.on("connect_error", (err) => {
//   console.log("Connection error:", err);
// });
