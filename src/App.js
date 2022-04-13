import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

const Home = () => <h2>Home</h2>
const GameSetup = () => <h2>Game Setup</h2>
const PlayGame = () => <h2>Play Game</h2>

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="setup" element={<GameSetup />} />
      <Route path="play" element={<PlayGame />} />
    </Routes>

    </div>
  );
}

export default App;
