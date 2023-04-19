import React, { ReactElement } from 'react'
import container from 'styles/Container.module.css';
import styles from './Field.module.css';
import Piece from 'gameEntities/Piece';
import { ClassPiece } from 'gameEntities/entities/ClassPiece';
import { useGameContext } from 'contexts/game';

interface FieldProps{
    id: string;
    line: number;
    color: string;
    piece?: ClassPiece;
    placeable: boolean;
}

export default function Field({id, line, color,piece, placeable}: FieldProps) {
    if(placeable){
        console.log(id);
    }
    const {board, setBoard} = useGameContext();

    const showPossibleMoves = () =>{
        const copyBoard = [...board];
        piece?.possibleMoves.forEach(moveField =>{
            const place = copyBoard.find(field => field.id === moveField.id);
            if(place){
                place.placeable = true;
            }
        });
        setBoard([...copyBoard]);
        console.log(piece?.possibleMoves);
    }

    const pieceElement = piece? <Piece piece={piece}/> : <></>
    return (
        <li 
            onClick={() => {
                console.log(piece?.pieceId);
                showPossibleMoves();
            }} 
            id={id} 
            className={`
                ${container.containerH} 
                ${styles.fieldBlack} ${styles[color]} 
                ${placeable? styles.placeable: ''} `}>

            {pieceElement}

        </li>
    )
}
