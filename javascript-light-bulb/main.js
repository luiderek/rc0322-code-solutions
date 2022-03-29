const $docu = document.querySelector('body');
const $bulb = document.querySelector('.lightbulb');

let lightswitch = false;

function onClick(event) {
  lightswitch = !lightswitch;
  if (lightswitch === true) {
    $docu.className = 'switch-on';
    $bulb.className = 'lightbulb switch-on';
  } else {
    $docu.className = 'switch-off';
    $bulb.className = 'lightbulb switch-off';
  }
}

$bulb.addEventListener('click', onClick);
