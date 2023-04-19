import container from 'styles/Container.module.css';
import styles from './Board.module.css';
import { coordinates } from 'common/boardCoordinates';
import { IField } from 'common/IField';
import Line from './Line';
import { ReactElement } from 'react';

console.log(coordinates);

export default function Board() {
    const arrayLines: Array<ReactElement> = [];

    for(let l = 8; l >=1; l--){
        const line:Array<IField> = coordinates
        .filter(field => field.line === l)
        const lineElement:ReactElement = <Line key={l} fields={line} />
        arrayLines.push(lineElement);
    }

    return (
        <section className={`${container.containerH} ${styles.boardContainer} `}>
            <div className={`${container.containerV} ${styles.board}`}>
                {arrayLines}
            </div>
        </section>
    )
}
