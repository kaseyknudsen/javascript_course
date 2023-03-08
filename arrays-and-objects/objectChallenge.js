
const library = [
  {
    title: "Dog Breeds",
    author: "Me",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Bible",
    author: "God",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Javascript Programming",
    author: "Not Me",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//destructure and rename title to firstBook
const { title: firstBook } = library[0];

console.log(firstBook);

const libraryJSON = JSON.stringify(library)
console.log(libraryJSON)