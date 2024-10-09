import type { TodoDetails } from '../../features/Todos/types';

export type TaskManagerProps = {
  counterName: string;
  count: number;
  setCount: (count: number) => void;
  todos: TodoDetails[];
};
