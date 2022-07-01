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

		setInterval(() => {
			socket.emit("req:microservice:view", {});
		}, 5000);
	} catch (error) {
		console.log(error);
	}
}

main();
