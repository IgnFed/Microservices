const bull = require("bull");
const redis = { host: "127.0.0.1", port: "6379" };
const opts = {
	redis,
};

console.log(opts);

const queueCreate = bull("curso:create", opts);
const queueUpdate = bull("curso:update", opts);
const queueDelete = bull("curso:delete", opts);
const queueFindOne = bull("curso:findOne", opts);
const queueView = bull("curso:view", opts);

async function Create({ name, age, color }) {
	try {
		const job = await queueCreate.add({ name, age, color });
		const { statusCode, data, message } = await job.finished();
		return { statusCode, data, message };
	} catch (error) {
		console.log({ steps: "Test: Create", error: error.toString() });
	}
}

async function FindOne({ id }) {
	try {
		const job = await queueFindOne.add({ id });
		const { statusCode, data, message } = await job.finished();
		return { statusCode, data, message };
	} catch (error) {
		console.log({ steps: "Test: FindOne", error: error.toString() });
	}
}

async function Update({ name, age, color, id }) {
	try {
		const job = await queueUpdate.add({ name, age, color, id });
		const { statusCode, data, message } = await job.finished();
		return { statusCode, data, message };
	} catch (error) {
		console.log({ steps: "Test: Update", error: error.toString() });
	}
}

async function Delete(where = {}) {
	try {
		const job = await queueDelete.add(where);
		const { statusCode, data, message } = await job.finished();
		return { statusCode, data, message };
	} catch (error) {
		console.log({ steps: "Test: Delete", error: error.toString() });
	}
}

async function View() {
	try {
		const job = await queueView.add();
		const { statusCode, data, message } = await job.finished();
		console.log({ statusCode, data, message });
		return { statusCode, data, message };
	} catch (error) {
		console.log({ steps: "Test: View", error: error.toString() });
		return { statusCode: 500, message: error.toString() };
	}
}

async function main() {
	// Delete({ id: 23 });
	// Create({ name: "Ignacio", age: 21, color: "white" });
	// Create({ name: "Brian", age: 24, color: "black" });
	// Create({ name: "Ignacio", age: 4, color: "Yellow" });
	// Update({ id: 3, name: "Nacho", age: 31, color: "Black" });
	// console.clear();
	View();
}
module.exports = { Create, FindOne, Update, Delete, View };
