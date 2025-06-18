import React from 'react';

type Props = {
	color: "red" | "green" | "yellow" | "blue";
}

const GameButton: React.FC<Props> = ({color}) => {
	return (
		<div style={{ backgroundColor: color }}>
			button
		</div>
	);
};

export default GameButton;
