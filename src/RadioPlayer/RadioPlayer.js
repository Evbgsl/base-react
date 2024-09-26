import React, { useRef, useEffect, useState } from 'react';
import './RadioPlayer.css';

export const RadioPlayer = ({ volume, stationName, streamUrl, onPlay, isActive }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      onPlay(audioRef.current);
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isActive && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="radio-player">
      <h3>{stationName}</h3>
      <audio ref={audioRef} src={streamUrl} />
      <button className="play-button" onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};
