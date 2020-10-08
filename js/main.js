$(function(){


  $('.header__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  wow = new WOW(
    {
      mobile: false,       // default
    }
  )
  wow.init();




  $(window).on('scroll', function () {
    var cont = $('.content');
    if (!cont.hasClass('values__item-number-1--span')) {
      $('.values__item-number-1--span').spincrement({    //сюда вставляется класс счетчика, счетчик остается пустым
        thousandSeparator: '', //разделитель тысяч, можно поставить запятую, тчку и прочее 
        decimalPoint: '.', //разделитель десятков, можно поставить запятую, тjчку и прочее
        duration: 4000, //продолжительность анимации в мс
        from: 0, // не обязательно, с какого числа считать
        to: 99, // по какое число считать, можно оставить пустым, если вставить в html число
        decimalPlaces: null, //количество знаков после запятой, если null - определяет по содержимому
        fade: true // эффект плавного появления
      });
    }
  });


  
// Добавление класса при клике на элемент
  $('.menu-btn').on('click', function () {
    $('.menu-btn').toggleClass('menu-btn--active');
  })

  $('.menu-btn').on('click', function () {
    $('.menu').slideToggle();
  })



});



