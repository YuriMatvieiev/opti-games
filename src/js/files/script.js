// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

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
