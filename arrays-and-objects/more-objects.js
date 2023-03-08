let x;

//lines 4 and 5 will do the same thing
//const toDo = {}
const toDo = new Object();
toDo.id = 1;
(toDo.name = "Kasey"), (toDo.sport = "Cycling");
x = toDo;
//console.log(x);

const person = {
  address: {
    coords: {
      lat: 42,
      lng: -71,
    },
  },
};

const lat = person.address.coords.lat;
//console.log(lat)

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
//console.log(obj3);

//assign does the same thing as the spread operator
const obj4 = Object.assign({}, obj1, obj2)
//console.log(obj4)

const toDos = [
    {id: 1, name: 'Kasey'},
    {id: 2, name: 'Marina'},
    {id: 3, name: 'Shelley'}
]

x = toDos[0].id
//console.log(x)

//get just the keys
x = Object.keys(toDo)
//console.log(x)

//you can't do length on the object itself! You need to get the keys first.

//console.log(x.length)

//get all values
const values = Object.values(toDo)
//console.log(values)

//get an array of arrays with key value pairs
const entries = Object.entries(toDos)
//console.log(entries)

//has own property checks if the property exists and returns a boolean
x = toDo.hasOwnProperty('name')
console.log(x)
//true