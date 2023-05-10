import React from 'react';

type TodosProps = { items: string[] };

function Todos(props: TodosProps) {
  return (
    <ul>
      {props.items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export default Todos;
