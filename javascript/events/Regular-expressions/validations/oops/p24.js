class Product {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }
    static Calculate(obj) {
        console.log(`obj =`, obj);
        document.write(`<h1> product = ${obj.a * obj.b} </h1>`)
    }
}

let num = new Product(10,20);

let num1 = 20;

Product.Calculate(num);

console.log(`class instance =`, num instanceof Product)// true
console.log(`object instance=`, num instanceof Product)// true

console.log(`instance of Number =`, num1 instanceof Product)// false