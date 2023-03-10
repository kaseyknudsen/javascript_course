function first() {
  const x = 400;
  function second() {
    const y = 200;
    console.log(x + y);
  }
  second();
}

first();

//when in the child function, you can access variables in the parent function
//when in the parent function, you can't access variables in the child function

//block scope, we have access to x in the child if block
if (true) {
  const x = 100;
  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }
}
