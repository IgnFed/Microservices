const { io } = require("socket.io-client");

const socket = io("http://localhost", { port: 3000 });

async function main() {
	try {
		setTimeout(() => console.log(socket.id), 500);
		socket.on("res:microservice:view", ({ statusCode, data, message }) => {
			console.log("res:microservice:view", { statusCode, data, message });
		});
		socket.on("res:microservice:create", ({ statusCode, data, message }) => {
			console.log("res:microservice:create", { statusCode, data, message });
		});

		socket.on("res:microservice:findOne", ({ statusCode, data, message }) => {
			console.log("res:microservice:findOne", { statusCode, data, message });
		});

		socket.on("res:microservice:update", ({ statusCode, data, message }) => {
			console.log("res:microservice:update", { statusCode, data, message });
		});

		socket.on("res:microservice:delete", ({ statusCode, data, message }) => {
			console.log("res:microservice:delete", { statusCode, data, message });
		});

		// setTimeout(() => {
		// 	// socket.emit("req:microservice:create", { name: "Ignacio", age: 70, color: "pink" });
		// 	// socket.emit("req:microservice:findOne", { id: 2 });
		// 	// socket.emit("req:microservice:delete", { id: 4 });
		// 	// socket.emit("req:microservice:update", { id: 3, age: 70 });
		// 	socket.emit("req:microservice:view", {});
		// }, 300);

		setInterval(() => {
			// socket.emit("req:microservice:create", { name: "Ignacio", age: 70, color: "pink" });
			// socket.emit("req:microservice:findOne", { id: 2 });
			// socket.emit("req:microservice:delete", { id: 4 });
			// socket.emit("req:microservice:update", { id: 3, age: 70 });
			socket.emit("req:microservice:view", {});
		}, 100);
	} catch (error) {
		console.log(error);
	}
}

main();
