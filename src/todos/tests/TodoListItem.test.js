// Import expect from chai library in order to make assertions.
import { expect } from "chai";
// Import the getBorderStyleForDate function from the TodoListItem.js in order to test it.
import { getBorderStyleForDate } from "../TodoListItem";

// Mocha's describe block contains the test for the getBorderStyleForDate function's logic.
describe("getBorderStyleForDate", () => {
  // 1st test: Test getBorderStyleForDate logic with 3 days as the recentDate.
  it("returns none when the date is less than five days ago", () => {
    // Define todays date and some recent date (this test uses 3 days ago).
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 3);

    // Define the expected value and the actual value returned from
    // getBorderStyleForDate with recentDate and today as arguments.
    const expected = "none";
    const actual = getBorderStyleForDate(recentDate, today);

    // Test if the actual value and expected value are equal.
    expect(actual).to.equal(expected);
  });
  // 2nd test: Test getBorderStyleForDate logic with 7 days as the recentDate.
  it("returns a border when the date is more than five days ago", () => {
    // Define todays date and some recent date (this test uses 7 days ago).
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 7);

    // Define the expected value and the actual value returned from
    // getBorderStyleForDate with recentDate and today as arguments.
    const expected = "2px solid red";
    const actual = getBorderStyleForDate(recentDate, today);

    // Test if the actual value and expected value are equal.
    expect(actual).to.equal(expected);
  });
});
