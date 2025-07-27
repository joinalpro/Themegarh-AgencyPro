const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  speed: 3000,
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3
    },
    1280: {
      slidesPerView: 4
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Custom buttons
document.getElementById("swiperNext").addEventListener("click", () => {
  swiper.slideNext();
  swiper.autoplay.start(); // Optional: restart autoplay
});

document.getElementById("swiperPrev").addEventListener("click", () => {
  swiper.slidePrev();
  swiper.autoplay.start(); // Optional: restart autoplay
});
