var tabContainer = document.getElementsByClassName('tab-container')[0];
var tab = document.querySelectorAll('.tab');
var view = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function tabclick(event) {
  if (event.target.matches('.tab')) {
    var tabAry = Array.from(tab);
    for (var i = 0; i < tabAry.length; i++) {
      if (tabAry[i] === event.target) {
        tabAry[i].className = 'tab active';
      } else {
        tabAry[i].className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab')) {
    var data = event.target.getAttribute('data-view');
    var viewAry = Array.from(view);
    for (var t = 0; t < viewAry.length; t++) {
      if (viewAry[t].getAttribute('data-view') === data) {
        viewAry[t].className = 'view';
      } else {
        viewAry[t].className = 'view hidden';
      }
    }
  }
});
