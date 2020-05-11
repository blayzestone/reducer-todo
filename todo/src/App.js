import React, { useReducer } from 'react';
import { reducer } from './reducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const initialState = {
  textValue: "",
  todos: [
    {
      task: "foobar",
      id: Date.now(),
      completed: false,
    },
  ],
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeHandler = value => {
    return dispatch({ type: "INPUT_TEXT", payload: value });
  }

  const toggleTodo = id => {
    return dispatch({ type: "TOGGLE_TODO", payload: id });
  }

  return (
    <div className="App">
      <TodoList todos={state.todos} toggleTodo={toggleTodo}/>
      <TodoForm 
        changeHandler={changeHandler} 
        submitHandler={() => dispatch({ type: "ADD_TODO" })} 
        clearTodos={() =>  dispatch({ type: "CLEAR_TODOS" })}
      />
    </div>
  );
}

export default App;
