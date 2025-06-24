import React, {useContext, createContext, useState, useEffect} from "react";
import type {Color} from "../types/color.ts";

type GameContextType = {
	isPlaying: boolean;
	sequence: Color[];
	playerInput: Color[];
	nextPlayerInput: (color: Color) => void;
	startGame: () => void;
	result: number;
	isShowingSequence: boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined)

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isShowingSequence, setIsShowingSequence] = useState(false);
	const [sequence, setSequence] = useState<Color[]>([]);
	const [playerInput, setPlayerInput] = useState<Color[]>([]);
	const [result, setResult] = useState<number>(0);
	
	useEffect(() => {
		if (sequence.length > 0 && isPlaying) {
			playSequence(sequence).catch(console.error);
		}
	}, [sequence, isPlaying]);
	
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
	}
	
	const playSequence = async (seq: Color[]) => {
		setIsShowingSequence(true);
		for (const color of seq) {
			console.log("Show:", color);
			await new Promise(res => setTimeout(res, 1000));
		}
		setIsShowingSequence(false);
	}
	
	const nextPlayerInput = (color: Color) => {
		if (!isPlaying || isShowingSequence) return;
		
		const nextInput = [...playerInput, color];
		setPlayerInput(nextInput);
		
		const currentStep = nextInput.length - 1;
		if (sequence[currentStep] !== color) {
			setIsPlaying(false);
			setResult(0);
			return;
		}
		
		if (nextInput.length === sequence.length) {
			const nextColor = randomColor();
			const newSequence = [...sequence, nextColor];
			setTimeout(() => {
				setSequence(newSequence);
				setPlayerInput([]);
				setResult(newSequence.length - 1);
			}, 500);
		}
	}
	
	return (
		<GameContext.Provider
			value={{isPlaying, sequence, startGame, playerInput, nextPlayerInput, result, isShowingSequence}}>
			{children}
		</GameContext.Provider>
	)
}

export const useGame = () => {
	const context = useContext(GameContext);
	if (!context) throw new Error('useGame must be used within the context');
	return context;
}
