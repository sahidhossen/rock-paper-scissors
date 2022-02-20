import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import GamingBoard from './components/GamingBoard';
import { storeType } from './store';
import './App.css';

const App = () => {
	const { rounds } = useSelector((store: storeType) => store.game);
	console.log('working');
	return (
		<div className="container-full">
			<Header />
			<div className="container">
				<h3 className="rounds-title">Rounds {rounds} </h3>
				<GamingBoard />
			</div>
		</div>
	);
};
export default App;
