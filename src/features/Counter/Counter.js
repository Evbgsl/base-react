import { useState } from 'react';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {
  const [count, setCount] = useState(props.startCount);

  const HandlerDownClick = () => {
    if (count <= props.minCount) return;
    setCount(count - 1);
  };

  const HandlerUpClick = () => {
    if (count >= props.maxCount) return;
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter = {count}</h2>
      <button
        onClick={HandlerDownClick}
        disabled = {count <= props.minCount}
      >
        CountDown
      </button>
      <button
        onClick={HandlerUpClick}
        disabled = {count >= props.maxCount}
      >
        CountUp
      </button>
    </div>
  );
};
