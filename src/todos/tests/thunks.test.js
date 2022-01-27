/* When testing thunks check that:
  (1) It dispatches the correct actions at the correct times and 
  (2) It makes the correct external requests.
*/

import "node-fetch";
// Import fetchMock. Creates fake fetch requests.
import fetchMock from "fetch-mock";
// Import expect from chai library in order to make assertions.
import { expect } from "chai";
// Import Sinon. Sinon allows making fake dispatch calls.
import sinon from "sinon";
// Import the loadTodos thunk in order to test it.
import { loadTodos } from "../thunks";

// Mocha's describe block contains the test for the loadTodos thunk.
describe("The loadTodos thunk", () => {
  it("Dispatches the correct actions in the success scenario", async () => {
    // Create a fake dispatch that will be passed to the loadTodos thunk.
    const fakeDispatch = sinon.spy();

    // Create a fake todos array. When the loadTodos thunk sends a get request
    // to the url, it will get back the fakeTodos array.
    const fakeTodos = [{ text: "1" }, { text: "2" }];
    fetchMock.get("http://localhost:8080/todos", fakeTodos);

    // Define the actions that are called by fakeDispatch.
    const expectedFirstAction = { type: "LOAD_TODOS_IN_PROGRESS" };
    const expectedSecondAction = {
      type: "LOAD_TODOS_SUCCESS",
      payload: {
        todos: fakeTodos,
      },
    };

    // Call the loadTodos thunk and pass in fakeDispatch as its argument.
    await loadTodos()(fakeDispatch);

    // Test that the loadTodos dispatched the expected actions and loadTodos
    // dispatch them in the correct order.
    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

    // Restore fetch to its original state.
    fetchMock.reset();
  });
});
