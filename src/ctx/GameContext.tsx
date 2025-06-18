import React, {useContext, createContext, useState} from "react";

type GameContextType = {
	isPlaying: boolean;
	setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

const GameContext = createContext<GameContextType | undefined>(undefined)

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
	const [isPlaying, setIsPlaying] = useState(false);
	
	return (
		<GameContext.Provider value={{isPlaying, setIsPlaying}}>
			{children}
		</GameContext.Provider>
	)
}

export const useGame = () => {
	const context = useContext(GameContext);
	if (!context) throw new Error('useGame must be used within the context');
	return context;
}
