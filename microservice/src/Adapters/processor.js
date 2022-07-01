const Services = require("../Services");
const { InternalError } = require("../settings");
const {
	queueCreate,
	queueDelete,
	queueFindOne,
	queueUpdate,
	queueView,
} = require("./index.js");

async function View(job, done) {
	try {
		console.log(job.id);
		const { statusCode, data, message } = await Services.View({});
		done(null, { statusCode, data, message });
	} catch (e) {
		console.log("Adapters: queueView", { error: e.toString() });
		done(null, { statusCode: 500, error: InternalError });
	}
}

async function Create(job, done) {
	try {
		const { name, age, color } = job.data;

		let { statusCode, data, message } = await Services.Create({
			name,
			age,
			color,
		});
		done(null, { statusCode, data, message });
	} catch (e) {
		console.log("Adapters: queueDelete", { error: e.toString() });
		done(null, { statusCode: 500, error: InternalError });
	}
}

async function Update(job, done) {
	try {
		const { name, age, color, id } = job.data;
		const { statusCode, data, message } = await Services.Update({
			name,
			age,
			color,
			id,
		});
		done(null, { statusCode, data, message });
	} catch (e) {
		console.log("Adapters: queueCreate", { error: e.toString() });
		done(null, { statusCode: 500, error: InternalError });
	}
}

async function FindOne(job, done) {
	try {
		const { id } = job.data;
		const { statusCode, data, message } = await Services.FindOne({ id });
		done(null, { statusCode, data, message });
	} catch (e) {
		console.log("Adapters: queueFindOne", { error: e.toString() });
		done(null, { statusCode: 500, error: InternalError });
	}
}

async function Delete(job, done) {
	try {
		const { id } = job.data;
		let { statusCode, data, message } = await Services.Delete({ id });
		done(null, { statusCode, data, message });
	} catch (e) {
		console.log("Adapters: queueDelete", { error: e.toString() });
		done(null, { statusCode: 500, error: InternalError });
	}
}

async function run() {
	try {
		queueView.process(View);
		queueCreate.process(Create);
		queueFindOne.process(FindOne);
		queueUpdate.process(Update);
		queueDelete.process(Delete);
	} catch (error) {
		console.log(error);
	}
}

module.exports = { View, Delete, FindOne, Update, Create, run };
