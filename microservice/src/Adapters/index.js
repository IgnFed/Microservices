const bull = require("bull");

const { redis } = require("../settings");

const opts = {
	redis,
};

const queueCreate = bull("curso:create", opts);
const queueUpdate = bull("curso:update", opts);
const queueDelete = bull("curso:delete", opts);
const queueFindOne = bull("curso:findOne", opts);
const queueView = bull("curso:view", opts);

module.exports = {
	queueView,
	queueCreate,
	queueDelete,
	queueFindOne,
	queueUpdate,
};
