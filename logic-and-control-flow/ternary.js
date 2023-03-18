//assigning a conditional value to a variable

let age = 18;
const canVote = age >= 18 ? true : false;
console.log(canVote);

let bike = "specialized";
const brand = bike === "cannondale" ? "cannondale" : "not cannondale";
console.log(brand);

//for multiple statements, use parenthesis!
let auth = true;

const redirect = auth
  ? (console.log("Welcome to the dashboard", "/dashboard"))
  : (console.log("Access denied"), "/login");

//use && as shorthand if there is no else
auth ? console.log('welcome to the dashboard') : null //is the same as...
auth && console.log('Welcome to the dashboard')

