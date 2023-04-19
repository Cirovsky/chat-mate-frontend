import { ClassBishop } from "./CLassBishop";
import { ClassKing } from "./ClassKing";
import { ClassKnight } from "./ClassKnight";
import { ClassPawn } from "./ClassPawn";
import { ClassPiece } from "./ClassPiece";
import { ClassQueen } from "./ClassQueen";
import { ClassRook } from "./ClassRook";

export const pieceCreator = (type: string, color: string, position: string ) =>{
    let piece:ClassPiece;
    switch(type){
        case('pawn'):
            piece = new ClassPawn(type, color, position);
            return piece;
        case('rook'):
            piece = new ClassRook(type, color, position);
            return piece;
        case('knight'):
            piece = new ClassKnight(type, color, position);
            return piece;
        case('bishop'):
            piece = new ClassBishop(type, color, position);
            return piece;
        case('queen'):
            piece = new ClassQueen(type, color, position);
            return piece;
        case('king'):
            piece = new ClassKing(type, color, position);
            return piece;
        default:
            piece = new ClassPawn(type, color, position);
            return piece;
    }
}