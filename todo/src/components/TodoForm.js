import React from 'react';

const TodoForm = ({ changeHandler, submitHandler }) => {

  return(
    <div>
      <input onChange={e => changeHandler(e.target.value)} type="text" placeholder="Enter todo"/>
      <button onClick={submitHandler}>Add Todo</button>
    </div>
  );
}

export default TodoForm;