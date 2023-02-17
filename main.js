const container = document.querySelector('.section-3 .container');
const body = document.querySelector('body');
const hamburger = document.querySelector('.header .hamburger');
const mobileNav = document.querySelector('.header .mobile-nav');
const closeBtn = document.querySelector('.header .closeBtn');
const mobileNavLinks = document.querySelector('.header .ul');
const seeMoreBtn = document.querySelector('.section-3 .more-container');

// Speakers Array
const speakers = [
  {
    index: 0,
    image: 'images/speakers/Brendan_Eich.jpg',
    name: 'Brendan Eich',
    headline: 'President of Young Pirates of Europe',
    p: "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
  },
  {
    index: 1,
    image: 'images/speakers/Radia-Perlman.jpg',
    name: 'Radia Perlman',
    headline: 'Executive Director of the Wikimedia Foundation',
    p: 'Lila Tretiov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    index: 2,
    image: 'images/speakers/Dennis_Ritchie.jpg',
    name: 'Dennis Ritchie',
    headline: 'Director of Art Centre Nabl and a board member of CC Korea',
    p: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology. humanites, and the arts.',
  },
  {
    index: 3,
    image: 'images/speakers/ken_thompson.jpg',
    name: 'ken Thompson',
    headline: 'King of The South',
    p: "Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital com mons. In 2012, he was inducted into the inaugural ass of the Internet Society's (ISOC) Internet Hall of Fame.",
  },
  {
    index: 4,
    image: 'images/speakers/Larry_Page.jpg',
    name: 'Larry Page',
    headline: 'Founder & CEO of Google',
    p: 'Lawrence Edward Page is an American business magnate, computer scientist and internet entrepreneur. He is best known for co-founding Google with Sergey Brin.',
  },
  {
    index: 5,
    image: 'images/speakers/Margaret_Hamilton.jpg',
    name: 'Margaret Hamilton',
    headline: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    p: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
];

// Dynamically Generating Spekaers HTML
speakers.forEach((speaker) => {
  const innerContainer = document.createElement('div');
  innerContainer.classList.add('inner-container');

  const imgContainer = document.createElement('div');
  const chessBox = document.createElement('img');
  chessBox.classList.add('chess-box');
  chessBox.src = 'images/speakers/chess-box-pattern.jpg';
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

// Mobile Menu Popup
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

// see more button manipulation
seeMoreBtn.addEventListener('click', () => {
  // set the css to be manipulated
  const childrenToDisplay = document.querySelectorAll(
    '.section-3 .inner-container:nth-child(n + 3)',
  );

  if (seeMoreBtn.innerHTML === 'MORE ▾') {
    seeMoreBtn.innerHTML = 'LESS ▴';
    childrenToDisplay.forEach((child) => {
      child.style.display = 'flex';
    });
  } else if (seeMoreBtn.innerHTML === 'LESS ▴') {
    seeMoreBtn.innerHTML = 'MORE ▾';
    childrenToDisplay.forEach((child) => {
      child.style.display = 'none';
    });
  }
});
