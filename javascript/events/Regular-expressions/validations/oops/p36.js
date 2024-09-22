// methods dynamic methods
// computed methods or computed member

// direct assignment

// dynamic property access
let mName = "getPersonInfo";

class Person {
    constructor(val) {
        this.name = val;
    }
    /*
    [mName]() {
    } */

    [mName]() {
        document.write(`<h1> User Name = ${this.name} </h1>`)
    }
}
let x = new Person("Dil");
// x.getPersonInfo() dynamic property
x[mName](); // invoke method dynamically