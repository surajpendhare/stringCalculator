function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n/);
    if (match) {
      delimiter = new RegExp(match[1]); 
      numbers = numbers.slice(match[0].length);
    }
  }

  const numsArr = numbers.split(delimiter).map((item) => parseInt(item));
  return numsArr.reduce((sum, num) => sum + num, 0);
}

// console.assert(add("") === 0, 'Test failed: add("") should return 0');
// console.log(add("0"))

// console.assert(add("1") === 1, 'Test failed: add("1") should return 1');
// console.assert(add("2") === 1, 'Test failed: add("2") should return 2');
// console.log(add("1"))

// console.assert(add("1,2") === 3, 'Test failed: add("1,2") should return 3');
// console.assert(add("1,2") === 2, 'Test failed: add("1,2") should return 3');
// console.log(add("1, 2"));

// console.assert(add("1,2,3") === 6, 'Test failed: add("1,2,3") should return 6');
// console.assert(add("5,10,15,20, 25, 30") === 110, 'Test failed: add("10,20,30,40") should return 105');
// console.log(add("1,2,3"));
// console.log(add("5,10,15,20, 25, 30"));

// console.assert(add("1\n2,3") === 6, 'Test failed: add("1\n2,3") should return 6');
// console.assert(add("4\n5\n6") === 15, 'Test failed: add("4\n5\n6") should return 15');
// console.log(add("1\n2,3"));

console.assert(
  add("//;\n1;2") === 3,
  'Test failed: add("//;\n1;2") should return 3'
);
console.log(add("//;\n1;2"));
