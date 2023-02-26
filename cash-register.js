/**
 * Design a cash register drawer function checkCashRegister() that accepts
 * purchase price as the first argument (price), payment as the
 * second argument (cash), and cash-in-drawer (cid) as the third argument.
 *
 * cid is a 2D array listing available currency.
 *
 * The checkCashRegister() function should always return an object
 * with a status key and a change key.
 *
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is
 * less than the change due, or if you cannot return the exact change.
 *
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for
 * the key change if it is equal to the change due.
 *
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in
 * coins and bills, sorted in highest to lowest order, as the value of the change key.
 * 
 * Example of a cash-in-drawer array:
 * [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]
 * 
 * Challenge URL: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
 * You can test the code at the Challenge URL
 */

function checkCashRegister(price, cash, cid) {
  // Here is your change, ma'am.
  const units = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  let returnValue = cash - price;
  let change = [];
  let status = "OPEN";

  for (let currCash of cid.reverse()) {
    let drawedAmount = 0;
    if (currCash[1] === returnValue) {
      status = "CLOSED";
      change = [...cid].reverse();
      break;
    }
    while (units[currCash[0]] <= returnValue.toFixed(2) && currCash[1]) {
      drawedAmount += units[currCash[0]];
      currCash[1] -= units[currCash[0]];
      returnValue -= units[currCash[0]];
    }
    if (drawedAmount) change.push([currCash[0], drawedAmount]);
  }
  let changeValueResult = change
    .map((e) => e[1])
    .reduce((acc, curr) => acc + curr)
    .toFixed(2);
  if (changeValueResult === (cash - price).toFixed(2)) {
    return { status, change };
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
