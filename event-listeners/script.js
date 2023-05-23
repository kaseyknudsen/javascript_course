const btn = document.querySelector("button");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

const onClick = () => {
  if (btn2.style.backgroundColor !== "purple") {
    btn2.style.backgroundColor = "purple";
    btn2.style.color = "white";
  } else {
    btn2.style.backgroundColor = "white";
    btn2.style.color = "black";
  }
};

btn2.addEventListener("click", onClick);

function onClear() {
  alert("clear items");
}
//JS event listener
// btn.onclick = () => {
//   alert("clear button");
// };

//add event listener
//an alert is synchronous and blocking, so it will go first

//with add event listener, you can have as many events as you want
const changeColor = (element) => (
  (element.style.backgroundColor = "blue"), (element.style.color = "white")
);

btn.addEventListener("click", () => onClear);
btn.addEventListener("click", () => console.log("Clear Button"));
btn.addEventListener("click", () => changeColor(btn));

//remove event listener
setTimeout(() => btn.removeEventListener("click", onClear), 5000);

const onRightClick = () => {
  if (btn3.style.backgroundColor !== "green") {
    btn3.style.backgroundColor = "green";
    btn3.style.color = "red";
  } else {
    btn3.style.backgroundColor = "grey";
    btn3.style.color = "orange";
  }
};

btn3.addEventListener("contextmenu", onRightClick)
//mouseup
//mousedown
//wheel
