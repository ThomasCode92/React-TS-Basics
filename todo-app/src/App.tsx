import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import './App.css';

import Todo from './models/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos(prevTodos => prevTodos.concat(newTodo));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
