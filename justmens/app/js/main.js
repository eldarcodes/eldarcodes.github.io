const content = document.querySelector('main')
const insertTarget = document.querySelector('.header__wrapper')
const footerLinks = document.querySelector('.footer__links')
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.scroll-nav')
const btnMore = document.querySelectorAll('.btn-more')
const moreText = document.querySelectorAll('.more')
const cards = document.querySelectorAll('.products__card')
const cardWindow = document.querySelectorAll('.products__card-text')

// to top on reload
window.onbeforeunload = () => {
  window.scrollTo(0, 0)
}

// animate
new WOW().init()

// slider
$('.items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  adaptiveHeight: true,
  arrows: false,
  speed: 500,
})

// scroll nav for footer
scrollnav.init(content, {
  insertTarget: footerLinks,
  insertLocation: 'append',
  updateHistory: false,
})

// scroll nav for header
scrollnav.init(content, {
  insertTarget,
  insertLocation: 'append',
  updateHistory: false,
})

// burger menu
burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
})


const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
  navigator.userAgent
)

for (let i in cards) {
  if (isMobile) {
    cards[i].onclick = () => {
      cardWindow[i].classList.toggle('show')
    }
  } else {
    cards[i].onmouseenter = () => {
      cardWindow[i].classList.add('show')
    }
    cards[i].onmouseleave = () => {
      cardWindow[i].classList.remove('show')
    }
  }
}
