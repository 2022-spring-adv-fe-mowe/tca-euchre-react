import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { GameSetup } from './GameSetup';
import { PlayGame } from './PlayGame';


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
