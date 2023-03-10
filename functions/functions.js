//default parameters
function registerUser(user = "Marina") {
  return user + " is registered";
}

console.log(registerUser("Kasey"));

//rest parameters! You can put in as many arguments as you want!
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3));

//objects as parameters
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in.`;
}

const user = {
  id: 1,
  name: "Murphy",
};

console.log(loginUser(user));

//arrays as parameters
//create a function that will get a random number from a specific array that we pass in
//if we add rest parameters, it's going to give us an array of anything we pass in
function randomNum(...array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
console.log(randomNum(1, 2, 3, 4, 5, 6, 7, 8));

//global and function scope
//variable shadowing
const x = 5
function shadowing(num) {
    //this x will override the global x
    const x = 7
    return x + num
}
console.log(shadowing(6))

//block scope using var. 
//var is not block scoped!!! not good.
//var IS function scoped, even though it's not block scoped
if (true) {
    const a = 500
    let b = 600
    var c = 700
}
console.log(c)

//when we use var in global scope, it gets added to the window object.
//when we use let or const in global scope, it doesn't get added to the window object



