// class 
// group of object (state and behaviours)

class User {
    // constructor methods -> Represent the class
    constructor() {
        // properties | states
        this.name = "John"; // non parameter classes
        this.email = "john@example.com";
        this.age = 22;
        this.isUser = false;
        this.hobbies = ["riding","driving","cycling"]
        this.account = {
            type: "Savings" ,
            bank: "SBI" ,
            num: 23343
        }
    }
    // methods | behaviors
    getUserName() {
        document.write(`<h1> username = ${this.name} </h1>`)
    }
}
// instance methods
let u = new User();
document.write(`<h1> name is = ${u.name} </h1>`)
document.write(`<h1> bank = ${u.account.bank} </h1>`)
u.getUserName()