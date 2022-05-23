import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const root = ReactDOM.createRoot(document.getElementById('root'));

const topics = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    detail:
      "according to reddit it's not a real programming language, so i will proceed to not learn it and just trust in vs code autocomplete and sporatic googling."
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    detail:
      "not entirely sure but it's probably turing complete and some weirdo is going to make a chatbot using solely CSS a few years down the line."
  },
  {
    id: 3,
    title: 'JavaScript',
    detail:
      'also not a real programming language according to reddit, I ought to be learning assembly and creating my own electronic parts from scratch without the use of tools'
  },
  {
    id: 4,
    title: 'GoLang',
    detail:
      "I suppose you could write a website in this but like, why? I am not trying to seduce a google engineer so I think I'm in the clear."
  }
];

root.render(<Accordion topics={topics}/>);
