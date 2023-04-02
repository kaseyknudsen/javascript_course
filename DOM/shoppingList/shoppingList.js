let output;

/* these give us back and html collection, which is array-like */
/* you can't use array methods on these */
output = document.all;
output = document.documentElement
output = document.head;
output = document.head.children;
output = document.domain;
output = document.URL;
output = document.images[0]
output = document.images[0].src;
console.log(output)
console.log(document.getElementById('app-title'))
/* you can create an array from an html collection like this: */
forms = Array.from(document.forms)
console.log(forms)

forms.forEach((form) => console.log(form))

//document.getElementById()
console.log(document.getElementById('app-title').getAttribute('id'))
//set attributes
document.getElementById('app-title').id = 'new-id' //this sets a new id