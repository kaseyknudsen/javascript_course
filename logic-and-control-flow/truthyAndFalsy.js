/* a string with any value in it will always result in true */
//empty string, null, undefined, NaN, 0 are all falsy
//truthy values
/* true
    '0'
    ' ' (space)
    'false'
    []
    {}
    function (){} */

const email = "kaseyknudsen@gmail.com";
if (email) {
  console.log(`${email} results in true`);
}

const x = " ";
if (x) {
  console.log(`${x} is truthy`);
}

//entering 0 will result in falsy. A solution is to say if (children !== undefined or false or !isNaN(children))
const children = 0;
if (children !== false) {
  console.log(`you have ${children} children`);
} else {
  console.log("Please enter number of children");
  console.log(children);
}

//checking for empty arrays
//you have to use length, because an empty array will evaluate to truthy
const posts = [1]
posts.length > 0 ? console.log("list posts") : console.log("no posts to list")

//check for empty object
const user = {name: 'kasey'}
const objectLength = Object.keys(user) //gives us an array of the keys
objectLength.length > 0 ? console.log(`user: ${user.name}`) : console.log("No user")