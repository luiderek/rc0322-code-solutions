setInterval(countdown, 1000);

const countarr = ['4', '3', '2', '1', '0', '-1', 'stepbro im stuck in an array'];

function countdown() {
  const $h1countdown = document.querySelector('.countdown-display');
  const boop = countarr.shift();
  if (boop) {
    $h1countdown.textContent = boop;
  }
}
