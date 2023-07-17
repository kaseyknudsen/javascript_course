const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const button5 = document.querySelector("#btn5");
const title = document.querySelector(".header");
const buttons = document.querySelector(".buttons");
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
  // console.log(e.target);
  // console.log(e.offsetY);
  // console.log(e.offsetX);
  e.target.style.backgroundColor = "steelblue";
});

//target is the element that triggered the event, or the element that you click on
// button1.addEventListener("click", (e) => {
//   console.log(`target: ${e.target}`);

// });

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

//type - the type of event that was triggered
//timestamp - e.timeStamp
//clientX - x position of the mouse click relative to the window
//clientY - y position of the mouse click relative to the window
//offsetX - x position of the mouse click relative to the element
//offsetY - y position of the mouse click relative to the element
//pageY - y position of the mouse click relative to the page
//pageX - X position of the mouse click relative to the page
//screenX - x position of the mouse click relative to the screen (different depending on the size of the screen)
//screenY - y position of the mouse click relative to the screen (different depending on the size of the screen)

const onDrag = (e) => {
  document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
};

title.addEventListener("drag", onDrag);

//more keyboard events
//this code will change the text to whatever key is pressed
const button6 = document.createElement("button");
button6.className = "button";
button6.innerText = "I am a button";
buttons.appendChild(button6);

const onKeyDown = (e) => {
  button6.innerText = e.key;
  if (e.key === "f") {
    alert("Congrats! You pressed 'f'");
  }
};

button6.addEventListener("keydown", onKeyDown);

//keycode
const button7 = document.createElement("button");
button7.className = "button";
button7.innerText = "I am also a button";
buttons.appendChild(button7);

const onKeyDown2 = (e) => {
  button7.innerText = e.key;
  if (e.keyCode === 9) {
    alert("You pressed Tab");
  }
  //code
  console.log(e.code);
  if (e.code === "Digit1") {
    alert("you pressed Digit1");
  }

  //the following are booleans
  if (e.repeat) {
    alert("you are holding down " + e.key);
  }
  if (e.shiftKey) {
    alert("you pressed shift");
  }
  if (e.altKey) {
    alert("you pressed option");
  }
  if (e.ctrlKey) {
    alert("you pressed control");
  }
};

button7.addEventListener("keydown", onKeyDown2);
