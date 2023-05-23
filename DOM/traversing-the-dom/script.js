//get child element from parent
const parent = document.querySelector(".parent");
console.log(`parent: ${parent}`);

let output;
//get html collection of all children
output = parent.children;
console.log(`children: ${output}`)

output = parent.children[1];
console.log(`child 2: ${output}`)

output = parent.children[1].innerText;
console.log(`child 2 inner text: ${output}`)

output = parent.children[1].className;
console.log(`child 2 class name: ${output}`)

output = parent.children[1].innerText = "Murphy";
console.log(`changed inner text: ${output}`)
output = parent.children[1].style.color = 'red';
console.log(`changed color: ${output}`)

//first element child
parent.firstElementChild.innerText = 'child one'
parent.lastElementChild.innerText = 'child 3'

//get parent elements
const child = document.querySelector('.child')
console.log(`child: ${child}`)
output = child.parentElement;
console.log(`parent: ${parent}`)
child.parentElement.style.border = '1px solid #ccc'
child.parentElement.style.padding = "10px"

//sibling elements
const secondItem = document.querySelector('.child:nth-child(2)')
console.log(`2nd child: ${secondItem}`)

output = secondItem.nextElementSibling
console.log(`child 3: ${output}`)

secondItem.nextElementSibling.style.color = 'green'
secondItem.previousElementSibling.style.color = 'orange'