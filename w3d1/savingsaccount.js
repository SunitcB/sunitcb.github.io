class SavingsAccount extends Account {
    constructor(accNumber, interestRate) {
        super(accNumber);
        this.setInterestRate(interestRate);
    }

    getInterestRate() {
        return this._interestRate;
    }

    setInterestRate(rate) {
        this._interestRate = rate;
    }

    addInterest() {
        this._balance = (this.getBalance() + this.getInterestRate() / 100 * this.getBalance());
    }
}