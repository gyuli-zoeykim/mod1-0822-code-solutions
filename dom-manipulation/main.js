var numberCount = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickButton = document.querySelector('.click-count');

function counter() {
  numberCount++;
  $clickButton.textContent = 'Clicks: ' + numberCount;
  if (numberCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', counter);
