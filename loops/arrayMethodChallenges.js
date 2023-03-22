/* challenge 1: take the people array and create an array called youngPeople
that stores objects with only name and email properties that are
25 and under. the name property should have their first and last name and email address */

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 26,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "sara@gmail.com",
    phone: "444-444-4444",
    age: 25,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 25,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((youngPerson) => {
    return {
      name: `${youngPerson.firstName} ${youngPerson.lastName}`,
      email: youngPerson.email,
    };
  });

console.log(youngPeople);

/* add all of the positive numbers in the array */
const numbers = [2, -30, 50, 20, -12, -9, 7];

const findSumOfPositiveNums = () => {
  const positiveNums = numbers
    .filter((num) => num >= 0)
    .reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);
  return positiveNums;
};

console.log(findSumOfPositiveNums());

/* challenge 3: create a new array called capitalize words with the words array with
the first letter of each word capitalized */
const words = ["coder", "programmer", "developer"];

const newArray = words.map((word) => word[0].toUpperCase() + word.slice(1));
console.log(newArray);
