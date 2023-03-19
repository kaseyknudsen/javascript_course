//with while loops, you need to initialize the variable outside of the loop
// let i = 0;
// while (i <= 20) {
//   console.log(`Number ` + i);
//   i++;
// }

//use a while loop when the number of times a loop will run is unknown

//loop over arrays
// let j = 0;
// const arr = [10, 20, 30, 40];
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

//nesting while loops
// let x = 0;

// while (x <= 5) {
//   console.log(`Number ` + x);
//   //r will be reinitialized to 0
//   let r = 0;
//   while (r <= 5) {
//     console.log(`${x} * ${r} = ${x * r}`);
//     r++;
//   }
//   x++;
// }

//use Do While if you always need the code to run at least once
//this code will run once, even thought it doesn't meet the while condition
let i = 21;
do {
  console.log("Number " + i);
  i++;
} while (i <= 20);
