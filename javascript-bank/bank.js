/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    const openedAccount = new Account(this.nextAccountNumber, holder);
    openedAccount.deposit(balance);
    this.accounts.push(openedAccount);
    this.nextAccountNumber++;
    return openedAccount.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (const account of this.accounts) {
    if (account.number === number) {
      return account;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts) {
    let assets = 0;
    for (const account of this.accounts) {
      assets += account.getBalance();
    }
    return assets;
  }
  return 0;
};
