// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

luxy.init({
  wrapper: ".wrapper",
  targets: ".luxy-el",
  wrapperSpeed: 0.08,
  targetSpeed: 0.01,
  // in percentage
  targetPercentage: 0.1,
});

// smartphone: { smooth: true },
// tablet: { smooth: true },

// import LocomotiveScroll from "locomotive-scroll";

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   inertia: 0.8,
//   smooth: true,
//   getDirection: true,
//   smartphone: {
//     smooth: true,
//     inertia: 0.8,
//     getDirection: true,
//   },
//   tablet: {
//     smooth: true,
//     inertia: 0.8,
//     getDirection: true,
//   },
// });

// setTimeout(() => {
//   scroll.destroy();
// }, 0);
// setTimeout(() => {
//   scroll.init();
// }, 50);
// setTimeout(() => {
//   scroll.update();
// }, 1000);

// I know that the code could be better.
// If you have some tips or improvement, please let me know.

// import { jarallax } from "jarallax";
// jarallax(document.querySelectorAll(".jarallax"), {
//   speed: 0.2,
// });

// import rallax from "rallax.js";
// const parallax = rallax(".hero", { speed: 1.05 });
// const parallax2 = rallax(".content-first", { speed: 0.1 });
// const parallax3 = rallax(".content__full-img", { speed: 0.2 });
// const parallax4 = rallax(".content-second", { speed: 0.35 });

// after reaching a certain position in the document,

// Отримуємо всі блоки content__video-wrap
var videoWraps = document.querySelectorAll(".content__video-wrap");

// Ітеруємося по кожному блоку
videoWraps.forEach(function (videoWrap) {
  // Знаходимо елементи в межах поточного блоку
  var videoImage = videoWrap.querySelector(".content__video-image");
  var videoIframe = videoWrap.querySelector(".content__video-iframe");
  var playButton = videoWrap.querySelector(".content__video-button");

  // Додаємо обробник подій для кліку на кнопці
  playButton.addEventListener("click", function () {
    // Приховуємо зображення
    videoImage.style.display = "none";
    // Приховуємо кнопку
    playButton.style.display = "none";
    // Показуємо iframe
    videoIframe.style.display = "block";

    // Розпочинаємо відтворення відео
    videoIframe.src += "&autoplay=1";
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Get all sections with data-speed attribute
//   const parallaxSections = document.querySelectorAll("[data-speed]");

//   // Attach scroll event listener
//   window.addEventListener("scroll", function () {
//     // Calculate the scroll position
//     const scrollPosition = window.scrollY;

//     // Iterate through each parallax section
//     parallaxSections.forEach(function (section) {
//       // Get the speed from data-speed attribute
//       const speed = parseFloat(section.getAttribute("data-speed"));

//       // Calculate the translateY value based on scroll position and speed
//       const translateY = scrollPosition * speed;

//       // Apply the translateY transformation to the section
//       section.style.transform = `translateY(${translateY}px)`;

//       // Calculate the margin to compensate for the disappearing space
//       const marginBottom = -translateY;
//       section.style.marginBottom = `-${marginBottom}px`;
//     });
//   });
// });

var windowWidth;
var bgSection = document.querySelectorAll(".bg-section");
var vhElement = document.querySelectorAll(".vh-element");
var isResize;

function resize() {
  if (windowWidth != window.innerWidth) {
    windowWidth = window.innerWidth;

    for (var i = bgSection.length - 1; i >= 0; i--) {
      bgSection[i].style.height = window.innerHeight + "px";
    }

    for (var i = vhElement.length - 1; i >= 0; i--) {
      var largeScreenValues = vhElement[i]
        .getAttribute("data-values-large")
        .split(",");
      var mobileScreenValues = vhElement[i]
        .getAttribute("data-values-mobile")
        .split(",");
      var values =
        window.innerWidth >= 768 ? largeScreenValues : mobileScreenValues;

      var props = vhElement[i].getAttribute("data-props").split(",");

      for (var l = props.length - 1; l >= 0; l--) {
        vhElement[i].style[props[l]] =
          (window.innerHeight * values[l]) / 100 + "px";
      }
    }
  }
  isResize = false;
}

resize();

window.addEventListener("resize", function () {
  if (!isResize) {
    setTimeout(function () {
      isResize = true;
      resize();
    }, 200);
  }
});
