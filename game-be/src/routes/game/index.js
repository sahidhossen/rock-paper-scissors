const { Router } = require('express');
const GameService = require('../../services/gameService');

const router = Router();

router.get('/decision', async (req, res) => {
	try {
		return res.json({ success: true, result: [] });
	} catch (err) {
		return res.json({ success: false, message: err });
	}
});

module.exports = router;
