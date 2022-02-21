const Joi = require('joi');
const { validateQueryRequest } = require('../../validation');
const { DICES } = require('../../constants');

const gameDecisionSchema = (req, res, next) => {
	const schema = Joi.object({
		dice: Joi.string()
			.valid(...Object.values(DICES))
			.required(),
	});
	validateQueryRequest(res, req, next, schema);
};

module.exports = {
	gameDecisionSchema,
};
