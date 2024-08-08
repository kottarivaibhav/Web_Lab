import React, { useState } from 'react';
import './App.css';

function Button({ id, label }) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    alert(`Button ${id} was clicked`);
  };

  return (
    <button onClick={handleClick}>
      {label} (Clicked {clickCount} times)
    </button>
  );
}

function App2() {
  return (
    <div className="App">
      <h1>Click the Buttons!</h1>
      <Button id={1} label="Button 1" />
      <Button id={2} label="Button 2" />
      <Button id={3} label="Button 3" />
    </div>
  );
}

export default App2;
