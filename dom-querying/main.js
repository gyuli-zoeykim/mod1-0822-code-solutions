console.log('hello, world');

document.querySelector('h1');
var $heading = document.querySelector('h1');
console.log('$heading', $heading);
console.dir($heading);

document.querySelector('#explanation');
var $explaination = document.querySelector('#explanation');
console.log('$explaination', $explaination);
console.dir('p#explanation');

document.querySelector('.hint');
var $hint = document.querySelector('.hint');
console.log('$hint', $hint);
console.dir('p.hint');

document.querySelectorAll('p');
console.log(document.querySelectorAll('p'));

document.querySelectorAll('.example-link');
console.log(document.querySelectorAll('.example-link'));
