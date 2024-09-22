// class inheritance

class SuperClass {
    // super class constructor
    constructor() {
        //super class properties
        this.name = "John"
    }
    // super class method
    getName() {
        return this.name;
    }
}

class BaseClass extends SuperClass {
    constructor() {
        super(); // invokes the super class constructor
    }
}
let x = new BaseClass();
console.log(`name is =`,x.name);
console.log(`name is =`,x.getName());