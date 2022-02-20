import React, { MouseEvent } from 'react';
import PlayerSign from '../PlayerSign';
import { RockIcon, PaperIcon, ScissorsIcon } from './icons';
import './player-style.css';

type playerProps = {
	playerNumber: number;
	point: number;
	playerState: string;
	isPending: boolean;
	label?: string;
	onSelect?: (control: string, player: number) => void;
};

const Player = (props: playerProps) => {
	const { isPending = false, playerNumber = 1, point = 0, playerState = 'rock', label = 'Win', onSelect } = props;

	const onSelectControl = (control: string) => (event: MouseEvent<HTMLButtonElement>) => {
		onSelect?.(control, playerNumber);
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
			{playerNumber === 1 && (
				<div className="gaming-controls">
					<span className="rock-icon icon" role="button" onClick={onSelectControl('rock')}>
						<RockIcon />
					</span>
					<span className="paper-icon icon" role="button" onClick={onSelectControl('paper')}>
						<PaperIcon />
					</span>
					<span className="scissors-icon icon" role="button" onClick={onSelectControl('secissors')}>
						<ScissorsIcon />
					</span>
				</div>
			)}
		</div>
	);
};

export default Player;
