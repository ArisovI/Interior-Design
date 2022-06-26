$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: '<i class="icon-arrow-right" aria-hidden="true"></i>',
    prevArrow: '<i class="icon-arrow-left" aria-hidden="true"></i>',
    dots: true,
    dotsClass: 'slick-dots',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true

        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.otziv-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: '<i class="next-arrow" aria-hidden="true"></i>',
    prevArrow: '<i class="back-arrow" aria-hidden="true"></i>',
    dots: true,
    dotsClass: 'dots',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true

        }
      }
    ]
  });
});