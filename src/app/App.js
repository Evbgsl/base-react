import './App.css';
import { Counter } from 'features';

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
      <h1>{props.name}</h1>

      <Counter
        minCount={1}
        startCount={5}
        maxCount={10}
      />
    </div>
  );
};
