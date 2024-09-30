import { useState } from 'react';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element | null}
 */

export const Counter = (props) => {
  const [count, setCount] = useState(props.startCount);

  const handleCountDownClick = () => {
    if (count <= props.minCount) return;
    setCount(count - 1);
  };

  const handleCountUpClick = () => {
    if (count >= props.maxCount) return;
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button
        disabled={count <= props.minCount}
        onClick={handleCountDownClick}
      >
        -
      </button>
      <button
        disabled={count >= props.maxCount}
        onClick={handleCountUpClick}
      >
        +
      </button>
    </div>
  );
};
