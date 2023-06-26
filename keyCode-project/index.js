const newBox = (className, textToAdd) => {
  const div = document.createElement("div");
  div.className = className;
  const text = document.createTextNode(textToAdd);
  div.appendChild(text);
  return div;
};

let numBoxes = 5;
const textList = ["Box 1", "Box 2", "Box 3", "Box 4", "Box 5"];

const myContainer = () => {
  const container = document.createElement("div");
  container.className = "container";
  let boxNum = -1;
  for (i = 0; i < numBoxes; i++) {
    const box = newBox("box", textList[boxNum + 1]);
    container.appendChild(box);
    boxNum++;
  }

  document.body.appendChild(container);
};

myContainer();
