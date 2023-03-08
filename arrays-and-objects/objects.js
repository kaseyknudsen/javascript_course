let x;

const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ['music', 'sports'],
};

//brackets need to be in parenthesis
x = person["age"];
console.log(`age: ${x}`);
const street = person.address["street"];
//const street = person.address.street

// console.log(street);
// console.log(person.hobbies[0]);

//this will change the name
person.name = 'Kasey Knudsen'
//console.log(person)

//delete!!
delete person.isAdmin
//console.log(person)

//add properties!
person.hasChildren = true
//console.log(person)

person.greet = function () {
    //this refers to the object
    console.log(`Hello my my name is ${this.name}`)
}

person.greet('Kasey')