const { Router } = require('express');
const GameService = require('../../services/gameService');
const { gameDecisionSchema } = require('./schema-validator');

const router = Router();

router.get('/machine-decision', (req, res) => {
	try {
		const game = new GameService();
		const dice = game.machineDecision();
		return res.send({ success: true, dice });
	} catch (err) {
		return res.send({ success: false, message: err });
	}
});

router.get('/decision', gameDecisionSchema, async (req, res) => {
	try {
		const game = new GameService();
		const dice = req.query.dice;
		const result = await game.processDecision(dice);
		return res.send({ success: true, result });
	} catch (err) {
		return res.send({ success: false, message: err });
	}
});

module.exports = router;
