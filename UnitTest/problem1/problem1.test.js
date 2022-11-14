const absolute = require("../problem1/problem1");

describe("absolute", () => {
  it("will return positive number if input is positive", () => {
    expect(absolute(1)).toBe(1);
  });
  it("will return positive number if input is negative", () => {
    expect(absolute(-1)).toBe(1);
  });
  it("will return zero if input is zero", () => {
    expect(absolute(0)).toBe(0);
  });
});
