{"filter":false,"title":"chat_sample.js","tooltip":"/chat_sample.js","undoManager":{"mark":8,"position":8,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["g"],"id":1},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["i"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "],"id":2},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["p"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":5},"action":"remove","lines":["git p"],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":3,"column":38},"action":"insert","lines":["const express = require('express');","const app = express();","const http = require('http').Server(app);","const io = require('socket.io')(http);"],"id":4}],[{"start":{"row":0,"column":0},"end":{"row":3,"column":38},"action":"remove","lines":["const express = require('express');","const app = express();","const http = require('http').Server(app);","const io = require('socket.io')(http);"],"id":5},{"start":{"row":0,"column":0},"end":{"row":11,"column":3},"action":"insert","lines":["const express = require('express');","const app = express();","const http = require('http').Server(app);","const io = require('socket.io')(http);","","app.get('/', function(req, res) {","    res.send('Hello world!');","});","","const server = http.listen(8080, function() {","    console.log('listening on *:8080');","});"]}],[{"start":{"row":0,"column":0},"end":{"row":11,"column":3},"action":"remove","lines":["const express = require('express');","const app = express();","const http = require('http').Server(app);","const io = require('socket.io')(http);","","app.get('/', function(req, res) {","    res.send('Hello world!');","});","","const server = http.listen(8080, function() {","    console.log('listening on *:8080');","});"],"id":6},{"start":{"row":0,"column":0},"end":{"row":27,"column":3},"action":"insert","lines":["const express = require('express');","const app = express();","const http = require('http').Server(app);","const io = require('socket.io')(http);","","app.get('/', function(req, res) {","    res.render('index.ejs');","});","","io.sockets.on('connection', function(socket) {","    socket.on('username', function(username) {","        socket.username = username;","        io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');","    });","","    socket.on('disconnect', function(username) {","        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');","    })","","    socket.on('chat_message', function(message) {","        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);","    });","","});","","const server = http.listen(8080, function() {","    console.log('listening on *:8080');","});"]}],[{"start":{"row":24,"column":0},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":7},{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"insert","lines":["",""]},{"start":{"row":26,"column":0},"end":{"row":27,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":27,"column":0},"end":{"row":28,"column":76},"action":"insert","lines":["var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000;","var host = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || 'localhost';"],"id":8}],[{"start":{"row":28,"column":76},"end":{"row":29,"column":0},"action":"insert","lines":["",""],"id":9}]]},"ace":{"folds":[],"scrolltop":253,"scrollleft":0,"selection":{"start":{"row":30,"column":27},"end":{"row":30,"column":31},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":14,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1565902009971,"hash":"1fe42220b532b54e859c85fe27e29e88cde1f8a0"}