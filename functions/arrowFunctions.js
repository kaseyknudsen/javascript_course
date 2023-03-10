//implicit return
const add = (a, b) => a + b;

console.log(add(4, 5));

//when you have a single parameter, you don't need parenthesis
const double = (a) => a * 2;
console.log(double(20));

// const double = a => a * 2;
// console.log(double(20));

//returning an object
//if you want to return an object, surround the curly braces with parenthesis
//if we don't include parenthesis, we will get undefined
const createObject = () => ({
  name: "Kasey",
});

console.log(createObject());

const numbers = [1, 2, 3, 4, 5];

//forEach with arrow function
numbers.forEach((num) => console.log(num));
