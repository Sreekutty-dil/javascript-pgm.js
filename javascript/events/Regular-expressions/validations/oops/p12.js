// Accessor properties (get / set)

let user = {
    name: "John",
    surName: "mathew"
}

Object.defineProperty(user,"fullName",{
    get: function() {
        return this.name + " " + this.surName
    },
    set: function(val) {
        [this.name,this.sureName] = val.split(" ")
    }
})

console.log(`user.fullName =`, user.fullName) // John mathew
user.surName = "david"

console.log(`user.fullName =`, user.fullName) // John david

user.name = "Sam"

console.log(`user.fullName =`, user.fullName) // Sam david