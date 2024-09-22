// __proto__ 

let u1 = {
    name: "john",
    email: "john@example.com"
}

let u2 = {
    age: 22,
    mobile: '9876543210',
    __proto__: u1
}
let u3 = {
    city: 'Bangalore',
    __proto__: u2
}
let u4 = {
    state: "kerala",
    __proto__: u3
}
console.log(`u4 =`,u4)
