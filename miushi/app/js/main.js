$(function() {
  $(".main__slider").slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    dotsClass: "header__slider-dots",
    dots: true,
    autoplaySpeed: 2000,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/main-page/arrow-left.png" alt="">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/main-page/arrow-right.png" alt="">'
  });

  $(".main__menu-sets__slider").slick({
    slidesToShow: 4,
    dots: true,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    swipeToSlide: true,
    dotsClass: "main-menu__dots",
    prevArrow:
      '<img class="main-menu__arrow arrow-left" src="img/main__menu/left-arrow.png" alt="">',
    nextArrow:
      '<img class="main-menu__arrow arrow-right" src="img/main__menu/right-arrow.png" alt="">'
  });

  jQuery(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/main__menu/quantity-up.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/main__menu/quantity-down.svg" alt=""></div></div>'
  ).insertAfter(".quantity input");
  jQuery(".quantity").each(function() {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $(".new__sections-item--1").on("click", function() {
    if ($(this).hasClass("active")) {
    } else {
      $(".new__sections-item--2").removeClass("active");
      $(this).toggleClass("active");
    }
  });

  $(".new__sections-item--2").on("click", function() {
    if ($(this).hasClass("active")) {
    } else {
      $(".new__sections-item--1").removeClass("active");
      $(this).toggleClass("active");
    }
  });
});
