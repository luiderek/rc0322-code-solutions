const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};

// Destructuring book1 into three constants.
const { title, author, libraryID } = book1;
console.log(`The title of the book is ${title}, the author is ${author}, and the libary id is ${libraryID}`);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
};

const { title: t, author: a, libraryID: id } = book2;
console.log(`The title of the book is ${t}, the author is ${a}, and the libary id is ${id}`);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

// Destructuring the first 3 entries of library.
const [book3, book4, book5] = library;
console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);

// I couldn't come up with a solution in the format of [..., book6] = library
//    that didn't have a hardcoded amount of previous entries
// built in array methods seem the most reasonable remaining option
const [book6] = library.slice(-1);
console.log('book6:', book6);
