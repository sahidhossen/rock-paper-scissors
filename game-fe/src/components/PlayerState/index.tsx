import React from 'react';
import './playerstate-style.css';

type playerState = {
	tie: Number;
};

const PlayerState = ({ tie = 0 }: playerState) => {
	return (
		<div className="gaming-state flex-1">
			<div className="game-label">
				<span className="label">Tie</span>
				<span className="number">{tie}</span>
			</div>
			<div className="player-status">
				<h3>Round </h3>
			</div>
		</div>
	);
};

export default PlayerState;
