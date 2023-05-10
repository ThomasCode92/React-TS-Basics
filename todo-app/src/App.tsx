import React from 'react';

import Todos from './components/Todos';
import './App.css';

const todos = ['Learn React', 'Learn TypeScript'];

function App() {
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
