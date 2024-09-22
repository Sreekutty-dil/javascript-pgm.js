// write protect in defineProperty and defineProperties

let user ={}

Object.defineProperty(user, 'name', {
    value: 'Sree',
    writable: false
})

/*
writable => true = re-assign another value to / re write
*/
console.log(`user =` , user)

user.name = 'Dil'

console.log(`user =` , user)