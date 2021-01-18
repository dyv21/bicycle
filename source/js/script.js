// Menu
const navMain = document.querySelector('.main-nav');
const navToggle = navMain.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click',() => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  };
});


// smooth scroll to anchor
const anchors = document.querySelectorAll('a[href^="#"]')

anchors.forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
})
