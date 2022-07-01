const { SyncDB } = require("./Models");
const { run } = require("./Adapters/processor");

module.exports = { SyncDB, run };
