import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { TextField } from '@mui/material';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GameSetup = ({
    uniquePreviousPlayers
    , setCurrentGame
}) => {

    const nav = useNavigate();

    const playersWithCheckedProperty = uniquePreviousPlayers.map(x => ({
        name: x
        , checked: false
    }));

    const [availablePlayers, setAvailablePlayers] = useState(playersWithCheckedProperty);
    const [newPlayerName, setNewPlayerName] = useState("");

    const startGame = () => {
        // Set data for current game
        setCurrentGame({
            players: availablePlayers.filter(x => x.checked).map(x => x.name)
            , start: (new Date()).toISOString()
        });

        // Navigate to play euchre screen
        nav("/play");
    };

    const toggleCheckbox = (p) => {
        setAvailablePlayers(
            availablePlayers.map(x => ({
                ...x
                , checked: x === p ? !x.checked : x.checked
            }))
        );
    };

    const addNewAvailablePlayer = () => {

        // Add a new available player:
        setAvailablePlayers(
            [
                ...availablePlayers
                , {
                    name: newPlayerName
                    , checked: true
                }
            ]
        );

        // Clear out the text field:
        setNewPlayerName("");
    };

    return (
        <>
            <h2>
                Game Setup
            </h2>
            <h3>
                Choose Players
            </h3>
            <div>
                <TextField 
                    varient='outlined'
                    value={newPlayerName}
                    onChange={(e) => setNewPlayerName(e.target.value)}
                />
                <Button
                    variant='outlined'
                    onClick={addNewAvailablePlayer}
                >
                    Add
                </Button>
            </div>
            {
                availablePlayers.map(x => 
                    <p key={x.name}>
                        <FormControlLabel
                            label={x.name}
                            control={
                                <Checkbox                                       
                                    checked={x.checked}
                                    onChange={() => toggleCheckbox(x)}
                                />
                        }
                        />
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