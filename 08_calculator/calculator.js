const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(nums) {
	let totalSum = 0;
  for (let num of nums) {
    totalSum += num;
  };
  return totalSum 
};

const multiply = function(prods) {
  let val = 1;
  for (let prod of prods) {
    let newProd = prod * val;
    val = newProd;
  }
  return val;
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
  let nextNum = num;
  let fact = 1;
  while (nextNum >= 1) {
    fact = nextNum * fact;
    nextNum--;
    console.log(nextNum)
  }

  return fact
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
