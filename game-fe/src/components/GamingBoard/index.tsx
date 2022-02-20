import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchApi } from '../../utils';
import { actions, storeType } from '../../store';

import Player from '../Player';
import PlayerState from '../PlayerState';

interface IGameState {
	player_1: string;
	player_2: string;
}

const GamingBoard = () => {
	const [gameState, setGameState] = useState<IGameState>({ player_1: 'rock', player_2: 'secissors' });
	const dispatch = useDispatch();

	const { pending_decision, player_1, player_2 } = useSelector((store: storeType) => store.game);

	const { PendingDecision, UpdateScore } = bindActionCreators(actions, dispatch);

	const processDecision = async (player: number) => {
		setTimeout(() => {
			PendingDecision(false);
			UpdateScore({ player, win: player_1.win + 1, loose: 0 });
		}, 1500);
	};

	const onSelect = (control: string, player: number) => {
		const key = player === 1 ? 'player_1' : 'player_2';
		setGameState({ ...gameState, [key]: control });
		PendingDecision(true);
		processDecision(player);
	};

	return (
		<div className="gaming-board d-flex">
			<Player
				playerNumber={1}
				isPending={pending_decision}
				point={player_1.win}
				playerState={gameState.player_1}
				onSelect={onSelect}
			/>
			<PlayerState tie={0} />
			<Player playerNumber={2} isPending={pending_decision} point={player_2.win} playerState={gameState.player_2} />
		</div>
	);
};

export default GamingBoard;
