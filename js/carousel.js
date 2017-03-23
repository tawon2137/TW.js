(function(f, g, c, i, e, k, h) { /*! Jssor */
    new(function() {});
    var d = {
        Nc: function(a) {
            return a
        },
        Nd: function(a) {
            return -a * (a - 2)
        },
        Ld: function(a) {
            return (a -= 1) * a * a * a * a + 1
        }
    };
    var b = new function() {
        var j = this,
            xb = /\S+/g,
            F = 1,
            wb = 2,
            cb = 3,
            bb = 4,
            fb = 5,
            G, r = 0,
            l = 0,
            s = 0,
            Y = 0,
            A = 0,
            I = navigator,
            kb = I.appName,
            o = I.userAgent,
            p = parseFloat;

        function Fb() {
            if (!G) {
                G = {
                    Ue: "ontouchstart" in f || "createTouch" in g
                };
                var a;
                if (I.pointerEnabled || (a = I.msPointerEnabled)) G.hd = a ? "msTouchAction" : "touchAction"
            }
            return G
        }

        function v(i) {
            if (!r) {
                r = -1;
                if (kb == "Microsoft Internet Explorer" && !!f.attachEvent && !!f.ActiveXObject) {
                    var e = o.indexOf("MSIE");
                    r = F;
                    s = p(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on Y=@_jscript_version@*/ ;
                    l = g.documentMode || s
                } else if (kb == "Netscape" && !!f.addEventListener) {
                    var d = o.indexOf("Firefox"),
                        b = o.indexOf("Safari"),
                        h = o.indexOf("Chrome"),
                        c = o.indexOf("AppleWebKit");
                    if (d >= 0) {
                        r = wb;
                        l = p(o.substring(d + 8))
                    } else if (b >= 0) {
                        var j = o.substring(0, b).lastIndexOf("/");
                        r = h >= 0 ? bb : cb;
                        l = p(o.substring(j + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                        if (a) {
                            r = F;
                            l = s = p(a[1])
                        }
                    }
                    if (c >= 0) A = p(o.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                    if (a) {
                        r = fb;
                        l = p(a[2])
                    }
                }
            }
            return i == r
        }

        function q() {
            return v(F)
        }

        function vb() {
            return q() && (l < 6 || g.compatMode == "BackCompat")
        }

        function ab() {
            return v(cb)
        }

        function eb() {
            return v(fb)
        }

        function rb() {
            return ab() && A > 534 && A < 535
        }

        function J() {
            v();
            return A > 537 || l > 42 || r == F && l >= 11
        }

        function tb() {
            return q() && l < 9
        }

        function sb(a) {
            var b, c;
            return function(f) {
                if (!b) {
                    b = e;
                    var d = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, e) {
                        var b = a;
                        if (e) b = g + d;
                        if (f.style[b] != h) return c = b
                    })
                }
                return c
            }
        }

        function qb(b) {
            var a;
            return function(c) {
                a = a || sb(b)(c) || b;
                return a
            }
        }
        var K = qb("transform");

        function jb(a) {
            return {}.toString.call(a)
        }
        var gb = {};
        n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
            gb["[object " + a + "]"] = a.toLowerCase()
        });

        function n(b, d) {
            var a, c;
            if (jb(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c
        }

        function D(a) {
            return a == i ? String(a) : gb[jb(a)] || "object"
        }

        function hb(a) {
            for (var b in a) return e
        }

        function B(a) {
            try {
                return D(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function u(a, b) {
            return {
                x: a,
                y: b
            }
        }

        function nb(b, a) {
            setTimeout(b, a || 0)
        }

        function H(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            n(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a = c + (!a.indexOf(" ") ? "" : " ") + a;
            return a
        }

        function pb(b, a) {
            if (l < 9) b.style.filter = a
        }
        j.Te = Fb;
        j.nd = q;
        j.te = ab;
        j.pe = J;
        sb("transform");
        j.ld = function() {
            return l
        };
        j.Vc = nb;

        function V(a) {
            a.constructor === V.caller && a.Tc && a.Tc.apply(a, V.caller.arguments)
        }
        j.Tc = V;
        j.jb = function(a) {
            if (j.be(a)) a = g.getElementById(a);
            return a
        };

        function t(a) {
            return a || f.event
        }
        j.Ac = t;
        j.ec = function(b) {
            b = t(b);
            var a = b.target || b.srcElement || g;
            if (a.nodeType == 3) a = j.yc(a);
            return a
        };
        j.vc = function(a) {
            a = t(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };

        function w(c, d, a) {
            if (a !== h) c.style[d] = a == h ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && f.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, i);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function X(b, c, a, d) {
            if (a !== h) {
                if (a == i) a = "";
                else d && (a += "px");
                w(b, c, a)
            } else return p(w(b, c))
        }

        function m(c, a) {
            var d = a ? X : w,
                b;
            if (a & 4) b = qb(c);
            return function(e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Ab(b) {
            if (q() && s < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? p(a[1]) / 100 : 1
            } else return p(b.style.opacity || "1")
        }

        function Cb(b, a, f) {
            if (q() && s < 9) {
                var h = b.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = c.round(100 * a),
                    d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = H(h, [i], d);
                pb(b, g)
            } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
        }
        var L = {
            cb: ["rotate"],
            R: ["rotateX"],
            U: ["rotateY"],
            wb: ["skewX"],
            vb: ["skewY"]
        };
        if (!J()) L = C(L, {
            p: ["scaleX", 2],
            o: ["scaleY", 2],
            E: ["translateZ", 1]
        });

        function M(d, a) {
            var c = "";
            if (a) {
                if (q() && l && l < 10) {
                    delete a.R;
                    delete a.U;
                    delete a.E
                }
                b.f(a, function(d, b) {
                    var a = L[b];
                    if (a) {
                        var e = a[1] || 0;
                        if (N[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (J()) {
                    if (a.X || a.eb || a.E != h) c += " translate3d(" + (a.X || 0) + "px," + (a.eb || 0) + "px," + (a.E || 0) + "px)";
                    if (a.p == h) a.p = 1;
                    if (a.o == h) a.o = 1;
                    if (a.p != 1 || a.o != 1) c += " scale3d(" + a.p + ", " + a.o + ", 1)"
                }
            }
            d.style[K(d)] = c
        }
        j.Ec = m("transformOrigin", 4);
        j.ce = m("backfaceVisibility", 4);
        j.le = m("transformStyle", 4);
        j.xe = m("perspective", 6);
        j.ye = m("perspectiveOrigin", 4);
        j.ze = function(a, b) {
            if (q() && s < 9 || s < 10 && vb()) a.style.zoom = b == 1 ? "" : b;
            else {
                var c = K(a),
                    f = "scale(" + b + ")",
                    e = a.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = H(e, [g], f);
                a.style[c] = d
            }
        };
        j.bc = function(b, a) {
            return function(c) {
                c = t(c);
                var e = c.type,
                    d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !j.Re(a, d)) && b(c)
            }
        };
        j.a = function(a, d, b, c) {
            a = j.jb(a);
            if (a.addEventListener) {
                d == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
                a.addEventListener(d, b, c)
            } else if (a.attachEvent) {
                a.attachEvent("on" + d, b);
                c && a.setCapture && a.setCapture()
            }
        };
        j.C = function(a, c, d, b) {
            a = j.jb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        j.xb = function(a) {
            a = t(a);
            a.preventDefault && a.preventDefault();
            a.cancel = e;
            a.returnValue = k
        };
        j.Me = function(a) {
            a = t(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = e
        };
        j.F = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        j.Le = function(a, b) {
            if (b == h) return a.textContent || a.innerText;
            var c = g.createTextNode(b);
            j.Pb(a);
            a.appendChild(c)
        };
        j.Eb = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function ib(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (S(a, b) == c) return a;
                    if (!e) {
                        var d = ib(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        j.u = ib;

        function Q(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    S(a, b) == d && c.push(a);
                    if (!f) {
                        var e = Q(a, d, f, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }

        function db(a, c, d) {
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c) return a;
                    if (!d) {
                        var b = db(a, c, d);
                        if (b) return b
                    }
                }
        }
        j.Be = db;
        j.Ae = function(b, a) {
            return b.getElementsByTagName(a)
        };

        function C() {
            var e = arguments,
                d, c, b, a, g = 1 & e[0],
                f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)
                if (c = e[f])
                    for (b in c) {
                        a = c[b];
                        if (a !== h) {
                            a = c[b];
                            var i = d[b];
                            d[b] = g && (B(i) || B(a)) ? C(g, {}, i, a) : a
                        }
                    }
            return d
        }
        j.V = C;

        function W(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (B(a) && B(b)) {
                        a = W(a, b);
                        e = !hb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        j.Xc = function(a) {
            return D(a) == "function"
        };
        j.be = function(a) {
            return D(a) == "string"
        };
        j.zd = function(a) {
            return !isNaN(p(a)) && isFinite(a)
        };
        j.f = n;

        function P(a) {
            return g.createElement(a)
        }
        j.Ib = function() {
            return P("DIV")
        };
        j.wd = function() {
            return P("SPAN")
        };
        j.Lc = function() {};

        function T(b, c, a) {
            if (a == h) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function S(a, b) {
            return T(a, b) || T(a, "data-" + b)
        }
        j.n = T;
        j.i = S;

        function y(b, a) {
            if (a == h) return b.className;
            b.className = a
        }
        j.dc = y;

        function mb(b) {
            var a = {};
            n(b, function(b) {
                if (b != h) a[b] = b
            });
            return a
        }

        function ob(b, a) {
            return b.match(a || xb)
        }

        function O(b, a) {
            return mb(ob(b || "", a))
        }
        j.ud = ob;

        function Z(b, c) {
            var a = "";
            n(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function E(a, c, b) {
            y(a, Z(" ", C(W(O(y(a)), O(c)), O(b))))
        }
        j.yc = function(a) {
            return a.parentNode
        };
        j.L = function(a) {
            j.P(a, "none")
        };
        j.Q = function(a, b) {
            j.P(a, b ? "none" : "")
        };
        j.Cd = function(b, a) {
            b.removeAttribute(a)
        };
        j.Wd = function() {
            return q() && l < 10
        };
        j.Vd = function(d, a) {
            if (a) d.style.clip = "rect(" + c.round(a.l || a.s || 0) + "px " + c.round(a.z) + "px " + c.round(a.A) + "px " + c.round(a.j || a.q || 0) + "px)";
            else if (a !== h) {
                var g = d.style.cssText,
                    f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = H(g, f, "");
                b.Fb(d, e)
            }
        };
        j.N = function() {
            return +new Date
        };
        j.M = function(b, a) {
            b.appendChild(a)
        };
        j.Gb = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        j.Cb = function(b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        j.Jd = function(a, b) {
            n(a, function(a) {
                j.Cb(a, b)
            })
        };
        j.Pb = function(a) {
            j.Jd(j.Eb(a, e), a)
        };
        j.Kd = function(a, b) {
            var c = j.yc(a);
            b & 1 && j.H(a, (j.k(c) - j.k(a)) / 2);
            b & 2 && j.G(a, (j.m(c) - j.m(a)) / 2)
        };
        j.Yd = function(b, a) {
            return parseInt(b, a || 10)
        };
        j.Qd = p;
        j.Re = function(b, a) {
            var c = g.body;
            while (a && b !== a && c !== a) try {
                a = a.parentNode
            } catch (d) {
                return k
            }
            return b === a
        };

        function U(d, c, b) {
            var a = d.cloneNode(!c);
            !b && j.Cd(a, "id");
            return a
        }
        j.rb = U;
        j.tb = function(d, f) {
            var a = new Image;

            function b(e, d) {
                j.C(a, "load", b);
                j.C(a, "abort", c);
                j.C(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, e)
            }
            if (eb() && l < 11.6 || !d) b(!d);
            else {
                j.a(a, "load", b);
                j.a(a, "abort", c);
                j.a(a, "error", c);
                a.src = d
            }
        };
        j.Rd = function(d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }
            n(d, function(a) {
                j.tb(a.src, b)
            });
            b()
        };
        j.Td = function(a, g, i, h) {
            if (h) a = U(a);
            var c = Q(a, g);
            if (!c.length) c = b.Ae(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = U(i);
                y(e, y(d));
                b.Fb(e, d.style.cssText);
                b.Gb(e, d);
                b.Cb(d)
            }
            return a
        };

        function Db(a) {
            var l = this,
                p = "",
                r = ["av", "pv", "ds", "dn"],
                e = [],
                q, k = 0,
                f = 0,
                d = 0;

            function i() {
                E(a, q, e[d || k || f & 2 || f]);
                b.D(a, "pointer-events", d ? "none" : "")
            }

            function c() {
                k = 0;
                i();
                j.C(g, "mouseup", c);
                j.C(g, "touchend", c);
                j.C(g, "touchcancel", c)
            }

            function o(a) {
                if (d) j.xb(a);
                else {
                    k = 4;
                    i();
                    j.a(g, "mouseup", c);
                    j.a(g, "touchend", c);
                    j.a(g, "touchcancel", c)
                }
            }
            l.Ud = function(a) {
                if (a === h) return f;
                f = a & 2 || a & 1;
                i()
            };
            l.Hb = function(a) {
                if (a === h) return !d;
                d = a ? 0 : 3;
                i()
            };
            l.W = a = j.jb(a);
            var m = b.ud(y(a));
            if (m) p = m.shift();
            n(r, function(a) {
                e.push(p + a)
            });
            q = Z(" ", e);
            e.unshift("");
            j.a(a, "mousedown", o);
            j.a(a, "touchstart", o)
        }
        j.cc = function(a) {
            return new Db(a)
        };
        j.D = w;
        j.Db = m("overflow");
        j.G = m("top", 2);
        j.H = m("left", 2);
        j.k = m("width", 2);
        j.m = m("height", 2);
        j.ac = m("marginLeft", 2);
        j.gc = m("marginTop", 2);
        j.B = m("position");
        j.P = m("display");
        j.v = m("zIndex", 1);
        j.Zb = function(b, a, c) {
            if (a != h) Cb(b, a, c);
            else return Ab(b)
        };
        j.Fb = function(a, b) {
            if (b != h) a.style.cssText = b;
            else return a.style.cssText
        };
        j.ae = function(b, a) {
            if (a === h) {
                a = w(b, "backgroundImage") || "";
                var c = /\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a) || [];
                return c[1]
            }
            w(b, "backgroundImage", a ? "url('" + a + "')" : "")
        };
        var R = {
            qb: j.Zb,
            l: j.G,
            j: j.H,
            Mb: j.k,
            Lb: j.m,
            pb: j.B,
            df: j.P,
            ob: j.v
        };

        function x(f, l) {
            var e = tb(),
                b = J(),
                d = rb(),
                g = K(f);

            function k(b, d, a) {
                var e = b.bb(u(-d / 2, -a / 2)),
                    f = b.bb(u(d / 2, -a / 2)),
                    g = b.bb(u(d / 2, a / 2)),
                    h = b.bb(u(-d / 2, a / 2));
                b.bb(u(300, 300));
                return u(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
            }

            function a(d, a) {
                a = a || {};
                var n = a.E || 0,
                    p = (a.R || 0) % 360,
                    q = (a.U || 0) % 360,
                    u = (a.cb || 0) % 360,
                    l = a.p,
                    m = a.o,
                    f = a.cf;
                if (l == h) l = 1;
                if (m == h) m = 1;
                if (f == h) f = 1;
                if (e) {
                    n = 0;
                    p = 0;
                    q = 0;
                    f = 0
                }
                var c = new zb(a.X, a.eb, n);
                c.R(p);
                c.U(q);
                c.Dd(u);
                c.Zd(a.wb, a.vb);
                c.Yb(l, m, f);
                if (b) {
                    c.mb(a.q, a.s);
                    d.style[g] = c.Pd()
                } else if (!Y || Y < 9) {
                    var o = "",
                        i = {
                            x: 0,
                            y: 0
                        };
                    if (a.O) i = k(c, a.O, a.Y);
                    j.gc(d, i.y);
                    j.ac(d, i.x);
                    o = c.Sd();
                    var s = d.style.filter,
                        t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                        r = H(s, [t], o);
                    pb(d, r)
                }
            }
            x = function(e, c) {
                c = c || {};
                var g = c.q,
                    k = c.s,
                    f;
                n(R, function(a, b) {
                    f = c[b];
                    f !== h && a(e, f)
                });
                j.Vd(e, c.c);
                if (!b) {
                    g != h && j.H(e, (c.Sc || 0) + g);
                    k != h && j.G(e, (c.Rc || 0) + k)
                }
                if (c.Bd)
                    if (d) nb(j.F(i, M, e, c));
                    else a(e, c)
            };
            j.kb = M;
            if (d) j.kb = x;
            if (e) j.kb = a;
            else if (!b) a = M;
            j.S = x;
            x(f, l)
        }
        j.kb = x;
        j.S = x;

        function zb(j, k, o) {
            var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, j || 0, k || 0, o || 0, 1],
                h = c.sin,
                g = c.cos,
                l = c.tan;

            function f(a) {
                return a * c.PI / 180
            }

            function n(a, b) {
                return {
                    x: a,
                    y: b
                }
            }

            function m(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i, n, p, q, s, v, x, y, B, D, F, d, h, j) {
                return [c * a + e * p + l * x + m * F, c * g + e * q + l * y + m * d, c * i + e * s + l * B + m * h, c * n + e * v + l * D + m * j, o * a + r * p + t * x + u * F, o * g + r * q + t * y + u * d, o * i + r * s + t * B + u * h, o * n + r * v + t * D + u * j, w * a + z * p + A * x + C * F, w * g + z * q + A * y + C * d, w * i + z * s + A * B + C * h, w * n + z * v + A * D + C * j, E * a + b * p + f * x + k * F, E * g + b * q + f * y + k * d, E * i + b * s + f * B + k * h, E * n + b * v + f * D + k * j]
            }

            function e(c, a) {
                return m.apply(i, (a || b).concat(c))
            }
            d.Yb = function(a, c, d) {
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.mb = function(a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.R = function(c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1])
                }
            };
            d.U = function(c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.Dd = function(c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.Zd = function(a, c) {
                if (a || c) {
                    j = f(a);
                    k = f(c);
                    b = e([1, l(k), 0, 0, l(j), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.bb = function(c) {
                var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                return n(a[12], a[13])
            };
            d.Pd = function() {
                return "matrix3d(" + b.join(",") + ")"
            };
            d.Sd = function() {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
            }
        }
        new function() {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.p = function(b, c) {
                return a.Pc(b, c, 0)
            };
            a.o = function(b, c) {
                return a.Pc(b, 0, c)
            };
            a.Pc = function(a, c, d) {
                return b(a, [
                    [c, 0],
                    [0, d]
                ])
            };
            a.bb = function(d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return u(a[0][0], a[1][0])
            }
        };
        var N = {
            Sc: 0,
            Rc: 0,
            q: 0,
            s: 0,
            db: 1,
            p: 1,
            o: 1,
            cb: 0,
            R: 0,
            U: 0,
            X: 0,
            eb: 0,
            E: 0,
            wb: 0,
            vb: 0
        };
        j.xd = function(c, d) {
            var a = c || {};
            if (c)
                if (b.Xc(c)) a = {
                    T: a
                };
                else if (b.Xc(c.c)) a.c = {
                T: c.c
            };
            a.T = a.T || d;
            if (a.c) a.c.T = a.c.T || d;
            return a
        };
        j.vd = function(l, m, x, q, z, A, n) {
            var a = m;
            if (l) {
                a = {};
                for (var g in m) {
                    var B = A[g] || 1,
                        w = z[g] || [0, 1],
                        f = (x - w[0]) / w[1];
                    f = c.min(c.max(f, 0), 1);
                    f = f * B;
                    var u = c.floor(f);
                    if (f != u) f -= u;
                    var j = q.T || d.Nc,
                        k, C = l[g],
                        o = m[g];
                    if (b.zd(o)) {
                        j = q[g] || j;
                        var y = j(f);
                        k = C + o * y
                    } else {
                        k = b.V({
                            Kb: {}
                        }, l[g]);
                        var v = q[g] || {};
                        b.f(o.Kb || o, function(d, a) {
                            j = v[a] || v.T || j;
                            var c = j(f),
                                b = d * c;
                            k.Kb[a] = b;
                            k[a] += b
                        })
                    }
                    a[g] = k
                }
                var t = b.f(m, function(b, a) {
                    return N[a] != h
                });
                t && b.f(N, function(c, b) {
                    if (a[b] == h && l[b] !== h) a[b] = l[b]
                });
                if (t) {
                    if (a.db) a.p = a.o = a.db;
                    a.O = n.O;
                    a.Y = n.Y;
                    a.Bd = e
                }
            }
            if (m.c && n.mb) {
                var p = a.c.Kb,
                    s = (p.l || 0) + (p.A || 0),
                    r = (p.j || 0) + (p.z || 0);
                a.j = (a.j || 0) + r;
                a.l = (a.l || 0) + s;
                a.c.j -= r;
                a.c.z -= r;
                a.c.l -= s;
                a.c.A -= s
            }
            if (a.c && b.Wd() && !a.c.l && !a.c.j && !a.c.s && !a.c.q && a.c.z == n.O && a.c.A == n.Y) a.c = i;
            return a
        }
    };

    function m() {
        var a = this,
            d = [];

        function i(a, b) {
            d.push({
                Wb: a,
                Ub: b
            })
        }

        function h(a, c) {
            b.f(d, function(b, e) {
                b.Wb == a && b.Ub === c && d.splice(e, 1)
            })
        }
        a.hb = a.addEventListener = i;
        a.removeEventListener = h;
        a.g = function(a) {
            var c = [].slice.call(arguments, 1);
            b.f(d, function(b) {
                b.Wb == a && b.Ub.apply(f, c)
            })
        }
    }
    var l = function(B, F, h, K, N, M) {
        B = B || 0;
        var a = this,
            q, n, o, u, D = 0,
            H, I, G, E, A = 0,
            j = 0,
            m = 0,
            z, l, d, g, p, y, w = [],
            x;

        function P(a) {
            d += a;
            g += a;
            l += a;
            j += a;
            m += a;
            A += a
        }

        function t(o) {
            var f = o;
            if (p)
                if (!y && (f >= g || f < d) || y && f >= d) f = ((f - d) % p + p) % p + d;
            if (!z || u || j != f) {
                var i = c.min(f, g);
                i = c.max(i, d);
                if (!z || u || i != m) {
                    if (M) {
                        var k = (i - l) / (F || 1);
                        if (h.Fe) k = 1 - k;
                        var n = b.vd(N, M, k, H, G, I, h);
                        if (x) b.f(n, function(b, a) {
                            x[a] && x[a](K, b)
                        });
                        else b.S(K, n)
                    }
                    a.Tb(m - l, i - l);
                    var r = m,
                        q = m = i;
                    b.f(w, function(b, c) {
                        var a = !z && y || f <= j ? w[w.length - c - 1] : b;
                        a.K(m - A)
                    });
                    j = f;
                    z = e;
                    a.Jb(r, q)
                }
            }
        }

        function C(a, b, e) {
            b && a.Rb(g);
            if (!e) {
                d = c.min(d, a.Oc() + A);
                g = c.max(g, a.Sb() + A)
            }
            w.push(a)
        }
        var r = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.msRequestAnimationFrame;
        if (b.te() && b.ld() < 7) r = i;
        r = r || function(a) {
            b.Vc(a, h.rc)
        };

        function J() {
            if (q) {
                var d = b.N(),
                    e = c.min(d - D, h.tc),
                    a = j + e * o;
                D = d;
                if (a * o >= n * o) a = n;
                t(a);
                if (!u && a * o >= n * o) L(E);
                else r(J)
            }
        }

        function s(f, h, i) {
            if (!q) {
                q = e;
                u = i;
                E = h;
                f = c.max(f, d);
                f = c.min(f, g);
                n = f;
                o = n < j ? -1 : 1;
                a.Cc();
                D = b.N();
                r(J)
            }
        }

        function L(b) {
            if (q) {
                u = q = E = k;
                a.wc();
                b && b()
            }
        }
        a.xc = function(a, b, c) {
            s(a ? j + a : g, b, c)
        };
        a.Bc = s;
        a.Z = L;
        a.re = function(a) {
            s(a)
        };
        a.I = function() {
            return j
        };
        a.bd = function() {
            return n
        };
        a.lb = function() {
            return m
        };
        a.K = t;
        a.mb = function(a) {
            t(j + a)
        };
        a.Kc = function() {
            return q
        };
        a.Ce = function(a) {
            p = a
        };
        a.Rb = P;
        a.Gc = function(a, b) {
            C(a, 0, b)
        };
        a.Ob = function(a) {
            C(a, 1)
        };
        a.Oc = function() {
            return d
        };
        a.Sb = function() {
            return g
        };
        a.Jb = a.Cc = a.wc = a.Tb = b.Lc;
        a.Xb = b.N();
        h = b.V({
            rc: 16,
            tc: 50
        }, h);
        p = h.Vb;
        y = h.Hd;
        x = h.Id;
        d = l = B;
        g = B + F;
        I = h.Md || {};
        G = h.pd || {};
        H = b.xd(h.ub)
    };
    new(function() {});
    var j = function(q, fc) {
        var o = this;

        function Bc() {
            var a = this;
            l.call(a, -1e8, 2e8);
            a.oe = function() {
                var b = a.lb(),
                    d = c.floor(b),
                    f = t(d),
                    e = b - c.floor(b);
                return {
                    ab: f,
                    ne: d,
                    pb: e
                }
            };
            a.Jb = function(b, a) {
                var d = c.floor(a);
                if (d != a && a > b) d++;
                Tb(d, e);
                o.g(j.ke, t(a), t(b), a, b)
            }
        }

        function Ac() {
            var a = this;
            l.call(a, 0, 0, {
                Vb: r
            });
            b.f(A, function(b) {
                D & 1 && b.Ce(r);
                a.Ob(b);
                b.Rb(kb / bc)
            })
        }

        function zc() {
            var a = this,
                b = Ub.W;
            l.call(a, -1, 2, {
                ub: d.Nc,
                Id: {
                    pb: Zb
                },
                Vb: r
            }, b, {
                pb: 1
            }, {
                pb: -2
            });
            a.Qb = b
        }

        function mc(n, m) {
            var b = this,
                d, f, g, h, c;
            l.call(b, -1e8, 2e8, {
                tc: 100
            });
            b.Cc = function() {
                O = e;
                R = i;
                o.g(j.je, t(w.I()), w.I())
            };
            b.wc = function() {
                O = k;
                h = k;
                var a = w.oe();
                o.g(j.ge, t(w.I()), w.I());
                !a.pb && Dc(a.ne, s)
            };
            b.Jb = function(j, i) {
                var b;
                if (h) b = c;
                else {
                    b = f;
                    if (g) {
                        var e = i / g;
                        b = a.ad(e) * (f - d) + d
                    }
                }
                w.K(b)
            };
            b.zb = function(a, e, c, h) {
                d = a;
                f = e;
                g = c;
                w.K(a);
                b.K(0);
                b.Bc(c, h)
            };
            b.Qe = function(a) {
                h = e;
                c = a;
                b.xc(a, i, e)
            };
            b.Pe = function(a) {
                c = a
            };
            w = new Bc;
            w.Gc(n);
            w.Gc(m)
        }

        function oc() {
            var c = this,
                a = Xb();
            b.v(a, 0);
            b.D(a, "pointerEvents", "none");
            c.W = a;
            c.yb = function() {
                b.L(a);
                b.Pb(a)
            }
        }

        function xc(p, f) {
            var d = this,
                v, Q, w, n, C = [],
                y, F, Y, M, W, E, N, g, x, q;
            l.call(d, -u, u + 1, {});

            function G(a) {
                v && v.ed();
                X(p, a, 0);
                E = e;
                v = new J.J(p, J, b.Qd(b.i(p, "idle")) || lc, !I);
                v.K(0)
            }

            function bb() {
                v.Xb < J.Xb && G()
            }

            function S(p, r, m) {
                if (!M) {
                    M = e;
                    if (n && m) {
                        var g = m.width,
                            c = m.height,
                            l = g,
                            i = c;
                        if (g && c && a.nb) {
                            if (a.nb & 3 && (!(a.nb & 4) || g > L || c > K)) {
                                var h = k,
                                    q = L / K * c / g;
                                if (a.nb & 1) h = q > 1;
                                else if (a.nb & 2) h = q < 1;
                                l = h ? g * K / c : L;
                                i = h ? K : c * L / g
                            }
                            b.k(n, l);
                            b.m(n, i);
                            b.G(n, (K - i) / 2);
                            b.H(n, (L - l) / 2)
                        }
                        b.B(n, "absolute");
                        o.g(j.Ke, f)
                    }
                }
                b.L(r);
                p && p(d)
            }

            function ab(b, c, e, g) {
                if (g == R && s == f && I)
                    if (!Cc) {
                        var a = t(b);
                        B.qe(a, f, c, d, e);
                        c.Je();
                        U.Rb(a - U.Oc() - 1);
                        U.K(a);
                        z.zb(b, b, 0)
                    }
            }

            function eb(b) {
                if (b == R && s == f) {
                    if (!g) {
                        var a = i;
                        if (B)
                            if (B.ab == f) a = B.ve();
                            else B.yb();
                        bb();
                        g = new vc(p, f, a, v);
                        g.id(q)
                    }!g.Kc() && g.fc()
                }
            }

            function H(e, h, l) {
                if (e == f) {
                    if (e != h) A[h] && A[h].md();
                    else !l && g && g.He();
                    q && q.Hb();
                    var m = R = b.N();
                    d.tb(b.F(i, eb, m))
                } else {
                    var k = c.min(f, e),
                        j = c.max(f, e),
                        o = c.min(j - k, k + r - j),
                        n = u + a.Ge - 1;
                    (!W || o <= n) && d.tb()
                }
            }

            function fb() {
                if (s == f && g) {
                    g.Z();
                    q && q.Ee();
                    q && q.De();
                    g.uc()
                }
            }

            function hb() {
                s == f && g && g.Z()
            }

            function db(a) {
                !P && o.g(j.yd, f, a)
            }

            function T() {
                q = x.pInstance;
                g && g.id(q)
            }
            d.tb = function(c, a) {
                a = a || w;
                if (C.length && !M) {
                    b.Q(a);
                    if (!Y) {
                        Y = e;
                        o.g(j.Ie, f);
                        b.f(C, function(a) {
                            if (!b.n(a, "src")) {
                                a.src = b.i(a, "src2") || "";
                                b.P(a, a["display-origin"])
                            }
                        })
                    }
                    b.Rd(C, n, b.F(i, S, c, a))
                } else S(c, a)
            };
            d.Ne = function() {
                var j = f;
                if (a.fd < 0) j -= r;
                var e = j + a.fd * tc;
                if (D & 2) e = t(e);
                if (!(D & 1) && !ib) e = c.max(0, c.min(e, r - u));
                if (e != f) {
                    if (B) {
                        var g = B.me(r);
                        if (g) {
                            var k = R = b.N(),
                                h = A[t(e)];
                            return h.tb(b.F(i, ab, e, h, g, k), w)
                        }
                    }
                    cb(e)
                } else if (a.fb) {
                    d.md();
                    H(f, f)
                }
            };
            d.kc = function() {
                H(f, f, e)
            };
            d.md = function() {
                q && q.Ee();
                q && q.De();
                d.dd();
                g && g.ue();
                g = i;
                G()
            };
            d.Je = function() {
                b.L(p)
            };
            d.dd = function() {
                b.Q(p)
            };
            d.we = function() {
                q && q.Hb()
            };

            function X(a, f, c, d) {
                if (b.n(a, "jssor-slider")) return;
                if (!E) {
                    if (a.tagName == "IMG") {
                        C.push(a);
                        if (!b.n(a, "src")) {
                            W = e;
                            a["display-origin"] = b.P(a);
                            b.L(a)
                        }
                    }
                    var g = b.ae(a);
                    if (g) {
                        var i = new Image;
                        b.i(i, "src2", g);
                        C.push(i)
                    }
                    if (c) {
                        b.v(a, (b.v(a) || 0) + 1);
                        b.gc(a, b.gc(a) || 0);
                        b.ac(a, b.ac(a) || 0);
                        b.kb(a, {
                            E: 0
                        })
                    }
                    d = d || a.style.pointerEvents || b.dc(a)
                }
                var j = b.Eb(a);
                b.f(j, function(g) {
                    var i = g.tagName,
                        j = b.i(g, "u");
                    if (j == "player" && !x) {
                        x = g;
                        if (x.pInstance) T();
                        else b.a(x, "dataavailable", T)
                    }
                    if (j == "caption") {
                        if (f) {
                            b.Ec(g, b.i(g, "to"));
                            b.ce(g, b.i(g, "bf"));
                            N && b.i(g, "3d") && b.le(g, "preserve-3d")
                        } else if (!b.nd()) {
                            var h = b.rb(g, k, e);
                            b.Gb(h, g, a);
                            b.Cb(g, a);
                            g = h;
                            f = e
                        }
                    } else if (!E && !c && !n) {
                        if (i == "A") {
                            if (b.i(g, "u") == "image") n = b.Be(g, "IMG");
                            else n = b.u(g, "image", e);
                            if (n) {
                                y = g;
                                b.P(y, "block");
                                b.S(y, V);
                                F = b.rb(y, e);
                                b.B(y, "relative");
                                b.Zb(F, 0);
                                b.D(F, "backgroundColor", "#000")
                            }
                        } else if (i == "IMG" && b.i(g, "u") == "image") n = g;
                        if (n) {
                            n.border = 0;
                            b.S(n, V)
                        }
                    }
                    X(g, f, c + 1, d)
                });
                if (!E && c) !d && b.D(a, "pointerEvents", a.tagName == "A" ? "all" : c > 1 ? h : "none")
            }
            d.Tb = function(c, b) {
                var a = u - b;
                Zb(Q, a)
            };
            d.ab = f;
            m.call(d);
            N = b.i(p, "p");
            b.xe(p, N);
            b.ye(p, b.i(p, "po"));
            var O = b.u(p, "thumb", e);
            if (O) {
                b.rb(O);
                b.L(O)
            }
            b.Q(p);
            w = b.rb(gb);
            b.v(w, 1e3);
            b.a(p, "click", db);
            G(e);
            d.se = n;
            d.Wc = F;
            d.Qb = Q = p;
            b.M(Q, w);
            o.hb(203, H);
            o.hb(28, hb);
            o.hb(24, fb)
        }

        function vc(y, f, p, q) {
            var a = this,
                m = 0,
                u = 0,
                g, h, d, c, i, t, r, n = A[f];
            l.call(a, 0, 0);

            function v() {
                b.Pb(N);
                cc && i && n.Wc && b.M(N, n.Wc);
                b.Q(N, !i && n.se)
            }

            function w() {
                a.fc()
            }

            function x(b) {
                r = b;
                a.Z();
                a.fc()
            }
            a.fc = function() {
                var b = a.lb();
                if (!C && !O && !r && s == f) {
                    if (!b) {
                        if (g && !i) {
                            i = e;
                            a.uc(e);
                            o.g(j.ie, f, m, u, g, c)
                        }
                        v()
                    }
                    var k, p = j.sc;
                    if (b != c)
                        if (b == d) k = c;
                        else if (b == h) k = d;
                    else if (!b) k = h;
                    else k = a.bd();
                    o.g(p, f, b, m, h, d, c);
                    var l = I && (!E || F);
                    if (b == c)(d != c && !(E & 12) || l) && n.Ne();
                    else(l || b != d) && a.Bc(k, w)
                }
            };
            a.He = function() {
                d == c && d == a.lb() && a.K(h)
            };
            a.ue = function() {
                B && B.ab == f && B.yb();
                var b = a.lb();
                b < c && o.g(j.sc, f, -b - 1, m, h, d, c)
            };
            a.uc = function(a) {
                p && b.Db(lb, a && p.Zc.Ye ? "" : "hidden")
            };
            a.Tb = function(b, a) {
                if (i && a >= g) {
                    i = k;
                    v();
                    n.dd();
                    B.yb();
                    o.g(j.he, f, m, u, g, c)
                }
                o.g(j.fe, f, a, m, h, d, c)
            };
            a.id = function(a) {
                if (a && !t) {
                    t = a;
                    a.hb($JssorPlayer$.Ad, x)
                }
            };
            p && a.Ob(p);
            g = a.Sb();
            a.Ob(q);
            h = g + q.Dc;
            c = a.Sb();
            d = I ? g + q.Uc : c
        }

        function Kb(a, c, d) {
            b.H(a, c);
            b.G(a, d)
        }

        function Zb(c, b) {
            var a = x > 0 ? x : fb,
                d = zb * b * (a & 1),
                e = Ab * b * (a >> 1 & 1);
            Kb(c, d, e)
        }

        function Pb() {
            qb = O;
            Ib = z.bd();
            G = w.I()
        }

        function gc() {
            Pb();
            if (C || !F && E & 12) {
                z.Z();
                o.g(j.ee)
            }
        }

        function ec(f) {
            if (!C && (F || !(E & 12)) && !z.Kc()) {
                var d = w.I(),
                    b = c.ceil(G);
                if (f && c.abs(H) >= a.Fc) {
                    b = c.ceil(d);
                    b += jb
                }
                if (!(D & 1)) b = c.min(r - u, c.max(b, 0));
                var e = c.abs(b - d);
                e = 1 - c.pow(1 - e, 5);
                if (!P && qb) z.re(Ib);
                else if (d == b) {
                    tb.we();
                    tb.kc()
                } else z.zb(d, b, e * Vb)
            }
        }

        function Hb(a) {
            !b.i(b.ec(a), "nodrag") && b.xb(a)
        }

        function rc(a) {
            Yb(a, 1)
        }

        function Yb(a, c) {
            a = b.Ac(a);
            var h = b.ec(a);
            if (!M && !b.i(h, "nodrag") && sc() && (!c || a.touches.length == 1)) {
                C = e;
                yb = k;
                R = i;
                b.a(g, c ? "touchmove" : "mousemove", Bb);
                b.N();
                P = 0;
                gc();
                if (!qb) x = 0;
                if (c) {
                    var f = a.touches[0];
                    ub = f.clientX;
                    vb = f.clientY
                } else {
                    var d = b.vc(a);
                    ub = d.x;
                    vb = d.y
                }
                H = 0;
                hb = 0;
                jb = 0;
                o.g(j.de, t(G), G, a)
            }
        }

        function Bb(d) {
            if (C) {
                d = b.Ac(d);
                var f;
                if (d.type != "mousemove") {
                    var l = d.touches[0];
                    f = {
                        x: l.clientX,
                        y: l.clientY
                    }
                } else f = b.vc(d);
                if (f) {
                    var j = f.x - ub,
                        k = f.y - vb;
                    if (c.floor(G) != G) x = x || fb & M;
                    if ((j || k) && !x) {
                        if (M == 3)
                            if (c.abs(k) > c.abs(j)) x = 2;
                            else x = 1;
                        else x = M;
                        if (ob && x == 1 && c.abs(k) - c.abs(j) > 3) yb = e
                    }
                    if (x) {
                        var a = k,
                            i = Ab;
                        if (x == 1) {
                            a = j;
                            i = zb
                        }
                        if (!(D & 1)) {
                            if (a > 0) {
                                var g = i * s,
                                    h = a - g;
                                if (h > 0) a = g + c.sqrt(h) * 5
                            }
                            if (a < 0) {
                                var g = i * (r - u - s),
                                    h = -a - g;
                                if (h > 0) a = -g - c.sqrt(h) * 5
                            }
                        }
                        if (H - hb < -2) jb = 0;
                        else if (H - hb > 2) jb = -1;
                        hb = H;
                        H = a;
                        sb = G - H / i / (Y || 1);
                        if (H && x && !yb) {
                            b.xb(d);
                            if (!O) z.Qe(sb);
                            else z.Pe(sb)
                        }
                    }
                }
            }
        }

        function bb() {
            qc();
            if (C) {
                C = k;
                b.N();
                b.C(g, "mousemove", Bb);
                b.C(g, "touchmove", Bb);
                P = H;
                z.Z();
                var a = w.I();
                o.g(j.Se, t(a), a, t(G), G);
                E & 12 && Pb();
                ec(e)
            }
        }

        function jc(c) {
            if (P) {
                b.Me(c);
                var a = b.ec(c);
                while (a && v !== a) {
                    a.tagName == "A" && b.xb(c);
                    try {
                        a = a.parentNode
                    } catch (d) {
                        break
                    }
                }
            }
        }

        function Jb(a) {
            A[s];
            s = t(a);
            tb = A[s];
            Tb(a);
            return s
        }

        function Dc(a, b) {
            x = 0;
            Jb(a);
            o.g(j.Oe, t(a), b)
        }

        function Tb(a, c) {
            wb = a;
            b.f(S, function(b) {
                b.mc(t(a), a, c)
            })
        }

        function sc() {
            var b = j.Qc || 0,
                a = X;
            if (ob) a & 1 && (a &= 1);
            j.Qc |= a;
            return M = a & ~b
        }

        function qc() {
            if (M) {
                j.Qc &= ~X;
                M = 0
            }
        }

        function Xb() {
            var a = b.Ib();
            b.S(a, V);
            b.B(a, "absolute");
            return a
        }

        function t(a) {
            return (a % r + r) % r
        }

        function kc(b, d) {
            if (d)
                if (!D) {
                    b = c.min(c.max(b + wb, 0), r - u);
                    d = k
                } else if (D & 2) {
                b = t(b + wb);
                d = k
            }
            cb(b, a.Ab, d)
        }

        function xb() {
            b.f(S, function(a) {
                a.oc(a.Bb.Ze <= F)
            })
        }

        function hc() {
            if (!F) {
                F = 1;
                xb();
                if (!C) {
                    E & 12 && ec();
                    E & 3 && A[s] && A[s].kc()
                }
            }
        }

        function Ec() {
            if (F) {
                F = 0;
                xb();
                C || !(E & 12) || gc()
            }
        }

        function ic() {
            V = {
                Mb: L,
                Lb: K,
                l: 0,
                j: 0
            };
            b.f(T, function(a) {
                b.S(a, V);
                b.B(a, "absolute");
                b.Db(a, "hidden");
                b.L(a)
            });
            b.S(gb, V)
        }

        function ab(b, a) {
            cb(b, a, e)
        }

        function cb(g, f, l) {
            if (Rb && (!C && (F || !(E & 12)) || a.Mc)) {
                O = e;
                C = k;
                z.Z();
                if (f == h) f = Vb;
                var d = Cb.lb(),
                    b = g;
                if (l) {
                    b = d + g;
                    if (g > 0) b = c.ceil(b);
                    else b = c.floor(b)
                }
                if (D & 2) b = t(b);
                if (!(D & 1)) b = c.max(0, c.min(b, r - u));
                var j = (b - d) % r;
                b = d + j;
                var i = d == b ? 0 : f * c.abs(j);
                i = c.min(i, f * u * 1.5);
                z.zb(d, b, i || 1)
            }
        }
        o.xc = function() {
            if (!I) {
                I = e;
                A[s] && A[s].kc()
            }
        };

        function W() {
            return b.k(y || q)
        }

        function nb() {
            return b.m(y || q)
        }
        o.O = W;
        o.Y = nb;

        function Eb(c, d) {
            if (c == h) return b.k(q);
            if (!y) {
                var a = b.Ib(g);
                b.dc(a, b.dc(q));
                b.Fb(a, b.Fb(q));
                b.P(a, "block");
                b.B(a, "relative");
                b.G(a, 0);
                b.H(a, 0);
                b.Db(a, "visible");
                y = b.Ib(g);
                b.B(y, "absolute");
                b.G(y, 0);
                b.H(y, 0);
                b.k(y, b.k(q));
                b.m(y, b.m(q));
                b.Ec(y, "0 0");
                b.M(y, a);
                var i = b.Eb(q);
                b.M(q, y);
                b.D(q, "backgroundImage", "");
                b.f(i, function(c) {
                    b.M(b.i(c, "noscale") ? q : a, c);
                    b.i(c, "autocenter") && Lb.push(c)
                })
            }
            Y = c / (d ? b.m : b.k)(y);
            b.ze(y, Y);
            var f = d ? Y * W() : c,
                e = d ? c : Y * nb();
            b.k(q, f);
            b.m(q, e);
            b.f(Lb, function(a) {
                var c = b.Yd(b.i(a, "autocenter"));
                b.Kd(a, c)
            })
        }
        o.Fd = Eb;
        m.call(o);
        o.W = q = b.jb(q);
        var a = b.V({
            nb: 0,
            Ge: 1,
            hc: 1,
            qc: 0,
            ic: k,
            fb: 1,
            sb: e,
            Mc: e,
            fd: 1,
            gd: 3e3,
            cd: 1,
            Ab: 500,
            ad: d.Nd,
            Fc: 20,
            jd: 0,
            ib: 1,
            Yc: 0,
            rd: 1,
            nc: 1,
            kd: 1
        }, fc);
        a.sb = a.sb && b.pe();
        if (a.td != h) a.gd = a.td;
        if (a.sd != h) a.Yc = a.sd;
        var fb = a.nc & 3,
            tc = (a.nc & 4) / -4 || 1,
            mb = a.bf,
            J = b.V({
                J: p,
                sb: a.sb
            }, a.af);
        J.Nb = J.Nb || J.We;
        var Fb = a.qd,
            Z = a.od,
            eb = a.Ve,
            Q = !a.rd,
            y, v = b.u(q, "slides", Q),
            gb = b.u(q, "loading", Q) || b.Ib(g),
            Nb = b.u(q, "navigator", Q),
            dc = b.u(q, "arrowleft", Q),
            ac = b.u(q, "arrowright", Q),
            Mb = b.u(q, "thumbnavigator", Q),
            pc = b.k(v),
            nc = b.m(v),
            V, T = [],
            uc = b.Eb(v);
        b.f(uc, function(a) {
            a.tagName == "DIV" && !b.i(a, "u") && T.push(a);
            b.v(a, (b.v(a) || 0) + 1)
        });
        var s = -1,
            wb, tb, r = T.length,
            L = a.Ed || pc,
            K = a.Od || nc,
            Wb = a.jd,
            zb = L + Wb,
            Ab = K + Wb,
            bc = fb & 1 ? zb : Ab,
            u = c.min(a.ib, r),
            lb, x, M, yb, S = [],
            Qb, Sb, Ob, cc, Cc, I, E = a.cd,
            lc = a.gd,
            Vb = a.Ab,
            rb, ib, kb, Rb = u < r,
            D = Rb ? a.fb : 0,
            X, P, F = 1,
            O, C, R, ub = 0,
            vb = 0,
            H, hb, jb, Cb, w, U, z, Ub = new oc,
            Y, Lb = [];
        if (r) {
            if (a.sb) Kb = function(a, c, d) {
                b.kb(a, {
                    X: c,
                    eb: d
                })
            };
            I = a.ic;
            o.Bb = fc;
            ic();
            b.n(q, "jssor-slider", e);
            b.v(v, b.v(v) || 0);
            b.B(v, "absolute");
            lb = b.rb(v, e);
            b.Gb(lb, v);
            if (mb) {
                cc = mb.Xe;
                rb = mb.J;
                ib = u == 1 && r > 1 && rb && (!b.nd() || b.ld() >= 8)
            }
            kb = ib || u >= r || !(D & 1) ? 0 : a.Yc;
            X = (u > 1 || kb ? fb : -1) & a.kd;
            var Gb = v,
                A = [],
                B, N, Db = b.Te(),
                ob = Db.Ue,
                G, qb, Ib, sb;
            Db.hd && b.D(Gb, Db.hd, ([i, "pan-y", "pan-x", "none"])[X] || "");
            U = new zc;
            if (ib) B = new rb(Ub, L, K, mb, ob);
            b.M(lb, U.Qb);
            b.Db(v, "hidden");
            N = Xb();
            b.D(N, "backgroundColor", "#000");
            b.Zb(N, 0);
            b.Gb(N, Gb.firstChild, Gb);
            for (var db = 0; db < T.length; db++) {
                var wc = T[db],
                    yc = new xc(wc, db);
                A.push(yc)
            }
            b.L(gb);
            Cb = new Ac;
            z = new mc(Cb, U);
            b.a(v, "click", jc, e);
            b.a(q, "mouseout", b.bc(hc, q));
            b.a(q, "mouseover", b.bc(Ec, q));
            if (X) {
                b.a(v, "mousedown", Yb);
                b.a(v, "touchstart", rc);
                b.a(v, "dragstart", Hb);
                b.a(v, "selectstart", Hb);
                b.a(g, "mouseup", bb);
                b.a(g, "touchend", bb);
                b.a(g, "touchcancel", bb);
                b.a(f, "blur", bb)
            }
            E &= ob ? 10 : 5;
            if (Nb && Fb) {
                Qb = new Fb.J(Nb, Fb, W(), nb());
                S.push(Qb)
            }
            if (Z && dc && ac) {
                Z.fb = D;
                Z.ib = u;
                Sb = new Z.J(dc, ac, Z, W(), nb());
                S.push(Sb)
            }
            if (Mb && eb) {
                eb.qc = a.qc;
                Ob = new eb.J(Mb, eb);
                S.push(Ob)
            }
            b.f(S, function(a) {
                a.jc(r, A, gb);
                a.hb(n.pc, kc)
            });
            b.D(q, "visibility", "visible");
            Eb(W());
            xb();
            a.hc && b.a(g, "keydown", function(b) {
                if (b.keyCode == 37) ab(-a.hc);
                else b.keyCode == 39 && ab(a.hc)
            });
            var pb = a.qc;
            if (!(D & 1)) pb = c.max(0, c.min(pb, r - u));
            z.zb(pb, pb, 0)
        }
    };
    j.yd = 21;
    j.de = 22;
    j.Se = 23;
    j.je = 24;
    j.ge = 25;
    j.Ie = 26;
    j.Ke = 27;
    j.ee = 28;
    j.ke = 202;
    j.Oe = 203;
    j.ie = 206;
    j.he = 207;
    j.fe = 208;
    j.sc = 209;
    var n = {
            pc: 1
        },
        q = function(d, C) {
            var f = this;
            m.call(f);
            d = b.jb(d);
            var s, A, z, r, l = 0,
                a, o, j, w, x, h, g, q, p, B = [],
                y = [];

            function v(a) {
                a != -1 && y[a].Ud(a == l)
            }

            function t(a) {
                f.g(n.pc, a * o)
            }
            f.W = d;
            f.mc = function(a) {
                if (a != r) {
                    var d = l,
                        b = c.floor(a / o);
                    l = b;
                    r = a;
                    v(d);
                    v(b)
                }
            };
            f.oc = function(a) {
                b.Q(d, a)
            };
            var u;
            f.jc = function(D) {
                if (!u) {
                    s = c.ceil(D / o);
                    l = 0;
                    var n = q + w,
                        r = p + x,
                        m = c.ceil(s / j) - 1;
                    A = q + n * (!h ? m : j - 1);
                    z = p + r * (h ? m : j - 1);
                    b.k(d, A);
                    b.m(d, z);
                    for (var f = 0; f < s; f++) {
                        var C = b.wd();
                        b.Le(C, f + 1);
                        var k = b.Td(g, "numbertemplate", C, e);
                        b.B(k, "absolute");
                        var v = f % (m + 1);
                        b.H(k, !h ? n * v : f % j * n);
                        b.G(k, h ? r * v : c.floor(f / (m + 1)) * r);
                        b.M(d, k);
                        B[f] = k;
                        a.lc & 1 && b.a(k, "click", b.F(i, t, f));
                        a.lc & 2 && b.a(k, "mouseover", b.bc(b.F(i, t, f), k));
                        y[f] = b.cc(k)
                    }
                    u = e
                }
            };
            f.Bb = a = b.V({
                Jc: 10,
                Hc: 10,
                zc: 1,
                lc: 1
            }, C);
            g = b.u(d, "prototype");
            q = b.k(g);
            p = b.m(g);
            b.Cb(g, d);
            o = a.Ic || 1;
            j = a.Xd || 1;
            w = a.Jc;
            x = a.Hc;
            h = a.zc - 1;
            a.Yb == k && b.n(d, "noscale", e);
            a.gb && b.n(d, "autocenter", a.gb)
        },
        r = function(a, g, h) {
            var c = this;
            m.call(c);
            var r, d, f, j;
            b.k(a);
            b.m(a);
            var p, o;

            function l(a) {
                c.g(n.pc, a, e)
            }

            function t(c) {
                b.Q(a, c);
                b.Q(g, c)
            }

            function s() {
                p.Hb(h.fb || d > 0);
                o.Hb(h.fb || d < r - h.ib)
            }
            c.mc = function(b, a, c) {
                if (c) d = a;
                else {
                    d = b;
                    s()
                }
            };
            c.oc = t;
            var q;
            c.jc = function(c) {
                r = c;
                d = 0;
                if (!q) {
                    b.a(a, "click", b.F(i, l, -j));
                    b.a(g, "click", b.F(i, l, j));
                    p = b.cc(a);
                    o = b.cc(g);
                    q = e
                }
            };
            c.Bb = f = b.V({
                Ic: 1
            }, h);
            j = f.Ic;
            if (f.Yb == k) {
                b.n(a, "noscale", e);
                b.n(g, "noscale", e)
            }
            if (f.gb) {
                b.n(a, "autocenter", f.gb);
                b.n(g, "autocenter", f.gb)
            }
        };

    function p(e, d, c) {
        var a = this;
        l.call(a, 0, c);
        a.ed = b.Lc;
        a.Dc = 0;
        a.Uc = c
    }
    jssor_1_slider_init = function() {
        var h = {
                ic: e,
                Ab: 800,
                ad: d.Ld,
                od: {
                    J: r
                },
                qd: {
                    J: q
                }
            },
            g = new j("jssor_1", h);

        function a() {
            var b = g.W.parentNode.clientWidth;
            if (b) {
                b = c.min(b, 1920);
                g.Fd(b)
            } else f.setTimeout(a, 30)
        }
        a();
        b.a(f, "load", a);
        b.a(f, "resize", a);
        b.a(f, "orientationchange", a)
    }
})(window, document, Math, null, true, false)
