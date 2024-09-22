/*
      Promise => built in constructor
      1.Resolve - onfullfilled() - .then()
      2. Reject - onrejected() - .catch()
      3. Pending - before fulfilled or rejected
      4. Settle - settle
*/
function product(a,b){
    return new Promise(function(Resolve,reject){
        if(typeof a !== "number" || typeof b !=="number"){
            return reject(new TypeError("Inputs must be numbers"))
        }
        Resolve(a * b)
    })
 }
//  let out= product(10,"12")
let out= product(10,12)

 out.then(res=> {
    console.log(`resolve=`,res);
 }).catch(err => console.log(`rejected=`,err))