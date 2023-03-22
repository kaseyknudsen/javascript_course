/* a good use case is if you have a shopping cart full of
items and you want to reduce the prices down to 1 price 
3 arguments: function(previous value (returned from the last callback
    also known as the accumulator), current value, initial value (usually set to 0)), */
//initial value is optional
//accumulator isn't going to be anything on the first iteration
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  return accumulator + currentValue;
}, 10);

//console.log(sum);
// const findSum = () => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   } return sum
// };
// console.log(findSum())

//shopping cart!
const cart = [
  { id: 1, name: "Product 1", price: 130 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 175 },
];
const findTotal = () => {
  const total = cart
    .map((item) => item.price)
    .reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);
  return total;
};

console.log(findTotal());

//we don't need to split it into an array first
const refactor = cart.reduce((acc, product) => {
    return acc + product.price
}, 0)

console.log(refactor)