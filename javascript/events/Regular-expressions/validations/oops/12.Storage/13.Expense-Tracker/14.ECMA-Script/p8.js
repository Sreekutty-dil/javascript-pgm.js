// object array concat using spread

let user = [
    {
        id: 1,
        name: "John"
    },
    {  
        id: 2,
        name: "Harry"
    }
]
let emp = [
    {
        id: 11,
        name: "Michael"
    },
    {
        id: 14,
        name: "Sara"
    },
    {
        id: 35,
        name: "David"
    }
]
let user1 = [
    {
        id: 24,
        name: "Robert"
    }
]

let res = [...user, ...emp, ...user1]

console.log(`user =`, user)
console.log(`user1 =`, user1)
console.log(`emp =`, emp)

console.log(`res =`, res) // merged array
