const micro = require("./src");

async function main() {
	try {
		console.log("Vamos a inicializar la BD");
		const db = await micro.SyncDB();
		if (db.statusCode !== 200) throw db.message;
		console.log("Inicializada la BD");

		await micro.run();
		console.log("Inicializado el worker");
	} catch (error) {
		console.log(error);
	}
}

main();
