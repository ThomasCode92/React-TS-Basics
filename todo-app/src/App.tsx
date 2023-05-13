import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import './App.css';

import Todo from './models/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: Todo['text']) => {
    const newTodo = new Todo(todoText);
    setTodos(prevTodos => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: Todo['id']) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
