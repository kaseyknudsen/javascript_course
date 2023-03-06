//Array constructor is an option to creating an Array literal
let fruits;
let x;

fruits = new Array('apples', 'bananas', 'oranges')

//because arrays are mutable, this is possible:
fruits[2] = 'mango'
console.log(fruits)

fruits.length = 2
x = fruits
console.log(`fruits length after mutating length: ${x}`)
console.log(typeof x)
console.log(typeof fruits)
//fruits length after mutating length: apples,bananas
//object
//objects

//this will always add one to the end because the index is always 1 less than the length
fruits[fruits.length] = 'blueberry'
console.log(`fruits after adding blueberry: ${fruits}`)
//fruits after adding blueberry: apples,bananas,blueberry