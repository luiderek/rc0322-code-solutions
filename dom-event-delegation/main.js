const $tasklist = document.querySelector('.task-list');
$tasklist.addEventListener('click', taskOnClick);

function taskOnClick(event) {
  // stack says: nodename better unless IE5.5 support
  if (event.target.nodeName === 'BUTTON') {
    const $closeitem = event.target.closest('.task-list-item');
    console.log($closeitem);
    $closeitem.remove();
  }
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
}
