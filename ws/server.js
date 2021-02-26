const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const app = express()

// const server = http.createServer().listen(8080);
const server = app.listen(8080)

const wss = new WebSocket.Server({ server })
// const wss = new WebSocket.Server({ port: 8080 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something from server');
});