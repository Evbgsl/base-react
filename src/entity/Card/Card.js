import './Card.css';
import { useState, useEffect } from 'react';
import { randomColor } from 'shared/utils';

/**
 * @typedef {import('./types').CardProps} CardProps
 */

/**
 * @function Card
 * @param {CardProps} props
 * @returns {JSX.Element}
 */

export const Card = (props) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(randomColor());
  }, []);

  return (
    <li className={'card'}
      style={{ background: color }}
    >
      {/* name */}
      {props.name && (
        <h2>{props.name}</h2>
      )}
      {/* image */}
      {props.image && (
        <img
          src={props.image}
          alt={props.name}
        />
      )}
      {/* text */}
      {props.text && (
        <p>{props.text}</p>
      )}
    </li>
  );
};
