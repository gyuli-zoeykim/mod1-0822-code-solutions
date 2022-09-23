var numOne = 33;
var numTwo = 81;
var numThree = 72;

var maximumValue = Math.max(numOne, numTwo, numThree);
console.log('maximumValue:', maximumValue);

var heores = ['Spider man', 'Iron man', 'Hulk', 'Black panther'];

var randomNumber = Math.random(heores);
randomNumber = heores.length * randomNumber;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heores[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  { title: 'Harry Potter', author: 'J.K. Rowling' },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  { title: 'A Game Of Thrones', author: 'George RR Martin' }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Zoey Kim';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastname:', firstAndLastName);

var firstName = firstAndLastName.shift();
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
