// temporal dead zone
if(true) {
    // let val = "blue";
    //console.log(`value =`,val); // throw an error
    let val = "blue";
}

// block bindings in loops

for(var i = 0; i < 2; i++) {
    console.log(`block  =`,i);
}

 console.log(`outside block i =`,i); 
 console.log(`\n`);

 for(let j = 0; j < 2; j++) {
    console.log(`block  =`,j);
}

 console.log(`outside block j =`,j); // throw an error