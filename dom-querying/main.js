console.log('hello, world');

document.querySelector('h1');
var $heading = document.querySelector('h1');
console.log('$heading', $heading);
console.dir($heading);

document.querySelector('#explanation');
var $explaination = document.querySelector('#explanation');
console.log('$explaination', $explaination);
console.dir($explaination);

document.querySelector('.hint');
var $hint = document.querySelector('.hint');
console.log('$hint', $hint);
console.dir($hint);

document.querySelectorAll('p');
var $paragraphs = document.querySelectorAll('p');
console.log('$paragraphs', $paragraphs);

document.querySelectorAll('.example-link');
var $links = document.querySelectorAll('.example-link');
console.log('$links', $links);
