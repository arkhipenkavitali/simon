import './App.module.scss'
import GameBoard from "../GameBoard/GameBoard.tsx";
import {GameProvider} from "../../ctx/GameContext.tsx";
import StartButton from "../StartButton/StartButton.tsx";

function App() {
	
	return (
		<GameProvider>
			<h1>Simon Game</h1>
			<GameBoard/>
			<StartButton/>
		</GameProvider>
	)
}

export default App
