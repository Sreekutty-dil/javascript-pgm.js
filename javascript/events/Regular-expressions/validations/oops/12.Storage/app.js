// submit handler
function submitHandler(event) {
    event.preventDefault(); // to avoid page refresh
    // read the input
    let fname = document.getElementById("name").value;
    console.log(`name =`,fname);
    store(fname)
}

// store logic 
function store(name) {
    localStorage.setItem("username", name);
    alert("username stored successfully");
    window.location.reload(); // refershing current page
}
// remove logic
function remove(key) {
    if(confirm("Do you want to delete user name ?")) {
        localStorage.removeItem(key);
        alert("username removed successfully deleted");
        window.location.reload(); // refershing current page
    } else {
        alert("Delete terminated successfully");
    }
}
readName()
//read logic
function readName(){
    let name=localStorage.getItem("username");
    let out=document.querySelector(".output");
    if(!name) {
        out.innerHTML = `<h1>No username</h1>`;
    } else {
        out.innerHTML = `<h1>Username is= ${name} <span onclick="remove('username')" class="btn danger">&times;</span></h1>`;
    }
}
readName()