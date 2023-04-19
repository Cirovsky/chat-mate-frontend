import { IField } from "common/IField";
import { ClassPiece } from "./ClassPiece";

export class ClassPawn extends ClassPiece {

    constructor(type: string, color: string, position: string) {
        super(type, color, position)
    }
    getPossibleMoves(board: Array<IField>) {
        const position = this.position;
        const [column, line] = position.split("");
        //const totalBoard = board.map(field => false);
        const newBoard = [...board];
        this.possibleMoves = checkPossibleMovesPawn(this.color, column, line, board);

        function checkPossibleMovesPawn(color: string, column: string, line: string, board: Array<IField>) {

            let possibleMoves: Array<IField> = [];

            const moveF1: number = color === 'white' ? 1 : -1;
            const moveF2: number = color === 'white' ? 2 : -2;

            if (line === '2' || line === '7') {
                const move1 = "" + column + (Number(line) + moveF1);
                const move2 = "" + column + (Number(line) + moveF2);
                const fieldMove: Array<IField> = newBoard.filter(field => field.id === move1 || field.id === move2);
                possibleMoves = [...fieldMove];
            } else {
                const move1 = "" + column + (Number(line) + moveF1);
                const fieldMove: Array<IField> = newBoard.filter(field => field.id === move1);
                possibleMoves = [...fieldMove];
            }
                        
            return possibleMoves;
        }
    }
}