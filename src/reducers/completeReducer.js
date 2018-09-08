export default function completeReducer(state, action) {
  switch (action.type) {
    case "INCOMPLETE_TO_COMPLETE":
      /*const todo = [
        ...state.todo.slice(0, action.id),
        { ...state.todo[action.id], completed: true },
        ...state.todo.slice(action.id + 1)
      ];*/

      return state.map(
        todos =>
          todos.id == action.id
            ? { ...todos, completed: !todos.completed }
            : todos
      );
    // console.log({ todo });
    //return { todo };

    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.length,
          text: action.text,
          completed: false
        }
      ];
    //return state;

    case "ACTIVE_TODO":
      const activeTodo = [...state.filter(todos => todos.completed == false)];
      return activeTodo;

    case "COMPLETED_TODO":
      return state.filter(todos => todos.completed == true);

    case "ALL_TODO":
      console.log(state);
      return state;

    default:
      return state;
  }
}
