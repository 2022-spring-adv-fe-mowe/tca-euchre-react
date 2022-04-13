import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';

const Home = () => <h2>Home</h2>
const GameSetup = () => <h2>Game Setup</h2>
const PlayGame = () => <h2>Play Game</h2>

function App() {
  return (
    <div className="App">
      <Button variant="outlined">
        Play
      </Button>
      <Home />
      <GameSetup />
      <PlayGame />
    </div>
  );
}

export default App;
