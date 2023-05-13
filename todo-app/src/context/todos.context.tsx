import React, { ReactNode, createContext, useState } from 'react';

import Todo from '../models/Todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: Todo['text']) => void;
  removeTodo: (id: Todo['id']) => void;
};

type TodosProviderProps = {
  children: ReactNode;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: (text: Todo['text']) => {},
  removeTodo: (id: Todo['id']) => {},
});

const TodosProvider = (props: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: Todo['text']) => {
    const newTodo = new Todo(todoText);
    setTodos(prevTodos => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: Todo['id']) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
