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
    case "INPUT_TEXT":
      return {
        ...state,
        inputValue: action.payload,
      }
    default:
      return state;
  }
}