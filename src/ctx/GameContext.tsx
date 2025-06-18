import React, {useContext, createContext, useState} from "react";
import type {Color} from "../types/color.ts";

type GameContextType = {
	isPlaying: boolean;
	sequence: Color[];
	playerInput: Color[];
	nextPlayerInput: (color: Color) => void;
	startGame: () => void;
	result: number;
}

const GameContext = createContext<GameContextType | undefined>(undefined)

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [sequence, setSequence] = useState<Color[]>([]);
	const [playerInput, setPlayerInput] = useState<Color[]>([]);
	const [result, setResult] = useState<number>(0);
	
	const randomColor = () => {
		const colors: Color[] = ["red", "blue", "green", "yellow"];
		return colors[Math.floor(Math.random() * colors.length)];
	}
	
	const startGame = () => {
		setIsPlaying(true);
		const first = randomColor();
		setSequence([first]);
		setPlayerInput([]);
		setResult(0);
		console.log('Round 1:', first);
	}
	
	const nextPlayerInput = (color: Color) => {
		if (!isPlaying) return;
		
		const nextInput = [...playerInput, color];
		setPlayerInput(nextInput);
		
		if (sequence[nextInput.length - 1] !== color) {
			setIsPlaying(false);
			setResult(0);
			return;
		}
		
		if (nextInput.length === sequence.length) {
			const nextColor = randomColor();
			setSequence(prev => [...prev, nextColor]);
			setPlayerInput([]);
			setResult(sequence.length);
			console.log('Round next:', nextColor, sequence);
		}
	}
	
	return (
		<GameContext.Provider value={{isPlaying, sequence, startGame, playerInput, nextPlayerInput, result}}>
			{children}
		</GameContext.Provider>
	)
}

export const useGame = () => {
	const context = useContext(GameContext);
	if (!context) throw new Error('useGame must be used within the context');
	return context;
}
