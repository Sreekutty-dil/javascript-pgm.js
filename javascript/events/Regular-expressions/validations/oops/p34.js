// basic structure of class


class User {
    constructor() {
        this.name = ""; // property
        this.age = 0; // property
    }
    // method
    setVal(a,b) {
        this.name = a;
        this.age = b;
    }
    getVal() {
        return this.name + " " + this.age;
    }
}
let y = new User();
console.log(`method =`,y);
y.setVal("John", 20);
console.log(`name and age =`, y.getVal());

