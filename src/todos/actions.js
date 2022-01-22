/* Define action creators: functions that create the action objects. (Abstraction) */

// Define the constant for the actions type, CREATE_TODO.
export const CREATE_TODO = "CREATE_TODO";
// 1st action creator:
// Define a createTodo action that the app will fire
// whenever the user types something into the NewTodoForm
// component and presses the Create Todo button.
export const createTodo = (todo) =>
  // Returns an abstract object.
  ({
    // The type property assigned the CREATE_TODO constant as its value.
    type: CREATE_TODO,
    // The payload property assigned the new todo.
    payload: { todo },
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

// Define the constant for the actions type, MARK_TODO_AS_COMPLETED.
export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
// 3rd action creator:
// Define a markTodoAsCompleted action that the app will fire
// whenever the user clicks the Mark As Completed button for a todo item.
export const markTodoAsCompleted = (text) =>
  // Returns an abstract object.
  ({
    // The type property assigned the MARK_TODO_AS_COMPLETED constant as its value.
    type: MARK_TODO_AS_COMPLETED,
    // The payload property assigned the text of the completed todo.
    payload: { text },
  });

// Define the constant for the actions type, LOAD_TODOS_IN_PROGRESS.
export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
// 4th action creator:
export const loadTodosInProgress = () =>
  // Returns an abstract object.
  ({
    // The type property assigned the LOAD_TODOS_IN_PROGRESS constant as its value.
    type: LOAD_TODOS_IN_PROGRESS,
  });

// Define the constant for the actions type, LOAD_TODOS_SUCCESS.
export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
// 5th action creator:
export const loadTodosSuccess = (todos) =>
  // Returns an abstract object.
  ({
    // The type property assigned the LOAD_TODOS_SUCCESS constant as its value.
    type: LOAD_TODOS_SUCCESS,
    // The payload property assigned the todos this action was dispatched with.
    payload: { todos },
  });

// Define the constant for the actions type, LOAD_TODOS_FAILURE.
export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
// 6th action creator:
export const loadTodosFailure = () =>
  // Returns an abstract object.
  ({
    // The type property assigned the LOAD_TODOS_FAILURE constant as its value.
    type: LOAD_TODOS_FAILURE,
  });
