import './App.css';
import React, { useState } from 'react';

export const App = (props) => {
  const [level, setLevel] = useState(5);

  const handleCountDown = () => {
    if (level >= 2) {
      const newLevel = level - 1;
      setLevel(newLevel);
    }
  };

  const handleCountUp = () => {
    if (level <= 9) {
      const newLevel = level + 1;
      setLevel(newLevel);
    }
  };

  return (
    <div className="app">
      <h2>{props.name}</h2>
      <div className="counter">
        <h4>Counter</h4>
        <input value={level} />
        <button onClick={handleCountDown}>
          -
        </button>
        <button onClick={handleCountUp}>
          +
        </button>
      </div>
    </div>
  );
};
