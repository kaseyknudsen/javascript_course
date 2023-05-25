const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const button5 = document.querySelector("#btn5");

const googleLink = document.querySelector("a");

//prevent default prevents the default behavior fromhappening
googleLink.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("link was clicked");
});

button1.style.backgroundColor = "red";
button2.style.backgroundColor = "blue";
button3.style.backgroundColor = "green";
button4.style.backgroundColor = "yellow";

button1.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.offsetY);
  console.log(e.offsetX);
});

//target is the element that triggered the event, or the element that you click on
button1.addEventListener("click", (e) => {
  console.log(`target: ${e.target}`);
});

//currentTarget is the element that the event listener is attached to
button2.addEventListener("click", (e) => {
  console.log(e.currentTarget);
  e.target.style.backgroundColor = "pink";
  console.log(`clientX: ${e.clientX}`);
  console.log(`clientY: ${e.clientY}`);
  console.log(`pageX: ${e.pageX}`);
  console.log(`pageY: ${e.pageY}`);
  console.log(`screenY: ${e.screenY}`);
  console.log(`screenX: ${e.screenX}`);
});

//if we put an event listener on the body, the other events will bubble up
document.body.addEventListener("click", function (e) {
  console.log(`target: ${e.target}`);
  console.log(`current target: ${e.currentTarget}`);
  //will console log 'click'
  console.log(e.type);
  console.log(e.timeStamp);
});

//clientX - x position of the mouse click relative to the window
//clientY - y position of the mouse click relative to the window
//offsetX - x position of the mouse click relative to the element
//offsetY - y position of the mouse click relative to the element
//pageY - y position of the mouse click relative to the page
//pageX - X position of the mouse click relative to the page
//screenX - x position of the mouse click relative to the screen
//screenY - y position of the mouse click relative to the screen

const onDrag = (e) => {
  document.querySelector('#btn5').textContent = `X ${e.clientX} Y ${e.clientY}`
}

button5.addEventListener("drag", onDrag);
