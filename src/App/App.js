import './App.css';
import { Counter } from '../features/Counter';

/**
 * @typedef {import('./types').AppProps} AppProps
 */

/**
 * @function App
 * @param {AppProps} props
 * @returns {JSX.Element}
 */

export const App = (props) => {
  return (
    <div className="app">
      <p>{props.name}</p>
      < Counter minCount={1} startCount={5} maxCount={10} />
    </div>
  );
};
