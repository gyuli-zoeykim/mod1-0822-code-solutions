/* eslint-disable quote-props */
var book = [
  {
    isbn: '0439708184',
    title: 'Harry Potter and the Sorcerer Stone',
    author: 'J.K.Rowling'
  },
  {
    isbn: '0345538374',
    title: 'The Hobbit and The Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '1529124654',
    title: 'Star Wars: Light of the Jedi ',
    author: 'Charles Soule'
  }
];
console.log('book:', book);

var json = JSON.stringify(book);
console.log('json:', json);
console.log('typeof json:', typeof json);

var student = '{ "id": "07211234", "name": "Zoey" }';
console.log('student:', student);
console.log('typeof student:', typeof student);

var studentObj = JSON.parse(student);
console.log('studentOjb:', studentObj);
console.log('typeof studentObj:', typeof studentObj);
