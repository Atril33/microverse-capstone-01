const body = document.querySelector('body');
const hamburger = document.querySelector('.header .hamburger');
const mobileNav = document.querySelector('.header .mobile-nav');
const closeBtn = document.querySelector('.header .closeBtn');
const mobileNavLinks = document.querySelector('.header .ul');

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
