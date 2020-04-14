// Copyright Google Inc. All Rights Reserved.
(function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    'use strict';
    var k, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        n = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ba = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ca = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var fa = {
                    bl: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.bl;
                break a
            } catch (a) {}
            ea = !1
        }
        da = ea ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ia = da,
        q = function(a, b) {
            a.prototype = ca(b.prototype);
            a.prototype.constructor = a;
            if (ia) ia(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.lf = b.prototype
        },
        ja = ja || {},
        r = this || self,
        ka = function() {},
        la = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ma = function(a) {
            return "array" == la(a)
        },
        na = function(a) {
            var b = la(a);
            return "array" == b || "object" ==
                b && "number" == typeof a.length
        },
        oa = function(a) {
            return "function" == la(a)
        },
        pa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        qa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ra = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        sa = function(a, b, c) {
            sa = Function.prototype.bind &&
                -1 != Function.prototype.bind.toString().indexOf("native code") ? qa : ra;
            return sa.apply(null, arguments)
        },
        t = Date.now || function() {
            return +new Date
        },
        x = function(a, b) {
            a = a.split(".");
            var c = r;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
        },
        ta = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.lf = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
    var cast = r.cast || {};
    var ua = function() {
            return !(!cast.__platform__ || !cast.__platform__.metrics)
        },
        va = function(a, b) {
            ua() && cast.__platform__.metrics.logBoolToUma(a, b)
        },
        wa = function(a) {
            ua() && cast.__platform__.metrics.logEventToUma(a)
        },
        y = function(a, b) {
            ua() && cast.__platform__.metrics.logIntToUma(a, b)
        };
    var xa = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, xa);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    ta(xa, Error);
    xa.prototype.name = "CustomError";
    var ya = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        xa.call(this, c + a[d])
    };
    ta(ya, xa);
    ya.prototype.name = "AssertionError";
    var za = function(a, b) {
        throw new ya("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var Aa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ba = Array.prototype.lastIndexOf ? function(a, b) {
            return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
        } : function(a, b) {
            var c = a.length - 1;
            0 > c && (c = Math.max(0, a.length + c));
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
            for (; 0 <= c; c--)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ca = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Da = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Fa = function(a) {
            a: {
                var b = Ea;
                for (var c =
                        a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        },
        Ga = function(a, b) {
            b = Aa(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        },
        Ha = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        Ia = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
    var Ka = function(a, b) {
            return 0 == Ja(b, a.substr(0, b.length))
        },
        La = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ja = function(a, b) {
            a = String(a).toLowerCase();
            b = String(b).toLowerCase();
            return a < b ? -1 : a == b ? 0 : 1
        },
        Ma = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Na;
    a: {
        var Oa = r.navigator;
        if (Oa) {
            var Pa = Oa.userAgent;
            if (Pa) {
                Na = Pa;
                break a
            }
        }
        Na = ""
    }
    var Qa = function(a) {
        return -1 != Na.indexOf(a)
    };
    var Ra = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        Sa = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Ta = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        Ua = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        Va = function(a) {
            var b = la(a);
            if ("object" == b || "array" == b) {
                if (oa(a.clone)) return a.clone();
                b = "array" == b ? [] : {};
                for (var c in a) b[c] = Va(a[c]);
                return b
            }
            return a
        },
        Wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Xa = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Wa.length; f++) c = Wa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var $a = function(a, b) {
        this.Mk = a === Ya && b || "";
        this.Zk = Za
    };
    $a.prototype.toString = function() {
        return "Const{" + this.Mk + "}"
    };
    var Za = {},
        Ya = {},
        ab = new $a(Ya, "");
    var bb = function() {
        this.tk = ""
    };
    bb.prototype.toString = function() {
        return "SafeScript{" + this.tk + "}"
    };
    bb.prototype.zb = function(a) {
        this.tk = a;
        return this
    };
    (new bb).zb("");
    var eb = function(a, b) {
        this.vk = a === cb && b || "";
        this.$k = db
    };
    eb.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.vk + "}"
    };
    var db = {},
        cb = {};
    var gb = function() {
            this.pi = "";
            this.Yk = fb
        },
        fb = {};
    gb.prototype.toString = function() {
        return "SafeStyle{" + this.pi + "}"
    };
    var hb = function(a) {
        if (a instanceof gb && a.constructor === gb && a.Yk === fb) return a.pi;
        za("expected object of type SafeStyle, got '" + a + "' of type " + la(a));
        return "type_error:SafeStyle"
    };
    gb.prototype.zb = function(a) {
        this.pi = a;
        return this
    };
    var ib = (new gb).zb("");
    var jb = function() {
        this.uk = ""
    };
    jb.prototype.toString = function() {
        return "SafeStyleSheet{" + this.uk + "}"
    };
    jb.prototype.zb = function(a) {
        this.uk = a;
        return this
    };
    (new jb).zb("");
    var lb = function() {
        this.oi = "";
        this.Xk = kb
    };
    lb.prototype.toString = function() {
        return "SafeHtml{" + this.oi + "}"
    };
    var nb = function() {
            var a = mb;
            if (a instanceof lb && a.constructor === lb && a.Xk === kb) return a.oi;
            za("expected object of type SafeHtml, got '" + a + "' of type " + la(a));
            return "type_error:SafeHtml"
        },
        kb = {};
    lb.prototype.zb = function(a) {
        this.oi = a;
        return this
    };
    (new lb).zb("<!DOCTYPE html>");
    var mb = (new lb).zb("");
    (new lb).zb("<br>");
    var ob = function(a) {
        if (ab instanceof $a && ab.constructor === $a && ab.Zk === Za) var b = ab.Mk;
        else za("expected object of type Const, got '" + ab + "'"), b = "type_error:Const";
        b = new eb(cb, b);
        a: {
            try {
                var c = a && a.ownerDocument,
                    d = c && (c.defaultView || c.parentWindow);
                d = d || r;
                if (d.Element && d.Location) {
                    var e = d;
                    break a
                }
            } catch (g) {}
            e = null
        }
        if (e && "undefined" != typeof e.HTMLIFrameElement && (!a || !(a instanceof e.HTMLIFrameElement) && (a instanceof e.Location || a instanceof e.Element))) {
            if (pa(a)) try {
                var f = a.constructor.displayName || a.constructor.name ||
                    Object.prototype.toString.call(a)
            } catch (g) {
                f = "<object could not be stringified>"
            } else f = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
            za("Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLIFrameElement", f)
        }
        b instanceof eb && b.constructor === eb && b.$k === db ? e = b.vk : (za("expected object of type TrustedResourceUrl, got '" + b + "' of type " + la(b)), e = "type_error:TrustedResourceUrl");
        a.src = e.toString()
    };
    var pb = function(a) {
        pb[" "](a);
        return a
    };
    pb[" "] = ka;
    var rb = function(a, b) {
        var c = qb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var sb = Qa("Opera"),
        tb = Qa("Trident") || Qa("MSIE"),
        ub = Qa("Edge"),
        vb = Qa("Gecko") && !(-1 != Na.toLowerCase().indexOf("webkit") && !Qa("Edge")) && !(Qa("Trident") || Qa("MSIE")) && !Qa("Edge"),
        wb = -1 != Na.toLowerCase().indexOf("webkit") && !Qa("Edge"),
        xb = function() {
            var a = r.document;
            return a ? a.documentMode : void 0
        },
        yb;
    a: {
        var zb = "",
            Ab = function() {
                var a = Na;
                if (vb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (ub) return /Edge\/([\d\.]+)/.exec(a);
                if (tb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (wb) return /WebKit\/(\S+)/.exec(a);
                if (sb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        Ab && (zb = Ab ? Ab[1] : "");
        if (tb) {
            var Bb = xb();
            if (null != Bb && Bb > parseFloat(zb)) {
                yb = String(Bb);
                break a
            }
        }
        yb = zb
    }
    var Cb = yb,
        qb = {},
        Db = function(a) {
            return rb(a, function() {
                for (var b = 0, c = La(String(Cb)).split("."), d = La(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        h = d[f] || "";
                    do {
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                        if (0 == g[0].length && 0 == h[0].length) break;
                        b = Ma(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Ma(0 == g[2].length, 0 == h[2].length) || Ma(g[2], h[2]);
                        g = g[3];
                        h = h[3]
                    } while (0 == b)
                }
                return 0 <= b
            })
        },
        Eb;
    Eb = r.document && tb ? xb() : void 0;
    var Fb = function(a) {
        var b = document;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    var Gb;
    (Gb = !tb) || (Gb = 9 <= Number(Eb));
    var Hb = Gb,
        Ib = tb && !Db("9"),
        Jb = function() {
            if (!r.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                r.addEventListener("test", ka, b), r.removeEventListener("test", ka, b)
            } catch (c) {}
            return a
        }();
    var z = function() {
        this.qe = this.qe;
        this.jg = this.jg
    };
    z.prototype.qe = !1;
    z.prototype.L = function() {
        this.qe || (this.qe = !0, this.G())
    };
    z.prototype.G = function() {
        if (this.jg)
            for (; this.jg.length;) this.jg.shift()()
    };
    var Kb = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.hd = !1
    };
    Kb.prototype.stopPropagation = function() {
        this.hd = !0
    };
    Kb.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var Lb = Object.freeze || function(a) {
        return a
    };
    var Mb = function(a, b) {
        Kb.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.Qc = null;
        a && this.ma(a, b)
    };
    ta(Mb, Kb);
    var Nb = Lb({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    Mb.prototype.ma = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (vb) {
                a: {
                    try {
                        pb(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
            d.screenY || 0) : (this.offsetX = wb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = wb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId =
            a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Nb[a.pointerType] || "";
        this.state = a.state;
        this.Qc = a;
        a.defaultPrevented && this.preventDefault()
    };
    Mb.prototype.stopPropagation = function() {
        Mb.lf.stopPropagation.call(this);
        this.Qc.stopPropagation ? this.Qc.stopPropagation() : this.Qc.cancelBubble = !0
    };
    Mb.prototype.preventDefault = function() {
        Mb.lf.preventDefault.call(this);
        var a = this.Qc;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Ib) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Ob = "closure_listenable_" + (1E6 * Math.random() | 0),
        Pb = 0;
    var Qb = function(a, b, c, d, e) {
            this.listener = a;
            this.tg = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Rf = e;
            this.key = ++Pb;
            this.Vd = this.zf = !1
        },
        Rb = function(a) {
            a.Vd = !0;
            a.listener = null;
            a.tg = null;
            a.src = null;
            a.Rf = null
        };
    var Sb = function(a) {
        this.src = a;
        this.ya = {};
        this.rf = 0
    };
    Sb.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.ya[f];
        a || (a = this.ya[f] = [], this.rf++);
        var g = Tb(a, b, d, e); - 1 < g ? (b = a[g], c || (b.zf = !1)) : (b = new Qb(b, this.src, f, !!d, e), b.zf = c, a.push(b));
        return b
    };
    Sb.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.ya)) return !1;
        var e = this.ya[a];
        b = Tb(e, b, c, d);
        return -1 < b ? (Rb(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.ya[a], this.rf--), !0) : !1
    };
    var Ub = function(a, b) {
        var c = b.type;
        c in a.ya && Ga(a.ya[c], b) && (Rb(b), 0 == a.ya[c].length && (delete a.ya[c], a.rf--))
    };
    Sb.prototype.Ah = function(a, b, c, d) {
        a = this.ya[a.toString()];
        var e = -1;
        a && (e = Tb(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    Sb.prototype.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return Ra(this.ya, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
            return !1
        })
    };
    var Tb = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Vd && f.listener == b && f.capture == !!c && f.Rf == d) return e
        }
        return -1
    };
    var Vb = "closure_lm_" + (1E6 * Math.random() | 0),
        Wb = {},
        Xb = 0,
        A = function(a, b, c, d, e) {
            if (d && d.once) Yb(a, b, c, d, e);
            else if (ma(b))
                for (var f = 0; f < b.length; f++) A(a, b[f], c, d, e);
            else c = Zb(c), a && a[Ob] ? a.ub.add(String(b), c, !1, pa(d) ? !!d.capture : !!d, e) : $b(a, b, c, !1, d, e)
        },
        $b = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = pa(e) ? !!e.capture : !!e,
                h = ac(a);
            h || (a[Vb] = h = new Sb(a));
            c = h.add(b, c, d, g, f);
            if (!c.tg) {
                d = bc();
                c.tg = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener) Jb || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                    d, e);
                else if (a.attachEvent) a.attachEvent(cc(b.toString()), d);
                else if (a.addListener && a.removeListener) a.addListener(d);
                else throw Error("addEventListener and attachEvent are unavailable.");
                Xb++
            }
        },
        bc = function() {
            var a = dc,
                b = Hb ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        Yb = function(a, b, c, d, e) {
            if (ma(b))
                for (var f = 0; f < b.length; f++) Yb(a, b[f], c, d, e);
            else c = Zb(c), a && a[Ob] ? a.ub.add(String(b), c, !0, pa(d) ? !!d.capture : !!d, e) : $b(a, b, c, !0, d, e)
        },
        ec = function(a, b, c, d, e) {
            if (ma(b))
                for (var f = 0; f < b.length; f++) ec(a, b[f], c, d, e);
            else d = pa(d) ? !!d.capture : !!d, c = Zb(c), a && a[Ob] ? a.ub.remove(String(b), c, d, e) : a && (a = ac(a)) && (b = a.Ah(b, c, d, e)) && fc(b)
        },
        fc = function(a) {
            if ("number" !== typeof a && a && !a.Vd) {
                var b = a.src;
                if (b && b[Ob]) Ub(b.ub, a);
                else {
                    var c = a.type,
                        d = a.tg;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(cc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    Xb--;
                    (c = ac(b)) ? (Ub(c, a), 0 == c.rf && (c.src = null, b[Vb] = null)) :
                    Rb(a)
                }
            }
        },
        cc = function(a) {
            return a in Wb ? Wb[a] : Wb[a] = "on" + a
        },
        hc = function(a, b, c, d) {
            var e = !0;
            if (a = ac(a))
                if (b = a.ya[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.Vd && (f = gc(f, d), e = e && !1 !== f)
                    }
                return e
        },
        gc = function(a, b) {
            var c = a.listener,
                d = a.Rf || a.src;
            a.zf && fc(a);
            return c.call(d, b)
        },
        dc = function(a, b) {
            if (a.Vd) return !0;
            if (!Hb) {
                if (!b) a: {
                    b = ["window", "event"];
                    for (var c = r, d = 0; d < b.length; d++)
                        if (c = c[b[d]], null == c) {
                            b = null;
                            break a
                        }
                    b = c
                }
                d = b;
                b = new Mb(d, this);
                c = !0;
                if (!(0 > d.keyCode || void 0 !=
                        d.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == d.keyCode) try {
                            d.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e || void 0 == d.returnValue) d.returnValue = !0
                    }
                    d = [];
                    for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
                    for (e = d.length - 1; !b.hd && 0 <= e; e--) {
                        b.currentTarget = d[e];
                        var f = hc(d[e], a, !0, b);
                        c = c && f
                    }
                    for (e = 0; !b.hd && e < d.length; e++) b.currentTarget = d[e],
                    f = hc(d[e], a, !1, b),
                    c = c && f
                }
                return c
            }
            return gc(a, new Mb(b, this))
        },
        ac = function(a) {
            a = a[Vb];
            return a instanceof Sb ? a : null
        },
        ic = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Zb = function(a) {
            if (oa(a)) return a;
            a[ic] || (a[ic] = function(b) {
                return a.handleEvent(b)
            });
            return a[ic]
        };
    var jc = function() {
        z.call(this);
        this.ub = new Sb(this);
        this.cl = this;
        this.ki = null
    };
    ta(jc, z);
    jc.prototype[Ob] = !0;
    jc.prototype.addEventListener = function(a, b, c, d) {
        A(this, a, b, c, d)
    };
    jc.prototype.removeEventListener = function(a, b, c, d) {
        ec(this, a, b, c, d)
    };
    jc.prototype.dispatchEvent = function(a) {
        var b, c = this.ki;
        if (c)
            for (b = []; c; c = c.ki) b.push(c);
        c = this.cl;
        var d = a.type || a;
        if ("string" === typeof a) a = new Kb(a, c);
        else if (a instanceof Kb) a.target = a.target || c;
        else {
            var e = a;
            a = new Kb(d, c);
            Xa(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.hd && 0 <= f; f--) {
                var g = a.currentTarget = b[f];
                e = kc(g, d, !0, a) && e
            }
        a.hd || (g = a.currentTarget = c, e = kc(g, d, !0, a) && e, a.hd || (e = kc(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.hd && f < b.length; f++) g = a.currentTarget = b[f], e = kc(g, d, !1, a) && e;
        return e
    };
    jc.prototype.G = function() {
        jc.lf.G.call(this);
        if (this.ub) {
            var a = this.ub,
                b = 0,
                c;
            for (c in a.ya) {
                for (var d = a.ya[c], e = 0; e < d.length; e++) ++b, Rb(d[e]);
                delete a.ya[c];
                a.rf--
            }
        }
        this.ki = null
    };
    var kc = function(a, b, c, d) {
        b = a.ub.ya[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Vd && g.capture == c) {
                var h = g.listener,
                    l = g.Rf || g.src;
                g.zf && Ub(a.ub, g);
                e = !1 !== h.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    jc.prototype.Ah = function(a, b, c, d) {
        return this.ub.Ah(String(a), b, c, d)
    };
    jc.prototype.hasListener = function(a, b) {
        return this.ub.hasListener(void 0 !== a ? String(a) : void 0, b)
    };
    var lc = function() {};
    lc.prototype.dj = null;
    var nc = function(a) {
        var b;
        (b = a.dj) || (b = {}, mc(a) && (b[0] = !0, b[1] = !0), b = a.dj = b);
        return b
    };
    var oc, pc = function() {};
    ta(pc, lc);
    var qc = function(a) {
            return (a = mc(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        mc = function(a) {
            if (!a.Ej && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.Ej = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.Ej
        };
    oc = new pc;
    var rc = function(a, b, c) {
        this.reset(a, b, c, void 0, void 0)
    };
    rc.prototype.Ec = 0;
    rc.prototype.Hf = null;
    var sc = 0;
    rc.prototype.reset = function(a, b, c, d, e) {
        this.Ec = "number" == typeof e ? e : sc++;
        this.$d = d || t();
        this.$c = a;
        this.Vl = b;
        this.Sj = c;
        delete this.Hf
    };
    rc.prototype.Fi = function(a) {
        this.$c = a
    };
    var tc = function(a) {
            this.dd = a;
            this.te = this.hh = this.$c = this.Xa = null
        },
        uc = function(a, b) {
            this.name = a;
            this.value = b
        };
    uc.prototype.toString = function() {
        return this.name
    };
    var vc = new uc("SEVERE", 1E3),
        wc = new uc("WARNING", 900),
        xc = new uc("INFO", 800),
        yc = new uc("CONFIG", 700),
        zc = new uc("FINE", 500),
        Ac = [new uc("OFF", Infinity), new uc("SHOUT", 1200), vc, wc, xc, yc, zc, new uc("FINER", 400), new uc("FINEST", 300), new uc("ALL", 0)],
        Bc = null,
        Cc = function(a) {
            if (!Bc) {
                Bc = {};
                for (var b = 0, c; c = Ac[b]; b++) Bc[c.value] = c, Bc[c.name] = c
            }
            if (a in Bc) return Bc[a];
            for (b = 0; b < Ac.length; ++b)
                if (c = Ac[b], c.value <= a) return c;
            return null
        };
    tc.prototype.bb = function() {
        return this.dd
    };
    tc.prototype.getParent = function() {
        return this.Xa
    };
    tc.prototype.Fi = function(a) {
        this.$c = a
    };
    var Dc = function(a) {
        if (a.$c) return a.$c;
        if (a.Xa) return Dc(a.Xa);
        za("Root logger has no level set.");
        return null
    };
    tc.prototype.log = function(a, b, c) {
        if (a.value >= Dc(this).value)
            for (oa(b) && (b = b()), a = new rc(a, String(b), this.dd), c && (a.Hf = c), c = this; c;) {
                var d = c,
                    e = a;
                if (d.te)
                    for (var f = 0; b = d.te[f]; f++) b(e);
                c = c.getParent()
            }
    };
    tc.prototype.info = function(a, b) {
        this.log(xc, a, b)
    };
    var Ec = {},
        Fc = null,
        Gc = function() {
            Fc || (Fc = new tc(""), Ec[""] = Fc, Fc.Fi(yc))
        },
        Hc = function() {
            Gc();
            return Fc
        },
        B = function(a) {
            Gc();
            var b;
            if (!(b = Ec[a])) {
                b = new tc(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1);
                c = B(a.substr(0, c));
                c.hh || (c.hh = {});
                c.hh[d] = b;
                b.Xa = c;
                Ec[a] = b
            }
            return b
        };
    var Ic = function(a, b) {
            a && a.log(vc, b, void 0)
        },
        C = function(a, b) {
            a && a.log(wc, b, void 0)
        },
        D = function(a, b) {
            a && a.info(b, void 0)
        },
        Jc = function(a, b) {
            a && a.log(zc, b, void 0)
        };
    var Kc = "StopIteration" in r ? r.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        Lc = function() {};
    Lc.prototype.next = function() {
        throw Kc;
    };
    Lc.prototype.al = function() {
        return this
    };
    var Mc = function(a, b) {
        this.fb = {};
        this.na = [];
        this.ka = this.P = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    k = Mc.prototype;
    k.Sc = function() {
        return this.P
    };
    k.Oa = function() {
        Nc(this);
        for (var a = [], b = 0; b < this.na.length; b++) a.push(this.fb[this.na[b]]);
        return a
    };
    k.ab = function() {
        Nc(this);
        return this.na.concat()
    };
    k.me = function(a) {
        return Oc(this.fb, a)
    };
    k.Ob = function(a) {
        if (this === a) return !0;
        if (this.P != a.Sc()) return !1;
        var b = Pc;
        Nc(this);
        for (var c, d = 0; c = this.na[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };
    var Pc = function(a, b) {
        return a === b
    };
    Mc.prototype.Sa = function() {
        return 0 == this.P
    };
    Mc.prototype.clear = function() {
        this.fb = {};
        this.ka = this.P = this.na.length = 0
    };
    Mc.prototype.remove = function(a) {
        return Oc(this.fb, a) ? (delete this.fb[a], this.P--, this.ka++, this.na.length > 2 * this.P && Nc(this), !0) : !1
    };
    var Nc = function(a) {
        if (a.P != a.na.length) {
            for (var b = 0, c = 0; b < a.na.length;) {
                var d = a.na[b];
                Oc(a.fb, d) && (a.na[c++] = d);
                b++
            }
            a.na.length = c
        }
        if (a.P != a.na.length) {
            var e = {};
            for (c = b = 0; b < a.na.length;) d = a.na[b], Oc(e, d) || (a.na[c++] = d, e[d] = 1), b++;
            a.na.length = c
        }
    };
    k = Mc.prototype;
    k.get = function(a, b) {
        return Oc(this.fb, a) ? this.fb[a] : b
    };
    k.set = function(a, b) {
        Oc(this.fb, a) || (this.P++, this.na.push(a), this.ka++);
        this.fb[a] = b
    };
    k.addAll = function(a) {
        if (a instanceof Mc)
            for (var b = a.ab(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
        else
            for (b in a) this.set(b, a[b])
    };
    k.forEach = function(a, b) {
        for (var c = this.ab(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    k.clone = function() {
        return new Mc(this)
    };
    k.al = function(a) {
        Nc(this);
        var b = 0,
            c = this.ka,
            d = this,
            e = new Lc;
        e.next = function() {
            if (c != d.ka) throw Error("The map has changed since the iterator was created");
            if (b >= d.na.length) throw Kc;
            var f = d.na[b++];
            return a ? f : d.fb[f]
        };
        return e
    };
    var Oc = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Qc = function(a) {
            if (a.Oa && "function" == typeof a.Oa) return a.Oa();
            if ("string" === typeof a) return a.split("");
            if (na(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Sa(a)
        },
        Rc = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (na(a) || "string" === typeof a) Ca(a, b, c);
            else {
                if (a.ab && "function" == typeof a.ab) var d = a.ab();
                else if (a.Oa && "function" == typeof a.Oa) d = void 0;
                else if (na(a) || "string" === typeof a) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else d = Ta(a);
                e = Qc(a);
                f = e.length;
                for (var g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
            }
        };
    var Sc = function(a, b) {
        this.Ql = 100;
        this.pl = a;
        this.qm = b;
        this.ig = 0;
        this.Sf = null
    };
    Sc.prototype.get = function() {
        if (0 < this.ig) {
            this.ig--;
            var a = this.Sf;
            this.Sf = a.next;
            a.next = null
        } else a = this.pl();
        return a
    };
    Sc.prototype.put = function(a) {
        this.qm(a);
        this.ig < this.Ql && (this.ig++, a.next = this.Sf, this.Sf = a)
    };
    var Tc = function(a) {
            r.setTimeout(function() {
                throw a;
            }, 0)
        },
        Uc, Vc = function() {
            var a = r.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !Qa("Presto") && (a = function() {
                var e = Fb("IFRAME");
                e.style.display = "none";
                ob(e);
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.write(nb());
                e.close();
                var g = "callImmediate" + Math.random(),
                    h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = sa(function(l) {
                    if (("*" ==
                            h || l.origin == h) && l.data == g) this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        f.postMessage(g, h)
                    }
                }
            });
            if ("undefined" !== typeof a && !Qa("Trident") && !Qa("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.gj;
                        c.gj = null;
                        e()
                    }
                };
                return function(e) {
                    d.next = {
                        gj: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in Fb("SCRIPT") ? function(e) {
                var f = Fb("SCRIPT");
                f.onreadystatechange =
                    function() {
                        f.onreadystatechange = null;
                        f.parentNode.removeChild(f);
                        f = null;
                        e();
                        e = null
                    };
                document.documentElement.appendChild(f)
            } : function(e) {
                r.setTimeout(e, 0)
            }
        };
    var Wc = function() {
            this.Tg = this.he = null
        },
        Yc = new Sc(function() {
            return new Xc
        }, function(a) {
            a.reset()
        });
    Wc.prototype.add = function(a, b) {
        var c = Yc.get();
        c.set(a, b);
        this.Tg ? this.Tg.next = c : this.he = c;
        this.Tg = c
    };
    Wc.prototype.remove = function() {
        var a = null;
        this.he && (a = this.he, this.he = this.he.next, this.he || (this.Tg = null), a.next = null);
        return a
    };
    var Xc = function() {
        this.next = this.scope = this.Fd = null
    };
    Xc.prototype.set = function(a, b) {
        this.Fd = a;
        this.scope = b;
        this.next = null
    };
    Xc.prototype.reset = function() {
        this.next = this.scope = this.Fd = null
    };
    var cd = function(a, b) {
            Zc || $c();
            ad || (Zc(), ad = !0);
            bd.add(a, b)
        },
        Zc, $c = function() {
            if (r.Promise && r.Promise.resolve) {
                var a = r.Promise.resolve(void 0);
                Zc = function() {
                    a.then(dd)
                }
            } else Zc = function() {
                var b = dd;
                !oa(r.setImmediate) || r.Window && r.Window.prototype && !Qa("Edge") && r.Window.prototype.setImmediate == r.setImmediate ? (Uc || (Uc = Vc()), Uc(b)) : r.setImmediate(b)
            }
        },
        ad = !1,
        bd = new Wc,
        dd = function() {
            for (var a; a = bd.remove();) {
                try {
                    a.Fd.call(a.scope)
                } catch (b) {
                    Tc(b)
                }
                Yc.put(a)
            }
            ad = !1
        };
    var gd = function(a) {
            this.f = 0;
            this.zk = void 0;
            this.vd = this.jc = this.Xa = null;
            this.Qf = this.vh = !1;
            if (a != ka) try {
                var b = this;
                a.call(void 0, function(c) {
                    ed(b, 2, c)
                }, function(c) {
                    if (!(c instanceof fd)) try {
                        if (c instanceof Error) throw c;
                        throw Error("Promise rejected.");
                    } catch (d) {}
                    ed(b, 3, c)
                })
            } catch (c) {
                ed(this, 3, c)
            }
        },
        hd = function() {
            this.next = this.context = this.Od = this.Pe = this.Oc = null;
            this.vf = !1
        };
    hd.prototype.reset = function() {
        this.context = this.Od = this.Pe = this.Oc = null;
        this.vf = !1
    };
    var id = new Sc(function() {
            return new hd
        }, function(a) {
            a.reset()
        }),
        jd = function(a, b, c) {
            var d = id.get();
            d.Pe = a;
            d.Od = b;
            d.context = c;
            return d
        };
    gd.prototype.then = function(a, b, c) {
        return kd(this, oa(a) ? a : null, oa(b) ? b : null, c)
    };
    gd.prototype.$goog_Thenable = !0;
    gd.prototype.cancel = function(a) {
        if (0 == this.f) {
            var b = new fd(a);
            cd(function() {
                ld(this, b)
            }, this)
        }
    };
    var ld = function(a, b) {
            if (0 == a.f)
                if (a.Xa) {
                    var c = a.Xa;
                    if (c.jc) {
                        for (var d = 0, e = null, f = null, g = c.jc; g && (g.vf || (d++, g.Oc == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.f && 1 == d ? ld(c, b) : (f ? (d = f, d.next == c.vd && (c.vd = d), d.next = d.next.next) : md(c), nd(c, e, 3, b)))
                    }
                    a.Xa = null
                } else ed(a, 3, b)
        },
        pd = function(a, b) {
            a.jc || 2 != a.f && 3 != a.f || od(a);
            a.vd ? a.vd.next = b : a.jc = b;
            a.vd = b
        },
        kd = function(a, b, c, d) {
            var e = jd(null, null, null);
            e.Oc = new gd(function(f, g) {
                e.Pe = b ? function(h) {
                    try {
                        var l = b.call(d, h);
                        f(l)
                    } catch (m) {
                        g(m)
                    }
                } : f;
                e.Od = c ? function(h) {
                    try {
                        var l =
                            c.call(d, h);
                        void 0 === l && h instanceof fd ? g(h) : f(l)
                    } catch (m) {
                        g(m)
                    }
                } : g
            });
            e.Oc.Xa = a;
            pd(a, e);
            return e.Oc
        };
    gd.prototype.Fm = function(a) {
        this.f = 0;
        ed(this, 2, a)
    };
    gd.prototype.Gm = function(a) {
        this.f = 0;
        ed(this, 3, a)
    };
    var ed = function(a, b, c) {
            if (0 == a.f) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.f = 1;
                a: {
                    var d = c,
                        e = a.Fm,
                        f = a.Gm;
                    if (d instanceof gd) {
                        pd(d, jd(e || ka, f || null, a));
                        var g = !0
                    } else {
                        if (d) try {
                            var h = !!d.$goog_Thenable
                        } catch (m) {
                            h = !1
                        } else h = !1;
                        if (h) d.then(e, f, a), g = !0;
                        else {
                            if (pa(d)) try {
                                var l = d.then;
                                if (oa(l)) {
                                    qd(d, l, e, f, a);
                                    g = !0;
                                    break a
                                }
                            } catch (m) {
                                f.call(a, m);
                                g = !0;
                                break a
                            }
                            g = !1
                        }
                    }
                }
                g || (a.zk = c, a.f = b, a.Xa = null, od(a), 3 != b || c instanceof fd || rd(a, c))
            }
        },
        qd = function(a, b, c, d, e) {
            var f = !1,
                g = function(l) {
                    f || (f = !0, c.call(e, l))
                },
                h = function(l) {
                    f || (f = !0, d.call(e, l))
                };
            try {
                b.call(a, g, h)
            } catch (l) {
                h(l)
            }
        },
        od = function(a) {
            a.vh || (a.vh = !0, cd(a.Al, a))
        },
        md = function(a) {
            var b = null;
            a.jc && (b = a.jc, a.jc = b.next, b.next = null);
            a.jc || (a.vd = null);
            return b
        };
    gd.prototype.Al = function() {
        for (var a; a = md(this);) nd(this, a, this.f, this.zk);
        this.vh = !1
    };
    var nd = function(a, b, c, d) {
            if (3 == c && b.Od && !b.vf)
                for (; a && a.Qf; a = a.Xa) a.Qf = !1;
            if (b.Oc) b.Oc.Xa = null, sd(b, c, d);
            else try {
                b.vf ? b.Pe.call(b.context) : sd(b, c, d)
            } catch (e) {
                td.call(null, e)
            }
            id.put(b)
        },
        sd = function(a, b, c) {
            2 == b ? a.Pe.call(a.context, c) : a.Od && a.Od.call(a.context, c)
        },
        rd = function(a, b) {
            a.Qf = !0;
            cd(function() {
                a.Qf && td.call(null, b)
            })
        },
        td = Tc,
        fd = function(a) {
            xa.call(this, a)
        };
    ta(fd, xa);
    fd.prototype.name = "cancel";
    var ud = function(a, b, c) {
        if (oa(a)) c && (a = sa(a, c));
        else if (a && "function" == typeof a.handleEvent) a = sa(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : r.setTimeout(a, b || 0)
    };
    var vd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        wd = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };
    var E = function(a) {
        jc.call(this);
        this.headers = new Mc;
        this.Wg = a || null;
        this.hc = !1;
        this.Vg = this.u = null;
        this.Qj = this.Le = "";
        this.Rb = 0;
        this.Ke = "";
        this.Vc = this.Hh = this.Uf = this.th = !1;
        this.dc = 0;
        this.ta = null;
        this.gf = "";
        this.Sg = this.nm = this.ge = !1
    };
    ta(E, jc);
    E.prototype.ra = B("goog.net.XhrIo");
    var xd = /^https?$/i,
        yd = ["POST", "PUT"],
        zd = function(a) {
            a.gf = "arraybuffer"
        };
    E.prototype.send = function(a, b, c, d) {
        if (this.u) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Le + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.Le = a;
        this.Ke = "";
        this.Rb = 0;
        this.Qj = b;
        this.th = !1;
        this.hc = !0;
        this.u = this.oh();
        this.Vg = this.Wg ? nc(this.Wg) : nc(oc);
        this.u.onreadystatechange = sa(this.gk, this);
        this.nm && "onprogress" in this.u && (this.u.onprogress = sa(function(f) {
            this.fk(f, !0)
        }, this), this.u.upload && (this.u.upload.onprogress = sa(this.fk, this)));
        try {
            Jc(this.ra, Ad(this, "Opening Xhr")),
                this.Hh = !0, this.u.open(b, String(a), !0), this.Hh = !1
        } catch (f) {
            Jc(this.ra, Ad(this, "Error opening Xhr: " + f.message));
            Bd(this, f);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && Rc(d, function(f, g) {
            e.set(g, f)
        });
        d = Fa(e.ab());
        c = r.FormData && a instanceof r.FormData;
        !(0 <= Aa(yd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, g) {
            this.u.setRequestHeader(g, f)
        }, this);
        this.gf && (this.u.responseType = this.gf);
        "withCredentials" in this.u && this.u.withCredentials !== this.ge &&
            (this.u.withCredentials = this.ge);
        try {
            Cd(this), 0 < this.dc && (this.Sg = Dd(this.u), Jc(this.ra, Ad(this, "Will abort after " + this.dc + "ms if incomplete, xhr2 " + this.Sg)), this.Sg ? (this.u.timeout = this.dc, this.u.ontimeout = sa(this.Qk, this)) : this.ta = ud(this.Qk, this.dc, this)), Jc(this.ra, Ad(this, "Sending request")), this.Uf = !0, this.u.send(a), this.Uf = !1
        } catch (f) {
            Jc(this.ra, Ad(this, "Send error: " + f.message)), Bd(this, f)
        }
    };
    var Dd = function(a) {
            return tb && Db(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        },
        Ea = function(a) {
            return "content-type" == a.toLowerCase()
        };
    E.prototype.oh = function() {
        return this.Wg ? qc(this.Wg) : qc(oc)
    };
    E.prototype.Qk = function() {
        "undefined" != typeof ja && this.u && (this.Ke = "Timed out after " + this.dc + "ms, aborting", this.Rb = 8, Jc(this.ra, Ad(this, this.Ke)), this.dispatchEvent("timeout"), this.abort(8))
    };
    var Bd = function(a, b) {
            a.hc = !1;
            a.u && (a.Vc = !0, a.u.abort(), a.Vc = !1);
            a.Ke = b;
            a.Rb = 5;
            Ed(a);
            Fd(a)
        },
        Ed = function(a) {
            a.th || (a.th = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    E.prototype.abort = function(a) {
        this.u && this.hc && (Jc(this.ra, Ad(this, "Aborting")), this.hc = !1, this.Vc = !0, this.u.abort(), this.Vc = !1, this.Rb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Fd(this))
    };
    E.prototype.G = function() {
        this.u && (this.hc && (this.hc = !1, this.Vc = !0, this.u.abort(), this.Vc = !1), Fd(this, !0));
        E.lf.G.call(this)
    };
    E.prototype.gk = function() {
        this.qe || (this.Hh || this.Uf || this.Vc ? Gd(this) : this.cm())
    };
    E.prototype.cm = function() {
        Gd(this)
    };
    var Gd = function(a) {
        if (a.hc && "undefined" != typeof ja)
            if (a.Vg[1] && 4 == Hd(a) && 2 == Id(a)) Jc(a.ra, Ad(a, "Local request error detected and ignored"));
            else if (a.Uf && 4 == Hd(a)) ud(a.gk, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == Hd(a)) {
            Jc(a.ra, Ad(a, "Request complete"));
            a.hc = !1;
            try {
                var b = Id(a);
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.Le).match(vd)[1] || null;
                        if (!f && r.self && r.self.location) {
                            var g =
                                r.self.location.protocol;
                            f = g.substr(0, g.length - 1)
                        }
                        e = !xd.test(f ? f.toLowerCase() : "")
                    }
                    d = e
                }
                if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    a.Rb = 6;
                    try {
                        var h = 2 < Hd(a) ? a.u.statusText : ""
                    } catch (l) {
                        Jc(a.ra, "Can not get status: " + l.message), h = ""
                    }
                    a.Ke = h + " [" + Id(a) + "]";
                    Ed(a)
                }
            } finally {
                Fd(a)
            }
        }
    };
    E.prototype.fk = function(a, b) {
        this.dispatchEvent(Jd(a, "progress"));
        this.dispatchEvent(Jd(a, b ? "downloadprogress" : "uploadprogress"))
    };
    var Jd = function(a, b) {
            return {
                type: b,
                lengthComputable: a.lengthComputable,
                loaded: a.loaded,
                total: a.total
            }
        },
        Fd = function(a, b) {
            if (a.u) {
                Cd(a);
                var c = a.u,
                    d = a.Vg[0] ? ka : null;
                a.u = null;
                a.Vg = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    Ic(a.ra, "Problem encountered resetting onreadystatechange: " + e.message)
                }
            }
        },
        Cd = function(a) {
            a.u && a.Sg && (a.u.ontimeout = null);
            a.ta && (r.clearTimeout(a.ta), a.ta = null)
        };
    E.prototype.Be = function() {
        return !!this.u
    };
    var Hd = function(a) {
            return a.u ? a.u.readyState : 0
        },
        Id = function(a) {
            try {
                return 2 < Hd(a) ? a.u.status : -1
            } catch (b) {
                return -1
            }
        },
        Kd = function(a) {
            try {
                if (!a.u) return null;
                if ("response" in a.u) return a.u.response;
                switch (a.gf) {
                    case "":
                    case "text":
                        return a.u.responseText;
                    case "arraybuffer":
                        if ("mozResponseArrayBuffer" in a.u) return a.u.mozResponseArrayBuffer
                }
                Ic(a.ra, "Response type " + a.gf + " is not supported on this browser");
                return null
            } catch (b) {
                return Jc(a.ra, "Can not get response: " + b.message), null
            }
        };
    E.prototype.getResponseHeader = function(a) {
        if (this.u && 4 == Hd(this)) return a = this.u.getResponseHeader(a), null === a ? void 0 : a
    };
    E.prototype.getAllResponseHeaders = function() {
        return this.u && 4 == Hd(this) ? this.u.getAllResponseHeaders() || "" : ""
    };
    var Ad = function(a, b) {
        return b + " [" + a.Qj + " " + a.Le + " " + Id(a) + "]"
    };
    var Ld = function(a) {
            return Ka(a, "audio/")
        },
        Md = function(a) {
            return Ka(a, "video/")
        },
        Nd = function(a) {
            a = a.toLowerCase();
            return !a.includes(",") && !!a.match(/^(mp4a|[ae]c-3)/)
        },
        Od = /dv(he|av).[s|d|p][e|t|w][n|r|h|b][a|h]?[e|t|w]?/,
        Pd = function(a) {
            if (!a) return 100;
            switch (a.code) {
                case MediaError.MEDIA_ERR_ABORTED:
                    return 101;
                case MediaError.MEDIA_ERR_NETWORK:
                    return 103;
                case MediaError.MEDIA_ERR_DECODE:
                    return 102;
                case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    return 104;
                default:
                    return 100
            }
        };
    var F = {},
        Qd = (F["application/ttml+xml"] = 1, F["text/vtt"] = 2, F["text/mp4"] = 3, F["audio/mp4"] = 4, F["video/mp4"] = 5, F["video/mp2t"] = 6, F["audio/webm"] = 7, F["video/webm"] = 8, F["application/x-mpegurl"] = 9, F["application/vnd.apple.mpegurl"] = 10, F["application/dash+xml"] = 11, F["application/vnd.ms-sstr+xml"] = 12, F["text/cea608"] = 13, F["video/ogg"] = 14, F["audio/aac"] = 15, F["audio/mp3"] = 16, F["audio/ogg"] = 17, F["audio/wav"] = 18, F["image/gif"] = 19, F["image/jpg"] = 20, F["image/png"] = 21, F["text/mp2t"] = 22, F["application/mp4"] = 23, F),
        Rd = {},
        Sd = (Rd.Wk = 0, Rd["mp4a.a6"] = 1, Rd["ec-3"] = 2, Rd["mp4a.40.2"] = 3, Rd["mp4a.40.5"] = 4, Rd["mp4a.67"] = 5, Rd["avc1.4D40"] = 6, Rd["avc1.4D401E"] = 7, Rd["mp4a.a5"] = 8, Rd["ac-3"] = 9, Rd.vorbis = 10, Rd.opus = 11, Rd.vp8 = 12, Rd.vp9 = 13, Rd.avc1 = 14, Rd["mp4a.40"] = 15, Rd);

    function Td(a) {
        if (a) {
            if (Md(a)) return "Video";
            if (Ld(a)) return "Audio"
        }
    }

    function Ud(a) {
        switch (a) {
            case "webvtt":
                return 1;
            case "ttml":
                return 2;
            case "cea608":
                return 3
        }
        return 0
    }

    function Vd(a, b) {
        switch (b) {
            case 1:
                switch (a) {
                    case "clearkey":
                        return 101;
                    case "widevine":
                        return 102;
                    case "playready":
                        return 103
                }
                break;
            case 2:
                switch (a) {
                    case "widevine":
                        return 201;
                    case "aes_128":
                        return 202;
                    case "aes_128_ckp":
                        return 203
                }
                break;
            case 3:
                switch (a) {
                    case "playready":
                        return 301
                }
        }
        return 0
    }
    var Wd = function(a) {
            a.split(",").forEach(function(b) {
                var c = Sd[b];
                y("Cast.MPL.Codec", c ? c : 0 == b.lastIndexOf("avc1", 0) ? Sd.avc1 : 0 == b.lastIndexOf("mp4a.40", 0) ? Sd["mp4a.40"] : Sd.Wk)
            })
        },
        Xd = function(a, b) {
            y("Cast.MPL.ProtocolProtection", Vd(a, b))
        };
    var Yd = function(a, b, c) {
        b = b || new Uint8Array(a.length);
        var d = 0;
        for (c = c || 0; d < a.length; d++) b[d + c] = a.charCodeAt(d);
        return b
    };
    var Zd = function(a) {
        return !!a && "function" === typeof a.then
    };
    var $d = null,
        be = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            ae(a, function(f) {
                d[e++] = f
            });
            return d.subarray(0, e)
        },
        ae = function(a, b) {
            function c(l) {
                for (; d < a.length;) {
                    var m = a.charAt(d++),
                        p = $d[m];
                    if (null != p) return p;
                    if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
                }
                return l
            }
            ce();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f <<
                    4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        ce = function() {
            if (!$d) {
                $d = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                    for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === $d[f] && ($d[f] = e)
                    }
            }
        };
    var de = 0,
        ee = 0,
        fe = function(a) {
            if (a.constructor === Uint8Array) return a;
            if (a.constructor === ArrayBuffer) return new Uint8Array(a);
            if (a.constructor === Array) return new Uint8Array(a);
            if (a.constructor === String) return be(a);
            za("Type not convertible to Uint8Array.");
            return new Uint8Array(0)
        };
    var ge = function() {
        this.F = []
    };
    ge.prototype.length = function() {
        return this.F.length
    };
    ge.prototype.end = function() {
        var a = this.F;
        this.F = [];
        return a
    };
    var he = function(a, b) {
            for (; 127 < b;) a.F.push(b & 127 | 128), b >>>= 7;
            a.F.push(b)
        },
        ie = function(a, b) {
            if (0 <= b) he(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.F.push(b & 127 | 128), b >>= 7;
                a.F.push(1)
            }
        };
    k = ge.prototype;
    k.Ug = function(a) {
        this.F.push(a >>> 0 & 255)
    };
    k.rd = function(a) {
        this.F.push(a >>> 0 & 255);
        this.F.push(a >>> 8 & 255)
    };
    k.j = function(a) {
        this.F.push(a >>> 0 & 255);
        this.F.push(a >>> 8 & 255);
        this.F.push(a >>> 16 & 255);
        this.F.push(a >>> 24 & 255)
    };
    k.Wi = function(a) {
        var b = a >>> 0;
        a = Math.floor((a - b) / 4294967296) >>> 0;
        de = b;
        ee = a;
        this.j(de);
        this.j(ee)
    };
    k.Uk = function(a) {
        this.F.push(a >>> 0 & 255);
        this.F.push(a >>> 8 & 255);
        this.F.push(a >>> 16 & 255);
        this.F.push(a >>> 24 & 255)
    };
    k.Ui = function(a) {
        var b = a;
        b = (a = 0 > b ? 1 : 0) ? -b : b;
        if (0 === b) 0 < 1 / b ? de = ee = 0 : (ee = 0, de = 2147483648);
        else if (isNaN(b)) ee = 0, de = 2147483647;
        else if (3.4028234663852886E38 < b) ee = 0, de = (a << 31 | 2139095040) >>> 0;
        else if (1.1754943508222875E-38 > b) b = Math.round(b / Math.pow(2, -149)), ee = 0, de = (a << 31 | b) >>> 0;
        else {
            var c = Math.floor(Math.log(b) / Math.LN2);
            b *= Math.pow(2, -c);
            b = Math.round(8388608 * b) & 8388607;
            ee = 0;
            de = (a << 31 | c + 127 << 23 | b) >>> 0
        }
        this.j(de)
    };
    k.Si = function(a) {
        this.F.push(a ? 1 : 0)
    };
    k.Ti = function(a) {
        ie(this, a)
    };
    k.Jc = function(a) {
        this.F.push.apply(this.F, a)
    };
    k.Kc = function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a.charCodeAt(b);
            if (128 > c) this.F.push(c);
            else if (2048 > c) this.F.push(c >> 6 | 192), this.F.push(c & 63 | 128);
            else if (65536 > c)
                if (55296 <= c && 56319 >= c && b + 1 < a.length) {
                    var d = a.charCodeAt(b + 1);
                    56320 <= d && 57343 >= d && (c = 1024 * (c - 55296) + d - 56320 + 65536, this.F.push(c >> 18 | 240), this.F.push(c >> 12 & 63 | 128), this.F.push(c >> 6 & 63 | 128), this.F.push(c & 63 | 128), b++)
                } else this.F.push(c >> 12 | 224), this.F.push(c >> 6 & 63 | 128), this.F.push(c & 63 | 128)
        }
    };
    var je = function() {
            this.td = [];
            this.Ib = 0;
            this.ba = new ge
        },
        ke = function(a, b) {
            he(a.ba, 8 * b + 2);
            b = a.ba.end();
            a.td.push(b);
            a.Ib += b.length;
            b.push(a.Ib);
            return b
        },
        le = function(a, b) {
            var c = b.pop();
            for (c = a.Ib + a.ba.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.Ib++;
            b.push(c);
            a.Ib++
        };
    je.prototype.reset = function() {
        this.td = [];
        this.ba.end();
        this.Ib = 0
    };
    var me = function(a) {
        for (var b = new Uint8Array(a.Ib + a.ba.length()), c = a.td, d = c.length, e = 0, f = 0; f < d; f++) {
            var g = c[f];
            b.set(g, e);
            e += g.length
        }
        c = a.ba.end();
        b.set(c, e);
        a.td = [b];
        return b
    };
    k = je.prototype;
    k.Uk = function(a, b) {
        null != b && null != b && (he(this.ba, 8 * a), ie(this.ba, b))
    };
    k.j = function(a, b) {
        null != b && null != b && (he(this.ba, 8 * a), he(this.ba, b))
    };
    k.Wi = function() {};
    k.Ui = function(a, b) {
        null != b && (he(this.ba, 8 * a + 5), this.ba.Ui(b))
    };
    k.Si = function(a, b) {
        null != b && (he(this.ba, 8 * a), this.ba.Si(b))
    };
    k.Ti = function(a, b) {
        null != b && (he(this.ba, 8 * a), ie(this.ba, b))
    };
    k.Kc = function(a, b) {
        null != b && (a = ke(this, a), this.ba.Kc(b), le(this, a))
    };
    k.Jc = function(a, b) {
        null != b && (b = fe(b), he(this.ba, 8 * a + 2), he(this.ba, b.length), a = this.ba.end(), this.td.push(a), this.td.push(b), this.Ib += a.length + b.length)
    };
    var ne = function(a, b, c) {
            if (null != c)
                for (var d = 0; d < c.length; d++) a.Jc(b, c[d])
        },
        oe = function(a, b, c, d) {
            if (null != c)
                for (var e = 0; e < c.length; e++) {
                    var f = ke(a, b);
                    d(c[e], a);
                    le(a, f)
                }
        };
    var pe = function() {},
        qe = "function" == typeof Uint8Array,
        ue = function(a, b, c, d, e) {
            a.la = null;
            b || (b = c ? [c] : []);
            a.Om = c ? String(c) : void 0;
            a.je = 0 === c ? -1 : 0;
            a.Za = b;
            a: {
                if (b = a.Za.length)
                    if (--b, c = a.Za[b], !(null === c || "object" != typeof c || ma(c) || qe && c instanceof Uint8Array)) {
                        a.Te = b - a.je;
                        a.Ma = c;
                        break a
                    }
                a.Te = Number.MAX_VALUE
            }
            a.Lm = {};
            if (d)
                for (b = 0; b < d.length; b++) c = d[b], c < a.Te ? (c += a.je, a.Za[c] = a.Za[c] || re) : (se(a), a.Ma[c] = a.Ma[c] || re);
            if (e && e.length)
                for (b = 0; b < e.length; b++) te(a, e[b])
        },
        re = Object.freeze ? Object.freeze([]) : [],
        se =
        function(a) {
            var b = a.Te + a.je;
            a.Za[b] || (a.Ma = a.Za[b] = {})
        },
        G = function(a, b) {
            if (b < a.Te) {
                b += a.je;
                var c = a.Za[b];
                return c === re ? a.Za[b] = [] : c
            }
            if (a.Ma) return c = a.Ma[b], c === re ? a.Ma[b] = [] : c
        },
        ve = function(a) {
            a = G(a, 5);
            return null == a ? a : !!a
        },
        we = function(a) {
            if (null == a || a instanceof Uint8Array) return a;
            if ("string" === typeof a) return be(a);
            za("Cannot coerce to Uint8Array: " + la(a));
            return null
        },
        ye = function(a) {
            xe(a);
            return !a.length || a[0] instanceof Uint8Array ? a : Da(a, we)
        },
        xe = function(a) {
            if (a && 1 < a.length) {
                var b = la(a[0]);
                Ca(a,
                    function(c) {
                        la(c) != b && za("Inconsistent type in JSPB repeated field array. Got " + la(c) + " expected " + b)
                    })
            }
        },
        ze = function(a, b, c) {
            b < a.Te ? a.Za[b + a.je] = c : (se(a), a.Ma[b] = c);
            return a
        },
        Be = function(a, b, c) {
            var d = te(a, Ae[0]);
            d && d !== b && void 0 !== c && (a.la && d in a.la && (a.la[d] = void 0), ze(a, d, void 0));
            return ze(a, b, c)
        },
        te = function(a, b) {
            for (var c, d, e = 0; e < b.length; e++) {
                var f = b[e],
                    g = G(a, f);
                null != g && (c = f, d = g, ze(a, f, void 0))
            }
            return c ? (ze(a, c, d), c) : 0
        },
        Ce = function(a, b, c) {
            a.la || (a.la = {});
            if (!a.la[c]) {
                for (var d = G(a, c), e = [],
                        f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.la[c] = e
            }
            b = a.la[c];
            b == re && (b = a.la[c] = []);
            return b
        },
        De = function(a) {
            if (a.la)
                for (var b in a.la) {
                    var c = a.la[b];
                    if (ma(c))
                        for (var d = 0; d < c.length; d++) c[d] && c[d].md();
                    else c && c.md()
                }
        };
    pe.prototype.md = function() {
        De(this);
        return this.Za
    };
    pe.prototype.toString = function() {
        De(this);
        return this.Za.toString()
    };
    pe.prototype.getExtension = function(a) {
        if (this.Ma) {
            this.la || (this.la = {});
            var b = a.Mm;
            if (a.Nm) {
                if (a.Nl()) return this.la[b] || (this.la[b] = Da(this.Ma[b] || [], function(c) {
                    return new a.ql(c)
                })), this.la[b]
            } else if (a.Nl()) return !this.la[b] && this.Ma[b] && (this.la[b] = new a.ql(this.Ma[b])), this.la[b];
            return this.Ma[b]
        }
    };
    pe.prototype.clone = function() {
        return new this.constructor(Ee(this.md()))
    };
    var Ee = function(a) {
        if (ma(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Ee(d) : d)
            }
            return b
        }
        if (qe && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Ee(d) : d);
        return b
    };
    var Fe = function(a) {
        ue(this, a, 0, null, Ae)
    };
    ta(Fe, pe);
    var Ae = [
        [2, 3, 4, 5]
    ];
    Fe.prototype.Dg = function() {
        var a = new je;
        Ge(this, a);
        return me(a)
    };
    var Ge = function(a, b) {
        var c = G(a, 1);
        null != c && b.Kc(1, c);
        c = G(a, 2);
        null != c && b.Kc(2, c);
        c = G(a, 3);
        null != c && b.Uk(3, c);
        c = G(a, 4);
        null != c && b.Ui(4, c);
        c = G(a, 5);
        null != c && b.Si(5, c)
    };
    k = Fe.prototype;
    k.bb = function() {
        return G(this, 1)
    };
    k.getStringValue = function() {
        return G(this, 2)
    };
    k.setStringValue = function(a) {
        return Be(this, 2, a)
    };
    k.getFloatValue = function() {
        var a = G(this, 4);
        return null == a ? a : +a
    };
    k.setFloatValue = function(a) {
        return Be(this, 4, a)
    };
    var Ie = function(a) {
        ue(this, a, "scs.sc", He, null)
    };
    ta(Ie, pe);
    var He = [1, 2];
    Ie.prototype.Dg = function() {
        var a = new je;
        var b = G(this, 1);
        if (0 < b.length && null != b)
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                null != e && (he(d.ba, 8), ie(d.ba, e))
            }
        b = Ce(this, Fe, 2);
        0 < b.length && oe(a, 2, b, Ge);
        return me(a)
    };
    var Je = /^(-)?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/,
        Ke = function(a, b, c, d, e, f) {
            "string" === typeof a ? (this.sd = "y" == a ? b : 0, this.cd = "m" == a ? b : 0, this.kc = "d" == a ? b : 0, this.pc = "h" == a ? b : 0, this.yc = "n" == a ? b : 0, this.Dc = "s" == a ? b : 0) : (this.sd = a || 0, this.cd = b || 0, this.kc = c || 0, this.pc = d || 0, this.yc = e || 0, this.Dc = f || 0)
        };
    Ke.prototype.Ob = function(a) {
        return a.sd == this.sd && a.cd == this.cd && a.kc == this.kc && a.pc == this.pc && a.yc == this.yc && a.Dc == this.Dc
    };
    Ke.prototype.clone = function() {
        return new Ke(this.sd, this.cd, this.kc, this.pc, this.yc, this.Dc)
    };
    Ke.prototype.add = function(a) {
        this.sd += a.sd;
        this.cd += a.cd;
        this.kc += a.kc;
        this.pc += a.pc;
        this.yc += a.yc;
        this.Dc += a.Dc
    };
    var Le = function() {
            this.yk = t()
        },
        Me = null;
    Le.prototype.set = function(a) {
        this.yk = a
    };
    Le.prototype.reset = function() {
        this.set(t())
    };
    Le.prototype.get = function() {
        return this.yk
    };
    var Ne = function(a) {
        this.km = a || "";
        Me || (Me = new Le);
        this.Cm = Me
    };
    k = Ne.prototype;
    k.Zi = !0;
    k.Ik = !0;
    k.zm = !0;
    k.ym = !0;
    k.Jk = !1;
    k.Am = !1;
    var Oe = function(a) {
            return 10 > a ? "0" + a : String(a)
        },
        Pe = function(a, b) {
            a = (a.$d - b) / 1E3;
            b = a.toFixed(3);
            var c = 0;
            if (1 > a) c = 2;
            else
                for (; 100 > a;) c++, a *= 10;
            for (; 0 < c--;) b = " " + b;
            return b
        },
        Qe = function(a) {
            Ne.call(this, a)
        };
    ta(Qe, Ne);
    var Re = function(a, b) {
        var c = [];
        c.push(a.km, " ");
        if (a.Ik) {
            var d = new Date(b.$d);
            c.push("[", Oe(d.getFullYear() - 2E3) + Oe(d.getMonth() + 1) + Oe(d.getDate()) + " " + Oe(d.getHours()) + ":" + Oe(d.getMinutes()) + ":" + Oe(d.getSeconds()) + "." + Oe(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        a.zm && c.push("[", Pe(b, a.Cm.get()), "s] ");
        a.ym && c.push("[", b.Sj, "] ");
        a.Am && c.push("[", b.$c.name, "] ");
        c.push(b.Vl);
        a.Jk && (b = b.Hf) && c.push("\n", b instanceof Error ? b.message : b.toString());
        a.Zi && c.push("\n");
        return c.join("")
    };
    var Se = function() {
        this.pm = sa(this.dl, this);
        this.Kf = new Qe;
        this.Kf.Ik = !1;
        this.Kf.Jk = !1;
        this.Gj = this.Kf.Zi = !1;
        this.Bl = {}
    };
    Se.prototype.dl = function(a) {
        function b(f) {
            if (f) {
                if (f.value >= vc.value) return "error";
                if (f.value >= wc.value) return "warn";
                if (f.value >= yc.value) return "log"
            }
            return "debug"
        }
        if (!this.Bl[a.Sj]) {
            var c = Re(this.Kf, a),
                d = Te;
            if (d) {
                var e = b(a.$c);
                Ue(d, e, c, a.Hf)
            }
        }
    };
    var Ve = null,
        Te = r.console,
        Ue = function(a, b, c, d) {
            if (a[b]) a[b](c, d || "");
            else a.log(c, d || "")
        };
    var We = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0
        },
        Xe = function(a) {
            a = La(a);
            if ("" == a || Ka(a, "url(")) return null;
            if (0 < a.indexOf("(")) {
                if (/"|'/.test(a)) return null;
                for (var b = /([\-\w]+)\(/g, c; c = b.exec(a);)
                    if (!(c[1] in We)) return null
            }
            return a
        };

    function Ye(a) {
        var b = r.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    var Ze = Ye("getPropertyValue"),
        $e = Ye("setProperty");

    function af(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (tb && 10 > document.documentMode) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
        return b[c].apply(b, d)
    };
    var bf = {
            "-webkit-border-horizontal-spacing": !0,
            "-webkit-border-vertical-spacing": !0
        },
        df = function(a) {
            if (!a) return ib;
            var b = document.createElement("div").style,
                c = cf(a);
            Ca(c, function(d) {
                var e = wb && d in bf ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
                0 != e.lastIndexOf("--", 0) && 0 != e.lastIndexOf("var", 0) && (d = af(Ze, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [d]) || "", d = Xe(d), null != d && af($e, b, b.setProperty ? "setProperty" : "setAttribute", [e, d]))
            });
            return (new gb).zb(b.cssText ||
                "")
        },
        ef = function(a) {
            if (tb && 10 > document.documentMode) return new gb;
            var b = document;
            "function" === typeof HTMLTemplateElement && (b = Fb("TEMPLATE").content.ownerDocument);
            b = b.implementation.createHTMLDocument("").createElement("DIV");
            b.style.cssText = a;
            return df(b.style)
        },
        cf = function(a) {
            na(a) ? a = Ia(a) : (a = Ta(a), Ga(a, "cssText"));
            return a
        };
    var ff = function() {
            this.Na = [];
            this.ob = []
        },
        gf = function(a) {
            0 == a.Na.length && (a.Na = a.ob, a.Na.reverse(), a.ob = [])
        };
    ff.prototype.enqueue = function(a) {
        this.ob.push(a)
    };
    var hf = function(a) {
            gf(a);
            return a.Na.pop()
        },
        jf = function(a) {
            gf(a);
            a = a.Na;
            return a[a.length - 1]
        };
    k = ff.prototype;
    k.Sc = function() {
        return this.Na.length + this.ob.length
    };
    k.Sa = function() {
        return 0 == this.Na.length && 0 == this.ob.length
    };
    k.clear = function() {
        this.Na = [];
        this.ob = []
    };
    k.contains = function(a) {
        return 0 <= Aa(this.Na, a) || 0 <= Aa(this.ob, a)
    };
    k.remove = function(a) {
        var b = this.Na;
        var c = Ba(b, a);
        0 <= c ? (Array.prototype.splice.call(b, c, 1), b = !0) : b = !1;
        return b || Ga(this.ob, a)
    };
    k.Oa = function() {
        for (var a = [], b = this.Na.length - 1; 0 <= b; --b) a.push(this.Na[b]);
        var c = this.ob.length;
        for (b = 0; b < c; ++b) a.push(this.ob[b]);
        return a
    };
    var H = function(a, b) {
        this.Nb = this.pd = this.Wb = "";
        this.Rd = null;
        this.Rc = this.ib = "";
        this.Pa = this.Ol = !1;
        if (a instanceof H) {
            this.Pa = void 0 !== b ? b : a.Pa;
            kf(this, a.Wb);
            var c = a.pd;
            lf(this);
            this.pd = c;
            c = a.Nb;
            lf(this);
            this.Nb = c;
            mf(this, a.Rd);
            c = a.ib;
            lf(this);
            this.ib = c;
            nf(this, a.kb.clone());
            a = a.Rc;
            lf(this);
            this.Rc = a
        } else a && (c = String(a).match(vd)) ? (this.Pa = !!b, kf(this, c[1] || "", !0), a = c[2] || "", lf(this), this.pd = of(a), a = c[3] || "", lf(this), this.Nb = of(a, !0), mf(this, c[4]), a = c[5] || "", lf(this), this.ib = of(a, !0), nf(this, c[6] ||
            "", !0), a = c[7] || "", lf(this), this.Rc = of(a)) : (this.Pa = !!b, this.kb = new pf(null, this.Pa))
    };
    H.prototype.toString = function() {
        var a = [],
            b = this.Wb;
        b && a.push(qf(b, rf, !0), ":");
        var c = this.Nb;
        if (c || "file" == b) a.push("//"), (b = this.pd) && a.push(qf(b, rf, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.Rd, null != c && a.push(":", String(c));
        if (c = this.ib) this.Nb && "/" != c.charAt(0) && a.push("/"), a.push(qf(c, "/" == c.charAt(0) ? sf : tf, !0));
        (c = this.kb.toString()) && a.push("?", c);
        (c = this.Rc) && a.push("#", qf(c, uf));
        return a.join("")
    };
    H.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.Wb;
        c ? kf(b, a.Wb) : c = !!a.pd;
        if (c) {
            var d = a.pd;
            lf(b);
            b.pd = d
        } else c = !!a.Nb;
        c ? (d = a.Nb, lf(b), b.Nb = d) : c = null != a.Rd;
        d = a.ib;
        if (c) mf(b, a.Rd);
        else if (c = !!a.ib) {
            if ("/" != d.charAt(0))
                if (this.Nb && !this.ib) d = "/" + d;
                else {
                    var e = b.ib.lastIndexOf("/"); - 1 != e && (d = b.ib.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length &&
                        f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? (lf(b), b.ib = d) : c = "" !== a.kb.toString();
        c ? nf(b, a.kb.clone()) : c = !!a.Rc;
        c && (a = a.Rc, lf(b), b.Rc = a);
        return b
    };
    H.prototype.clone = function() {
        return new H(this)
    };
    var kf = function(a, b, c) {
            lf(a);
            a.Wb = c ? of(b, !0) : b;
            a.Wb && (a.Wb = a.Wb.replace(/:$/, ""))
        },
        mf = function(a, b) {
            lf(a);
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.Rd = b
            } else a.Rd = null
        },
        nf = function(a, b, c) {
            lf(a);
            b instanceof pf ? (a.kb = b, a.kb.Ei(a.Pa)) : (c || (b = qf(b, vf)), a.kb = new pf(b, a.Pa))
        };
    H.prototype.getQuery = function() {
        return this.kb.toString()
    };
    H.prototype.removeParameter = function(a) {
        lf(this);
        this.kb.remove(a);
        return this
    };
    var lf = function(a) {
        if (a.Ol) throw Error("Tried to modify a read-only Uri");
    };
    H.prototype.Ei = function(a) {
        this.Pa = a;
        this.kb && this.kb.Ei(a)
    };
    var wf = function(a) {
            return a instanceof H ? a.clone() : new H(a, void 0)
        },
        of = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        qf = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, xf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        xf = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        rf = /[#\/\?@]/g,
        tf = /[#\?:]/g,
        sf = /[#\?]/g,
        vf = /[#\?@]/g,
        uf = /#/g,
        pf = function(a, b) {
            this.P = this.$ = null;
            this.Ha = a || null;
            this.Pa = !!b
        },
        yf = function(a) {
            a.$ || (a.$ = new Mc, a.P = 0, a.Ha && wd(a.Ha, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        };
    k = pf.prototype;
    k.Sc = function() {
        yf(this);
        return this.P
    };
    k.add = function(a, b) {
        yf(this);
        this.Ha = null;
        a = zf(this, a);
        var c = this.$.get(a);
        c || this.$.set(a, c = []);
        c.push(b);
        this.P += 1;
        return this
    };
    k.remove = function(a) {
        yf(this);
        a = zf(this, a);
        return this.$.me(a) ? (this.Ha = null, this.P -= this.$.get(a).length, this.$.remove(a)) : !1
    };
    k.clear = function() {
        this.$ = this.Ha = null;
        this.P = 0
    };
    k.Sa = function() {
        yf(this);
        return 0 == this.P
    };
    k.me = function(a) {
        yf(this);
        a = zf(this, a);
        return this.$.me(a)
    };
    k.forEach = function(a, b) {
        yf(this);
        this.$.forEach(function(c, d) {
            Ca(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    k.ab = function() {
        yf(this);
        for (var a = this.$.Oa(), b = this.$.ab(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    k.Oa = function(a) {
        yf(this);
        var b = [];
        if ("string" === typeof a) this.me(a) && (b = Ha(b, this.$.get(zf(this, a))));
        else {
            a = this.$.Oa();
            for (var c = 0; c < a.length; c++) b = Ha(b, a[c])
        }
        return b
    };
    k.set = function(a, b) {
        yf(this);
        this.Ha = null;
        a = zf(this, a);
        this.me(a) && (this.P -= this.$.get(a).length);
        this.$.set(a, [b]);
        this.P += 1;
        return this
    };
    k.get = function(a, b) {
        if (!a) return b;
        a = this.Oa(a);
        return 0 < a.length ? String(a[0]) : b
    };
    k.toString = function() {
        if (this.Ha) return this.Ha;
        if (!this.$) return "";
        for (var a = [], b = this.$.ab(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.Oa(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.Ha = a.join("&")
    };
    k.clone = function() {
        var a = new pf;
        a.Ha = this.Ha;
        this.$ && (a.$ = this.$.clone(), a.P = this.P);
        return a
    };
    var zf = function(a, b) {
        b = String(b);
        a.Pa && (b = b.toLowerCase());
        return b
    };
    pf.prototype.Ei = function(a) {
        a && !this.Pa && (yf(this), this.Ha = null, this.$.forEach(function(b, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < b.length && (this.Ha = null, this.$.set(zf(this, d), Ia(b)), this.P += b.length))
        }, this));
        this.Pa = a
    };
    pf.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) Rc(arguments[b], function(c, d) {
            this.add(d, c)
        }, this)
    };
    var Bf = function(a) {
        ue(this, a, 0, Af, null)
    };
    ta(Bf, pe);
    var Cf = function(a) {
        ue(this, a, 0, null, null)
    };
    ta(Cf, pe);
    var Af = [2, 13, 14];
    Bf.prototype.Dg = function() {
        var a = new je;
        var b = ye(G(this, 2));
        0 < b.length && ne(a, 2, b);
        b = G(this, 4);
        null != b && a.Jc(4, b);
        b = G(this, 7);
        null != b && a.j(7, b);
        b = G(this, 9);
        null != b && a.j(9, b);
        b = G(this, 10);
        null != b && a.j(10, b);
        b = G(this, 11);
        null != b && a.Ti(11, b);
        b = G(this, 12);
        null != b && a.j(12, b);
        b = ye(G(this, 13));
        0 < b.length && ne(a, 13, b);
        b = Ce(this, Cf, 14);
        0 < b.length && oe(a, 14, b, Df);
        b = G(this, 15);
        null != b && a.Kc(15, b);
        b = G(this, 1);
        null != b && a.Ti(1, b);
        b = G(this, 3);
        null != b && a.Kc(3, b);
        b = G(this, 5);
        null != b && a.Kc(5, b);
        b = G(this, 6);
        null != b && a.Kc(6,
            b);
        b = G(this, 8);
        null != b && a.Jc(8, b);
        return me(a)
    };
    Cf.prototype.Dg = function() {
        var a = new je;
        Df(this, a);
        return me(a)
    };
    var Df = function(a, b) {
        var c = G(a, 1);
        null != c && b.Jc(1, c);
        c = G(a, 2);
        null != c && b.Jc(2, c);
        c = G(a, 3);
        null != c && b.Jc(3, c);
        c = G(a, 4);
        null != c && b.Jc(4, c);
        c = G(a, 5);
        null != c && b.j(5, c)
    };
    Cf.prototype.getKey = function() {
        return G(this, 3)
    };
    x("cast.player.api.VERSION", "1.0.0");
    x("cast.player.api.ErrorCode", {
        UNKNOWN: 0,
        PLAYBACK: 1,
        MEDIAKEYS: 2,
        NETWORK: 3,
        MANIFEST: 4
    });
    var Ef = ["cast.player.api.ErrorCode.UNKNOWN", "cast.player.api.ErrorCode.PLAYBACK", "cast.player.api.ErrorCode.MEDIAKEYS", "cast.player.api.ErrorCode.NETWORK", "cast.player.api.ErrorCode.MANIFEST"];
    x("cast.player.api.HlsSegmentFormat", {
        MPEG2_TS: 0,
        MPEG_AUDIO_ES: 1,
        PACKED_AUDIO_AC3: 2,
        Km: 3,
        MPEG_LAYER_3: 4,
        TS_AAC: 5,
        PACKED_AUDIO_E_AC3: 6,
        FMP4: 7
    });
    x("cast.player.api.HlsVideoSegmentFormat", {
        MPEG2_TS: 0,
        FMP4: 1
    });
    x("cast.player.api.CaptionsType", {
        UNKNOWN: "unknown",
        WEBVTT: "webvtt",
        TTML: "ttml",
        CEA608: "cea608",
        STPP: "stpp"
    });
    x("cast.player.api.ContentProtection", {
        NONE: "none",
        CLEARKEY: "clearkey",
        PLAYREADY: "playready",
        WIDEVINE: "widevine",
        AES_128: "aes_128",
        AES_128_CKP: "aes_128_ckp"
    });
    var Ff = {
        DEBUG: 0,
        INFO: 800,
        WARNING: 900,
        ERROR: 1E3,
        NONE: Infinity
    };
    x("cast.player.api.LoggerLevel", Ff);
    x("cast.player.api.StreamingProtocolType", {
        UNKNOWN: 0,
        MPEG_DASH: 1,
        HLS: 2,
        SMOOTH_STREAMING: 3
    });
    var Gf = function() {
        this.timeoutInterval = 3E4;
        this.headers = this.url = null;
        this.withCredentials = !1;
        this.protectionSystem = this.content = null;
        this.skipRequest = !1;
        this.setResponse = null;
        this.interval = {
            time: 0,
            duration: 0
        };
        this.Ud = null
    };
    x("cast.player.api.RequestInfo", Gf);
    var Hf = function(a, b, c, d, e) {
        this.url = a;
        this.errorCode = b;
        this.status = c;
        this.responseHeaders = d;
        this.response = e
    };
    x("cast.player.api.RequestStatus", Hf);
    var If = function(a, b, c, d, e, f, g, h) {
        this.codecs = a;
        this.codecsProvided = void 0 === h ? !1 : h;
        this.mimeType = b;
        this.bitrates = c;
        this.language = d;
        this.name = e;
        this.role = f;
        this.hlsMediaInfo = void 0 === g ? null : g
    };
    x("cast.player.api.StreamInfo", If);
    var Jf = function(a) {
        a = void 0 === a ? {} : a;
        var b = void 0 === a.url ? null : a.url,
            c = void 0 === a.characteristics ? null : a.characteristics,
            d = void 0 === a.groupId ? null : a.groupId,
            e = void 0 === a.autoSelect ? !1 : a.autoSelect,
            f = void 0 === a.channels ? null : a.channels,
            g = void 0 === a.forced ? !1 : a.forced,
            h = void 0 === a.assocLanguage ? null : a.assocLanguage;
        this.isDefault = void 0 === a.isDefault ? !1 : a.isDefault;
        this.url = b;
        this.characteristics = c;
        this.groupId = d;
        this.autoSelect = e;
        this.channels = f;
        this.forced = g;
        this.assocLanguage = h
    };
    x("cast.player.api.HlsMediaInfo", Jf);
    x("cast.player.api.EmsgInfo", function() {});
    window.VTTCue = window.VTTCue || window.TextTrackCue;
    var Kf = function(a) {
        Hc().Fi(Cc(a))
    };
    x("cast.player.api.setLoggerLevel", Kf);
    Ve || (Ve = new Se);
    if (Ve) {
        var Lf = Ve;
        if (1 != Lf.Gj) {
            var Mf = Hc(),
                Nf = Lf.pm;
            Mf.te || (Mf.te = []);
            Mf.te.push(Nf);
            Lf.Gj = !0
        }
    };
    var Of = function(a) {
        this.url = a;
        this.updateCaptionsRequestInfo = this.updateSegmentRequestInfo = this.updateManifestRequestInfo = null
    };
    x("cast.player.api.HostBase", Of);
    var Pf = {
            clearkey: "org.w3.clearkey",
            playready: "com.chromecast.playready",
            widevine: "com.widevine.alpha"
        },
        Qf = B("cast.player.common"),
        Sf = function(a) {
            return Rf(a.role, a.mimeType, a.codecs)
        },
        Rf = function(a, b, c) {
            return "caption" == a || Ka(b, "text/") || "application/ttml+xml" === b || "application/mp4" == b && "stpp" == c
        },
        Uf = function(a, b) {
            b && (b = new Uint8Array(new ArrayBuffer(16)), b.set(a), Tf(b.subarray(0, 4)), Tf(b.subarray(4, 6)), Tf(b.subarray(6, 8)), a = b);
            this.sf = a
        };
    Uf.prototype.Ob = function(a) {
        if (!a) return !1;
        var b = this.sf;
        a = a.sf;
        for (var c = 0; 16 > c; c++)
            if (b[c] != a[c]) return !1;
        return !0
    };
    Uf.prototype.md = function() {
        return this.sf
    };
    Uf.prototype.toString = function() {
        for (var a = "", b = 0; b < this.sf.length; b++) a += ("0" + this.sf[b].toString(16)).slice(-2);
        return a
    };
    var Tf = function(a) {
            for (var b = 0, c = a.length - 1; b < c; b++, c--) {
                var d = a[b];
                a[b] = a[c];
                a[c] = d
            }
        },
        Vf = new Uf([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]),
        Wf = new Uf([237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237]),
        Xf = new Uf([16, 119, 239, 236, 192, 178, 77, 2, 172, 227, 60, 30, 82, 226, 251, 75]),
        Yf = function(a, b) {
            return MediaSource.isTypeSupported(a + '; codecs="' + b + '"')
        },
        Zf = function(a) {
            return "mp4a.a6" == a || "ec-3" == a
        },
        $f = function(a, b, c) {
            for (a = a.toString(b); a.length < c;) a = "0" + a;
            return a
        },
        ag = function(a) {
            for (var b =
                    a.length / 2, c = new Uint8Array(b), d = 0; d < b; d++) c[d] = parseInt(a.substr(2 * d, 2), 16);
            return c
        },
        bg = function(a) {
            if (cast.__platform__ && cast.__platform__.queryPlatformValue) return cast.__platform__.queryPlatformValue(a)
        },
        cg = function(a) {
            switch (a) {
                case 2:
                    return "mp4a.a5";
                case 6:
                    return "mp4a.a6";
                case 4:
                    return "";
                default:
                    return "mp4a.40.2"
            }
        },
        dg = function(a) {
            a = a.split(",");
            for (var b = 0; b < a.length; b++) {
                var c = a[b].match(Od);
                if (c && !Yf("video/mp4", c[0])) {
                    D(Qf, c[0] + " removed");
                    a.splice(b, 1);
                    break
                }
                if (c = a[b]) {
                    var d = c.split(".");
                    2 != d.length || "avc1" != d[0] && "avc3" != d[0] || (c = d[0] + "." + d[1].toUpperCase())
                }
                a[b] = c
            }
            return a.join(",")
        },
        eg = function(a) {
            return a.split(",").find(function(b) {
                return !Nd(b)
            })
        },
        fg = function(a) {
            return a.split(",").find(function(b) {
                return Nd(b)
            })
        },
        gg = cast.__platform__ && cast.__platform__.display,
        hg = cast.__platform__ && cast.__platform__.canDisplayType,
        ig = function(a, b) {
            return "number" === typeof a && "number" === typeof b && 2160 <= b
        },
        jg = parseFloat(bg("log-level-mpl"));
    0 <= Aa(Sa(Ff), jg) ? Kf(jg) : Kf(0);
    var kg = {
            "Cast.MPL.SegmentStats.Size": {
                min: 0,
                max: 1E6,
                Vj: 100
            },
            "Cast.MPL.SegmentStats.Time": {
                min: 0,
                max: 2E4,
                Vj: 20
            }
        },
        lg = function(a, b) {
            kg[a] ? ua() && cast.__platform__.metrics.logHistogramValueToUma(a, b, kg[a].min, kg[a].max, kg[a].Vj) : C(Qf, "Invalid histogram name")
        };
    var mg = function(a) {
        Of.call(this, a.url);
        this.initialBandwidth = 3145728;
        this.autoResumeDuration = 10;
        this.autoResumeNumberOfSegments = 3;
        this.autoPauseDuration = 1;
        this.segmentRequestRetryLimit = 3;
        this.useSingleKeySession = !1;
        this.mediaElement = a.mediaElement || null;
        this.url = a.url;
        this.licenseUrl = a.licenseUrl || null;
        this.decodeContentId = !0 === a.decodeContentId;
        this.protectionSystem = a.protectionSystem || null;
        this.licenseCustomData = a.licenseCustomData || null;
        this.Yi = 1 == a.aggressiveStallHandling;
        this.tj = 1 == a.disableSourceBufferTimeAdjust;
        this.Eh = 1 == a.hlsContentKeyProtection;
        this.enableSmoothLiveRefresh = 1 == a.enableSmoothLiveRefresh;
        this.skipSegmentOnNetworkFailure = 1 == a.skipSegmentOnNetworkFailure;
        this.preferSequenceNumberForPlaylistMatching = 1 == a.preferSequenceNumberForPlaylistMatching;
        this.ignoreTtmlPositionInfo = 1 == a.ignoreTtmlPositionInfo;
        this.enableSideloadedTextTrackStyling = !0 === a.enableSideloadedTextTrackStyling;
        this.useRelativeCueTimestamps = 1 == a.useRelativeCueTimestamps;
        this.emeServerCertificate = a.emeServerCertificate || null;
        this.onQualityLevelChanged =
            this.onCue = this.onAutoPause = this.onMediaDownloadEnded = this.onManifestReady = this.processLicense = this.processSegment = this.processManifest = this.processMetadata = this.prepareLicenseRequest = this.getQualityLevel = this.trackBandwidth = this.updateCaptionsRequestInfo = this.updateSegmentRequestInfo = this.updateLicenseRequestInfo = this.updateManifestRequestInfo = this.onError = null
    };
    q(mg, Of);
    mg.prototype.T = function(a, b, c, d) {
        var e = a;
        if (b) {
            e = b.errorCode;
            if (6 == b.errorCode && 0 <= b.status) var f = b.status;
            var g = a;
            null != e && (g = 10 * g + e % 10, null != f && (g = 1E3 * g + f % 1E3));
            e = g
        }
        y("Cast.MPL.Error", e);
        a = Math.floor(a / 100);
        Ic(d || ng, "error: " + Ef[a] + "/" + e + (c ? " (" + c + ")" : ""));
        if (this.onError) this.onError(a, b)
    };
    var og = function(a, b) {
        return a.processManifest ? a.processManifest(b) : b
    };
    x("cast.player.api.Host", mg);
    var ng = B("cast.player.api.Host");
    x("cast.player.cache.ContentCacheCallbacks", function() {});
    var pg = function(a) {
        mg.call(this, a)
    };
    q(pg, mg);
    x("cast.player.api.ContentCacheHost", pg);
    var qg = function() {};
    qg.prototype.load = function() {
        Ic(rg, "Cache is deprecated");
        return Promise.reject("Cache is deprecated")
    };
    qg.prototype.Ic = function() {};
    x("cast.player.api.ContentCache", qg);
    qg.setCacheHitCallback = function() {};
    qg.setCacheInsertCallback = function() {};
    qg.prototype.unload = qg.prototype.Ic;
    qg.prototype.load = qg.prototype.load;
    var rg = B("cast.player.api.ContentCache");
    var sg = function(a) {
            this.buffer = a;
            this.Bd = new DataView(a.buffer, a.byteOffset);
            this.offset = 0
        },
        tg = function(a) {
            return a.buffer[a.offset++]
        },
        ug = function(a) {
            var b = a.Bd.getUint16(a.offset);
            a.offset += 2;
            return b
        },
        I = function(a) {
            var b = a.Bd.getUint32(a.offset);
            a.offset += 4;
            return b
        },
        vg = function(a) {
            var b = a.Bd.getInt32(a.offset);
            a.offset += 4;
            return b
        },
        wg = function(a) {
            var b = I(a);
            a = I(a);
            return 4294967296 * b + a
        },
        xg = function(a) {
            var b = I(a),
                c = I(a);
            if (a = b & 2147483648) c = ~c + 1 >>> 0, b = ~b >>> 0, 0 === c && (b = b + 1 >>> 0);
            b = 4294967296 * b + c;
            return a ? -b : b
        },
        yg = function(a, b) {
            var c = a.buffer.subarray(a.offset, a.offset + b);
            a.offset += b;
            return c
        },
        zg = function(a) {
            for (var b = a.offset; a.offset < a.buffer.length && 0 !== a.Bd.getUint8(a.offset);) a.offset++;
            b = new Uint8Array(a.Bd.buffer, a.Bd.byteOffset + b, a.offset - b);
            a.offset++;
            a = [];
            for (var c = 0, d = 0; c < b.length;) {
                var e = b[c++];
                if (128 > e) a[d++] = String.fromCharCode(e);
                else if (191 < e && 224 > e) {
                    var f = b[c++];
                    a[d++] = String.fromCharCode((e & 31) << 6 | f & 63)
                } else if (239 < e && 365 > e) {
                    f = b[c++];
                    var g = b[c++],
                        h = b[c++];
                    e = ((e & 7) << 18 | (f &
                        63) << 12 | (g & 63) << 6 | h & 63) - 65536;
                    a[d++] = String.fromCharCode(55296 + (e >> 10));
                    a[d++] = String.fromCharCode(56320 + (e & 1023))
                } else f = b[c++], g = b[c++], a[d++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63)
            }
            return a.join("")
        },
        Ag = function(a) {
            return a.buffer.subarray(a.offset)
        },
        J = function(a, b) {
            a.offset += b
        };
    var Cg = function(a) {
            this.pj = a;
            this.dh = this.sa = this.$d = this.mode = this.hg = 0;
            this.wh = new Bg(this);
            this.xh = new Bg(this);
            this.Nc = [];
            this.reset()
        },
        Dg = function(a) {
            return a.$d + a.sa
        };
    Cg.prototype.clear = function() {
        this.dh = this.$d = this.mode = 0;
        this.Nc = [];
        this.reset()
    };
    Cg.prototype.reset = function() {
        this.mode = 0;
        this.wh.reset(0);
        this.xh.reset(1)
    };
    var Fg = function(a, b, c) {
            if (255 == a && 255 == b || !a && !b) return {
                wf: a,
                xf: b,
                result: 0
            };
            a = Eg[a];
            b = Eg[b];
            if (a & 128) {
                if (!(b & 128) && 0 != c.f && c.bh == b) return {
                    wf: a,
                    xf: b,
                    result: 1
                }
            } else if (b & 128 && 1 <= a && 31 >= a) return {
                wf: a,
                xf: b,
                result: 2
            };
            return {
                wf: a,
                xf: b,
                result: 3
            }
        },
        Hg = function(a, b, c) {
            255 == b && 255 == c || !b && !c ? (45 == ++a.dh && a.reset(), a.wh.Zc.clear(), a.xh.Zc.clear()) : (a.dh = 0, Gg(a.wh, b, c))
        };
    Cg.prototype.decode = function() {
        this.Nc.sort(function(c, d) {
            var e = c.time - d.time;
            return 0 == e ? c.order - d.order : e
        });
        for (var a = 0; a < this.Nc.length; a++) {
            var b = this.Nc[a];
            this.$d = b.time;
            0 == b.type ? Hg(this, b.hj, b.ij) : 1 == b.type && this.hg & 496 && Gg(this.xh, b.hj, b.ij)
        }
        this.Nc.length = 0
    };
    var Eg = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139,
            12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255
        ],
        Ig = function() {
            this.ec = 0
        };
    Ig.prototype.set = function(a) {
        this.ec = a
    };
    Ig.prototype.get = function() {
        return this.ec
    };
    var Jg = function() {
        this.bh = this.bj = this.f = 0
    };
    Jg.prototype.clear = function() {
        this.f = 0
    };
    Jg.prototype.update = function() {
        this.f = 2 == this.f ? 1 : 0
    };
    Jg.prototype.matches = function(a, b) {
        return 0 != this.f && a == this.bj && b == this.bh
    };
    var Kg = function() {
        this.timestamp = this.fc = 0;
        this.Ce = !1
    };
    Kg.prototype.reset = function() {
        this.timestamp = this.fc = 0;
        this.Ce = !1
    };
    var Lg = function(a) {
            this.pb = [];
            for (var b = 0; 15 >= b; b++) {
                this.pb[b] = [];
                for (var c = 0; 32 >= c; c++) this.pb[b][c] = new Kg
            }
            this.W = this.va = this.wa = 0;
            this.style = new Ig;
            this.aa = a;
            this.Ne = 0
        },
        Ng = function(a) {
            for (var b = "", c = Dg(a.aa), d = c, e = 1; 15 >= e; ++e) {
                for (var f = "", g = !1, h = 1; 32 >= h; ++h) {
                    var l = a.pb[e][h];
                    if (0 != l.fc) {
                        var m = String.fromCharCode(l.fc);
                        " " != m && (g = !0);
                        f += m;
                        var p = l.timestamp;
                        p < c && (c = p);
                        p > d && (d = p);
                        3 == a.style.ec ? (!l.Ce && " " == m && g && 32 > h && Mg(a.aa.pj, c, c, b ? b + "\n" + f : f), l.Ce = !0) : l.reset()
                    }
                }
                f && (b = b ? b + "\n" + f : f)
            }
            b && Mg(a.aa.pj,
                c, d, b)
        };
    Lg.prototype.reset = function(a) {
        for (var b = 0; 15 >= b; b++)
            for (var c = 0; 32 >= c; c++) this.pb[b][c].reset();
        this.Ne = a;
        this.W = 0;
        this.va = this.wa = 1
    };
    var Og = function(a) {
            return a.pb[a.wa][a.va]
        },
        Rg = function(a, b, c) {
            2 <= b && 1 < a.va && (--a.va, Og(a).fc = 0);
            var d = Og(a);
            d.timestamp = Dg(a.aa);
            a: {
                switch (b) {
                    case 0:
                        b = Pg[(c & 127) - 32];
                        break a;
                    case 1:
                        b = Qg[c & 15];
                        break a
                }
                b = 0
            }
            d.fc = b;
            32 > a.va && a.va++
        },
        Sg = function(a, b, c, d) {
            for (var e = 0; e < d; e++)
                for (var f = 0; 32 >= f; f++) {
                    var g = a.pb[b + e][f],
                        h = a.pb[c + e][f];
                    g.fc = h.fc;
                    g.timestamp = h.timestamp;
                    g.Ce = h.Ce
                }
        },
        Tg = function(a, b, c) {
            for (var d = 0; d < c; d++)
                for (var e = 0; 32 >= e; e++) a.pb[b + d][e].reset()
        },
        Ug = function(a) {
            a.wa = 0 < a.W ? a.W : 1;
            a.va = 1;
            Tg(a, 0,
                15)
        },
        Pg = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
        Qg = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
        Vg = function(a) {
            this.aa = a;
            this.ih = 0;
            this.style = new Ig;
            this.Zh = new Lg(a);
            this.$h = new Lg(a);
            this.ha = new Lg(a);
            this.sb = this.Zh;
            this.Ld = this.$h;
            this.R = this.sb
        };
    Vg.prototype.reset = function(a, b) {
        this.ih = b;
        this.style.set(2);
        this.sb = this.Zh;
        this.Ld = this.$h;
        this.R = this.sb;
        var c = (a << 2) + (b << 1);
        this.Zh.reset(c);
        this.$h.reset(c);
        this.ha.reset((a << 2) + (b << 1) + 1)
    };
    var Wg = function(a, b) {
            var c = a.sb;
            switch (a.style.get()) {
                case 4:
                    if (0 < c.W) break;
                case 1:
                case 2:
                    Ng(c), Ug(a.sb), Ug(a.Ld), c.wa = 15, c.W = b
            }
            a.style.set(3);
            a.R = c;
            a.R.style = a.style;
            a.aa.mode = 1 << c.Ne;
            c.va = 1;
            c.W != b && (c.W > b ? (Ng(c), Tg(c, c.wa - c.W, b)) : c.wa < b && (b = c.W), c.W = b)
        },
        Xg = function(a) {
            a.style.set(1);
            a.R = a.Ld;
            a.R.W = 0;
            a.R.style = a.style;
            a.aa.mode = 1 << a.R.Ne
        },
        Yg = function(a) {
            a.style.set(4);
            a.R = a.ha;
            a.R.style = a.style;
            a.aa.mode = 1 << a.R.Ne
        },
        Bg = function(a) {
            this.aa = a;
            this.Zc = new Jg;
            this.yh = 0;
            this.yf = new Vg(a);
            this.cj = new Vg(a);
            this.ph = this.yf
        };
    Bg.prototype.reset = function(a) {
        this.yh = a;
        this.Zc.clear();
        this.ph = this.yf;
        this.yf.reset(a, 0);
        this.cj.reset(a, 1)
    };
    var Gg = function(a, b, c) {
        a.Zc.update();
        b = Fg(b, c, a.Zc);
        switch (b.result) {
            case 0:
                return;
            case 1:
            case 2:
                return
        }
        var d = b.wf;
        c = b.xf;
        if (32 <= d || !d) a.aa.mode & a.aa.hg && (b = d, b & 128 && (b = 127), c & 128 && (c = 127), a = a.ph.R, b & 96 && Rg(a, 0, b), c & 96 && Rg(a, 0, c));
        else if (d & 16) a: if (!a.Zc.matches(d, c) && (b = a.Zc, b.bj = d, b.bh = c, b.f = 2, b = d & 8 ? a.cj : a.yf, a.ph = b, a.aa.mode = 1 << (a.yh << 2) + (b.ih << 1) + (4 == b.style.ec ? 1 : 0), (a.aa.mode | 1 << (a.yh << 2) + (b.ih << 1) + (4 != b.style.ec ? 1 : 0)) & a.aa.hg))
            if (c & 64) {
                a = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(d & 7) << 1 | c >>
                    5 & 1
                ];
                c = c & 16 ? 4 * ((c & 14) >> 1) : 0;
                d = b.R;
                switch (b.style.get()) {
                    case 4:
                        a = d.wa;
                        break;
                    case 3:
                        if (a != d.wa) {
                            if (a < d.W && (a = d.W, a == d.wa)) break;
                            var e = 1 + d.wa - d.W,
                                f = 1 + a - d.W;
                            Sg(d, f, e, d.W);
                            b = e;
                            var g = d.W;
                            f < e ? (e = f + g - e, 0 < e && (b += e, g -= e)) : (e = e + g - f, 0 < e && (g -= e));
                            Tg(d, b, g)
                        }
                }
                d.wa = a;
                d.va = c + 1
            } else switch (d & 7) {
                case 1:
                    switch (c & 112) {
                        case 32:
                            Rg(b.R, 0, 32);
                            break a;
                        case 48:
                            57 == c ? (b = b.R, Og(b).fc = 0, 32 > b.va && b.va++) : Rg(b.R, 1, c & 15)
                    }
                    break;
                case 2:
                    c & 32 && Rg(b.R, 2, c & 31);
                    break;
                case 3:
                    c & 32 && Rg(b.R, 3, c & 31);
                    break;
                case 4:
                case 5:
                    if (32 <= c && 47 >= c) switch (c) {
                        case 32:
                            Xg(b);
                            break;
                        case 33:
                            b = b.R;
                            1 < b.va && (--b.va, Og(b).fc = 0);
                            break;
                        case 36:
                            b = b.R;
                            a = Og(b);
                            for (c = 0; 15 >= c; c++)
                                for (d = 0; 32 >= d; d++)
                                    if (b.pb[c][d] == a) {
                                        for (; 32 >= d; d++) b.pb[c][d].reset();
                                        break
                                    }
                            break;
                        case 37:
                            Wg(b, 2);
                            break;
                        case 38:
                            Wg(b, 3);
                            break;
                        case 39:
                            Wg(b, 4);
                            break;
                        case 40:
                            Rg(b.R, 0, 32);
                            break;
                        case 41:
                            b.style.set(2);
                            b.R = b.sb;
                            b.R.W = 0;
                            b.R.style = b.style;
                            b.aa.mode = 1 << b.R.Ne;
                            break;
                        case 42:
                            a = b.ha;
                            a.W = 15;
                            a.style.set(4);
                            Ug(a);
                            Yg(b);
                            break;
                        case 43:
                            Yg(b);
                            break;
                        case 44:
                            a = b.sb;
                            switch (b.style.get()) {
                                case 1:
                                case 2:
                                case 3:
                                    Ng(a)
                            }
                            Tg(a, 0, 15);
                            break;
                        case 45:
                            b: {
                                a = b.R;
                                switch (b.style.get()) {
                                    default:
                                        case 2:
                                        case 1:
                                        break b;
                                    case 4:
                                            if (15 > a.wa) {
                                            ++a.wa;
                                            a.va = 1;
                                            break b
                                        }
                                    case 3:
                                }
                                2 > a.W && (a.W = 2, a.wa < a.W && (a.wa = a.W));
                                b = a.wa - a.W + 1;
                                Ng(a);
                                Sg(a, b, b + 1, a.W - 1);
                                Tg(a, a.wa, 1)
                            }
                            break;
                        case 46:
                            Tg(b.Ld, 0, 15);
                            break;
                        case 47:
                            Ng(b.sb), a = b.Ld, b.Ld = b.sb, b.sb = a, Xg(b)
                    }
                    break;
                case 7:
                    switch (c) {
                        case 33:
                        case 34:
                        case 35:
                            b = b.R, 32 < (b.va += c & 3) && (b.va = 32)
                    }
            }
    };
    var Zg = function(a) {
        this.gh = a;
        this.Zb = 0;
        this.mb = new Uint8Array(5120)
    };
    Zg.prototype.clear = function() {
        this.Zb = 0
    };
    Zg.prototype.append = function(a) {
        this.mb.set(a, this.Zb);
        this.Zb += a.length
    };
    var $g = function(a, b) {
        for (var c, d = c = 0, e = 0; d < a.Zb;) 2 == c && 3 == a.mb[d] ? c = 0 : (0 == a.mb[d] ? c++ : c = 0, a.mb[e] = a.mb[d], e++), d++;
        c = d - e;
        for (d = 0; d + c < a.Zb;) {
            for (var f = 0; 255 == a.mb[d];) f += 255, d++;
            f += a.mb[d++];
            if (45 < f) break;
            for (e = 0; 255 == a.mb[d];) e += 255, d++;
            e += a.mb[d++];
            if (4 == f) {
                f = a.gh.aa;
                var g = b,
                    h = new sg(a.mb.subarray(d, d + e));
                if (181 == tg(h) && 49 == ug(h) && 1195456820 == I(h) && 3 == tg(h)) {
                    var l = tg(h);
                    if (0 != (l & 64)) {
                        l &= 31;
                        J(h, 1);
                        for (var m = 0; m < l; m++) {
                            var p = tg(h),
                                u = (p & 4) >> 2,
                                v = tg(h),
                                w = tg(h);
                            u && f.Nc.push({
                                time: g,
                                type: p & 3,
                                hj: v,
                                ij: w,
                                order: f.Nc.length
                            })
                        }
                    }
                }
            }
            d += e
        }
        a.Zb = 0
    };
    var bh = function(a) {
        this.ca = ah(a)
    };
    bh.prototype.reset = function(a) {
        this.ca = ah(a)
    };
    var ah = function(a) {
        for (var b = -1, c = 0; c < a.length; c++) {
            var d = parseInt(a.charAt(c), 10);
            if (isNaN(d)) throw Error("Invalid positive base 10 integer string");
            0 > b && d && (b = c)
        }
        return a.substr(b, a.length)
    };
    bh.prototype.toString = function() {
        return this.ca
    };
    bh.prototype.add = function(a) {
        if (0 > a || Math.floor(a) != a) throw Error("Value must be a positive integer");
        var b = a + "",
            c = Math.max(b.length, this.ca.length);
        a = [];
        for (var d = 0, e = 0; e < c; e++) {
            var f = d + parseInt(e < b.length ? b.charAt(b.length - 1 - e) : "0", 10) + parseInt(e < this.ca.length ? this.ca.charAt(this.ca.length - 1 - e) : "0", 10);
            10 <= f ? (d = 1, f -= 10) : d = 0;
            a.push(f)
        }
        b = 0 < d ? "1" : "";
        for (c = a.length - 1; 0 <= c; c--) b += a[c];
        this.ca = b
    };
    var ch = function(a, b) {
        if (b.ca.length < a.ca.length) return !0;
        if (b.ca.length > a.ca.length) return !1;
        for (var c = 0; c < b.ca.length; c++) {
            var d = parseInt(a.ca.charAt(c), 10),
                e = parseInt(b.ca.charAt(c), 10);
            if (d < e) return !1;
            if (d > e) break
        }
        return !0
    };
    var dh = function(a) {
        sg.call(this, a)
    };
    q(dh, sg);
    var eh = function(a) {
            this.buffer = new Uint8Array(new ArrayBuffer(a ? a : 2E4));
            this.offset = 0
        },
        fh = function(a) {
            return a.buffer.subarray(0, a.offset)
        };
    eh.prototype.Ug = function(a) {
        K(this, [a])
    };
    eh.prototype.rd = function(a) {
        K(this, [a >> 8, a])
    };
    eh.prototype.j = function(a) {
        K(this, [a >> 24, a >> 16, a >> 8, a])
    };
    eh.prototype.Wi = function(a) {
        this.j(a / 4294967296);
        this.j(a % 4294967296)
    };
    var K = function(a, b) {
        var c = b.length;
        if (!(a.offset + c <= a.buffer.length)) {
            for (var d = a.buffer.length; d < a.offset + c;) d *= 2;
            d = new Uint8Array(new ArrayBuffer(d));
            d.set(a.buffer, 0);
            a.buffer = d
        }
        a.buffer.set(b, a.offset);
        a.offset += c
    };
    var gh = function(a) {
        eh.call(this, a)
    };
    q(gh, eh);
    var hh = function(a, b, c) {
        (new DataView(a.buffer, a.byteOffset, a.byteLength)).setUint32(b, c)
    };
    var ih = [96E3, 88200, 64E3, 48E3, 44100, 32E3, 24E3, 22050, 16E3, 12E3, 11025, 8E3, 7350],
        jh = function(a) {
            Ic(B("cast.player.mp4.base"), a)
        },
        kh = function(a, b, c) {
            if (0 > a || 32 <= a) return jh("Invalid object type id: " + a), null;
            var d = ih.indexOf(b);
            return 0 > d ? (jh("Invalid sample rate: " + b), null) : 0 > c || 16 < c ? (jh("Invalid channels: " + c), null) : new Uint8Array([a << 3 | d >> 1, d << 7 | c << 3])
        };
    var lh = function(a) {
            this.K = new dh(a);
            this.Fc = 0;
            this.ce = this.dd = null;
            this.ng = a;
            this.wb = 0;
            this.Fc = I(this.K);
            this.wb = 4;
            this.dd = I(this.K);
            this.wb += 4;
            1 === this.Fc && (this.Fc = wg(this.K), this.wb += 8);
            1970628964 === this.dd && (this.ce = new Uf(yg(this.K, 16)), this.wb += 16)
        },
        mh = function(a) {
            switch (a.dd) {
                case 1836019574:
                case 1836019558:
                case 1836475768:
                case 1953653099:
                case 1953653094:
                case 1701082227:
                case 1835297121:
                case 1835626086:
                case 1684631142:
                case 1937007212:
                    return !0;
                default:
                    return !1
            }
        };
    lh.prototype.bb = function() {
        return this.dd
    };
    var nh = function(a) {
            return a.ng.subarray(0, a.Fc)
        },
        L = function(a) {
            return nh(a).subarray(a.wb)
        };
    lh.prototype.l = function(a) {
        K(a, this.ng.subarray(0, this.Fc))
    };
    var M = function(a) {
        lh.call(this, a);
        this.nc = this.ka = 0;
        a = I(this.K);
        this.wb += 4;
        this.ka = a >>> 24;
        this.nc = a & 16777215
    };
    q(M, lh);
    var oh = function(a) {
        M.call(this, a)
    };
    q(oh, M);
    oh.prototype.Bh = function(a) {
        for (var b = this.ka, c = tg(this.K), d = Array(c), e = 0; e < c; e++) {
            if (1 === b) {
                var f = I(this.K);
                var g = I(this.K);
                var h = I(this.K);
                var l = I(this.K);
                var m = new bh(Math.floor(4294967296 * f / 1E4).toString() + "0000");
                m.add(f % 1E4 * 7296 % 1E4);
                m.add(g);
                f = 4294967296 / a * f + g / a;
                h = 4294967296 / a * h + l / a
            } else l = I(this.K), h = I(this.K), m = new bh(l.toString()), f = l / a, h /= a;
            d[e] = {
                time: f,
                duration: h,
                Ub: m,
                offset: 0,
                size: 0,
                url: null
            }
        }
        return d
    };
    var ph = new Uf([212, 128, 126, 242, 202, 57, 70, 149, 142, 84, 38, 203, 158, 70, 167, 159]),
        qh = function(a) {
            M.call(this, a)
        };
    q(qh, M);
    qh.prototype.Bh = function(a) {
        var b = this.ka;
        J(this.K, 4);
        var c = I(this.K),
            d = 0 === b ? I(this.K) : wg(this.K),
            e = 0 === b ? I(this.K) : wg(this.K),
            f = a + nh(this).byteOffset,
            g = this.Fc;
        J(this.K, 2);
        a = ug(this.K);
        b = Array(a);
        e = f + g + e;
        for (f = 0; f < a; f++) {
            g = I(this.K) & 2147483647;
            var h = I(this.K);
            J(this.K, 4);
            b[f] = {
                time: d / c,
                duration: h / c,
                Ub: null,
                offset: e,
                size: g,
                url: null
            };
            d += h;
            e += g
        }
        return b
    };
    var rh = function(a) {
        M.call(this, a);
        this.Ag = new Uint8Array([]);
        this.xi = null;
        this.Qh = !1;
        this.hb()
    };
    q(rh, M);
    rh.prototype.hb = function() {
        var a = new dh(L(this)),
            b = this.nc;
        b & 1 && J(a, 20);
        var c = I(a);
        this.xi = Ag(a);
        this.Qh = b & 2 ? !0 : !1;
        this.Ag = new Uint8Array(new ArrayBuffer(c));
        for (b = 0; b < c; b++)
            if (this.Qh) {
                J(a, 8);
                var d = 6 * ug(a);
                this.Ag[b] = 10 + d;
                J(a, d)
            } else this.Ag[b] = 8, J(a, 8)
    };
    var sh = new Uf([162, 57, 79, 82, 90, 155, 79, 20, 162, 68, 108, 66, 124, 100, 141, 244]),
        th = function(a) {
            M.call(this, a);
            this.lc = 0;
            this.hb()
        };
    q(th, M);
    th.prototype.hb = function() {
        var a = new dh(L(this));
        J(a, 4);
        J(a, 4);
        this.lc = I(a)
    };
    var uh = function(a) {
        M.call(this, a);
        this.zg = 0;
        this.Ck = [];
        this.yg = [];
        this.hb()
    };
    q(uh, M);
    uh.prototype.hb = function() {
        var a = new dh(L(this));
        this.zg = I(a);
        var b = this.nc;
        b & 1 && J(a, 4);
        b & 4 && J(a, 4);
        var c = !!(b & 256),
            d = !!(b & 512),
            e = !!(b & 1024);
        b = !!(b & 2048);
        for (var f = 0; f < this.zg; f++) c && J(a, 4), d && this.Ck.push(I(a)), e && J(a, 4), b && (1 === this.ka ? this.yg.push(vg(a)) : this.yg.push(I(a)))
    };
    uh.prototype.Eg = function(a) {
        hh(L(this), 4, a)
    };
    var vh = function(a) {
        M.call(this, a);
        this.xa = 9E4;
        this.hb()
    };
    q(vh, M);
    vh.prototype.hb = function() {
        var a = new dh(L(this));
        1 === this.ka ? (J(a, 8), J(a, 8)) : (J(a, 4), J(a, 4));
        this.xa = I(a)
    };
    var wh = function(a) {
        M.call(this, a)
    };
    q(wh, M);
    var xh = function(a) {
        M.call(this, a);
        this.Ki = new Uf(yg(this.K, 16));
        a = I(this.K);
        this.Df = yg(this.K, a)
    };
    q(xh, M);
    xh.prototype.getData = function() {
        return this.Df
    };
    var yh = function(a) {
        M.call(this, a);
        this.ac = 1 === this.ka ? wg(this.K) : I(this.K)
    };
    q(yh, M);
    yh.prototype.Uc = function() {
        return this.ac
    };
    var zh = function(a) {
        M.call(this, a)
    };
    q(zh, M);
    var Ah = function(a) {
        lh.call(this, a)
    };
    q(Ah, lh);
    Ah.prototype.Eg = function(a, b) {
        var c = N(L(this), 1953653094, void 0, void 0);
        if (c) {
            var d = N(L(c), 1953658222, void 0, void 0);
            d && d.Eg(a - this.ng.byteOffset);
            b && (a = N(L(c), 1935763823, void 0, void 0)) && (b -= this.ng.byteOffset, c = 0, a.nc & 1 && (c += 8), c += 4, d = L(a), 0 != a.ka && (hh(d, c, Math.floor(b / 4294967296)), c += 4), hh(d, c, Math.floor(b % 4294967296)))
        }
    };
    var Bh = function(a, b) {
            var c = N(a, 1836019558);
            a = L(N(a, 1835295092)).byteOffset;
            b ? c.Eg(a + b, a) : c.Eg(a)
        },
        Ch = function(a) {
            M.call(this, a);
            this.Yh = [];
            this.Ek = [];
            this.sh = 0;
            this.hb()
        };
    q(Ch, M);
    Ch.prototype.hb = function() {
        var a = new dh(L(this));
        this.sh = I(a);
        for (var b = 0; b < this.sh; b++) 1 === this.ka ? (this.Ek.push(wg(a)), this.Yh.push(xg(a))) : 0 === this.ka && (this.Ek.push(I(a)), this.Yh.push(vg(a))), J(a, 2), J(a, 2)
    };
    var Dh = function(a) {
        M.call(this, a);
        this.Qi = this.zi = "";
        this.tb = this.ac = this.Gh = this.Gf = this.pg = this.xa = 0;
        this.Uj = [];
        this.hb()
    };
    q(Dh, M);
    Dh.prototype.Uc = function() {
        return this.ac
    };
    Dh.prototype.hb = function() {
        var a = new dh(L(this));
        0 === this.ka ? (this.zi = zg(a), this.Qi = zg(a), this.xa = I(a), this.pg = I(a), this.Gf = I(a), this.Gh = I(a)) : 1 === this.ka && (this.xa = I(a), this.pg = wg(a), this.Gf = I(a), this.Gh = I(a), this.zi = zg(a), this.Qi = zg(a));
        for (; a.offset < a.buffer.length;) this.Uj.push(tg(a))
    };
    var Eh = function(a) {
            switch (a.bb()) {
                case 1701671783:
                    return new Dh(nh(a));
                case 1701606260:
                    return new Ch(nh(a));
                case 1836019558:
                    return new Ah(nh(a));
                case 1835296868:
                    return new vh(nh(a));
                case 1953658222:
                    return new uh(nh(a));
                case 1935763823:
                    return new zh(nh(a));
                case 1936286840:
                    return new qh(nh(a));
                case 1952868452:
                    return new wh(nh(a));
                case 1970628964:
                    var b = a.ce;
                    return sh.Ob(b) ? new rh(nh(a)) : ph.Ob(b) ? new oh(nh(a)) : a;
                case 1886614376:
                    return new xh(nh(a));
                case 1952867444:
                    return new yh(nh(a));
                case 1953654136:
                    return new th(nh(a));
                case 1702061171:
                case 1751411826:
                case 1835427940:
                case 1836476516:
                case 1935763834:
                case 1935894637:
                case 1937011571:
                case 1952804451:
                case 1953196132:
                    return new M(nh(a));
                default:
                    return a
            }
        },
        N = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            for (var e = 0; e < a.length;) {
                var f = new lh(a.subarray(e));
                e += f.Fc;
                if (f.bb() === b && (1970628964 != b || c && c.Ob(f.ce))) return Eh(f);
                if (d && mh(f) && (f = N(L(f), b, c, d))) return f
            }
            return null
        },
        Fh = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            for (var d = 0, e = []; d < a.length;) {
                var f = new lh(a.subarray(d));
                d += f.Fc;
                if (b) {
                    var g =
                        f.bb();
                    g && b.includes(g) && e.push(Eh(f))
                } else e.push(Eh(f));
                c && mh(f) && (e = e.concat(Fh(L(f), b, c)))
            }
            return e
        },
        Gh = function(a, b) {
            return Fh(a, void 0, void 0 === b ? !1 : b)
        };
    var Hh = function(a) {
        this.$b = new Zg(a);
        this.Ed = 0;
        this.xa = 9E4;
        this.lc = null;
        this.Cb = []
    };
    k = Hh.prototype;
    k.ma = function(a) {
        a ? this.Cb = Fh(a, [1835296868, 1953654136, 1953658222, 1835295092], !0) : (this.Cb = [], this.Ed = 0)
    };
    k.Fk = function(a) {
        this.Ed = a
    };
    k.Hk = function(a) {
        this.xa = a
    };
    k.Sa = function() {
        return !this.Cb.length
    };
    k.Wf = function() {
        return !this.Cb.length
    };
    k.parse = function() {
        if (this.Cb.length) {
            for (var a, b, c, d = 0, e = 0; e < this.Cb.length; e++) {
                var f = this.Cb[e];
                switch (f.bb()) {
                    case 1835296868:
                        this.xa = f.xa;
                        break;
                    case 1953654136:
                        this.lc = f.lc;
                        break;
                    case 1953658222:
                        a = f.zg;
                        b = f.Ck;
                        c = f.yg;
                        break;
                    case 1835295092:
                        var g = b,
                            h = c;
                        if (a && g && g.length && h) {
                            f = new sg(L(f));
                            if (this.lc && this.xa) var l = this.lc / this.xa;
                            else if (this.Cb.length) {
                                l = 0;
                                for (var m = n(this.Cb), p = m.next(); !p.done; p = m.next()) p = p.value, 1953658222 == p.bb() && (l += p.zg);
                                l = l ? this.Ed / l : 0
                            } else l = 0;
                            m = 0;
                            for (p = g[0]; f.offset <
                                f.buffer.length;) {
                                var u = I(f);
                                6 == (tg(f) & 31) ? (this.$b.append(yg(f, u - 1)), $g(this.$b, 0 == h.length ? d : d + h[m] / this.xa)) : J(f, u - 1);
                                p -= u + 4;
                                0 == p && (d += l, m++, p = g[m])
                            }
                        }
                }
            }
            this.Cb = []
        }
    };
    var Ih = function() {
        this.s = null;
        this.Dd = this.Vb = this.Dj = this.Zg = this.Pf = this.Ve = this.C = 0;
        this.qk = this.kj = !1
    };
    Ih.prototype.Sa = function() {
        return null === this.s
    };
    Ih.prototype.Wf = function() {
        return this.C >= this.s.length
    };
    Ih.prototype.ma = function(a) {
        this.s = a;
        this.Dd = this.Vb = this.Zg = this.Pf = this.Ve = this.C = 0
    };
    Ih.prototype.parse = function() {
        for (var a = this.C; this.C < this.s.length && !(524288 < this.C - a);) {
            for (; this.C < this.s.length && 71 != this.s[this.C];) this.C++;
            if (this.C + 188 > this.s.length) break;
            var b = this.C + 188,
                c = b - 1;
            this.C++;
            var d = this.s[this.C] & 64,
                e = this.s[this.C] & 31;
            this.C++;
            e = e << 8 | this.s[this.C];
            this.C++;
            var f = (this.s[this.C] & 48) >> 4;
            this.C++;
            f & 2 && (this.C += this.s[this.C] + 1);
            if (0 == e || e == this.Ve)
                if (d && this.C++, c = this.s[this.C], this.C++, 0 == c)
                    for (c = this.C, d = this.s[c] & 15, c++, d = d << 8 | this.s[c], c++, d = c + d - 4, c += 5; c < d;)
                        if (e =
                            this.s[c], c++, e = (e << 8) + this.s[c], c++, 0 == e) c += 2;
                        else {
                            this.Ve = this.s[c] & 31;
                            c++;
                            this.Ve = (this.Ve << 8) + this.s[c];
                            break
                        } else {
                if (2 == c)
                    for (this.qk = !0, c = this.C, d = this.s[c] & 15, c++, d = d << 8 | this.s[c], c++, d = c + d - 4, c = c + 5 + 2, e = this.s[c] & 15, c++, e = e << 8 | this.s[c], c += e + 1; c < d;) {
                        e = this.s[c];
                        c++;
                        f = this.s[c] & 31;
                        c++;
                        f = f << 8 | this.s[c];
                        c++;
                        switch (e) {
                            case 27:
                            case 219:
                                this.Pf = f;
                                break;
                            case 15:
                            case 207:
                                this.kj = !0;
                                this.Zg = f;
                                break;
                            case 21:
                                this.Dj = f
                        }
                        e = this.s[c] & 15;
                        c++;
                        e = e << 8 | this.s[c];
                        c += e + 1
                    }
            } else if (e == this.Dj) this.pk(this.C, c, !!d);
            else if (e == this.Pf || e == this.Zg) d && this.ni(this.C), e == this.Pf && this.nk(this.C, c);
            this.C = b
        }
    };
    var Jh = function(a, b) {
        var c = ((a.s[b] & 14) << 13) / 1.373291015625;
        c += (a.s[b + 1] << 6) / 1.373291015625;
        c += (a.s[b + 2] & 254) / 5.4931640625;
        c += a.s[b + 3] / 703.125;
        return c += (a.s[b + 4] & 254) / 18E4
    };
    Ih.prototype.ni = function(a) {
        if (0 == this.s[a] && 0 == this.s[a + 1] && 1 == this.s[a + 2]) {
            a += 7;
            var b = this.s[a] >> 6 & 3;
            a++;
            var c = this.s[a];
            a++;
            this.C = a + c;
            2 == b ? this.Dd = this.Vb = Jh(this, a) : 3 == b && (this.Vb = Jh(this, a), this.Dd = Jh(this, a + 5))
        }
    };
    Ih.prototype.pk = function() {};
    Ih.prototype.nk = function() {};
    var Kh = function(a) {
        Ih.call(this);
        this.$b = new Zg(a)
    };
    q(Kh, Ih);
    Kh.prototype.ma = function(a) {
        Ih.prototype.ma.call(this, a);
        this.$b.clear()
    };
    Kh.prototype.Fk = function() {};
    Kh.prototype.Hk = function() {};
    Kh.prototype.nk = function(a, b) {
        for (var c = 0;;) {
            a: {
                var d = a;
                var e = b;
                for (e -= 3; d <= e;) {
                    if (0 == this.s[d] && 0 == this.s[d + 1]) {
                        if (0 == this.s[d + 2] && 1 == this.s[d + 3]) {
                            d += 4;
                            break a
                        }
                        if (1 == this.s[d + 2]) {
                            d += 3;
                            break a
                        }
                    }
                    d++
                }
                d = -1
            }
            e = 0 <= d;
            if (0 < this.$b.Zb || 6 == c) {
                c = e ? d - 1 : b;
                var f = this.$b;
                f.Zb + (c - a + 1) <= f.mb.length || $g(this.$b, this.Vb);
                this.$b.append(this.s.subarray(a, c + 1))
            }
            if (!e) break;$g(this.$b, this.Vb);a = d;c = this.s[a++] & 31
        }
    };
    var Lh = function(a, b, c) {
        this.o = a;
        this.fj = "cast-captions-cue-styling";
        this.mj = "[" + this.fj + '="true"]::cue';
        for (a = this.o; a.parentNode;) a = a.parentNode;
        this.vi = 0 > a.toString().toLowerCase().indexOf("shadow") ? document.head : a;
        a = this.vi.getElementById ? this.vi.getElementById("cue-style") : document.getElementById("cue-style");
        a || (a = document.createElement("style"), a.id = "cue-style", a.type = "text/css", this.vi.appendChild(a), a.appendChild(document.createTextNode("")));
        this.rl = a;
        this.yd = this.rl.sheet;
        this.Af = b;
        this.kl =
            c
    };
    Lh.prototype.hf = function(a, b) {
        var c = this,
            d = this.Af.Of();
        if (!(0 === a.length || 0 < d.length)) {
            switch (this.kl) {
                case "webvtt":
                    Mh(this, ".white", "color: rgba(255,255,255,1);"), Mh(this, ".lime", "color: rgba(0,255,0,1);"), Mh(this, ".cyan", "color: rgba(0,255,255,1);"), Mh(this, ".red", "color: rgba(255,0,0,1);"), Mh(this, ".yellow", "color: rgba(255,255,0,1);"), Mh(this, ".magenta", "color: rgba(255,0,255,1);"), Mh(this, ".blue", "color: rgba(0,0,255,1);"), Mh(this, ".black", "color: rgba(0,0,0,1);"), Mh(this, ".bg_white", "background-color: rgba(255,255,255,1);"), Mh(this,
                        ".bg_lime", "background-color: rgba(0,255,0,1);"), Mh(this, ".bg_cyan", "background-color: rgba(0,255,255,1);"), Mh(this, ".bg_red", "background-color: rgba(255,0,0,1);"), Mh(this, ".bg_yellow", "background-color: rgba(255,255,0,1);"), Mh(this, ".bg_magenta", "background-color: rgba(255,0,255,1);"), Mh(this, ".bg_blue", "background-color: rgba(0,0,255,1);"), Mh(this, ".bg_black", "background-color: rgba(0,0,0,1);"), a = Nh(b, a)
            }
            a = n(a);
            for (b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                d = b.Cg.map(function(e) {
                    return "" + c.mj + e
                });
                d = d.join(",\n");
                try {
                    this.yd.insertRule(d + " { " + b.rules + " }", this.yd.cssRules.length)
                } catch (e) {
                    C(Oh, "Found invalid style: " + (d + " { " + b.rules + " }"))
                }
            }
            this.o.setAttribute(this.fj, !0)
        }
    };
    Lh.prototype.wd = function() {
        if (!(0 < this.Af.Of().length))
            for (var a = this.yd.cssRules.length - 1; 0 <= a; a--) this.yd.deleteRule(a)
    };
    var Mh = function(a, b, c) {
            a.yd.insertRule(a.mj + "(" + b + ") { " + c + " }", a.yd.cssRules.length)
        },
        Nh = function(a, b) {
            if (!a) return b;
            for (var c = n(b), d = c.next(); !d.done; d = c.next()) d = d.value, d.Cg = d.Cg.filter(function(e) {
                if (!e.includes("#")) return !0;
                if (!a.Fh) return !1;
                for (var f = e, g, h; h = Ph.exec(e);) g = h[0], h = h[1].replace(/^0*/, ""), h = String.fromCodePoint(parseInt(h, 16)), f = f.replace(g, h);
                f = f.replace(/\\/g, "");
                return a.Fh && f.includes(a.Fh)
            }).map(function(e) {
                return e.startsWith("(#") ? "" : e
            });
            return b.filter(function(e) {
                return 0 <
                    e.Cg.length
            })
        },
        Ph = /\\([0-9A-Fa-f]{1,6})\s?/g,
        Oh = B("cast.player.core.CaptionsStyler");
    var Qh = function() {
            this.ne = new ff
        },
        Rh = function(a) {
            return a.ne.Oa().map(function(b) {
                return Va(b)
            })
        };
    Qh.prototype.li = function(a, b) {
        a = new Uint8Array(a);
        239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3));
        a = escape(String.fromCharCode.apply(null, a));
        try {
            var c = decodeURIComponent(a)
        } catch (d) {
            throw Error("Decoding Error.");
        }
        return this.parse(c, b)
    };
    var Sh = function(a) {
        this.ne = new ff;
        this.Lf = 30;
        this.Jl = a
    };
    q(Sh, Qh);
    var Th = function(a, b) {
            a = n(a);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.localName == b) return c;
            return null
        },
        Wh = function(a, b) {
            var c = b.split(":");
            if (1 == c.length) {
                var d = 0;
                if (c = c[0].match(Uh)) switch (b = parseFloat(c[1]), c[2]) {
                    case "h":
                        d = 3600 * b;
                        break;
                    case "m":
                        d = 60 * b;
                        break;
                    case "s":
                        d = b;
                        break;
                    case "ms":
                        d = b / 1E3;
                        break;
                    case "f":
                        d = b / a.Lf
                } else C(Vh, "unsupported time expression: " + b);
                return d
            }
            d = 3600 * parseInt(c[0], 10) + 60 * parseInt(c[1], 10) + parseFloat(c[2]);
            4 == c.length && (d += parseInt(c[3], 10) / a.Lf);
            return d
        },
        Xh = function(a) {
            var b = "";
            a = n(a.childNodes);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, c.nodeType == Node.TEXT_NODE ? (c = c.textContent.trim()) && (b += c) : "span" == c.localName ? (b += Xh(c), (c = c.attributes.getNamedItem("tts:fontStyle")) && "italic" == c.value && (b = "<i>" + b + "</i>")) : "br" == c.localName && (b += "\n");
            return b
        };
    Sh.prototype.parse = function(a, b) {
        var c = [],
            d = (new DOMParser).parseFromString(a, "text/xml"),
            e = Th(d.childNodes, "tt");
        if (!e) return C(Vh, "missing tt"), c;
        var f = d = null,
            g = Th(e.childNodes, "head");
        if (g) {
            if (f = Th(g.childNodes, "styling")) {
                d = null;
                f = n(f.childNodes);
                for (var h = f.next(); !h.done; h = f.next())
                    if (h = h.value, "style" === h.nodeName && (h = Yh(h))) d = d || new Map, d.set(h.id, h.origin)
            } else d = null;
            f = d;
            if (h = Th(g.childNodes, "layout")) {
                g = null;
                h = n(h.childNodes);
                for (var l = h.next(); !l.done; l = h.next()) {
                    var m = l.value;

                    /*
                    if ("region" ==
                        m.nodeName && (l = m.attributes.getNamedItem("xml:id"))) {
                        var p = f,
                            u = null,
                            v = Yh(m);
                        v ? u = v.origin : p && (v = m.attributes.getNamedItem("style")) && (u = p.get(v.value));
                        if (p = u) g = g || new Map, m = m.attributes.getNamedItem("tts:textAlign"), g.set(l.value, {
                            align: m && m.value || "left",
                            origin: p
                        })
                    }
                    */

                   var p = f,
                   u = null,
                   v = Yh(m);
                   v ? u = v.origin : p && (v = m.attributes.getNamedItem("style")) && (u = p.get(v.value));

                }
                f = g
            } else f = null
        }
        g = Th(e.childNodes, "body");
        if (!g) return C(Vh, "missing body"), c;
        (h = e.attributes.getNamedItem("ttp:frameRate")) ? this.Lf = parseInt(h.value, 10): (C(Vh, "defaulting frameRate to30"), this.Lf = 30);
        h = Th(g.childNodes, "div");
        if (!h) return C(Vh,
            "missing div"), c;
        g = {};
        if (e = Th(e.childNodes, "head"))
            if (e = Th(e.childNodes, "metadata"))
                for (e = n(e.childNodes), l = e.next(); !l.done; l = e.next()) l = l.value, "image" == l.localName && (g["#" + l.attributes.getNamedItem("xml:id").value] = Xh(l));
        e = null;
        h.attributes && d && (l = h.attributes.getNamedItem("style")) && (e = d.get(l.value));
        h = n(h.childNodes);
        for (l = h.next(); !l.done; l = h.next()) {
            var w = l.value;
            if ("p" == w.localName && w.attributes) {
                var U = v = null;
                p = m = u = l = null;
                var V = Xh(w);
                w = n(w.attributes);
                for (var W = w.next(); !W.done; W = w.next()) switch (W =
                    W.value, W.localName) {
                    case "begin":
                        v = Wh(this, W.value) + b;
                        break;
                    case "end":
                        U = Wh(this, W.value) + b;
                        break;
                    case "backgroundImage":
                        g[W.value] && (l = g[W.value]);
                        break;
                    case "origin":
                        u = Zh(W.value);
                        break;
                    case "region":
                        m = W.value;
                        break;
                    case "style":
                        p = W.value
                }(V || l) && null !== v && null !== U ? (v = new VTTCue(v, U, V), this.Jl || (U = d, V = e, w = null, m && f && (w = f.get(m)) && w.align && (v.align = w.align), !u && p && U && (u = U.get(p)), u || (u = w && w.origin || V), u && (v.line = u.y, v.position = u.x, v.snapToLines = !1, "left" != v.align && "right" != v.align && (v.align = "left"))),
                    c.push({
                        Zd: v,
                        Kl: l
                    })) : C(Vh, "skipped cue begin=" + v + ", end=" + U + ", text=" + a)
            }
        }
        return c
    };
    var Zh = function(a) {
            if ("auto" === a) return null;
            a = a.split(" ");
            return 2 !== a.length ? (C(Vh, "Two numbers are expected in tts:origin"), null) : a.find(function(b) {
                return !b.includes("%")
            }) ? (C(Vh, "Only percentage value is supported in tts:origin"), null) : {
                x: parseInt(a[0], 10),
                y: parseInt(a[1], 10)
            }
        },
        Yh = function(a) {
            var b = a.attributes;
            if (!b) return null;
            var c = b.getNamedItem("xml:id");
            if (!c) return null;
            b = b.getNamedItem("tts:origin");
            if (!b) {
                a = n(a.childNodes);
                for (var d = a.next(); !d.done; d = a.next()) d = d.value, d.attributes &&
                    (b = d.attributes.getNamedItem("tts:origin"));
                if (!b) return null
            }
            return (b = Zh(b.value)) ? {
                id: c.value,
                origin: b
            } : null
        },
        Vh = B("cast.player.core.TtmlParser"),
        Uh = /([0-9]*\.?[0-9]+)?(h|ms|m|s|f)/;
    var $h = function() {
        Sh.apply(this, arguments)
    };
    q($h, Sh);
    $h.prototype.li = function(a, b) {
        a = N(a, 1835295092);
        if (!a) return [];
        a = Ag(new sg(L(a)));
        return Sh.prototype.li.call(this, a, b)
    };
    var ai = function() {
        this.ne = new ff;
        this.If = -1
    };
    q(ai, Qh);
    ai.prototype.parse = function(a, b) {
        this.If = -1;
        for (var c = a.trim().split(bi), d = 0, e = 0, f = n(c[0].split("\n")), g = f.next(); !g.done; g = f.next())
            if (g = g.value, 0 == g.indexOf("X-TIMESTAMP-MAP")) {
                (f = g.match(ci)) && (d = di(f[1]));
                (f = g.match(ei)) && (e = parseInt(f[1], 10) / 9E4);
                break
            }
        b += e - d;
        if (isNaN(b)) return C(fi, "invalid time offset"), [];
        d = [];
        c = n(c);
        for (e = c.next(); !e.done; e = c.next())
            if (e = e.value) {
                for (var h = b, l = null, m = null, p = null, u = null, v = g = f = null, w = 0, U = e.split("\n"), V = 0; V < U.length; V++) {
                    var W = U[V];
                    if (l = W.match(gi)) {
                        m = W.match(hi);
                        p = W.match(ii);
                        u = W.match(ji);
                        f = W.match(ki);
                        g = W.match(li);
                        0 < V && (v = U[V - 1]);
                        break
                    }
                    w++
                }
                l ? (V = di(l[1]), l = di(l[2]), w = U.slice(w + 1).join("\n"), isNaN(V) || isNaN(l) || !w ? (C(fi, "skipped cue, begin=" + V + ", end=" + l + ", text=" + w), f = null) : (h = new VTTCue(V + h, l + h, w), m && (h.align = m[1]), p && (h.snapToLines = "true" === p[1]), u && (m = parseInt(u[1], 10), !h.snapToLines && (100 < m || 0 > m) && (m = 100), h.line = m), f && (h.position = parseInt(f[1], 10)), g && (h.size = parseInt(g[1], 10)), f = {
                    Zd: h,
                    Fh: v
                })) : f = null;
                f && (-1 === this.If && (this.If = a.indexOf(e)), d.push(f))
            }
        mi(this,
            a);
        return d
    };
    var mi = function(a, b) {
            b = b.substring(0, a.If);
            b = b.replace(/::cue()/g, "::cue");
            a.ne.clear();
            for (var c, d; d = ni.exec(b);) 3 > d.length || (c = d[1].split(",").map(function(e) {
                e = e.trim();
                (e = e.substring(e.indexOf("(") + 1, e.lastIndexOf(")"))) && (e = "(" + e + ")");
                return e
            }), d = d[2].trim(), (d = hb(ef(d))) && a.ne.enqueue({
                Cg: c,
                rules: d
            }))
        },
        di = function(a) {
            var b = a.split(":");
            if (3 < b.length) return C(fi, "unexpected time format=" + a), 0;
            a = 0;
            b = n(b);
            for (var c = b.next(); !c.done; c = b.next()) a = 60 * a + parseFloat(c.value);
            return a
        },
        fi = B("cast.player.core.WebvttParser"),
        bi = /\n\s*\n/,
        ei = /MPEGTS:([\d]*)/,
        hi = /align:(start|middle|end|left|center|right)/,
        ii = /snapToLines:?(true|false)?/,
        ji = /line:(-*\d+)/,
        ki = /position:(\d*)%/,
        li = /size:(\d*)%/,
        ni = /(::cue[^{}]*)\s*\{([^\.{}]+)\}/g,
        ci = /LOCAL:((?:[\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3})/,
        gi = /((?:[\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3})[\t ]+--\x3e[\t ]+((?:[\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3})/;
    var oi = function(a, b, c, d) {
        z.call(this);
        this.a = b;
        this.pf = document.createElement("track");
        this.pf.src = b.url;
        this.pf.kind = "captions";
        this.a.mediaElement.appendChild(this.pf);
        this.Gb = this.pf.track;
        this.Gb.mode = void 0 !== d ? "showing" : "hidden";
        this.Af = a;
        this.ec = c;
        y("Cast.MPL.Captions", Ud(this.ec));
        this.zc = null;
        "ttml" === c ? this.zc = new Sh(this.a.ignoreTtmlPositionInfo) : "webvtt" === c ? this.zc = new ai : d && "application/mp4" === d && "stpp" === c && (this.zc = new $h(this.a.ignoreTtmlPositionInfo));
        this.kf = null;
        this.a.enableSideloadedTextTrackStyling &&
            (this.kf = new Lh(this.a.mediaElement, a, c));
        this.Ta = null;
        this.Rk = 0;
        this.qh = null
    };
    q(oi, z);
    oi.prototype.G = function() {
        pi(this);
        this.Gb.mode = "disabled";
        this.pf.remove();
        z.prototype.G.call(this)
    };
    var pi = function(a) {
        var b = a.Gb.cues;
        if (b)
            for (; 0 < b.length;) a.Gb.removeCue(b[0]);
        if (a.a.mediaElement.parentNode) {
            b = n(a.a.mediaElement.parentNode.getElementsByClassName("mpl_img_cap"));
            for (var c = b.next(); !c.done; c = b.next()) c.value.remove()
        }
        a.wd()
    };
    k = oi.prototype;
    k.createBuffer = function() {};
    k.reset = function() {
        pi(this);
        this.Ta = null
    };
    k.De = function() {
        return !0
    };
    k.xj = function() {
        return Infinity
    };
    k.append = function(a, b, c, d) {
        d && (this.Rk = b.time - c);
        if (this.zc) {
            var e = this.a.useRelativeCueTimestamps || "ttml" === this.ec ? b.time : this.Rk;
            c = qi(this);
            d = 0 < c.length ? c[c.length - 1].startTime : -Infinity;
            for (a = this.zc.li(a, e); 0 < a.length;) {
                e = a.pop();
                var f = e.Zd,
                    g = !1;
                if (f.startTime < d || .1 >= Math.abs(f.startTime - d))
                    for (var h = c.length - 1; 0 <= h; h--)
                        if (c[h].text == f.text && .1 >= Math.abs(c[h].startTime - f.startTime) && .1 >= Math.abs(c[h].endTime - f.endTime)) {
                            g = !0;
                            break
                        }
                g || this.addCue(e)
            }
        }
        this.Ta = b
    };
    k.$a = function(a) {
        return this.Ta ? this.Ta.time + this.Ta.duration - a : 0
    };
    var ri = function(a, b) {
        var c = b.Zd,
            d = a.a.mediaElement.parentNode;
        c.id = "cap-" + Date.now();
        c.onenter = function(e, f, g) {
            a.qh = e;
            if (null !== f) {
                var h = document.createElement("img");
                h.setAttribute("id", e.Zd.id);
                h.setAttribute("src", "data:image/png;base64," + f);
                h.setAttribute("class", "mpl_img_cap");
                h.style.position = "absolute";
                h.style.left = "0";
                h.style.bottom = "0";
                h.style.right = "0";
                h.style.margin = "0 auto";
                h.style.width = "100%";
                h.style.height = "100%";
                h.style.zIndex = 5;
                g.appendChild(h)
            }
            a.hf()
        }.bind(a, b, b.Kl || null, d);
        c.onexit =
            function(e) {
                a.qh = null;
                (e = document.getElementById(e.id)) && e.remove();
                a.wd()
            }.bind(a, c)
    };
    oi.prototype.hf = function() {
        this.kf && this.zc && this.kf.hf(Rh(this.zc), this.qh)
    };
    oi.prototype.wd = function() {
        this.kf && this.kf.wd()
    };
    oi.prototype.addCue = function(a) {
        if (this.a.onCue) this.a.onCue(this.ec);
        this.Gb.addCue(a.Zd);
        ri(this, a)
    };
    var qi = function(a) {
        for (var b = [], c = a.Gb.cues, d = a.Af.Tc(), e = 0; e < c.length;) {
            var f = c[e];
            f.endTime < d ? (a.Gb.removeCue(f), f.id && (f = document.getElementById(f.id)) && f.remove()) : (b.push(f), e++)
        }
        return b
    };
    oi.prototype.parse = function(a, b) {
        for (a = this.zc.parse(a, b); 0 < a.length;) this.addCue(a.pop())
    };
    var si = function() {};
    si.prototype.rg = function() {};
    x("cast.player.core.ProcessSourceDataCallback", si);
    var ti = function(a, b, c, d, e, f) {
        z.call(this);
        this.a = a;
        this.mm = e;
        this.bc = c;
        this.Ll = !c.codecsProvided;
        this.ga = d;
        this.N = b;
        this.be = !1;
        this.pa = this.Ta = this.Ac = null;
        this.ud = f;
        this.mc = new ff;
        this.Cd = 0;
        this.createBuffer();
        this.ia = null;
        this.jf = !0;
        this.jj = !1
    };
    q(ti, z);
    k = ti.prototype;
    k.G = function() {
        z.prototype.G.call(this);
        this.mc.clear();
        this.pa && (ec(this.pa, "updateend", this.mk, !1, this), this.jf && "closed" != this.ga.readyState && this.ga.removeSourceBuffer(this.pa))
    };
    k.createBuffer = function() {
        if (null === this.pa && "open" == this.ga.readyState) {
            var a = this.bc.mimeType + '; codecs="' + dg(this.bc.codecs) + '"',
                b = this.ud.findIndex(function(c) {
                    return c == a
                });
            if (0 > b) {
                try {
                    this.pa = this.ga.addSourceBuffer(a)
                } catch (c) {
                    throw this.a.T(110, void 0, c.message), c;
                }
                D(O, "create new source buffer " + a);
                this.ud.push(a)
            } else this.pa = this.ga.sourceBuffers[b], ui(this), this.a.mediaElement.currentTime = this.a.mediaElement.currentTime, D(O, "reuse source buffer index: " + b + ", mimetype: " + a);
            A(this.pa, "updateend",
                this.mk, !1, this);
            vi(this)
        }
    };
    k.$a = function(a) {
        var b = this.Cd + (this.Ac ? this.Ac.duration : 0);
        return this.Ta ? this.Ta.time + this.Ta.duration - a + b : b
    };
    k.reset = function() {
        this.Ac = this.Ta = null;
        this.mc.clear();
        this.Cd = 0;
        this.De() ? wi(this) : xi(this);
        this.De() ? yi(this) : (D(O, this.N + ": delay abort, push to deferred queue"), this.mc.enqueue({
            ji: 0,
            $g: null
        }))
    };
    k.De = function() {
        return null !== this.pa && !this.be && this.mc.Sa()
    };
    k.xj = function() {
        return Ld(this.bc.mimeType) ? 40 : 20
    };
    var vi = function(a) {
        for (; !a.mc.Sa();) {
            var b = hf(a.mc),
                c = b.$g;
            switch (b.ji) {
                case 2:
                    D(O, a.N + ": dequeue append");
                    a.Cd -= c.interval.duration;
                    zi(a, c.data, c.interval, c.U, c.Z, c.timescale);
                    return;
                case 1:
                    D(O, a.N + ": dequeue remove");
                    wi(a);
                    return;
                case 0:
                    D(O, a.N + ": dequeue abort"), yi(a)
            }
        }
    };
    ti.prototype.mk = function() {
        for (var a = this.pa.buffered, b = 0; b < a.length; b++) D(O, this.N + ": " + a.start(b) + " - " + a.end(b));
        D(O, this.N + ": updateend");
        null !== this.Ac && 0 != this.Ac.duration && (this.Ta = this.Ac);
        this.Ac = null;
        this.be = !1;
        vi(this)
    };
    var zi = function(a, b, c, d, e, f) {
            var g = a.pa.timestampOffset;
            if (e) {
                yi(a);
                var h = Ai(a, c.time);
                a.pa.timestampOffset = h - d;
                D(O, a.N + ": timestampOffset = " + a.pa.timestampOffset)
            } else h = Ai(a, c.time);
            a.be = !0;
            try {
                a.pa.appendBuffer(b)
            } catch (l) {
                D(O, a.N + ": append failed " + l);
                a.be = !1;
                e && (a.pa.timestampOffset = g);
                Bi(a, b, c, d, e, f);
                22 === l.code && Ci(a, 2);
                return
            }
            D(O, a.N + ": successfully append " + b.length + " bytes");
            Di(a, 2);
            a.Ac = {
                time: h,
                duration: c.duration
            };
            a.mm.rg(a.bc.mimeType, b, a.pa.timestampOffset, h, c.duration, f)
        },
        yi = function(a) {
            "open" ==
            a.ga.readyState ? (D(O, a.N + ": abort"), a.pa.abort()) : Ic(O, a.N + ": unable to abort")
        },
        wi = function(a) {
            D(O, a.N + ": remove");
            ui(a)
        },
        xi = function(a) {
            D(O, a.N + ": delay remove, push to deferred queue");
            a.mc.enqueue({
                ji: 1,
                $g: null
            });
            Ci(a, 1)
        };
    ti.prototype.append = function(a, b, c, d, e) {
        if (this.Ll && !this.jj) {
            var f = this.bc.mimeType;
            if (0 == Ja("/mp2t", f.substr(f.length - 5, 5))) {
                f = new Ih;
                for (f.ma(a); !f.Wf();) f.parse();
                f = f.qk ? f.kj : void 0
            } else f = !0;
            void 0 !== f && (this.jj = !0, f || va("Cast.MPL.RemoveDefaultAudioCodecs", !0))
        }
        this.De() ? zi(this, a, b, c, d, e) : Bi(this, a, b, c, d, e)
    };
    var Bi = function(a, b, c, d, e, f) {
            D(O, a.N + ": delay append, push to deferred queue");
            a.Cd += c.duration;
            a.mc.enqueue({
                ji: 2,
                $g: {
                    data: b,
                    interval: {
                        time: c.time,
                        duration: c.duration
                    },
                    U: d,
                    Z: e,
                    timescale: f
                }
            })
        },
        Ai = function(a, b) {
            if (!a.Ta || a.a.tj) return b;
            var c = b,
                d = a.pa.buffered;
            0 < d.length && (b = d.end(d.length - 1));
            D(O, a.N + ": adjustTime: " + c + " : " + b);
            return b
        },
        ui = function(a) {
            if (a.pa.updating) xi(a);
            else {
                a.be = !0;
                try {
                    a.pa.remove(0, Infinity), D(O, a.N + ": successfully removed all buffered data"), Di(a, 1)
                } catch (b) {
                    a.be = !1, D(O, a.N +
                        ": remove failed!"), b.message = "SourceBuffer error unrelated to SourceBuffer.updating", xi(a)
                }
            }
        },
        Ci = function(a, b) {
            if (null === a.ia) switch (b) {
                case 2:
                case 1:
                    a.ia = setTimeout(function() {
                        vi(a)
                    }, 2E3), D(O, a.N + ": set up timeout ID to processDeferred_ " + a.ia)
            }
        },
        Di = function(a, b) {
            if (null !== a.ia) switch (b) {
                case 2:
                case 1:
                    D(O, a.N + ": cleared timeout ID " + a.ia), clearTimeout(a.ia), a.ia = null
            }
        },
        O = B("cast.player.core.SourceBufferManager");
    var Ei = function(a, b) {
        oi.call(this, a, b, "webvtt");
        this.ra = B("cast.player.cea608.InbandCaptionsManager");
        this.aa = new Cg(this);
        this.aa.hg = 1;
        this.Ga = null;
        this.sa = 0;
        this.tb = null;
        this.zd = [];
        this.mg = this.hi.bind(this);
        this.ia = null;
        this.Pd = new ff
    };
    q(Ei, oi);
    Ei.prototype.G = function() {
        this.reset();
        oi.prototype.G.call(this)
    };
    Ei.prototype.hi = function() {
        if (this.Ga.Sa()) {
            var a = hf(this.Pd);
            this.sa != a.U && (this.aa.clear(), this.tb = null);
            this.sa = a.U;
            this.aa.sa = a.sl;
            this.Ga.ma(a.data);
            this.Ga.Fk(a.duration);
            a.timescale && this.Ga.Hk(a.timescale)
        }
        this.Ga.parse();
        if (this.Ga.Wf()) {
            this.aa.decode();
            if (0 < this.zd.length) {
                for (qi(this); 0 < this.zd.length;) a = this.zd.pop(), "number" !== typeof a.start || isNaN(a.start) || "number" !== typeof a.end || isNaN(a.end) || (a = new VTTCue(a.start, a.end, a.text), a.position = 20, a.align = "start", this.addCue({
                    Zd: a
                }));
                this.zd.length = 0
            }
            this.Ga.ma(null)
        }
        this.Pd.Sa() && this.Ga.Sa() ? this.ia = null : this.ia = setTimeout(this.mg, 20)
    };
    var Mg = function(a, b, c, d) {
        null !== a.tb && b < a.tb && (b = a.tb);.1 > c - b && (c = b + .1);
        a.tb = c;
        a.zd.push({
            start: b,
            end: c,
            text: d
        })
    };
    Ei.prototype.rg = function(a, b, c, d, e, f) {
        if (Md(a)) {
            if (!this.Ga) switch (a) {
                case "video/mp2t":
                    this.Ga = new Kh(this);
                    break;
                case "video/mp4":
                    this.Ga = new Hh(this);
                    break;
                default:
                    return
            }
            1 < this.Pd.Sc() ? C(this.ra, "Dropped segment") : (this.Pd.enqueue({
                data: b,
                duration: e,
                U: c,
                sl: "video/mp4" == a ? d : c,
                timescale: f
            }), D(this.ra, "Pending " + this.Pd.Sc()), null === this.ia && (this.ia = setTimeout(this.mg, 20)))
        }
    };
    Ei.prototype.reset = function() {
        oi.prototype.reset.call(this);
        this.sa = 0;
        this.tb = null;
        this.zd.length = 0;
        this.Ga && this.Ga.ma(null);
        this.aa.clear();
        this.Pd.clear();
        null !== this.ia && (clearTimeout(this.ia), this.ia = null)
    };
    var Fi = function(a) {
        E.call(this);
        this.Jb = null;
        this.ii = a
    };
    q(Fi, E);
    Fi.prototype.oh = function() {
        this.Jb && (this.Jb.onprogress = null);
        this.Jb = E.prototype.oh.call(this);
        this.Jb.onprogress = this.ii;
        return this.Jb
    };
    Fi.prototype.G = function() {
        this.Jb && (this.Jb.onprogress = null);
        E.prototype.G.call(this)
    };
    var Hi = function() {
        var a = Gi,
            b = this;
        return new gd(function(c, d) {
            var e = new Fi(function() {});
            A(e, "success", function(f) {
                c(Kd(f.target))
            }, !1, b);
            A(e, "error", d, !1, b);
            A(e, "timeout", d, !1, b);
            e.send(a)
        })
    };
    var Ii = function(a, b, c) {
            var d = t();
            this.clientId = a;
            this.blockIds = b;
            this.flags = c;
            this.timestamp = d
        },
        Ki = function() {
            var a = Ji();
            this.jh = a && a.clientId || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
        };
    Ki.prototype.fd = function(a) {
        va("Cast.MPL.ExperimentationFetchResult", !0);
        try {
            var b = JSON.parse(a.substring(5));
            var c = new Ie(b[0])
        } catch (g) {
            Li(this, "Failed to parse experimentation flags.");
            return
        }
        a = G(c, 1);
        b = Ce(c, Fe, 2);
        c = {};
        b = n(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = d.bb(),
                f = void 0;
            switch (te(d, Ae[0])) {
                case 2:
                    f = ve(d);
                    break;
                case 3:
                    f = G(d, 3);
                    break;
                case 4:
                    f = d.getFloatValue();
                    break;
                case 5:
                    f = ve(d)
            }
            c[e] = f
        }
        Mi("Cast.MPL.ExperimentationDownloadedBlockId", a);
        window.localStorage.setItem("cast.player.common.Experimentation",
            JSON.stringify(new Ii(this.jh, a, c)));
        D(Ni, "Flags: " + c.toString())
    };
    Ki.prototype.Tb = function() {
        va("Cast.MPL.ExperimentationFetchResult", !1);
        Li(this, "Failed to download experimentation flags.")
    };
    var Li = function(a, b) {
            C(Ni, b);
            window.localStorage.setItem("cast.player.common.Experimentation", JSON.stringify(new Ii(a.jh, [], {})))
        },
        Mi = function(a, b) {
            if (void 0 !== b && 0 < b.length) {
                b = n(b);
                for (var c = b.next(); !c.done; c = b.next()) y(a, c.value)
            }
        },
        Pi = function(a) {
            if (!Oi()) {
                var b = Ji();
                if (void 0 !== b && void 0 !== b.flags) return b.flags[a]
            }
        },
        Oi = function() {
            var a = Ji();
            if (void 0 === a || void 0 === a.timestamp) return !0;
            var b = t() - a.timestamp;
            a = a.flags.expirationHrs;
            "number" !== typeof a && (a = 3);
            return b > 36E5 * a
        },
        Ji = function() {
            var a =
                window.localStorage.getItem("cast.player.common.Experimentation");
            return a ? JSON.parse(a) : void 0
        };
    Ki.Jh = void 0;
    Ki.Dl = function() {
        return Ki.Jh ? Ki.Jh : Ki.Jh = new Ki
    };
    var Ni = B("cast.player.common.Experimentation"),
        Qi = Ki.Dl(),
        Ri = Oi();
    va("Cast.MPL.ExperimentationCheckExpired", Ri);
    if (Ri) {
        var Gi = "https://$Env$.google.com/cast/senderconfig/config?hw=mpl&id=$ClientId$".replace(/\$Env\$/g, "clients3").replace(/\$ClientId\$/g, Qi.jh.toString());
        Hi().then(Qi.fd.bind(Qi), Qi.Tb.bind(Qi))
    };
    var Si = function(a, b) {
        this.ea = a;
        this.we = [];
        for (var c = 0; c < a.length; c++) this.we.push(c);
        this.Wl = void 0 !== b ? b : 3;
        this.ef = {};
        this.Ad = this.we.slice()
    };
    Si.prototype.yj = function() {
        return 0
    };
    Si.prototype.Ni = function() {
        this.ef = {};
        this.Ad = this.we.slice()
    };
    Si.prototype.qf = function(a) {
        this.ef[a] || (this.ef[a] = 0);
        this.ef[a]++;
        this.ef[a] > (1 == this.Ad.length ? this.Wl : this.yj()) && (a = this.Ad.indexOf(a), -1 < a && this.Ad.splice(a, 1));
        return this.Ad
    };
    var Ti = function(a, b) {
        Si.call(this, a, b)
    };
    q(Ti, Si);
    Ti.prototype.qf = function(a, b) {
        for (var c = 0, d = this.ea[0], e = 1; e < this.ea.length; e++) this.ea[e] < d && (d = this.ea[e], c = e);
        if (!b || b && a == c) this.Ad = [c];
        return Si.prototype.qf.call(this, a, b)
    };
    var Ui = function(a, b) {
        Si.call(this, a, b);
        this.df = Array(this.ea.length);
        this.df.fill(0);
        a = Pi("numRetriesPerQualityLevel");
        this.Xl = "number" === typeof a ? a : 1;
        a = Pi("blacklistThreshold");
        this.yl = "number" === typeof a ? a : 6
    };
    q(Ui, Si);
    Ui.prototype.yj = function() {
        return this.Xl
    };
    Ui.prototype.Ni = function(a) {
        this.df[a] = 0;
        Si.prototype.Ni.call(this, a)
    };
    Ui.prototype.qf = function(a, b) {
        this.df[a] += 1;
        if (this.df[a] >= this.yl) {
            var c = this.we.indexOf(a); - 1 < c && this.we.splice(c, 1)
        }
        return Si.prototype.qf.call(this, a, b)
    };
    var Vi = function(a) {
        z.call(this);
        this.Em = a;
        this.Dh = this.od = null;
        this.Fb = 0;
        this.ui = null;
        this.Lb = 400;
        this.g = new Fi(function() {});
        A(this.g, "success", this.fd.bind(this));
        A(this.g, "error", this.Tb.bind(this));
        A(this.g, "timeout", this.fm.bind(this))
    };
    q(Vi, z);
    Vi.prototype.G = function() {
        this.g.L();
        z.prototype.G.call(this)
    };
    Vi.prototype.load = function(a) {
        (this.od = a.url) ? (this.Dh = a.headers, this.g.ge = a.withCredentials, this.g.dc = Math.max(0, a.timeoutInterval), this.Fb = 0, this.g.send(this.od, void 0, void 0, this.Dh)) : C(Qf, "No url provided for request")
    };
    Vi.prototype.abort = function() {
        this.g.abort()
    };
    var Wi = function(a) {
        return new Hf(a.od, a.g.Rb, Id(a.g), a.g.getAllResponseHeaders(), Kd(a.g))
    };
    Vi.prototype.fd = function(a) {
        clearTimeout(this.ui);
        this.Lb = 400;
        this.Wd(Kd(a.target))
    };
    Vi.prototype.Tb = function() {
        Xi(this, 408 == Id(this.g) ? 0 : this.Lb)
    };
    Vi.prototype.fm = function() {
        Xi(this, 0)
    };
    var Xi = function(a, b) {
        a.Fb++;
        clearTimeout(a.ui);
        3 < a.Fb ? a.Wd(null) : (1 < a.Fb && (a.Lb = 2 * b), a.ui = setTimeout(function() {
            a.g.send(a.od, void 0, void 0, a.Dh)
        }, b))
    };
    Vi.prototype.Wd = function(a) {
        this.Fb = 0;
        var b = this.g;
        this.Em.lg(a, b.Jb && b.Jb.responseURL ? b.Jb.responseURL : null)
    };
    var Yi = function(a) {
        Vi.call(this, a);
        this.B = this.a = null
    };
    q(Yi, Vi);
    Yi.prototype.Kd = function(a, b) {
        this.a = a;
        this.B = new Gf;
        this.B.url = this.od = b;
        this.B.setResponse = this.Wd.bind(this);
        a.updateManifestRequestInfo && a.updateManifestRequestInfo(this.B);
        this.B.skipRequest || this.load(this.B)
    };
    Yi.prototype.Wd = function(a) {
        var b = this;
        if (this.a && (a = og(this.a, a), Zd(a))) {
            a.then(function(c) {
                Vi.prototype.Wd.call(b, c)
            });
            return
        }
        Vi.prototype.Wd.call(this, a)
    };
    var Zi = function(a) {
            if (a[7] << 8 | 1 != a[6]) return C(Qf, "PlayReady header object is not valid"), null;
            var b = a[9] << 8 | a[8];
            b += 10;
            for (var c = "", d = 10; d < b; d += 2) c += String.fromCharCode(a[d + 1] << 8 | a[d]);
            d = b = null;
            c = (new DOMParser).parseFromString(c.trim(), "text/xml").childNodes[0].firstElementChild;
            c = n(c.children);
            for (var e = c.next(); !e.done; e = c.next()) e = e.value, "LA_URL" == e.nodeName ? d = e.textContent : "KID" == e.nodeName && (b = Yd(window.atob(e.textContent)));
            return b ? {
                systemId: Vf,
                ve: a,
                Je: new Uf(b, !0),
                url: d,
                cg: 8
            } : (C(Qf, "PlayReady rights management header does not have KID"),
                null)
        },
        P = function(a) {
            this.host = a;
            this.Cc = this.ad = this.uri = null;
            this.Nh = this.Lh = this.S = void 0;
            this.duration = -1;
            this.h = [];
            this.Ih = [];
            this.am = this.Kd.bind(this);
            this.ta = null;
            this.Ii = !1;
            this.ri = 1E4
        },
        aj = function(a) {
            var b = $i(a.h);
            b || (b = a.h.find(function(c) {
                return 1 == c.type && !Zf(c.codecs)
            }));
            b && (b.enabled = !0);
            a = n(a.h);
            for (b = a.next(); !b.done; b = a.next())
                if (b = b.value, 2 == b.type) {
                    b.enabled = !0;
                    break
                }
        },
        $i = function(a) {
            return a.find(function(b) {
                return 1 == b.type && Zf(b.codecs) && Yf("audio/mp4", b.codecs)
            })
        };
    k = P.prototype;
    k.getDefaultAudioStreamIndex = function() {
        for (var a = -1, b = 0; b < this.h.length; b++) {
            var c = this.h[b];
            if (1 == c.type && Yf("audio/mp4", c.codecs)) {
                if (Zf(c.codecs)) return b;
                0 > a && (a = b)
            }
        }
        return a
    };
    k.getStreamCount = function() {
        return this.h.length
    };
    k.enableStream = function(a, b) {
        var c = this.h[a];
        c.index = -1;
        c.X = -1;
        c.Z = !0;
        c.enabled = b;
        c.Wa = !1;
        this.Ih[a] = []
    };
    k.isStreamEnabled = function(a) {
        return this.h[a].enabled
    };
    k.getQualityLevel = function(a) {
        return this.h[a].X
    };
    k.getStreamInfo = function(a) {
        a = this.h[a];
        for (var b = [], c = n(a.v), d = c.next(); !d.done; d = c.next()) b.push(d.value.bitrate);
        return new If(a.codecs, a.mimeType, b, a.language, a.name, a.role, void 0, !0)
    };
    k.lg = function(a, b) {
        if (a) {
            b && (this.uri = new H(b));
            b = null !== this.ta;
            var c = this.h;
            this.h = [];
            this.mi(a);
            this.Pi();
            this.Ii && (this.ta = setTimeout(this.am, this.ri));
            if (b) bj(this, c), this.Cc.nd();
            else {
                aj(this);
                if (this.host.onManifestReady) this.host.onManifestReady();
                this.Cc.onManifestReady()
            }
        } else this.si()
    };
    k.si = function() {};
    k.Eb = function() {};
    k.mi = function() {};
    k.Pi = function() {};
    var bj = function(a, b) {
            for (var c = a.host.mediaElement.paused, d = {}, e = 0; e < b.length; d = {
                    nb: d.nb
                }, e++) {
                d.nb = b[e];
                var f = a.h[e];
                if (f.name !== d.nb.name) {
                    D(P.ra, "The order of adaptations in manifest changes.");
                    f = e;
                    var g = a.h.findIndex(function(v) {
                        return function(w) {
                            return w.name == v.nb.name
                        }
                    }(d));
                    if (0 > g) {
                        a.Eb("New manifest has content out of sync. Continue with old one.");
                        a.h = b;
                        break
                    }
                    var h = a.h[f];
                    a.h[f] = a.h[g];
                    a.h[g] = h;
                    f = a.h[f]
                }
                f.enabled = d.nb.enabled;
                f.X = d.nb.X;
                f.Wa = d.nb.Wa;
                g = [];
                h = !0;
                for (var l = d.nb.index, m = 0; m <
                    f.v.length; m++) {
                    var p = d.nb.v[m],
                        u = f.v[m];
                    u.U = p.U;
                    g[m] = cj(p, u, l, c);
                    if (!g[m]) {
                        h = !1;
                        C(P.ra, "Old and new representations are out of sync.");
                        break
                    }
                }
                if (!(0 > l))
                    if (h) {
                        for (h = 0; h < f.v.length; h++) f.v[h].c = g[h].c, f.v[h].I = g[h].I;
                        f.Z = d.nb.Z;
                        f.index = g[0].index
                    } else f.Z = !0, f.index = 0
            }
        },
        cj = function(a, b, c, d) {
            if ("number" !== typeof a.I || "number" !== typeof b.I) var e = null;
            else e = a.I + c - b.I, e = 0 < e ? {
                c: b.c,
                index: e,
                I: b.I
            } : {
                c: a.c.slice(c, b.I - a.I).concat(b.c),
                index: 0,
                I: a.I + c
            };
            if (e) a = e;
            else {
                e = {
                    c: [],
                    index: 0,
                    I: b.I
                };
                var f = b.c[0];
                0 <=
                    c && f.time < a.c[c].time ? (e.c = b.c, e.index = dj(a.c[c].time, b.c), a = e) : (f = dj(f.time, a.c), -1 == f ? a = null : (c > f ? (e.c = b.c, e.index = c - f) : (e.c = d ? b.c : a.c.slice(c, f).concat(b.c), e.index = 0, "number" !== typeof b.I || d || (e.I -= f - c)), a = e))
            }
            return a
        },
        dj = function(a, b) {
            for (var c = .5 * b[0].duration, d = 0; d < b.length; d++)
                if (Math.abs(b[d].time - a) <= c) return d;
            return -1
        };
    k = P.prototype;
    k.load = function(a) {
        this.Cc = a;
        this.Kd()
    };
    k.Kd = function() {
        var a = this.host.url;
        this.uri = new H(a);
        this.ad = new Yi(this);
        this.ad.Kd(this.host, a)
    };
    k.Ic = function() {
        this.ad && (this.ad.L(), this.ad = null);
        null !== this.ta && (clearTimeout(this.ta), this.ta = null)
    };
    k.Gg = function(a, b, c) {
        a = this.h[a];
        a.X = b;
        a.Wa = !0;
        ej(c)
    };
    k.updateLicenseRequestInfo = function() {};
    k.getDuration = function() {
        return this.S ? -1 : this.duration
    };
    k.Ba = function(a) {
        a = this.h[a];
        var b = a.X;
        if (0 > b) return null;
        a = a.v[b];
        var c = a.c;
        if (0 == c.length) return null;
        b = c[0].time;
        var d = c.length - 1;
        c = c[d].time + c[d].duration;
        this.S && (c -= 20, c < b && (c = b));
        return {
            start: b - a.U,
            end: c - a.U
        }
    };
    k.seek = function(a, b) {
        var c = this.h[a],
            d = c.v[c.X],
            e = d.c;
        a = this.Ba(a);
        if (!a) return null;
        b < a.start && (b = a.start);
        b > a.end && (b = a.end);
        b += d.U;
        for (a = e.length - 1; 0 <= a; a--)
            if (b >= e[a].time) return c.index = a, c.Wa = !0, b - d.U;
        return null
    };
    k.tc = function(a) {
        a = this.h[a];
        var b = a.index + 1;
        return b < a.v[a.X].c.length ? (a.index = b, !0) : !1
    };
    k.isLiveStream = function() {
        return this.S || !1
    };
    k.isEventStream = function() {
        return this.Lh || !1
    };
    k.isLiveSeekableRangeMovingWindow = function() {
        return this.Nh
    };
    k.isLiveDone = function() {};
    k.rc = function(a) {
        var b = this.h[a];
        a = b.index;
        b = b.v[b.X].c;
        return !this.S && a == b.length - 1
    };
    k.getSegmentInterval = function(a) {
        var b = this.h[a],
            c = b.X;
        return 0 <= c && (a = b.index, 0 <= a && (b = b.v[c], c = b.c, a < c.length)) ? {
            time: c[a].time - b.U,
            duration: c[a].duration
        } : {
            time: 0,
            duration: 0
        }
    };
    k.reset = function(a) {
        this.h[a].index = -1
    };
    k.Md = function(a) {
        a = this.h[a];
        var b = a.v[a.X];
        null !== b.yb || null !== b.D && null !== b.D.ma || (a.Wa = !1);
        return a.Wa
    };
    k.Fg = function(a, b) {
        this.h[a].Wa = !1;
        262144 < b.length ? C(fj, "init data (" + b.length + " bytes) is too large to cache") : this.Ih[a][this.h[a].X] = b
    };
    k.se = function(a) {
        var b = this.h[a];
        var c = this.Ih[a];
        return (b = b && c ? c[b.X] || null : null) ? (this.h[a].Wa = !1, b) : null
    };
    k.Mf = function() {
        return null
    };
    k.updateSegmentRequestInfo = function(a, b) {
        b.interval = this.getSegmentInterval(a)
    };
    k.processSegment = function() {};
    k.Nf = function() {
        return 0
    };
    var gj = function(a, b) {
        void 0 === a.S && va("Cast.MPL.Live", b);
        a.S = b
    };
    P.prototype.getStreamInfo = P.prototype.getStreamInfo;
    P.prototype.getQualityLevel = P.prototype.getQualityLevel;
    P.prototype.isStreamEnabled = P.prototype.isStreamEnabled;
    P.prototype.enableStream = P.prototype.enableStream;
    P.prototype.getStreamCount = P.prototype.getStreamCount;
    P.prototype.getDefaultAudioStreamIndex = P.prototype.getDefaultAudioStreamIndex;
    var fj = B("cast.player.comon.StreamingProtocolBase");
    var Q = function(a, b) {
        this.jl = a;
        this.ce = b ? b : null;
        this.b = null
    };
    Q.prototype.l = function(a) {
        var b = fh(a).length;
        this.b = a;
        this.Vi();
        this.A();
        a = fh(a).length - b;
        this.b.buffer.set([a >> 24, a >> 16, a >> 8, a], b)
    };
    Q.prototype.Vi = function() {
        this.b.j(0);
        this.b.j(this.jl);
        this.ce && K(this.b, this.ce.md())
    };
    Q.prototype.A = function() {
        throw Error("writeBody() should be  overriden.");
    };
    var R = function(a, b, c) {
        Q.call(this, a);
        this.ka = b;
        this.nc = c
    };
    q(R, Q);
    R.prototype.Vi = function() {
        Q.prototype.Vi.call(this);
        this.b.j(this.ka << 24 | this.nc & 16777215)
    };
    var hj = function(a) {
        R.call(this, 1935763823, 0, 0);
        this.C = a
    };
    q(hj, R);
    hj.prototype.A = function() {
        this.b.j(1);
        this.b.j(this.C)
    };
    var ij = function(a) {
        R.call(this, 1952867444, 1, 0);
        this.ke = a
    };
    q(ij, R);
    ij.prototype.A = function() {
        this.b.Wi(this.ke)
    };
    var jj = function(a, b) {
        R.call(this, 1935763834, 0, 0);
        this.sj = a;
        this.Bk = b
    };
    q(jj, R);
    jj.prototype.A = function() {
        this.b.Ug(this.sj);
        this.b.j(this.Bk.length);
        0 == this.sj && K(this.b, this.Bk)
    };
    var kj = function(a, b) {
        R.call(this, 1702061171, 0, 0);
        this.Zl = a;
        this.le = b
    };
    q(kj, R);
    kj.prototype.A = function() {
        K(this.b, [3, 25, 0, 1, 0, 4, 17, this.Zl, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, this.le[0], this.le[1]])
    };
    var lj = function(a, b) {
        Q.call(this, 1635148611);
        this.Lk = a;
        this.sk = b
    };
    q(lj, Q);
    lj.prototype.A = function() {
        K(this.b, [1, 77, 64, 30, 255, 225]);
        this.b.rd(this.Lk.length);
        K(this.b, this.Lk);
        this.b.Ug(1);
        this.b.rd(this.sk.length);
        K(this.b, this.sk)
    };
    var mj = function() {
        R.call(this, 1937011571, 0, 0)
    };
    q(mj, R);
    mj.prototype.A = function() {
        this.b.j(0)
    };
    var nj = function(a, b, c) {
        R.call(this, 1952804451, 0, 1);
        this.xl = c ? 0 : a;
        this.wl = b;
        this.rj = c
    };
    q(nj, R);
    nj.prototype.A = function() {
        this.b.j(256 | this.xl);
        K(this.b, this.wl.md());
        this.rj && (this.b.Ug(16), K(this.b, this.rj))
    };
    var oj = function(a) {
        R.call(this, 1936027235, 0, 2);
        this.wi = a
    };
    q(oj, R);
    oj.prototype.A = function() {
        this.b.j(this.wi.length);
        for (var a = 0; a < this.wi.length; a++) {
            var b = this.wi[a].Nk;
            this.b.rd(b.length);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                this.b.rd(d.eh);
                this.b.j(d.fh)
            }
        }
    };
    var pj = function(a, b) {
        R.call(this, 1935894637, 0, 0);
        this.um = a;
        this.vm = b
    };
    q(pj, R);
    pj.prototype.A = function() {
        this.b.j(this.um);
        this.b.j(this.vm)
    };
    var qj = function(a) {
        Q.call(this, 1718775137);
        this.tl = a
    };
    q(qj, Q);
    qj.prototype.A = function() {
        this.b.j(this.tl)
    };
    var rj = function(a) {
        R.call(this, 1751411826, 0, 0);
        this.Hl = a
    };
    q(rj, R);
    rj.prototype.A = function() {
        this.b.j(0);
        this.b.j(this.Hl);
        K(this.b, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    };
    var sj = function(a) {
        R.call(this, 1835296868, 0, 0);
        this.Ya = a
    };
    q(sj, R);
    sj.prototype.A = function() {
        this.b.j(0);
        this.b.j(0);
        this.b.j(this.Ya);
        this.b.j(0);
        K(this.b, [85, 196, 0, 0])
    };
    var tj = function(a, b) {
        R.call(this, 1953196132, 0, 3);
        this.Jm = a;
        this.Il = b
    };
    q(tj, R);
    tj.prototype.A = function() {
        this.b.j(0);
        this.b.j(0);
        K(this.b, [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0]);
        this.b.j(this.Jm << 16);
        this.b.j(this.Il << 16)
    };
    var uj = function(a) {
        R.call(this, 1953654136, 0, 0);
        this.Ml = a
    };
    q(uj, R);
    uj.prototype.A = function() {
        var a = 65536;
        this.Ml && (a &= -65537);
        K(this.b, [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        this.b.j(a)
    };
    var vj = function(a, b) {
        R.call(this, 1886614376, 0, 0);
        this.Ki = a;
        this.xb = b
    };
    q(vj, R);
    vj.prototype.A = function() {
        K(this.b, this.Ki.md());
        this.b.j(this.xb.length);
        K(this.b, this.xb)
    };
    var wj = function(a) {
        R.call(this, 1836476516, 0, 0);
        this.Ya = a
    };
    q(wj, R);
    wj.prototype.A = function() {
        this.b.j(0);
        this.b.j(0);
        this.b.j(this.Ya);
        K(this.b, [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2])
    };
    var xj = function(a) {
        R.call(this, 1952868452, 0, 8);
        this.lc = a
    };
    q(xj, R);
    xj.prototype.A = function() {
        this.b.j(1);
        this.b.j(this.lc)
    };
    var yj = function(a) {
        R.call(this, 1953658222, 0, 513);
        this.yi = a
    };
    q(yj, R);
    yj.prototype.A = function() {
        this.b.j(this.yi.length);
        this.b.j(0);
        for (var a = 0; a < this.yi.length; a++) this.b.j(this.yi[a].length)
    };
    var zj = function(a) {
        R.call(this, 1835427940, 0, 0);
        this.Ec = a
    };
    q(zj, R);
    zj.prototype.A = function() {
        this.b.j(this.Ec)
    };
    var Aj = function(a) {
        Q.call(this, 1835295092);
        this.oj = a
    };
    q(Aj, Q);
    Aj.prototype.A = function() {
        for (var a = 0; a < this.oj.length; a++) K(this.b, this.oj[a])
    };
    var Cj = function(a) {
        var b = new Uint8Array(2 + a.length);
        b[1] = 1;
        Yd(a, b, 2);
        vj.call(this, Bj, b)
    };
    q(Cj, vj);
    var Bj = new Uf([43, 248, 102, 128, 198, 229, 78, 36, 190, 35, 15, 129, 90, 96, 110, 178]);
    var Dj = function(a, b, c, d) {
        z.call(this);
        this.a = a;
        this.H = b;
        this.Pl = d;
        this.xb = c;
        this.o = this.Nj = null;
        this.Qb = "none";
        this.Og = this.Ng = this.vc = null;
        this.Rg = !1;
        this.g = new E;
        zd(this.g);
        A(this.g, "success", this.fd, !1, this);
        A(this.g, "error", this.Tb, !1, this)
    };
    q(Dj, z);
    Dj.prototype.G = function() {
        this.o && (this.vc && ec(this.vc, "message", this.bk, !1, this), this.o = null);
        this.vc && (this.vc.close(), this.vc = null);
        this.g.L();
        z.prototype.G.call(this)
    };
    Dj.prototype.createSession = function(a) {
        D(Ej, "create session");
        this.Og = t();
        var b = this.a.licenseCustomData;
        if (b) {
            var c = new gh(this.xb.length + b.length + 34);
            K(c, this.xb);
            (new Cj(b)).l(c);
            b = fh(c)
        } else b = this.xb;
        this.o = this.a.mediaElement;
        this.Qb = a;
        this.vc = a = this.o.mediaKeys.createSession();
        A(this.vc, "message", this.bk, !1, this);
        a.generateRequest("cenc", b.buffer).catch(this.$j.bind(this))
    };
    Dj.prototype.fd = function(a) {
        D(Ej, "xhr success");
        var b = this.Ng;
        null !== b && (b = t() - b, y("Cast.MPL.LicenseReq.ServerLatency", b));
        this.Ng = null;
        this.Aj(Kd(a.target))
    };
    Dj.prototype.Aj = function(a) {
        var b = this;
        if (a) {
            a = new Uint8Array(a);
            if (this.a.processLicense && (a = this.a.processLicense(a), Zd(a))) {
                a.then(function(c) {
                    Fj(b, c)
                });
                return
            }
            Fj(this, a)
        } else this.a.T(201, void 0)
    };
    var Fj = function(a, b) {
        a.Rg = !0;
        a.vc.update(b.buffer).then(function() {
            a.Rg = !1;
            var c = a.Pl;
            D(Gj, "key session ended: " + c.kd);
            8 < c.La.length ? c.La.shift().L() : c.kd++;
            c.kd < c.La.length && c.La[c.kd].createSession(c.Qb)
        }, function(c) {
            a.Rg = !1;
            a.$j(c)
        })
    };
    k = Dj.prototype;
    k.Tb = function() {
        D(Ej, "xhr error");
        var a = new Hf(String(this.g.Le), this.g.Rb, Id(this.g), this.g.getAllResponseHeaders(), Kd(this.g));
        this.a.T(201, a)
    };
    k.bk = function(a) {
        D(Ej, "message");
        this.Nj = new Uint8Array(a.Qc.message);
        this.a.prepareLicenseRequest && !this.a.prepareLicenseRequest() || this.Gc()
    };
    k.$j = function(a) {
        D(Ej, "keyerror " + a);
        this.a.T(202)
    };
    k.Gc = function() {
        var a = new Gf;
        a.timeoutInterval = 18E4;
        a.protectionSystem = this.Qb;
        a.content = this.Nj;
        a.setResponse = this.Aj.bind(this);
        this.H.updateLicenseRequestInfo(a);
        this.a.licenseUrl && (a.url = this.a.licenseUrl);
        if (!a.url && this.xb && "playready" == this.Qb) {
            var b = new xh(this.xb);
            if (b = Zi(b.getData())) a.url = b.url
        }
        if (this.a.updateLicenseRequestInfo && (this.a.updateLicenseRequestInfo(a), a.skipRequest)) return;
        this.g.ge = a.withCredentials;
        this.g.dc = Math.max(0, a.timeoutInterval);
        this.g.send(a.url, "POST", a.content,
            a.headers);
        a = this.Og;
        null !== a && (a = t() - a, y("Cast.MPL.LicenseReq.GenLatency", a));
        this.Og = null;
        this.Ng = t()
    };
    k.Ae = function() {
        return null !== this.Og || null !== this.Ng || this.Rg
    };
    var Ej = B("cast.player.core.MediaKeySession");
    var Ij = function(a, b, c, d, e) {
        z.call(this);
        this.a = a;
        this.H = b;
        this.La = [];
        this.kd = 0;
        this.Qb = null;
        A(this.a.mediaElement, "encrypted", this.Yj, !1, this);
        c && 0 < c.length && (a.protectionSystem && (c.includes(a.protectionSystem) ? c.splice(0, 0, c.splice(c.indexOf(a.protectionSystem), 1)[0]) : C(Gj, "Preferred protection system not found")), Hj(this, {
            Sh: c,
            dg: 0,
            el: d,
            Im: e
        }))
    };
    q(Ij, z);
    Ij.prototype.G = function() {
        ec(this.a.mediaElement, "encrypted", this.Yj, !1, this);
        for (var a = n(this.La), b = a.next(); !b.done; b = a.next()) b.value.L();
        this.La.length = 0;
        z.prototype.G.call(this)
    };
    var Hj = function(a, b) {
            Jj(a, b).catch(function(c) {
                b.dg++;
                b.dg < b.Sh.length ? Hj(a, b) : (Ic(Gj, c.toString()), C(Gj, "unsupported protection system"), a.a.T(202))
            })
        },
        Jj = function(a, b) {
            var c = b.Sh[b.dg];
            b = Kj(b);
            return navigator.requestMediaKeySystemAccess(Pf[c], [b]).then(function(d) {
                return d.createMediaKeys()
            }).then(function(d) {
                var e = a.a.mediaElement.setMediaKeys(d);
                return a.a.emeServerCertificate && a.a.emeServerCertificate.length ? d.setServerCertificate(a.a.emeServerCertificate).then(function(f) {
                    f || C(Gj, "Server certificates are not supported by the keysystem. The server certificate has been ignored.");
                    return e
                }, function(f) {
                    Ic(Gj, "Invalid server certificate provided. " + f.toString());
                    return Promise.reject(f)
                }) : e
            }).then(function() {
                a.Qb = c;
                Xd(a.Qb, a.H.Nf());
                0 < a.La.length && a.La[0].createSession(c);
                return Promise.resolve()
            })
        };
    Ij.prototype.Yj = function(a) {
        a = a.Qc;
        D(Gj, "onencrypted: " + this.kd);
        (a = a.initData) ? this.createSession(new Uint8Array(a)): D(Gj, "invalid init data")
    };
    var Lj = function(a, b) {
        return a.La.some(function(c) {
            a: if (b.length != c.xb.length) c = !1;
                else {
                    for (var d = b.length, e = 0; e < d; e++)
                        if (b[e] != c.xb[e]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }return c
        })
    };
    Ij.prototype.createSession = function(a) {
        Lj(this, a) || (a = new Dj(this.a, this.H, a, this), this.Qb && this.kd == this.La.length && a.createSession(this.Qb), this.La.push(a))
    };
    Ij.prototype.Gc = function() {
        this.La[this.kd].Gc()
    };
    Ij.prototype.Ae = function() {
        return this.La.some(function(a) {
            return a.Ae()
        })
    };
    var Kj = function(a) {
            var b = a.Sh[a.dg],
                c = {
                    initDataTypes: ["cenc"]
                },
                d = a.el || "";
            a = a.Im || "";
            d = d.replace("video/mp2t", "audio/mp4");
            a = a.replace("video/mp2t", "video/mp4");
            d && (c.audioCapabilities = [{
                contentType: d,
                robustness: Mj[b] || ""
            }]);
            a && (c.videoCapabilities = [{
                contentType: a,
                robustness: Nj[b] || ""
            }]);
            return c
        },
        Oj = {},
        Mj = (Oj.widevine = "HW_SECURE_CRYPTO", Oj),
        Pj = {},
        Nj = (Pj.widevine = "HW_SECURE_ALL", Pj),
        Gj = B("cast.player.core.MediaKeysManager");
    var Sj = function(a, b, c, d) {
        this.a = a;
        this.N = b;
        this.ea = c;
        a = this.a.initialBandwidth;
        3145728 == this.a.initialBandwidth && (a = parseFloat(window.localStorage.getItem("cast.player.core.QualityManager.currentBandwidth")), a = "number" === typeof a && a > this.a.initialBandwidth ? a : this.a.initialBandwidth);
        this.ic = a;
        this.Pc = Qj(this, this.ic);
        D(Rj, this.N + ": initial " + this.ea[this.Pc]);
        this.sg = 0;
        this.Pg = null;
        this.Pj = t();
        this.Ul = d;
        a = this.ea;
        d = Td(d);
        if (void 0 !== d)
            for (y("Cast.MPL.Available" + d + "Bitrates", a.length), b = 0; b < a.length; b++) y("Cast.MPL.Available" +
                d + "Bitrate" + b, a[b])
    };
    Sj.prototype.L = function() {
        Tj(this)
    };
    var Qj = function(a, b, c) {
            for (var d = -1, e = Number.MAX_VALUE, f = void 0 !== c ? c[0] : 0, g = 0; g < a.ea.length; g++)
                if (void 0 === c || -1 !== c.indexOf(g)) {
                    if (b >= a.ea[g]) {
                        var h = b - a.ea[g];
                        h < e && (d = g, e = h)
                    }
                    a.ea[f] > a.ea[g] && (f = g)
                }
            return 0 > d ? f : d
        },
        Vj = function(a, b) {
            3E5 > t() - a.Pj || (y("Cast.MPL.Bandwidth", b), Uj || window.localStorage.setItem("cast.player.core.QualityManager.currentBandwidth", "" + b), Tj(a))
        },
        Tj = function(a) {
            var b = t(),
                c = Td(a.Ul);
            void 0 !== c && y("Cast.MPL." + c + "Bitrate", a.ea[a.Pc]);
            a.Pj = b
        },
        Rj = B("cast.player.core.QualityManager"),
        Uj = document.domain.includes("gstatic.com");
    var Wj = function(a, b, c, d, e, f, g, h) {
        z.call(this);
        this.oa = a;
        this.host = b;
        this.protocol = c;
        this.Cf = f;
        this.M = d;
        c = this.protocol.getStreamInfo(d);
        this.Fa = Sf(c) ? new oi(a, b, c.codecs, c.mimeType) : new ti(b, d, c, e, a, h);
        Sf(c) && this.oa.Gk(this.Fa);
        Wd(c.codecs);
        y("Cast.MPL.MimeType", Qd[c.mimeType] || 0);
        y("Cast.MPL.StreamType", Ld(c.mimeType) ? 1 : Md(c.mimeType) ? 2 : Sf(c) ? 3 : 0);
        this.Zf = !1;
        this.f = 1;
        this.wg = 0;
        this.Yd = !1;
        this.Xi = this.Fb = 0;
        this.Lb = 400;
        this.Xc = this.Yc = this.Id = this.$f = !1;
        this.Oj = this.ah = 0;
        this.rb = new ff;
        this.B = new Gf;
        this.B.setResponse = this.rm.bind(this);
        this.g = new Fi(this.ii.bind(this));
        zd(this.g);
        A(this.g, "success", this.fd, !1, this);
        A(this.g, "error", this.Tb.bind(this, !1));
        A(this.g, "timeout", this.Tb.bind(this, !0));
        A(this.g, "ready", this.em, !1, this);
        a = this.protocol.getStreamInfo(this.M).bitrates;
        this.ff = new Sj(b, d, a, c.mimeType);
        this.Xd = null;
        (b = g) || (b = this.host.segmentRequestRetryLimit, b = Pi("simpleFailOver") ? new Ui(a, b) : new Ti(a, b));
        this.vj = b
    };
    q(Wj, z);
    var Xj = function(a) {
        void 0 !== a.Fa.jf && (a.Fa.jf = !1);
        z.prototype.L.call(a)
    };
    Wj.prototype.L = function() {
        void 0 !== this.Fa.jf && (this.Fa.jf = !0);
        z.prototype.L.call(this)
    };
    Wj.prototype.G = function() {
        clearTimeout(this.Xd);
        this.Xd = null;
        this.Fa.L();
        this.ff.L();
        this.g.L();
        z.prototype.G.call(this)
    };
    Wj.prototype.rm = function(a, b) {
        a ? Yj(this, {
            Hd: this.Xc,
            data: new Uint8Array(a),
            interval: this.B.interval,
            Ud: this.B.Ud
        }, b) : this.Tb(!1);
        this.$f = !1;
        this.Id && (Zj(this), this.Id = !1)
    };
    var ak = function(a, b, c, d) {
            var e = a.ff;
            var f = t();
            if (b || null === e.Pg || !(f - e.Pg < 2E3 * (c || 0))) {
                e.Pg = f;
                b = Qj(e, .7 * e.ic, d);
                if (e.a.getQualityLevel) {
                    if (1 !== e.ea.length || 0 !== e.ea[0]) b = e.a.getQualityLevel(e.N, b, e.Pc, e.ea);
                    b >= e.ea.length && (C(Rj, e.N + ": Host provided an invalid quality level!"), b = e.ea.length - 1)
                }
                b != e.Pc && (D(Rj, e.N + ": from " + e.ea[e.Pc] + " to " + e.ea[b]), Tj(e), e.Pc = b)
            }
            e = e.Pc;
            b = a.protocol.getQualityLevel(a.M);
            e == b ? a = !1 : (a.Zf = !0, a.protocol.Gg(a.M, e, a, a.oa), a = !0);
            return a
        },
        dk = function(a, b, c, d, e, f, g) {
            g && bk(a,
                b, c.time);
            if (a.Yc) {
                D(ck, a.M + ": segment processed");
                a.Yc = !1;
                if (a.host.processSegment) {
                    g = a.host.processSegment(a.M, b);
                    if (Zd(g)) {
                        g.then(function(h) {
                            h instanceof Uint8Array && (b = h);
                            a.Fa.append(b, c, d, e, f);
                            a.qg()
                        });
                        return
                    }
                    g instanceof Uint8Array && (b = g)
                }
                a.Fa.append(b, c, d, e, f)
            } else D(ck, a.M + ": not processing");
            a.qg()
        },
        gk = function(a, b) {
            a.Yc ? ek(a, b, "processing previous segment") : a.rb.Sa() ? fk(a, b) ? a.Ye(b) : (ek(a, b, "segment duration will go beyond buffer limit"), a.Xd = setTimeout(a.qg.bind(a), 1E3)) : ek(a, b, "queue has " +
                a.rb.Sc() + " segments")
        },
        ek = function(a, b, c) {
            D(ck, a.M + ": queue segment (" + b.data.length + ") as " + c);
            a.rb.enqueue(b)
        };
    Wj.prototype.qg = function() {
        if (!this.Yc && !this.rb.Sa()) {
            var a = jf(this.rb);
            fk(this, a) ? (D(ck, this.M + ": dequeue segment"), hf(this.rb), this.Ye(a)) : (D(ck, this.M + ": delay process downloaded segment"), this.Xd = setTimeout(this.qg.bind(this), 1E3))
        }
    };
    var fk = function(a, b) {
        var c = a.$a(a.oa.Tc());
        return c <= a.host.autoPauseDuration ? !0 : c + b.interval.duration <= a.Fa.xj()
    };
    Wj.prototype.Ye = function(a) {
        D(ck, this.M + ": process segment");
        this.Yc = !0;
        this.protocol.processSegment(this.M, a, this)
    };
    Wj.prototype.reset = function() {
        D(ck, this.M + ": reset");
        this.f = 1;
        this.wg = 0;
        this.Yd = !1;
        hk(this);
        this.Yc = this.Id = !1;
        this.rb.clear();
        clearTimeout(this.Xd);
        this.Xd = null;
        this.Xc || this.g.abort();
        this.protocol.reset(this.M);
        this.Fa.reset();
        this.oa.ed()
    };
    Wj.prototype.fd = function(a) {
        var b = this.protocol.getQualityLevel(this.M);
        this.vj.Ni(b);
        Yj(this, {
            Hd: this.Xc,
            headers: this.g.getAllResponseHeaders(),
            data: new Uint8Array(Kd(a.target)),
            interval: this.B.interval,
            Ud: this.B.Ud
        })
    };
    var Yj = function(a, b, c) {
        var d = a.ff;
        c = void 0 !== c ? c : Date.now() - a.wg;
        var e = b.data.length;
        0 >= c || (d.a.trackBandwidth && d.a.trackBandwidth(d.N, c, e), lg("Cast.MPL.SegmentStats.Size", e), lg("Cast.MPL.SegmentStats.Time", c), c = 0 < c ? 8 * e / (c / 1E3) : 0, d.ic = .8 * c + (1 - .8) * d.ic, D(Rj, d.N + ": current=" + c.toFixed(2) + ", average=" + d.ic.toFixed(2)), Vj(d, c), d.sg = 0);
        hk(a);
        gk(a, b);
        a.Xc ? (a.Xc = !1, a.protocol.Fg(a.M, b.data), d = !0) : d = a.Yd = !1;
        if (!d && (d = a.$a(a.oa.Tc()), ak(a, 10 > d, b.interval.duration), a.ah = .8 * d + (1 - .8) * a.ah, 3E5 < Date.now() - a.Oj &&
                (y("Cast.MPL.AverageBufferDuration", parseInt(a.ah, 10)), a.Oj = Date.now()), a.Zf)) return;
        a.oa.ed()
    };
    k = Wj.prototype;
    k.em = function() {
        this.Id && (Zj(this), this.Id = !1)
    };
    k.Tb = function(a) {
        var b = this.ff;
        if (a) {
            var c = Date.now() - this.wg;
            b.ic = 0 < c ? 8 * b.sg / (c / 1E3) : 0
        }
        b.sg = 0;
        b.Pg = null;
        D(Rj, b.N + ": current=" + b.ic.toFixed(2));
        Vj(b, b.ic);
        b = this.protocol.getQualityLevel(this.M);
        a = this.vj.qf(b, a);
        0 == a.length ? this.host.skipSegmentOnNetworkFailure ? (hk(this), this.oa.ed()) : (this.f = -1, a = this.$f ? void 0 : new Hf(this.B.url, this.g.Rb, Id(this.g), this.g.getAllResponseHeaders(), Kd(this.g)), this.host.T(301, a)) : ak(this, !0, void 0, a) ? (this.Yd = !0, this.oa.ed()) : (this.Fb++, this.Xi = Date.now(), this.oa.ed(this.Lb))
    };
    k.ii = function(a) {
        this.ff.sg = a.loaded
    };
    k.$a = function(a) {
        return this.Fa.$a(a)
    };
    k.createBuffer = function() {
        this.Fa.createBuffer()
    };
    var ej = function(a) {
            a.Zf = !1;
            a.oa.Xj();
            ik(a, !1);
            if (a.Xc) Zj(a);
            else if (jk(a), a.oa.ed(), a.host.onQualityLevelChanged) a.host.onQualityLevelChanged(a.M)
        },
        Zj = function(a) {
            if (kk(a)) a.Id = !0;
            else {
                a.wg = Date.now();
                a.protocol.updateSegmentRequestInfo(a.M, a.B);
                a.B.timeoutInterval = Math.max(2E3 * a.B.interval.duration, 1E4);
                a.B.skipRequest = !1;
                if (a.host.updateSegmentRequestInfo && (a.host.updateSegmentRequestInfo(a.B, a.M), a.B.skipRequest)) {
                    a.$f = !0;
                    return
                }
                D(ck, a.M + ": send request to get segment.");
                a.g.ge = a.B.withCredentials;
                a.g.dc = Math.max(0, a.B.timeoutInterval);
                a.g.send(a.B.url, void 0, void 0, a.B.headers)
            }
        };
    Wj.prototype.Be = function() {
        return 0 < this.f || this.Yc || kk(this) || !this.Fa.De() || !this.rb.Sa()
    };
    Wj.prototype.Ph = function() {
        var a;
        if (a = !this.Zf && 2 > this.rb.Sc() && !kk(this)) a = jf(this.rb), a = !(a && !fk(this, a));
        return a
    };
    var kk = function(a) {
            return a.g.Be() || a.$f
        },
        ik = function(a, b) {
            if (a.protocol.Md(a.M)) {
                var c = a.protocol.se(a.M);
                null !== c ? gk(a, {
                    Hd: !0,
                    data: c,
                    interval: {
                        time: a.B.interval.time,
                        duration: 0
                    }
                }) : (a.Xc = !0, a.Yd = a.Yd || b)
            }
        },
        jk = function(a) {
            var b = a.protocol.Mf(a.M);
            b && a.Cf(b)
        };
    Wj.prototype.ti = function() {
        if (0 < this.Fb || this.Yd) {
            if (0 < this.Fb) {
                if (Date.now() - this.Xi < this.Lb) return;
                this.Lb *= 2
            }
            Zj(this)
        } else if (1 == this.f) {
            var a = this.oa.Tc(),
                b = this.protocol.seek(this.M, a);
            "number" === typeof b ? (D(ck, this.M + ": seek success " + a), this.f = 2, this.oa.kk(b), ik(this, !0), jk(this), Zj(this)) : D(ck, this.M + ": seek failure " + a)
        } else this.protocol.tc(this.M) && (ik(this, !0), jk(this), Zj(this)), this.protocol.rc(this.M) && (this.f = 0)
    };
    var hk = function(a) {
            a.Fb = 0;
            a.Xi = 0;
            a.Lb = 400
        },
        bk = function(a, b, c) {
            if (a.host.processMetadata) {
                var d = Fh(b, [1701671783], !0);
                0 !== d.length && (d = d.map(function(e) {
                    0 === e.xa ? (e.ac = c, e.tb = e.ac) : (e.ac = c + e.pg / e.xa, e.tb = e.ac + e.Gf / e.xa);
                    return {
                        endTime: e.tb,
                        eventDuration: e.Gf,
                        id: e.Gh,
                        messageData: e.Uj,
                        presentationTimeDelta: e.pg,
                        schemeIdUri: e.zi,
                        startTime: e.Uc(),
                        timescale: e.xa,
                        value: e.Qi
                    }
                }), a.host.processMetadata("EMSG", b, c, d))
            }
        },
        ck = B("cast.player.core.SegmentManager");
    var lk = function(a, b, c) {
        z.call(this);
        var d = this;
        this.a = a;
        this.H = b;
        this.oa = c;
        this.ja = [];
        this.ud = [];
        this.Ua = null;
        this.ga = new MediaSource;
        this.Hj = this.Kj = this.Yf = !1;
        this.Th = this.qd = this.Lc = null;
        this.Vf = [];
        this.nh = function(e) {
            d.Ua ? d.Ua.createSession(e) : d.Vf.push(e)
        };
        A(this.ga, "sourceopen", this.jk, !1, this);
        this.a.mediaElement && A(this.a.mediaElement, "durationchange", this.nd, !1, this)
    };
    q(lk, z);
    lk.prototype.G = function() {
        this.H.Ic();
        mk(this);
        this.qd = this.Lc = null;
        this.Vf.length = 0;
        this.Ua && (this.Ua.L(), this.Ua = null);
        ec(this.ga, "sourceopen", this.jk, !1, this);
        this.a.mediaElement && (this.a.mediaElement.removeAttribute("src"), this.a.mediaElement.load(), ec(this.a.mediaElement, "durationchange", this.nd, !1, this));
        z.prototype.G.call(this)
    };
    lk.prototype.jk = function() {
        D(nk, "sourceopen");
        if (this.Hj) {
            this.update();
            ok(this);
            for (var a = n(this.ja), b = a.next(); !b.done; b = a.next())(b = b.value) && b.createBuffer()
        }
    };
    var pk = function(a) {
        if (!a.Ua && a.Th && a.Kj && (a.Lc || a.qd)) {
            a.Ua = new Ij(a.a, a.H, a.Th, a.Lc, a.qd);
            for (var b = n(a.Vf), c = b.next(); !c.done; c = b.next()) a.Ua.createSession(c.value);
            a.Vf.length = 0
        }
    };
    lk.prototype.nd = function() {
        if (void 0 !== this.ga.setLiveSeekableRange && "open" == this.ga.readyState && Infinity == this.ga.duration) {
            var a = this.Ba();
            a && this.ga.setLiveSeekableRange(a.start, a.end)
        }
    };
    lk.prototype.Ba = function() {
        for (var a = -Infinity, b = Infinity, c = this.H.getStreamCount(), d = 0; d < c; d++)
            if (this.H.isStreamEnabled(d)) {
                var e = this.H.Ba(d);
                if (!e) return null;
                e.start > a && (a = e.start);
                e.end < b && (b = e.end)
            }
        a > b && (a = b);
        return {
            start: a,
            end: b
        }
    };
    lk.prototype.onManifestReady = function() {
        this.Hj = !0;
        this.update();
        this.nd()
    };
    var qk = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? null : d;
        null === a.qd && (a.qd = c);
        null === a.Lc && (a.Lc = d);
        a.Th = b;
        pk(a)
    };
    lk.prototype.createSession = function(a) {
        this.nh(a)
    };
    lk.prototype.endOfStream = function() {
        "open" == this.ga.readyState && this.ga.endOfStream()
    };
    lk.prototype.load = function() {
        mk(this);
        this.open()
    };
    lk.prototype.open = function() {
        this.Yf || (this.H.load(this), this.Yf = !0);
        this.a.mediaElement.src ? (Yb(this.a.mediaElement, "emptied", function() {
            rk(this)
        }, !1, this), this.a.mediaElement.src = "") : rk(this)
    };
    var rk = function(a) {
            D(nk, "open");
            !a.Ua && a.a.mediaElement.setMediaKeys ? a.a.mediaElement.setMediaKeys(null).catch(function(b) {
                Ic(nk, b.toString())
            }).then(function() {
                sk(a)
            }) : sk(a)
        },
        sk = function(a) {
            a.a.mediaElement.src = window.URL.createObjectURL(a.ga);
            a.Kj = !0;
            pk(a)
        };
    lk.prototype.preload = function() {
        this.Yf ? C(nk, "protocol already loaded") : (this.H.load(this), this.Yf = !0)
    };
    var mk = function(a) {
            for (var b = n(a.ja), c = b.next(); !c.done; c = b.next())(c = c.value) && c.L();
            a.ja.length = 0;
            a.ud = []
        },
        ok = function(a) {
            if ("open" == a.ga.readyState) {
                var b = a.H.getDuration();
                0 < b && !a.ga.duration && (a.ga.duration = parseFloat((b - 1E-4).toFixed(4)))
            }
        };
    k = lk.prototype;
    k.reset = function() {
        for (var a = n(this.ja), b = a.next(); !b.done; b = a.next())(b = b.value) && b.reset()
    };
    k.update = function() {
        for (var a = this.H.getStreamCount(), b = null, c = null, d = 0; d < a; d++)
            if (this.H.isStreamEnabled(d)) {
                var e = this.H.getStreamInfo(d),
                    f = e.mimeType;
                e = e.codecs;
                Ld(f) || Nd(e) ? b ? C(nk, "more than one audio stream enabled") : (b = fg(e), b = f + ';codecs="' + b + '"') : Md(f) && (c ? C(nk, "more than one video stream enabled") : (c = eg(e), c = f + ';codecs="' + c + '"'));
                if (!this.ja[d]) {
                    try {
                        this.ja[d] = new Wj(this.oa, this.a, this.H, d, this.ga, this.nh, void 0, this.ud)
                    } catch (g) {
                        C(nk, g.message);
                        22 == g.code && this.oa.ei();
                        return
                    }
                    Md(f) && this.oa.mh();
                    this.H.enableStream(d, !0);
                    ak(this.ja[d], !0)
                }
            } else this.ja[d] && (Xj(this.ja[d]), this.ja[d] = null);
        b || c ? this.Lc || this.qd || (this.Lc = b, this.qd = c, pk(this)) : C(nk, "no enabled audio or video stream")
    };
    k.Jf = function() {
        for (var a = this.H.getStreamCount(), b = 0; b < a; b++)
            if (this.H.isStreamEnabled(b)) {
                var c = this.H.getStreamInfo(b),
                    d = c.codecs;
                if (Ld(c.mimeType) || Nd(d)) {
                    this.ja[b] && (Xj(this.ja[b]), this.ja[b] = null);
                    try {
                        this.ja[b] = new Wj(this.oa, this.a, this.H, b, this.ga, this.nh, void 0, this.ud)
                    } catch (e) {
                        C(nk, e.message);
                        22 == e.code && this.oa.ei();
                        break
                    }
                    this.H.enableStream(b, !0);
                    ak(this.ja[b], !0)
                }
            }
    };
    k.Ph = function(a) {
        return this.ja[a].Ph()
    };
    k.ti = function(a) {
        this.ja[a].ti()
    };
    k.Be = function(a) {
        return this.ja[a].Be()
    };
    k.$a = function(a, b) {
        return this.ja[a].$a(b)
    };
    k.Gc = function() {
        this.Ua.Gc()
    };
    k.Ae = function() {
        return null !== this.Ua && this.Ua.Ae()
    };
    k.getStreamCount = function() {
        return this.ja.length
    };
    var nk = B("cast.player.core.MediaSourceManager");
    var tk = function() {};
    x("cast.player.core.CaptionsCallbacks", tk);
    tk.prototype.Tc = function() {};
    tk.prototype.Of = function() {};
    var uk = function() {};
    x("cast.player.core.PlayerCallbacks", uk);
    k = uk.prototype;
    k.ed = function() {};
    k.kk = function() {};
    k.Xj = function() {};
    k.Jf = function() {};
    k.Wj = function() {};
    k.ei = function() {};
    k.mh = function() {};
    k.Gk = function() {};
    var vk = function(a, b, c, d) {
        oi.call(this, a, b, c);
        a = new Gf;
        a.url = d;
        b.updateCaptionsRequestInfo && b.updateCaptionsRequestInfo(a);
        this.Pk = new Vi(this);
        this.Pk.load(a)
    };
    q(vk, oi);
    vk.prototype.G = function() {
        this.Pk.L();
        oi.prototype.G.call(this)
    };
    vk.prototype.reset = function() {};
    vk.prototype.lg = function(a) {
        a && this.parse(a, 0)
    };
    var S = function(a) {
            D(wk, "Version: 1.0.0.92");
            ua() && cast.__platform__.metrics.setMplVersion("1.0.0.92");
            this.a = a;
            this.H = null;
            this.Pb = 0;
            this.Hb = null;
            this.aj = this.Ra = this.Ee = this.eb = !1;
            this.bg = !0;
            this.ag = !1;
            this.fg = this.ua = this.V = this.o = null;
            this.ye = !1;
            this.nf = null;
            this.mg = this.hi.bind(this);
            this.Mg = this.Lg = this.mf = null;
            this.Jg = this.Ge = !1;
            this.Ci = []
        },
        yk = function(a, b) {
            xk(a);
            a.nf = setTimeout(a.mg, b || 0)
        };
    k = S.prototype;
    k.ed = function(a) {
        yk(this, a)
    };
    k.rg = function(a, b, c, d, e, f) {
        this.Ee && this.ua.rg(a, b, c, d, e, f);
        yk(this)
    };
    k.kk = function(a) {
        this.eb && (Infinity == this.Pb || this.Pb < a) && (this.Pb = a)
    };
    k.Xj = function() {
        ok(this.V)
    };
    k.Tc = function() {
        return this.eb ? this.Pb : this.o.currentTime
    };
    k.Jf = function() {
        this.V.Jf()
    };
    k.Wj = function() {
        this.V.update()
    };
    k.ei = function() {
        this.reload()
    };
    k.mh = function() {
        this.Ge || null !== this.ua || (this.Ee = !0, this.ua = new Ei(this, this.a))
    };
    k.Of = function() {
        return this.Ci
    };
    k.wm = function(a) {
        this.Ci = a;
        0 < this.Ci.length || (this.ua && !this.Ee ? (this.ua.wd(), this.ua.hf()) : this.fg && (this.fg.wd(), this.fg.hf()))
    };
    k.Gk = function(a) {
        this.fg = a
    };
    var xk = function(a) {
        null !== a.nf && (clearTimeout(a.nf), a.nf = null)
    };
    k = S.prototype;
    k.ik = function() {
        D(wk, "seeking");
        this.ye ? this.ye = !1 : (this.ag = this.eb = !1, this.mf = null, this.ua && this.ua.reset(), this.V.reset())
    };
    k.hk = function() {
        D(wk, "seeked");
        this.Hb = t()
    };
    k.kg = function() {
        Ic(wk, "error");
        this.a.T(Pd(this.o.error))
    };
    k.dk = function() {
        this.mf = t();
        wa("Cast.MPL.Playing");
        if (this.Lg) {
            var a = t() - this.Lg;
            y("Cast.MPL.AutoPauseTime", a);
            this.Lg = null
        }
    };
    k.ck = function() {
        var a = t();
        this.Ra && !this.eb && null !== this.mf && (this.Lg = a, y("Cast.MPL.PlayTimeBeforeAutoPause", a - this.mf));
        wa("Cast.MPL.Pause");
        this.Hb = this.mf = null
    };
    k.Zj = function() {
        wa("Cast.MPL.Ended");
        this.Hb = null
    };
    k.Qg = function() {
        if (this.eb && this.o && !isNaN(this.o.duration) && 0 != this.o.buffered.length && (this.eb = !1, this.Hb = t(), y("Cast.MPL.MediaDuration", this.o.duration), 0 != this.Pb && this.Pb != this.o.currentTime)) {
            var a = this.Pb;
            this.ye = !0;
            this.o.currentTime = a
        }
        this.bg = !1;
        var b = 0,
            c = 0,
            d = !0;
        a = this.Tc();
        for (var e = this.V.getStreamCount(), f = 0; f < e; f++)
            if (this.H.isStreamEnabled(f) && (c++, this.V.Be(f))) {
                b++;
                var g = this.V.$a(f, a);
                if (this.Ra && d) {
                    var h = this.H.getSegmentInterval(f).duration * this.a.autoResumeNumberOfSegments;
                    if (0 ==
                        h || h > this.a.autoResumeDuration) h = this.a.autoResumeDuration;
                    g < h && (d = !1)
                }
                h = f;
                20 <= g ? D(wk, "not requesting more segments, buffered duration " + g + " seconds exceeds max duration.") : (g < this.a.autoPauseDuration && (g = this.H.getStreamInfo(h), Sf(g) || (this.bg = !0)), this.V.Ph(h) && this.V.ti(h))
            }
        if (this.o && 0 != c) {
            this.bg ? !this.o.paused && this.o.duration - a > this.a.autoPauseDuration && (D(wk, "auto pause " + a), this.Ra = !0, this.o.pause(), this.a.onAutoPause && this.a.onAutoPause(this.Ra)) : !this.eb && this.Ra && d && (this.Ra = !1, this.o.paused &&
                (D(wk, "auto resume " + a), this.o.play(), this.a.onAutoPause && this.a.onAutoPause(this.Ra), this.Hb = t()));
            if (0 == b) {
                if (!this.ag && (D(wk, "endOfStream " + a), this.V.endOfStream(), this.a.onMediaDownloadEnded)) this.a.onMediaDownloadEnded();
                this.ag = !0
            }
            if (!(this.eb || this.Ra || this.o.paused || !this.V || this.V.Ae()) && (D(wk, "time=" + a), this.Hb && (b = t(), c = 2500 < b - this.Hb, this.a.Yi || c))) {
                a: {
                    d = this.o.currentTime;
                    e = this.o.buffered;
                    for (f = e.length - 1; 0 <= f; f--) {
                        g = e.start(f);
                        if (d >= g) break;
                        if (0 == f || d > e.end(f - 1) - .15) {
                            C(wk, "stall jump to " +
                                g);
                            wa("Cast.MPL.PlaybackStallGap");
                            this.ye = this.Jg = !0;
                            this.o.currentTime = g;
                            d = !0;
                            break a
                        }
                    }
                    d = !1
                }
                d ? this.Hb = null : c && (this.Hb = this.a.Yi ? b : null, C(wk, "playback stalled in buffered region"), wa("Cast.MPL.PlaybackStall"), this.ye = this.Jg = !0, this.o.currentTime = a + .5)
            }
        }
        yk(this, 400)
    };
    k.lk = function() {
        this.Hb = t();
        this.Jg && (y("Cast.MPL.StallPrevented", 1), this.Jg = !1);
        if (this.Mg) {
            var a = t() - this.Mg;
            y(this.Ge ? "Cast.MPL.PreloadAutoplayStartupLatency" : "Cast.MPL.AutoplayStartupLatency", a);
            this.Mg = null
        }
    };
    k.hi = function() {
        this.nf = null;
        this.Qg()
    };
    var zk = function(a, b, c) {
        a.H = b;
        a.eb = !0;
        a.Pb = c || 0;
        a.V = new lk(a.a, a.H, a)
    };
    k = S.prototype;
    k.load = function(a, b) {
        D(wk, "load");
        wa("Cast.MPL.Load");
        var c = Ji();
        void 0 !== c && Mi("Cast.MPL.ExperimentationBlockId", c.blockIds);
        this.a.tj && wa("Cast.MPL.DisableBufferAdjust");
        this.Ge = !1;
        this.o = this.a.mediaElement;
        A(this.o, "error", this.kg, !1, this);
        A(this.o, "seeking", this.ik, !1, this);
        A(this.o, "seeked", this.hk, !1, this);
        A(this.o, "pause", this.ck, !1, this);
        A(this.o, "playing", this.dk, !1, this);
        A(this.o, "timeupdate", this.lk, !1, this);
        A(this.o, "ended", this.Zj, !1, this);
        this.o.autoplay && (this.Mg = t(), this.o.autoplay = !1, this.aj = !0, this.rk());
        this.V ? (this.V.open(), this.mh()) : a ? (zk(this, a, b), this.V.load()) : Ic(wk, "no protocol")
    };
    k.preload = function(a, b) {
        D(wk, "preload");
        wa("Cast.MPL.Preload");
        zk(this, a, b);
        this.V.preload();
        this.Ge = !0
    };
    k.Ic = function() {
        D(wk, "unload");
        Ak(this);
        this.V && (this.V.L(), this.V = null);
        xk(this);
        this.o && (this.aj && (this.o.autoplay = !0), this.ag = this.Ra = !1, ec(this.o, "error", this.kg, !1, this), ec(this.o, "seeking", this.ik, !1, this), ec(this.o, "seeked", this.hk, !1, this), ec(this.o, "pause", this.ck, !1, this), ec(this.o, "playing", this.dk, !1, this), ec(this.o, "timeupdate", this.lk, !1, this), ec(this.o, "ended", this.Zj, !1, this), this.o = null, this.Ge = !1)
    };
    k.reload = function() {
        this.eb || (this.Pb = this.o.currentTime);
        this.eb = !0;
        this.o.paused || (this.Ra = !0);
        xk(this);
        this.V.load()
    };
    k.rk = function() {
        this.Ra = !0
    };
    k.getState = function(a) {
        var b = this.V.Ba();
        void 0 === a && (a = 1);
        var c = {};
        a & 1 && (c.underflow = this.bg || this.Ra);
        a & 2 && (c.seekable = b ? {
            start: b.start,
            end: b.end
        } : null);
        return c
    };
    k.$a = function(a) {
        return this.V.$a(a, this.Tc())
    };
    k.El = function() {
        return 20
    };
    k.Gc = function() {
        this.V.Gc()
    };
    var Ak = function(a) {
        a.ua && (a.Ee = !1, a.ua.L(), a.ua = null)
    };
    S.prototype.zl = function(a, b, c) {
        b ? a ? "cea608" == b ? null !== this.ua ? this.ua.Gb.mode = "showing" : C(wk, "InbandCaptionsManager should have been created by createInbandCaptionsManager() callback!") : c && (Ak(this), this.ua = new vk(this, this.a, b, c), this.ua.Gb.mode = "showing") : "cea608" == b ? null !== this.ua && (this.ua.Gb.mode = "hidden") : this.Ee || Ak(this) : this.V.update()
    };
    S.prototype.Fl = function() {
        return this.H
    };
    S.prototype.Cl = function() {
        return this.a
    };
    x("cast.player.api.Player", S);
    S.prototype.getHost = S.prototype.Cl;
    S.prototype.getStreamingProtocol = S.prototype.Fl;
    S.prototype.enableCaptions = S.prototype.zl;
    S.prototype.startLicenseRequest = S.prototype.Gc;
    S.prototype.getMaxBufferDuration = S.prototype.El;
    S.prototype.getBufferDuration = S.prototype.$a;
    S.prototype.getState = S.prototype.getState;
    S.prototype.playWhenHaveEnoughData = S.prototype.rk;
    S.prototype.reload = S.prototype.reload;
    S.prototype.unload = S.prototype.Ic;
    S.prototype.preload = S.prototype.preload;
    S.prototype.load = S.prototype.load;
    S.prototype.setSenderTrackStyles = S.prototype.wm;
    S.prototype.getSenderTrackStyles = S.prototype.Of;
    S.prototype.onAudioChanged = S.prototype.Wj;
    var wk = B("cast.player.api.Player");
    S.State = {
        UNDERFLOW: 1,
        SEEKABLE: 2
    };
    var T = function(a) {
        this.name = a;
        this.Jj = !1
    };
    T.prototype.parse = function() {
        this.Jj = !0
    };
    var Bk = function(a) {
        T.call(this, a);
        this.value = null
    };
    q(Bk, T);
    Bk.prototype.parse = function(a) {
        T.prototype.parse.call(this, a);
        void 0 !== a && -1 < a.indexOf("/") ? (a = a.split("/"), this.value = parseInt(a[0], 10) / (1 < a.length ? parseInt(a[1], 10) : 1)) : this.value = parseInt(a, 10)
    };
    var X = function(a, b) {
        T.call(this, a);
        this.value = b || null
    };
    q(X, T);
    X.prototype.parse = function(a) {
        T.prototype.parse.call(this, a);
        this.value = a
    };
    var Ck = function(a) {
        T.call(this, a);
        this.value = null
    };
    q(Ck, T);
    Ck.prototype.parse = function(a) {
        T.prototype.parse.call(this, a);
        this.value = "true" == a.toLowerCase()
    };
    var Dk = function(a) {
        T.call(this, a);
        this.value = null
    };
    q(Dk, T);
    Dk.prototype.parse = function(a) {
        T.prototype.parse.call(this, a);
        if (a = a.match(Je)) {
            var b = !(a[6] || a[7] || a[8]);
            if (b && !(a[2] || a[3] || a[4]) || b && a[5]) a = null;
            else {
                b = parseInt(a[2], 10) || 0;
                var c = parseInt(a[3], 10) || 0,
                    d = parseInt(a[4], 10) || 0,
                    e = parseInt(a[6], 10) || 0,
                    f = parseInt(a[7], 10) || 0,
                    g = parseFloat(a[8]) || 0;
                a = a[1] ? new Ke(-b, -c, -d, -e, -f, -g) : new Ke(b, c, d, e, f, g)
            }
        } else a = null;
        this.value = 60 * (60 * (24 * a.kc + a.pc) + a.yc) + a.Dc
    };
    var Ek = function(a) {
        T.call(this, a);
        this.value = null
    };
    q(Ek, T);
    Ek.prototype.parse = function(a) {
        T.prototype.parse.call(this, a);
        a = a.toUpperCase();
        for (var b in Fk)
            if (Fk.hasOwnProperty(b) && a.includes(Fk[b])) {
                this.value = Fk[b];
                break
            }
    };
    var Fk = {
            PLAYREADY: "9A04F079-9840-4286-AB92-E65BE0885F95",
            WIDEVINE: "EDEF8BA9-79D6-4ACE-A3C8-27DCD51D21ED",
            CLEARKEY: "1077EFEC-C0B2-4D02-ACE3-3C1E52E2FB4B",
            Vk: "URN:MPEG:DASH:MP4PROTECTION:2011"
        },
        Gk = function(a) {
            T.call(this, a);
            this.value = null
        };
    q(Gk, T);
    Gk.prototype.parse = function(a) {
        T.prototype.parse.call(this, a);
        a = a.toUpperCase();
        a.includes("9A04F079-9840-4286-AB92-E65BE0885F95") ? this.value = Vf : a.includes("EDEF8BA9-79D6-4ACE-A3C8-27DCD51D21ED") ? this.value = Wf : a.includes("1077EFEC-C0B2-4D02-ACE3-3C1E52E2FB4B") && (this.value = Xf)
    };
    var Hk = function(a, b) {
        for (var c in b)
            if (b.hasOwnProperty(c) && b[c] instanceof T) {
                var d = b[c];
                if (!d.Jj) {
                    var e = a.getNamedItem(d.name);
                    e && d.parse(e.value)
                }
            }
    };
    var Jk = function(a) {
            this.duration = new Dk("mediaPresentationDuration");
            this.type = new X("type");
            this.Tk = new Dk("minimumUpdatePeriod");
            for (this.url = null; a;) {
                if ("MPD" == a.nodeName) {
                    Hk(a.attributes, this);
                    break
                }
                a = a.nextElementSibling
            }
            this.Qd = [];
            if (a) {
                for (var b = n(a.children), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, "BaseURL" == c.nodeName) {
                        this.url = c.textContent;
                        break
                    }
                a = n(a.children);
                for (c = a.next(); !c.done; c = a.next()) b = c.value, "Period" == b.nodeName && this.Qd.push(new Ik(b, this))
            }
        },
        Kk = function(a) {
            T.call(this,
                a);
            this.end = this.start = null
        };
    q(Kk, T);
    Kk.prototype.parse = function(a) {
        T.prototype.parse.call(this, a);
        a = a.split("-");
        this.start = parseInt(a[0], 10);
        this.end = parseInt(a[1], 10)
    };
    var Lk = function(a) {
            this.media = new X("media");
            Hk(a.attributes, this)
        },
        Mk = function(a) {
            this.Kk = new X("sourceURL");
            this.za = new Kk("range");
            Hk(a.attributes, this)
        },
        Nk = function(a) {
            this.duration = new Bk("duration");
            this.timescale = new Bk("timescale");
            this.U = new X("presentationTimeOffset");
            this.I = new Bk("startNumber");
            this.Wc = new Kk("indexRange");
            Hk(a.attributes, this);
            this.jd = this.ze = null;
            a = n(a.children);
            for (var b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
                case "Initialization":
                    this.ze = new Mk(b);
                    break;
                case "SegmentTimeline":
                    this.jd = [];
                    b = n(b.children);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        var d = c.value;
                        c = 0;
                        var e = d.attributes.getNamedItem("r");
                        e && (c = parseInt(e.value, 10));
                        e = (e = d.attributes.getNamedItem("t")) ? new bh(e.value) : null;
                        if (d = d.attributes.getNamedItem("d"))
                            for (d = parseInt(d.value, 10), this.jd.push({
                                    time: e,
                                    duration: d
                                }), e = 0; e < c; e++) this.jd.push({
                                time: null,
                                duration: d
                            })
                    }
            }
        };
    Nk.prototype.Va = function(a) {
        null === a.duration.value && (a.duration = this.duration);
        null === a.timescale.value && (a.timescale = this.timescale);
        null === a.U.value && (a.U = this.U);
        null === a.I.value && (a.I = this.I);
        null === a.Wc.start && (a.Wc = this.Wc);
        null === a.ze && (a.ze = this.ze);
        null === a.jd && (a.jd = this.jd)
    };
    var Ok = function(a) {
        Nk.call(this, a);
        this.c = [];
        a = n(a.children);
        for (var b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
            case "SegmentURL":
                this.c.push(new Lk(b))
        }
    };
    q(Ok, Nk);
    Ok.prototype.Va = function(a) {
        Nk.prototype.Va.call(this, a);
        0 == a.c.length && (a.c = this.c)
    };
    var Pk = function(a) {
        Nk.call(this, a);
        this.media = new X("media");
        this.ma = new X("initialization");
        Hk(a.attributes, this)
    };
    q(Pk, Nk);
    Pk.prototype.Va = function(a) {
        Nk.prototype.Va.call(this, a);
        null === a.media.value && (a.media = this.media);
        null === a.ma.value && (a.ma = this.ma)
    };
    var Rk = function(a) {
            this.schemeIdUri = new Ek("schemeIdUri");
            Hk(a.attributes, this);
            var b = this.schemeIdUri.value;
            this.Ze = Qk(b, a);
            this.oc = b == Fk.Vk
        },
        Qk = function(a, b) {
            switch (a) {
                case Fk.PLAYREADY:
                    a = n(b.children);
                    for (b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
                        case "mspr:pro":
                            return Zi(Yd(window.atob(b.childNodes[0].nodeValue.trim())));
                        case "cenc:pssh":
                            return a = Yd(window.atob(b.childNodes[0].nodeValue)), a = new xh(a), Zi(a.getData())
                    }
                    return Sk(Vf);
                case Fk.WIDEVINE:
                    return Sk(Wf);
                case Fk.CLEARKEY:
                    return Sk(Xf);
                default:
                    return null
            }
        },
        Sk = function(a) {
            return {
                systemId: a,
                ve: null,
                Je: null,
                url: null,
                cg: 0
            }
        },
        Tk = function(a) {
            this.bf = [];
            this.oc = !1;
            this.Xb = this.D = this.Yb = this.url = null;
            a = n(a.children);
            for (var b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
                case "BaseURL":
                    this.url = b.textContent;
                    break;
                case "ContentProtection":
                    b = new Rk(b);
                    b.Ze && this.bf.push(b.Ze);
                    this.oc = this.oc || b.oc;
                    break;
                case "SegmentBase":
                    this.Xb = new Nk(b);
                    break;
                case "SegmentTemplate":
                    this.D = new Pk(b);
                    break;
                case "SegmentList":
                    this.Yb = new Ok(b)
            }
        };
    Tk.prototype.Va = function(a) {
        a.D ? this.D && this.D.Va(a.D) : a.D = this.D;
        a.Xb ? this.Xb && this.Xb.Va(a.Xb) : a.Xb = this.Xb;
        a.Yb ? this.Yb && this.Yb.Va(a.Yb) : a.Yb = this.Yb;
        if (a.url && this.url) {
            var b = this.url;
            var c = a.url;
            b instanceof H || (b = wf(b));
            c instanceof H || (c = wf(c));
            b = b.resolve(c).toString()
        } else b = a.url || this.url;
        a.url = b;
        0 == a.bf.length && (a.bf = this.bf);
        a.oc = a.oc || this.oc
    };
    var Uk = function(a) {
        Tk.call(this, a);
        this.id = new X("id");
        this.mimeType = new X("mimeType");
        this.codecs = new X("codecs");
        Hk(a.attributes, this)
    };
    q(Uk, Tk);
    Uk.prototype.Va = function(a) {
        Tk.prototype.Va.call(this, a);
        a.mimeType.value = a.mimeType.value || this.mimeType.value;
        a.codecs.value = a.codecs.value || this.codecs.value
    };
    var Vk = function(a, b) {
        Uk.call(this, a);
        this.gl = new Bk("bandwidth");
        this.height = new Bk("height");
        this.width = new Bk("width");
        Hk(a.attributes, this);
        b.Va(this);
        if (this.mimeType.value) switch (this.mimeType.value.toLowerCase()) {
            case "application/ttml+xml":
                this.codecs.value = "ttml";
                this.mimeType.value = "text/mp4";
                break;
            case "text/vtt":
                this.codecs.value = "webvtt"
        }
        "avc1" == this.codecs.value && (this.codecs.value = "avc1.4D401E")
    };
    q(Vk, Uk);
    var Wk = function(a, b) {
        Uk.call(this, a);
        this.language = new X("lang");
        this.frameRate = new Bk("frameRate");
        Hk(a.attributes, this);
        this.role = null;
        b.Va(this);
        this.v = [];
        a = n(a.children);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, "Representation" == b.nodeName ? this.v.push(new Vk(b, this)) : "Role" == b.nodeName && (this.role = b.getAttribute("value"))
    };
    q(Wk, Uk);
    var Ik = function(a, b) {
        Tk.call(this, a);
        this.duration = new Dk("duration");
        this.start = new Dk("start");
        Hk(a.attributes, this);
        this.url = this.url || b.url;
        this.h = [];
        a = n(a.children);
        for (b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
            case "AdaptationSet":
                this.h.push(new Wk(b, this))
        }
    };
    q(Ik, Tk);
    var Xk = function(a) {
        P.call(this, a);
        this.cf = new Mc(5);
        this.Hg = !1;
        this.gd = [];
        this.nj = []
    };
    q(Xk, P);
    Xk.prototype.updateLicenseRequestInfo = function(a) {
        var b = this.cf.get(a.protectionSystem);
        b && (a.headers = {}, a.headers["content-type"] = "text/xml;charset=utf-8", a.url = b.url)
    };
    Xk.prototype.ci = function(a) {
        if (a.Qd && 0 != a.Qd.length) {
            gj(this, "dynamic" == a.type.value);
            this.Ii = !!this.S && "number" === typeof a.Tk.value;
            a.duration.value && (this.duration = a.duration.value);
            a: {
                var b = a.Qd;
                var c = b[0];
                if (c.h[0].D) {
                    var d = [],
                        e = [];
                    b = n(b);
                    for (var f = b.next(); !f.done; f = b.next()) {
                        f = f.value;
                        for (var g = f.duration.value, h = 0, l = [], m = n(f.h), p = m.next(); !p.done; p = m.next()) {
                            var u = p.value;
                            p = u.D;
                            if (!p) {
                                C(Yk, "Multiple periods not using SegmentTemplate is not supported");
                                c = [{
                                    start: c.start.value,
                                    duration: c.duration.value,
                                    Se: null
                                }];
                                break a
                            }
                            u = this.uri.resolve(new H(u.v[0].url)).toString();
                            var v = new H(u);
                            e[h] = e[h] || 0;
                            u = e[h];
                            var w = {
                                bitrate: 0,
                                U: 0,
                                c: [],
                                url: null,
                                D: null,
                                I: null,
                                yb: null
                            };
                            Zk(v, p, w);
                            p = $k(v, p);
                            p = {
                                I: w.I,
                                U: w.U,
                                Fj: u,
                                D: p
                            };
                            l.push(p);
                            e[h] += Math.round(g / p.D.duration);
                            h++
                        }
                        d.push({
                            start: f.start.value,
                            duration: f.duration.value,
                            Se: l
                        })
                    }
                    c = d
                } else c = [{
                    start: c.start.value,
                    duration: c.duration.value,
                    Se: null
                }]
            }
            this.gd = c;
            a = n(a.Qd[0].h);
            for (c = a.next(); !c.done; c = a.next()) {
                d = c.value;
                e = d.v;
                c = e[0].mimeType.value;
                e = d.codecs.value || e[0].codecs.value ||
                    "";
                if (null === c) {
                    this.host.T(422, void 0, "No mime type in manifest", Yk);
                    break
                }
                if (Ld(c)) b = 1;
                else if (Md(c)) b = 2;
                else if (Rf(d.role, c, e)) b = 3;
                else continue;
                c = {
                    name: d.id.value,
                    type: b,
                    enabled: !1,
                    Wa: !1,
                    Z: !0,
                    index: -1,
                    X: -1,
                    v: [],
                    language: d.language.value,
                    mimeType: c,
                    codecs: e,
                    role: d.role
                };
                d = n(d.v);
                for (e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    b = n(e.bf);
                    for (f = b.next(); !f.done; f = b.next()) f = f.value, (g = al(f.systemId)) && this.cf.set(g, f);
                    e.oc && (this.Hg = !0);
                    f = this.uri.resolve(new H(e.url)).toString();
                    b = {
                        bitrate: e.gl.value ||
                            0,
                        id: e.id.value,
                        U: 0,
                        c: [],
                        url: f,
                        I: null,
                        D: null,
                        yb: null
                    };
                    e.Xb || e.Yb || e.D ? (e.url && "/" != f[f.length - 1] && (f += "/"), f = new H(f), Zk(f, e.Xb, b), (g = e.Yb) && Zk(f, g, b), e = e.D, g = b, e && (Zk(f, e, g), g.D = $k(f, e))) : (e = f, f = this.duration, b.c.push({
                        time: 0,
                        Ub: new bh("0"),
                        duration: f,
                        url: e
                    }));
                    c.v.push(b)
                }
                c.Wa = !0;
                this.h.push(c)
            }
        } else this.host.T(421, void 0, "No periods found in manifest", Yk)
    };
    var bl = function(a) {
            if (gg && gg.updateOutputMode) {
                var b = a.frameRate.value;
                if ("number" === typeof b) {
                    a = n(a.v);
                    for (var c = a.next(); !c.done; c = a.next()) {
                        var d = c.value;
                        c = d.width.value;
                        var e = d.height.value;
                        if (ig(c, e)) {
                            a = d.codecs.value;
                            D(Yk, "Update output mode with frameRate=" + b + " codecs=" + a);
                            gg.updateOutputMode(c, e, b, a);
                            break
                        }
                    }
                }
            }
        },
        cl = function(a) {
            a = n(a.Qd);
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = {};
                b = n(b.value.h);
                for (var d = b.next(); !d.done; c = {
                        Yg: c.Yg
                    }, d = b.next()) d = d.value, c.Yg = d.frameRate.value, d.v = d.v.filter(function(e) {
                    return function(f) {
                        var g =
                            e.Yg;
                        if (hg) {
                            var h = f.codecs.value;
                            var l = f.mimeType.value;
                            var m = f.width.value;
                            f = f.height.value;
                            if (ig(m, f) && h && l) {
                                l = l + "; codecs=" + dg(h);
                                m && f && (l += "; width=" + m + "; height=" + f);
                                "number" === typeof g && (l += "; framerate=" + g);
                                b: {
                                    g = !1;
                                    h = h.split(",");
                                    for (m = 0; m < h.length; m++) {
                                        if (h[m].match(Od)) {
                                            h = !1;
                                            break b
                                        }
                                        0 === h[m].indexOf("hev1.2") && (g = !0)
                                    }
                                    h = g
                                }
                                h && (l += "; eotf=smpte2084");
                                h = hg(l);
                                D(Yk, "canDisplay(" + l + "): " + !!h);
                                l = h
                            } else l = !0
                        } else l = !0;
                        return l
                    }
                }(c)), bl(d)
            }
        };
    k = Xk.prototype;
    k.si = function() {
        this.host.T(321, Wi(this.ad))
    };
    k.Eb = function(a) {
        this.host.T(420, void 0, a, Yk)
    };
    k.mi = function(a) {
        a = (new DOMParser).parseFromString(a, "text/xml");
        a.firstChild && (a = new Jk(a.firstChild), this.ri = 1E3 * a.Tk.value || this.ri, cl(a), this.ci(a))
    };
    k.Pi = function() {
        this.Hg || qk(this.Cc, this.cf.ab())
    };
    k.Ba = function(a) {
        var b = this.h[a];
        b = b.v[b.X];
        return 0 == b.c.length && b.D ? (a = this.duration, this.S && (a -= 20), {
            start: 0,
            end: a
        }) : P.prototype.Ba.call(this, a)
    };
    var el = function(a, b, c) {
        c = dl(a, b, c);
        a.nj[b] != c && (a.h[b].Z = !0);
        a.nj[b] = c
    };
    Xk.prototype.seek = function(a, b) {
        var c = this.h[a],
            d = c.v[c.X];
        if (0 == d.c.length && d.D) {
            var e = this.Ba(a);
            b < e.start && (b = e.start);
            b > e.end && (b = e.end);
            e = Math.floor(b / d.D.duration);
            d = Math.ceil(this.duration / d.D.duration);
            c.index = e < d ? e : d - 1;
            el(this, a, c.index);
            return b
        }
        return P.prototype.seek.call(this, a, b)
    };
    Xk.prototype.tc = function(a) {
        var b = this.h[a],
            c = b.v[b.X];
        if (0 == c.c.length && c.D) {
            var d = b.index + 1;
            return d < Math.ceil(this.duration / c.D.duration) ? (b.index = d, el(this, a, b.index), !0) : !1
        }
        return P.prototype.tc.call(this, a)
    };
    var dl = function(a, b, c) {
        a = a.gd;
        for (var d = 0; d < a.length - 1 && !(c < a[d + 1].Se[b].Fj); d++);
        return d
    };
    k = Xk.prototype;
    k.rc = function(a) {
        var b = this.h[a],
            c = b.v[b.X];
        return 0 == c.c.length && c.D ? b.index == Math.ceil(this.duration / c.D.duration) - 1 : P.prototype.rc.call(this, a)
    };
    k.getSegmentInterval = function(a) {
        if (this.Md(a)) return {
            time: 0,
            duration: 0
        };
        var b = this.h[a],
            c = b.v[b.X];
        if (c.D) {
            b = b.index;
            if (0 > b) return {
                time: 0,
                duration: 0
            };
            0 < c.c.length ? (a = c.c[b].duration, c = c.c[b].time - c.U) : (a = c.D.duration, c = b * a);
            return {
                time: c,
                duration: a
            }
        }
        return P.prototype.getSegmentInterval.call(this, a)
    };
    k.updateSegmentRequestInfo = function(a, b) {
        P.prototype.updateSegmentRequestInfo.call(this, a, b);
        var c = this.h[a],
            d = c.v[c.X];
        c = c.index;
        var e = this.Md(a);
        if (d.D) {
            var f = d.D,
                g = null;
            1 < this.gd.length && (g = this.gd[dl(this, a, c)].Se[a], f = g.D);
            a = e ? f.ma : f.url;
            a = a.replace(/\$RepresentationID\$/g, d.id);
            a = a.replace(/\$Bandwidth\$/g, d.bitrate.toString());
            e || (e = c + (d.I || 0), 1 < this.gd.length && (e = c + (g.I || 0) - g.Fj), a = fl(a, e), a = a.replace("$Time$", 0 < d.c.length ? d.c[c].Ub.toString() : (c * f.duration).toString()));
            b.url = a
        } else {
            g = f =
                null;
            if (e) c = d.yb, d = c.url ? c.url : d.url, c.za && (f = c.za.start, g = c.za.end);
            else if (c < d.c.length) c = d.c[c], c.url ? d = c.url : (d = d.url, f = c.offset, g = c.offset + c.size - 1);
            else {
                this.host.T(423, void 0, "Invalid segment info in manifest.", Yk);
                return
            }
            b.url = d;
            b.headers = {};
            null !== f && null !== g && (b.headers.Range = "bytes=" + f + "-" + g)
        }
    };
    k.processSegment = function(a, b, c) {
        var d = this.h[a],
            e = d.v[d.X],
            f = b.data;
        if (this.Hg && this.Cc) {
            var g = N(f, 1886614376, void 0, !0);
            if (g = null === g ? null : {
                    systemId: g.Ki,
                    url: null,
                    ve: null,
                    Je: null,
                    cg: 0
                }) {
                var h = al(g.systemId);
                h && (this.cf.set(h, g), qk(this.Cc, this.cf.ab()), this.Hg = !1)
            }
        }
        if (b.Hd)
            if (a = (a = N(f, 1836019574)) ? nh(a) : null, null === a) this.host.T(322, void 0, "no init", Yk);
            else {
                if (!e.D && 0 == e.c.length) {
                    d = 0;
                    b.Hd && e.yb && e.yb.za && (d = e.yb.za.start);
                    f = (f = N(f, 1936286840)) ? f.Bh(d) : null;
                    if (!f) {
                        C(Yk, "no segments");
                        return
                    }
                    e.c =
                        f
                }
                dk(c, a, {
                    time: b.interval.time,
                    duration: 0
                }, 0, !1)
            } else b = b.interval, e = e.U, 1 < this.gd.length && (e = this.gd[dl(this, a, d.index)], e = e.Se[a].U - e.start), dk(c, f, b, b.time + e, d.Z, void 0, !0), d.Z = !1
    };
    k.Nf = function() {
        return 1
    };
    var al = function(a) {
            return Vf.Ob(a) ? "playready" : Wf.Ob(a) ? "widevine" : Xf.Ob(a) ? "clearkey" : null
        },
        Zk = function(a, b, c) {
            if (b) {
                null !== b.I.value && (c.I = b.I.value);
                var d = b.timescale.value || 1,
                    e = new bh(b.U.value || "0");
                c.U = parseInt(e.toString(), 10) / d;
                e = new bh(e.toString());
                var f = b.c,
                    g = b.jd,
                    h = 0;
                g ? h = g.length : f && 0 < f.length && (h = f.length);
                for (var l = 0; l < h; l++) {
                    var m = g ? g[l].duration : b.duration.value || 0;
                    g && g[l].time && (e = new bh(g[l].time.toString()));
                    var p = parseInt(e.toString(), 10) / d,
                        u = new bh(e.toString());
                    if (!f || 0 >= f.length) var v =
                        null;
                    else {
                        v = f[l].media.value;
                        var w = a.resolve(new H(v)).toString();
                        v = !v && w.endsWith("/") ? w.slice(0, -1) : w
                    }
                    c.c.push({
                        time: p,
                        Ub: u,
                        duration: m / d,
                        url: v
                    });
                    e.add(m)
                }(d = c.yb) || (f = e = d = null, g = !0, (h = b.ze) && h.Kk.value ? (g = !1, d = h.Kk.value, h.za.start && h.za.end && (e = h.za.start, f = h.za.end)) : (e = 0, h && h.za.start && h.za.end && (e = h.za.start, f = h.za.end, g = !1), b.Wc.start && b.Wc.end && (e = Math.min(e, b.Wc.start), f = Math.max(f, b.Wc.end), g = !1), f || (f = 2048)), d = g ? null : {
                    url: d ? a.resolve(new H(d)).toString() : null,
                    za: null !== e && null !== f ? {
                        start: e,
                        end: f
                    } : null,
                    data: null
                });
                c.yb = d
            }
        },
        $k = function(a, b) {
            return {
                duration: (b.duration.value || 0) / (b.timescale.value || 1),
                url: a.resolve(new H(b.media.value)).toString(),
                ma: b.ma.value ? a.resolve(new H(b.ma.value)).toString() : null
            }
        },
        fl = function(a, b) {
            return a.replace(/\$Number(%0\d*[diuxXo]){0,1}\$/g, function(c) {
                var d = c.indexOf("%0");
                if (0 > d) return b;
                d = parseInt(c.substring(d + 2, c.length - 2), 10);
                switch (c.substr(c.length - 2, 1)) {
                    case "x":
                        return $f(b, 16, d);
                    case "X":
                        return $f(b, 16, d).toUpperCase();
                    case "o":
                        return $f(b, 8,
                            d);
                    default:
                        return $f(b, 10, d)
                }
            })
        },
        Yk = B("cast.player.dash.Protocol");
    var gl = function(a) {
            this.gg = a;
            this.xe = null;
            this.Li = this.Mc = 0
        },
        hl = function(a, b) {
            b = b.length > a.Mc ? b.subarray(0, a.Mc) : b;
            K(a.xe, b);
            a.Mc -= b.length
        };
    gl.prototype.append = function(a, b, c, d) {
        b = b.subarray(c, d);
        if (this.xe) return hl(this, b), 0 == this.Mc && (this.gg && this.gg("ID3", fh(this.xe), this.Li), this.Mc = this.Li = this.xe = null), 0;
        c = 0;
        73 != b[c++] || 68 != b[c++] || 51 != b[c++] ? c = null : (c += 3, d = b[c++] << 21 | b[c++] << 14 | b[c++] << 7 | b[c++], c += d);
        if (null === c) return 0;
        if (c <= b.length) return this.gg && this.gg("ID3", b.subarray(0, c), a), c;
        this.xe = new eh(c);
        this.Li = a;
        this.Mc = c;
        hl(this, b);
        return 0
    };
    var il = function(a, b, c, d) {
        Ih.call(this);
        this.sc = d;
        this.lb = null;
        this.Tf = b ? new gl(b) : null;
        this.bi = Infinity;
        this.Bm = c;
        for (this.ma(a); !this.Wf();) this.parse()
    };
    q(il, Ih);
    il.prototype.Uc = function() {
        return this.bi
    };
    il.prototype.ni = function(a) {
        Ih.prototype.ni.call(this, a);
        null === this.lb && (this.lb = this.sc ? this.Vb : this.Dd);
        a = jl(this.lb, this.sc ? this.Vb : this.Dd);
        a < this.bi && (this.bi = a)
    };
    il.prototype.pk = function(a, b, c) {
        if (this.Tf) {
            a = new sg(this.s.subarray(a, b + 1));
            if (c) {
                if (1 != I(a) >> 8) return;
                J(a, 2);
                J(a, 2);
                c = tg(a);
                J(a, c)
            }
            null === this.lb && (this.lb = this.Dd);
            this.Tf.append(this.Bm + (jl(this.lb, this.Vb) - this.lb), Ag(a), 0)
        }
    };
    var jl = function(a, b) {
        var c = Math.floor(a / 95443.7176888889),
            d = 95443.7176888889 * (c - 1) + b,
            e = 95443.7176888889 * (c + 0) + b;
        b = 95443.7176888889 * (c + 1) + b;
        c = Math.abs(d - a);
        var f = Math.abs(e - a);
        a = Math.abs(b - a);
        var g = c;
        f < c && (d = e, g = f);
        a < g && (d = b);
        return d
    };
    var ll = function(a, b) {
            var c = new gh;
            (new vj(Wf, kl(a, b))).l(c);
            return fh(c)
        },
        kl = function(a, b) {
            var c = new Bf;
            ze(c, 1, 1);
            var d = ag(a.He);
            G(c, 2).push(d);
            ze(c, 3, a.om);
            if (a = a.ol) {
                b && (a = window.atob(a));
                b = [];
                for (d = 0; d < a.length; d++) b.push(a.charCodeAt(d));
                b = new Uint8Array(b);
                ze(c, 4, b)
            }
            ze(c, 9, 1667392371);
            return c.Dg()
        },
        ml = [71, 64, 1, 16, 0, 1, 176, 45, 255, 255, 193, 0, 0, 9, 34, 99, 101, 224, 16, 99, 98, 99, 115, 0, 1, 0, 0, 1, 0, 16, 1, 237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237, 0, 143, 19, 198, 145, 164, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 71, 64, 17, 16, 127, 255, 255, 255, 0, 0, 0, 32, 112, 115, 115, 104, 0, 0, 0, 0, 237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 71, 64, 16, 48, 147, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 79, 16, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 1, 112, 213, 251, 214, 184, 46, 217, 62, 78, 249, 138, 228, 9, 49, 238, 51, 183
        ];
    var nl = function(a, b, c) {
            this.Yl = a;
            this.sampleRate = b;
            this.qb = c;
            this.uc = void 0
        },
        ol = function(a, b, c, d) {
            this.width = a;
            this.height = b;
            this.ld = c;
            this.We = d
        },
        pl = function(a, b, c, d, e, f) {
            this.Db = a;
            this.Hc = b;
            this.ml = c;
            this.Gl = d;
            this.audio = e;
            this.video = f
        },
        ql = function(a) {
            Q.call(this, 1836019574);
            this.m = a
        };
    q(ql, Q);
    ql.prototype.A = function() {
        (new wj(this.m.Hc)).l(this.b);
        var a = this.m.Db;
        a && a.ve && (new vj(a.systemId, a.ve)).l(this.b);
        (new rl(this.m)).l(this.b);
        (new sl(this.m)).l(this.b)
    };
    var sl = function(a) {
        Q.call(this, 1953653099);
        this.m = a
    };
    q(sl, Q);
    sl.prototype.A = function() {
        var a = 0,
            b = 0,
            c = this.m.video;
        c && (a = c.width, b = c.height);
        (new tj(a, b)).l(this.b);
        (new tl(this.m)).l(this.b)
    };
    var tl = function(a) {
        Q.call(this, 1835297121);
        this.m = a
    };
    q(tl, Q);
    tl.prototype.A = function() {
        (new sj(this.m.Hc)).l(this.b);
        (new rj(this.m.Gl)).l(this.b);
        (new ul(this.m)).l(this.b)
    };
    var ul = function(a) {
        Q.call(this, 1835626086);
        this.m = a
    };
    q(ul, Q);
    ul.prototype.A = function() {
        (new vl(this.m)).l(this.b)
    };
    var vl = function(a) {
        Q.call(this, 1937007212);
        this.m = a
    };
    q(vl, Q);
    vl.prototype.A = function() {
        (new wl(this.m)).l(this.b);
        this.m.video && (new mj).l(this.b)
    };
    var wl = function(a) {
        R.call(this, 1937011556, 0, 0);
        this.m = a
    };
    q(wl, R);
    wl.prototype.A = function() {
        this.b.j(1);
        (this.m.video ? new xl(this.m) : new yl(this.m)).l(this.b)
    };
    var yl = function(a) {
        Q.call(this, a.Db ? 1701733217 : 1836069985);
        this.m = a
    };
    q(yl, Q);
    yl.prototype.A = function() {
        K(this.b, [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0]);
        this.b.j(this.m.audio.sampleRate << 16);
        (new kj(this.m.audio.Yl, this.m.audio.qb)).l(this.b);
        this.m.Db && (new zl(this.m)).l(this.b)
    };
    var xl = function(a) {
        Q.call(this, a.Db ? 1701733238 : 1635148593);
        this.m = a
    };
    q(xl, Q);
    xl.prototype.A = function() {
        K(this.b, [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        this.b.rd(this.m.video.width);
        this.b.rd(this.m.video.height);
        K(this.b, [0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
        (new lj(this.m.video.ld, this.m.video.We)).l(this.b);
        this.m.Db && (new zl(this.m)).l(this.b)
    };
    var rl = function(a) {
        Q.call(this, 1836475768);
        this.m = a
    };
    q(rl, Q);
    rl.prototype.A = function() {
        (new uj(!this.m.video)).l(this.b)
    };
    var zl = function(a) {
        Q.call(this, 1936289382);
        this.m = a
    };
    q(zl, Q);
    zl.prototype.A = function() {
        (new qj(this.m.ml)).l(this.b);
        (new pj(this.m.Db.scheme || 1667591779, 0)).l(this.b);
        (new Al(this.m)).l(this.b)
    };
    var Al = function(a) {
        Q.call(this, 1935894633);
        this.m = a
    };
    q(Al, Q);
    Al.prototype.A = function() {
        var a = this.m.Db;
        a && a.Je && (new nj(a.cg, a.Je, a.nl)).l(this.b)
    };
    var Bl = function(a, b, c, d, e) {
        ql.call(this, new pl(a, b, 1836069985, 1936684398, new nl(c, d, e), null))
    };
    q(Bl, ql);
    var Cl = function(a, b, c, d, e, f) {
        ql.call(this, new pl(a, b, 1635148593, 1986618469, null, new ol(c, d, e, f)))
    };
    q(Cl, ql);
    var Dl = function(a, b, c, d) {
        Q.call(this, 1836019558);
        this.m = {
            sm: a,
            hl: b,
            tm: c,
            Ak: d
        }
    };
    q(Dl, Q);
    Dl.prototype.A = function() {
        (new zj(0)).l(this.b);
        (new El(this.m)).l(this.b)
    };
    var El = function(a) {
        Q.call(this, 1953653094);
        this.m = a
    };
    q(El, Q);
    El.prototype.A = function() {
        this.m.Ak && (new oj(this.m.Ak)).l(this.b);
        (new xj(this.m.sm)).l(this.b);
        (new ij(this.m.hl)).l(this.b);
        (new yj(this.m.tm)).l(this.b)
    };
    var Fl = function(a, b, c) {
        Q.call(this, 1836019558);
        this.ke = b;
        this.gm = a;
        this.Ig = c
    };
    q(Fl, Q);
    Fl.prototype.A = function() {
        for (var a = Gh(L(this.gm), void 0); 0 < a.length;) {
            var b = a.shift();
            switch (b.bb()) {
                case 1953653094:
                    (new Gl(b, this.ke, this.Ig)).l(this.b);
                    break;
                default:
                    b.l(this.b)
            }
        }
    };
    var Gl = function(a, b, c) {
        Q.call(this, 1953653094);
        this.ke = b;
        this.hm = a;
        this.Ig = c
    };
    q(Gl, Q);
    Gl.prototype.A = function() {
        for (var a = Gh(L(this.hm), void 0), b = null, c = !1, d = !1; 0 < a.length;) {
            var e = a.shift();
            switch (e.bb()) {
                case 1970628964:
                    e instanceof rh && (b = e);
                    break;
                case 1952868452:
                    var f = e;
                    f.nc & 32 && (this.Ig = !1);
                    hh(L(f), 0, 1);
                    e.l(this.b);
                    break;
                case 1953658222:
                    (new Hl(e, this.Ig)).l(this.b);
                    break;
                case 1935763823:
                    c = !0;
                    e.l(this.b);
                    break;
                case 1935763834:
                    d = !0;
                    e.l(this.b);
                    break;
                default:
                    e.l(this.b)
            }
        }(new ij(this.ke)).l(this.b);
        b && (d || (new jj(b.Qh ? 0 : 8, b.Ag)).l(this.b), c || (new hj(0)).l(this.b))
    };
    var Hl = function(a, b) {
        var c = a.nc,
            d = !1;
        var e = null;
        c & 1 || (d = !0, c |= 1);
        !b || c & 1024 || c & 4 || (c |= 4, e = 0);
        b = d;
        R.call(this, 1953658222, a.ka, c);
        this.xm = b;
        this.wj = e;
        this.im = a
    };
    q(Hl, R);
    Hl.prototype.A = function() {
        var a = new dh(L(this.im));
        this.b.j(I(a));
        this.xm && this.b.j(0);
        null !== this.wj && this.b.j(this.wj);
        K(this.b, Ag(a))
    };
    var Il = function(a, b, c) {
        sg.call(this, a);
        this.Tf = new gl(b);
        this.Ff = c
    };
    q(Il, sg);
    Il.prototype.vg = function() {
        throw Error("readAudioHeader is not implemented");
    };
    var Jl = function(a, b, c, d, e, f, g, h) {
        this.$i = a;
        this.Df = c;
        this.lb = d;
        this.ai = f;
        this.Ff = g;
        this.ul = h;
        this.re = [];
        this.sampleRate = 0;
        this.Bg = e;
        this.le = new Uint8Array([0, 0])
    };
    Jl.prototype.parse = function(a) {
        for (var b = this.Bf(this.Df), c = [], d = null; b.offset < b.buffer.length;) {
            var e = b.Tf.append(a, b.buffer, b.offset);
            b.offset += e;
            if (!e)
                if (d = b.vg()) d.Dk && (this.Bg = d.Dk), c.push(yg(b, d.zh)), a += this.Bg / d.sampleRate;
                else return Ic(Kl, "Neither ID3 nor ADTS header was found at " + Ag(b).byteOffset), !1
        }
        if (null === d) return Ic(Kl, "No ADTS header was found."), !1;
        b = kh(d.profile, d.sampleRate, d.di);
        if (null === b) return Ic(Kl, "Cannot generate audio codec private data."), !1;
        this.re = c;
        this.sampleRate =
            d.sampleRate;
        this.le = b;
        return !0
    };
    Jl.prototype.Bf = function() {
        throw Error("createdataReader is not implemented");
    };
    Jl.prototype.Uc = function() {
        return this.lb
    };
    Jl.prototype.Gd = function() {
        throw Error("getTimeScale is not implemented");
    };
    var Kl = B("cast.player.hls.PackedAudioParser");
    var Ll = function(a, b) {
        Il.call(this, a, b)
    };
    q(Ll, Il);
    Ll.prototype.vg = function() {
        var a = this.buffer.subarray(this.offset);
        if (255 != a[0] || 240 != (a[1] & 240)) return null;
        var b = ((a[3] & 3) << 11) + (a[4] << 3) + ((a[5] & 224) >> 5),
            c = a[2] >> 2 & 15,
            d = a[1] & 1 ? 7 : 9;
        this.offset += d;
        return {
            profile: (a[2] >> 6 & 3) + 1,
            sampleRate: ih[c],
            di: (a[2] << 2 & 4) + (a[3] >> 6 & 3),
            zh: b - d
        }
    };
    var Ml = function(a, b, c, d, e, f) {
        var g = a.match("mp4a.67") ? 103 : 64;
        Jl.call(this, g, a, b, c, 1024, d, e, f)
    };
    q(Ml, Jl);
    Ml.prototype.Bf = function(a) {
        return new Ll(a, this.ai)
    };
    Ml.prototype.Gd = function() {
        return 1E6
    };
    var Nl = [48E3, 44100, 32E3],
        Ol = [
            [64, 69, 96],
            [64, 70, 96],
            [80, 87, 120],
            [80, 88, 120],
            [96, 104, 144],
            [96, 105, 144],
            [112, 121, 168],
            [112, 122, 168],
            [128, 139, 192],
            [128, 140, 192],
            [160, 174, 240],
            [160, 175, 240],
            [192, 208, 288],
            [192, 209, 288],
            [224, 243, 336],
            [224, 244, 336],
            [256, 278, 384],
            [256, 279, 384],
            [320, 348, 480],
            [320, 349, 480],
            [384, 417, 576],
            [384, 418, 576],
            [448, 487, 672],
            [448, 488, 672],
            [512, 557, 768],
            [512, 558, 768],
            [640, 696, 960],
            [640, 697, 960],
            [768, 835, 1152],
            [768, 836, 1152],
            [896, 975, 1344],
            [896, 976, 1344],
            [1024, 1114, 1536],
            [1024, 1115, 1536],
            [1152, 1253, 1728],
            [1152, 1254, 1728],
            [1280, 1393, 1920],
            [1280, 1394, 1920]
        ],
        Pl = function(a, b, c) {
            Il.call(this, a, b, c)
        };
    q(Pl, Il);
    Pl.prototype.vg = function() {
        var a = this.buffer.subarray(this.offset),
            b = 0;
        if (11 != a[b++] || 119 != a[b++]) return null;
        b += 2;
        var c = a[b++];
        b = c >> 6 & 3;
        c = Ol[c & 63];
        return void 0 === c ? (this.Ff(316), null) : {
            profile: (a[2] >> 6 & 3) + 1,
            sampleRate: Nl[b],
            di: 6,
            zh: 2 * c[b]
        }
    };
    var Ql = function(a, b, c, d, e, f) {
        Jl.call(this, 165, a, b, c, 1536, d, e, f)
    };
    q(Ql, Jl);
    Ql.prototype.Bf = function(a) {
        return new Pl(a, this.ai, this.Ff)
    };
    Ql.prototype.Gd = function() {
        return this.sampleRate
    };
    var Rl = function(a, b) {
        this.a = a;
        this.Kh = !1;
        this.gh = b;
        this.gi = this.dm.bind(this);
        this.fi = this.kg.bind(this)
    };
    Rl.prototype.cancel = function() {
        this.Kh = !0
    };
    Rl.prototype.kg = function(a) {
        if (!this.Kh) {
            var b = void 0;
            a && a.name && a.message && (b = a.name + ": " + a.message);
            this.a.T(203, void 0, b)
        }
    };
    Rl.prototype.dm = function(a) {
        this.Kh || this.gh(a)
    };
    var Sl = function(a, b, c, d, e) {
        Rl.call(this, a, b);
        window.crypto.subtle.decrypt({
            name: "AES-CBC",
            iv: d
        }, c, e).then(this.gi, this.fi)
    };
    q(Sl, Rl);
    var Tl = [1, 2, 3, 6],
        Ul = B("cast.player.hls.Eac3Reader"),
        Vl = function() {
            Il.apply(this, arguments)
        };
    q(Vl, Il);
    Vl.prototype.vg = function() {
        var a = this.buffer.subarray(this.offset);
        if (11 != a[0] || 119 != a[1]) return null;
        var b = a[2] << 8 & 1792 | a[3],
            c = a[4] >> 6 & 3;
        3 === c ? (c = a[4] >> 4 & 3, a = 3, c = 3 > c ? Nl[c] / 2 : void 0) : (a = a[4] >> 4 & 3, c = Nl[c]);
        return void 0 === c ? (Ic(Ul, "Cannot determine sample rate."), null) : {
            profile: 0,
            sampleRate: c,
            Dk: 256 * Tl[a],
            di: 6,
            zh: 2 * (b + 1)
        }
    };
    var Wl = function(a, b, c, d, e, f) {
        Jl.call(this, 166, a, b, c, 256, d, e, f)
    };
    q(Wl, Jl);
    Wl.prototype.Bf = function(a) {
        return new Vl(a, this.ai, this.Ff)
    };
    Wl.prototype.Gd = function() {
        return this.sampleRate
    };
    var Xl = function(a, b, c) {
        Rl.call(this, a, b);
        window.crypto.subtle.importKey("raw", c, {
            name: "AES-CBC"
        }, !0, ["decrypt"]).then(this.gi, this.fi)
    };
    q(Xl, Rl);
    var Yl = function(a) {
        this.Qa = -1;
        this.i = null;
        this.Tl = this.Sl.bind(this);
        this.jm = a
    };
    Yl.prototype.Sl = function(a, b) {
        for (var c = 0, d = null, e = 0; e < b.length; e++)
            if (null !== b[e].Bc) {
                c = e;
                d = b[e].Bc;
                break
            }
        if (null === d) return null;
        b = -1;
        e = Infinity;
        for (var f = 0; f < a.length; f++) {
            var g = Math.abs(a[f].Bc - d);
            if (100 > g) return f - c;
            g < e && (b = f, e = g)
        }
        return 0 > b || e > 500 * this.i.Kg ? -1 : b - c
    };
    var Zl = function(a, b) {
        b = b[0].Di;
        for (var c = 0; c < a.length; c++)
            if (a[c].Di == b) return c;
        return null
    };
    k = Yl.prototype;
    k.update = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (0 > this.Qa) this.i = a;
        else if (0 == a.c.length) C($l, "new manifest has no segment");
        else {
            var c = this.i.c,
                d = c[this.Qa],
                e = a.c,
                f = {
                    Fd: Zl,
                    Rj: "sequence number"
                };
            var g = {
                Fd: this.Tl,
                Rj: "program date time"
            };
            g = this.i.Ch && a.Ch ? this.jm ? [f, g] : [g, f] : [f];
            a: {
                f = b;
                f = void 0 === f ? !1 : f;
                g = n(g);
                for (var h = g.next(); !h.done; h = g.next()) {
                    h = h.value;
                    b: {
                        var l = this.Qa;
                        var m = h.Fd,
                            p = f;
                        p = void 0 === p ? !1 : p;
                        var u = m(c, e);
                        if (null === u) {
                            u = m(e, c);
                            if (null === u) {
                                l = -1;
                                break b
                            }
                            u *= -1
                        }
                        m = l - u;
                        !(l < u) || this.i.S && p ? m >=
                            e.length && (e.length = 0, Array.prototype.push.apply(e, c), m = l) : (l = c[l], 0 < e.length && (e[0].pe = !0), e.splice(0, 0, l), m = 0);
                        l = m
                    }
                    if (0 > l) C($l, "No match was found using " + h.Rj);
                    else {
                        c = l;
                        break a
                    }
                }
                c = -1
            }!(0 > c) || this.i.S && b || (C($l, "New segments are appended after current"), 0 < e.length && (e[0].pe = !0), e.splice(0, 0, d), c = 0);
            0 > c ? (b = this.i.c[0], b = (this.Qa - c) * b.duration + b.Aa) : b = d.Aa - e[c].Aa;
            e = n(e);
            for (d = e.next(); !d.done; d = e.next()) d.value.Aa += b;
            this.Qa = 0 > c ? 0 : c;
            this.i = a
        }
    };
    k.next = function() {
        var a = this.Qa + 1;
        return a < this.i.c.length ? (this.Qa = a, !0) : !1
    };
    k.rc = function() {
        return !this.i.S && this.Qa == this.i.c.length - 1
    };
    k.Ba = function() {
        var a = this.i.c,
            b = a[0].Aa,
            c = a.length - 1;
        a = a[c].Aa + a[c].duration;
        this.i.S && (a -= 3 * this.i.Kg, a < b && (a = b));
        return {
            start: b,
            end: a
        }
    };
    k.seek = function(a) {
        var b = this.Ba();
        if (!b) return null;
        for (var c = this.i.c, d = n(c), e = d.next(); !e.done; e = d.next()) e.value.Z = !1;
        a < b.start && (a = b.start);
        a > b.end && (a = b.end);
        for (b = c.length - 1; 0 <= b; b--)
            if (a >= c[b].Aa) return this.Qa = b, c[this.Qa].Z = !0, a;
        return null
    };
    var am = function(a) {
            return 0 > a.Qa ? null : a.i.c[a.Qa]
        },
        $l = B("cast.player.hls.Iterator");
    var bm = function(a, b, c) {
        this.sc = c;
        c = N(a, 1952867444, void 0, !0);
        var d = 0;
        if (this.sc) {
            var e = N(a, 1953658222, void 0, !0);
            null !== e && (e = e.yg, d += 0 < e.length ? e[0] : 0);
            a = N(a, 1701606260, void 0, !0);
            null !== a && (e = a.Yh, 1 === a.sh && (a = e[0], d -= 0 < a ? a : 0))
        }
        this.ac = (c.Uc() + d) / b
    };
    bm.prototype.Uc = function() {
        return this.ac
    };
    var cm = function(a, b, c, d) {
        Rl.call(this, a, b);
        cast.__platform__.crypto.unwrapKey("raw", c, d, {
            name: "RSA-OAEP",
            hash: {
                name: "SHA-256"
            }
        }, {
            name: "AES-CBC",
            length: 128
        }, !1, ["decrypt"]).then(this.gi, this.fi)
    };
    q(cm, Rl);
    var Y = function(a, b, c, d) {
        z.call(this);
        this.a = a;
        this.J = c;
        this.qa = d;
        this.Sk = b;
        this.Y = null;
        this.Ia = new Yl(1 == this.a.preferSequenceNumberForPlaylistMatching);
        this.ek = this.bm.bind(this);
        this.qj = this.vl.bind(this);
        this.Ai = this.ug = null;
        this.xk = -1;
        this.Re = null;
        this.g = new E;
        zd(this.g);
        A(this.g, "success", this.$l, !1, this);
        A(this.g, "error", this.ak, !1, this);
        A(this.g, "timeout", this.ak, !1, this);
        this.B = new Gf;
        this.B.setResponse = this.zj.bind(this);
        this.Ie = this.Xe = this.Rh = this.Ab = this.oe = this.Oi = null;
        this.Nd = this.Oe = !1;
        this.ae = !0;
        this.sa = null;
        this.fl = {};
        this.wc = this.ia = this.qc = null;
        this.xc = new Map;
        this.Ed = -1;
        a = (b = r.navigator.userAgent.match(/CrKey\/(\d+)\.(\d+)\.[\d]{6}/)) && parseFloat(b[1]) || -1;
        b = b && parseFloat(b[2]) || -1; - 1 === a || -1 === b ? (C(dm, "Platform version not detected in user agent!"), a = !1) : a = a >= em && b >= fm;
        this.sc = a;
        this.Sd = null
    };
    q(Y, z);
    k = Y.prototype;
    k.G = function() {
        this.reset();
        this.g.L()
    };
    k.reset = function() {
        this.Rh = this.wc = null;
        this.ae = !0;
        this.qc = this.sa = this.Re = null;
        this.g.abort();
        this.Xe && (this.Xe.cancel(), this.Xe = null);
        this.oe && (this.oe.cancel(), this.oe = null);
        null !== this.ia && clearTimeout(this.ia)
    };
    k.bm = function(a) {
        this.Xe = null;
        this.Ie = a;
        this.ia = setTimeout(this.qj, 0)
    };
    k.$l = function(a) {
        this.zj(Kd(a.target))
    };
    k.zj = function(a) {
        var b = this;
        if (a) {
            a = new Uint8Array(a);
            if (this.a.processLicense && (a = this.a.processLicense(a), Zd(a))) {
                a.then(function(c) {
                    gm(b, c)
                });
                return
            }
            gm(this, a)
        } else this.a.T(313)
    };
    var gm = function(a, b) {
        a.Xe = a.a.Eh ? new cm(a.a, a.ek, b, a.Oi) : new Xl(a.a, a.ek, b)
    };
    Y.prototype.ak = function() {
        this.a.T(314, new Hf(this.B.url, this.g.Rb, Id(this.g), this.g.getAllResponseHeaders(), Kd(this.g)))
    };
    Y.prototype.vl = function() {
        var a = this.Re.info,
            b = this.Re.data;
        a && a.uc && this.Ie && b && (D(dm, "decrypt segment"), this.oe = new Sl(this.a, this.lm.bind(this, a), this.Ie, a.uc, b), this.ia = this.Re = null)
    };
    Y.prototype.lm = function(a, b) {
        this.Ye(a, new Uint8Array(b))
    };
    Y.prototype.Ye = function(a, b) {
        D(dm, "process segment");
        this.oe = null;
        var c;
        if (null != this.qa) switch (this.qa) {
            case 0:
                var d = new il(b, this.a.processMetadata, a.Aa, this.sc);
                break;
            case 1:
                d = hm(this, a, b), a.gb && (c = this.xc.get(a.gb))
        }
        if (null != this.J) switch (this.J) {
            case 2:
            case 6:
            case 1:
                if (a.lj) d = hm(this, a, b);
                else {
                    switch (this.J) {
                        case 2:
                            d = Ql;
                            break;
                        case 6:
                            d = Wl;
                            break;
                        default:
                            d = Ml
                    }
                    b = new d(this.Y.O.codecs, b, a.Aa, this.a.processMetadata, this.a.T.bind(this.a), this.a.decodeContentId);
                    var e = a.pe || a.Z;
                    d = this.fl;
                    var f = a.Ea ||
                        void 0,
                        g = a.uc || void 0,
                        h = d.endOfLastSegment;
                    h = e || void 0 === h ? b.lb : h;
                    if (b.parse(h)) {
                        b.lb = h;
                        d.endOfLastSegment = h + b.Bg / b.sampleRate * b.re.length;
                        d = new gh(2 * b.Df.length);
                        e && (e = null, f && (e = {
                            systemId: Wf,
                            url: null,
                            ve: kl(f, b.ul),
                            Je: new Uf(ag(f.He), !1),
                            nl: g,
                            cg: g ? g.length : 16,
                            scheme: 1667392371
                        }), D(Kl, "Built AudioMoov with objectType(0x" + b.$i.toString(16) + ") and sampleRate(" + b.sampleRate + ")"), (new Bl(e, b.Gd(), b.$i, b.sampleRate, b.le)).l(d));
                        g = h * b.Gd();
                        e = b.Bg / b.sampleRate * b.Gd();
                        h = b.re;
                        if (f) {
                            f = b.re;
                            for (var l = [], m = 0; m <
                                f.length; m++) {
                                var p = f[m].length;
                                if (0 == p % 16) l.push({
                                    Nk: [{
                                        eh: 16,
                                        fh: p - 16
                                    }]
                                });
                                else {
                                    var u = p % 16;
                                    l.push({
                                        Nk: [{
                                            eh: 16,
                                            fh: p - 16 - u
                                        }, {
                                            eh: u,
                                            fh: 0
                                        }]
                                    })
                                }
                            }
                            f = l
                        } else f = void 0;
                        (new Dl(e, g, h, f)).l(d);
                        (new Aj(b.re)).l(d);
                        d = fh(d);
                        Bh(d)
                    } else d = null;
                    f = d;
                    if (!f) {
                        this.a.T(315);
                        return
                    }
                    d = b;
                    b = f
                }
                break;
            case 4:
                break;
            case 7:
                d = hm(this, a, b);
                break;
            default:
                d = new il(b, this.a.processMetadata, a.Aa, this.sc)
        }
        if (a.pe || a.Z) this.sa = null, a.Z = !1;
        a = {
            time: a.Aa,
            duration: a.duration
        };
        g = d ? d.Uc() : a.time;
        if (f = null === this.sa && Infinity != g) D(dm, "start: " + g),
            this.sa = 4 == this.J ? 0 : g, this.qc = a, this.Sk && (e = this.Sk, e.ha && e.ha.Z(g, a));
        g = this.Ai;
        this.Ai = null;
        dk(g, b, a, this.sa || 0, f, c, d instanceof bm || d instanceof Jl)
    };
    var jm = function(a) {
            a.a.Eh && !a.Oi ? cast.__platform__.cryptokeys.getKeyByName("CKP").then(function(b) {
                a.Oi = b;
                im(a)
            }) : im(a)
        },
        im = function(a) {
            a.Ie = null;
            a.B.url = a.Ab;
            a.B.skipRequest = !1;
            if (a.a.updateLicenseRequestInfo && (a.a.updateLicenseRequestInfo(a.B), a.B.skipRequest)) return;
            a.g.ge = a.B.withCredentials;
            a.g.dc = Math.max(0, a.B.timeoutInterval);
            a.g.send(a.B.url, void 0, void 0, a.B.headers)
        };
    k = Y.prototype;
    k.processSegment = function(a, b, c) {
        this.Ai = c;
        this.Re = {
            data: b,
            info: a
        };
        (c = a.Uh) ? this.Ab == c && null !== this.Ie ? this.ia = setTimeout(this.qj, 0) : (this.Ab = c, jm(this)): this.Ye(a, b)
    };
    k.updateSegmentRequestInfo = function(a) {
        var b = am(this.Ia);
        if (b) {
            var c;
            if (this.Nd) this.Nd = !1, this.wc = c = b.gb, b = this.Y.w.Xh.get(c), c = b.Mb, b = b.url;
            else {
                if (1 === this.qa || 7 === this.J) b.timescale = this.xc.get(b.gb) || null;
                a.Ud = b;
                this.ae && (b.Z = !0, this.ae = !1);
                a.interval = this.getSegmentInterval();
                c = b.Mb;
                b = b.url
            }
            c && (a.headers = {}, a.headers.Range = "bytes=" + c.start + "-" + c.end);
            a.url = b
        }
    };
    k.getSegmentInterval = function() {
        var a = am(this.Ia);
        return a ? {
            time: a.Aa,
            duration: a.duration
        } : {
            time: 0,
            duration: 0
        }
    };
    k.Ba = function() {
        return this.Ia.Ba()
    };
    k.rc = function() {
        return this.Ia.rc()
    };
    var km = function(a) {
        var b = am(a.Ia);
        if (b) {
            var c = a.Sd && a.Sd.Ea && !b.Ea,
                d = b.Ea && (b.Ea.He !== a.Rh || b.pe) && (0 === a.J || 0 === a.qa);
            if (b.Gi || c || d) a.Oe = !0;
            b.gb !== a.wc && (a.Nd = !0)
        }
    };
    Y.prototype.tc = function() {
        var a = am(this.Ia),
            b = this.Ia.next();
        b && (this.Sd = a, km(this));
        return b
    };
    Y.prototype.seek = function(a) {
        var b = am(this.Ia);
        a = this.Ia.seek(a);
        "number" === typeof a && (this.Sd = b, km(this));
        return a
    };
    Y.prototype.Qe = function() {
        this.Ed = this.Y.duration;
        lm(this, this.Y.w)
    };
    var lm = function(a, b) {
        a.Ia.update(b, a.a.mediaElement && a.a.mediaElement.paused);
        a.ug && (ej(a.ug), a.ug = null)
    };
    Y.prototype.Gg = function(a, b, c) {
        this.xk = a;
        this.ug = b;
        this.ae = !0;
        this.Y && this.Y.w && this.Y.w.S && this.Y.Ic();
        this.Y = c;
        c.w ? lm(this, c.w) : c.load()
    };
    Y.prototype.getQualityLevel = function() {
        return this.xk
    };
    Y.prototype.Z = function(a, b) {
        this.ae = !0;
        this.sa = a;
        this.qc = b
    };
    Y.prototype.Fg = function(a) {
        this.Y.w.Xh.get(this.wc).ej = a;
        this.xc.set(this.wc, N(a, 1835296868, void 0, !0).xa)
    };
    var hm = function(a, b, c) {
        var d = b.timescale || a.xc.get(b.gb) || null;
        !a.xc.get(b.gb) && d && a.xc.set(b.gb, d);
        if (null === d) throw Error("Unable to derive timescale");
        return new bm(c, d, a.sc)
    };
    Y.prototype.se = function() {
        var a = am(this.Ia),
            b = a.gb;
        if (b && b !== this.wc) {
            if (a = this.Y.w.Xh.get(b).ej) this.Nd = !1, this.wc = b, this.xc.get(b) || this.xc.set(b, N(a, 1835296868, void 0, !0).xa);
            return a
        }
        b = this.Sd && this.Sd.Ea && !a.Ea;
        if (a.Gi || b) return this.Oe = !1, (b = bg("hls-sample-aes-init-segment")) && b.clear_leader ? Yd(window.atob(b.clear_leader)) : null;
        if (!a.Ea || !a.uc) return null;
        this.Oe = !1;
        this.Rh = a.Ea.He;
        b = a.Ea;
        a = a.uc;
        var c = this.a.decodeContentId;
        var d = (d = bg("hls-sample-aes-init-segment")) ? {
            wk: d.pssh_offset,
            Mj: d.key_id_offset,
            Lj: d.iv_offset,
            Ok: Yd(window.atob(d.template))
        } : {
            wk: 196,
            Mj: 530,
            Lj: 548,
            Ok: new Uint8Array(ml)
        };
        var e = d.Ok;
        e.set(ll(b, c), d.wk);
        e.set(ag(b.He), d.Mj);
        e.set(a, d.Lj);
        return e
    };
    Y.prototype.Mf = function() {
        var a = am(this.Ia);
        return a ? a.tf : null
    };
    Y.prototype.Md = function() {
        km(this);
        var a = this.Oe || this.Nd;
        return a || 1 !== this.qa && 7 !== this.J ? a : (a = am(this.Ia)) && a.gb !== this.wc ? this.Nd = !0 : this.Oe
    };
    Y.prototype.getDuration = function() {
        return this.Ed
    };
    var dm = B("cast.player.hls.Adaptation"),
        mm = function(a) {
            Y.call(this, a, null, 3)
        };
    q(mm, Y);
    mm.prototype.tc = function() {
        return null === this.sa || null === this.qc ? !1 : Y.prototype.tc.call(this)
    };
    mm.prototype.seek = function(a) {
        return null === this.sa || null === this.qc ? null : Y.prototype.seek.call(this, a)
    };
    mm.prototype.processSegment = function(a, b, c) {
        var d = {
                time: a.Aa,
                duration: a.duration
            },
            e = !1;
        if (null === this.sa || null === this.qc) b = new Uint8Array(0);
        else if (this.ae || a.Z) d = this.qc, e = !0;
        dk(c, b, d, this.sa || 0, e)
    };
    var em = 1,
        fm = 42;
    var nm = function(a, b, c) {
        this.il = new H(a);
        this.J = b;
        this.qa = c;
        this.f = 0;
        this.Jd = this.fe = this.ee = this.Ab = this.bc = this.Ka = null;
        this.uh = this.Ec = 0;
        this.Hi = this.rh = !1;
        this.Td = null;
        this.Cj = this.Bj = !1;
        this.Tj = new Map;
        this.Vh = this.eg = null;
        this.i = {
            Ij: !1,
            S: !0,
            og: null,
            $e: "none",
            Ch: !1,
            Kg: 0,
            Mi: 0,
            c: [],
            Ca: [],
            bd: [],
            ue: !1,
            Xh: this.Tj,
            Ri: null
        }
    };
    nm.prototype.parse = function(a) {
        a = n(a.split("\n"));
        for (var b = a.next(); !b.done; b = a.next())
            if (!om(this, b.value)) return C(Z, "failed to parse HLS playlist"), this.i = null;
        if (this.Bj && this.Cj)
            for (a = 0; a < this.i.Ca.length;) b = this.i.Ca[a].codecs, pm(this.i.Ca[a].mimeType, b) ? (C(Z, "filtered out " + b + " stream"), this.i.Ca.splice(a, 1)) : a++;
        qm(this);
        if (0 < this.i.c.length && (a = this.i.c[0], !a.Ea))
            for (b = 1; b < this.i.c.length; b++) this.i.c[b].Ea && (a.Gi = !0);
        return this.i
    };
    var qm = function(a) {
            for (var b = [], c = {}, d = 0; d < a.i.bd.length; c = {
                    ie: c.ie
                }, d++) {
                var e = a.i.bd[d];
                "AUDIO" == e.type && (c.ie = e.groupId, c.ie && ((e = a.i.Ca.find(function(f) {
                    return function(g) {
                        return g.Kb.includes(f.ie)
                    }
                }(c))) ? (e = e.codecs.split(",").find(function(f) {
                    return 0 > f.search(rm)
                })) && (sm(a.J, e) || b.push(d)) : C(Z, "No matching audio group " + c.ie + " found in video streams!")))
            }
            c = {};
            for (d = 0; d < b.length; c = {
                    uf: c.uf
                }, d++) e = b[d] - d, c.uf = a.i.bd[e].groupId, a.i.bd.splice(e, 1), c.uf && (a.i.Ca = a.i.Ca.filter(function(f) {
                return function(g) {
                    return !g.Kb.includes(f.uf)
                }
            }(c)));
            tm() && (b = a.i.Ca.filter(function(f) {
                if (!f.xg.height || !f.framerate) return !0;
                var g = f.xg.height,
                    h = f.xg.width;
                f = f.framerate;
                return 720 > g && 1280 > h || 720 >= g && 1280 >= h && 30 >= f
            }), b.length < a.i.Ca.length ? (va("Cast.MPL.NewmanResolutionRestricted", !0), a.i.Ca = b) : va("Cast.MPL.NewmanResolutionRestricted", !1))
        },
        tm = function() {
            var a = bg("device-capabilities"),
                b = r.navigator.userAgent.includes("Mozilla/5.0 (X11; Linux aarch64)");
            return a && a.touch_input_supported && 1280 >= window.innerWidth && 800 >= window.innerHeight && b
        },
        sm = function(a,
            b) {
            return !(2 === a && "mp4a.a5" != b && "ac-3" != b || 6 === a && !Zf(b) || 2 !== a && ("mp4a.a5" == b || "ac-3" == b) || 6 !== a && Zf(b))
        },
        pm = function(a, b) {
            return 0 <= a.indexOf("audio") || 0 > b.indexOf(",") && (0 == b.indexOf("mp4a.") || "ac-3" == b) ? !0 : !1
        },
        um = function(a, b) {
            var c = new H(b);
            c.Wb || (b = a.il.resolve(c).toString());
            return b
        },
        om = function(a, b) {
            b = b.trim();
            if (!b) return !0;
            if ("#" != b[0]) {
                if (3 != a.f && 4 != a.f) vm(a, "URI"), a = !1;
                else {
                    b = um(a, b);
                    if (3 == a.f) {
                        a.Ka.Bc = a.Td;
                        null !== a.Td && (a.Td += 1E3 * a.Ka.duration);
                        if (a.Ab || a.ee || a.fe) {
                            a.Ka.Uh = a.Ab;
                            a.Ka.Ea =
                                a.ee;
                            a.Ka.tf = a.fe;
                            var c = a.Ka;
                            if (a.Jd) var d = wm(a.Jd);
                            else {
                                d = a.Ka.Di;
                                for (var e = new Uint8Array(16), f = 15; 0 <= f; f--) e[f] = d & 255, d >>= 8;
                                d = e
                            }
                            c.uc = d
                        }
                        a.eg && (a.Ka.gb = a.eg);
                        a.Ka.url = b;
                        a.Ka.lj = 0 <= (new H(b)).ib.search(xm);
                        a.i.c.push(a.Ka)
                    } else a.bc.url = b, a.i.Ca.push(a.bc);
                    a.f = 2;
                    a = !0
                }
                return a
            }
            c = "#EXTINF:";
            if (0 === b.indexOf(c)) return d = b.indexOf(","), b = b.substr(c.length, (0 <= d ? d : b.length) - c.length), 2 != a.f && 1 != a.f ? (vm(a, "EXTINF"), a = !1) : (b = parseFloat(b), a.Ka = {
                Di: a.Ec,
                url: "",
                Mb: null,
                Aa: a.uh,
                duration: b,
                pe: a.rh,
                Bc: a.Td,
                Uh: null,
                Ea: null,
                tf: null,
                timescale: null,
                uc: null,
                Z: !1,
                Gi: a.Hi,
                gb: null,
                lj: !1
            }, a.i.Mi += b, a.uh += b, a.rh = !1, a.Hi = !1, a.Ec += 1, a.f = 3, a = !0), a;
            c = "#EXT-X-MAP:";
            if (0 === b.indexOf(c)) return ym(a, b.substr(c.length));
            c = "#EXT-X-KEY:";
            if (0 === b.indexOf(c)) return zm(a, b.substr(c.length));
            c = "#EXT-X-SESSION-KEY:";
            if (0 === b.indexOf(c)) return zm(a, b.substr(c.length), !0);
            if (0 === b.indexOf("#EXT-X-DISCONTINUITY-SEQUENCE")) return 1 != a.f ? (vm(a, "EXT-X-DISCONTINUITY-SEQUENCE"), a = !1) : a = !0, a;
            if (0 === b.indexOf("#EXT-X-DISCONTINUITY")) return 2 !=
                a.f && 1 != a.f ? (vm(a, "EXT-X-DISCONTINUITY"), a = !1) : (a.rh = !0, a.f = 2, a = !0), a;
            c = "#EXT-X-PROGRAM-DATE-TIME:";
            if (0 === b.indexOf(c)) return b = b.substr(c.length), 2 != a.f && 3 != a.f && 1 != a.f ? (vm(a, "EXT-X-PROGRAM-DATE-TIME"), a = !1) : (c = Date.parse(b), isNaN(c) ? (C(Z, "cannot parse #EXT-X-PROGRAM-DATE-TIME: " + b), a = !1) : (a.Td = c, a = a.i.Ch = !0)), a;
            c = "#EXT-X-BYTERANGE:";
            if (0 === b.indexOf(c)) return b = b.substr(c.length), 3 != a.f ? (vm(a, "EXT-X-BYTERANGE"), a = !1) : (b = Am(a, b), a.Ka.Mb = b, a.Vh = b.end, a = !0), a;
            if (0 === b.indexOf("#EXTM3U")) return 0 !=
                a.f ? (vm(a, "EXTM3U"), a = !1) : (a.f = 1, a = !0), a;
            c = "#EXT-X-PLAYLIST-TYPE:";
            if (0 === b.indexOf(c)) {
                b = b.substr(c.length);
                if (1 != a.f) vm(a, "EXT-X-PLAYLIST-TYPE"), a = !1;
                else {
                    if ("EVENT" == b || "VOD" == b) a.i.og = b;
                    a = !0
                }
                return a
            }
            if (0 === b.indexOf("#EXT-X-ENDLIST")) return 2 != a.f && 1 != a.f ? (vm(a, "EXT-X-ENDLIST"), a = !1) : (a.i.S = !1, a = !0), a;
            c = "#EXT-X-STREAM-INF:";
            if (0 === b.indexOf(c)) {
                b = b.substr(c.length);
                if (1 != a.f && 2 != a.f) vm(a, "EXT-X-STREAM-INF"), a = !1;
                else {
                    var g = b.match("BANDWIDTH=([0-9]+)");
                    if (g) {
                        c = parseInt(g[1], 10);
                        d = !1;
                        e = "video/mp2t";
                        if (f = Bm(b, 'CODECS="([^"]*)"'))
                            if (d = !0, pm(e, f)) {
                                a.Bj = !0;
                                var h = a.J;
                                7 == h || 1 == h || 2 == h || 6 == h ? e = "audio/mp4" : 4 == h && (e = "audio/mpeg", f = "")
                            } else a.Cj = !0, f = f.replace("mp4a.40.34", "mp4a.6B"), 1 == a.qa && (e = "video/mp4");
                        else f = "avc1.4D401E,mp4a.40.2";
                        h = {
                            width: null,
                            height: null
                        };
                        if (g = b.match("RESOLUTION=(\\d+x\\d+)")) g = g[1].split("x"), 2 === g.length && (h.width = parseInt(g[0], 10), h.height = parseInt(g[1], 10));
                        a.bc = {
                            Ji: "variant",
                            mimeType: e,
                            bitrate: c,
                            codecs: f,
                            codecsProvided: d,
                            xg: h,
                            framerate: Bm(b, "FRAME-RATE=([0-9]+)"),
                            Kb: [Bm(b,
                                'AUDIO="([^"]*)"')],
                            Dm: Bm(b, 'SUBTITLES="([^"]*)"'),
                            ll: Bm(b, 'CLOSED-CAPTIONS="([^"]*)"'),
                            url: ""
                        };
                        a.i.Ij = !0;
                        a.f = 4;
                        a = !0
                    } else C(Z, "no BANDWIDTH attribute"), a = !1
                }
                return a
            }
            c = "#EXT-X-TARGETDURATION:";
            if (0 === b.indexOf(c)) return b = b.substr(c.length), 1 != a.f ? (vm(a, "EXT-X-TARGETDURATION"), a = !1) : (a.i.Kg = parseInt(b, 10), a = !0), a;
            c = "#EXT-X-MEDIA-SEQUENCE:";
            if (0 === b.indexOf(c)) return b = b.substr(c.length), 1 != a.f ? (vm(a, "EXT-X-MEDIA-SEQUENCE"), a = !1) : (a.Ec = parseInt(b, 10), a = !0), a;
            c = "#EXT-X-MEDIA:";
            return 0 === b.indexOf(c) ?
                Cm(a, b.substr(c.length)) : !0
        },
        vm = function(a, b) {
            C(Z, "unexpected " + b + ": state " + a.f)
        },
        Cm = function(a, b) {
            if (2 != a.f && 1 != a.f) return vm(a, "EXT-X-MEDIA"), !1;
            var c = null,
                d = b.match('URI="([^"]*)"');
            null !== d && (c = um(a, d[1]));
            var e = Bm(b, "TYPE=(AUDIO|VIDEO|SUBTITLES|CLOSED-CAPTIONS)"),
                f = Bm(b, 'GROUP-ID="([^"]*)"'),
                g = Bm(b, 'CHARACTERISTICS="([^"]*)"'),
                h = Bm(b, 'NAME="([^"]*)"'),
                l = Bm(b, 'LANGUAGE="([^"]*)"'),
                m = Bm(b, 'ASSOC-LANGUAGE="([^"]*)"'),
                p = Bm(b, 'CHANNELS="([^"]*)"');
            switch (e) {
                case "SUBTITLES":
                    var u = "webvtt";
                    var v =
                        "text/vtt";
                    break;
                case "CLOSED-CAPTIONS":
                    u = "webvtt";
                    v = "text/mp2t";
                    break;
                case "AUDIO":
                    if (!c) return a.i.ue = !0;
                    v = 0 == a.J ? "video/mp2t" : "audio/mp4";
                    u = cg(a.J);
                    break;
                default:
                    return !0
            }
            var w = !1;
            d = b.match('DEFAULT="?(YES|NO)"?');
            null !== d && (w = "YES" === d[1]);
            var U = !1;
            d = b.match('AUTOSELECT="?(YES|NO)"?');
            null !== d && (U = "YES" === d[1] || w);
            var V = !1;
            d = b.match('FORCED="?(YES|NO)"?');
            null !== d && (V = "YES" === d[1]);
            (c || "CLOSED-CAPTIONS" == e) && a.i.bd.push({
                Ji: "media",
                type: e,
                mimeType: v,
                codecs: u,
                url: c,
                name: h,
                language: l,
                assocLanguage: m,
                isDefault: w,
                groupId: f,
                characteristics: g,
                autoSelect: U,
                channels: p,
                forced: V
            });
            return !0
        },
        Am = function(a, b) {
            var c = b.split("@");
            b = parseInt(c[0], 10);
            if (1 < c.length) a = parseInt(c[1], 10);
            else {
                if (null == a.Vh) return C(Z, "Expected EXT-X-BYTERANGE to either have offset or to come after another EXT-X-BYTERANGE"), null;
                a = a.Vh + 1
            }
            return {
                start: a,
                end: a + b - 1
            }
        },
        ym = function(a, b) {
            if (1 != a.f && 2 != a.f && 3 != a.f) return vm(a, "EXT-X-MAP"), !1;
            var c = Bm(b, 'URI="([^"]*)"');
            if (!c) return C(Z, "expected #EXT-X-MAP to have URI: " + b), !1;
            c = um(a,
                c);
            b = Bm(b, 'BYTERANGE="([^"]*)"');
            var d = null;
            if (b && (d = Am(a, b), !d)) return !1;
            c = {
                url: c,
                Mb: d,
                ej: null
            };
            b = c.Mb;
            d = "url=" + c.url + ",byterange=";
            a.eg = b ? "" + d + b.start + "-" + b.end : d + "all";
            a.Tj.set(a.eg, c);
            return !0
        },
        zm = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            if (2 != a.f && 3 != a.f && 1 != a.f) return vm(a, c ? "EXT-X-SESSION-KEY" : "EXT-X-KEY"), !1;
            var d;
            if (d = c) 0 <= b.indexOf("METHOD=NONE") ? (C(Z, "EXT-X-SESSION-KEY METHOD cannot be NONE."), d = !1) : d = !0, d = !d;
            if (d) return !1;
            var e;
            if (0 <= b.indexOf("METHOD=AES-128")) {
                if (e = b.match('URI="([^"]*)"')) a.Ab =
                    um(a, e[1]);
                a.Jd = Bm(b, "IV=0[x|X]([0-9a-fA-F]+)");
                a.ee = null;
                a.i.$e = "aes_128";
                c && Dm(a);
                return !0
            }
            if (0 <= b.indexOf("METHOD=SAMPLE-AES")) {
                var f = 0 <= b.indexOf("METHOD=SAMPLE-AES-CTR");
                e = b.match('KEYFORMAT="([^"]*)"');
                if (!e) return C(Z, "Missing KEYFORMAT for SAMPLE-AES"), !0;
                d = e[1];
                if ("com.widevine" !== d && "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" !== d) return C(Z, "KEYFORMAT '" + d + "' is not supported for SAMPLE-AES."), !0;
                if (1 != bg("enable-hls-sample-aes") && !f) return C(Z, "SAMPLE-AES not support by Cast platform."), !1;
                if (e = b.match('URI="data:.*?,(.*?)"'))
                    if (e = e[1], "com.widevine" === d) {
                        if (c) return C(Z, "EXT-X-SESSION-KEY is not designed for V1 Widevine DRM, ignoring\n                 key."), !0;
                        a: {
                            try {
                                var g = JSON.parse(window.atob(e))
                            } catch (l) {
                                C(Z, "Failed to decode widevine data!");
                                g = !1;
                                break a
                            }
                            var h = g.key_ids;
                            h && Array.isArray(h) && 0 != h.length ? (a.ee = {
                                om: g.provider,
                                ol: g.content_id,
                                He: h[0]
                            }, g = !0) : (C(Z, "no Widevine key ID"), g = !1)
                        }
                        if (!g) return !1
                    } else {
                        if (g = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === d) {
                            a: {
                                try {
                                    h =
                                        window.atob(e)
                                } catch (l) {
                                    C(Z, "Failed to decode widevine PSSH data!");
                                    g = !1;
                                    break a
                                }
                                a.fe = Yd(h);
                                g = !0
                            }
                            g = !g
                        }
                        if (g) return !1
                    }
                a.Jd = Bm(b, "IV=0[x|X]([0-9a-fA-F]+)");
                a.Ab = null;
                a.i.$e = "widevine";
                c && Dm(a);
                return !0
            }
            if (0 <= b.indexOf("METHOD=NONE")) return a.ee && (a.Hi = !0), a.Ab = null, a.ee = null, a.fe = null, a.Jd = null, !0;
            C(Z, "Unsupported KEY.");
            return !1
        },
        Dm = function(a) {
            null !== a.i.Ri ? C(Z, "Master playlist cannot have more than 1 session key per key format!") : null === a.Ab && a.fe && (a.i.Ri = {
                Uh: null,
                Ea: null,
                tf: a.fe,
                uc: wm(a.Jd)
            })
        },
        Bm = function(a, b) {
            return (a = a.match(b)) ? a[1] : null
        },
        wm = function(a) {
            if (null === a) return null;
            for (var b = new Uint8Array(16), c = 15, d = a.length; 0 < d; d -= 2, c--) b[c] = parseInt(1 < d ? a.substr(d - 2, 2) : a.substr(0, 1), 16);
            return b
        },
        Z = B("cast.player.hls.Parser"),
        rm = /avc1\.|hvc1\.|dvh1\./,
        xm = /\.(mp4|m4a|mp4a|m4s)$/;
    var Em = function(a, b, c, d, e, f) {
        f = void 0 === f ? !0 : f;
        z.call(this);
        this.a = a;
        this.Ue = b;
        this.Sb = new Yi(this);
        this.ta = null;
        this.Hm = this.Qg.bind(this);
        this.O = c;
        this.duration = -1;
        this.w = null;
        this.J = d;
        this.qa = e;
        this.Bi = f;
        this.Fe = this.Xf = void 0;
        this.lh = 0
    };
    q(Em, z);
    k = Em.prototype;
    k.G = function() {
        this.Sb.L();
        null !== this.ta && (clearTimeout(this.ta), this.ta = null);
        z.prototype.G.call(this)
    };
    k.load = function() {
        this.Qg()
    };
    k.Ic = function() {
        this.duration = -1;
        this.w = null;
        this.Sb.abort();
        null !== this.ta && (clearTimeout(this.ta), this.ta = null)
    };
    k.Qg = function() {
        this.O.url ? (D(Fm, "update: " + this.O.url), this.Sb.Kd(this.a, this.O.url)) : Ic(Fm, "cannot load stream without url")
    };
    k.lg = function(a) {
        if (a) {
            var b = new nm(this.O.url, this.J, this.qa),
                c = this.w;
            if (this.w = b.parse(a)) {
                this.w.S && (this.Fe = !1, "EVENT" == this.w.og && (this.Xf = !1));
                if (c && c.S) {
                    var d = this.w;
                    a = c.c[0];
                    b = c.c[c.c.length - 1];
                    var e = d.c[0];
                    d = d.c[d.c.length - 1];
                    a.url !== e.url || b.url !== d.url || a.Mb !== e.Mb || b.Mb !== d.Mb || a.Bc !== e.Bc || b.Bc !== d.Bc ? (this.lh = 0, "EVENT" != c.og && (this.w.c.length == c.c.length ? this.Xf = !0 : this.w.c.length > c.c.length && (this.Xf = !1)), this.Fe = !this.w.S) : (this.lh++, 3 == this.lh && (this.Fe = !0))
                }
                this.w.S && !this.Fe ? (c =
                    1E3 * this.w.Kg, this.ta = setTimeout(this.Hm, c), D(Fm, "update in: " + c)) : this.duration = this.w.Mi;
                this.Ue.Qe(this)
            } else this.a.T(412)
        } else this.a.T(312, Wi(this.Sb))
    };
    var Fm = B("cast.player.hls.Playlist");
    var Gm = function(a, b, c, d, e, f) {
        z.call(this);
        this.a = a;
        this.Sb = new Yi(this);
        this.Me = b;
        this.Rl = c;
        this.Ue = d;
        this.J = e;
        this.qa = f;
        this.Da = [];
        this.Ja = [];
        this.cb = [];
        this.de = [];
        this.vb = {};
        this.ue = !1;
        this.w = null
    };
    q(Gm, z);
    Gm.prototype.G = function() {
        this.Sb.L();
        for (var a = n(this.Ja), b = a.next(); !b.done; b = a.next()) b.value.L();
        this.Ja.length = 0;
        this.cb.length = 0;
        a = n(this.Da);
        for (b = a.next(); !b.done; b = a.next()) b.value.L();
        this.Da.length = 0;
        this.de = [];
        this.vb = {};
        z.prototype.G.call(this)
    };
    Gm.prototype.load = function() {
        this.Sb.Kd(this.a, this.a.url)
    };
    Gm.prototype.lg = function(a) {
        if (a) {
            var b = this.Sb.od;
            if (b)
                if (this.w = (new nm(b, this.J, this.qa)).parse(a)) {
                    this.ue = this.w.ue;
                    if (this.w.Ij) {
                        if (0 === this.w.Ca.length) {
                            this.a.T(411);
                            return
                        }
                        b = this.Rl;
                        a = this.w.Ri;
                        if (null !== a) {
                            for (var c, d, e = n(b.fa.w.Ca), f = e.next(); !f.done; f = e.next()) {
                                f = f.value;
                                var g = eg(f.codecs);
                                if (void 0 !== g) {
                                    d = f.mimeType + ';codecs="' + g + '"';
                                    break
                                }
                            }
                            e = n(b.fa.w.bd);
                            for (f = e.next(); !f.done; f = e.next())
                                if (g = f.value, f = g.mimeType, g = g.codecs, Ld(f) || Nd(g))
                                    if (g = fg(g), void 0 !== g) {
                                        c = f + ';codecs="' + g + '"';
                                        break
                                    }
                            e =
                                this.w.$e;
                            "widevine" === e && (qk(b.xd, [e], d, c), b.xd = null);
                            a.tf && b.Cf.createSession(a.tf);
                            b.Wh.nd()
                        }
                        c = {};
                        d = n(this.w.Ca);
                        for (b = d.next(); !b.done; b = d.next()) b = b.value, void 0 === c[b.url] ? (a = new Em(this.a, this.Ue, b, this.J, this.qa), this.Da.push(a), c[b.url] = this.Da.length - 1) : this.Da[c[b.url]].O.Kb = this.Da[c[b.url]].O.Kb.concat(b.Kb);
                        for (c = 0; c < this.Da.length; c++) d = this.Da[c].O, d.Kb.length && (this.de[c] || (this.de[c] = []), this.de[c] = this.de[c].concat(d.Kb))
                    } else {
                        switch (this.J) {
                            case 1:
                            case 7:
                                c = "mp4a.40.2";
                                d = "audio/mp4";
                                break;
                            case 2:
                                c = "ac-3";
                                d = "audio/mp4";
                                break;
                            case 6:
                                c = "mp4a.a6";
                                d = "audio/mp4";
                                break;
                            case 4:
                                c = "";
                                d = "audio/mpeg";
                                break;
                            case 5:
                                c = "mp4a.40.2";
                                d = "video/mp2t";
                                break;
                            default:
                                c = "avc1.4D401E,mp4a.40.2", d = "video/mp2t"
                        }
                        1 == this.qa && (d = "video/mp4");
                        c = new Em(this.a, this.Ue, {
                            Ji: "variant",
                            mimeType: d,
                            bitrate: 0,
                            codecs: c,
                            xg: {
                                width: null,
                                height: null
                            },
                            framerate: null,
                            Kb: [],
                            Dm: null,
                            ll: null,
                            url: b
                        }, this.J, this.qa);
                        this.Da.push(c)
                    }
                    c = n(this.w.bd);
                    for (d = c.next(); !d.done; d = c.next()) d = d.value, b = 0, "AUDIO" == d.type && void 0 !== this.J &&
                        (b = this.J), b = new Em(this.a, this.Ue, d, b), "CLOSED-CAPTIONS" == d.type && this.a.onCue || this.Ja.push(b);
                    Hm(this);
                    this.Me.onManifestReady()
                } else this.a.T(411)
        } else this.a.T(311, Wi(this.Sb))
    };
    var Im = function(a) {
            for (var b = {}, c = 0; c < a.Ja.length; c++) {
                var d = a.Ja[c].O;
                if ("AUDIO" == d.type && void 0 !== d.groupId) {
                    var e = d.groupId,
                        f = {};
                    e in b || (b[e] = f);
                    b[d.groupId][d.language + d.name] = c
                } else a.cb.push(Ua(a.Ja[c]))
            }
            return b
        },
        Hm = function(a) {
            var b = Im(a),
                c = [];
            for (e in b) b.hasOwnProperty(e) && c.push(b[e]);
            b = Object.keys(b);
            if (0 == c.length) a.cb = a.Ja;
            else {
                var d = Object.keys(c[0]).length;
                var e = 0;
                for (var f = 1; f < c.length; f++) {
                    var g = Object.keys(c[f]).length;
                    g < d && (d = g, e = f)
                }
                0 != e && C(Jm, "Group has different number of tracks.");
                for (var h in c[e]) a.vb[h] = [c[e][h]];
                for (h = 0; h < c.length; h++)
                    if (h != e) {
                        d = c[h];
                        f = {};
                        for (var l in d) a.vb[l] ? a.vb[l].push(d[l]) : (f.Xg = b[h], a.Da.every(function(p) {
                            return function(u) {
                                return u.O.Kb.includes(p.Xg)
                            }
                        }(f)) && (a.vb[l] = [d[l]])), f = {
                            Xg: f.Xg
                        }
                    }
                c = [];
                for (var m in a.vb) a.vb[m].sort(), l = a.vb[m].find(function(p) {
                    return a.Ja[p].O.isDefault
                }), l = void 0 !== l ? l : a.vb[m][0], c.push(Ua(a.Ja[l]));
                a.cb.unshift.apply(a.cb, c instanceof Array ? c : ba(n(c)))
            }
        },
        Km = function(a, b) {
            var c = a.cb[b],
                d = c.O;
            if ("AUDIO" != d.type) {
                if (a = a.Ja.find(function(g) {
                        return g.O ==
                            d
                    })) return a
            } else
                for (var e = n(a.vb[d.language + d.name]), f = e.next(); !f.done; f = e.next())
                    if (f = f.value, a.Ja[f].Bi) return a.Ja[f];
            C(Jm, "No playlist is selectable with " + b + ".");
            return c
        },
        Lm = function(a, b) {
            var c = a.de[b];
            a.Ja.forEach(function(d) {
                "AUDIO" == d.O.type && (d.O.groupId && c.includes(d.O.groupId) ? d.Bi = !0 : d.Bi = !1)
            })
        },
        Jm = B("cast.player.hls.MasterPlaylist");
    var Mm = function(a, b, c) {
        this.a = a;
        this.J = b;
        this.qa = void 0 === c ? 0 : c;
        this.Cf = this.xd = this.Wh = this.Me = null;
        this.kh = {};
        this.fa = null;
        this.Bb = new Y(a, this, void 0, this.qa);
        this.ha = this.da = null;
        this.Mh = this.Oh = void 0
    };
    k = Mm.prototype;
    k.load = function(a) {
        this.Cf = this.xd = this.Wh = this.Me = a;
        this.fa = new Gm(this.a, this, this, this, this.J, this.qa);
        this.fa.load();
        y("Cast.MPL.HlsVideoSegmentFormat", this.qa)
    };
    k.Ic = function() {
        this.Bb.L();
        this.da && (this.da.L(), this.da = null);
        this.ha && (this.ha.L(), this.ha = null);
        this.fa && (this.fa.L(), this.fa = null)
    };
    k.onManifestReady = function() {
        var a = this.getDefaultAudioStreamIndex();
        this.enableStream(a, !0);
        a = !0;
        for (var b = n(this.fa.Da), c = b.next(); !c.done; c = b.next())
            if (c = c.value, !pm(c.O.mimeType, c.O.codecs)) {
                a = !1;
                break
            }
        a && void 0 !== this.J && (a = this.Bb, a.J = this.J, a.qa = void 0);
        if (this.a.onManifestReady) this.a.onManifestReady();
        this.Me.onManifestReady();
        this.Me = null
    };
    k.getDefaultAudioStreamIndex = function() {
        var a = this.fa.cb,
            b = -1;
        if (this.fa.ue || !a.length) return b;
        for (var c = 0; c < a.length; c++) {
            var d = a[c].O;
            if ("AUDIO" === d.type)
                if (d.isDefault) {
                    b = c;
                    break
                } else "mp4a.a5" !== d.codecs && "mp4a.a6" !== d.codecs || -1 !== b ? -1 === b && (b = c) : b = c
        }
        return b + 1
    };
    k.getStreamCount = function() {
        return this.fa.cb.length + 1
    };
    k.enableStream = function(a, b, c) {
        if (0 < a) {
            a = Km(this.fa, a - 1);
            var d = a.O.type;
            "AUDIO" == d ? this.da && this.da.Y == a || (this.da && (this.da.L(), this.da = null), b && (b = cg(this.J), Yf("audio/mp4", b) ? (this.da = new Y(this.a, this, void 0 !== this.J ? this.J : 1), this.da.Y = a, c && c.Jf()) : C(Qf, "audio codec " + b + " is not supported, will not create separate source buffer for it."))) : "SUBTITLES" == d && (this.ha && (this.ha.L(), this.ha = null), b && (this.ha = new mm(this.a), this.ha.Y = a, this.ha.Z(this.Bb.sa, this.Bb.qc)))
        }
    };
    k.isStreamEnabled = function(a) {
        return null !== Nm(this, a)
    };
    var Nm = function(a, b) {
        0 == b ? a = a.Bb : (b = Km(a.fa, b - 1), a = null !== a.da && a.da.Y == b ? a.da : null !== a.ha && a.ha.Y == b ? a.ha : null);
        return a
    };
    k = Mm.prototype;
    k.getQualityLevel = function(a) {
        return Nm(this, a).getQualityLevel()
    };
    k.getStreamInfo = function(a) {
        var b = [],
            c;
        if (0 == a) {
            b = [];
            a = this.fa.Da;
            for (c = 0; c < a.length; c++) b.push(a[c].O.bitrate);
            a = this.fa.Da[0].O;
            c = a.codecs;
            if (this.da)
                for (var d = a.codecs.split(","), e = 0; e < d.length; e++)
                    if (0 == d[e].search(rm)) {
                        c = d[e];
                        break
                    }
        } else {
            a = this.fa.cb[a - 1].O;
            b.push(0);
            c = a.codecs;
            var f = new Jf({
                isDefault: a.isDefault,
                url: a.url,
                characteristics: a.characteristics,
                groupId: a.groupId,
                autoSelect: a.autoSelect,
                channels: a.channels,
                forced: a.forced,
                assocLanguage: a.assocLanguage
            })
        }
        return new If(c, a.mimeType,
            b, a.language, a.name, null, f)
    };
    k.Gg = function(a, b, c, d) {
        var e = Nm(this, a),
            f = 0 == a ? this.fa.Da[b] : Km(this.fa, a - 1);
        if (0 == a) {
            Lm(this.fa, b);
            if (this.da && this.da.Y) a: {
                for (a = 0; a < this.fa.cb.length; a++) {
                    var g = this.fa.cb[a].O;
                    if ("AUDIO" == g.type && g.language + g.name == this.da.Y.O.language + this.da.Y.O.name) {
                        a += 1;
                        break a
                    }
                }
                a = -1
            } else a = this.getDefaultAudioStreamIndex();
            this.enableStream(a, !0, d);
            D(Qf, "Switched to media " + a + ".")
        }
        e.Gg(b, c, f)
    };
    k.reset = function(a) {
        Nm(this, a).reset()
    };
    k.Ba = function(a) {
        return Nm(this, a).Ba()
    };
    k.Qe = function(a) {
        void 0 === this.Oh && (va("Cast.MPL.Live", a.w.S), this.Oh = a.w.S);
        void 0 === this.Mh && (this.Mh = "EVENT" == a.w.og ? !0 : !1);
        this.Bb.Y == a ? this.Bb.Qe() : null !== this.da && this.da.Y == a ? this.da.Qe() : null !== this.ha && this.ha.Y == a && this.ha.Qe();
        var b = a.O.Ji;
        if (!this.kh[b] || "none" === this.kh[b]) {
            var c = a.w.$e;
            switch (c) {
                case "widevine":
                    this.xd && (qk(this.xd, [c]), this.xd = null);
                    break;
                case "aes_128":
                    this.a.Eh && (c = "aes_128_ckp", a.w.$e = c);
                    Xd(c, 2);
                    break;
                case "none":
                    break;
                default:
                    C(Qf, "Unexpected HLS protection type")
            }
            this.kh[b] =
                c
        }
        this.Wh.nd()
    };
    k.updateLicenseRequestInfo = function() {};
    k.getDuration = function() {
        return this.Bb.getDuration()
    };
    k.seek = function(a, b) {
        return Nm(this, a).seek(b)
    };
    k.tc = function(a) {
        return Nm(this, a).tc()
    };
    k.isLiveStream = function() {
        return this.Oh || !1
    };
    k.isEventStream = function() {
        return this.Mh || !1
    };
    k.isLiveSeekableRangeMovingWindow = function() {
        var a = this.Bb.Y;
        return a ? a.Xf : void 0
    };
    k.isLiveDone = function() {
        var a = this.Bb.Y;
        return a ? a.Fe : void 0
    };
    k.rc = function(a) {
        return Nm(this, a).rc()
    };
    k.getSegmentInterval = function(a) {
        return Nm(this, a).getSegmentInterval()
    };
    k.Md = function(a) {
        return Nm(this, a).Md()
    };
    k.Fg = function(a, b) {
        Nm(this, a).Fg(b)
    };
    k.se = function(a) {
        return Nm(this, a).se()
    };
    k.Mf = function(a) {
        return Nm(this, a).Mf()
    };
    k.updateSegmentRequestInfo = function(a, b) {
        Nm(this, a).updateSegmentRequestInfo(b)
    };
    k.processSegment = function(a, b, c) {
        b.Hd ? dk(c, b.data, {
            time: 0,
            duration: 0
        }, 0, !0) : Nm(this, a).processSegment(b.Ud, b.data, c)
    };
    k.Nf = function() {
        return 2
    };
    Mm.prototype.getStreamInfo = Mm.prototype.getStreamInfo;
    Mm.prototype.getQualityLevel = Mm.prototype.getQualityLevel;
    Mm.prototype.isStreamEnabled = Mm.prototype.isStreamEnabled;
    Mm.prototype.enableStream = Mm.prototype.enableStream;
    Mm.prototype.getStreamCount = Mm.prototype.getStreamCount;
    Mm.prototype.getDefaultAudioStreamIndex = Mm.prototype.getDefaultAudioStreamIndex;
    var Qm = function(a) {
            this.S = new Ck("IsLive");
            this.uj = new Bk("DVRWindowLength");
            this.Hc = new Bk("TimeScale");
            for (this.duration = new Bk("Duration"); a;) {
                if ("SmoothStreamingMedia" == a.nodeName) {
                    Hk(a.attributes, this);
                    break
                }
                a = a.nextElementSibling
            }
            this.streams = [];
            this.Db = null;
            if (a)
                for (this.Hc.value || (this.Hc.value = 1E7), a = a.firstElementChild; null !== a; a = a.nextElementSibling)
                    if ("StreamIndex" == a.nodeName) {
                        var b = new Om(a, this.Hc.value);
                        0 < b.jb.length && this.streams.push(b)
                    } else "Protection" == a.nodeName && (this.Db = new Pm(a.firstElementChild))
        },
        Rm = function(a, b) {
            X.call(this, a, b)
        };
    q(Rm, X);
    Rm.prototype.parse = function(a) {
        switch (a) {
            case "H264":
            case "AVC1":
                this.value = "avc1.4D40";
                break;
            case "AACL":
                this.value = "mp4a.40.2";
                break;
            case "EC-3":
                this.value = "mp4a.a6";
                break;
            case "AACH":
                this.value = "mp4a.40.5";
                break;
            case "DFXP":
            case "TTML":
                this.value = "ttml";
                break;
            default:
                this.value = null
        }
    };
    var Sm = function() {
        T.call(this, "CodecPrivateData");
        this.We = this.ld = null
    };
    q(Sm, T);
    Sm.prototype.parse = function(a) {
        T.prototype.parse.call(this, a);
        a = a.split("00000001");
        3 == a.length && (this.ld = ag(a[1]), this.We = ag(a[2]))
    };
    var Tm = function() {
        T.call(this, "CodecPrivateData");
        this.value = null
    };
    q(Tm, T);
    Tm.prototype.parse = function(a) {
        T.prototype.parse.call(this, a);
        a && (this.value = ag(a))
    };
    var Um = function(a) {
            this.bitrate = new Bk("Bitrate");
            this.format = new Rm("FourCC", a)
        },
        Vm = function(a) {
            Um.call(this, "ttml");
            Hk(a.attributes, this)
        };
    q(Vm, Um);
    var Wm = function(a) {
        Um.call(this, "avc1.4D401E");
        this.width = new Bk("MaxWidth");
        this.height = new Bk("MaxHeight");
        this.qb = new Sm;
        Hk(a.attributes, this)
    };
    q(Wm, Um);
    var Xm = function(a) {
        Um.call(this, "mp4a.40.2");
        this.sampleRate = new Bk("SamplingRate");
        this.channels = new Bk("Channels");
        this.qb = new Tm;
        Hk(a.attributes, this)
    };
    q(Xm, Um);
    var Om = function(a, b) {
            this.type = new X("Type");
            this.url = new X("Url");
            this.name = new X("Name");
            this.language = new X("Language");
            Hk(a.attributes, this);
            this.cc = 0;
            switch (this.type.value) {
                case "video":
                    this.cc = 2;
                    break;
                case "audio":
                    this.cc = 1;
                    break;
                case "text":
                    this.cc = 3
            }
            this.c = [];
            this.jb = [];
            var c = new bh("0");
            for (a = a.firstElementChild; null !== a; a = a.nextElementSibling)
                if ("QualityLevel" == a.nodeName) {
                    var d = a;
                    switch (this.cc) {
                        case 2:
                            d = new Wm(d);
                            break;
                        case 1:
                            d = new Xm(d);
                            break;
                        case 3:
                            d = new Vm(d);
                            break;
                        default:
                            d = null
                    }
                    d &&
                        d.format.value && this.jb.push(d)
                } else if ("c" == a.nodeName) {
                var e = a;
                d = b;
                var f = e.attributes.getNamedItem("t");
                f && c.reset(f.value);
                f = null;
                var g = -1;
                e.attributes.getNamedItem("d") && (f = parseInt(e.attributes.d.value, 10), g = f / d);
                e = (e = e.attributes.getNamedItem("r")) ? parseInt(e.value, 10) : 1;
                for (var h = 0; h < e; h++) this.c.push({
                    time: parseInt(c.toString(), 10) / d,
                    duration: g,
                    Ub: new bh(c.toString()),
                    offset: 0,
                    size: 0,
                    url: null
                }), null !== f && c.add(f)
            }
            c = this.c.length - 1;
            for (a = 0; a < c; a++)
                if (d = this.c[a], f = this.c[a + 1], 0 > d.duration) {
                    f =
                        f.Ub;
                    g = d.Ub;
                    if (f.ca == g.ca) f = 0;
                    else {
                        if (!ch(f, g)) throw Error("Value must be smaller than the current value");
                        h = e = 0;
                        for (var l = 1, m = 0; m < f.ca.length; m++) {
                            var p = parseInt(f.ca.charAt(f.ca.length - 1 - m), 10) - (m < g.ca.length ? parseInt(g.ca.charAt(g.ca.length - 1 - m), 10) : 0) - h;
                            h = 0 > p ? 1 : 0;
                            e += (h ? 10 + p : p) * l;
                            l *= 10
                        }
                        if (h) throw Error("Value must be smaller than the current value");
                        if (e > Number.MAX_SAFE_INTEGER) throw Error("Difference lost precision");
                        f = e
                    }
                    d.duration = f / b
                }
        },
        Pm = function(a) {
            this.systemId = new Gk("SystemID");
            Hk(a.attributes,
                this);
            this.Ze = null;
            this.systemId.value && Vf.Ob(this.systemId.value) && (this.Ze = Zi(Yd(window.atob(a.textContent.trim()))))
        };
    B("cast.player.smooth");
    var Ym = function(a) {
        P.call(this, a);
        this.af = null;
        this.Ya = 1E7;
        this.Ef = null
    };
    q(Ym, P);
    k = Ym.prototype;
    k.ci = function(a) {
        var b = a.Db;
        if (b) {
            b = b.Ze;
            if (null === b) {
                this.Eb("invalid protection info");
                return
            }
            this.af = b
        }
        a.Hc.value && (this.Ya = a.Hc.value);
        a.duration.value && (this.duration = a.duration.value / this.Ya);
        gj(this, 1 == a.S.value);
        this.Ii = !!this.S && this.host.enableSmoothLiveRefresh;
        this.S && (this.duration = -1, a.uj.value ? (this.Ef = a.uj.value / this.Ya, this.Lh = !1, this.Nh = !0) : (this.Ef = Infinity, this.Lh = !0, this.Nh = !1));
        b = Infinity;
        for (var c = n(a.streams), d = c.next(); !d.done; d = c.next()) d = d.value, (2 == d.cc || 1 == d.cc) && d.c[0].time <
            b && (b = d.c[0].time);
        c = [];
        a = n(a.streams);
        for (d = a.next(); !d.done; d = a.next()) {
            var e = d.value;
            if (0 == e.jb.length) {
                this.Eb("no quality levels");
                return
            }
            d = e.jb[0].format.value;
            if (null === d) {
                this.Eb("unknown media format");
                return
            }
            var f = null;
            if (2 == e.cc) a: {
                f = b;
                var g = e.jb[0];
                if (null === g.qb.ld) this.Eb("no sps"), f = null;
                else {
                    g = g.qb.ld[3].toString(16);
                    1 == g.length && (g = "0" + g);
                    for (var h = Zm(2, "video/mp4", d + g.toLowerCase(), e.language.value, e.name.value), l = 0; l < e.jb.length; l++) {
                        g = e.jb[l];
                        if (null === g.bitrate.value || null ===
                            g.width.value || null === g.height.value || null === g.qb.ld || null === g.qb.We) {
                            this.Eb("invalid video quality");
                            f = null;
                            break a
                        }
                        var m = this.af,
                            p = this.Ya,
                            u = g.width.value,
                            v = g.height.value,
                            w = g.qb.ld,
                            U = g.qb.We,
                            V = new gh;
                        (new Cl(m, p, u, v, w, U)).l(V);
                        h.v.push($m(e.url.value, g.bitrate.value, f, e.c, fh(V)))
                    }
                    f = h
                }
            } else if (1 == e.cc) a: {
                f = b;
                g = Zm(1, "audio/mp4", d, e.language.value, e.name.value);
                for (h = 0; h < e.jb.length; h++) {
                    l = e.jb[h];
                    if (null === l.bitrate.value || null === l.sampleRate.value) {
                        this.Eb("invalid audio quality");
                        f = null;
                        break a
                    }(m =
                        l.qb.value) || (m = l.channels.value, m = kh(2, l.sampleRate.value, null !== m ? m : 2));
                    v = m;
                    if (null === v) {
                        this.Eb("invalid audio codec private data");
                        f = null;
                        break a
                    }
                    m = this.af;
                    p = this.Ya;
                    u = l.sampleRate.value;
                    w = "mp4a.a6" == d ? 166 : 64;
                    U = new gh;
                    (new Bl(m, p, w, u, v)).l(U);
                    g.v.push($m(e.url.value, l.bitrate.value, f, e.c, fh(U)))
                }
                f = g
            } else if (3 == e.cc) {
                f = b;
                g = Zm(3, "text/mp4", d, e.language.value, e.name.value, !1);
                for (h = 0; h < e.jb.length; h++) g.v.push($m(e.url.value, e.jb[h].bitrate.value || 0, f, e.c, null));
                f = g
            }
            f && ("mp4a.a6" == d ? c.push(f) : this.h.push(f))
        }
        Array.prototype.push.apply(this.h,
            c)
    };
    k.si = function() {
        this.host.T(331, Wi(this.ad))
    };
    k.Eb = function(a) {
        this.host.T(431, void 0, a, an)
    };
    k.mi = function(a) {
        a = (new DOMParser).parseFromString(a, "text/xml");
        a.firstChild && (a = new Qm(a.firstChild), this.ci(a))
    };
    k.Pi = function() {
        this.af && qk(this.Cc, ["playready"])
    };
    k.updateLicenseRequestInfo = function(a) {
        a.headers = {};
        a.headers["content-type"] = "text/xml;charset=utf-8";
        a.url = this.af.url
    };
    k.se = function(a) {
        a = this.h[a];
        a.Wa = !1;
        return a.v[a.X].yb.data
    };
    k.reset = function(a) {
        P.prototype.reset.call(this, a);
        this.h[a].Z = !0
    };
    k.updateSegmentRequestInfo = function(a, b) {
        P.prototype.updateSegmentRequestInfo.call(this, a, b);
        var c = this.h[a];
        a = c.index;
        c = c.v[c.X];
        var d = c.url;
        d = d.replace(bn, c.bitrate.toString());
        d = d.replace(cn, c.c[a].Ub.toString());
        b.url = this.uri.resolve(new H(d)).toString().toString()
    };
    k.processSegment = function(a, b, c) {
        var d = this.h[a],
            e = b.data,
            f = b.interval;
        if (b.Hd) dk(c, e, {
            time: f.time,
            duration: 0
        }, 0, !1);
        else {
            if (this.S) {
                var g = this.Ya;
                var h = (h = N(e, 1970628964, ph, !0)) ? h.Bh(g) : null;
                if (null === h || 0 == h.length) C(an, "no new segments");
                else {
                    a = this.h[a];
                    a: if (g = a.v[a.X].c, 0 != h.length) {
                        var l = h[0].time,
                            m = dj(l, g);
                        if (0 > m)
                            if (m = g[g.length - 1], Math.abs(m.time + m.duration - l) < .5 * m.duration) m = g.length;
                            else {
                                C(an, "new segments are out of sync with segments list.");
                                break a
                            }
                        if (!(m + h.length <= g.length))
                            for (g.splice(m,
                                    g.length - m), h = n(h), l = h.next(); !l.done; l = h.next()) g.push(l.value)
                    }
                    dn(a, this.Ef)
                }
                this.Cc.nd();
                if (b.headers && (b = b.headers.match('ChildTrack="([^"]*)"'))) {
                    b = n(b[1].split(/,|;/));
                    for (a = b.next(); !a.done; a = b.next())
                        if (a = a.value.match("([^=]*)=([0-9]*)"))
                            for (g = a[1], h = n(this.h), l = h.next(); !l.done; l = h.next())
                                if (l = l.value, g == l.name) {
                                    g = l.v[0].c;
                                    a = a[2];
                                    h = parseInt(a, 10) / this.Ya;
                                    (0 == g.length || g[g.length - 1].time < h) && g.push({
                                        time: h,
                                        duration: 0,
                                        Ub: new bh(a),
                                        offset: 0,
                                        size: 0,
                                        url: null
                                    });
                                    break
                                }
                    b = n(this.h);
                    for (l = b.next(); !l.done; l =
                        b.next()) dn(l.value, this.Ef)
                }
            }
            b = f.time + d.v[d.X].U;
            if (3 == d.type) e = (e = N(e, 1835295092)) ? L(e) : null;
            else {
                a = b * this.Ya;
                g = 2 == d.type;
                h = Gh(e);
                l = new gh(e.byteLength + 1024);
                m = null;
                for (e = 0; 0 < h.length;) {
                    var p = h.shift();
                    switch (p.bb()) {
                        case 1836019558:
                            m = N(L(p), 1970628964, sh, !0);
                            (new Fl(p, a, g)).l(l);
                            break;
                        case 1835295092:
                            var u = null;
                            m && (u = m.xi ? m.xi : new Uint8Array([]));
                            e = u ? u.length : 0;
                            (new Aj(u ? [u, L(p)] : [L(p)])).l(l);
                            break;
                        default:
                            p.l(l)
                    }
                }
                a = fh(l);
                Bh(a, e);
                e = a
            }
            null === e ? this.host.T(332, void 0, "no media data", an) : (dk(c, e,
                f, b, d.Z, void 0, !0), d.Z = !1)
        }
    };
    k.Nf = function() {
        return 3
    };
    var Zm = function(a, b, c, d, e, f) {
            return {
                name: e,
                type: a,
                enabled: !1,
                mimeType: b,
                Z: !0,
                v: [],
                language: d,
                Wa: void 0 !== f ? f : !0,
                codecs: c,
                index: -1,
                X: -1
            }
        },
        $m = function(a, b, c, d, e) {
            return {
                url: a || "",
                bitrate: b,
                U: c,
                c: d,
                D: null,
                I: null,
                yb: e ? {
                    url: null,
                    za: null,
                    data: e
                } : null
            }
        },
        dn = function(a, b) {
            var c = a.v[0].c,
                d = 0;
            if (b && Infinity !== b)
                for (var e = 0, f = 2 * c[0].duration, g = c.length - 1; 0 <= g; g--)
                    if (e + c[g].duration < b + f) e += c[g].duration;
                    else {
                        d = g + 1;
                        break
                    } else d = c.length - 1E4;
            0 < d && a.index >= d && (c.splice(0, d), a.index -= d)
        },
        an = B("cast.player.smooth.Protocol"),
        bn = /{bitrate}|{Bitrate}/,
        cn = /{start time}|{start_time}/;
    x("cast.player.api.CreateDashStreamingProtocol", function(a) {
        y("Cast.MPL.StreamingProtocolType", 1);
        return new Xk(a)
    });
    x("cast.player.api.CreateHlsStreamingProtocol", function(a, b, c) {
        y("Cast.MPL.StreamingProtocolType", 2);
        return new Mm(a, b, c)
    });
    x("cast.player.api.CreateSmoothStreamingProtocol", function(a) {
        y("Cast.MPL.StreamingProtocolType", 3);
        return new Ym(a)
    });
}).call(window);