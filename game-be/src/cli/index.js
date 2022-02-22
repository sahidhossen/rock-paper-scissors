const { createPromptModule } = require('inquirer');
const { DICES } = require('../constants');
const GameService = require('../services/gameService');

class CLIGame {
	constructor() {
		this.prompt = new createPromptModule();
		this.gameService = new GameService();
		this.result = {
			player1: {
				win: 0,
				loose: 0,
			},
			player2: {
				win: 0,
				loose: 0,
			},
			tie: 0,
			rounds: 0,
		};
	}

	async startGame() {
		const answer = await this.prompt({
			type: 'confirm',
			name: 'game_start',
			message: 'New Game ?',
		});
		if (answer.game_start !== true) {
			console.log('Bye');
			process.exit();
		}
		this.chooseGameType();
	}

	async chooseGameType() {
		const answer = await this.prompt({
			type: 'list',
			name: 'game_option',
			message: 'Please choose one.',
			choices: [
				{ name: 'Player vs Computer', value: 'player_vs_computer' },
				{ name: 'Computer vs Computer', value: 'computer_vs_computer' },
			],
		});
		this.initiateGameingBoard(answer.game_option);
	}

	async initiateGameingBoard(gameOption) {
		const state = {
			player1: null,
			label1: '',
			player2: null,
			label2: 'Computer',
		};
		if (gameOption === 'player_vs_computer') {
			state.player1 = await this.getUserMove();
			state.label1 = 'Human';
		}
		if (gameOption === 'computer_vs_computer') {
			state.player1 = this.gameService.machineDecision();
			state.label1 = 'Computer 1';
			state.label2 = 'Computer 2';
		}
		const outcome = await this.gameService.processDecision(state.player1);

		state.player2 = outcome.computer_dice;

		this.result.rounds = this.result.rounds + 1;

		if (outcome.tie) {
			this.result.tie = this.result.tie + 1;
		} else {
			if (outcome.win === 1) {
				this.result.player1.win = this.result.player1.win + 1;
				this.result.player2.loose = this.result.player2.loose + 1;
			} else {
				this.result.player2.win = this.result.player2.win + 1;
				this.result.player1.loose = this.result.player1.loose + 1;
			}
		}
		this.viewResult(this.result, state);
		this.startGame();
	}

	async getUserMove() {
		const answer = await this.prompt({
			type: 'list',
			name: 'move',
			message: 'Choose your move.',
			choices: [
				{ name: 'Rock', value: DICES.ROCK },
				{ name: 'Paper', value: DICES.PAPER },
				{ name: 'Scissors', value: DICES.SECISSOR },
			],
		});
		return answer.move;
	}

	viewResult(result, state) {
		console.log(`\n====${state.label1} VS ${state.label2}====\n`);
		console.log(`==== ROUND:${result.rounds} TIE:${result.tie} =====`);
		console.log(`
    Player: ${state.label1} choose ${state.player1} \n
      Win: ${result.player1.win} Loose: ${result.player1.loose} \n
    Player: ${state.label2} choose ${state.player2} \n
      Win: ${result.player2.win} Loose: ${result.player2.loose} \n
    `);
	}
}

const newGame = new CLIGame();

newGame.startGame();
