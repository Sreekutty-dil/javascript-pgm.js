/*
task -1
wallet
_balance - alias
  balance property
  transactions -> credit(val) set balance
                -> debit(val) get balance
*/

class Wallet {
    constructor() {
        this._balance = 0;
        this.type =  "";

    }
    //debit
    set balance(val) {
        if(this.type === "debit")
        {
            if(val > this._balance) {
                console.log(`Insufficient balance`)
            }
            else {
               this._balance -= val;
            }
        } else if(this.type === "credit"){
            this._balance += val;
        }
        else{
            console.log(`Enter correct type of transaction`)
        }
    }
   //retrieve the balance
   get balance() {
    return this._balance

   }
}

let x = new Wallet()
x.type = "credit";
x.balance = 1200;
console.log(`type =`,x.type)
console.log(`balance =`,x.balance)

x.type = "credit";
x.balance = 450;
console.log(`type =`,x.type)
console.log(`balance =`,x.balance)


x.type = "debit";
x.balance = 10;
console.log(`type =`,x.type)
console.log(`balance =`,x.balance)



