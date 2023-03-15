const d = new Date(2023, 1, 10, 8, 0, 0);
const month = d.getMonth();
//1
const hour = d.getHours();

switch (month) {
  case 1:
    console.log("It is January");
    break;
  case 2:
    console.log("It is February");
    break;
  case 3:
    console.log("It is March");
    break;
  default:
    console.log("It is not Jan, Feb or March");
}

//to check multiple conditions with different ranges use true 
switch (true) {
  case hour < 12:
    console.log("Good morning");
    break;
  case hour < 18:
    console.log("Good afternoon");
    break;
  case hour < 12:
    console.log("Good morning");
    break;
  default:
    console.log("Good night");
}
