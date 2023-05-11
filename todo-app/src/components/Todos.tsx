import React from 'react';

import TodoItem from './TodoItem';

import Todo from '../models/Todo';

type TodosProps = { items: Todo[] };

function Todos(props: TodosProps) {
  return (
    <ul>
      {props.items.map(item => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
}

export default Todos;
