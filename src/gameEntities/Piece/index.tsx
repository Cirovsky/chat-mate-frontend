import {
    FaChessPawn as Pawn,
    FaChessRook as Rook,
    FaChessKnight as Knight,
    FaChessBishop as Bishop,
    FaChessQueen as Queen,
    FaChessKing as King

} from 'react-icons/fa';

import pieceStyle from './Piece.module.css';
import { ClassPiece } from 'gameEntities/entities/ClassPiece';

export interface IPieceProps {
    piece: ClassPiece;
}

export default function Piece({ piece }: IPieceProps) {
    if (piece.type === 'pawn') {
        return (
            <>
                <Pawn
                    className={pieceStyle.piece}
                    fill={piece.color}
                    stroke={piece.color === 'black' ? 'white' : 'black'} strokeWidth='12px' />
            </>
        )

    } else if (piece.type === 'rook') {
        return (
            <>
                <Rook
                    className={pieceStyle.piece}
                    fill={piece.color}
                    stroke={piece.color === 'black' ? 'white' : 'black'} strokeWidth='12px' />
            </>
        )
    } else if (piece.type === 'knight') {
        return (
            <>
                <Knight
                    className={pieceStyle.piece}
                    fill={piece.color}
                    stroke={piece.color === 'black' ? 'white' : 'black'} strokeWidth='12px' />
            </>
        )
    } else if (piece.type === 'bishop') {
        return (
            <>
                <Bishop
                    className={pieceStyle.piece}
                    fill={piece.color}
                    stroke={piece.color === 'black' ? 'white' : 'black'} strokeWidth='12px' />
            </>
        )
    } else if (piece.type === 'queen') {
        return (
            <>
                <Queen
                    className={pieceStyle.piece}
                    fill={piece.color}
                    stroke={piece.color === 'black' ? 'white' : 'black'} strokeWidth='12px' />
            </>
        )
    } else if (piece.type === 'king') {
        return (
            <>
                <King
                    className={pieceStyle.piece}
                    fill={piece.color}
                    stroke={piece.color === 'black' ? 'white' : 'black'} strokeWidth='12px' />
            </>
        )
    }

    return <></>;

}
