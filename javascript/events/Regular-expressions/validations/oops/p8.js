// object.defineProperties()

let user = {}

Object.defineProperties(user, {
    name: {
        value: "Mike",
        writable: true
    },
    city: {
        value: "New York",
        writable: false
    },
    getName: {
        value: function() {
            return `<h1>name is ${this.name}</h1>`
        }
    },
    getEmail: {
        value: () => {
            // inside the arrow function this pointer return undifined 
            document.write(`<h1>email id is = ${this.email}</h1>`)
        }
    }
})

console.log(`user =`,user)

// to avoid runtime errors(exceptions)
try {
    user.name = "John"
    user.city = "Los Angeles"
    user.email = "john@example.com"
}
catch(error) {
    console.log(error)
}
console.log(`after =`,user)