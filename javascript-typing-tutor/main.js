var type = document.querySelectorAll('span');
var i = 0;
var playAgain = document.getElementsByClassName('btn')[0];

document.addEventListener('keydown', function hi(event) {
  if ((event.key === type[i].textContent && i < type.length) || (event.key === ' ' && i < type.length)) {
    type[i].className = type[i].textContent + ' correct';
    if (i < type.length - 1) {
      type[i + 1].className = 'move';
      i++;
    } else {
      playAgain.classList.add('on');
    }
  } else {
    type[i].className = type[i].textContent + ' incorrect';
  }
});

playAgain.addEventListener('click', function () {
  playAgain.classList.remove('on');
  for (var i = 0; i < type.length; i++) {
    type[i].classList.remove('correct');
  }
});
