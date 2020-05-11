import React, { useReducer } from 'react';

import { reducer } from './reducer';

const initialState = {
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

  return (
    <div className="App">
      <ul>
        {state.todos.map(todo => (
            <li>{todo.task}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
