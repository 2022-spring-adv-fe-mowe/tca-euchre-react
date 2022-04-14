import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const GameSetup = () => {

    const nav = useNavigate();

    return (
        <>
            <h2>
                Game Setup
            </h2>
            <Button
                variant="outlined"
                onClick={() => nav("/play")}
            >
                Start Game
            </Button>
        </>
    );
};