const quotes = [
  {
    quote: 'When nothing goes right, go left.',
    author: 'Snoopy',
  },
  {
    quote:
      "No problem is so big or so complicated that it can't be run away from.",
    author: 'Snoopy',
  },
  {
    quote:
      'Everybody has a moment for an important decisoin. When the moment comes to you, you have to follow your own beliefs.',
    author: 'Snoopy',
  },
  {
    quote:
      'At any time, happiness comes after frustration like the sun comes out after rain.',
    author: 'Snoopy',
  },
  {
    quote: "It's nice to have someone that will just sit and listen to you.",
    author: 'Snoopy',
  },
  {
    quote:
      "I don't have time to worry about who doesn't like me. I'm too busy loving the people who love me.",
    author: 'Snoopy',
  },
  {
    quote:
      'You are a very loving person and your life will be filled with romance.',
    author: 'Snoopy',
  },
  {
    quote: 'In the book of life, the answers are not in the back.',
    author: 'Snoopy',
  },
  {
    quote: "Be yourself, no one can say you're doing it wrong.",
    author: 'Snoopy',
  },
  {
    quote: 'Happiness is always after frustration like a clear day after rain.',
    author: 'Snoopy',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
