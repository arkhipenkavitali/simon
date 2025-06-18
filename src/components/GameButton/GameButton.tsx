import React from 'react';
import {useGame} from "../../ctx/GameContext.tsx";
import type {Color} from "../../types/color.ts";


type Props = {
	color: Color
}

const GameButton: React.FC<Props> = ({color}) => {
	const {isPlaying, nextPlayerInput} = useGame();
	return (
		<div style={{backgroundColor: color, opacity: isPlaying ? 1 : 0.5}} onClick={() => nextPlayerInput(color)}>
			button
		</div>
	);
};

export default GameButton;
