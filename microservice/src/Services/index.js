const Controllers = require("../Controllers");

async function Create({ name, age, color }) {
	try {
		const { statusCode, message, data } = await Controllers.Create({
			name,
			age,
			color,
		});
		return { statusCode, message, data };
	} catch (error) {
		console.log({ step: "Services: Create", message: error.toString() });
		return { statusCode: 500, message: error.toString() };
	}
}

async function FindOne(where = {}) {
	try {
		const { statusCode, message, data } = await Controllers.FindOne({
			where,
		});
		return { statusCode, message, data };
	} catch (error) {
		console.log({ step: "Services: FindOne", message: error.toString() });
		return { statusCode: 500, message: error.toString() };
	}
}

async function Update({ name, age, color, id }) {
	try {
		const { statusCode, message, data } = await Controllers.Update({
			name,
			age,
			color,
			id,
		});
		return { statusCode, message, data };
	} catch (error) {
		console.log({ step: "Services: Update", message: error.toString() });
		return { statusCode: 500, message: error.toString() };
	}
}

async function Delete(where = {}) {
	try {
		const { statusCode, message, data } = await Controllers.Delete(where);
		return { statusCode, message, data };
	} catch (error) {
		console.log({ step: "Services: Delete", message: error.toString() });
		return { statusCode: 500, message: error.toString() };
	}
}

async function View() {
	try {
		const { statusCode, message, data } = await Controllers.View({});
		return { statusCode, message, data };
	} catch (error) {
		console.log({ step: "Services: View", message: error.toString() });
		return { statusCode: 500, message: error.toString() };
	}
}
module.exports = { Create, FindOne, Delete, Update, View };
