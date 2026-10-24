const addressButton = document.querySelector(".header-menu-adres");
const addressOverlay = document.querySelector("#addressOverlay");
const addressClose = document.querySelector("#addressClose");

addressButton.addEventListener("click",function(){
addressOverlay.classList.add("active");
});

addressClose.addEventListener("click",function(){
addressOverlay.classList.remove("active");
});

addressOverlay.addEventListener("click",function(event){
if(event.target === addressOverlay){
addressOverlay.classList.remove("active");
}
});
const endingAmazingSwiper = new Swiper(".endingAmazingSwiper", {
  slidesPerView: 6,
  spaceBetween: 0,
  loop: false,
  direction: "horizontal",
  breakpoints: {
    1200: {
      slidesPerView: 6
    },
    900: {
      slidesPerView: 4
    },
    600: {
      slidesPerView: 3
    },
    0: {
      slidesPerView: 2
    }
  }
});