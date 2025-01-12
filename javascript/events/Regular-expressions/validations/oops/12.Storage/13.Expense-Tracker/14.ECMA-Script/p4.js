// function in loops

var funs = [];

for(var i = 0; i < 10; i++) {
    funs.push(function(){
        console.log(`output=`, i);  // prints 10 instead of i
    });
}
console.log(`funs =`, funs);
funs.forEach((item) => {
    item(); // call -> outputs the number "10" ten times
});

console.log(`\n`);

// nested functions //block level declaration of methods
var funs1 = [];

for(var i = 0; i < 10; i++) {
    funs1.push((function(val) {
        return function() {
            console.log(`output=`, val);  // prints val instead of i
        }
    }(i)));
}

console.log(`funs1 =`, funs1);

funs1.forEach((item) => {
    item(); // call -> outputs the number 0 to 9
});
