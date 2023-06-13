$(document).ready(function () {
  $('.main-slider').slick({
    dots: false,
    Infinity:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
  })

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