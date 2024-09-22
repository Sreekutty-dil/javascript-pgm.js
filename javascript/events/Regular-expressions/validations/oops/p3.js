// object.getPrototypeOf() and setPrototypeOf()

let car = {
    titile: "Innova",
    company: "toyota",
    model: 2024,
    color: "blue"
}
let car1 = Object.create(car)

console.log(`car =` , car)
console.log(`car1 =` , car1)

// retrive the object properties from prototype
let car2 = Object.getPrototypeOf(car1)

console.log(`getprototype =` , car2)

// to update new set of property to the cloned object
let car3 = Object.getPrototypeOf(car1, {
    titile: "Thar",
    company: "mahindra",
    model: 2023,
    color: "red"
})

console.log(`car3 =` , car3)
let car4 = Object.getPrototypeOf(car1)
console.log(`getprototype =` , car4)

