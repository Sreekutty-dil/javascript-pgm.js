/* 
     Wallet class
          balance property
    methods
          debit() -> withdraw from balance
          credit() -> deposit into balance

*/
class Wallet{
    constructor(bal) {
        this.balance = bal;
    }
    // withdraw
    debit(val) {
        if(this.balance > val) {
            this.balance = this.balance - val;
            document.write(`<h1> Sorry , Insuffient balance is &#8377; ${this.balance} </h1>`)
        } else {
            this.balance -= val;
            document.write(`<h1> Amount of &#8377; ${val} is debited from wallet. and balnce is &#8377; ${this.balance} </h1>`)
        }
    }
    // deposit
    credit(val) {
        this.balance = this.balance + val;
        document.write(`<h1> Amount of &#8377; ${val} is created to wallent.and balance is &#8377; ${this.balance} </h1>`)
    }
}
let x = new Wallet(0);
x.credit(1000);
x.credit(456);

x.debit(200);
x.debit(1234.62);