import React, { MouseEvent } from 'react';
import './playerstate-style.css';

type playerState = {
	tie: number;
	start: boolean;
	gamingRule: number;
	selectRule: (rule: number) => void;
	onStart?: () => void;
};

const PlayerState = ({ tie = 0, start, gamingRule, selectRule, onStart }: playerState) => {
	const onPlayStart = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		onStart?.();
	};
	const onSelectRules = (rule: number) => (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		if (rule !== gamingRule) {
			selectRule(rule);
		}
	};

	return (
		<div className="gaming-state flex-1">
			<div className="game-label">
				<span className="label">Tie</span>
				<span className="number">{tie}</span>
			</div>
			<div className="player-status">
				<h3>{start ? 'Started' : 'Loading...'}</h3>
				<div className="gaming-rules">
					<div className="group-btns">
						<a href="/#" className={`btn ${gamingRule === 1 && 'disabled'}`} onClick={onSelectRules(1)}>
							Com Vs Human
						</a>
						<a href="/#" className={`btn ${gamingRule === 2 && 'disabled'}`} onClick={onSelectRules(2)}>
							Com Vs Com
						</a>
					</div>
				</div>
				{gamingRule === 2 && (
					<a href="/#" className="play-btn" onClick={onPlayStart}>
						Play
					</a>
				)}
			</div>
		</div>
	);
};

export default PlayerState;
