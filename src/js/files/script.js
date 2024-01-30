// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import { gsap } from "gsap";

luxy.init({
  wrapper: ".wrapper",
  targets: ".luxy-el",
  wrapperSpeed: 0.08,
  targetSpeed: 0.01,
  targetPercentage: 0.1,
});

const initIntro = () => {
  const block = document.querySelector(".hero");
  if (!block) {
    return;
  }
  const headerLogo = document.querySelector(".header__logo");
  const headerMenuItems = document.querySelectorAll(".menu__item");
  const logo = block.querySelector(".hero__logo");
  const text = block.querySelector(".hero__subtitle");
  const title = block.querySelector(".hero__title");
  Splitting({ target: title, by: "chars" });
  title.classList.add("animation-inited");
  const iconScroll = block.querySelector(".hero__scroll-icon");
  const TLIntro = gsap.timeline();

  // header
  TLIntro.fromTo(
    headerLogo,
    { y: 0, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    0.2
  );
  TLIntro.fromTo(
    headerMenuItems,
    { y: 0, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    0.2
  );

  // intro
  TLIntro.fromTo(
    logo,
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 },
    0.4
  );

  title.querySelectorAll(".char").forEach((char, index) => {
    TLIntro.to(
      char,
      {
        opacity: 1,
        y: 0,
        stagger: { each: 0.03 },
        delay: index * 0.03,
        duration: 0.2,
      },
      0.4
    );
  });

  TLIntro.fromTo(
    text,
    { y: -5, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 },
    1.5
  );
  TLIntro.fromTo(
    iconScroll,
    { y: 0, opacity: 0, scale: 0 },
    { y: 0, opacity: 1, duration: 0.6, scale: 1 },
    1.8
  );
};
initIntro();

var videoWraps = document.querySelectorAll(".content__video-wrap");

videoWraps.forEach(function (videoWrap) {
  var videoImage = videoWrap.querySelector(".content__video-image");
  var videoIframe = videoWrap.querySelector(".content__video-iframe");
  var playButton = videoWrap.querySelector(".content__video-button");

  playButton.addEventListener("click", function () {
    videoImage.style.display = "none";
    playButton.style.display = "none";
    videoIframe.style.display = "block";

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
