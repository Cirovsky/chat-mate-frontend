import { ClassPiece } from "gameEntities/entities/ClassPiece";

export interface IField{
    id: string,
    column: number,
    line: number,
    color: string,
    piece?: ClassPiece| null,
    placeable: boolean,
    selected: boolean
}