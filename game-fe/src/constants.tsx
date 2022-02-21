export const BASE_URL = 'http://localhost:6001/api';

export const ACTION_TYPES = {
	INITIATE_GAME: 'INITIATE_GAME',
	UPDATE_GAMING_RULE: 'UPDATE_GAMING_RULE',
	UPDATE_SCORE: 'UPDATE_SCORE',
	UPDATE_TIE: 'UPDATE_TIE',
	UPDATE_DECISION: 'UPDATE_DECISION',
};

export const GAMING_RULES = {
	human_vs_computer: 1,
	computer_vs_computer: 2,
};

export const DICES = {
	ROCK: 'rock',
	PAPER: 'paper',
	SECISSOR: 'secissor',
};
