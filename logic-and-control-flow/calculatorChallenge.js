/* takes 3 parameters, num1, num2, & operator that must be *, -, +, or /
return the result of the calculation 
if anything other than the operators that are listed, function should return an error message*/

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "*":
      return num1 * num2;

    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "/":
      return num1 / num2;

    default:
      return "You have entered an incorrect operator";
  }
};

console.log(calculator(3, 3, "&"));
