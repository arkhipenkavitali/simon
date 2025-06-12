import React from 'react';
import GameButton from "../GameButton/GameButton.tsx";

const GameBoard: React.FC = () => {
	return (
		<div>
			<GameButton />
			<GameButton />
			<GameButton />
			<GameButton />
		</div>
	);
};

export default GameBoard;
