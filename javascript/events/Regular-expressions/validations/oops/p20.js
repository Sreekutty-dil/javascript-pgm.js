// prototype inheritance

function User(em) { // internal property
    this.name = "Sree";
    this.email = em;
    this.getUserInfo = function() {
        document.write(`<h1> name = ${this.name} and email = ${this.email} </h1>`)
    }
}
User.prototype.age = 22; // protopype property extenal property
User.prototype.getInfo = function() {
    document.write(`<h1> name = ${this.name} and age = ${this.age}</h1>`)
}

function Base() {

}
// inherit by__proto__
Base.prototype.__proto__ = User.prototype

let x = new Base();

console.log(`x =`,x)
// internally declared properties can't inhert
console.log(`name =`,x.name)
console.log(`email =`,x.email)
//external property (prototype property) are inherted
console.log(`age =`,x.age);

x.getInfo()
// x.getUserInfo() throw a run time method call error
