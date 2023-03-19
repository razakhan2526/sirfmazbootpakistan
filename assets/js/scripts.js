// ONSCROLL NAVBAR CHANGE
window.addEventListener('scroll', () => {
  document.querySelector('.transparent-menu').classList.toggle('window-scroll', window.scrollY > 100)
});
// HERO SLIDER
const myCarouselElement = document.querySelector('#carouselExampleIndicators')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: true
});
// SERVICES SLIDER
$( document ).ready(function() {
  const CarouselElement = document.querySelector('#carouselservices')
  const mycarousel = new bootstrap.Carousel(CarouselElement, {
    interval: 10000,
    touch: true,
    ride: false
  });
});

// TEAM SECTION SLIDER
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


// GET A QUOTE POPUP
// window.onload = function() {        
//   document.querySelector(".subscribe-form").classList.add("active");  
//   document.querySelector("#open-subscribe-form").addEventListener("click",function(){
//     document.querySelector(".subscribe-form").classList.add("active");
//   });
  
//   document.querySelector(".subscribe-form .close-btn").addEventListener("click",function(){
//     document.querySelector(".subscribe-form").classList.remove("active");
//   });
// }; 

const links = document.querySelectorAll('.nav-link');
links.forEach(btn => btn.addEventListener("click", (e) => {
  document.querySelector(".nav-link.active").classList.remove("active");
  btn.classList.add("active");
}));