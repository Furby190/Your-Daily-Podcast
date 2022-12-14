import Swiper, { Autoplay } from 'swiper';

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  Swiper.use([Autoplay]);

  const swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
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