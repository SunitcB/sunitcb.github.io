class Bank {
    static nextNumber = 0;
    constructor() {
        this.accountList = [];
    }

    getAccount(number) {
        return this.accountList.filter((acc) => acc.getNumber() === number)[0];
    }

    addAccount(initialBalance) {
        Bank.nextNumber++;
        let account = new Account(Bank.nextNumber);
        account.deposit(initialBalance);
        this.accountList.push(account);
        return this.nextNumber;
    }

    addSavingsAccount(initialBalance, interestRate) {
        Bank.nextNumber++;
        let savings = new SavingsAccount(Bank.nextNumber, interestRate);
        savings.deposit(initialBalance);
        this.accountList.push(savings);
        return this.nextNumber;
    }

    addCheckingAccount(initialBalance, overdraftAmt) {
        Bank.nextNumber++;
        let checking = new CheckingAccount(Bank.nextNumber, overdraftAmt);
        checking.deposit(initialBalance);
        this.accountList.push(checking);
        return Bank.nextNumber;
    }

    closeAccount(accNumber) {
        let accountToBeRemoved = this.accountList.findIndex(x => x.getNumber() === accNumber);
        this.accountList.splice(accountToBeRemoved, 1);
    }

    accountReport() {
        return this.accountList.reduce((acc, x) => (acc + x + "\n"), "");
    }

    endOfMonth() {
        return this.accountList.reduce((acc, x) => (acc + x.endOfMonth() + "\n"), "");
    }
}
