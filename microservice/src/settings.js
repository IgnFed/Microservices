const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");

dotenv.config();

const redis = {
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_PORT,
};

const db = {
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	database: process.env.POSTGRES_DB,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
};

console.log({ redis, db });

const InternalError = "No podemos procesar su solicitud en este momento.";

const sequelize = new Sequelize({ ...db, dialect: "postgres" });

module.exports = { redis, InternalError, sequelize };
