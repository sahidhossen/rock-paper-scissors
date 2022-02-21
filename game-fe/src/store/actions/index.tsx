import { Dispatch, AnyAction } from 'redux';
import { ACTION_TYPES } from '../../constants';

export const InitiateGame = () => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: ACTION_TYPES.INITIATE_GAME, payload: true });
	};
};

export const UpdateGamingRule = (payload: number) => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: ACTION_TYPES.UPDATE_GAMING_RULE, payload });
	};
};

type UpdateScorePayload = {
	player: number;
	win: number;
	loose: number;
};

export const UpdateScore = (payload: UpdateScorePayload) => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: ACTION_TYPES.UPDATE_SCORE, payload });
	};
};

export const UpdateTie = () => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: ACTION_TYPES.UPDATE_TIE });
	};
};

export const PendingDecision = (payload: boolean) => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: ACTION_TYPES.UPDATE_DECISION, payload });
	};
};
