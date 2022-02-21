import React, { MouseEvent } from 'react';
import { DICES } from '../../constants';
import PlayerSign from '../PlayerSign';
import { RockIcon, PaperIcon, ScissorsIcon } from './icons';
import './player-style.css';

type playerProps = {
	playerNumber: number;
	point: number;
	playerState: string;
	isPending: boolean;
	gamingRule: number;
	label?: string;
	onSelect?: (control: string) => void;
};

const Player = (props: playerProps) => {
	const { isPending = false, gamingRule, playerNumber = 1, point = 0, playerState, label = 'Win', onSelect } = props;

	const onSelectControl = (control: string) => (event: MouseEvent<HTMLButtonElement>) => {
		onSelect?.(control);
	};

	const classNames = isPending ? 'player-position pending-decision' : 'player-position';

	return (
		<div className={`player-${playerNumber} flex-1`}>
			<div className="game-label">
				<span className="label">{label}</span>
				<span className="number">{point}</span>
			</div>
			<div className={classNames}>
				<PlayerSign sign={playerState} />
			</div>
			{playerNumber === 1 && gamingRule === 1 && (
				<div className="gaming-controls">
					<span className="rock-icon icon" role="button" onClick={onSelectControl(DICES.ROCK)}>
						<RockIcon />
					</span>
					<span className="paper-icon icon" role="button" onClick={onSelectControl(DICES.PAPER)}>
						<PaperIcon />
					</span>
					<span className="scissors-icon icon" role="button" onClick={onSelectControl(DICES.SECISSOR)}>
						<ScissorsIcon />
					</span>
				</div>
			)}
		</div>
	);
};

export default Player;
