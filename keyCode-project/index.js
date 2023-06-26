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
  container.appendChild(box);
};

// createBox("box", "I am a box");
// createBox("box", "I am a box");
// createBox("box", "I am a box");
