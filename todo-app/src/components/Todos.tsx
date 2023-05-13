import React from 'react';

import TodoItem from './TodoItem';
import classes from './Todos.module.css';

import Todo from '../models/Todo';

type TodosProps = {
  items: Todo[];
  onRemoveTodo: (id: Todo['id']) => void;
};

function Todos(props: TodosProps) {
  return (
    <ul className={classes.todos}>
      {props.items.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
}

export default Todos;
