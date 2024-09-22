// object declaration to const
const user = {
    name: "John",
};
console.log(`before user =`,user);
// con't re-assign as an object
// user = {
// name: "John",
// }

// re-assign to the property is possible in object - it works
user.name = "John";
console.log(`after user =`,user);