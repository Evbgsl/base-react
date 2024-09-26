import './App.css';
import React, { useState } from 'react';
import { VolumeController } from './VolumeController';
import { RadioPlayer } from './RadioPlayer';

export const App = (props) => {
  const [setVolumeFunction, setSetVolumeFunction] = useState(null);

  return (
    <div className="app">
      <h2>{props.name}</h2>
      <RadioPlayer setVolume={(func) => setSetVolumeFunction(() => func)} />
      {setVolumeFunction && (
        <VolumeController onVolumeChange={setVolumeFunction} />
      )}
    </div>
  );
};
