import React, {ReactElement, createContext, useContext, useState} from 'react';
import { boardInit } from 'common/boardInit';
import { IField } from 'common/IField';


type Context = Array<IField>;

type PropsUseContext = {
    board: Context;
    setBoard: React.Dispatch<React.SetStateAction<Array<IField>>>
    check: boolean;
    setCheck: React.Dispatch<React.SetStateAction<boolean>>
}

interface GameContextProviderProps{
    children: ReactElement;
}

const DEFAULT_VALUE ={
    board:[...boardInit],
    setBoard: () => {},
    check: false,
    setCheck: () => {}
};

export const GameContext = createContext<PropsUseContext>(DEFAULT_VALUE);

export const GameContextProvider = ({children}:GameContextProviderProps) =>{
    const [board, setBoard] = useState(DEFAULT_VALUE.board);
    const [check, setCheck] = useState(DEFAULT_VALUE.check)

    return(
        <GameContext.Provider value={{board, setBoard, check, setCheck}}>
        {children}
        </GameContext.Provider>
    )
}

export const useGameContext = () =>{
    const {board, setBoard, check, setCheck} = useContext(GameContext);
    return{
        board,
        setBoard,
        check,
        setCheck
    }
}
