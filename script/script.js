const swiper1 = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  speed: 3000,
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
// Custom buttons
document.getElementById("swiperNext").addEventListener("click", () => {
  swiper1.slideNext();
  swiper1.autoplay.start();
});

document.getElementById("swiperPrev").addEventListener("click", () => {
  swiper1.slidePrev();
  swiper1.autoplay.start();
});

const swiper2 = new Swiper(".swiperTwo", {
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
      slidesPerView: 4
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const swiper3 = new Swiper(".mySwiper", {
        loop: true,
        speed: 3000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
});

