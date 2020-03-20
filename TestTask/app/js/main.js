$('.slider-wrapper').slick({
  arrows: false,
  dots: true
  // autoplay: true,
  // autoplaySpeed: 2000,
})
$('.header__burger').on('click', function() {
  $('.header__burger, .header__inner-nav').toggleClass('active')
  $('body').toggleClass('lock')
})

