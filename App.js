function add(numbers) {
  if (!numbers) return 0;
  const numsArr = numbers.split(",").map((item) => parseInt(item));
  return numsArr.reduce((sum, num) => sum + num, 0);
}

// console.assert(add("") === 0, 'Test failed: add("") should return 0');
// console.log(add("0"))

// console.assert(add("1") === 1, 'Test failed: add("1") should return 1');
// console.assert(add("2") === 1, 'Test failed: add("2") should return 2');
// console.log(add("1"))

console.assert(add("1,2") === 3, 'Test failed: add("1,2") should return 3');
console.assert(add("1,2") === 2, 'Test failed: add("1,2") should return 3');
console.log(add("1, 2"));
