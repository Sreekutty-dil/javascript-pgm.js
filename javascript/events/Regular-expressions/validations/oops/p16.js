// parameterised constructor

function Course(x, y,z) {
    this.title = x;
    this.type = y;
    this.duration = z;
}

let c1 =  new Course("React","Frontend",1.5);
document.write(`<h1> title = ${c1.title} , type of course = ${c1.type} and duration is = ${c1.duration}months </h1>`)

let c2 =  new Course("Node","Backend",2);
document.write(`<h1> title = ${c2.title} , type of course = ${c2.type} and duration is = ${c2.duration}months </h1>`)