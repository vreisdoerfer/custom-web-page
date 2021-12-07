"use strict";
var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-navigation");
var showcaseItems = document.querySelectorAll(".showcase-item");

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200);
});

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);
});

var bannerSwiper = new Swiper(".banner-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var iconsSwiper = new Swiper(".icons-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  centeredSlides: false,
  navigation: {
    nextEl: ".icons-swiper .swiper-button-next",
    prevEl: ".icons-swiper .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
      slidesPerGroup: 1,
    },
    500: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    800: {
      slidesPerView: 6,
      spaceBetween: 10,
      slidesPerGroup: 3,
    },
  },
});

var showcaseSwiper = new Swiper(".showcase-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".showcase-swiper .swiper-button-next",
    prevEl: ".showcase-swiper .swiper-button-prev",
  },
});


//Show the information and image according to carousel index
showcaseSwiper.on("activeIndexChange", () => {
  var active = ".showcase-item" + showcaseSwiper.activeIndex;
  var activeEls = document.querySelectorAll(active);
  showcaseItems.forEach((showcaseItem) => {
    showcaseItem.style.pointerEvents = "none";
    showcaseItem.style.opacity = "0";
  });
  setTimeout(()=> {
    activeEls.forEach((activeEl) => {
      activeEl.style.pointerEvents = "all";
      activeEl.style.opacity = "1";
    });
  }, 10)
});
