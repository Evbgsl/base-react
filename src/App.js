import './App.css';
import { VolumeController } from './VolumeController';

export const App = (props) => {
  console.log({ props });
  return (
    <div className="app">
      <h2>{props.name}</h2>
      <VolumeController />
    </div>
  );
};
