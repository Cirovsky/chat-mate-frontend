import { IField } from "common/IField";
import { ClassPiece } from "./ClassPiece";

export class ClassRook extends ClassPiece {
    constructor(type: string, color: string, position: string) {
        super(type, color, position)
    }

    getPossibleMoves(board: Array<IField>) {
        const position = this.position;
        let [letter, line] = position.split("");
        const column: number = letter.charCodeAt(0) - 96;
        const line2 = Number(line);
        this.possibleMoves = checkPossibleMovesRook(this.color, column, line2, board);

        function checkPossibleMovesRook(color: string, column: number, line: number, board: Array<IField>) {

            let possibleMoves: Array<IField> = [];
            const position: string = "" + String.fromCharCode(column + 96);
            possibleMoves = checkDirectionsRook(board, position, column, line, color);

            return possibleMoves;
        }

        function checkDirectionsRook(moveArray: Array<IField>, position: string, column: number, line: number, color: string) {
            let moveFiltered: Array<IField> = [];

            moveFiltered = [...filterArrayMovesVertical(moveArray, position, line, color), 
                ...filterArrayMovesHorizontal(moveArray, column, line, color)];

            return moveFiltered;
        }

    }
}

const filterArrayMovesVertical = (
    moveArray: Array<IField>,
    position: string,
    line: number,
    color: string) => {
    const targets = [1, 8];
    let moveFiltered: Array<IField> = [];
    targets.forEach(target => {
        let index = line;
        const direction = target > index;
        let nullable = false
        while (nullable === false) {
            if (direction) {
                index++;
            } else {
                index--;
            }
            const next = moveArray.find(field => field.id === (position + index))
            if (next?.piece === null && (direction ? index <= 8 : index >= 1)) {
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


const filterArrayMovesHorizontal = (
    moveArray: Array<IField>,
    column: number,
    line: number,
    color: string) => {
        
        let moveFiltered:Array<IField> = [];
        const targets = [1, 8];
        
        targets.forEach(target => {
            let columnIndex = column;
            const direction = target > columnIndex;
            let nullable = false

        while (nullable === false) {
            if (direction) {
                columnIndex++;
                console.log(columnIndex);
            } else {
                columnIndex--;
            }
            const positionColumn = String.fromCharCode(columnIndex + 96);
            console.log(positionColumn + line)
            const next = moveArray.find(field => field.id === (positionColumn + line));
            if (next?.piece === null && (direction ? columnIndex <= 8 : columnIndex >= 1)) {
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
    return moveFiltered
}

export{
    filterArrayMovesHorizontal,
    filterArrayMovesVertical,
}