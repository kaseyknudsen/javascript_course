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
