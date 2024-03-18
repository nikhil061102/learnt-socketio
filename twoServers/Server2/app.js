const express = require("express");
const app = express();

const server = app.listen(8005);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
io.on('connection', (client) =>{
  console.log(client.id);
  client.on('toggleServer', (data)=>{
    console.log(data);
    client.emit('toggleClient', data);
  });
});