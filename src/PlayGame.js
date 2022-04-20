import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const PlayGame = ({
    addGameResult
    , currentGame
}) => {

    const nav = useNavigate();

    const endGame = () => {

        addGameResult({
            start: currentGame.start
            , players: currentGame.players.map(x => ({
                name: x
                , order: 0
            }))
            , end: (new Date()).toISOString()
            , winner: "Bradley"
        });
        nav("/");
    };

    return (
        <>
            <h2>
                Play Euchre
            </h2>
            <Button
                variant="outlined"
                onClick={endGame}
            >
                Done
            </Button>
        </>
    );
};