const $trigger = document.querySelector('.center button');
const $modal = document.querySelector('.modal');
const $modalButton = document.querySelector('.modal button');

let popupStatus = false;

function onClick(event) {
  popupStatus = !popupStatus;
  if (popupStatus === true) {
    $modal.className = 'modal blur';
  } else {
    $modal.className = 'modal';
  }
}

$trigger.addEventListener('click', onClick);
$modalButton.addEventListener('click', onClick);
