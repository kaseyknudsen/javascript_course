//method 1
// window.addEventListener("keydown", (e) => {
//   const insert = document.querySelector("#insert");
//   insert.innerHTML = ` <div class="key">
//   ${e.key === " " ? "Space Bar" : e.key}
//   <small>e.key</small>
// </div>

// <div class="key">
//   ${e.keyCode}
//   <small>e.keyCode</small>
// </div>

// <div class="key">
//   ${e.code}
//   <small>e.code</small>
// </div>`;
// });

//method 2 

const showKeyCodes = (e) => {
  const insert = document.querySelector("#insert");
  insert.innerHTML = " ";
  const keyCodes = {
    "e.key": e.key === " " ? "Space Bar" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };
  for (let key in keyCodes) {
    const div = document.createElement("div");
    div.className = "key";
    const small = document.createElement("small");
    const keyText = document.createTextNode(key);
    //this is the syntax for getting the value of an object
    const valueText = document.createTextNode(keyCodes[key]);
    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);
    insert.appendChild(div);
  }
};
window.addEventListener("keydown", showKeyCodes);
