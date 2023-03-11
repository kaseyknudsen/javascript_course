//challenge 1
/* create a function that takes a temperature in fahrenheit as an
argument and returns the temp in celsius */

const getCelsius = (temp) => ((temp - 32) * 5) / 9;
console.log(`The temperature in celsius is ${getCelsius(32)} \xB0C`);

//challenge #2
/* create an arrow function called minMax() that takes in an array of numbers
and returns an object with the minimum and maximum numbers in the array */
const minMax = (...arr) => {
  const obj = {};
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  return obj;
};

console.log(minMax(1, 2, 3, 4, 5, 6, 15, 94, 72))
  //challenge #3
  /* create and IIFE that takes in the length and width of a rectangle and outputs it 
to the console in a message as soon as the page loads */
  //these solutions works in the browser but not in node
//   (function(l, w) {
//     l = 10;
//     w = 20;
//     console.log(l * w);
//   }
// )()
//   //solution 2
  ((l, w) => {
    const area = l * w;
    const output = `The area of a rectangle with a length of ${l} and a width of ${w} is ${area}`;
    console.log(output)
  }
  )(10,5)
