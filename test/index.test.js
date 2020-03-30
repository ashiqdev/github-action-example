const expect = require("chai").expect;
const numbers = [1,2,3,4,5];

expect(numbers).to.be.an('array').that.includes(2);