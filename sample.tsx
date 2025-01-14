import React from 'react';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, task: 'Learn React', completed: false },
  { id: 2, task: 'Build a Todo App', completed: false },
  { id: 3, task: 'Master TypeScript', completed: true },
];

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ color: 'blue', textAlign: 'center' }}>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.task}
            {todo.completed && <span> ✅</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
