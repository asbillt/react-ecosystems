// Import expect from chai library in order to make assertions.
import { expect } from "chai";
// Import the todos reducer in order to test it.
import { todos } from "../reducers";

// Mocha's describe block contains the test for the todos reducer.
describe("The todos reducer", () => {
  it("Adds a new todo when CREATE_TODO action is received", () => {
    // Define a fake action and fake current state with a payload to pass
    // as first and second arguments to our reducer.
    const fakeTodo = { text: "Hello", isCompleted: false };
    const fakeAction = {
      type: "CREATE_TODO",
      payload: {
        todo: fakeTodo,
      },
    };
    const originalState = { isLoading: false, data: [] };

    // Define a constant that has the results that are expected
    // that the todos reducer should return when passed these 2 arguments.
    const expected = {
      isLoading: false,
      data: [fakeTodo],
    };
    // Define a constant that gets the actual value that the todos reducer returns.
    const actual = todos(originalState, fakeAction);

    // Use Chai's expect function to compare the expected results to the actual results.
    expect(actual).to.deep.equal(expected);
  });
});
