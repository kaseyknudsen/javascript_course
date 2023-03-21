//high order array methods

//forEach doesn't return anything unlike map

const socials = ["twitter", "linkedIn", "Facebook", "instagram"];
//use this to see what methods are available on the array
//console.log(socials.__proto__)

socials.forEach((social) => console.log(social));

//other arguments
socials.forEach((social, index, arr) => console.log(index, social, arr));

//another way to write it
const logSocials = (social) => {
  console.log(social);
};

socials.forEach(logSocials);

//forEach is often used on an array of objects
const cyclists = [
  { name: "Demi Vollering", team: "SD Worx" },
  { name: "Annemik Van Vletuen", team: "Movistar" },
  { name: "Lotte Kopecky", team: "SD Worx" },
  { name: "Marianne Vos", team: "Jumbo Visma" },
];
cyclists.forEach((cyclist) => console.log(`Name: ${cyclist.name}, Team: ${cyclist.team}`))
