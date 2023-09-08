const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	return numArray.reduce((sum, currentValue) => sum + currentValue, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((product, currentValue) => product * currentValue);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
	if (num === 0) return 1;
  return num * factorial(--num);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
