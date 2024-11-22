function add(numbers) {
    if (!numbers) return 0;
    const numsArr = numbers.split(',').map((item)=>parseInt(item));
    return numsArr.reduce((sum, num) => sum + num, 0);

   
    // const  numbers = numsArr.map(Number)
}

// console.assert(add("") === 0, 'Test failed: add("") should return 0');
// console.log(add("0"))

// console.assert(add("1") === 1, 'Test failed: add("1") should return 1');
// console.assert(add("2") === 1, 'Test failed: add("2") should return 2');
// console.log(add("1"))

console.log(add("1, 2"))

