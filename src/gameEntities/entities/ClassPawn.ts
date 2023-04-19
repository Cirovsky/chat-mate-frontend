import { IField } from "common/IField";
import { ClassPiece } from "./ClassPiece";

export class ClassPawn extends ClassPiece {

    constructor(type: string, color: string, position: string) {
        super(type, color, position)
    }
    getPossibleMoves(board: Array<IField>) {
        const position = this.position;
        let [letter, line] = position.split("");
        const column: number = letter.charCodeAt(0) - 96;
        const line2 = Number(line)
        //const totalBoard = board.map(field => false);
        const newBoard = [...board];
        this.possibleMoves = checkPossibleMovesPawn(this.color, column, line2, board);

        function checkPossibleMovesPawn(color: string, column: number, line: number, board: Array<IField>) {

            let possibleMoves: Array<IField> = [];

            const moveF1: number = color === 'white' ? 1 : -1;
            const moveF2: number = color === 'white' ? 2 : -2;
            const positionColumn: string = "" + String.fromCharCode(column + 96);
            /* const leftColumn: string|null = position > 1? "" + String.fromCharCode((position - 1) +96): null;
            const rightColumn: string|null = position === 8? "" + String.fromCharCode((position + 1) +96): null; */

            if (line === 2 || line === 7) {
                const move1 = positionColumn + (line + moveF1);

                const move2 = positionColumn + (line + moveF2);

                const fieldMove: Array<IField> = newBoard.filter(field => field.id === move1 || field.id === move2);
                const captureMoves = checkMoveCapture(column, line, moveF1, color, newBoard)
                possibleMoves = [...fieldMove, ...captureMoves];
            } else {
                const move1 = positionColumn + (line + moveF1);
                const captureMoves = checkMoveCapture(column, line, moveF1, color, newBoard)
                const fieldMove: Array<IField> = newBoard.filter(field => field.id === move1);


                possibleMoves = [...fieldMove, ...captureMoves];
            }

            return possibleMoves;

        }

        function checkMoveCapture(position: number, line: number, move: number, color: string, board: Array<IField>) {

            const leftColumn: string | null = position > 1 ? "" + String.fromCharCode((position - 1) + 96) : null;
            const rightColumn: string | null = position !== 8 ? "" + String.fromCharCode((position + 1) + 96) : null;
            console.log(rightColumn)
            const leftcaptureMove: string | null = leftColumn ? leftColumn + (line + move) : null;
            const rightcaptureMove: string | null = rightColumn ? rightColumn + (line + move) : null;
            const captureMoves: Array<IField> = leftcaptureMove || rightcaptureMove ? board
                .filter(field =>
                        field.piece != null &&
                        field.piece.color != color &&
                        (field.id === rightcaptureMove ||field.id === leftcaptureMove)
                    ) : [];
            console.log(captureMoves)
            return captureMoves;
        }
    }
}