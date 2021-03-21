const { create, all } = require("mathjs");
// configure the default type of numbers as BigNumbers
const config = {
  // Default type of number
  // Available options: 'number' (default), 'BigNumber', or 'Fraction'
  number: "BigNumber",

  // Number of significant digits for BigNumbers
  precision: 20,
};
const math = create(all, config);
const { evaluate, add, bignumber } = math;

let a = 0.1;
let b = 0.2;

console.log(a + b);
console.log(add(a, b));

console.log(evaluate(a + b));
console.log(evaluate(`${a} + ${b}`));
console.log(add(bignumber(a), bignumber(b)));
