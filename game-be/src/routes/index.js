const { Router } = require('express');
const router = Router();

const Game = require('./game');

router.use('/game', Game);

module.exports = router;
