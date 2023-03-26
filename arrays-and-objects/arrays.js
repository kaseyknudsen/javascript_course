//Array constructor is an option to creating an Array literal
let fruits;
let x;
let y;

fruits = new Array("apples", "bananas", "oranges");

//because arrays are mutable, this is possible:
fruits[2] = "mango";
console.log(fruits);

fruits.length = 2;
x = fruits;
console.log(`fruits length after mutating length: ${x}`);
console.log(typeof x);
console.log(typeof fruits);
//fruits length after mutating length: apples,bananas
//object
//objects


//this will always add one to the end because the index is always 1 less than the length
fruits[fruits.length] = "blueberry";
console.log(`fruits after adding blueberry: ${fruits}`);
//fruits after adding blueberry: apples,bananas,blueberry

let arr;

arr = [1, 2, 3, 4, 5];
arr.pop()
console.log(`this mutates the array and removes the last element: ${arr}`)

arr.unshift(0)
console.log(`this adds to the beginning of the array: ${arr}`)

arr.shift(0)
console.log(`this removes from the beginning of the array: ${arr}`)

arr.reverse()
x = arr.indexOf(2)
console.log(x)

console.log(arr.indexOf(15))
//-1 because it doesn't exist

//slice everything from index provided on. It's non-mutating!
arr.reverse()
x = arr.slice(1)
console.log(x)
//[2,3,4]
console.log(`slice: ${arr.slice(1, 3)}`)
//[2,3]
console.log(arr)

/*splice DOES mutate the array. The second value provided actually goes that
number of elements over rather than referring to the index*/
// x = arr.splice(1, 4)
// console.log(`splice: ${x}`)
//splice: 2,3,4
// console.log(arr)
//[1]
// console.log("x: " + x)
// x = arr.splice()
// console.log(`x after splice: ${x}`)
//x after splice: 
// console.log(`arr: ${arr}`)
//arr: 1,2,3,4

//use splice to delete one item
// x = arr.indexOf(3)
// console.log(x)
// //2
// console.log(arr[x])
// //3
// y = arr.splice(arr[x], 1)
// console.log(arr)
//[ 1, 2, 3 ]
arr = [1, 2, 3, 4, 5];
//chain methods
x = arr.splice(1, 4).reverse().toString().charAt(2)
console.log(x)
//4