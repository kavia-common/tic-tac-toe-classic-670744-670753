import React from 'react';
import './App.css';
import './styles.css';
import Game from './components/Game';

/**
 * App is the top-level component that renders the two-player Tic Tac Toe game.
 * It applies the Ocean Professional theme and centers the layout.
 */
// PUBLIC_INTERFACE
function App() {
  return (
    <div className="ocean-app">
      <Game />
    </div>
  );
}

export default App;
