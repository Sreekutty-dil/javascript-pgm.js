/*
                   Constructor
   1. syntax following function and object
   2. name of constructor first letter uppercase (not mandatory)
   3. constructor cann't return
   4. variables and functions declared with in constructor body we call as (properties of the constructor)
   5. properties of constructor create using "this" keyword
   6. to access properties of constructor by creating instance of the constructor using new keyword 

   function Sample() {
   this.property = "value";
   }

   type ins = new Constructor()
   let y = new Sample()
    y.property 
  
*/
function User() {
    this.x = 20;
    this.y = 30;
    this.str = "welcome to string";
    this.isUser = true;
    this.a = null;
    this.b = undefined;
    this.x = 245;
}

// instance using new keyword
let ins = new User()
console.log(`instance of user =`, ins);
document.write(`<h1> x = ${ins.x} and y = ${ins.y}</h1>`)