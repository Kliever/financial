$(function(){


  $('.header__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  new WOW().init();

  $(window).on('scroll', function () {
    var cont = $('.content');
    if (!cont.hasClass('values__item-number-1--span')) {
      $('.values__item-number-1--span').spincrement({
        thousandSeparator: '',
        decimalPoint: '.',
        duration: 4000,
        from: 0,
        to: 99,
        decimalPlaces: null,
        fade: true
      });
    }
  });

  $('.menu-btn').on('click', function () {
    $('.menu-btn').toggleClass('menu-btn--active');
  })

  $('.menu-btn').on('click', function () {
    $('.menu').slideToggle();
  })



});



