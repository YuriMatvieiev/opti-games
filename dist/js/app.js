(() => {
    var __webpack_modules__ = {
        846: function(module, exports) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
 /*! luxy.js v0.0.7 | (c) 2018 Mineo Okuda | MIT License | git+ssh://git@github.com:min30327/luxy.git */            !function(t, e) {
                "use strict";
                true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = e, 
                __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
                __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            }(0, (function() {
                "use strict";
                var t = {
                    wrapper: "#luxy",
                    targets: ".luxy-el",
                    wrapperSpeed: .08,
                    targetSpeed: .02,
                    targetPercentage: .1
                }, e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                window.requestAnimationFrame = e;
                var i = window.cancelAnimationFrame || window.mozCancelAnimationFrame, s = function() {
                    for (var t = {}, e = 0, i = arguments.length; e < i; e++) {
                        var s = arguments[e];
                        !function(e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        }(s);
                    }
                    return t;
                }, r = function() {
                    this.Targets = [], this.TargetsLength = 0, this.wrapper = "", this.windowHeight = 0, 
                    this.wapperOffset = 0;
                };
                return r.prototype = {
                    isAnimate: !1,
                    isResize: !1,
                    scrollId: "",
                    resizeId: "",
                    init: function(e) {
                        if (this.settings = s(t, e || {}), this.wrapper = document.querySelector(this.settings.wrapper), 
                        "undefined" === this.wrapper) return !1;
                        this.targets = document.querySelectorAll(this.settings.targets), document.body.style.height = this.wrapper.clientHeight + "px", 
                        this.windowHeight = window.clientHeight, this.attachEvent(), this.apply(this.targets, this.wrapper), 
                        this.animate(), this.resize();
                    },
                    apply: function(t, e) {
                        this.wrapperInit(), this.targetsLength = t.length;
                        for (var i = 0; i < this.targetsLength; i++) {
                            var s = {
                                offset: t[i].getAttribute("data-offset"),
                                speedX: t[i].getAttribute("data-speed-x"),
                                speedY: t[i].getAttribute("data-speed-Y"),
                                percentage: t[i].getAttribute("data-percentage"),
                                horizontal: t[i].getAttribute("data-horizontal")
                            };
                            this.targetsInit(t[i], s);
                        }
                    },
                    wrapperInit: function() {
                        this.wrapper.style.width = "100%", this.wrapper.style.position = "fixed";
                    },
                    targetsInit: function(t, e) {
                        this.Targets.push({
                            elm: t,
                            offset: e.offset ? e.offset : 0,
                            horizontal: e.horizontal ? e.horizontal : 0,
                            top: 0,
                            left: 0,
                            speedX: e.speedX ? e.speedX : 1,
                            speedY: e.speedY ? e.speedY : 1,
                            percentage: e.percentage ? e.percentage : 0
                        });
                    },
                    scroll: function() {
                        document.documentElement.scrollTop || document.body.scrollTop;
                        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                        this.scrollTop, this.windowHeight;
                        this.wrapperUpdate(this.scrollTop);
                        for (var t = 0; t < this.Targets.length; t++) this.targetsUpdate(this.Targets[t]);
                    },
                    animate: function() {
                        this.scroll(), this.scrollId = e(this.animate.bind(this));
                    },
                    wrapperUpdate: function() {
                        this.wapperOffset += (this.scrollTop - this.wapperOffset) * this.settings.wrapperSpeed, 
                        this.wrapper.style.transform = "translate3d(0," + Math.round(100 * -this.wapperOffset) / 100 + "px ,0)";
                    },
                    targetsUpdate: function(t) {
                        t.top += (this.scrollTop * Number(this.settings.targetSpeed) * Number(t.speedY) - t.top) * this.settings.targetPercentage, 
                        t.left += (this.scrollTop * Number(this.settings.targetSpeed) * Number(t.speedX) - t.left) * this.settings.targetPercentage;
                        var e = parseInt(t.percentage) - t.top - parseInt(t.offset), i = Math.round(-100 * e) / 100, s = 0;
                        if (t.horizontal) {
                            var r = parseInt(t.percentage) - t.left - parseInt(t.offset);
                            s = Math.round(-100 * r) / 100;
                        }
                        t.elm.style.transform = "translate3d(" + s + "px ," + i + "px ,0)";
                    },
                    resize: function() {
                        var t = this;
                        t.windowHeight = window.innerHeight || document.documentElement.clientHeight || 0, 
                        parseInt(t.wrapper.clientHeight) != parseInt(document.body.style.height) && (document.body.style.height = t.wrapper.clientHeight + "px"), 
                        t.resizeId = e(t.resize.bind(t));
                    },
                    attachEvent: function() {
                        var t = this;
                        window.addEventListener("resize", (function() {
                            t.isResize || (i(t.resizeId), i(t.scrollId), t.isResize = !0, setTimeout((function() {
                                t.isResize = !1, t.resizeId = e(t.resize.bind(t)), t.scrollId = e(t.animate.bind(t));
                            }), 200));
                        }));
                    }
                }, new r;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
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
        var luxy_min = __webpack_require__(846);
        luxy_min.init({
            wrapper: "#luxy",
            targets: ".luxy-el",
            wrapperSpeed: .08
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
})();