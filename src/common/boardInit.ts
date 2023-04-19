import { pieceCreator } from "gameEntities/entities/pieceCreator";
import { IField } from "./IField";
import { ClassPiece } from "gameEntities/entities/ClassPiece";

const boardInit = createCoordinates();

function createCoordinates() {
    let color: boolean = false;
    const newCoordinates: Array<IField> = [];
    for (let number = 8; number >= 1; number--) {
        if (number % 2 == 0) {
            color = false;
        } else {
            color = true;
        }
        for (let letter = 97; letter <= 104; letter++) {
            const field: IField = {
                id: `${String.fromCharCode(letter)}${number}`,
                line: number,
                color: color ? 'black' : 'white',
                placeable: false
            }
            color = !color;
            newCoordinates.push(field);
        }
    }

    return piecesInit(newCoordinates);
}

function piecesInit(board: IField[]) {
    const boardInit = board;
    board.forEach(field => {
        let piece:ClassPiece|null;
        const color = field.line === 8 || field.line === 7? "black": "white"
        if (field.line === 8 || field.line === 1) {
            const letter = field.id.split("")[0];
            if (letter === 'a' || letter === 'h') {
                piece = pieceCreator("rook", color, field.id)
                field.piece = piece;
            } else if (letter === 'b' || letter === 'g') {
                piece = pieceCreator("knight", color, field.id)
                field.piece = piece;
            }else if (letter === 'c' || letter === 'f') {
                piece = pieceCreator("bishop", color, field.id)
                field.piece = piece;
            }else if (letter === 'd') {
                piece = pieceCreator("queen", color, field.id)
                field.piece = piece;
            }else if(letter === 'e'){
                piece = pieceCreator("king", color, field.id);
                field.piece = piece;
            }
        }
        if(field.line === 7 || field.line === 2){
            piece = pieceCreator("pawn", color, field.id);
            field.piece = piece;
        }
    })

return board;
}

piecesInit(boardInit);

export {
    boardInit
}

/* export const coordinates:object[] = [
    {id: 'a8', classField: 'black'},{id: 'b8', classField: 'white'}
] */