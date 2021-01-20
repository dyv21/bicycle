// Menu
const body = document.querySelector('.page-body')
const header = body.querySelector('.page-header')
const navMain = header.querySelector('.main-nav');
const navToggle = navMain.querySelector('.main-nav__toggle');

if (header && navMain && navToggle) {
  header.classList.remove('page-header--nojs');

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--closed')) {
      openNaMain();
    } else {
      closeNavMain();
    };
  });
}

const openNaMain = () => {
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
  body.style = `overflow: hidden;`
}

const closeNavMain = () => {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  body.removeAttribute('style');
}

// smooth scroll to anchor
const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    if (navMain.classList.contains('main-nav--opened')) {
      closeNavMain();
    }

    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
