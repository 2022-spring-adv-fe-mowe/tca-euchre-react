import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const PlayGame = () => {

    const nav = useNavigate();

    return (
        <>
            <h2>
                Play Euchre
            </h2>
            <Button
                variant="outlined"
                onClick={() => nav("/")}
            >
                Done
            </Button>
        </>
    );
};