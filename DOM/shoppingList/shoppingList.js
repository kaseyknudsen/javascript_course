let output;

/* these give us back and html collection, which is array-like */
/* you can't use array methods on these */
output = document.all;
output = document.documentElement;
output = document.head;
output = document.head.children;
output = document.domain;
output = document.URL;
output = document.images[0];
output = document.images[0].src;
console.log(output);
console.log(document.getElementById("app-title"));
/* you can create an array from an html collection like this: */
forms = Array.from(document.forms);
console.log(forms);

forms.forEach((form) => console.log(form));

//document.getElementById()
console.log(
  ` get attribute: ${document.getElementById("app-title").getAttribute("id")}`
);

//set attributes
// document.getElementById('app-title').id = 'new-id' //this sets a new id
document.getElementById("app-title").title = "Shopping-List"; //this will pop up when you hover over the title "Shopping List"
document.getElementById("app-title").setAttribute = ("class", "title"); //this will pop up when you hover over the title "Shopping List"

const title = document.getElementById("app-title");
console.log(`title text content: ${title.textContent}`);

//get/change content
title.textContent = "Hello eric";
console.log(`title text content: ${title.textContent}`);
title.innerText = "Hello kasey";
console.log(`title text content: ${title.innerText}`);
title.innerHTML = "<strong>Shopping List</strong>";
console.log(`title inner HTML: ${title.innerHTML}`);

//change styles
title.style.color = "green";
//in javascript, you have to use camelcase
title.style.backgroundColor = "yellow";
title.style.padding = "20px";
title.style.borderRadius = "10px";

//query selector
//this will select only the 1st h1 it finds
const h1 = document.querySelector("h1");
const selectById = document.querySelector("#app-title");
const selectByClass = document.querySelector(".container");
const selectByInput = document.querySelector('input[type="text"]');
console.log(h1);
console.log(selectById);
console.log(selectByClass);
console.log(`select by input: ${selectByInput}`);
const orangeJuice = document.querySelector("li:nth-child(2)").innerText;
console.log(`use CSS pseudo selector: ${orangeJuice}`);
const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Bagels";
console.log(secondItem);
secondItem.style.color = "blue";

//use these methods on other elements other than the document
const list = document.querySelector('ul')
const firstItem = list.querySelector('li')
firstItem.style.color = "red"