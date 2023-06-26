const createBox = (className, textToAdd) => {
  const div = document.createElement("div");
  div.className = className;
  const text = document.createTextNode(textToAdd);
  div.appendChild(text);
  document.body.appendChild(div);
};

const myContainer = () => {
  const container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);
  const box = createBox("box", "I am a box");
};

let numBoxes = 3;

const createBoxes = () => {};
for (i = 0; i < numBoxes; i++) {
  createBox("box", "I am a box");
}
