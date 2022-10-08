var $bulb = document.getElementsByClassName('light-bulb')[0];
var $bulbWrapper = document.getElementsByClassName('light-bulb-wrapper')[0];
$bulb.addEventListener('click', function () {
  $bulbWrapper.classList.toggle('off');
});
