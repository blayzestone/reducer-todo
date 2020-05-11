export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            task: action.payload,
            id: Date.now(),
            completed: false,
          },
        ],
      }
    default:
      return state;
  }
}