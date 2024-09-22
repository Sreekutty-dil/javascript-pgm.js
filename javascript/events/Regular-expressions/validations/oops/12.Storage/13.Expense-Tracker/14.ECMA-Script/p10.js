// class Expression

let User = class {
    constructor() {
        this.name = "John"; // property
    }
    // method
    print() {
        console.log(`name =`, this.name);
    }
}
// instance
let ins = new User();
console.log(`instance =`, ins);
console.log(`instance =`, ins instanceof User); // true
ins.print();


/*
let User {
    constructor() {
        this.name = ""; // property
        this.age = 0; // property
    }
}
    print() {
}
*/