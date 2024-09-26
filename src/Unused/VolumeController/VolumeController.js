import './VolumeController.css';
import React, { useState } from 'react';

export const VolumeController = ({ onVolumeChange }) => {
  const [level, setLevel] = useState(5);
  const [colorEffect, setColorEffect] = useState(null);

  const triggerColorEffect = (color) => {
    setColorEffect(color);
    setTimeout(() => setColorEffect(null), 150);
  };

  const changeVolume = (delta) => {
    const newLevel = Math.max(1, Math.min(10, level + delta));
    setLevel(newLevel);
    onVolumeChange(newLevel / 10);
    if (newLevel === 1) triggerColorEffect('yellow');
    else if (newLevel === 10) triggerColorEffect('red');
  };

  return (
    <div className="volume-controller">
      <h3>Super heavy duty volume controller</h3>
      <div className="volume-bar">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className={`volume-bar-square ${colorEffect ||
              (i < level ? 'active' : '')}`}
          />
        ))}
      </div>
      <div className="volume-buttons-container">
        <button className="volume-button" onClick={() => changeVolume(-1)}>
          -
        </button>
        <button className="volume-button" onClick={() => changeVolume(1)}>
          +
        </button>
      </div>
    </div>
  );
};
