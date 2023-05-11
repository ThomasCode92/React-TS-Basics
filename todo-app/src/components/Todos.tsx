import React from 'react';

import Todo from '../models/Todo';

type TodosProps = { items: Todo[] };

function Todos(props: TodosProps) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default Todos;
