import './App.module.scss'
import GameBoard from "../GameBoard/GameBoard.tsx";
import {GameProvider} from "../../ctx/GameContext.tsx";
import StartButton from "../StartButton/StartButton.tsx";
import Result from "../Result/Result.tsx";

function App() {
	return (
		<GameProvider>
			<h1>Simon Game</h1>
			<Result/>
			<GameBoard/>
			<StartButton/>
		</GameProvider>
	)
}

export default App
