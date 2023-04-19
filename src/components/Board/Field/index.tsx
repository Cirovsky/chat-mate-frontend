import React from 'react'
import container from 'styles/Container.module.css';
import styles from './Field.module.css';

interface FieldProps{
    id: string;
    line: number;
    color: string;
}

export default function Field({id, line, color}: FieldProps) {
    return (
        <li id={id} className={`${container.containerH} ${styles.fieldBlack} ${styles[color]} `}>
            
        </li>
    )
}
