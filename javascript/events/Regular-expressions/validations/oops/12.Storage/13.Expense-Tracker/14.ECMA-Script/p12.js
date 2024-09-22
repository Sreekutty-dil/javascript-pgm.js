// generator inside the class

class Person {
    *getPerson() {
        yield "tom"
        yield "jerry"
        yield "bill"
        yield "mike"
    }
}
let x = new Person()

for(let item of x.getPerson()) {
    console.log(`name is =`, item)  // tom, jerry, bill, mike
}

class Tech {
    constructor() {
        this.course = []
    }
    *retriveCourses() {
        yield *this.course.values()
    }
}
let y = new Tech()

y.course.push("HTML")
y.course.push("CSS")
y.course.push("javascript")
y.course.push("python")

for(let item of y.retriveCourses()) {
    console.log(item)
}
