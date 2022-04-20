import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const GameSetup = ({
    uniquePreviousPlayers
    , setCurrentGame
}) => {

    const nav = useNavigate();

    const startGame = () => {
        // Set data for current game
        setCurrentGame({
            players: [
                uniquePreviousPlayers[0]
                , uniquePreviousPlayers[1]
                , "Bradley"
            ]
            , start: (new Date()).toISOString()
        });

        // Navigate to play euchre screen
        nav("/play");
    };

    return (
        <>
            <h2>
                Game Setup
            </h2>
            <h3>
                Choose Players
            </h3>
            {
                uniquePreviousPlayers.map(x => 
                    <p key={x}>
                        {x}
                    </p>
                )
            }

            <Button
                variant="outlined"
                onClick={startGame}
            >
                Start Game
            </Button>
        </>
    );
};