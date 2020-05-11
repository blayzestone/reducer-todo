export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          task: action.payload,
          id: Date.now(),
          completed: false,
        },
      ];
    default:
      return state;
  }
}