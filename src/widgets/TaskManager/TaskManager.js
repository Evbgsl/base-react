import './TaskManager.css';
import { Counter } from 'features';
import { Todos } from 'features';

/**
 * @typedef {import('./types').TaskManagerProps} TaskManagerProps
 */

/**
 * @function TaskManager
 * @param { TaskManagerProps } props
 * @returns {JSX.Element}
 */

export const TaskManager = (props) => {
  return (
    <div className='task-manager'>
      <Counter name={props.counterName}
        count={props.count}
        setCount={props.setCount}
      />
      <Todos todos={props.todos} />
    </div>
  );
};
