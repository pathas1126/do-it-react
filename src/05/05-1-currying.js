const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

function multiplyTwo(a) {
  return multiply(a, 2);
}

const multiplyX = x => a => multiply(a, x);
const addX = x => a => add(a, x);

const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

const result1 = multiplyThree(3);
const result2 = multiplyFour(3);

console.log(result1, result2);

const result3 = multiplyX(3)(5);
const result4 = multiplyX(4)(5);

console.log(result3, result4);

const equation = (a, b, c) => x => x * a * b + c;
const formula = equation(2, 3, 5);
const x = 10;
const result = formula(x);

console.log(result);

const addFour = addX(4);
const result5 = addFour(2);
console.log(result5);

const result6 = multiplyX(5)(2);
console.log(result6);

const result7 = multiplyX(3)(2);
console.log(result7);

const formula2 = x => addFour(multiplyThree(multiplyTwo(x)));
const result8 = formula2(5);
console.log(result8);

const compose = [multiplyTwo, multiplyThree, addFour].reduce(
  function(prevFunc, nextFunc) {
    return function(value) {
      return nextFunc(prevFunc(value));
    };
  },
  function(k) {
    return k;
  },
);

const result9 = compose(2);
console.log(result9);
