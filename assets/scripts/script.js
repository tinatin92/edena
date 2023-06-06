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
const sectionOne = document.querySelector('.header-comment');
const sectiontwo = document.querySelector('.about-us_title');
const options = {};

const observer = new IntersectionObserver(function(entries,observer){
  entries.forEach(entry => entry.target.classList.toggle('big-font'))
})

observer.observe(sectionOne)
observer.observe(sectiontwo)