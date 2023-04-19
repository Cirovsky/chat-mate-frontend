import { IField } from "./IField";

const coordinates = createCoordinates();

function createCoordinates (){
    let color: boolean = false;
    const newCoordinates: Array<IField> = [];
    for(let number = 8; number >= 1; number--){
        console.log(number)
        if(number % 2 == 0){
            color = false;
        }else{
            color = true;
        }
        for(let letter = 97; letter <= 104; letter++){
            const field:IField = {
                id: `${String.fromCharCode(letter)}${number}`, 
                line: number, 
                color: color? 'black': 'white'
            }
            color = !color;
            newCoordinates.push(field);
        }
    }
    return newCoordinates;
}

export {
    coordinates
}

/* export const coordinates:object[] = [
    {id: 'a8', classField: 'black'},{id: 'b8', classField: 'white'}
] */