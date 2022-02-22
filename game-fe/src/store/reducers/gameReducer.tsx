import { AnyAction } from 'redux';
import { GAMING_RULES, ACTION_TYPES } from '../../constants';

export const initialState = {
	start: false,
	rounds: 0,
	tie: 0,
	pending_decision: false,
	gaming_rule: GAMING_RULES.human_vs_computer,
	player_1: {
		win: 0,
		loose: 0,
	},
	player_2: {
		win: 0,
		loose: 0,
	},
};

const gameReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case ACTION_TYPES.INITIATE_GAME: {
			return { ...state, start: true };
		}
		case ACTION_TYPES.UPDATE_GAMING_RULE: {
			return { ...state, gaming_rule: action.payload };
		}
		case ACTION_TYPES.UPDATE_SCORE: {
			const { player, win, loose } = action.payload;
			const playerKey = player === 1 ? 'player_1' : 'player_2';
			return { ...state, rounds: state.rounds + 1, [playerKey]: { ...state[playerKey], win, loose } };
		}
		case ACTION_TYPES.UPDATE_TIE: {
			return { ...state, tie: state.tie + 1, rounds: state.rounds + 1 };
		}
		case ACTION_TYPES.UPDATE_DECISION: {
			return { ...state, pending_decision: action.payload };
		}
		default:
			return state;
	}
};

export default gameReducer;
