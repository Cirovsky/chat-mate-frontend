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
        const line2 = Number(line)
        //const totalBoard = board.map(field => false);
        const newBoard = [...board];
        this.possibleMoves = checkPossibleMovesRook(this.color, column, line2, board);

        function checkPossibleMovesRook(color: string, column: number, line: number, board: Array<IField>) {

            let possibleMoves: Array<IField> = [];
            const position: string = "" + String.fromCharCode(column + 96);
            const moveV: Array<IField> = board
                .filter(field => field.id != (position + line) && field.column === column);
            //const moveVFiltered: Array<IField> = [];
            const moveVFiltered: Array<IField> = checkDirectionsRook(board, position, column, line, color);

            possibleMoves = [...moveVFiltered]

            return possibleMoves;

        }

        function checkDirectionsRook(moveArray: Array<IField>, position: string, column: number, line: number, color: string) {
            const moveFiltered: Array<IField> = [];
            let nullable = false;
            let index = line;

            const filterArrayMovesVertical = (
                target: number,
                moveArray: Array<IField>,
                line: number,
                color: string,
                nullable: boolean = false) => {
                const limit = false
                let index = line;
                const direction = target > index;
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

            }

            const filterArrayMovesHorizontal = (
                target: number,
                moveArray: Array<IField>,
                column: number,
                line: number,
                color: string,
                nullable: boolean = false) => {
                let columnIndex = column;
                const direction = target > columnIndex;

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

            }

            filterArrayMovesVertical(8, moveArray, line, color);
            filterArrayMovesVertical(1, moveArray, line, color);
            filterArrayMovesHorizontal(8, moveArray, column, line, color);
            filterArrayMovesHorizontal(1, moveArray, column, line, color);

            /*  while (nullable === false) {
                 console.log('teste');
                 index++;
                 const next = moveArray.find(field => field.id === (position + index))
                 if (next?.piece === null && index <= 8) {
                     console.log(next)
                     const field: IField = next;
                     moveFiltered.push(field);
                 } else if (next?.piece && next.piece !== null && next.piece.color !== color) {
                     const field: IField = next;
                     moveFiltered.push(field);
                     nullable = true;
                 } else {
                     nullable = true;
                 }
             } */

            /*    nullable = false
               index = line; */

            /* while (nullable === false) {
                console.log('teste');
                index--;
                const next = moveArray.find(field => field.id === (position + index))
                if (next?.piece === null && index >= 1) {
                    console.log(next)
                    const field: IField = next;
                    moveFiltered.push(field);
                } else if (next?.piece && next.piece !== null && next.piece.color !== color) {
                    const field: IField = next;
                    moveFiltered.push(field);
                    nullable = true;
                } else {
                    nullable = true;
                }
            } */

             /* nullable = false
             index = line;
             let columnIndex = column;
 
             while (nullable === false) {
                 columnIndex++;
                 const positionColumn = String.fromCharCode(columnIndex + 96);
                 const next = moveArray.find(field => field.id === (positionColumn + index))
                 if (next?.piece === null && columnIndex <= 8) {
                     console.log(next)
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
 
             nullable = false
             columnIndex = column;
 
             while (nullable === false) {
                 columnIndex--;
                 const positionColumn = String.fromCharCode(columnIndex + 96);
                 const next = moveArray.find(field => field.id === (positionColumn + index))
                 if (next?.piece === null && columnIndex >= 1) {
                     console.log(next)
                     const field: IField = next;
                     moveFiltered.push(field);
                 } else if (next?.piece && next.piece !== null && next.piece.color !== color) {
                     const field: IField = next;
                     moveFiltered.push(field);
                     nullable = true;
                 } else {
                     nullable = true;
                 }
             } */
            return moveFiltered;
        }

    }
}