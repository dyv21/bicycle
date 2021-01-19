// Menu
const header = document.querySelector('.page-header')
const navMain = header.querySelector('.main-nav');
const navToggle = navMain.querySelector('.main-nav__toggle');

if (header && navMain && navToggle) {
  header.classList.remove('page-header--nojs');

  navToggle.addEventListener('click',() => {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    };
  });
}

// smooth scroll to anchor
const anchors = document.querySelectorAll('a[href^="#"]')

anchors.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
})
