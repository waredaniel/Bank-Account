//Business Logic for Ledger

function Ledger(){
  this.accountList = {};
  this.currentId = 0
}

Ledger.prototype.addAccount = function(Account) {
  account.id = this.assignId();
  this.accountList[account.personName] = account;
};

Ledger.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

//Business Logic for Accounts

function Account(personName, accountBalance) {
  this.personName = personName;
  this.accountBalance = accountBalance;
}

