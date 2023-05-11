import React from 'react';

import Todo from '../models/Todo';

type TodoItemProps = { text: Todo['text'] };

function TodoItem(props: TodoItemProps) {
  return <li>{props.text}</li>;
}

export default TodoItem;
