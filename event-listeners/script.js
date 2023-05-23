const btn = document.querySelector("button");

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
