// spread and rest operators (...var)
// function sumofNum(x) { // 10 only

// rest operator => parameter to array
let sum = 0;
function sumofNum(...x) { // rest operators
    console.log(`x =`,x);
    x.forEach(item => {
        sum += item;
    })
    console.log(`sum of all numbers =`, sum);
}
sumofNum(10,12,3,5,59,49,59,69,24,99);
console.log(`\n`);

// spread operator => array to parameter
let y = 24;
let z = 34;
console.log(`max =`, Math.max(y, z));

console.log(`max =`, Math.max(10,43,3,44,29,90,5));// 90

let inp = [10,12,3,5,59,49,89,69,24,39]
console.log(`inp =`, Math.max(inp)); // NaN
console.log(`max =`, Math.max(...inp)); // 99