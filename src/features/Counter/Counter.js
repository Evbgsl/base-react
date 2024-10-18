/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {

  const handleDownClick = () => {
    if (props.count <= 1) return;
    props.setCount(props.count - 1);
  };

  const handleUpClick = () => {
    if (props.count >= 10) return;
    props.setCount(props.count + 1);
  };

  return (
    <div>
      <h2>{props.name}: {props.count}</h2>
      <button
        onClick={HandlerDownClick}
        disabled = {props.count <= 1}
      >
        CountDown
      </button>
      <button
        onClick={HandlerUpClick}
        disabled = {props.count >= 10}
      >
        CountUp
      </button>
    </div>
  );
};
