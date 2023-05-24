const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");

button1.style.backgroundColor = "red";
button2.style.backgroundColor = "blue";
button3.style.backgroundColor = "green";
button4.style.backgroundColor = "yellow";

button1.addEventListener("click", (e) => {
  console.log(e.target);
});

//target is the element that triggered the event, or the element that you click on
button1.addEventListener("click", (e) => {
  console.log(e.target);
});

//currentTarget is the element that the event listener is attached to
button2.addEventListener("click", (e) => {
  console.log(e.currentTarget);
  e.target.style.backgroundColor = "pink";
});

//if we put an event listener on the body, the other events will bubble up
document.body.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e.currentTarget);
  //will console log 'click'
  console.log(e.type)
  console.log(e.timeStamp)
});
