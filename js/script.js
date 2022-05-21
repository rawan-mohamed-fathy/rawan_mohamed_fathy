let menu=document.querySelector('#bars');
let navbar=document.querySelector('.navbar');
menu.onclick= () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


var swiper = new Swiper(".home_slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});























