//function declaration
function addDollarSign(value) {
  return "$" + value;
}
console.log(addDollarSign(25));

//function expression: assign function to a variable
const addPlusSign = function (value) {
  return "+" + value;
};

console.log(addPlusSign(15));

/* add a semi colon to the end of function expressions,
but not to the end of function declarations */

/* HOISTING: with function declaration, you can call the function from
the top of the page and it will hoist it to the top. You can't do that with
function expression */
