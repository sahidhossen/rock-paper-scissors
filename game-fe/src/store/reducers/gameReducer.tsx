import { AnyAction } from 'redux';

const initialState = {
	start: false,
	rounds: 0,
	tie: 0,
	pending_decision: false,
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
		case 'INITIATE_GAME': {
			return { ...state, state: action.payload };
		}
		case 'UPDATE_SCORE': {
			const { player, win, loose } = action.payload;
			console.log('UPDATE STORE: ', action.payload);
			const playerKey = player === 1 ? 'player_1' : 'player_2';
			return { ...state, rounds: state.rounds + 1, [playerKey]: { ...state[playerKey], win, loose } };
		}
		case 'UPDATE_TIE': {
			return { ...state, tie: state.tie + 1 };
		}
		case 'UPDATE_DECISION': {
			return { ...state, pending_decision: action.payload };
		}
		default:
			return state;
	}
};

export default gameReducer;
