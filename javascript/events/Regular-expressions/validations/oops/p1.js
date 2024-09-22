/*object -> group of properties

prototype
     let object = {
          key: value,
          key: value
     }
*/

let user = {
    name: "John",
    age: 22,
    isUser: true,
    hobbies: ["riding","driving","cycling"],
    bank: {
        name: "SBI"
    },
    getUser: function() {
        return `My Name is ${this.name}`
    },
    // this pointer cann't access other property values
    getAge: () => {
        document.write(`<h1> age is ${this.age}</h1>`)// undefined
    }
}
console.log(`username =` , user.name)
console.log(`age =` , user["age"])
console.log(`isUser =` , user["isUser"])

user.hobbies.forEach((item,index) => {
    document.write(`<h1> ${index} ${item}</h1>`)
});

document.write(`<h1> Bank name = ${user.bank.name}</h1>`)
document.write(`<h1> method = ${user.getUser()}</h1>`)

user.getAge()