import Board from 'components/Board';
import { GameContextProvider } from 'contexts/game';

export default function Home() {
    return (
        <main>
            <GameContextProvider>
                <Board/>
            </GameContextProvider>
        </main>
    )
}
