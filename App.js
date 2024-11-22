function add(numbers) {
    if (!numbers) return 0;
    return parseInt(numbers, 10);
}

console.assert(add("") === 0, 'Test failed: add("") should return 0');
console.log(add("0"))