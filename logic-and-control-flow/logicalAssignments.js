//||= assigns the right side value only if the left is a falsy value
//&&= assigns the right side value only if the left side is a truthy value
//??= assigns the right side value only if the left is null or undefined

let a = false;
//if !a is useful because it checks if the variable is falsy
if (!a) {
  console.log("false");
  //a = 20
  console.log(`a: ${a}`);
}

//will log 10 because || assigns the right side if the left is falsy
a = a || 10;
console.log(a);

//shorthand is this:
a ||= 10;
console.log(a);

//this means if b is a truthy value, if will be reassigned to be 20
let b;
b = 10;
if (b) {
  b = 20;
}
//shorthand (nullish coalescing operator). only checks for null or undefined
b &&= 30;
console.log(b);

//
let x;
x = undefined;
if ((x = undefined)) {
  x = 4;
}

let c = null;
if (c === null || c === undefined) {
  c = 10;
}

c ??= 10;
console.log(c);
