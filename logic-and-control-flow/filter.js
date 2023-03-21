const words = ["hello", "goodbye", "greetings", "salutations"];

//returns the words that are greater than 5 letters
const filterWords = words.filter((word) => word.length > 5);
console.log(filterWords);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = nums.filter((num) => num % 2 === 0);
//console.log(evenNums)


const companies = [
    {name: 'company 1', category: 'finance', start: 1981, end: 2004},
    {name: 'company 2', category: 'retail', start: 1992, end: 2008},
    {name: 'company 3', category: 'auto', start: 1999, end: 2007},
    {name: 'company 4', category: 'retail', start: 1989, end: 2010},
    {name: 'company 5', category: 'technology', start: 2009, end: 2014},
    {name: 'company 6', category: 'finance', start: 1987, end: 2010},
    {name: 'company 7', category: 'auto', start: 1986, end: 1996},
    {name: 'company 8', category: 'technology', start: 2011, end: 2016},
    {name: 'company 9', category: 'retail', start: 1981, end: 1989},
]

//get only retail companies
const retailCompanies  = companies.filter((company) => company.category === 'retail')
console.log(retailCompanies)

//get companies that started in or after 1980 and ended in or before 2005

const filteredByDate = companies.filter((company) => company.start >= 1980 && company.end <= 2005)
console.log(filteredByDate)

//get companies that lasted 10 years or more
const filterByTenYearsOrMore = companies.filter((company) => company.end - company.start >= 10)
console.log(filterByTenYearsOrMore)