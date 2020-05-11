import React, { useReducer } from 'react';
import { reducer } from './reducer';

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

  return (
    <div className="App">
      <ul>
        {state.todos.map(todo => (
            <li>{todo.task}</li>
          ))}
      </ul>
      <TodoForm changeHandler={changeHandler} submitHandler={() => dispatch({ type: "ADD_TODO" })} />
    </div>
  );
}

export default App;
