const parent = document.querySelector(".parent");
let output;

//this is a property not a method, so no parenthesis
output = parent.childNodes;
output = parent.childNodes[0]; //will be a text node because of the white space
output = parent.childNodes[0].textContent; //this will be nothing
output = parent.childNodes[3].nodeName; //DIV
output = parent.childNodes[3].innerHTML; //Child 1
output = parent.childNodes[3].outerHTML; //gives us a DIV with the class of child
output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[5].style.color = "red";

output = parent.firstChild; //gives us white space
output = parent.lastChild; //gives us text node
output = parent.lastChild.textContent = "Hello"; //gives us text node
//will output a node list
console.log(output);

//parent node (getting parent nodes from the child)
const child = document.querySelector(".child");
let childOutput;
childOutput = child.parentNode; //div.parent
childOutput = child.parentElement; //div.parent
child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "15px";
console.log(childOutput);

//siblings
const secondItem = document.querySelector(".child:nth-child(2)")
let siblingOutput;
siblingOutput = secondItem; //the whole div with the text
siblingOutput = secondItem.nextSibling; //text node (white space)
siblingOutput = secondItem.previousSibling; //text node (white space)
console.log(siblingOutput)