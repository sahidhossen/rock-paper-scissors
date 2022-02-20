import React from 'react';
import './style.css';

type playerSign = {
	sign: String;
	className?: string;
};

const PlayerSign = ({ sign = 'rock', className = '' }: playerSign) => {
	return (
		<div className="player-sign-container">
			<div className={`player-sign sign-${sign} ${className}`}></div>
		</div>
	);
};

export default PlayerSign;
