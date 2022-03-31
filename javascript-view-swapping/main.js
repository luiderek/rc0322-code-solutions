const $tabcontainer = document.querySelector('.tab-container');
const $tablist = document.querySelectorAll('.tab');
const $viewlist = document.querySelectorAll('.view');

$tabcontainer.addEventListener('click', function (event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  for (const tab of $tablist) {
    if (tab === event.target) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  }

  const dataview = event.target.getAttribute('data-view');
  for (const view of $viewlist) {
    view.classList.add('hidden');
    if (view.getAttribute('data-view') === dataview) {
      view.classList.remove('hidden');
    }
  }
});
