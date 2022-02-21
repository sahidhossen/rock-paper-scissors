const { DICES } = require('../constants');
class GameService {
	constructor() {
		this.dices = Object.values(DICES);
		this.combination = {
			rock_paper: DICES.PAPER,
			rock_secissor: DICES.ROCK,
			paper_secissor: DICES.SECISSOR,
		};
	}

	machineDecision() {
		return this.dices[Math.floor(Math.random() * this.dices.length)];
	}

	async processDecision(player1) {
		const player2 = this.machineDecision();
		const key = `${player1}_${player2}`;
		const rkey = `${player2}_${player1}`;
		const result = {
			win: -1,
			tie: false,
			computer_dice: player2,
		};
		const winner = this.combination[key] || this.combination[rkey];
		if (winner) {
			result.win = player1 === winner ? 1 : 2;
		} else {
			result.tie = true;
		}
		return result;
	}
}

module.exports = GameService;
