// concat an array using spread operator

let x = [12,30,4,65]
let y = [1,3,5,7,8]
let z = [34,52,51,42,35]

let res = [...x,...y,...z]
console.log(`res =`, res);