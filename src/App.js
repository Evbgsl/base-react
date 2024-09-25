import './App.css';

export const App = (props) => {
  console.log({props});
  return (
    <div className="app">
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};
