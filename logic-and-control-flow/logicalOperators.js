//and
console.log(10 < 20 && 30 > 15 && 40 > 30);
//or
console.log(10 > 20 || 30 > 15);

//&& will return first falsy value or the last value
let a;
//this will return 45
a = 1 && 20 && 30 && 45;
console.log(`a will return 45: ${a}`);
//b will return 0 since it's a falsy value
b = 0 && 1 && 2 && 3
console.log(`b will return 0: ${b}`);


//use the double ampersand to check if there is a value. Since it returns the
//first falsy value, if won't return anything. this is used A LOT in react
const posts = []
posts.length > 0 && console.log(posts[0])

//|| returns the first truthy value or the last value
a = 10 || 20;
//returns 20 because 0 is falsy
b = 0 || 20
//this will return the last value because they are all falsey
let c = 0 || null || undefined
console.log(`returns the first truthy value: ${a}`)
console.log(`returns the first truthy value: ${b}`)
console.log(`returns the last value because they are all false: ${c}`)

//nullish coalescing operator ??
//returns the right side operand when the left is either null or undefined (NOT JUST FALSEY)
c = undefined ?? 20
console.log(`will return the right side since the left is undefined: ${c}`)
