describe("The class SavingsAccount inherits Account class", () => {
    it("The function addInterest() adds the predefined interest to the existing balance and sets balance to the resulting amount", () => {
        let savings = new SavingsAccount(123123, 5);
        savings.deposit(15000);
        savings.addInterest();
        assert.equal(savings.getBalance(), 15750);
    });
});

describe("The class CheckingsAccount inherits Account class", () => {
    let checking = new CheckingAccount(123123, 500);
    checking.deposit(1000);
    checking.withdraw(1300);
    console.log(checking.toString());

    it("The overridden function withdraw() reduces the amount withdrawn from the bank and reduces the amount from the existing balance", () => {
        assert.equal(checking.getBalance(), -300);
    });

    it("The overridden function toString() returns a string displaying the account type, aaccount number and available balance", () => {
        assert.equal(checking.toString(), "Account Type: Checking, Account #: 123123, balance -300");
    });
});

describe("The class Bank has a collection of different types of Accounts", () => {
    let bank = new Bank();
    bank.addCheckingAccount(15000, 500);
    bank.addSavingsAccount(2000000, 1500);

    it("The function addAccount() adds an account of any type to the account list maintained in Bank class and increases the nextNumber by 1", () => {
        let actualReport = bank.accountReport();
        let expectedReport =
            "Account Type: Checking, Account #: 1, balance 15000\n" +
            "Account 2: balance 2000000\n";
        assert.equal(actualReport, expectedReport);
    });

    it("The function closeAccount() removes an account based on account number and reduces the nextNumber on bank class by 1", () => {
        bank.closeAccount(2);
        let actualReport = bank.accountReport();
        let expectedReport = "Account Type: Checking, Account #: 1, balance 15000\n";
        assert.equal(actualReport, expectedReport);
    });

    it("The function endOfMonth() ", () => {
        bank.getAccount(1).withdraw(16000);
        let actualReport = bank.endOfMonth();
        let expectedReport =
            "Warning, low balance! Account Type: Checking, Account #: 1, balance -1000\n";
        assert.equal(actualReport, expectedReport);
    });
});