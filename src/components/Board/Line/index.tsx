import { IField } from "common/IField";
import Field from "../Field";
import styles from './Line.module.css';

interface LineProps{
    fields: Array<IField>
}

export default function Line({fields}:LineProps) {
    const fieldsElements = fields.map(field => <Field key={field.id} {...field} />)
    return (
        <ul className={styles.line}>
            {fieldsElements}
        </ul>
    )
}
