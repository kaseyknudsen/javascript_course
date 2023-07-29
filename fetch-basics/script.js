//pass in whatever you want to make a request to
//returns a promise, so we need to use .then syntax
//with fetch, the first promise we get back is a response object
//to get the data, you have to use the json method and return it

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response);
    // you don't have to spell out return
    return response.json();
    // response.json();
  })
  //whatever we return from the first .then will be the argument for the next .then
  //this is where we get the data
  .then((data) => {
    console.log(data);
  });

//you can also use axios, which can be easier
//   axios.get().then(data)

//here is a cleaned up version
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

//fetching from a local file
fetch("./hello.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

//fetching from an API
//gives us an object with user data
const printText = document.querySelector(".printTextToScreen");

fetch("https://api.github.com/users/kaseyknudsen")
  .then((response) => response.json())
  //   .then((data) => console.log(data))
  .then((data) => (printText.textContent = data.login));
