import React from 'react';
import TodoList from './Todolist';
import Timer from './Timer';

function App() {
  let name = "리액트";

  return (
    <div className="container">
      <TodoList></TodoList>
      <Timer></Timer>
    </div>
  );
}

export default App;
