import React, { ReactElement } from 'react'
import container from 'styles/Container.module.css';
import styles from './Field.module.css';
import Piece from 'gameEntities/Piece';
//import { ClassPiece } from 'gameEntities/entities/ClassPiece';
import { useGameContext } from 'contexts/game';
import { IField } from 'common/IField';

export default function Field({ id, column, line, color, piece, placeable, selected }: IField) {
    const { board, setBoard } = useGameContext();

    const showPossibleMoves = () => {
        const copyBoard = [...board];
        copyBoard.forEach(field => field.placeable = false);
        copyBoard.forEach(field => field.selected = false);
        if (piece) {
            if (!selected) {
                const selectedField = copyBoard.find(field => field.id === id);
                if(selectedField){
                    selectedField.selected = true;
                }
                piece.getPossibleMoves(copyBoard);
                piece.possibleMoves.forEach(moveField => {
                    const place = copyBoard.find(field => field.id === moveField.id);
                    if (place) {
                        place.placeable = true;
                    }
                });
            }else{
                const selectedField = copyBoard.find(field => field.selected === true);
                if(selectedField){
                    selectedField.selected = false;
                }
            }
        }
        setBoard([...copyBoard]);
    }

    const makeMove = () =>{
        const copyBoard = [...board];
        const goal = copyBoard.find(field => field.id === id);
        const origin = copyBoard.find(field => field.selected === true)
        if(goal && origin && goal.placeable){
            if(goal.piece){
                console.log(goal.piece)
                goal.piece = null;
            }
            goal.piece = origin.piece;
            if(goal.piece){
                goal.piece.position = id;
            }
            origin.piece = null;
            origin.selected = false;
            copyBoard.forEach(field => field.placeable = false);
        }
        setBoard([...copyBoard]);
    }

    const pieceElement = piece ? <Piece piece={piece} /> : <></>
    return (
        <li
            onClick={() => {
                if (piece && !placeable) {
                    showPossibleMoves();
                } else {
                    makeMove();
                }
            }}
            id={id}
            className={`
                ${container.containerH} 
                ${styles.fieldBlack} ${styles[color]} 
                ${placeable ? styles.placeable : ''} `}>

            {pieceElement}

        </li>
    )
}
