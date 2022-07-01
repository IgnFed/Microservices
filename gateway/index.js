const express = require("express");
const http = require("http");

const app = express();

const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server);

const api = require("../api");

server.listen(80, () => {
	console.log("Server initialized.");
	io.on("connection", (socket) => {
		console.log("New connecion!", socket.id);

		socket.on("req:microservice:view", async ({}) => {
			try {
				console.log("req:microservice:view");
				const { statusCode, data, message } = await api.View();
				console.log({ statusCode, data, message });
				return io
					.to(socket.id)
					.emit("res:microservice:view", { statusCode, data, message });
			} catch (error) {
				console.log(error);
			}
		});
		socket.on("req:microservice:create", async ({ age, color, name }) => {
			try {
				console.log("req:microservice:create", { age, color, name });
				const { statusCode, data, message } = await api.Create({
					age,
					color,
					name,
				});
				return io
					.to(socket.id)
					.emit("res:microservice:create", { statusCode, data, message });
			} catch (error) {
				console.log(error);
			}
		});
		socket.on("req:microservice:findOne", async ({ id }) => {
			try {
				console.log("req:microservice:findOne", { id });
				const { statusCode, data, message } = await api.FindOne({ id });
				return io
					.to(socket.id)
					.emit("res:microservice:findOne", { statusCode, data, message });
			} catch (error) {
				console.log(error);
			}
		});
		socket.on("req:microservice:update", async ({ age, color, name, id }) => {
			try {
				console.log("req:microservice:update", { age, color, name, id });
				const { statusCode, data, message } = await api.Update({
					age,
					color,
					name,
					id,
				});
				return io
					.to(socket.id)
					.emit("res:microservice:update", { statusCode, data, message });
			} catch (error) {
				console.log(error);
			}
		});
		socket.on("req:microservice:delete", async ({ id }) => {
			try {
				console.log("req:microservice:delete", { id });
				const { statusCode, data, message } = await api.Delete({ id });
				return io
					.to(socket.id)
					.emit("res:microservice:delete", { statusCode, data, message });
			} catch (error) {
				console.log(error);
			}
		});
	});
});
