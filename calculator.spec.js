const performOperation = require('./calculator').performOperation;
const performOperations = require('./calculator').performOperations;

describe("calculator", () => {
  it("shouldReturnZeroOnOneMinusOne", () => {
    expect(performOperation("subtract", 1, 1)).toEqual(0);
  });
  it("shouldReturnZeroOnMinusOnePlusOne", () => {
    expect(performOperation("add", -1, 1)).toEqual(0);
  });
  it("shouldReturnOneOnZeroPlusOne", () => {
    expect(performOperation("add", 0, 1)).toEqual(1);
  });
  it("shouldReturnMinusOneOnOneMinusTwo", () => {
    expect(performOperation("subtract", 1, 2)).toEqual(-1);
  });
  it("shouldMultiply", () => {
    expect(performOperation("multiply", 3, 4)).toEqual(12);
  });
  it("shouldDivide", () => {
    expect(performOperation("divide", 6, 2)).toEqual(3);
  });

});

describe.skip("multiple operations", () => {

  it("onePlusOneEqualsTwo", () => {
    expect(performOperations("1 + 1")).toEqual(2);
  });
  it("oneMinusTwoEqualsMinusOne", () => {
    expect(performOperations("1 - 2")).toEqual(-1);
  });
  it("shouldSupportMultipleOperations", () => {
    expect(performOperations("1 - 2 + 3 + 1")).toEqual(3);
  });
  it("shouldIgnoreIllegalCharacterSequences", () => {
    expect(performOperations("1 + + + asd 2 - 1 + 4")).toEqual(6);
  });
  it("shouldAlwaysUseLastKnownOperation", () => {
    expect(performOperations("1 + + - asd 2")).toEqual(-1);
  });

});
