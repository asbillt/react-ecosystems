// Import expect from chai library in order to make assertions.
import { expect } from "chai";
// Import the getCompletedTodos selector in order to test it.
import { getCompletedTodos } from "../selectors";

// Mocha's describe block contains the test for the getCompletedTodos selector.
describe("The getCompletedTodos Selector", () => {
  it("Returns only completed todos", () => {
    // Define a fake array of todos that will be passed
    // into the getCompletedTodos selector.
    const fakeTodos = [
      {
        text: "Say Hello",
        isCompleted: true,
      },
      {
        text: "Say Goodbye",
        isCompleted: false,
      },
      {
        text: "Climb Mount Everest",
        isCompleted: false,
      },
    ];
    // Define a constant with the array of todos that is expected
    // to be returned from the getCompletedTodos selector.
    const expected = [
      {
        text: "Say Hello",
        isCompleted: true,
      },
    ];
    // Define a constant with an array of todos that actually got returned
    // from the getCompletedTodos selector.
    // resultFunc will return the results of the getCompletedTodos selector.
    const actual = getCompletedTodos.resultFunc(fakeTodos);

    // Test that the actual and expected results are equal.
    expect(actual).to.deep.equal(expected);
  });
});
