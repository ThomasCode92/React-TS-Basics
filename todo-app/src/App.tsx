import React from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import './App.css';

import TodosProvider from './context/todos.context';

function App() {
  return (
    <TodosProvider>
      <NewTodo />
      <Todos />
    </TodosProvider>
  );
}

export default App;
