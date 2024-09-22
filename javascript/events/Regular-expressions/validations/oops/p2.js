
// object methods
let user = {
    name: "John",
    email: "john@example.com",
    age: 22,
    isUser: true
}

// Object constructor

// Object.create(obj) -> it will copy/clone the object prototype

console.log(`user =` , user)

// Object.create(obj) -> it will copy/clone the object prototype
let newObj = Object.create(user)

console.log(`newObj =` , newObj)
