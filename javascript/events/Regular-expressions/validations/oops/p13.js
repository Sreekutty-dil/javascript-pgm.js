// Object.keys() and Object.values()

let user = {
    name: "Mike",
    email: "mike@example.com",
    phone: "123-456-7890" ,
    age: 25,
    city: "New York"
}

console.log(`user =`, user)

let res1 = Object.keys(user) // array of keys
let res2 = Object.values(user)// array of values

console.log(`keys =`, res1)
console.log(`values =`, res2)

for(let item in user) {
    document.write(`<h1> ${item}: ${user[item]}</h1>`)
}