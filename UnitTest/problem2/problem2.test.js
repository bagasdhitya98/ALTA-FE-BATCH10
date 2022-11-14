const studentScore = require("../problem2/problem2");

describe("studentScore", () => {
  test("Test 1", () => {
    expect(studentScore(80)).toEqual("A");
  });
  test("Test 2", () => {
    expect(studentScore(75)).toEqual("B+");
  });
  test("Test 3", () => {
    expect(studentScore(95)).toEqual("A");
  });
  test("Test 4", () => {
    expect(studentScore(60)).toEqual("B");
  });
  test("Test 5", () => {
    expect(studentScore(30)).toEqual("D");
  });
  test("Test 6", () => {
    expect(studentScore(-1)).toEqual("invalid");
  });
});
