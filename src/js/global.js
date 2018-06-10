(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    }
}(this, function() {
    "use strict";

    function Util() {}

    Util.prototype.addClass = function(Ele, ClassName) {
        if (Ele.classList && typeof ClassName === "string") {
            Ele.classList.add(ClassName);
        } else if (typeof Ele.className !== "undefined" && typeof ClassName === "string") {
            Ele.className += " " + ClassName;
        } else {
            throw new Error("addClass의 인자는 (Element객체,'넣을클래스명') 으로 정의해야합니다.");
        }
    };


    Util.prototype.removeClass = function(Ele, ClassName) {
        if (Ele.classList && typeof ClassName === "string") {
            Ele.classList.remove(ClassName);
        } else if (typeof Ele.className !== "undefined" && typeof ClassName === "string") {
            Ele.className = Ele.className.replace(new RegExp("(^|\\b)(" + ClassName.split(' ').join("|") + ")(\\b|$)", "gi"), " ");
        } else {
            throw new Error("removeClass의 인자는 (Element객체,'넣을클래스명 [구분자 공백]') 으로 정의해야합니다.");
        }
    };


    Util.prototype.hasClass = function(Ele, ClassName) {
        if (Ele.classList && typeof ClassName === "string") {
            return Ele.classList.contains(ClassName);
        } else if (typeof Ele.className !== "undefined" && typeof ClassName === "string") {
            return new RegExp("(^|)" + ClassName + "(|$)", "gi").test(Ele.className);
        } else {
            throw new Error("hasClass의 인자는 (Element객체,'넣을클래스명') 으로 정의해야합니다.");
        }
    };

    Util.prototype.extends = function(obj1, obj2, command) {
        var newObj = {};
        for (var prop in obj1) {
            if (obj1.hasOwnProperty(prop)) {
                newObj[prop] = obj1[prop];
            }
        }
        for (var ob in obj2) {
            if (newObj.hasOwnProperty(ob)) {
                newObj[ob] = obj2[ob];
            }
        }
        return newObj;
    };

    Util.prototype.cssObject = function(element) {
        var Ele = element;
        var css = Ele.currentStyle || window.getComputedStyle(Ele);
        return {
            getCss: function(prop) {
                if (typeof prop === "string") {
                    if (prop === "transform" && Ele.currentStyle) { prop = "-ms-transform"; }
                    return css[prop];
                } else {
                    throw new Error("Css propertyName은 String 으로 정의해주세요.");
                }
            },
            setCss: function(prop, value) {
                if (typeof prop === "string") {
                    if (prop === "transform" && Ele.currentStyle) { prop = "-ms-transform"; }
                    Ele.style[prop] = value;
                } else {
                    throw new Error("Css propertyName은 String 으로 정의해주세요.");
                }
            },
            cssEach: function(cssobj) {
                if (typeof cssobj !== "object") {
                    return false;
                }
                for (var key in cssobj) {
                    if (cssobj.hasOwnProperty(key)) {
                        Ele.style[key] = cssobj[key];
                    }
                }
            }
        };
    };

    Util.prototype.convertStyle = function(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    };

    function getToastcontainer() {
        var toastContainer = document.getElementById("toastcontainer");
        var element = null;
        if (toastContainer === null) {
            element = document.createElement("div");
            element.setAttribute("id", "toastcontainer");
            return document.body.appendChild(element);
        } else {
            return toastContainer;
        }
    }

    function setDrag(toast, time, duration, self) {
        var mc = new Hammer(toast);

        var swipe = function(e) {

            if (e.eventType === 8) {
                return false;
            }
            var direction = e.type === "swipeleft" ? "translateX(-100%)" : "translateX(100%)";
            var cssObject = {
                "opacity": 0,
                "margin-top": "-3rem"
            };

            //스와이프 애니메이션
            cssObject["-o-transform"] = direction;
            cssObject["-webkit-transform"] = direction;
            cssObject["-ms-transform"] = direction;
            cssObject["-moz-transform"] = direction;
            cssObject["transform"] = direction;
            toast.setAttribute("style", self.convertStyle(cssObject));

            setTimeout(function() {
                toast.parentElement.removeChild(toast);
            }, duration);
        };
        mc.on("swipeleft swiperight", swipe);
    }
    Util.prototype.toast = function(message, time) {
        var self = this;

        var toastcontainer = getToastcontainer();
        time = typeof(time) === undefined ? 2000 : time;
        message = typeof(message) === undefined ? "" : message;
        var duration = 300,
            cssObject = {},
            cssObject2 = {},
            translateX;

        var toast = document.createElement("span");
        toast.setAttribute("class", "tw-toast");
        toast.innerText = message;

        toastcontainer.appendChild(toast);

        translateX = "translateX(0) translateY(0px)";
        cssObject["-o-transform"] = translateX;
        cssObject["-webkit-transform"] = translateX;
        cssObject["-ms-transform"] = translateX;
        cssObject["-moz-transform"] = translateX;
        cssObject["transform"] = translateX;
        cssObject["opacity"] = 1;
        setTimeout(function() {
            self.cssObject(toast).cssEach(cssObject);
        }, 100);

        setDrag(toast, time, duration, self);

        setTimeout(function() {
            cssObject["opacity"] = 0;
            cssObject["margin-top"] = "-3rem";
            self.cssObject(toast).cssEach(cssObject);

            setTimeout(function() {
                if (toast.parentElement !== null) {
                    toast.parentElement.removeChild(toast);
                }
            }, duration);

        }, time);
    };
    return new Util();
}));