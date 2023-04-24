import { IField } from "common/IField";
import { ClassPiece } from "./ClassPiece";
import { filterArrayMovesDiagonal } from "./CLassBishop";
import { filterArrayMovesHorizontal, filterArrayMovesVertical } from "./ClassRook";

export class ClassQueen extends ClassPiece{
    constructor(type: string, color: string, position: string){
        super(type, color, position)
    }

    getPossibleMoves(board: Array<IField>) {
        const position = this.position;
        let [letter, line] = position.split("");
        const column: number = letter.charCodeAt(0) - 96;
        const line2 = Number(line);
        this.possibleMoves = checkPossibleMovesQueen(this.color, column, line2, board);

        function checkPossibleMovesQueen(color: string, column: number, line: number, board: Array<IField>) {

            let possibleMoves: Array<IField> = [];
            const position: string = "" + String.fromCharCode(column + 96);
            possibleMoves = checkDirectionsQueen(board, position, column, line, color);

            return possibleMoves;
        }

        function checkDirectionsQueen(
            moveArray: Array<IField>, 
            position: string, 
            column: number, 
            line: number, 
            color: string) {
                
            let moveFiltered: Array<IField> = [];


            moveFiltered = [...filterArrayMovesVertical(moveArray, position, line, color), 
                ...filterArrayMovesHorizontal(moveArray, column, line, color), 
                ...filterArrayMovesDiagonal(moveArray, column, line, color)]

            return moveFiltered;
        }

    }
}