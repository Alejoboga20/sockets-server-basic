const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

class Server {
	constructor() {
		this.app = express();
		this.port = 8080;

		//http server
		this.server = http.createServer(this.app);

		//Sockets config
		this.io = socketio(this.server, {
			/* socket configurations */
		});
	}

	middlewares() {
		this.app.use(express.static(path.resolve(__dirname + '../public')));
	}

	configSockets() {}

	execute() {
		//Init middlewares
		this.middlewares();
		//Init Sockets
		//Init server
		this.server.listen(this.port, () =>
			console.log('server up in port: ', this.port)
		);
	}
}

module.exports = Server;
