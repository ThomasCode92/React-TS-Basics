import React, { FormEvent } from 'react';

const NewTodo = () => {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
