// genertor functions

// 
function *display() {
    yield "red";
    yield "blue";
    yield "green";
    yield "yellow";
}
// console.log(`call =`, display());

// genertor are called like regular functions but return an iterator
let out = display();

// console.log(`first item =`, out.next().value); // red
// console.log(`second item =`, out.next().value); // blue
// console.log(`third item =`, out.next().value); // green
// console.log(`fourth item =`, out.next().value); // yellow


 console.log(`first item =`, out.next());// { value:"red", done: flase}
 console.log(`second item =`, out.next());// { value:"white", done: flase}
 console.log(`third item =`, out.next());// { value:"green", done: flase}
 console.log(`fourth item =`, out.next());// { value:"yellow", done: flase}
 console.log(`fifth item =`, out.next());// { value: undefined, done: true }

