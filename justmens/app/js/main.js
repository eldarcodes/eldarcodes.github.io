const content = document.querySelector('main')
const insertTarget = document.querySelector('.header__wrapper')

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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
})

window.onbeforeunload = () => {
  window.scrollTo(0, 0)
}

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

for (let i in btnMore) {
  btnMore[i].innerHTML = ''
  // btnMore[i].addEventListener('click', () => {
  //   if (moreText[i].style.display === 'block') {
  //     moreText[i].style.display = 'none'
  //     btnMore[i].innerText = 'Read more'
  //   } else {
  //     moreText[i].style.display = 'block'
  //     btnMore[i].innerText = 'Read less'
  //   }
  // })
}
