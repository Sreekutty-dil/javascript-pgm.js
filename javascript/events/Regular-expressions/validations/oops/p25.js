
class Course {
    //constructor
    constructor(title) {
        this.title = "React";
        console.log(`constructor called`)
    }
    // non static methods
    getTitle() {
        document.write(`<h1> title = ${this.title} </h1>`)
    }
    // static methods
    static detail(a,b) {
        document.write(`<h1> title = = ${a} and duration = ${b} </h1>`)
    }
}

// static methods call
Course.detail("React","1 month")
let x = new Course()