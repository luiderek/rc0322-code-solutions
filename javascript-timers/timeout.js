
setTimeout(changeMessage, 2000);

function changeMessage() {
  const $h1Message = document.querySelector('.message');
  $h1Message.textContent = 'Hello There';
}
