import {useGame} from "../../ctx/GameContext.tsx";

const Result = () => {
	const {result} = useGame();
	return (
		<p>{result}</p>
	);
};

export default Result;
