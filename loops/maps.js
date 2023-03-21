//return anything we want!

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersDoubled = array1.map((num) => `Number: ${num * 2}`);
//console.log(numbersDoubled);

//same problem with forEach

const doubleNumber = () => {
  let newArray = [];
  array1.forEach((num) => newArray.push(num * 2));
  console.log(newArray);
};

//doubleNumber()
const companies = [
  { name: "company 1", category: "finance", start: 1981, end: 2004 },
  { name: "company 2", category: "retail", start: 1992, end: 2008 },
  { name: "company 3", category: "auto", start: 1999, end: 2007 },
  { name: "company 4", category: "retail", start: 1989, end: 2010 },
  { name: "company 5", category: "technology", start: 2009, end: 2014 },
  { name: "company 6", category: "finance", start: 1987, end: 2010 },
  { name: "company 7", category: "auto", start: 1986, end: 1996 },
  { name: "company 8", category: "technology", start: 2011, end: 2016 },
  { name: "company 9", category: "retail", start: 1981, end: 1989 },
];

//create an array of company names
const companyNames = companies.map((company) => company.name);
//console.log(companyNames);

//create new object with company and category
const companyNamesAndCategories = companies.map((company) => {
  const newObj = {};
  (newObj.name = company.name), (newObj.category = company.category);
  return newObj;
});
//console.log(companyNamesAndCategories);

//create an array of objects with the name and the length of each company in years
//different way of creating object than the previous example
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + " years",
  };
});
//console.log(companyYears);

//chain maps
//take a number, get the square root, then double it
const squareAndDouble = array1
  .map((num) => Math.sqrt(num))
  .map((num) => num * 2)
  .map((num) => num.toPrecision(2));
console.log(squareAndDouble);

//chain filter and map to filter out only even numbers and double them
const filterEvenAndDouble = array1
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);
console.log(filterEvenAndDouble)