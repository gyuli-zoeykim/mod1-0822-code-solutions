var openButton = document.querySelector('.openBtn');
var $modal = document.querySelector('.modal');
var closeButton = document.querySelector('.modalBtn');

function button() {
  $modal.classList.toggle('show');
}

openButton.addEventListener('click', button);
closeButton.addEventListener('click', button);
