const books = [
  {
    isbn: '978-3-16-148410-0',
    name: 'ahab',
    author: 'whale'
  },
  {
    isbn: '978-3-16-111110-0',
    name: 'lenny',
    author: 'mouse'
  },
  {
    isbn: '978-3-16-165410-0',
    name: 'wilbur',
    author: 'spider'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

console.log('JSON.stringify(books):', JSON.stringify(books));
console.log('typeof JSON.stringify(books):', typeof JSON.stringify(books));

const jsonstring = '[{"student":"name","id":22345}]';
console.log('jsonstring:', jsonstring);
console.log('typeof jsonstring:', typeof jsonstring);

const parsedjson = JSON.parse(jsonstring);
console.log('parsedjson:', parsedjson);
console.log('typeof parsedjson:', typeof parsedjson);
