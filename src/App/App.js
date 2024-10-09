import './App.css';
import { useState, useEffect } from 'react';
import { PhotoGallery, TaskManager } from '../widgets';

import { API_BASE_URL } from 'shared';

/**
 * @typedef {import('./types').AppProps} AppProps
 */

/**
 * @function App
 * @param {AppProps} props
 * @returns {JSX.Element}
 */

export const App = (props) => {
  const [photoCount, setPhotoCount] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [todoCount, setTodoCount] = useState(1);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const endPoint = `photos?_start=0&_limit=${photoCount}`;
        const response = await fetch(`${API_BASE_URL}/${endPoint}`);
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        const photos = await response.json();
        setPhotos(photos);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    })();

  }, [photoCount]);

  useEffect(() => {
    (async () => {
      try {
        const endPoint = `todos?_start=0&_limit=${todoCount}`;
        const response = await fetch(`${API_BASE_URL}/${endPoint}`);
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        const todos = await response.json();
        setTodos(todos);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    })();
  }, [todoCount]);

  return (
    <div className={'app'}>
      <h1>{props.title}</h1>
      {/* Photo widget */}
      <PhotoGallery counterName={'Photo count'}
        count={photoCount}
        setCount={setPhotoCount}
        photos={photos}
      />
      {/* Todo widget */}
      <TaskManager counterName={'Todo count'}
        count={todoCount}
        setCount={setTodoCount}
        todos={todos}/>
    </div>
  );
};
