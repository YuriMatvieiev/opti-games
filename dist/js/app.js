(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    function headerScroll() {
        addWindowScrollEvent = true;
        const header = document.querySelector("header.header");
        const headerShow = header.hasAttribute("data-scroll-show");
        const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
        const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
        let scrollDirection = 0;
        let timer;
        document.addEventListener("windowScroll", (function(e) {
            const scrollTop = window.scrollY;
            clearTimeout(timer);
            if (scrollTop >= startPoint) {
                !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                if (headerShow) {
                    if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                    timer = setTimeout((() => {
                        !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                    }), headerShowTimer);
                }
            } else {
                header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
            }
            scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
        }));
    }
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    luxy.init({
        wrapper: ".wrapper",
        targets: ".luxy-el",
        wrapperSpeed: .08,
        targetSpeed: .01,
        targetPercentage: .1
    });
    var videoWraps = document.querySelectorAll(".content__video-wrap");
    videoWraps.forEach((function(videoWrap) {
        var videoImage = videoWrap.querySelector(".content__video-image");
        var videoIframe = videoWrap.querySelector(".content__video-iframe");
        var playButton = videoWrap.querySelector(".content__video-button");
        playButton.addEventListener("click", (function() {
            videoImage.style.display = "none";
            playButton.style.display = "none";
            videoIframe.style.display = "block";
            videoIframe.src += "&autoplay=1";
        }));
    }));
    var windowWidth;
    var bgSection = document.querySelectorAll(".bg-section");
    var vhElement = document.querySelectorAll(".vh-element");
    var isResize;
    function resize() {
        if (windowWidth != window.innerWidth) {
            windowWidth = window.innerWidth;
            for (var i = bgSection.length - 1; i >= 0; i--) bgSection[i].style.height = window.innerHeight + "px";
            for (i = vhElement.length - 1; i >= 0; i--) {
                var largeScreenValues = vhElement[i].getAttribute("data-values-large").split(",");
                var mobileScreenValues = vhElement[i].getAttribute("data-values-mobile").split(",");
                var values = window.innerWidth >= 768 ? largeScreenValues : mobileScreenValues;
                var props = vhElement[i].getAttribute("data-props").split(",");
                for (var l = props.length - 1; l >= 0; l--) vhElement[i].style[props[l]] = window.innerHeight * values[l] / 100 + "px";
            }
        }
        isResize = false;
    }
    resize();
    window.addEventListener("resize", (function() {
        if (!isResize) setTimeout((function() {
            isResize = true;
            resize();
        }), 200);
    }));
    window["FLS"] = true;
    isWebp();
    headerScroll();
})();