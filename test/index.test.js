const expect = require("chai").expect;
const numbers = [1, 2, 3, 4, 5];

// multiply array items by 2
const multiplyBy2 = numbers => numbers.map(number => number * 2);
const result = multiplyBy2(numbers);

describe("simple test", () => {
  it("should be an array", () => {
    expect(numbers)
      .to.be.an("array")
      .that.includes(2);
  });

  it("should multiply array items by 2", () => {
    expect(result).to.eql([2, 4, 6, 8, 10]);
  });
});
