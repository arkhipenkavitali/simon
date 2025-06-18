import {useGame} from "../../ctx/GameContext.tsx";

const StartButton = () => {
	const {isPlaying, startGame} = useGame();
	
	return (
		<button className="button" onClick={startGame}
		        disabled={isPlaying}>{isPlaying ? "Stop" : "Start"}</button>
	);
};

export default StartButton;
