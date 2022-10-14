var taskList = document.getElementsByClassName('task-list')[0];

taskList.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.nodeName === 'BUTTON') {
    var test = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', test);
    test.remove();
  }
}, false);
