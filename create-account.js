function createAccount(pin, amount) {
  return (function(){
    let balance = amount || 0;
    let myPIN = pin;
    const checkBalance = (pin) => {
      if (pin === myPIN) return `$${balance}`;
      return "Invalid PIN.";
    }
    const deposit = (pin, amt) => {
      if (pin === myPIN){
        balance += amt;
        return `Successfully deposited $${amt}. Current balance: $${balance}.`
      }
      return "Invalid PIN.";
    }
    const withdraw = (pin, amt) => {
      if (pin !== myPIN) return "Invalid PIN.";
      if (amt <= balance){
        balance -= amt;
        return `Successfully withdrew $${amt}. Current balance: $${balance}.`
      }
      return "Withdrawal amount exceeds account balance. Transaction cancelled.";
    }
    const changePin = (pin, newPIN) => {
      if (pin === myPIN){
        myPIN = newPIN;
        return "PIN successfully changed!";
      }
      return "Invalid PIN.";
    }
    return {
      checkBalance, deposit, withdraw, changePin
    }
  })();
}

module.exports = { createAccount };
