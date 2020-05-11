import React from 'react';

const TodoForm = ({ changeHandler, submitHandler, clearTodos }) => {

  return(
    <div>
      <input onChange={e => changeHandler(e.target.value)} type="text" placeholder="Enter todo"/>
      <button onClick={submitHandler}>Add Todo</button>
      <button onClick={clearTodos} value="button">Clear Todos</button>
    </div>
  );
}

export default TodoForm;