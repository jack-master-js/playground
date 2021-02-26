const WebSocket = require('ws');
 
const ws = new WebSocket('http://localhost:8080');
 
ws.on('open', function open() {
  ws.send('something from client');
});
 
ws.on('message', function incoming(data) {
  console.log(data);
});