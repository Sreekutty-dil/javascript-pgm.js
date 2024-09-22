// Block bindings
/*
   var -> global scope(reassignable)
   let -> block scope (reassignable)
   const -> block scope (constant)
*/


if(true) {
    var x =120;
    console.log(`Block scope =`, x);
}
console.log(`Global scope =`, x);
console.log(`\n`);

// try - catch block used to handle run time exceptions

try {
    if(true) {
    let y = 500;
    console.log(`Block scope =`, y);
}
console.log(`Global scope =`, y);
} catch (error) {
    console.log(`Error =`, error);
}
console.log(`\n`);

// no declaration

try {
    var count = 30;
    console.log(`before count =`, count);
    //let count = 40; // redeclaration of another variable is a syntax error
    count = 50; // re assignment of new value to the existing variable
    console.log(`after count =`, count);
} catch (error) {
    console.log(`Error =`, error);
}
console.log(`\n`);

// re declaration is possible in block scope
let num = 34;
if(true) {
    let num = 55;
    console.log(`within block num =`, num);
}
console.log(`outside block num =`, num);

console.log(`\n`);

try {
    const age = 23;
    console.log(`Before age =`, age);
    age = 24;
    console.log(`After age =`, age);
}catch(error) {
    console.log(`Error =`, error);
}