//immediately invoked functions
//avoid global scope pollution

//IIFE syntax
(function () {
  const user = "Kasey";
  console.log(user);
  const hello = () => console.log("Hello from IFFE");
  hello();
})()
  //2 parenthesis side by side

 
