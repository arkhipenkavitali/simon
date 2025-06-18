import React from 'react';
import GameButton from "../GameButton/GameButton.tsx";
import styles from "./GameBoard.module.scss";

const GameBoard: React.FC = () => {
	return (
		<div className={styles.gameBoard}>
			<GameButton color="green"/>
			<GameButton color="red"/>
			<GameButton color="yellow"/>
			<GameButton color="blue"/>
		</div>
	);
};

export default GameBoard;
