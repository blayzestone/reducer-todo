import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
    {todos.map(todo => (
        <li 
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : "" }}
        >{todo.task}</li>
      ))}
  </ul>
  );
}

export default TodoList;