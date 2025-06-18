import {useGame} from "../../ctx/GameContext.tsx";

const StartButton = () => {
	const {isPlaying, setIsPlaying} = useGame();
	
	const startGame = () => {
		console.log(isPlaying);
		setIsPlaying(!isPlaying);
	}
	
	return (
		<button className="button" onClick={startGame} disabled={isPlaying}>{isPlaying ? "Stop" : "Start"}</button>
	);
};

export default StartButton;
