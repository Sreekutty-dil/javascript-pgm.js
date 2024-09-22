 /*
 Alias :-
// Accessors method defined using set and get keywords
// Accessor method called as property
// -age is alias property
// userAge main property
 */
class Person {
    constructor() {
        this._name = "";
        this._age = 0; // alias property
    } 
    set name(val) {
        this._name = val; // set and get accesors
    }
    get name() {
        return this._name; // set and get accesors
    }
    // assign the value to the alias property 
    set userAge(val) {
        this._age = val; // set and get accesors
    }
    // read the value from the alias property
    get userAge() {
        return this._age;
    }
}
let x = new Person();
console.log(`person =`, x);
x.name = "John";
x.userAge = 12; // alias property
// x.userAge(12);

console.log(`age is =`,x.userAge); // alias property
// console.log(`age is =`,x.userAge());

console.log(`name is=`,x.name); // alias property