/* Create 2 action creators: functions that create the action objects. (Abstraction) */

// Define the constant for the actions type, CREATE_TODO.
export const CREATE_TODO = "CREATE_TODO";
// 1st action creator:
// Define a createTodo action that the app will fire
// whenever the user types something into the NewTodoForm
// component and presses the Create Todo button.
export const createTodo = (text) =>
  // Returns an abstract object.
  ({
    // The type property assigned the CREATE_TODO constant as its value.
    type: CREATE_TODO,
    // The payload property assigned the text of the new todo.
    payload: { text },
  });

// Define the constant for the actions type, REMOVE_TODO.
export const REMOVE_TODO = "REMOVE_TODO";
// 2nd action creator:
// Define a removeTodo action that the app will fire
// whenever the user deletes a todo item.
export const removeTodo = (text) =>
  // Returns an abstract object.
  ({
    // The type property assigned the REMOVE_TODO constant as its value.
    type: REMOVE_TODO,
    // The payload property assigned the text of the todo the app should remove.
    payload: { text },
  });
