import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import GamingBoard from './components/GamingBoard';
import { storeType, useActions } from './store';
import './App.css';

const App = () => {
	const { rounds } = useSelector((store: storeType) => store.game);
	const { InitiateGame } = useActions();

	useEffect(() => {
		setTimeout(() => {
			// Initially load game ager 2 second
			InitiateGame();
		}, 2000);
	});
	return (
		<div className="container-full">
			<Header />
			<div className="container">
				<h3 className="rounds-title" data-test="rounds">
					Rounds {rounds}
				</h3>
				<GamingBoard />
			</div>
		</div>
	);
};
export default App;
