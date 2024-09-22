// static methods
/*
1. declare the static methods inside the class body using static 
2. static method  can't called using instance of class
3. static method can be called using Name of class
4. "this" pointer is in accessiable inside the static methods
*/

class Car {
    constructor(title,company,type,color) {
        this.title = title;
        this.company = company;
        this.type = type;
        this.color = color;
    }
    getCarName() {
        return "Car name is " + this.title;
    }
    static getCarColor() {
        return "Car color is " + this.color;
    }
    
}
let x = new Car("Innova","Toyota","Diesel","White");
document.write(`<h1> ${x.getCarName()} </h1>`)
//document.write(`<h1> ${x.getCarColor()}</h1>`)

console.log(`static method =`,Car.getCarColor());

