class CheckingAccount extends Account{
    constructor(accNumber, overdraftAmt){
        super(accNumber);
        this.overdraftAmt = overdraftAmt;
    }

    setOverdraftAmt(overAmt){
        this.overdraftAmt = overAmt;
    }

    getOverdraftAmt(){
        return this.overdraftAmt;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if ((amount + this.getOverdraftAmt()) > this.getBalance()) {
            // throw Error("Insufficient funds");
            console.log("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Account Type: Checking, Account #: " + this.getNumber() + ", balance " + this.getBalance();
    }

    endOfMonth() {
        let warning;
        if (this.getBalance() < 0) {
            warning = "Warning, low balance! ";
        }
        let msg = warning + this.toString();
        return msg;
      }
}