/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  if (this.transactions.length) {
    let count = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === 'withdrawal') {
        count -= transaction.amount;
      }
      if (transaction.type === 'deposit') {
        count += transaction.amount;
      }
    }
    return count;
  }
  return 0;
};
