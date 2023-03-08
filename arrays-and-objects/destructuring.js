const toDo = {
  id: 1,
  title: "Walk Murphy",
  user: {
    name: "Dad",
    age: 79,
  },
};

//const { id, title, user } = toDo;
//console.log(id);
//console.log(user);
//{ name: 'Dad', age: 79 }

// const {
//   id,
//   title,
//   user: { name },
// } = toDo;
// console.log(id);
// //you can do this!
// console.log(name);

//we can rename the variables
//if we use curly braces, we are destructuring. If we don't, we are just renaming.
const {
  id: todoId,
  title: newTitle,
  user: { newName },
} = toDo;
//console.log(todoId);
//you can do this!
//console.log(newName);

//destructure arrays
const numbers = [23, 67, 33, 49]

// const [first, second] = numbers
// console.log(first, second)

//rest operator is the same as the spread operator, but in this use case it is the rest operator
//console.log rest will log an array
const [first, second, ...rest] = numbers
console.log(first, second, rest)
//23 67 [ 33, 49 ]
