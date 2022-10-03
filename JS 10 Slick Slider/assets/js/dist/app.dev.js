"use strict";

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
$(function () {
  $('.slider_block').slick({
    // lazyLoad: 'ondemand',
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true
  });
});
$(function () {
  $('.products_wrapper').slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="icon-prev"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-next"></i></button>',
    variableWidth: true,
    slidesToShow: 5,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        arows: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        arows: true
      }
    }, {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        dots: true,
        arows: false
      }
    }]
  });
});
$(function () {
  $('.partner_list').slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="icon-prev"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-next"></i></button>',
    slidesToShow: 8,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 8,
        arows: true
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        arows: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arows: true
      }
    }, {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        dots: true,
        arows: false
      }
    }]
  });
});