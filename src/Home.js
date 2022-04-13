import { Button } from '@mui/material';
import { Navigate } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <h2>
                Home
            </h2>
            <Button
                variant="outlined"
                onClick={() => Navigate({
                    to: "/setup"
                })}
            >
                Play
            </Button>
        </>
    );
};