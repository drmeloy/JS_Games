document.addEventListener('DOMContentLoaded', () => {
  // Create cards
  const cardArray = [
    {
      name: 'fries',
      img: './images/fries.png'
    },
    {
      name: 'fries',
      img: './images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: './images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: './images/cheeseburger.png'
    },
    {
      name: 'hotdog',
      img: './images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: './images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: './images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: './images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: './images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: './images/milkshake.png'
    },
    {
      name: 'pizza',
      img: './images/pizza.png'
    },
    {
      name: 'pizza',
      img: './images/pizza.png'
    },
  ];

  // Create board
  const grid = document.querySelector('.grid');
  const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++){
      const card = document.createElement('img');
      card.setAttribute('src', './images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

});
