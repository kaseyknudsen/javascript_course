//create an instance with the promise constructor
const promise = new Promise((resolve, reject) => {
  //do some async task
  setTimeout(() => {
    console.log("async task complete");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Promise consumed");
});

//handle the promise with .then
promise.then(() => {
  console.log("Promise 2 consumed");
});

//this is to show that it's non-blocking
console.log("hello from global scope");

//to return data from a promise, you pass it into resolve
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Kasey", age: 44 });
  }, 3000);
  //user argument is whatever was passed into resolve
}).then((user) => console.log(user.name, user.age));

const getUser = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    setTimeout(() => {
      resolve({ name: "Murphy", breed: "Labradoodle", color: "dark blonde" });
    }, 4000);
  } else {
    reject("Error. No dog named Murphy!");
  }
})
  .then((dog) =>
    console.log(`Name: ${dog.name}, Breed: ${dog.breed}, Color: ${dog.color}`)
  )
  //you have to use a .catch to catch the error. it will log whatever you put in the reject argument.
  .catch((error) => console.log(error))
  .finally(() =>
    console.log(
      "Finally will run whether the promise is fulfilled or rejected."
    )
  );
