const speakers = [
  {
    index: 1,
    image: '/images/speakers/Brendan_Eich.jpg',
    name: 'Brendan Eich',
    headline: 'test',
    p: 'test',
  },
  {
    index: 2,
    image: '/images/speakers/Radia-Perlman.jpg',
    name: 'Radia Perlman',
    headline: 'test',
    p: 'test',
  },
  {
    index: 3,
    image: '/images/speakers/Dennis_Ritchie.jpg',
    name: 'Dennis Ritchie',
    headline: 'test',
    p: 'test',
  },
  {
    index: 4,
    image: '/images/speakers/ken_thompson.jpg',
    name: 'ken Thompson',
    headline: 'test',
    p: 'test',
  },
  {
    index: 5,
    image: '/images/speakers/Larry_Page.jpg',
    name: 'Larry Page',
    headline: 'test',
    p: 'test',
  },
  {
    index: 6,
    image: '/images/speakers/Margaret_Hamilton.jpg',
    name: 'Margaret Hamilton',
    headline: 'test',
    p: 'test',
  },
];

const container = document.querySelector('.section-3 .container');

speakers.forEach((speaker) => {
  const innerContainer = document.createElement('div');
  innerContainer.classList.add('inner-container');

  const imgContainer = document.createElement('div');
  const chessBox = document.createElement('img');
  chessBox.classList.add('chess-box');
  chessBox.src = '/images/speakers/chess-box-pattern.jpg';
  chessBox.alt = 'image';
  const img = document.createElement('img');
  img.classList.add('image');
  img.src = speaker.image;
  img.alt = 'image';
  imgContainer.appendChild(chessBox);
  imgContainer.appendChild(img);

  const content = document.createElement('div');
  content.classList.add('content');
  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = speaker.name;
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = speaker.headline;
  const grayLine = document.createElement('div');
  grayLine.classList.add('gray-line');
  const p = document.createElement('p');
  p.classList.add('p');
  p.textContent = speaker.p;
  content.appendChild(name);
  content.appendChild(headline);
  content.appendChild(grayLine);
  content.appendChild(p);

  innerContainer.appendChild(imgContainer);
  innerContainer.appendChild(content);
  container.appendChild(innerContainer);
});

const body = document.querySelector('body');
const hamburger = document.querySelector('.header .hamburger');
const mobileNav = document.querySelector('.header .mobile-nav');
const closeBtn = document.querySelector('.header .closeBtn');
const mobileNavLinks = document.querySelector('.header .ul');

hamburger.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  body.style.overflow = 'visible';
});

mobileNavLinks.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  body.style.overflow = 'visible';
});
