/*
In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

Change Calculator
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these 
numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. 
Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Instruction
Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. 
Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that 
you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

Valid denominations are as follows:

Twenty dollars (2000)
Ten dollars (1000)
Five dollars (500)
Two dollars (200)
One dollar (100)
Quarter (25¢) (25)
Dime (10¢) (10)
Nickel (5¢) (5)
Penny (1¢) (1)
*/

const calculateChange = function (total, cash) {
  const money = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  };

  let amountToGive = {};
  let result = 0;
  let cashQty = 0;
  let isBiggestCash = false;

  keys = Object.keys(money);
  values = Object.values(money);

  for (let i = 0; i < values.length; i++) {
    let remainder = cash - total;

    //verify which is the largest amount of cash to give
    if (remainder > values[i] && isBiggestCash === false) {
      const maxCashQty = parseInt(remainder / values[i]);
      result = parseInt(remainder - values[i] * maxCashQty);
      isBiggestCash = true;
      amountToGive[keys[i]] = maxCashQty;
    }

    // calculate remaining cash to give
    if (result > values[i] && values[i] !== 1) {
      cashQty = parseInt(result / values[i]);
      result = parseInt(result - values[i] * cashQty);
      amountToGive[keys[i]] = cashQty;
    }

    if (values[i] === 1) {
      cashQty = result;
      amountToGive[keys[i]] = cashQty;
    }
  }
  return amountToGive;
};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

module.exports = calculateChange;
