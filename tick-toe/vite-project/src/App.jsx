import React from 'react';
import Board from './Board'; // Import your Board component
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe Game</h1>
      <Board /> {/* Render the Board component */}
    </div>
  );
}

export default App;
