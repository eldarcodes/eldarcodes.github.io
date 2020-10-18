const content = document.querySelector('main')
const insertTarget = document.querySelector('.header__wrapper')
const footerLinks = document.querySelector('.footer__links')

$('.items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  adaptiveHeight: true,
  arrows: false,
  speed: 500,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
})

window.onbeforeunload = () => {
  window.scrollTo(0, 0)
}

scrollnav.init(content, {
  insertTarget: footerLinks,
  insertLocation: 'append',
  updateHistory: false,
})

scrollnav.init(content, {
  insertTarget,
  insertLocation: 'append',
  updateHistory: false,
})

const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.scroll-nav')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
})

const btnMore = document.querySelectorAll('.btn-more')
const moreText = document.querySelectorAll('.more')

let cards = document.querySelectorAll('.products__card')
let cardWindow = document.querySelectorAll('.products__card-text')

for (let i in cards) {
  cards[i].onclick = () => {
    cardWindow[i].classList.toggle('show')
  }
}
