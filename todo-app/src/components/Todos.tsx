import React from 'react';

import TodoItem from './TodoItem';
import classes from './Todos.module.css';

import Todo from '../models/Todo';

type TodosProps = { items: Todo[] };

function Todos(props: TodosProps) {
  return (
    <ul className={classes.todos}>
      {props.items.map(item => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
}

export default Todos;
