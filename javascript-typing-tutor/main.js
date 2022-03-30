// function that translates words into the proper dom elements

// function that checks if you're
// 1 typing on what ought to be a letter
// if not, adding new letters marked as bad bad, pushing other things down

// function that sees if you're able to do backspaces
//  if it's an unnecessary letter, remove div element
//  if you're at the start of the word, refuse backspace

// event listeners for keypresses, and being able to parse their values.
const phrases = [
  'Hey you, youre finally awake. You were trying to cross the border? Walked right into that imperial ambush, like us and that thief over there.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dignissimos id repellendus voluptates, eos quo, reiciendis, perferendis commodi dolorem?',
  'For this challenge you will be writing HTML, CSS, and JavaScript to build a simple typing tutor application. Your solution does not have to look fancy at first, but it should look visually appealing. Consider color choice and font styling.',
  'I am leaving the server, goodbye. This server has done nothing but bring me down as a person. everyday i come in here and all you do is tear me down insult me hurt me with your words and do nothing but harm me emotionally physically mentally and I just cant take it any longer this server is so abusive and toxic its crazy.no one even realizes how disgusting all of your behaviors are.every single time I talk or type or even do anything or interact with anyone in the server everybody just goes against me and gangs up on me like a pack of wolves and just attacks me and i didnt do anything to deserve these attacks and these hurtful words  I feel like I should just leave because clearly nobody wants to be around me and everyone would be happier if i left anyways so ill just go and i hope all of you find happiness in life and im sorry for all the troubles ive ever put any of you through. i give up. goodbye.'
];

const wakemeup = 'Hey you, youre finally awake. You were trying to cross the border? Walked right into that imperial ambush, like us and that thief over there.';
const $typecontent = document.querySelector('.typecontent');

const validlist = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'ENTER', ' ', '!', '?', '.', ','];
// this doesn't contain any of the numbers or special characters but it'll do for now.

wordDOMifier(wakemeup);
let $letters = document.querySelectorAll('letter');
let $words = document.querySelectorAll('word');
const $correct = document.querySelector('.correctpercent');

let index = 0;
let counter = 0;

const letterCount = document.querySelectorAll('letter').length;
// console.log('letterCount:', letterCount);
// const wordCount = document.querySelectorAll('word').length;
// console.log('wordCount:', wordCount);

function wordDOMifier(string) {
  const words = string.split(' ');
  for (const word of words) {
    const $word = document.createElement('word');
    $typecontent.appendChild($word);
    for (const letter of word) {
      const $letter = document.createElement('letter');
      $letter.textContent = letter;
      $word.appendChild($letter);
    }
    const $space = document.createElement('letter');
    $space.textContent = ' ';
    $word.appendChild($space);
  }
}

document.addEventListener('keydown', function (event) {
  // console.log('key pressed');
  // console.log('event.key:', event.key);

  function killAllChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  if (event.key === 'Enter') {
    killAllChildren($typecontent);
    wordDOMifier(phrases[++counter % 4]);
    index = 0;
    $letters = document.querySelectorAll('letter');
    $words = document.querySelectorAll('word');
  }
  // clear dom
  // reset indexes
  else if (event.key === 'Backspace' && index !== 0) {
    $letters[index].className = '';
    $letters[--index].className = 'active';
  } else if (validlist.includes(event.key.toUpperCase())) {
    if (event.key === $letters[index].textContent) {
      $letters[index].className = 'correct';
    } else {
      $letters[index].className = 'wrong';
      if ($letters[index].textContent === ' ') {
        $letters[index].className = 'wrong wrongbg';
      }
    }
    if (index < letterCount - 1) {
      $letters[++index].className = 'active';
    }
  }

  $correct.textContent = charCorrect().toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }) + ' correct';
});

function charCorrect() {
  const c = document.querySelectorAll('.correct').length;
  const w = document.querySelectorAll('.wrong').length;
  if (c + w === 0) {
    return 0;
  }
  return c / (c + w);
}

function init() {
  $letters[index].className = 'active';
  $correct.textContent = '100% correct';
}

init();
