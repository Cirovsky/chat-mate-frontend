import container from 'styles/Container.module.css';
import styles from './Board.module.css';
import { IField } from 'common/IField';
import Line from './Line';
import { ReactElement } from 'react';
import { useGameContext } from 'contexts/game';

export default function Board() {

    const {board, check} = useGameContext();

    const copyBoard = [...board]

    const arrayLines: Array<ReactElement> = [];

    const checkMessage = () =>{
        console.log("teste");
        const findKing = board.filter(field => field.piece !== null)
        .filter(filter => filter.piece?.type === "king")
        .find(filter => filter.piece?.inCheck === true)?.piece?.color;
        return <div>{`o rei ${findKing === "black"? "preto": "branco" } está em xeque!`}</div>;
    };

    const showCheckMessage = check? checkMessage(): <></>;

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
                {showCheckMessage}
            </div>
        </section>
    )
}
