// super class

class Account {
    constructor(ac,bl) {
        this.account = ac;
        this.balance = bl;
    }
    // withdrawal
    debit(val) {
        if(this.balance > val) {
            document.write(`<h1> Insufficient balance in account </h1>`)
        } else {
            this.balance -= val;
            document.write(`<h1> Amount of &#8377; ${val} is debited from your account. and balnce is &#8377; ${this.balance} </h1>`)
        }
    }
    // deposit
    credit(val) {
        this.balance += val;
        document.write(`<h1> Amount of &#8377; ${val} is credited to your account. and balnce is &#8377; ${this.balance} </h1>`)
    }
    getAccountInfo() {
        return `Account id : ${this.account} and  Balance is : &#8377; ${this.balance}.`;
    }
}
// base class
class User extends Account {
    constructor(na,acc,bal) {
        super(acc,bal)
        this.name = na;
    }
    getCompleteInfo() {
        return `Hi , ${this.name} your account details is ${this.getAccountInfo()}`;
    }
}
let u1 = new User("tom",123445,24000);
document.write(`<h1> ${u1.getCompleteInfo()} </h1>`)

u1.credit(2400)

document.write(`<h1> ${u1.getCompleteInfo()} </h1>`)

u1.debit(245.55)

document.write(`<h1> ${u1.getCompleteInfo()} </h1>`)