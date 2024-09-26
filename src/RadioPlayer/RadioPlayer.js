import React, { useRef } from 'react';
import './RadioPlayer.css';

export const RadioPlayer = ({ setVolume }) => {
  const audioRef = useRef(null);
  const radioStreamUrl = 'https://pub0301.101.ru:8443/stream/air/mp3/256/219';

  const handleAudioVolumeChange = (newVolume) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="radio-player">
      <h3>LikeFM</h3>
      <audio ref={audioRef} src={radioStreamUrl} controls/>

      {setVolume(handleAudioVolumeChange)}
    </div>
  );
};
