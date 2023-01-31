// CAROUSEL SLIDER
const myCarouselElement = document.querySelector('#carouselExampleIndicators')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 4000,
  wrap: true
});

// ONSCROLL NAVBAR CHANGE
window.addEventListener('scroll', () => {
  document.querySelector('.transparent-menu').classList.toggle('window-scroll', window.scrollY > 100)
});

// GET A QUOTE POPUP
window.onload = function() {        
  document.querySelector(".subscribe-form").classList.add("active");  
  document.querySelector("#open-subscribe-form").addEventListener("click",function(){
    document.querySelector(".subscribe-form").classList.add("active");
  });
  
  document.querySelector(".subscribe-form .close-btn").addEventListener("click",function(){
    document.querySelector(".subscribe-form").classList.remove("active");
  });
}; 

document.querySelector(".openform").addEventListener("click",function(){
  document.querySelector(".subscribe-form").classList.add("active");
});

// PLANE 1
document.querySelector(".plane-1").addEventListener("click",function(){
  document.querySelector(".subscribe-form").classList.add("active");
});
// END

// PLANE 2
document.querySelector(".plane-2").addEventListener("click",function(){
  document.querySelector(".subscribe-form").classList.add("active");
});
// END

// PLANE 3
document.querySelector(".plane-3").addEventListener("click",function(){
  document.querySelector(".subscribe-form").classList.add("active");
});
// END

document.querySelector(".subscribe-form .close-btn").addEventListener("click",function(){
  document.querySelector(".subscribe-form").classList.remove("active");
});