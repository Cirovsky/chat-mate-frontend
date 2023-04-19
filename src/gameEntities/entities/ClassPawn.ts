import { IField } from "common/IField";
import { ClassPiece } from "./ClassPiece";

export class ClassPawn extends ClassPiece{

    constructor(type: string, color: string, position: string){
        super(type, color, position)
    }
    getPossibleMoves(position: string, board: Array<IField>){
        const [column, line] = position.split("");
        //const totalBoard = board.map(field => false);
        const newBoard = [...board];
        this.possibleMoves = [];
        if(this.color === 'white' && line === '2'){
            const move1 = "" + column + Number(line + 1);
            const move2 = "" + column + Number(line + 2);
            const fieldMove:Array<IField> = newBoard.filter(field => field.id === move1 || field.id === move2);
            this.possibleMoves = [...fieldMove];
        }
    }
}