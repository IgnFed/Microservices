const { DataTypes } = require("sequelize");
const { sequelize } = require("../settings");

const Model = sequelize.define("curso", {
	name: { type: DataTypes.STRING },
	age: { type: DataTypes.BIGINT },
	color: { type: DataTypes.STRING },
});

async function SyncDB() {
	try {
		await Model.sync({ logging: false });
		return { statusCode: 200, data: "ok" };
	} catch (error) {
		console.log({ step: "Models: SyncDB", error: error.toString() });
		return { statusCode: 500, message: error.toString() };
	}
}

module.exports = { Model, SyncDB };
