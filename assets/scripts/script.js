$(document).ready(function () {
  Fancybox.bind("[data-fancybox]", {});
  $('.main-slider').slick({
    dots: false,
    Infinity:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
  });

  $('.product-main_slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-main_slider-min'
  });
  $('.product-main_slider-min').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    Infinity:true,
    
    focusOnSelect: true,
    autoplay: false,
    speed: 1500,
    arrows:false,
    asNavFor: '.product-main_slider-big',
  });

  $('.more-product_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows:true,
    Infinity:true,
  });

  $('.news-slier').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    Infinity:true,
    speed: 1500,
    autoplay:true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          
         
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          
         
          slidesToShow: 1,
        }
      }
    ]
  });

  
});


$(window).scroll(function(){

  if ($(this).scrollTop() > 1) {
     $('header').addClass('header-shadow');
  } else {
     $('header').removeClass('header-shadow');
  };


  const $element = $('header');

  if ($(window).scrollTop() === 0) {
 
    $element.removeClass('header-shadow');
  }
});



const  span= document.querySelector('.round');
const dropdown = document.querySelector('#sub-nav');
let isHovered = false;

dropdown.addEventListener('mousemove', function(event) {
  const dropdownRect = dropdown.getBoundingClientRect();
  const maxTop = dropdownRect.height - span.offsetHeight;
 

  const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);

  if (hoveredElement !== dropdown && hoveredElement !== span) {
    const liRect = hoveredElement.getBoundingClientRect();
    span.style.top = Math.max(0, Math.min(maxTop, liRect.top - dropdownRect.top)) + 'px';
    isHovered = true;
  } else {
    isHovered = false;
  }

});
dropdown.addEventListener('mouseleave', function() {
  if (!isHovered) {
    span.style.top = 0;
  }
});