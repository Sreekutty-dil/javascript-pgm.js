// prototype keyword
// used to add properties to the constructor externally

function Car() {
    
}
// constructor.prototype.property = value;
Car.prototype.title = "Innova";
Car.prototype.color = "red";
Car.prototype.year = 2024;

let car1 = new Car()

Car.prototype.getCarInfo = function() {
    document.write(`<h1> Car is ${this.title} , color is ${this.color} and year is ${this.year}`)
}

let x = new Car();
x.getCarInfo()

console.log(`title =`,x.title)
console.log(`color =`,x.color)
console.log(`year =`,x.year)

console.log(`\n`)

function Area() {

}
// constructor.prototype.property = value;
Area.prototype.area = 4;


Area.prototype.getCircleInfo = function() {
    document.write(`<h1> Circle radius is ${this.area * this.area} </h1>`)
}
let Y = new Area();
Y.getCircleInfo();

console.log(`area =`,Y.area);
