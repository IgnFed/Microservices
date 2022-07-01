const { Model } = require("../Models");

async function Create({ name, age, color }) {
	try {
		const instance = await Model.create(
			{ name, age, color },
			{ fields: ["name", "age", "color"], logging: false }
		);
		return { statusCode: 200, data: instance.toJSON() };
	} catch (error) {
		console.log({ step: "Controllers: Create", error: error.toString() });
		return { statusCode: 400, message: error.toString() };
	}
}

async function FindOne({ where = {} }) {
	try {
		const instance = await Model.findOne({ where, logging: false });
		return { statusCode: 200, data: instance.toJSON() };
	} catch (error) {
		console.log({ step: "Controllers: FindOne", error: error.toString() });
		return { statusCode: 500, message: error.toString() };
	}
}

async function Update({ name, age, color, id }) {
	try {
		const instances = await Model.update(
			{ name, age, color },
			{ where: { id }, returning: true, logging: false }
		);

		return { statusCode: 200, data: instances[1][0].toJSON() };
	} catch (error) {
		console.log({ step: "Controllers: Update", error: error.toString() });
		return { statusCode: 500, message: error.toString() };
	}
}

async function Delete(where = {}) {
	try {
		await Model.destroy({ where, logging: false });

		return { statusCode: 200, data: "OK" };
	} catch (error) {
		console.log({ step: "Controllers: Delete", error: error.toString() });
		return { statusCode: 400, message: error.toString() };
	}
}

async function View({ where = {} }) {
	try {
		const instances = await Model.findAll({ where, logging: false });

		return { statusCode: 200, data: instances };
	} catch (error) {
		console.log({ step: "Controllers: View", error: error.toString() });
		return { statusCode: 500, message: error.toString() };
	}
}

module.exports = { Create, FindOne, Update, Delete, View };
