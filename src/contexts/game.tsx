import {ReactElement, createContext, useContext, useState} from 'react';
import { boardInit } from 'common/boardInit';
import { IField } from 'common/IField';


type Context = Array<IField>;

type PropsUseContext = {
    board: Context;
    setBoard: React.Dispatch<React.SetStateAction<Array<IField>>>
}

interface GameContextProviderProps{
    children: ReactElement;
}

const DEFAULT_VALUE ={
    board:[...boardInit],
    setBoard: () => {},
};

export const GameContext = createContext<PropsUseContext>(DEFAULT_VALUE);

export const GameContextProvider = ({children}:GameContextProviderProps) =>{
    const [board, setBoard] = useState(DEFAULT_VALUE.board);
    return(
        <GameContext.Provider value={{board, setBoard}}>
        {children}
        </GameContext.Provider>
    )
}

export const useGameContext = () =>{
    const {board, setBoard} = useContext(GameContext);
    return{
        board,
        setBoard
    }
}
