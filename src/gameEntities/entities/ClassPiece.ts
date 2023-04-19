import { IField } from "common/IField";

export class ClassPiece{
    type: string;
    color: string;
    position: string;
    possibleMoves: Array<IField>;
    pieceId: string;
    constructor(type: string, color: string, position: string){
        this.type = type;
        this.color = color;
        this.position = position;
        this.possibleMoves = [];
        this.pieceId = "" + type + color + position;
    }
    getPossibleMoves(board: Array<IField>){
    }
}