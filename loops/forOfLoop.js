/* for of can be used on over arrays or strings */

//arrays
const users = [
  { name: "Kasey", age: 44 },
  { name: "James", age: 79 },
  { name: "Krista", age: 48 },
  { name: "Jenny", age: 49 },
  { name: "Erik", age: 41 },
];

// for (const user of users) {
//     console.log(Object.values(user).join(", "))
// }

//loop through strings
// const str = 'Hello World!'
// for (const letter of str) {
//     console.log(letter)
// }

//loop over maps
const map = new Map()
map.set('name', 'Kasey')
map.set('age', 44)
console.log(map)
for (const [key, value] of map) {
    console.log(key, value)
}

