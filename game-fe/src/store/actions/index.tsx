import { Dispatch, AnyAction } from 'redux';

export const InitiateGame = () => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: 'INITIATE_GAME', payload: true });
	};
};

type UpdateScorePayload = {
	player: number;
	win: number;
	loose: number;
};

export const UpdateScore = (payload: UpdateScorePayload) => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: 'UPDATE_SCORE', payload });
	};
};

export const UpdateTie = () => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: 'UPDATE_TIE' });
	};
};

export const PendingDecision = (payload: boolean) => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: 'UPDATE_DECISION', payload });
	};
};
