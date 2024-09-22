/* array
object (properties) key: value
map => value (key => value) array of array
*/

let car = {
    title: "Jeep" ,
    company: "wrangler" ,
    year: 2024
}
console.log(`object =`, car)

//convert the object into entries
let out = Object.entries(car)
console.log(`entries (array of key & values) =`, out)// array of key: value

//to entries
let ent = new Map(out)
console.log(`map constructor =`, ent) // key: value map

//convert from entries back into object
let obj = Object.fromEntries(ent)
console.log(`object =`, obj)