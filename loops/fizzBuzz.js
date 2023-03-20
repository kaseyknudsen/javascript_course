// FizzBuzz
// print/log numbers from 1 to 100
// for multiples of 3, print 'fizz' instead of the number
// for multiples of 5, print 'buzz'
// for numbers which are multiples of both 3 and 5, print FizzBuzz

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}: FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i}: Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i}: Buzz`);
    } else {
      console.log(i);
    }
  }
};
//fizzBuzz();

const fizzBuzzRefactor = (num) => {
  let i = 1;
  while (i <= 100) {
    i % 3 === 0 && i % 5 === 0
      ? console.log(`${i}: FizzBuzz`)
      : i % 3 === 0
      ? console.log(`${i}: Fizz`)
      : i % 5 === 0
      ? console.log(`${i}: Buzz`)
      : console.log(i);
    i++;
  }
};

fizzBuzzRefactor(100);
