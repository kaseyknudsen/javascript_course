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
// console.log(output);
// console.log(document.getElementById("app-title"));
/* you can create an array from an html collection like this: */
forms = Array.from(document.forms);
// console.log(forms);

forms.forEach((form) => console.log("forms" + form));

//document.getElementById()
// console.log(
//   ` get attribute: ${document.getElementById("app-title").getAttribute("id")}`
// );

//set attributes
// document.getElementById('app-title').id = 'new-id' //this sets a new id
const titleVariable = (document.getElementById("app-title").title =
  "Shopping-List"); //this will pop up when you hover over the title "Shopping List"
titleVariable.setAttribute = ("class", "title"); //this will pop up when you hover over the title "Shopping List"

const title = document.getElementById("app-title");
// console.log(`title text content: ${title.textContent}`);

//get/change content
title.textContent = "Hello eric";
// console.log(`title text content: ${title.textContent}`);
title.innerText = "Hello kasey";
// console.log(`title text content: ${title.innerText}`);
title.innerHTML = "<strong>Shopping List</strong>";
// console.log(`title inner HTML: ${title.innerHTML}`);

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
// console.log(h1);
// console.log(selectById);
// console.log(selectByClass);
// console.log(`select by input: ${selectByInput}`);
const orangeJuice = document.querySelector("li:nth-child(2)").innerText;
// console.log(`use CSS pseudo selector: ${orangeJuice}`);
const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Bagels";
// console.log(secondItem);
secondItem.style.color = "blue";

//use these methods on other elements other than the document
const list = document.querySelector("ul");
const firstItem = list.querySelector("li");
firstItem.style.color = "red";

//querySelectorAll()

const listItems = document.querySelectorAll(".items");
console.log(listItems);

const dogs = document.querySelectorAll("#dog-menu option");

dogs.forEach((dog, index) => {
  if (index === 1) {
    dog.remove();
  }
  if (index === 2) {
    dog.innerText = "Junior";
  }
});

const listItems2 = document.querySelectorAll(".items");
listItems2.forEach((item) => {
  console.log(item.innerText);
});

const listItems3 = document.getElementsByClassName(".items");
const listItems3Array = Array.from(listItems3);
// listItems3Array.forEach((item) => console.log(`item: ${item}`))
const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My Element");
//innertext is meant to change already existing text
//div.innerText = "Hello World"

//this is the better way to add text
const text = document.createTextNode("Hello World");
div.appendChild(text);

//this will add the text to the page
// document.body.appendChild(div);
// console.log(div);

//to put it under the list, you can do:
// document.querySelector("ul").appendChild(div);

// const createListItem = (item) => {
//   const div = document.createElement("div");
//   document.createTextNode(item);
//   document.querySelector("ul").appendChild(div);
// };

// createListItem("Bread");

//quick & dirty. Much less efficient.
const createListItem = (item) => {
  //this won't work because li is a string, not a node
  //const li = `<li>${item}</li>`;
  const li = document.createElement("li");
  document.querySelector(".items").appendChild(li);
  li.innerHTML = `${item} <button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
  </button>`;
};

//creating and adding new elements is more clean & performant
const createNewItem = (item) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  button.appendChild(icon);
  li.appendChild(button);
  document.querySelector("ul").appendChild(li);
};

createListItem("eggs");
createNewItem("Oat Milk");

//refactor
const createButton = (classes) => {
  const button = document.createElement("button");
  button.className = classes;
  return button;
};

const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
};

const createNewItemRefactor = (item) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  const button = createButton("remove-item btn-link text-red");
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  li.appendChild(button);
  document.querySelector("ul").appendChild(li);
};

createNewItemRefactor("salad");

//insertAdjacentElement
//beforebegin
const insertElement = () => {
  const filter = document.querySelector(".filter");
  const h1 = document.createElement("h1");
  h1.textContent = "insert adjacent element";
  //this h1 will be put before the filter form

  filter.insertAdjacentElement("beforebegin", h1);
  //this will put the h1 after the filter
  filter.insertAdjacentElement("afterend", h1);
};
insertElement();

//insertAdjacentText
//afterend
const insertText = () => {
  const item = document.querySelector("li:first-child");
  item.insertAdjacentText("afterend", "insert adjacent text");
};
insertText();
//insertAdjacentHTML
const insertHTML = () => {
  const clearButton = document.querySelector("#clear");
  clearButton.insertAdjacentHTML(
    "beforebegin",
    "<h2>insert adjacent HTML</h2>"
  );
};
insertHTML();

//insertBefore (define a parent, and choose the item inside the parent to insert the item before)
const insertBeforeItem = () => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = "i am a new item";
  const thirdItem = document.querySelector("li:nth-child(3)");
  //call insert before on the parent
  ul.insertBefore(li, thirdItem);
};

insertBeforeItem();
const li = document.createElement("li");
const anotherFirstItem = document.querySelector("li:first-child");

//custom insertAfterChallenge
const insertAfter = (newEl, existingEl) => {
  li.textContent = "insert me after";
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
};

insertAfter(li, anotherFirstItem);
