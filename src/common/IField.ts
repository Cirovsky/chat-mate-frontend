import { ClassPiece } from "gameEntities/entities/ClassPiece";

export interface IField{
    id: string,
    line: number,
    color: string,
    piece?: ClassPiece,
    placeable: boolean
}