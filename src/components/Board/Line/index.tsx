import { IField } from "common/IField";
import Field from "../Field";
import styles from './Line.module.css';
import { ReactElement } from "react";


interface LineProps{
    fields: Array<IField>;
    line: number;
}

export default function Line({fields, line}:LineProps) {
    let fieldsElements:Array<ReactElement> = [];
    
        fieldsElements = fields.map(field => <Field key={field.id} {...field}/>)

    return (
        <ul className={styles.line}>
            {fieldsElements}
        </ul>
    )
}
