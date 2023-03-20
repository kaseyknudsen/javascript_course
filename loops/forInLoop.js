//use for in to loop over objects!!!

const colorObject = {
  color1: "red",
  color2: "blue",
  color3: "orange",
  color4: "green",
};

//you can use this in an array, but this is the syntax:
for (const key in colorObject) {
  console.log(key, colorObject[key]);
}

const colorArray = ["red", "green", "blue", "yellow"];
for (const key in colorArray) {
  console.log(colorArray[key]);
}
