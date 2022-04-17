const { add, multiply } = require("./maths");

describe("Addition tests", () => {
  test("should add 1 + 3 and give 4", () => {
    expect(add(1, 3)).toBe(4);
  });

  test("should add 1 - 3 and give -2", () => {
    expect(add(1, -3)).toBe(-2);
  });
});

describe("Multiplication tests", () => {
  test("should multiply 4 x 5 and give 20", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test("should multiply 5 x 5 and give 25", () => {
    expect(multiply(5, 5)).toBe(20);
  });
});
