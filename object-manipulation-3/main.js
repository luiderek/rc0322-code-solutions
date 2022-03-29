function Player(name, hand) {
  this.name = name;
  this.hand = hand;
}

function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
}

function newDeck() {
  const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  const suits = ['club', 'diamond', 'heart', 'spade'];
  const deck = [];
  for (const r of ranks) {
    for (const s of suits) {
      deck.push(new Card(r, s));
    }
  }
  return deck;
}

function shuffle(deck) {
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function score(player) {
  function cardvalue(card) {
    switch (card) {
      case 'ace':
        return 11;
      case 'king':
      case 'queen':
      case 'jack':
      case '10':
        return 10;
      case '9':
        return 10;
      case '8':
        return 8;
      case '7':
        return 7;
      case '6':
        return 6;
      case '5':
        return 5;
      case '4':
        return 4;
      case '3':
        return 3;
      case '2':
        return 2;
    }
  }
  let sum = 0;
  for (const card of player.hand) {
    sum += cardvalue(card.rank);
  }
  return sum;
}

function drawN(deck, n) {
  const draw = [];
  for (let i = 0; i < n; i++) {
    draw.push(deck.shift());
  }
  return draw;
}

const p1 = new Player('player one');
const p2 = new Player('player two');
const p3 = new Player('player three');
const p4 = new Player('player four');

var playerlist = [p1, p2, p3, p4];

function game(players, cardsperhand) {
  const gamedeck = shuffle(newDeck());

  for (const player of players) {
    player.hand = drawN(gamedeck, cardsperhand);
    player.score = score(player);
  }

  players.sort((a, b) => (a.score < b.score) ? 1 : -1);

  for (const player of players) {
    console.log(player.name + '.score:', player.score);
    console.log(player.name + '.hand:', player.hand);
  }
  return players;
}
