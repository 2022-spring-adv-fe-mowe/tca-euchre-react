import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const calculateShortestGame = (results) => (
    Math.min(
        ...results.map(x => Date.parse(x.end) - Date.parse(x.start))
    )
);

export const Home = ({gameResults}) => {

    const nav = useNavigate();

    return (
        <>
            <h2>
                Euchre Home
            </h2>
            <h3>
                Total Games Completed: {gameResults.length}
            </h3>
            <h3>
                Shortest Game (in minutes): {calculateShortestGame(gameResults) / 1000 / 60}
            </h3>
            <Button
                variant="outlined"
                onClick={() => nav("/setup")}
            >
                Play
            </Button>
        </>
    );
};