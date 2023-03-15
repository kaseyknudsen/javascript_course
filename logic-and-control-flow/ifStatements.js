//DON'T FORGET THAT VAR IS NOT BLOCK LEVEL SCOPED

if (true) {
  console.log("this is true");
}
if (false) {
  console.log("this is NOT true");
}

const x = 5;
const y = 5;
//this will also work with no brackets. not recommended.
if (true) console.log("you don't need brackets");

if (x !== y) console.log("x and y are equal");
else
  console.log("x and y are not equal"),
    console.log("you can also add a comma to add another conditional");
