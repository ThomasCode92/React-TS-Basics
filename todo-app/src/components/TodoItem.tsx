import React from 'react';

import Todo from '../models/Todo';
import classes from './TodoItem.module.css';

type TodoItemProps = {
  text: Todo['text'];
  onRemoveTodo: () => void;
};

function TodoItem(props: TodoItemProps) {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
}

export default TodoItem;
