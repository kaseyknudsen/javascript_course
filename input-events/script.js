const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

const onInput = (e) => {
  console.log("On Input");
  console.log(e.timeStamp);
  console.log(e.target);
  //e.target.value will give us whatever is in the form field!
  console.log(e.target.value);
  //change the heading dynamically!
  heading.textContent = e.target.value;
};

const onChecked = (e) => {
  const checkValue = e.target.checked;
  heading.textContent = checkValue ? "Checked" : "Not Checked";
};

const onFocus = () => {
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "1px";
  itemInput.style.outlineColor = "green";
};

//this will take away the onFocus if you click away
const onBlur = () => {
  itemInput.style.outlineStyle = "none";
};

itemInput.addEventListener("input", onInput);
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
priorityInput.addEventListener("input", onInput);

//checkboxes
checkbox.addEventListener("input", onChecked);
