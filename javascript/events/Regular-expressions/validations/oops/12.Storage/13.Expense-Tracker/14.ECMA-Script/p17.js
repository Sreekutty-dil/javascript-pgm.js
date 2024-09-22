// api call using promises

const readData = async() => {
    await fetch(`https://dummyjson.com/recipes?limit=40`)
    .then(res => res.json())
    .then(res => {


console.log(`respond=`,res);
    }).catch(err => console.log(err))

}
readData()