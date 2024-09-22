// object.defineProperty(obj,key,value)

// is used to add a single key:value pair from externally

let user = {}
    Object.defineProperty(user,"name",{
        value: "Tome"
    })
    Object.defineProperty(user,"age", {
        value: 22
    })
    Object.defineProperty(user,"mobile",{
        value: "9876543210",
    })
    Object.defineProperty(user,"city", {
        value: "Bangalore"
    })

    console.log(`user =`,user)

    let user1= {}
    Object.defineProperty(user1,"name",{
        value: "Dil"
    })
    Object.defineProperty(user1,"age", {
        value: 22
    })
    Object.defineProperty(user1,"mobile",{
        value: "9876543210",
    })
    Object.defineProperty(user1,"city", {
        value: "Kerala"
    })

    console.log(`user =`,user1)

