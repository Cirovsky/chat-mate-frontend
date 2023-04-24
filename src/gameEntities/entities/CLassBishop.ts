import { IField } from "common/IField";
import { ClassPiece } from "./ClassPiece";

export class ClassBishop extends ClassPiece {
    constructor(type: string, color: string, position: string) {
        super(type, color, position)
    }

    getPossibleMoves(board: Array<IField>) {
        const position = this.position;
        let [letter, line] = position.split("");
        const column: number = letter.charCodeAt(0) - 96;
        const line2 = Number(line);
        this.possibleMoves = checkPossibleMovesBishop(this.color, column, line2, board);

        function checkPossibleMovesBishop(color: string, column: number, line: number, board: Array<IField>) {

            let possibleMoves: Array<IField> = [];
            const position: string = "" + String.fromCharCode(column + 96);
            possibleMoves = checkDirectionsBishop(board, column, line, color);

            return possibleMoves;
        }

        function checkDirectionsBishop(moveArray: Array<IField>, column: number, line: number, color: string) {
            let moveFiltered: Array<IField> = [];

            
            return moveFiltered = filterArrayMovesDiagonal( moveArray, column, line, color);
        }
        
    }
}

function filterArrayMovesDiagonal (
    moveArray: Array<IField>,
    column: number,
    line: number,
    color: string){
    
    let moveFiltered:Array<IField> = [];
        const directions = ["upRight", "upLeft", "downRight", "downLeft"];
        
        directions.forEach( direction =>{
            let nullable = false
            let lineIndex = line;
            let columnIndex = column;

        while (nullable === false) {
            console.log(String.fromCharCode(columnIndex + 96) + lineIndex)
            if (direction === "upRight") {
                columnIndex++;
                lineIndex++;
            } else if (direction === "upLeft") {
                columnIndex--;
                lineIndex++;
            } else if (direction === "downRight") {
                columnIndex++;
                lineIndex--;
            }
            else if (direction === "downLeft"){
                columnIndex--;
                lineIndex--;
            }
            const positionColumn = String.fromCharCode(columnIndex + 96);
            const next = moveArray.find(field => field.id === (positionColumn + lineIndex));
            if (next?.piece === null
                && ( columnIndex >=1 && columnIndex <=8 && lineIndex >=1 && lineIndex <=8)) {
                const field: IField = next;
                moveFiltered.push(field);
            } else if (next?.piece && next.piece !== null && next.piece.color !== color) {
                const field: IField = next;
                moveFiltered.push(field);
                nullable = true;
            } else {
                nullable = true;
            }
        }

    })

    return moveFiltered;

}

export{
    filterArrayMovesDiagonal
}