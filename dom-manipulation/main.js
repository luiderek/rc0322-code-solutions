let counter = 0;

const $hotbutt = document.querySelector('.hot-button');
const $clickcount = document.querySelector('.click-count');

function onClick(event) {
  counter++;
  $clickcount.textContent = 'Clicks: ' + counter;
  if (counter < 4) {
    $hotbutt.className = 'hot-button cold';
  } else if (counter < 7) {
    $hotbutt.className = 'hot-button cool';
  } else if (counter < 10) {
    $hotbutt.className = 'hot-button tepid';
  } else if (counter < 13) {
    $hotbutt.className = 'hot-button warm';
  } else if (counter < 16) {
    $hotbutt.className = 'hot-button hot';
  } else {
    $hotbutt.className = 'hot-button nuclear';
  }
}

$hotbutt.addEventListener('click', onClick);
