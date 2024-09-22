// methods as a property of constructor
function User() {
    this.name = "John";
    this.email = "john@example.com";
    this.age = 22;
    this.getUserInfo = function() {
        return "this user name is " + this.name
    };
    this.getEmail = () => {
        document.write(`<h1> email = ${this.email} </h1>`);
    };
    //local function are not consider as property of constructor 
    // scope of the local function is within the constructor
    // we can call the function within constructor 
    function test() {

    }
}
let x = new User()
document.write(`<h1> ${x.getUserInfo()} </h1>`);
x.getEmail()