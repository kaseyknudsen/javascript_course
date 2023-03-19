//initial expression
//condition expression
//increment expression

//this will get even numbers
// for (let i = 0; i <= 10; i += 2) {
//   console.log(`number ${i}`);
// }

// for (let i = 0; i <= 10; i++) {
//   i === 7 ? console.log(`${i} is my lucky number`) : console.log(`number ${i}`)
//   //i === 7 && console.log(`${i} is my lucky number`);
// }

//nested loops
// for (let i = 0; i <= 10; i ++) {
//     //console.log(`number ${i}`);
//     for (let j = 1; j <= 10; j++)
//     console.log(`${i} times ${j} =: ${i * j}`)
//   }

//loop through an array
const names = ["kasey", "krista", "james", "jenny"];
for (let i = 0; i < names.length; i++) {
  names[i] === "krista"
    ? console.log(`${names[i]} is the best`)
    : console.log(`name: ${names[i]}`);
}
