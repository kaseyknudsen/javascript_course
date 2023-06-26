const newBox = (className, textToAdd) => {
  const div = document.createElement("div");
  div.className = className;
  const text = document.createTextNode(textToAdd);
  div.appendChild(text);
  return div;
};

let numBoxes = 5;

const myContainer = () => {
  const container = document.createElement("div");
  container.className = "container";
  for (i = 0; i < numBoxes; i++) {
    const box = newBox("box", "I am a box");
    container.appendChild(box);
  }

  document.body.appendChild(container);
};

myContainer();
