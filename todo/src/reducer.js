export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: state.inputValue,
            id: Date.now(),
            completed: false,
          },
        ],
      }
    case "TOGGLE_TODO":
      const updatedTodos = state.todos.map(todo => {
        if(action.payload === todo.id) {
          const updatedTodo = { 
            ...todo, 
            completed: !todo.completed, 
          }
          return updatedTodo;
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      }
    case "INPUT_TEXT":
      return {
        ...state,
        inputValue: action.payload,
      }
    default:
      return state;
  }
}