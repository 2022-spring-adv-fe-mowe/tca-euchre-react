import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const PlayGame = ({addGameResult}) => {

    const nav = useNavigate();

    const endGame = () => {

        addGameResult({});
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