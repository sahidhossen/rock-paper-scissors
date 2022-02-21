import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DICES } from '../../constants';
import { fetchApi, delay } from '../../utils';
import { useActions, storeType } from '../../store';

import Player from '../Player';
import PlayerState from '../PlayerState';

interface IGameState {
	player_1: string;
	player_2: string;
}

const GamingBoard = () => {
	const [gameState, setGameState] = useState<IGameState>({ player_1: DICES.ROCK, player_2: DICES.SECISSOR });

	const { pending_decision, gaming_rule, player_1, player_2, tie, start } = useSelector(
		(store: storeType) => store.game,
	);

	const { PendingDecision, UpdateGamingRule, UpdateScore, UpdateTie } = useActions();

	const processDecision = async (dice: string) => {
		const response = await fetchApi(`/game/decision?dice=${dice}`);

		if (response.success) {
			const {
				result: { win, tie: tieResult, computer_dice },
			} = response;
			await delay(1500);
			PendingDecision(false);
			setGameState({ player_1: dice, player_2: computer_dice });
			if (tieResult) {
				UpdateTie();
			} else {
				const winner = win === 1 ? player_1 : player_2;
				UpdateScore({ player: win, win: winner.win + 1, loose: winner.loose });
			}
		}
	};

	const onSelect = (dice: string) => {
		if (start && gaming_rule === 1) {
			PendingDecision(true);
			processDecision(dice);
		}
	};

	const onMachineDecision = async () => {
		if (start && gaming_rule === 2) {
			const response = await fetchApi(`/game/machine-decision`);
			PendingDecision(true);
			processDecision(response.dice);
		}
	};

	const onSelectRule = (rule: number) => {
		UpdateGamingRule(rule);
	};

	return (
		<div className={`gaming-board d-flex ${!start && 'game-loading'}`}>
			<Player
				playerNumber={1}
				isPending={pending_decision}
				point={player_1.win}
				playerState={gameState.player_1}
				gamingRule={gaming_rule}
				onSelect={onSelect}
			/>
			<PlayerState
				tie={tie}
				start={start}
				gamingRule={gaming_rule}
				onStart={onMachineDecision}
				selectRule={onSelectRule}
			/>
			<Player
				playerNumber={2}
				gamingRule={gaming_rule}
				isPending={pending_decision}
				point={player_2.win}
				playerState={gameState.player_2}
			/>
		</div>
	);
};

export default GamingBoard;
