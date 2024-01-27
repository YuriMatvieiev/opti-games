// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import luxy from "luxy.js";

luxy.init({
  wrapper: "#luxy",
  targets: ".luxy-el",
  wrapperSpeed: 0.08,
});

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
