//Business Logic for Ledger

function Ledger(){
  this.accountList = {};
  this.currentId = 0
}

Ledger.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accountList[account.id] = account;
};

Ledger.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Ledger.prototype.findAccount = function (id) {
  if (this.accountList[id] != undefined){
    return this.accountList[id];
  }
  return false;
}

Ledger.prototype.deposite = function (id, depositeAmount) {
newBalance = ledger.accountList[id].accountBalance + parseInt(depositeAmount);
console.log(newBalance);
ledger.accountList[id].accountBalance = newBalance;
}

Ledger.prototype.withdrawl = function (id, withdrawlAmount) {
  newBalance = ledger.accountList[id].accountBalance - parseInt(withdrawlAmount);
  ledger.accountList[id].accountBalance = newBalance;
  console.log(newBalance);
  }

//Business Logic for Accounts

function Account(personName, accountBalance) {
  this.personName = personName;
  this.accountBalance = parseInt(accountBalance);
}

let ledger = new Ledger();
let account = new Account("Lovelace", "500");
let account2 = new Account("Hopper", "199");
ledger.addAccount(account);
ledger.addAccount(account2);
