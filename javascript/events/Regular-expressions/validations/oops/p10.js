
let user = {
    name: "john" , 
    email: "john@example.com" ,
    age: 22
}

Object.defineProperty(user,"city ",{
    value: "bangalore",
    writable: false
})

console.log(`user =`,user)
// freeze the entaire object (it will avoid re assignment)

Object.freeze(user)

user.name = "sam"
user.email = "sam@example.com"
user.age = 24
user.city = "manglore"

console.log(`after =`,user)