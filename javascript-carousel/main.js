const $leftButton = document.querySelector('.left-button');
const $rightButton = document.querySelector('.right-button');
const $circleSelector = document.querySelector('.circle-selector');
const $circleNodeList = document.querySelectorAll('.fa-circle');
// const $circle1 = document.querySelector('.circle-1');
// const $circle2 = document.querySelector('.circle-2');
// const $circle3 = document.querySelector('.circle-3');
// const $circle4 = document.querySelector('.circle-4');

$leftButton.addEventListener('click', leftClicked);
$rightButton.addEventListener('click', rightClicked);
$circleSelector.addEventListener('click', circleClicked);

let selectedCarousel = 1;
const imageLinks =
  ['./images/001.png',
    './images/004.png',
    './images/007.png',
    './images/025.png',
    './images/039.png'];

function leftClicked(event) {
  selectedCarousel = 5 - (6 - selectedCarousel) % 5;
  userInteraction();
}

function rightClicked(event) {
  selectedCarousel = selectedCarousel % 5 + 1;
  userInteraction();
}

function circleClicked(event) {
  if (event.target.tagName === 'I') {
    const whichCircle = event.target.className.split(' ')[2];
    selectedCarousel = whichCircle.slice(-1);
    userInteraction();
  }
}

function updateCircles() {
  for (const circle of $circleNodeList) {
    circle.classList.replace('fas', 'far');
    if (circle.className.includes('circle-' + selectedCarousel)) {
      circle.classList.replace('far', 'fas');
    }
  }
}

function updateImage() {
  const $carouselImage = document.querySelector('.carousel-image');
  $carouselImage.setAttribute('src', imageLinks[selectedCarousel - 1]);
}

let intervalID = setInterval(incrementSelectedCarousel, 3000);

function incrementSelectedCarousel() {
  selectedCarousel = selectedCarousel % 5 + 1;
  updateCircles();
  updateImage();
}

function resetInterval() {
  clearInterval(intervalID);
  intervalID = setInterval(incrementSelectedCarousel, 3000);
}

function userInteraction() {
  updateCircles();
  updateImage();
  resetInterval();
}
