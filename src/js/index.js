"use strict";

var iconsSwiper = new Swiper(".icons-swiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  slidesPerGroup: 3,
  centeredSlides: false,
  loop: true,
  navigation: {
    nextEl: ".icons-swiper .swiper-button-next",
    prevEl: ".icons-swiper .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //     slidesPerGroup: 1,
  //   },
  //   640: {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //     slidesPerGroup: 3,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 10,
  //     slidesPerGroup: 4,
  //   },
  //   1250: {
  //     slidesPerView: 6,
  //     spaceBetween: 10,
  //     slidesPerGroup: 6,
  //   },
  // },
});

var showcaseSwiper = new Swiper(".showcase-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".showcase-swiper .swiper-button-next",
    prevEl: ".showcase-swiper .swiper-button-prev",
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //     slidesPerGroup: 1,
  //   },
  //   640: {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //     slidesPerGroup: 3,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 10,
  //     slidesPerGroup: 4,
  //   },
  //   1250: {
  //     slidesPerView: 6,
  //     spaceBetween: 10,
  //     slidesPerGroup: 6,
  //   },
  // },
});
