 

const swiper = new Swiper(".opinions-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 30000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});