import { IField } from "common/IField";
import { ClassPiece } from "./ClassPiece";

export class ClassKing extends ClassPiece{
    inCheck: boolean;
    constructor(type: string, color: string, position: string){
        super(type, color, position);
        this.inCheck = false;
    }

    getPossibleMoves(board: Array<IField>) {
        const position = this.position;
        let [letter, line] = position.split("");
        const column: number = letter.charCodeAt(0) - 96;
        const line2 = Number(line)
        const newBoard = [...board];
        this.possibleMoves = checkPossibleMovesKing(this.color, column, line2, board);

        function checkPossibleMovesKing(color: string, column: number, line: number, board: Array<IField>) {

            let possibleMoves: Array<IField> = [];
            const position: string = "" + String.fromCharCode(column + 96);
            possibleMoves = checkDirectionsKing(board, position, column, line, color);

            return possibleMoves;
        }

        function checkDirectionsKing(
            moveArray: Array<IField>, 
            position: string, 
            column: number, 
            line: number, 
            color: string){

            let moveFiltered:Array<IField> = [];

            const neighborFieldsId:Array<string> = [
                position + (line - 1), 
                position + (line + 1), 
                String.fromCharCode((column - 1) + 96) + line,
                String.fromCharCode((column + 1) + 96) + line,

                String.fromCharCode((column - 1) + 96) + (line - 1),
                String.fromCharCode((column - 1) + 96) + (line + 1),
                String.fromCharCode((column + 1) + 96) + (line - 1),
                String.fromCharCode((column + 1) + 96) + (line + 1),
                ]
            
                neighborFieldsId.forEach( id =>{
                    const field:IField|undefined = moveArray.find(field => field.id === id);
                    if(field && (field.piece === null || field.piece?.color !== color)){
                        moveFiltered.push(field);
                    }
                })
            
            return moveFiltered;
        }
    }

    
}