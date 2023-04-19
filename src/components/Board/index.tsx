import container from 'styles/Container.module.css';
import styles from './Board.module.css';
import { IField } from 'common/IField';
import Line from './Line';
import { ReactElement } from 'react';
import { useGameContext } from 'contexts/game';

export default function Board() {

    const {board} = useGameContext();

    const copyBoard = [...board]

    const arrayLines: Array<ReactElement> = [];

    for(let l = 8; l >=1; l--){
        const line:Array<IField> = copyBoard
        .filter(field => field.line === l)
        const lineElement:ReactElement = <Line key={l} fields={line} line={l}/>
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
