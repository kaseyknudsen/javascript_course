const fruits = ['apple', 'pear', 'orange']
const berries = ['strawberry', 'blueberry', 'blueberry']
const breakfast = ['bagels', 'eggs', 'potatoes', 'bacon']
let x;
fruits.push(berries)

//creates a nested array
// console.log(fruits)
// [
//     'apple',
//     'pear',
//     'orange',
//     [ 'strawberry', 'blueberry', 'blueberry' ]
//   ]

x = fruits[3][2]
// console.log(x)
//blueberry

//creates 2 nested arrays inside an array
const allFruits = [fruits, berries]
// console.log(allFruits)
// console.log(allFruits[1][0])
//strawberry

const allFoods = [fruits, berries, breakfast]
// console.log(allFoods[2][0])

x = fruits.concat(breakfast)
console.log(x)

//spread operator does the same thing as concat
x = [...berries, ...breakfast]
//console.log(x)

//if we don't use the spread operator, fruits will print as an array
x = [...berries, ...breakfast, fruits]
//console.log(x)

//flatten an array!! This is a great method!
const arr = [1, 2, [3, 4], 5, [6, 7], 8]
//console.log(arr)
x = arr.flat()
//console.log(x)

//static methods on array object

//check is something is an array
x = Array.isArray(fruits)
//console.log(x)
//true

//create an array from an array-like value
x = Array.from('12345')
//console.log(x)

//create an array from a set of values
const a = 1
const b = 2
const c = 3
x = Array.of(a, b, c)
console.log(x)
// [ 1, 2, 3 ]