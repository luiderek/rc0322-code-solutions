const $jokeContainer = document.querySelector('#joke-container');
const $flashImage = document.querySelector('#flash-image');
const $jokeForm = document.querySelector('#joke-form');

const jokester = {
  tellJoke: (setup, punchline) => {
    $jokeForm.classList.add('d-none');
    const $introStatement = jokester.renderJokePhrase('Hey Flash...');
    jokester.appendJokePhrase($introStatement);
    setTimeout(function () {
      const $jokeSetup = jokester.renderJokePhrase(setup);
      jokester.appendJokePhrase($jokeSetup);
      setTimeout(function () {
        const $jokePunchline = jokester.renderJokePhrase(punchline);
        jokester.appendJokePhrase($jokePunchline);
        flash.laugh();
      }, 2000);
    }, 2000);
  },
  renderJokePhrase: phrase => {
    const $phrase = document.createElement('h4');
    $phrase.textContent = phrase;
    $phrase.className = 'fade-in text-center';
    return $phrase;
  },
  appendJokePhrase: $phrase => {
    $jokeContainer.append($phrase);
  }
};

const flash = {
  laughingUrl: 'images/flash-laugh.gif',
  laugh: () => {
    setTimeout(function () {
      $flashImage.setAttribute('src', flash.laughingUrl);
    }, 3000);
  }
};

function handleJokeSubmission(event) {
  event.preventDefault();
  const { setup, punchline } = event.target.elements;
  jokester.tellJoke(setup.value, punchline.value);
}

$jokeForm.addEventListener('submit', handleJokeSubmission);
