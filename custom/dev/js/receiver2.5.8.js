(function() {
    var _ = window.caf_ = {
        '3pp': 1
    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var ca, da, ea, fa, ka, na, ma, ra, sa, ta, ua, va, ya, wa, xa, za, Aa, Ba, Ca, Da, Ea, Ha, Oa, Pa, Ta, Ua, Va, Xa, Za, $a, hb, gb, jb, ib, nb, sb, xb, yb, wb, Jb, Mb, Ob, Nb, Rb, Vb, jc, qc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Ic, Jc, Lc, Kc, Mc, Nc, Qc, Rc, Pc, Uc, Vc, Wc, Xc, Yc, Zc, $c, ad, bd, dd, ed, gd, hd, B, jd, nd, qd, rd, wd, Ad, Bd, Cd, Dd, Ed, Id, Ld, Rd, Nd, Wd, Vd, Pd, Zd, $d, be, ae, ce, de, ee, fe, ge, ke, le, re, se, te, ve, we, ye, ze, Be, Ce, Ge, Ee, He, Me, Ne, Pe, Qe, Se, Te, Ue, We, Ye, $e, af, Xe, Ze, Ke, Re, ff, df, bf, cf, gf, ef, Le, Ve, lf, nf, mf, of, pf, qf, rf, sf, uf, L, Bf, Cf, Df, Ef, xf, yf,
        Af, Hf, Jf, Kf, Gf, If, Mf, Nf, Sf, Tf, Uf, $f, ag, hg, eg, fg, gg, ig, jg, kg, ng, mg, pg, og, qg, rg, sg, tg, ug, xg, Bg, Eg, Gg, Hg, Fg, Dg, Ig, Kg, Lg, Mg, Ng, Og, Pg, Rg, Sg, Yg, Zg, $g, Ag, Xg, dh, gh, ih, kh, mh, oh, qh, sh, uh, wh, xh, yh, zh, ah, ch, Ah, hh, eh, lh, nh, jh, bh, Bh, Ch, ph, rh, th, vh, Dh, Jh, Eh, Kh, Lh, Mh, Ph, Nh, Oh, Qh, Sh, Th, Uh, Rh, Wh, Zh, Yh, Xh, bi, ci, di, ei, fi, gi, hi, ii, ai, li, mi, si, ti, ui, ri, vi, wi, ni, oi, xi, zi, pi, Ai, Bi, qi, Ci, Di, Ei, Fi, Gi, Hi, Ii, Ji, Ki, Li, Mi, Pi, Oi, Ni, Si, Ti, Ui, Xi, Yi, Vi, Zi, $i, aj, bj, dj, fj, Wi, ej, hj, gj, ij, Qi, cj, jj, lj, mj, nj, oj, pj, qj, rj, sj, tj, uj, vj, wj,
        xj, yj, zj, Aj, Bj, Dj, Cj, Ej, Fj, Gj, Hj, Ij, Mj, Lj, Qj, Rj, Jj, Sj, Tj, Uj, Vj, Kj, Wj, Xj, Yj, Zj, bk, dk, ek, Pj, fk, Oj, Nj, ck, ak, gk, hk, ik, jk, kk, lk, mk, nk, ok, pk, qk, rk, tk, sk, xk, vk, wk, zk, Ak, Bk, Ck, Hk, Ek, Fk, Gk, Ik, Jk, Kk, Lk, Dk, Rk, Nk, Ok, Qk, Mk, Sk, Uk, Vk, Wk, Xk, Yk, Zk, bl, el, fl, gl, dl, ml, ol, ql, rl, sl, xl, Dl, yl, Cl, El, Gl, Hl, Il, Jl, Kl, Ll, Nl, Ol, Pl, Ql, Rl, Sl, Tl, Ul, Vl, Zl, am, bm, cm, em, dm, fm, gm, jm, mm, nm, om, pm, um, sm, zm, Am, Bm, Cm, Dm, Em, Fm, Im, Lm, Km, Nm, Om, Mm, Pm, Qm, Rm, Sm, Tm, Um, Wm, $m, an, cn, en, fn, Xm, Vm, Zm, bn, gn, dn, ln, mn, on, nn, kn, hn, jn, pn, xn, qn, vn, sn, tn, un,
        yn, wn, rn, Cn, An, Dn, Bn, zn, En, Fn, Gn, Hn, In, Jn, Kn, Ln, Mn, Nn, On, Tn, Wn, Qn, Zn, ao, bo, co, Yn, Sn, Rn, Pn, eo, fo, go, jo, ho, mo, lo, no, po, qo, ro, so, to, uo, wo, xo, yo, vo, zo, Bo, Eo, Fo, Io, Go, Po, Ho, Qo, Mo, Ro, So, To, O, Vo, Wo, Xo, Zo, $o, ap, bp, cp, dp, ep, fp, gp, hp, ip, jp, kp, lp, mp, np, op, Uo, pp, qp, rp, sp, tp, up, vp, wp, xp, yp, zp, Ap, Yo, Bp, Cp, Dp, Ep, Ip, Jp, Kp, Lp, Mp, Np, Op, Pp, Qp, Rp, Sp, Tp, Up, Vp, Wp, Xp, Yp, Zp, $p, aq, bq, cq, dq, eq, fq, gq, iq, jq, kq, lq, mq, oq, qq, pq, rq, sq, uq, vq, wq, xq, yq, zq, Aq, Bq, Dq, Eq, Fq, Gq, Iq, Jq, Kq, Lq, Mq, Nq, Oq, Pq, Qq, Rq, Sq, Tq, Uq, Vq, Wq, Xq, Yq, Zq, $q, ar,
        br, cr, dr, er, fr, hr, jr, lr, ir, kr, mr, or, vr, xr, zr, Br, Cr, Dr, yr, wr, Er, Fr, Ar, Gr, P, Hr, Ir, Jr, Kr, Mr, Nr, Or, Pr, Rr, Sr, Zr, Yr, Xr, Ur, Vr, bs, cs, ds, fs, gs, hs, is, js, ks, ls, ms, ns, rs, os, ps, qs, ss, vs, ts, ws, xs, ys, Bs, Cs, Es, Ds, Fs, Hs, Is, Ms, Os, Ks, Ls, Ps, Qs, Rs, Ss, Us, Vs, Ws, Xs, Zs, $s, at, bt, et, ct, dt, ft, ht, it, jt, kt, lt, mt, nt, ot, qt, rt, tt, ut, vt, wt, xt, yt, pt, st, zt, Ct, Bt, Dt, Et, Ft, Gt, Ht, Jt, Kt, It, Lt, Mt, Nt, Ot, Pt, Qt, Rt, St, Tt, Xt, Yt, Ut, Zt, Wt, $t, eu, au, fu, gu, hu, du, cu, ju, iu, ku, lu, mu, Q, ou, ru, su, uu, vu, wu, xu, yu, zu, Au, Bu, Cu, Fu, Gu, Ju, Ku, Lu, Mu, R, Ou, Qu, Pu,
        Ru, Tu, Wu, Vu, Xu, ko, Yu, Zu, $u, av, cv, bv, gv, dv, hv, iv, nv, ov, pv, qv, fv, tv, uv, Av, sv, Bv, kv, vv, zv, mv, yv, Ev, Dv, Cv, wv, xv, lv, rv, jv, ev, Hv, Iv, Gv, Mv, Nv, Ov, Qv, Rv, $v, Tv, aw, bw, cw, dw, ew, fw, gw, hw, iw, jw, kw, lw, mw, nw, ow, pw, qw, rw, sw, tw, uw, vw, ww, xw, yw, zw, Aw, Qw, Bw, Xn, Rw, Tw, Uw, Vw, ja, ha, Jo, La, Ma;
    ca = function(a) {
        return function() {
            return _.ba[a].apply(this, arguments)
        }
    };
    da = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    ea = function(a) {
        a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        return globalThis
    };
    fa = function() {
        fa = function() {};
        ha.Symbol || (ha.Symbol = ia)
    };
    ka = function(a, b) {
        this.g = a;
        ja(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    };
    na = function() {
        fa();
        var a = ha.Symbol.iterator;
        a || (a = ha.Symbol.iterator = ha.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && ja(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ma(da(this))
            }
        });
        na = function() {}
    };
    ma = function(a) {
        na();
        a = {
            next: a
        };
        a[ha.Symbol.iterator] = function() {
            return this
        };
        return a
    };
    _.p = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: da(a)
        }
    };
    _.oa = function(a) {
        if (!(a instanceof Array)) {
            a = _.p(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    _.q = function(a, b) {
        a.prototype = pa(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.eb = b.prototype
    };
    ra = function() {
        this.o = !1;
        this.h = null;
        this.A = void 0;
        this.g = 1;
        this.C = 0;
        this.l = null
    };
    sa = function(a) {
        if (a.o) throw new TypeError("Generator is already running");
        a.o = !0
    };
    ta = function(a, b) {
        a.l = {
            Sn: b,
            Zo: !0
        };
        a.g = a.C
    };
    ua = function(a, b) {
        a.g = 2;
        return {
            value: b
        }
    };
    va = function(a) {
        this.g = new ra;
        this.h = a
    };
    ya = function(a, b) {
        sa(a.g);
        var c = a.g.h;
        if (c) return wa(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return xa(a)
    };
    wa = function(a, b, c, d) {
        try {
            var e = b.call(a.g.h, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.o = !1, e;
            var f = e.value
        } catch (g) {
            return a.g.h = null, ta(a.g, g), xa(a)
        }
        a.g.h = null;
        d.call(a.g, f);
        return xa(a)
    };
    xa = function(a) {
        for (; a.g.g;) try {
            var b = a.h(a.g);
            if (b) return a.g.o = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.A = void 0, ta(a.g, c)
        }
        a.g.o = !1;
        if (a.g.l) {
            b = a.g.l;
            a.g.l = null;
            if (b.Zo) throw b.Sn;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    za = function(a) {
        this.next = function(b) {
            sa(a.g);
            a.g.h ? b = wa(a, a.g.h.next, b, a.g.w) : (a.g.w(b), b = xa(a));
            return b
        };
        this.throw = function(b) {
            sa(a.g);
            a.g.h ? b = wa(a, a.g.h["throw"], b, a.g.w) : (ta(a.g, b), b = xa(a));
            return b
        };
        this.return = function(b) {
            return ya(a, b)
        };
        na();
        this[Symbol.iterator] = function() {
            return this
        }
    };
    Aa = function(a, b) {
        if (b) {
            var c = ha;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ja(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
    Ba = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    Ca = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                fj: e,
                pk: f
            }
        }
        return {
            fj: -1,
            pk: void 0
        }
    };
    Da = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Ea = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    _.v = function(a, b, c) {
        a = a.split(".");
        c = c || _.t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    _.Fa = function(a) {
        a = a.split(".");
        for (var b = _.t, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    };
    _.w = function() {};
    _.Ga = function(a) {
        a.$e = void 0;
        a.F = function() {
            return a.$e ? a.$e : a.$e = new a
        }
    };
    Ha = function(a) {
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
    };
    _.Ia = function(a) {
        return "array" == Ha(a)
    };
    _.Ja = function(a) {
        var b = Ha(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.z = function(a) {
        return "function" == Ha(a)
    };
    _.Ka = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    _.Na = function(a) {
        return Object.prototype.hasOwnProperty.call(a, La) && a[La] || (a[La] = ++Ma)
    };
    Oa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Pa = function(a, b, c) {
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
    };
    _.Qa = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.Qa = Oa : _.Qa = Pa;
        return _.Qa.apply(null, arguments)
    };
    _.Ra = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    _.Sa = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.eb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ts = function(d, e, f) {
            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
            return b.prototype[e].apply(d, g)
        }
    };
    Ta = function() {
        this.playbackType = 0;
        this.deviceName = ""
    };
    Ua = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ua);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    Va = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ua.call(this, c + a[d])
    };
    _.Wa = function(a, b) {
        throw new Va("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    Xa = function(a, b, c) {
        if ("number" != typeof a || !isFinite(a)) {
            var d = [a],
                e = "Assertion failed";
            b ? (e += ": " + b, d = Array.prototype.slice.call(arguments, 2)) : e += ": Expected %s to be a finite number but it is not.";
            throw new Va("" + e, d || []);
        }
    };
    _.Ya = function(a, b) {
        a: {
            try {
                var c = a && a.ownerDocument,
                    d = c && (c.defaultView || c.parentWindow);
                d = d || _.t;
                if (d.Element && d.Location) {
                    var e = d;
                    break a
                }
            } catch (g) {}
            e = null
        }
        if (e && "undefined" != typeof e[b] && (!a || !(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element))) {
            if (_.Ka(a)) try {
                var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
            } catch (g) {
                f = "<object could not be stringified>"
            } else f = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
            _.Wa("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                b, f)
        }
    };
    Za = function(a) {
        var b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    };
    $a = function(a) {
        function b() {
            c = 0
        }
        var c = 0;
        return function(d) {
            c || (c = _.t.setTimeout(b, 3E5), a.apply(void 0, arguments))
        }
    };
    _.bb = function(a, b) {
        b = _.ab(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    _.ab = function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    };
    _.db = function(a, b) {
        return 0 <= cb(a, b)
    };
    _.eb = function(a, b) {
        b = cb(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    _.fb = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    hb = function(a, b, c, d) {
        return Array.prototype.splice.apply(a, gb(arguments, 1))
    };
    gb = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    jb = function(a, b) {
        if (!_.Ja(a) || !_.Ja(b) || a.length != b.length) return !1;
        for (var c = a.length, d = ib, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    ib = function(a, b) {
        return a === b
    };
    _.kb = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    };
    _.lb = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    _.mb = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    };
    nb = function(a, b) {
        var c = _.Ja(b),
            d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (null == a) return;
            a = a[d[c]]
        }
        return a
    };
    _.ob = function(a, b) {
        return null !== a && b in a
    };
    _.pb = function(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    };
    _.qb = function(a) {
        for (var b in a) return !1;
        return !0
    };
    _.rb = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    sb = function(a) {
        var b = Ha(a);
        if ("object" == b || "array" == b) {
            if (_.z(a.clone)) return a.clone();
            b = "array" == b ? [] : {};
            for (var c in a) b[c] = sb(a[c]);
            return b
        }
        return a
    };
    _.ub = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < tb.length; f++) c = tb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    _.vb = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    };
    xb = function(a, b) {
        return 0 == wb(b, a.substr(0, b.length))
    };
    yb = function(a, b) {
        return 0 == wb(b, a.substr(a.length - b.length, b.length))
    };
    wb = function(a, b) {
        a = String(a).toLowerCase();
        b = String(b).toLowerCase();
        return a < b ? -1 : a == b ? 0 : 1
    };
    _.Gb = function(a, b) {
        if (b) a = a.replace(zb, "&amp;").replace(Ab, "&lt;").replace(Bb, "&gt;").replace(Cb, "&quot;").replace(Db, "&#39;").replace(Eb, "&#0;");
        else {
            if (!Fb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(zb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ab, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Bb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Cb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Db, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Eb, "&#0;"))
        }
        return a
    };
    _.Hb = function(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    };
    _.Kb = function(a, b) {
        var c = 0;
        a = (0, _.Ib)(String(a)).split(".");
        b = (0, _.Ib)(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Jb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Jb(0 == f[2].length, 0 == g[2].length) || Jb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    };
    Jb = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    _.A = function(a) {
        return -1 != _.Lb.indexOf(a)
    };
    Mb = function() {
        return _.A("Firefox") || _.A("FxiOS")
    };
    Ob = function() {
        return _.A("Safari") && !(Nb() || _.A("Coast") || _.A("Opera") || _.A("Edge") || _.A("Edg/") || _.A("OPR") || Mb() || _.A("Silk") || _.A("Android"))
    };
    Nb = function() {
        return (_.A("Chrome") || _.A("CriOS")) && !_.A("Edge")
    };
    Rb = function(a, b) {
        this.g = a === Pb && b || "";
        this.h = Qb
    };
    _.Sb = function(a) {
        if (a instanceof Rb && a.constructor === Rb && a.h === Qb) return a.g;
        _.Wa("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    };
    _.Tb = function(a) {
        return new Rb(Pb, a)
    };
    Vb = function() {
        this.g = "";
        this.h = Ub
    };
    _.Zb = function(a, b) {
        this.g = a === Xb && b || "";
        this.h = Yb
    };
    _.ac = function(a) {
        return _.$b(a).toString()
    };
    _.$b = function(a) {
        if (a instanceof _.Zb && a.constructor === _.Zb && a.h === Yb) return a.g;
        _.Wa("expected object of type TrustedResourceUrl, got '" + a + "' of type " + Ha(a));
        return "type_error:TrustedResourceUrl"
    };
    _.bc = function(a) {
        return new _.Zb(Xb, a)
    };
    _.ec = function(a, b) {
        this.g = a === cc && b || "";
        this.h = dc
    };
    _.fc = function(a) {
        if (a instanceof _.ec && a.constructor === _.ec && a.h === dc) return a.g;
        _.Wa("expected object of type SafeUrl, got '" + a + "' of type " + Ha(a));
        return "type_error:SafeUrl"
    };
    _.hc = function(a) {
        if (a instanceof _.ec) return a;
        a = "object" == typeof a && a.Nb ? a.vb() : String(a);
        gc.test(a) || (a = "about:invalid#zClosurez");
        return new _.ec(cc, a)
    };
    jc = function() {
        this.g = ic
    };
    _.lc = function() {
        this.g = "";
        this.l = kc;
        this.h = null
    };
    _.nc = function(a) {
        return _.mc(a).toString()
    };
    _.mc = function(a) {
        if (a instanceof _.lc && a.constructor === _.lc && a.l === kc) return a.g;
        _.Wa("expected object of type SafeHtml, got '" + a + "' of type " + Ha(a));
        return "type_error:SafeHtml"
    };
    _.oc = function(a, b) {
        var c = new _.lc;
        c.g = a;
        c.h = b;
        return c
    };
    qc = function(a) {
        var b = _.bc(_.Sb(pc));
        _.Ya(a, "HTMLIFrameElement");
        a.src = _.ac(b)
    };
    _.rc = function(a) {
        return a = _.Gb(a, void 0)
    };
    _.tc = function(a, b) {
        a = String(a);
        var c = a.indexOf("."); - 1 == c && (c = a.length);
        return sc("0", Math.max(0, b - c)) + a
    };
    uc = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    vc = function(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    };
    wc = function(a) {
        return xb(a, "text/") || "application/ttml+xml" === a
    };
    xc = function(a) {
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
    yc = function() {
        this.contentId = "";
        this.contentUrl = void 0;
        this.streamType = "NONE";
        this.mediaCategory = void 0;
        this.contentType = "";
        this.userActionStates = this.vmapAdsRequest = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.breakClips = this.breaks = this.customData = this.textTrackStyle = this.tracks = this.startAbsoluteTime = this.duration = this.entity = this.metadata = void 0
    };
    zc = function() {
        this.repeatMode = this.description = this.name = this.queueType = this.entity = this.id = void 0;
        this.shuffle = !1;
        this.containerMetadata = this.startTime = this.startIndex = this.items = void 0
    };
    Ac = function(a) {
        this.url = a;
        this.width = this.height = void 0
    };
    Bc = function() {
        this.muted = this.level = void 0
    };
    Cc = function(a, b, c) {
        this.width = a;
        this.height = b;
        this.hdrType = c
    };
    Dc = function(a, b) {
        this.playerState = "LOADING";
        this.media = a;
        this.mediaSessionId = b
    };
    Ec = function() {
        this.type = "QUEUE_CHANGE";
        this.sequenceNumber = this.insertBefore = this.itemIds = this.changeType = this.requestId = void 0
    };
    Fc = function() {
        this.type = "QUEUE_ITEMS";
        this.items = this.requestId = void 0
    };
    Gc = function() {
        this.type = "QUEUE_ITEM_IDS";
        this.itemIds = this.requestId = void 0
    };
    Ic = function(a, b) {
        this.currentBreakTime = a;
        this.currentBreakClipTime = b;
        this.whenSkippable = this.breakClipId = this.breakId = void 0
    };
    Jc = function() {};
    Lc = function(a) {
        if ("number" == typeof a) {
            var b = new Jc;
            b.l = a;
            var c = a;
            if (0 == c) c = "Etc/GMT";
            else {
                var d = ["Etc/GMT", 0 > c ? "-" : "+"];
                c = Math.abs(c);
                d.push(Math.floor(c / 60) % 100);
                c %= 60;
                0 != c && d.push(":", _.tc(c, 2));
                c = d.join("")
            }
            b.o = c;
            c = a;
            0 == c ? c = "UTC" : (d = ["UTC", 0 > c ? "+" : "-"], c = Math.abs(c), d.push(Math.floor(c / 60) % 100), c %= 60, 0 != c && d.push(":", c), c = d.join(""));
            a = Kc(a);
            b.w = [c, c];
            b.g = {
                ks: a,
                pi: a
            };
            b.h = [];
            return b
        }
        b = new Jc;
        b.o = a.id;
        b.l = -a.std_offset;
        b.w = a.names;
        b.g = a.names_ext;
        b.h = a.transitions;
        return b
    };
    Kc = function(a) {
        var b = ["GMT"];
        b.push(0 >= a ? "+" : "-");
        a = Math.abs(a);
        b.push(_.tc(Math.floor(a / 60) % 100, 2), ":", _.tc(a % 60, 2));
        return b.join("")
    };
    Mc = function(a, b) {
        b = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5;
        for (var c = 0; c < a.h.length && b >= a.h[c];) c += 2;
        return 0 == c ? 0 : a.h[c - 1]
    };
    Nc = function(a, b, c, d, e) {
        a = new Date(a, b, c);
        e = e || 0;
        return a.valueOf() + 864E5 * (((void 0 !== d ? d : 3) - e + 7) % 7 - ((a.getDay() + 6) % 7 - e + 7) % 7)
    };
    Qc = function() {
        this.h = [];
        this.g = Oc;
        Pc(this, 6)
    };
    Rc = function(a) {
        return a.getHours ? a.getHours() : 0
    };
    Pc = function(a, b) {
        if (4 > b) var c = a.g.bi[b];
        else if (8 > b) c = a.g.ri[b - 4];
        else if (12 > b) c = a.g.Mk[b - 8], c = c.replace("{1}", a.g.bi[b - 8]), c = c.replace("{0}", a.g.ri[b - 8]);
        else {
            Pc(a, 10);
            return
        }
        b = c;
        for (Sc && (b = b.replace(/\u200f/g, "")); b;) {
            c = b;
            for (var d = 0; d < Tc.length; ++d) {
                var e = b.match(Tc[d]);
                if (e) {
                    var f = e[0];
                    b = b.substring(f.length);
                    0 == d && ("''" == f ? f = "'" : (f = f.substring(1, "'" == e[1] ? f.length - 1 : f.length), f = f.replace(/''/g, "'")));
                    a.h.push({
                        text: f,
                        type: d
                    });
                    break
                }
            }
            if (c === b) throw Error("Malformed pattern part: " + b);
        }
    };
    Uc = function(a, b) {
        b = String(b);
        a = a.g || Oc;
        if (void 0 !== a.Cm) {
            for (var c = [], d = 0; d < b.length; d++) {
                var e = b.charCodeAt(d);
                c.push(48 <= e && 57 >= e ? String.fromCharCode(a.Cm + e - 48) : b.charAt(d))
            }
            b = c.join("")
        }
        return b
    };
    Vc = function(a) {
        if (!(a.getHours && a.getSeconds && a.getMinutes)) throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
    };
    Wc = function(a, b, c, d, e) {
        var f = b.length;
        switch (b.charAt(0)) {
            case "G":
                return c = 0 < d.getFullYear() ? 1 : 0, 4 <= f ? a.g.Tk[c] : a.g.Uk[c];
            case "y":
                return c = d.getFullYear(), 0 > c && (c = -c), 2 == f && (c %= 100), Uc(a, _.tc(c, f));
            case "Y":
                return c = (new Date(Nc(d.getFullYear(), d.getMonth(), d.getDate(), a.g.fi, a.g.ei))).getFullYear(), 0 > c && (c = -c), 2 == f && (c %= 100), Uc(a, _.tc(c, f));
            case "M":
                a: switch (c = d.getMonth(), f) {
                    case 5:
                        f = a.g.Rl[c];
                        break a;
                    case 4:
                        f = a.g.rl[c];
                        break a;
                    case 3:
                        f = a.g.hm[c];
                        break a;
                    default:
                        f = Uc(a, _.tc(c + 1, f))
                }
                return f;
            case "k":
                return Vc(e),
                    Uc(a, _.tc(Rc(e) || 24, f));
            case "S":
                return Uc(a, (e.getMilliseconds() / 1E3).toFixed(Math.min(3, f)).substr(2) + (3 < f ? _.tc(0, f - 3) : ""));
            case "E":
                return c = d.getDay(), 4 <= f ? a.g.Bm[c] : a.g.jm[c];
            case "a":
                return Vc(e), f = Rc(e), a.g.wk[12 <= f && 24 > f ? 1 : 0];
            case "h":
                return Vc(e), Uc(a, _.tc(Rc(e) % 12 || 12, f));
            case "K":
                return Vc(e), Uc(a, _.tc(Rc(e) % 12, f));
            case "H":
                return Vc(e), Uc(a, _.tc(Rc(e), f));
            case "c":
                a: switch (c = d.getDay(), f) {
                    case 5:
                        f = a.g.nm[c];
                        break a;
                    case 4:
                        f = a.g.qm[c];
                        break a;
                    case 3:
                        f = a.g.pm[c];
                        break a;
                    default:
                        f = Uc(a, _.tc(c,
                            1))
                }
                return f;
            case "L":
                a: switch (c = d.getMonth(), f) {
                    case 5:
                        f = a.g.mm[c];
                        break a;
                    case 4:
                        f = a.g.lm[c];
                        break a;
                    case 3:
                        f = a.g.om[c];
                        break a;
                    default:
                        f = Uc(a, _.tc(c + 1, f))
                }
                return f;
            case "Q":
                return c = Math.floor(d.getMonth() / 3), 4 > f ? a.g.im[c] : a.g.Yl[c];
            case "d":
                return Uc(a, _.tc(d.getDate(), f));
            case "m":
                return Vc(e), Uc(a, _.tc(e.getMinutes(), f));
            case "s":
                return Vc(e), Uc(a, _.tc(e.getSeconds(), f));
            case "v":
                return f = Lc(c.getTimezoneOffset()), f.o;
            case "V":
                return a = Lc(c.getTimezoneOffset()), 2 >= f ? a.o : 0 < Mc(a, c) ? void 0 !== a.g.Pk ?
                    a.g.Pk : a.g.DST_GENERIC_LOCATION : void 0 !== a.g.pi ? a.g.pi : a.g.STD_GENERIC_LOCATION;
            case "w":
                return c = Nc(e.getFullYear(), e.getMonth(), e.getDate(), a.g.fi, a.g.ei), Uc(a, _.tc(Math.floor(Math.round((c - (new Date((new Date(c)).getFullYear(), 0, 1)).valueOf()) / 864E5) / 7) + 1, f));
            case "z":
                return a = Lc(c.getTimezoneOffset()), 4 > f ? a.w[0 < Mc(a, c) ? 2 : 0] : a.w[0 < Mc(a, c) ? 3 : 1];
            case "Z":
                return b = Lc(c.getTimezoneOffset()), 4 > f ? (f = -(b.l - Mc(b, c)), a = [0 > f ? "-" : "+"], f = Math.abs(f), a.push(_.tc(Math.floor(f / 60) % 100, 2), _.tc(f % 60, 2)), f = a.join("")) :
                    f = Uc(a, Kc(b.l - Mc(b, c))), f;
            default:
                return ""
        }
    };
    Xc = function(a) {
        switch ((a || "").toLowerCase().split("/")[0]) {
            case "image":
                return "image";
            case "audio":
                return "audio";
            case "video":
                return "video";
            default:
                return "video"
        }
    };
    Yc = function() {
        return Reflect.construct(HTMLElement, [], this.constructor)
    };
    Zc = function() {
        var a = Yc.call(this) || this;
        var b = a.attachShadow({
            mode: "open"
        });
        (0, cast.receiver.J.yk)(b);
        a.w = b.getElementById("title");
        a.l = b.getElementById("album");
        a.o = b.getElementById("artist");
        a.h = b.getElementById("album-art");
        a.A = b.getElementById("bg-image");
        a.g = b.getElementById("logo");
        return a
    };
    $c = function(a, b, c) {
        "none" === window.getComputedStyle(a.g, null).backgroundImage && cast.receiver.J.aa.mg(c).then(function() {
            a.g.textContent = "";
            a.g.style.backgroundImage = cast.receiver.J.aa.lb(c);
            a.g.classList.add("app-icon")
        }).catch(function() {
            a.g.style.backgroundImage = "";
            a.g.classList.remove("app-icon");
            a.g.textContent = b
        })
    };
    ad = function() {
        this.title = void 0;
        this.items = [];
        this.targetAspectRatio = void 0
    };
    bd = function(a) {
        this.entity = a;
        this.mediaBadge = this.imageType = this.duration = this.image = this.subtitle = this.title = void 0
    };
    dd = function(a, b) {
        a: {
            if (b) {
                if (xb(b, "video/")) {
                    b = "Video";
                    break a
                }
                if (xb(b, "audio/")) {
                    b = "Audio";
                    break a
                }
            }
            b = void 0
        }
        if (void 0 !== b) {
            B("Cast.Shaka.Available" + b + "Bitrates", a.length);
            for (var c = 0; c < a.length; c++) B("Cast.Shaka.Available" + b + "Bitrate" + c, a[c])
        }
    };
    ed = function(a, b) {
        cast.platform.metrics.logBoolToUma(a, b)
    };
    gd = function(a) {
        a.split(",").forEach(function(b) {
            var c = fd[b];
            B("Cast.Shaka.Codec", c ? c : _.vb(b, "avc1") ? fd.avc1 : _.vb(b, "mp4a.40") ? fd["mp4a.40"] : fd.Sl)
        })
    };
    hd = function(a) {
        cast.platform.metrics.logEventToUma(a)
    };
    B = function(a, b) {
        cast.platform.metrics.logIntToUma(a, b)
    };
    jd = function(a) {
        B("Cast.Controls.ButtonClick", id[a] || 0)
    };
    _.C = function() {
        this.G = this.G;
        this.C = this.C
    };
    _.kd = function(a, b) {
        a.G ? b() : (a.C || (a.C = []), a.C.push(b))
    };
    _.ld = function(a) {
        a && "function" == typeof a.ga && a.ga()
    };
    _.E = function(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = !1
    };
    _.md = function() {
        return _.A("iPhone") && !_.A("iPod") && !_.A("iPad")
    };
    nd = function(a) {
        nd[" "](a);
        return a
    };
    _.od = function(a, b) {
        try {
            return nd(a[b]), !0
        } catch (c) {}
        return !1
    };
    qd = function(a, b) {
        var c = pd;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    rd = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    _.td = function(a) {
        return qd(a, function() {
            return 0 <= _.Kb(_.sd, a)
        })
    };
    wd = function(a, b) {
        _.E.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.l = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.g = b;
            (b = a.relatedTarget) ? ud && (_.od(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement :
                "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId =
                a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : vd[a.pointerType] || "";
            this.state = a.state;
            this.l = a;
            a.defaultPrevented && this.h()
        }
    };
    _.yd = function(a) {
        return !(!a || !a[xd])
    };
    Ad = function(a, b, c, d, e) {
        this.listener = a;
        this.g = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Ye = e;
        this.key = ++zd;
        this.rd = this.Be = !1
    };
    Bd = function(a) {
        a.rd = !0;
        a.listener = null;
        a.g = null;
        a.src = null;
        a.Ye = null
    };
    Cd = function(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    };
    Dd = function(a, b) {
        var c = b.type;
        c in a.g && _.eb(a.g[c], b) && (Bd(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
    };
    Ed = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.rd && f.listener == b && f.capture == !!c && f.Ye == d) return e
        }
        return -1
    };
    _.Gd = function(a, b, c, d, e) {
        if (d && d.once) return _.Fd(a, b, c, d, e);
        if (_.Ia(b)) {
            for (var f = 0; f < b.length; f++) _.Gd(a, b[f], c, d, e);
            return null
        }
        c = _.Hd(c);
        return _.yd(a) ? a.listen(b, c, _.Ka(d) ? !!d.capture : !!d, e) : Id(a, b, c, !1, d, e)
    };
    Id = function(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = _.Ka(e) ? !!e.capture : !!e,
            k = _.Jd(a);
        k || (a[Kd] = k = new Cd(a));
        c = k.add(b, c, d, g, f);
        if (c.g) return c;
        d = Ld();
        c.g = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Md || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Nd(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Od++;
        return c
    };
    Ld = function() {
        var a = Pd,
            b = Qd ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    };
    _.Fd = function(a, b, c, d, e) {
        if (_.Ia(b)) {
            for (var f = 0; f < b.length; f++) _.Fd(a, b[f], c, d, e);
            return null
        }
        c = _.Hd(c);
        return _.yd(a) ? a.listenOnce(b, c, _.Ka(d) ? !!d.capture : !!d, e) : Id(a, b, c, !0, d, e)
    };
    Rd = function(a, b, c, d, e) {
        if (_.Ia(b))
            for (var f = 0; f < b.length; f++) Rd(a, b[f], c, d, e);
        else d = _.Ka(d) ? !!d.capture : !!d, c = _.Hd(c), _.yd(a) ? a.unlisten(b, c, d, e) : a && (a = _.Jd(a)) && (b = a.Nd(b, c, d, e)) && _.Sd(b)
    };
    _.Sd = function(a) {
        if ("number" !== typeof a && a && !a.rd) {
            var b = a.src;
            if (_.yd(b)) Dd(b.A, a);
            else {
                var c = a.type,
                    d = a.g;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Nd(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Od--;
                (c = _.Jd(b)) ? (Dd(c, a), 0 == c.h && (c.src = null, b[Kd] = null)) : Bd(a)
            }
        }
    };
    Nd = function(a) {
        return a in Ud ? Ud[a] : Ud[a] = "on" + a
    };
    Wd = function(a, b, c, d) {
        var e = !0;
        if (a = _.Jd(a))
            if (b = a.g[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.rd && (f = Vd(f, d), e = e && !1 !== f)
                }
            return e
    };
    Vd = function(a, b) {
        var c = a.listener,
            d = a.Ye || a.src;
        a.Be && _.Sd(a);
        return c.call(d, b)
    };
    Pd = function(a, b) {
        if (a.rd) return !0;
        if (!Qd) {
            var c = b || _.Fa("window.event");
            b = new wd(c, this);
            var d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (e = b.g; e; e = e.parentNode) c.push(e);a = a.type;
                for (e = c.length - 1; 0 <= e; e--) {
                    b.g = c[e];
                    var f = Wd(c[e], a, !0, b);
                    d = d && f
                }
                for (e = 0; e < c.length; e++) b.g = c[e],
                f = Wd(c[e], a, !1, b),
                d = d && f
            }
            return d
        }
        return Vd(a, new wd(b, this))
    };
    _.Jd = function(a) {
        a = a[Kd];
        return a instanceof Cd ? a : null
    };
    _.Hd = function(a) {
        if (_.z(a)) return a;
        a[Xd] || (a[Xd] = function(b) {
            return a.handleEvent(b)
        });
        return a[Xd]
    };
    _.Yd = function() {
        _.C.call(this);
        this.A = new Cd(this);
        this.da = this;
        this.H = null
    };
    Zd = function(a, b, c, d) {
        b = a.A.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.rd && g.capture == c) {
                var k = g.listener,
                    l = g.Ye || g.src;
                g.Be && Dd(a.A, g);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    $d = function(a) {
        _.Yd.call(this);
        this.o = a;
        this.l = 0;
        this.D = this.g = !1;
        this.h = !0;
        this.w = !1
    };
    be = function(a, b) {
        a.D = b;
        ae(a)
    };
    ae = function(a) {
        a.g && !a.D && !a.h && !a.w || clearTimeout(a.l)
    };
    ce = function(a) {
        clearTimeout(a.l);
        a.l = setTimeout(function() {
            !a.g || a.D || a.h || a.w || a.dispatchEvent(new _.E("EXPIRED"))
        }, a.o)
    };
    de = function(a, b, c) {
        this.reset(a, b, c, void 0, void 0)
    };
    ee = function(a) {
        this.A = a;
        this.g = this.o = this.h = this.l = null
    };
    fe = function(a, b) {
        this.name = a;
        this.value = b
    };
    ge = function(a) {
        if (a.h) return a.h;
        if (a.l) return ge(a.l);
        _.Wa("Root logger has no level set.");
        return null
    };
    ke = function() {
        he || (he = new ee(""), ie[""] = he, he.h = je)
    };
    _.F = function(a) {
        ke();
        var b;
        if (!(b = ie[a])) {
            b = new ee(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            c = _.F(a.substr(0, c));
            c.o || (c.o = {});
            c.o[d] = b;
            b.l = c;
            ie[a] = b
        }
        return b
    };
    le = function(a, b, c) {
        a && a.log(b, c, void 0)
    };
    _.G = function(a, b, c) {
        a && a.log(me, b, c)
    };
    _.H = function(a, b, c) {
        a && a.log(ne, b, c)
    };
    _.I = function(a, b) {
        a && a.log(oe, b, void 0)
    };
    _.qe = function(a, b) {
        a && a.log(pe, b, void 0)
    };
    re = function(a, b) {
        this.l = a;
        this.o = b;
        this.h = 0;
        this.g = null
    };
    se = function(a, b) {
        a.o(b);
        100 > a.h && (a.h++, b.next = a.g, a.g = b)
    };
    te = function(a, b, c) {
        return a + c * (b - a)
    };
    _.ue = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    ve = function(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    };
    we = function(a) {
        _.t.setTimeout(function() {
            throw a;
        }, 0)
    };
    ye = function() {
        var a = _.t.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.A("Presto") && (a = function() {
            var e = _.ue(document, "IFRAME");
            e.style.display = "none";
            qc(e);
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(_.mc(xe));
            e.close();
            var g = "callImmediate" + Math.random(),
                k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = (0, _.Qa)(function(l) {
                if (("*" == k || l.origin == k) && l.data ==
                    g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, k)
                }
            }
        });
        if ("undefined" !== typeof a && !_.A("Trident") && !_.A("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Ei;
                    c.Ei = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Ei: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in _.ue(document, "SCRIPT") ? function(e) {
            var f = _.ue(document, "SCRIPT");
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
            _.t.setTimeout(e, 0)
        }
    };
    ze = function() {
        this.h = this.g = null
    };
    Be = function() {
        var a = Ae,
            b = null;
        a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
        return b
    };
    Ce = function() {
        this.next = this.h = this.g = null
    };
    Ge = function(a, b) {
        De || Ee();
        Fe || (De(), Fe = !0);
        Ae.add(a, b)
    };
    Ee = function() {
        if (_.t.Promise && _.t.Promise.resolve) {
            var a = _.t.Promise.resolve(void 0);
            De = function() {
                a.then(He)
            }
        } else De = function() {
            var b = He;
            !_.z(_.t.setImmediate) || _.t.Window && _.t.Window.prototype && !_.A("Edge") && _.t.Window.prototype.setImmediate == _.t.setImmediate ? (Ie || (Ie = ye()), Ie(b)) : _.t.setImmediate(b)
        }
    };
    He = function() {
        for (var a; a = Be();) {
            try {
                a.g.call(a.h)
            } catch (b) {
                we(b)
            }
            se(Je, a)
        }
        Fe = !1
    };
    Me = function(a) {
        this.g = 0;
        this.C = void 0;
        this.o = this.h = this.l = null;
        this.w = this.A = !1;
        if (a != _.w) try {
            var b = this;
            a.call(void 0, function(c) {
                Ke(b, 2, c)
            }, function(c) {
                if (!(c instanceof Le)) try {
                    if (c instanceof Error) throw c;
                    throw Error("Promise rejected.");
                } catch (d) {}
                Ke(b, 3, c)
            })
        } catch (c) {
            Ke(this, 3, c)
        }
    };
    Ne = function() {
        this.next = this.context = this.h = this.o = this.g = null;
        this.l = !1
    };
    Pe = function(a, b, c) {
        var d = Oe.get();
        d.o = a;
        d.h = b;
        d.context = c;
        return d
    };
    _.J = function(a) {
        if (a instanceof Me) return a;
        var b = new Me(_.w);
        Ke(b, 2, a);
        return b
    };
    Qe = function(a) {
        return new Me(function(b, c) {
            c(a)
        })
    };
    Se = function(a, b, c) {
        Re(a, b, c, null) || Ge(_.Ra(b, a))
    };
    Te = function(a) {
        return new Me(function(b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (var f = function(m, n) {
                        d--;
                        e[m] = n;
                        0 == d && b(e)
                    }, g = function(m) {
                        c(m)
                    }, k = 0, l; k < a.length; k++) l = a[k], Se(l, _.Ra(f, k), g);
            else b(e)
        })
    };
    Ue = function(a) {
        return new Me(function(b) {
            var c = a.length,
                d = [];
            if (c)
                for (var e = function(k, l, m) {
                        c--;
                        d[k] = l ? {
                            rg: !0,
                            value: m
                        } : {
                            rg: !1,
                            reason: m
                        };
                        0 == c && b(d)
                    }, f = 0, g; f < a.length; f++) g = a[f], Se(g, _.Ra(e, f, !0), _.Ra(e, f, !1));
            else b(d)
        })
    };
    We = function() {
        var a, b, c = new Me(function(d, e) {
            a = d;
            b = e
        });
        return new Ve(c, a, b)
    };
    Ye = function(a, b) {
        b = Pe(b, b, void 0);
        b.l = !0;
        Xe(a, b);
        return a
    };
    $e = function(a, b) {
        return Ze(a, null, b, void 0)
    };
    af = function(a, b) {
        if (0 == a.g)
            if (a.l) {
                var c = a.l;
                if (c.h) {
                    for (var d = 0, e = null, f = null, g = c.h; g && (g.l || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.g && 1 == d ? af(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : bf(c), cf(c, e, 3, b)))
                }
                a.l = null
            } else Ke(a, 3, b)
    };
    Xe = function(a, b) {
        a.h || 2 != a.g && 3 != a.g || df(a);
        a.o ? a.o.next = b : a.h = b;
        a.o = b
    };
    Ze = function(a, b, c, d) {
        var e = Pe(null, null, null);
        e.g = new Me(function(f, g) {
            e.o = b ? function(k) {
                try {
                    var l = b.call(d, k);
                    f(l)
                } catch (m) {
                    g(m)
                }
            } : f;
            e.h = c ? function(k) {
                try {
                    var l = c.call(d, k);
                    void 0 === l && k instanceof Le ? g(k) : f(l)
                } catch (m) {
                    g(m)
                }
            } : g
        });
        e.g.l = a;
        Xe(a, e);
        return e.g
    };
    Ke = function(a, b, c) {
        0 == a.g && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.g = 1, Re(c, a.D, a.H, a) || (a.C = c, a.g = b, a.l = null, df(a), 3 != b || c instanceof Le || ef(a, c)))
    };
    Re = function(a, b, c, d) {
        if (a instanceof Me) return Xe(a, Pe(b || _.w, c || null, d)), !0;
        if (a) try {
            var e = !!a.$goog_Thenable
        } catch (g) {
            e = !1
        } else e = !1;
        if (e) return a.then(b, c, d), !0;
        if (_.Ka(a)) try {
            var f = a.then;
            if (_.z(f)) return ff(a, f, b, c, d), !0
        } catch (g) {
            return c.call(d, g), !0
        }
        return !1
    };
    ff = function(a, b, c, d, e) {
        function f(l) {
            k || (k = !0, d.call(e, l))
        }

        function g(l) {
            k || (k = !0, c.call(e, l))
        }
        var k = !1;
        try {
            b.call(a, g, f)
        } catch (l) {
            f(l)
        }
    };
    df = function(a) {
        a.A || (a.A = !0, Ge(a.G, a))
    };
    bf = function(a) {
        var b = null;
        a.h && (b = a.h, a.h = b.next, b.next = null);
        a.h || (a.o = null);
        return b
    };
    cf = function(a, b, c, d) {
        if (3 == c && b.h && !b.l)
            for (; a && a.w; a = a.l) a.w = !1;
        if (b.g) b.g.l = null, gf(b, c, d);
        else try {
            b.l ? b.o.call(b.context) : gf(b, c, d)
        } catch (e) {
            hf.call(null, e)
        }
        se(Oe, b)
    };
    gf = function(a, b, c) {
        2 == b ? a.o.call(a.context, c) : a.h && a.h.call(a.context, c)
    };
    ef = function(a, b) {
        a.w = !0;
        Ge(function() {
            a.w && hf.call(null, b)
        })
    };
    Le = function(a) {
        Ua.call(this, a)
    };
    Ve = function(a, b, c) {
        this.g = a;
        this.resolve = b;
        this.reject = c
    };
    _.jf = function(a, b, c) {
        if (_.z(a)) c && (a = (0, _.Qa)(a, c));
        else if (a && "function" == typeof a.handleEvent) a = (0, _.Qa)(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : _.t.setTimeout(a, b || 0)
    };
    _.kf = function(a) {
        _.t.clearTimeout(a)
    };
    lf = function() {
        var a = null;
        return $e(new Me(function(b, c) {
            a = _.jf(function() {
                b(void 0)
            }, 3E3); - 1 == a && c(Error("Failed to schedule timer."))
        }), function(b) {
            _.kf(a);
            throw b;
        })
    };
    nf = function(a) {
        _.Yd.call(this);
        a || (a = {});
        this.l = 0 != a.Im;
        this.h = a.As || mf;
        this.o = a.binaryType || "blob";
        this.g = this.h(this.ge)
    };
    mf = function(a) {
        return Math.min(1E3 * Math.pow(2, a), 6E4)
    };
    of = function(a) {
        _.E.call(this, "c");
        this.message = a
    };
    pf = function(a) {
        _.E.call(this, "b");
        this.data = a
    };
    qf = function() {
        this.h = new _.Yd;
        this.g = !1
    };
    rf = function(a, b) {
        b = "string" === typeof b ? new _.E(b) : b;
        b.target = a;
        a.h.dispatchEvent(b)
    };
    sf = function() {
        this.g = null
    };
    uf = function() {
        var a = sf.F();
        a.g = a.g || cast.receiver.platform.Ya("receiver-flags") || null;
        a = a.g;
        return !(!a || !a.enable_dpad_ui)
    };
    _.wf = function(a, b) {
        return /-[a-z]/.test(b) ? !1 : vf && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + vc(b)) : !!a.getAttribute("data-" + vc(b))
    };
    L = function(a, b) {
        a.style.display = b ? "" : "none"
    };
    Bf = function() {
        var a = this;
        this.g = [];
        this.w = _.w;
        this.l = _.t.document;
        this.h = null;
        this.o = function(b) {
            xf(a, b.target)
        };
        this.A = function(b) {
            yf(a);
            a.h || (a.w(), _.I(zf, "Focus lost, " + Af(b.relatedTarget ? b.relatedTarget : null)))
        }
    };
    Cf = function(a, b) {
        a.l && (a.l.removeEventListener("focusin", a.o), a.l.removeEventListener("focusout", a.A));
        a.l = b;
        b.addEventListener("focusin", a.o);
        b.addEventListener("focusout", a.A)
    };
    Df = function(a, b) {
        if (b) {
            if (vf && a.dataset) a.dataset.focusable = "";
            else {
                if (/-[a-z]/.test("focusable")) throw Error('"focusable" is not a valid dataset property name.');
                a.setAttribute("data-" + vc("focusable"), "")
            }
            a.setAttribute("tabindex", -1)
        } else !/-[a-z]/.test("focusable") && (vf && a.dataset ? _.wf(a, "focusable") && delete a.dataset.focusable : a.removeAttribute("data-" + vc("focusable"))), a.removeAttribute("tabindex")
    };
    Ef = function(a) {
        return a ? _.z(a.na) ? a.na() : "none" != a.style.display && !a.disabled && a.hasAttribute("tabindex") && _.wf(a, "focusable") : !1
    };
    xf = function(a, b) {
        b.classList.add("focused");
        a.h !== b && _.H(zf, "Wrong element focused: " + Af(a.h) + ", " + Af(b));
        a.h = null;
        for (var c = []; b;) c.unshift(b), b = b.parentElement && b.parentElement.closest("[data-focusable]") || null;
        yf(a);
        a.g = c;
        a.g.forEach(function(d) {
            d.classList.add("focused")
        })
    };
    yf = function(a) {
        a.g.forEach(function(b) {
            b.classList.remove("focused")
        });
        a.g = []
    };
    Af = function(a) {
        if (!a) return "no element";
        var b = a.tagName.toLowerCase();
        a.id && (b = [b, a.id].join("#"));
        (a = [].join.call(a.classList, ".")) && (b = [b, a].join("."));
        return b
    };
    Hf = function() {
        this.C = 40;
        this.g = 1;
        this.h = 3;
        this.G = this.w = 0;
        this.O = !1;
        this.M = this.K = "";
        this.D = Ff.hi;
        this.H = "";
        this.l = 1;
        this.A = !1;
        this.o = [];
        this.I = this.N = !1;
        var a = Ff.Nk;
        a.replace(/ /g, "\u00a0");
        var b = [0];
        this.K = Gf(this, a, b);
        for (var c = b[0], d = -1, e = 0, f = 0, g = 0, k = -1, l = a.length, m = !0; b[0] < l && m; b[0]++) switch (a.charAt(b[0])) {
            case "#":
                0 < f ? g++ : e++;
                0 <= k && 0 > d && k++;
                break;
            case "0":
                if (0 < g) throw Error('Unexpected "0" in pattern "' + a + '"');
                f++;
                0 <= k && 0 > d && k++;
                break;
            case ",":
                0 < k && this.o.push(k);
                k = 0;
                break;
            case ".":
                if (0 <= d) throw Error('Multiple decimal separators in pattern "' +
                    a + '"');
                d = e + f + g;
                break;
            case "E":
                if (this.I) throw Error('Multiple exponential symbols in pattern "' + a + '"');
                this.I = !0;
                this.G = 0;
                b[0] + 1 < l && "+" == a.charAt(b[0] + 1) && (b[0]++, this.O = !0);
                for (; b[0] + 1 < l && "0" == a.charAt(b[0] + 1);) b[0]++, this.G++;
                if (1 > e + f || 1 > this.G) throw Error('Malformed exponential pattern "' + a + '"');
                m = !1;
                break;
            default:
                b[0]--, m = !1
        }
        0 == f && 0 < e && 0 <= d && (f = d, 0 == f && f++, g = e - f, e = f - 1, f = 1);
        if (0 > d && 0 < g || 0 <= d && (d < e || d > e + f) || 0 == k) throw Error('Malformed pattern "' + a + '"');
        g = e + f + g;
        this.h = 0 <= d ? g - d : 0;
        0 <= d && (this.w = e +
            f - d, 0 > this.w && (this.w = 0));
        this.g = (0 <= d ? d : g) - e;
        this.I && (this.C = e + this.g, 0 == this.h && 0 == this.g && (this.g = 1));
        this.o.push(Math.max(0, k));
        this.N = 0 == d || d == g;
        c = b[0] - c;
        this.M = Gf(this, a, b);
        b[0] < a.length && ";" == a.charAt(b[0]) ? (b[0]++, 1 != this.l && (this.A = !0), this.D = Gf(this, a, b), b[0] += c, this.H = Gf(this, a, b)) : (this.D += this.K, this.H += this.M)
    };
    Jf = function(a, b, c, d) {
        if (a.w > a.h) throw Error("Min value must be less than max value");
        d || (d = []);
        var e = If(b, a.h);
        e = Math.round(e);
        if (isFinite(e)) {
            b = Math.floor(If(e, -a.h));
            var f = Math.floor(e - If(b, a.h))
        } else f = 0;
        e = b;
        b = f;
        var g = e;
        f = b;
        var k = 0 < a.w || 0 < f || !1;
        e = a.w;
        k && (e = a.w);
        var l = "";
        for (b = g; 1E20 < b;) l = "0" + l, b = Math.round(If(b, -1));
        l = b + l;
        var m = Ff.Ok;
        b = Ff.si.charCodeAt(0);
        var n = l.length,
            u = 0;
        if (0 < g || 0 < c) {
            for (g = n; g < c; g++) d.push(String.fromCharCode(b));
            if (2 <= a.o.length)
                for (c = 1; c < a.o.length; c++) u += a.o[c];
            c = n - u;
            if (0 <
                c) {
                g = a.o;
                u = n = 0;
                for (var r, x = Ff.gi, y = l.length, D = 0; D < y; D++)
                    if (d.push(String.fromCharCode(b + 1 * Number(l.charAt(D)))), 1 < y - D)
                        if (r = g[u], D < c) {
                            var la = c - D;
                            (1 === r || 0 < r && 1 === la % r) && d.push(x)
                        } else u < g.length && (D === c ? u += 1 : r === D - c - n + 1 && (d.push(x), n += r, u += 1))
            } else {
                c = l;
                l = a.o;
                g = Ff.gi;
                r = c.length;
                x = [];
                for (n = l.length - 1; 0 <= n && 0 < r; n--) {
                    u = l[n];
                    for (y = 0; y < u && 0 <= r - y - 1; y++) x.push(String.fromCharCode(b + 1 * Number(c.charAt(r - y - 1))));
                    r -= u;
                    0 < r && x.push(g)
                }
                d.push.apply(d, x.reverse())
            }
        } else k || d.push(String.fromCharCode(b));
        (a.N || k) &&
        d.push(m);
        k = String(f);
        f = k.split("e+");
        if (2 == f.length) {
            if (k = parseFloat(f[0])) {
                m = k;
                if (isFinite(m)) {
                    for (c = 0; 1 <= (m /= 10);) c++;
                    m = c
                } else m = 0 < m ? m : 0;
                m = 0 - m - 1;
                k = -1 > m ? k && isFinite(k) ? If(Math.round(If(k, -1)), 1) : k : k && isFinite(k) ? If(Math.round(If(k, m)), -m) : k
            }
            k = String(k);
            k = k.replace(".", "");
            k += sc("0", parseInt(f[1], 10) - k.length + 1)
        }
        a.h + 1 > k.length && (k = "1" + sc("0", a.h - k.length) + k);
        for (a = k.length;
            "0" == k.charAt(a - 1) && a > e + 1;) a--;
        for (g = 1; g < a; g++) d.push(String.fromCharCode(b + 1 * Number(k.charAt(g))))
    };
    Kf = function(a, b, c) {
        c.push(Ff.Wk);
        0 > b ? (b = -b, c.push(Ff.hi)) : a.O && c.push(Ff.Wl);
        b = "" + b;
        for (var d = Ff.si, e = b.length; e < a.G; e++) c.push(d);
        c.push(b)
    };
    Gf = function(a, b, c) {
        for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
            var g = b.charAt(c[0]);
            if ("'" == g) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
            else if (e) d += g;
            else switch (g) {
                case "#":
                case "0":
                case ",":
                case ".":
                case ";":
                    return d;
                case "\u00a4":
                    c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0]++, d += Ff.di) : (g = Ff.di, d += g in Lf ? Lf[g][1] : g);
                    break;
                case "%":
                    if (!a.A && 1 != a.l) throw Error("Too many percent/permill");
                    if (a.A && 100 != a.l) throw Error("Inconsistent use of percent/permill characters");
                    a.l = 100;
                    a.A = !1;
                    d += Ff.Tl;
                    break;
                case "\u2030":
                    if (!a.A && 1 != a.l) throw Error("Too many percent/permill");
                    if (a.A && 1E3 != a.l) throw Error("Inconsistent use of percent/permill characters");
                    a.l = 1E3;
                    a.A = !1;
                    d += Ff.Ul;
                    break;
                default:
                    d += g
            }
        }
        return d
    };
    If = function(a, b) {
        if (!a || !isFinite(a) || 0 == b) return a;
        a = String(a).split("e");
        return parseFloat(a[0] + "e" + (parseInt(a[1] || 0, 10) + b))
    };
    Mf = function(a) {
        return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
    };
    Nf = function(a, b) {
        if (void 0 === b) {
            b = a + "";
            var c = b.indexOf(".");
            b = Math.min(-1 == c ? 0 : b.length - c - 1, 3)
        }
        return 1 == (a | 0) && 0 == b ? "one" : "other"
    };
    Sf = function(a) {
        this.o = a;
        this.h = this.g = this.w = null;
        a = Ff;
        var b = Of;
        if (Pf !== a || Qf !== b) Pf = a, Qf = b, Rf = new Hf;
        this.A = Rf
    };
    Tf = function(a, b, c, d, e) {
        for (var f = 0; f < b.length; f++) switch (b[f].type) {
            case 4:
                e.push(b[f].value);
                break;
            case 3:
                var g = b[f].value,
                    k = a,
                    l = e,
                    m = c[g];
                void 0 === m ? l.push("Undefined parameter - " + g) : (k.g.push(m), l.push(k.l(k.g)));
                break;
            case 2:
                g = b[f].value;
                k = a;
                l = c;
                m = d;
                var n = e,
                    u = g.ze;
                void 0 === l[u] ? n.push("Undefined parameter - " + u) : (u = g[l[u]], void 0 === u && (u = g.other), Tf(k, u, l, m, n));
                break;
            case 0:
                g = b[f].value;
                Uf(a, g, c, Vf, d, e);
                break;
            case 1:
                g = b[f].value;
                Uf(a, g, c, Wf, d, e);
                break;
            default:
                _.Wa("Unrecognized block type: " +
                    b[f].type)
        }
    };
    Uf = function(a, b, c, d, e, f) {
        var g = b.ze,
            k = b.zi,
            l = +c[g];
        isNaN(l) ? f.push("Undefined or invalid parameter - " + g) : (k = l - k, g = b[c[g]], void 0 === g && (d = d(Math.abs(k)), g = b[d], void 0 === g && (g = b.other)), b = [], Tf(a, g, c, e, b), c = b.join(""), e ? f.push(c) : (a = a.A, b = k, isNaN(b) ? a = Ff.Ql : (e = [], b = If(b, -Xf.Rn), e.push(Xf.prefix), k = 0 > b || 0 == b && 0 > 1 / b, e.push(k ? a.D : a.K), isFinite(b) ? (b = b * (k ? -1 : 1) * a.l, a.I ? 0 == b ? (Jf(a, b, a.g, e), Kf(a, 0, e)) : (d = Math.floor(Math.log(b) / Math.log(10) + 2E-15), b = If(b, -d), g = a.g, 1 < a.C && a.C > a.g ? (g = d % a.C, 0 > g && (g = a.C + g), b =
            If(b, g), d -= g, g = 1) : 1 > a.g ? (d++, b = If(b, -1)) : (d -= a.g - 1, b = If(b, a.g - 1)), Jf(a, b, g, e), Kf(a, d, e)) : Jf(a, b, a.g, e)) : e.push(Ff.gl), e.push(k ? a.H : a.M), e.push(Xf.Fq), a = e.join("")), f.push(c.replace(/#/g, a))))
    };
    $f = function(a, b) {
        var c = a.w,
            d = (0, _.Qa)(a.l, a);
        b = b.replace(Yf, function() {
            c.push("'");
            return d(c)
        });
        return b = b.replace(Zf, function(e, f) {
            c.push(f);
            return d(c)
        })
    };
    ag = function(a) {
        var b = 0,
            c = [],
            d = [],
            e = /[{}]/g;
        e.lastIndex = 0;
        for (var f; f = e.exec(a);) {
            var g = f.index;
            "}" == f[0] ? (c.pop(), 0 == c.length && (f = {
                type: 1
            }, f.value = a.substring(b, g), d.push(f), b = g + 1)) : (0 == c.length && (b = a.substring(b, g), "" != b && d.push({
                type: 0,
                value: b
            }), b = g + 1), c.push("{"))
        }
        b = a.substring(b);
        "" != b && d.push({
            type: 0,
            value: b
        });
        return d
    };
    hg = function(a, b) {
        var c = [];
        b = ag(b);
        for (var d = 0; d < b.length; d++) {
            var e = {};
            if (0 == b[d].type) e.type = 4, e.value = b[d].value;
            else if (1 == b[d].type) {
                var f = b[d].value;
                switch (bg.test(f) ? 0 : cg.test(f) ? 1 : dg.test(f) ? 2 : /^\s*\w+\s*/.test(f) ? 3 : 5) {
                    case 2:
                        e.type = 2;
                        e.value = eg(a, b[d].value);
                        break;
                    case 0:
                        e.type = 0;
                        e.value = fg(a, b[d].value);
                        break;
                    case 1:
                        e.type = 1;
                        e.value = gg(a, b[d].value);
                        break;
                    case 3:
                        e.type = 3;
                        e.value = b[d].value;
                        break;
                    default:
                        _.Wa("Unknown block type for pattern: " + b[d].value)
                }
            } else _.Wa("Unknown part of the pattern.");
            c.push(e)
        }
        return c
    };
    eg = function(a, b) {
        var c = "";
        b = b.replace(dg, function(k, l) {
            c = l;
            return ""
        });
        var d = {};
        d.ze = c;
        b = ag(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            e++;
            var g;
            1 == b[e].type ? g = hg(a, b[e].value) : _.Wa("Expected block type.");
            d[f.replace(/\s/g, "")] = g;
            e++
        }
        return d
    };
    fg = function(a, b) {
        var c = "",
            d = 0;
        b = b.replace(bg, function(l, m, n) {
            c = m;
            n && (d = parseInt(n, 10));
            return ""
        });
        var e = {};
        e.ze = c;
        e.zi = d;
        b = ag(b);
        for (var f = 0; f < b.length;) {
            var g = b[f].value;
            f++;
            var k;
            1 == b[f].type ? k = hg(a, b[f].value) : _.Wa("Expected block type.");
            e[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = k;
            f++
        }
        return e
    };
    gg = function(a, b) {
        var c = "";
        b = b.replace(cg, function(k, l) {
            c = l;
            return ""
        });
        var d = {};
        d.ze = c;
        d.zi = 0;
        b = ag(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            e++;
            if (1 == b[e].type) var g = hg(a, b[e].value);
            else _.Wa("Expected block type.");
            d[f.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = g;
            e++
        }
        return d
    };
    ig = function() {
        var a = Yc.call(this) || this;
        (0, cast.receiver.J.zk)(a);
        a.M = Bf.F();
        a.D = $d.F();
        a.l = !1;
        a.w = _.w;
        a.C = 0;
        a.o = a.querySelector("#break-countdown");
        a.G = a.o.querySelector("#break-countdown-text");
        a.A = a.o.querySelector("#break-clip-index-text");
        a.g = a.querySelector("#break-skip-btn");
        a.h = a.querySelector("#break-skip-btn-countdown");
        a.K = a.h.querySelector("#skip-ad-btn-countdown-text");
        a.o.querySelector("#ad-label").textContent = cast.receiver.V.ki;
        a.g.querySelector("#skip-ad-btn-text").innerText = cast.receiver.V.Ml;
        a.g.addEventListener("touchstart", function(b) {
            b.stopPropagation()
        });
        a.g.addEventListener("click", function() {
            jd("SKIP_AD");
            a.w()
        });
        uf() && a.g.addEventListener("keydown", function(b) {
            "Enter" === b.key && (jd("SKIP_AD"), ce(a.D), a.w(), b.stopPropagation())
        });
        Df(a.g, !1);
        L(a, !1);
        L(a.g, !1);
        L(a.h, !1);
        return a
    };
    jg = function(a) {
        var b = a.I - a.H;
        0 > b && (b = 0);
        b = cast.receiver.J.aa.Ra(b);
        1 < a.C && (b = " (" + b + ")");
        a.G.textContent = b
    };
    kg = function(a, b, c) {
        a.C = c;
        0 < c ? (a.A.textContent = 1 < c ? cast.receiver.V.Vi(b, c) : "", jg(a)) : a.A.textContent = ""
    };
    ng = function() {
        this.g = null;
        cast.__platform__ && cast.__platform__.channel ? (_.I(lg, "Opening platform websocket"), mg(this, new qf)) : (_.I(lg, "Opening net websocket"), mg(this, new nf({
            Im: !0
        })));
        this.h = new _.Yd
    };
    mg = function(a, b) {
        a.g && a.g.ga();
        a.g = b;
        a.g.addEventListener("d", a.bn.bind(a));
        a.g.addEventListener("a", a.Zm.bind(a));
        a.g.addEventListener("b", a.$m.bind(a));
        a.g.addEventListener("c", a.an.bind(a))
    };
    pg = function(a, b) {
        _.qe(lg, "IpcChannel " + b);
        b = new og(cast.receiver.ra.qe, cast.receiver.ra.sb, JSON.stringify({
            type: b
        }));
        b.target = a;
        a.h.dispatchEvent(b)
    };
    og = function(a, b, c) {
        _.E.call(this, a);
        this.senderId = b;
        this.data = c
    };
    qg = function(a, b, c, d) {
        _.C.call(this);
        this.h = a;
        this.A = b;
        this.D = !1;
        this.K = [];
        this.o = d || "STRING";
        this.w = new _.Yd;
        this.l = null;
        this.H = this.Pn;
        this.M = this.pn;
        this.g = {};
        a = _.p(c);
        for (b = a.next(); !b.done; b = a.next()) this.g[b.value] = null;
        this.I = this.Kj.bind(this);
        this.A.addEventListener(this.h, this.I)
    };
    rg = function(a, b, c, d) {
        a.Kj(new og(b, c, d))
    };
    sg = function(a, b) {
        a.K.push(b)
    };
    tg = function(a, b) {
        b.target = a;
        return a.w.dispatchEvent(b)
    };
    ug = function(a, b, c) {
        _.E.call(this, a);
        this.senderId = b;
        this.data = c
    };
    _.vg = function(a, b) {
        this.h = {};
        this.g = [];
        this.l = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof _.vg)
                for (c = a.Jb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    _.yg = function(a, b) {
        _.wg(a.h, b) && (delete a.h[b], a.l--, a.g.length > 2 * a.l && xg(a))
    };
    xg = function(a) {
        if (a.l != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                _.wg(a.h, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.l != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], _.wg(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    };
    _.wg = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Bg = function() {
        this.l = _.zg.F();
        this.w = 0;
        this.h = null;
        this.g = new _.vg;
        this.C = this.G.bind(this);
        this.o = Ag(this.l, cast.receiver.Dc.hl, "JSON");
        this.o.l = this.A.bind(this);
        for (var a = _.p([cast.receiver.Db.Zb, cast.receiver.media.gb]), b = a.next(); !b.done; b = a.next())(b = this.l.g[b.value] || null) && sg(b, this.C)
    };
    Eg = function(a, b, c, d, e, f) {
        _.G(Cg, b);
        a.o.send(c, new Dg(d, e || "INJECT_ERROR", void 0 !== f ? JSON.stringify(f) : void 0));
        "WRAPPED_ERROR" == e ? cast.receiver.Za.Wg(f && f.code || "") : cast.receiver.Za.Wg("INJECT_ERROR")
    };
    Gg = function(a, b, c, d) {
        a.o.send(b, new Fg(c, d));
        cast.receiver.Za.Wg("SUCCESS")
    };
    Hg = function(a, b, c) {
        this.type = a;
        this.requestId = b;
        this.data = c
    };
    Fg = function(a, b) {
        Hg.call(this, "SUCCESS", a, b)
    };
    Dg = function(a, b, c) {
        Hg.call(this, "ERROR", a, c);
        this.code = b
    };
    Ig = function() {
        this.g = (0, _.M)()
    };
    Kg = function(a) {
        this.o = a || "";
        Jg || (Jg = new Ig);
        this.w = Jg
    };
    Lg = function(a) {
        return 10 > a ? "0" + a : String(a)
    };
    Mg = function(a, b) {
        a = (a.l - b) / 1E3;
        b = a.toFixed(3);
        var c = 0;
        if (1 > a) c = 2;
        else
            for (; 100 > a;) c++, a *= 10;
        for (; 0 < c--;) b = " " + b;
        return b
    };
    Ng = function(a) {
        Kg.call(this, a)
    };
    Og = function(a, b) {
        var c = [];
        c.push(a.o, " ");
        if (a.h) {
            var d = new Date(b.l);
            c.push("[", Lg(d.getFullYear() - 2E3) + Lg(d.getMonth() + 1) + Lg(d.getDate()) + " " + Lg(d.getHours()) + ":" + Lg(d.getMinutes()) + ":" + Lg(d.getSeconds()) + "." + Lg(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        c.push("[", Mg(b, a.w.get()), "s] ");
        c.push("[", b.h, "] ");
        c.push(b.w);
        a.l && (b = b.g) && c.push("\n", b instanceof Error ? b.message : b.toString());
        a.g && c.push("\n");
        return c.join("")
    };
    Pg = function() {
        this.w = (0, _.Qa)(this.l, this);
        this.g = new Ng;
        this.g.h = !1;
        this.g.l = !1;
        this.h = this.g.g = !1;
        this.o = {}
    };
    Rg = function() {
        var a = Qg;
        if (1 != a.h) {
            ke();
            var b = he;
            var c = a.w;
            b.g || (b.g = []);
            b.g.push(c);
            a.h = !0
        }
    };
    Sg = function(a, b, c, d) {
        if (a[b]) a[b](c, d || "");
        else a.log(c, d || "")
    };
    _.zg = function() {
        _.C.call(this);
        Qg || (Qg = new Pg);
        Qg && Rg();
        this.h = _.rb(Tg);
        this.W = !1;
        this.O = new ng;
        this.o = {};
        this.N = new _.Yd;
        this.w = new qg(cast.receiver.ra.qe, this.O, _.mb(this.o), "JSON");
        _.kd(this, _.Ra(_.ld, this.w));
        this.l = this.I = this.M = null;
        this.na = !1;
        this.D = this.H = null;
        this.R = !0;
        this.A = "notstarted";
        this.sa = null;
        this.la = 0;
        this.g = {};
        this.Y = this.da = this.ca = this.Z = null;
        this.ka = !1;
        this.w.addEventListener(cast.receiver.ra.sb, this.aq.bind(this));
        _.Gd(window, "unload", this.sh, !1, this);
        _.Gd(document, "visibilitychange",
            this.Hj, !1, this);
        le(Ug, Vg, "Version: " + cast.receiver.VERSION + "." + cast.receiver.Wf);
        B("Cast.V2.Version", Number(cast.receiver.Wf));
        Wg && Wg(this);
        this.pa = We();
        this.K = We();
        var a = cast.receiver.platform.Ya("device-capabilities");
        a && Xg(this, a)
    };
    Yg = function(a) {
        var b = a.toLocaleLowerCase();
        return ["com.vizio.vue", "com.vizio.smartcast"].some(function(c) {
            return b.includes(c)
        })
    };
    Zg = function(a, b, c, d) {
        var e = {
            type: "ready"
        };
        c && (e.statusText = c);
        d && (e.dialData = d);
        e.activeNamespaces = b;
        e.version = cast.receiver.VERSION;
        e.messagesVersion = cast.receiver.ra.nl;
        e.sdkCapabilities = {
            show_media_controls_supported: !0,
            group_capabilities_supported: !0,
            playback_device_status_supported: !0
        };
        a.w.send(cast.receiver.ra.sb, e)
    };
    $g = function(a, b, c) {
        var d = {
            type: "setappstate"
        };
        void 0 != b && (d.statusText = b);
        void 0 != c && (d.dialData = c);
        a.w.send(cast.receiver.ra.sb, d)
    };
    Ag = function(a, b, c) {
        if (b == cast.receiver.ra.qe) throw Error("Protected namespace");
        if (!_.vb(b, cast.receiver.ra.Ad)) throw Error("Invalid namespace prefix");
        if (!a.g[b]) {
            if (a.na) throw Error("New namespaces can not be requested after start has been called");
            a.g[b] = new qg(b, a.O, _.mb(a.o), c);
            _.kd(a, _.Ra(_.ld, a.g[b]))
        }
        if (c && a.g[b].o != c) throw Error("Invalid messageType for the namespace");
        return a.g[b]
    };
    Xg = function(a, b) {
        a.l = b ? _.rb(b) : {};
        cast.receiver.platform.dj() && (a.l.hasOwnProperty("is_hdr_supported") || (a.l.is_hdr_supported = cast.receiver.platform.canDisplayType("video/mp4; codecs=hev1.2.4.L153.B0; eotf=smpte2084")), a.l.hasOwnProperty("is_dv_supported") || (a.l.is_dv_supported = cast.receiver.platform.canDisplayType("video/mp4; codecs=dvhe.04.06")), cast.receiver.platform.Ya("enabled-for-dev") && (a.l.is_device_registered = !0), cast.receiver.platform.Ya("enable-hls-sample-aes") && (a.l.is_cbcs_supported = !0))
    };
    dh = function(a, b) {
        var c = b.launchingSenderId,
            d = _.mb(a.g);
        a.U = b.version;
        a.R = !ah(a);
        Xg(a, b.deviceCapabilities);
        a.M = {
            id: b.applicationId,
            name: b.applicationName,
            iconUrl: b.iconUrl,
            sessionId: b.sessionId,
            namespaces: d,
            launchingSenderId: c,
            launchedFrom: b.launchedFrom || "UNKNOWN"
        };
        a.A = "ready";
        for (var e in a.g) a.g[e].D = !0;
        a.pa.resolve(a.M);
        a.W && (a.W = !1, $g(a, a.h.statusText, a.h.Qn));
        _.I(Ug, "Dispatching CastReceiverManager system ready event");
        b = new bh(a.M);
        a.Z && a.Z(b);
        ch(a, b)
    };
    gh = function(a, b) {
        if (Yg(b.id)) _.I(Ug, "Ignored connection from " + b.id);
        else {
            _.I(Ug, "Dispatching CastReceiverManager sender connected event [" + b.id + "]");
            _.ob(a.o, b.id) && _.G(Ug, "Unexpected connected message for already connected sender: " + b.id);
            a.o[b.id] = b;
            var c = new eh(b.id, b.userAgent),
                d;
            for (d in a.g) {
                var e = a.g[d],
                    f = b.id;
                _.ob(e.g, f) ? _.G(fh, "Unexpected sender already registered [" + e.h + ", " + f + "]") : (_.I(fh, "Registering sender [" + e.h + ", " + f + "]"), e.g[f] = null)
            }
            ch(a, c)
        }
    };
    ih = function(a, b, c) {
        if (Yg(b)) _.I(Ug, "Ignored disconnection from " + b);
        else {
            switch (c) {
                case "closed_by_peer":
                    c = "requested_by_sender";
                    break;
                case "transport_invalid_message":
                    c = "error";
                    break;
                default:
                    c = "unknown"
            }
            _.I(Ug, "Dispatching sender disconnected event [" + b + "] Reason: " + c);
            if (_.ob(a.o, b)) {
                var d = a.o[b].userAgent;
                delete a.o[b];
                c = new hh(b, d, c);
                for (var e in a.g) {
                    d = a.g[e];
                    var f = b;
                    _.ob(d.g, f) && (_.I(fh, "Unregistering sender [" + d.h + ", " + f + "]"), d.g[f] && d.g[f].close(), delete d.g[f])
                }
                ch(a, _.rb(c));
                a.ca && a.ca(c)
            } else _.G(Ug,
                "Unknown sender disconnected: " + b)
        }
    };
    kh = function(a, b) {
        a.sa = b;
        _.I(Ug, "Dispatching system volume changed event [" + b.level + ", " + b.muted + "]");
        ch(a, new jh(b))
    };
    mh = function(a, b) {
        b == a.H ? _.I(Ug, "Ignoring visibility changed event, state is already " + b) : (_.I(Ug, "Dispatching visibility changed event " + b), a.H = b, b = new lh(0 != b), a.da && a.da(b), ch(a, b))
    };
    oh = function(a, b) {
        b != a.D && (_.I(Ug, "Dispatching standby changed event " + b), a.D = b, ch(a, new nh(1 == b)))
    };
    qh = function(a, b) {
        _.I(Ug, "Dispatching showmediacontrols " + b);
        a.la = b;
        ch(a, new ph(b))
    };
    sh = function(a, b) {
        _.I(Ug, "Dispatching maxvideoresolutionchanged " + b);
        ch(a, new rh(b))
    };
    uh = function(a, b) {
        var c = new th;
        c.capabilities = b.capabilities;
        ch(a, c)
    };
    wh = function(a, b) {
        var c = new vh;
        c.requestId = b.requestId;
        c.newGroupCapabilities = b.newGroupCapabilities;
        a.w.send(cast.receiver.ra.sb, {
            type: "allowgroupchangeresponse",
            requestId: c.requestId,
            allowChange: !0,
            reason: void 0
        });
        ch(a, c)
    };
    xh = function(a, b) {
        _.I(Ug, "Touchscreen-optimized app: " + b);
        cast.receiver.platform.setTouchInputSupport(b).then(function(c) {
            _.I(Ug, function() {
                return "Touch supported options: " + JSON.stringify(c)
            });
            b ? a.K.resolve("touch-optimized") : c && c.displayControls ? a.K.resolve("non-touch-optimized") : a.K.resolve("no-controls")
        }, function() {
            _.I(Ug, "Touch support is blocked");
            a.K.resolve("no-controls")
        });
        a.ka = !0
    };
    yh = function(a) {
        var b = We();
        a.pa.g.then(function() {
            _.I(Ug, "Touch input supported: " + a.l && a.l.touch_input_supported);
            a.l && a.l.touch_input_supported ? b.resolve(!0) : b.resolve(!1)
        });
        return b.g
    };
    zh = function(a) {
        var b = We();
        yh(a).then(function(c) {
            a.K.g.then(function(d) {
                c || (d = "no-controls");
                b.resolve(d)
            })
        });
        return b.g
    };
    ah = function(a) {
        if (!a.U) return _.G(Ug, "No System Version"), !1;
        var b = ["1", "11"];
        if (!b.length) return _.G(Ug, "Version provided is not valid: 1.11"), !1;
        var c = a.U.split(".");
        if (!c.length) return _.G(Ug, "System Version format is not valid " + a.U), !1;
        for (var d = 0; d < b.length; d++) {
            var e = parseInt(b[d], 10);
            if (isNaN(e)) return _.G(Ug, "Version is not numeric: 1.11"), !1;
            var f = c.length > d ? parseInt(c[d], 10) : 0;
            if (isNaN(f)) return _.G(Ug, "System Version is not numeric: " + a.U), !1;
            if (e > f) return !1
        }
        return !0
    };
    ch = function(a, b) {
        b.target = a;
        var c = !1;
        try {
            c = a.N.dispatchEvent(b)
        } catch (d) {
            window.setTimeout(function() {
                throw d;
            }, 0)
        }
        return c
    };
    Ah = function(a, b) {
        _.E.call(this, a);
        this.data = b
    };
    hh = function(a, b, c) {
        Ah.call(this, "senderdisconnected", a);
        this.senderId = a;
        this.userAgent = b;
        this.reason = c
    };
    eh = function(a, b) {
        Ah.call(this, "senderconnected", a);
        this.senderId = a;
        this.userAgent = b
    };
    lh = function(a) {
        Ah.call(this, "visibilitychanged", a);
        this.isVisible = a
    };
    nh = function(a) {
        Ah.call(this, "standbychanged", null);
        this.isStandby = a
    };
    jh = function(a) {
        Ah.call(this, "systemvolumechanged", a);
        this.data = a
    };
    bh = function(a) {
        Ah.call(this, "ready", a);
        this.data = a
    };
    Bh = function() {
        Ah.call(this, "shutdown", null)
    };
    Ch = function(a) {
        Ah.call(this, "playbackdevicestatus", null);
        this.playbackDeviceStatus = a
    };
    ph = function(a) {
        Ah.call(this, "showmediacontrols", null);
        this.mediaControlsState = a
    };
    rh = function(a) {
        Ah.call(this, "maxvideoresolutionchanged", null);
        this.height = a
    };
    th = function() {
        Ah.call(this, "groupcapabilities", null);
        this.capabilities = void 0
    };
    vh = function() {
        Ah.call(this, "allowgroupchange", null);
        this.newGroupCapabilities = void 0
    };
    Dh = function() {
        this.g = _.zg.F();
        this.h = Ag(this.g, "urn:x-cast:com.google.cast.broadcast", "JSON");
        this.h.l = this.l.bind(this)
    };
    Jh = function(a) {
        if (!a) return null;
        var b = new ad;
        b.title = Eh(a.title);
        Object.values(Fh).includes(a.targetAspectRatio) && (b.targetAspectRatio = a.targetAspectRatio, "PORTRAIT_2_TO_3" === a.targetAspectRatio && _.H(Gh, "UI for the browse items with portrait orientation is not final and is a subject to change."));
        if (!_.Ia(a.items)) return null;
        b.items = a.items.map(function(c) {
            if (!c.entity || "string" !== typeof c.entity) return _.H(Gh, "BrowseItem.entity should be a non-empty string"), null;
            var d = new bd(c.entity);
            "string" ===
            typeof c.title && (d.title = c.title);
            "string" === typeof c.subtitle && (d.subtitle = c.subtitle);
            if (!d.title && !d.subtitle) return _.H(Gh, "At least one of the BrowseItem.title or BrowseItem.subtitle should be non-empty strings"), null;
            "number" === typeof c.duration && (d.duration = c.duration);
            c.image && "string" === typeof c.image.url && (d.image = new Ac(c.image.url));
            Object.values(Hh).includes(c.imageType) && (d.imageType = c.imageType);
            Object.values(Ih).includes(c.mediaBadge) && (d.mediaBadge = c.mediaBadge);
            return d
        }).filter(function(c) {
            return !!c
        });
        if (1 > b.items.length) return null;
        30 < b.items.length && (a = b.items.length, b.items = b.items.slice(0, 30), _.G(Gh, "BrowseContent.items length is " + a + " that exceeds maximum allowed length of 30 elements. BrowseContent.items list is truncated to 30 elements"));
        return b
    };
    Eh = function(a) {
        return "string" === typeof a ? a : ""
    };
    Kh = function(a, b) {
        a.g.disabled = b;
        a.g.setAttribute("aria-disabled", String(b));
        Df(a.g, !b)
    };
    Lh = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        var e = document.createElement("img");
        e.setAttribute("role", "presentation");
        e.classList.add("btn-icon");
        var f = document.createElement("div");
        if (!uf()) {
            var g = document.createElement("goog-ripple");
            g.setAttribute("recenters", "");
            f.appendChild(g)
        }
        f.appendChild(e);
        f.className = "btn";
        d && f.classList.add(d);
        f.src = "";
        f.title = c;
        f.setAttribute("role", "button");
        f.addEventListener("click", b);
        Df(f, !0);
        uf() && f.addEventListener("keydown", function(k) {
            "Enter" === k.key && (ce(a.A),
                b(k), k.stopPropagation())
        });
        return f
    };
    Mh = function(a, b, c) {
        b ? (a.g.textContent = b, L(a.g, !0)) : (a.g.textContent = "", L(a.g, !1));
        c ? a.l.setAttribute("connected", "true") : a.l.removeAttribute("connected")
    };
    Ph = function() {
        cast.receiver.J.Yb.call(this, function() {
            a.h ? a.o() : a.w()
        }, "", "btn-play-pause");
        var a = this;
        this.o = this.w = _.w;
        this.h = !1;
        this.l = !0;
        Nh(this);
        this.l = !0;
        Oh(this)
    };
    Nh = function(a) {
        var b = cast.receiver.V.oi;
        a.g.dataset.state = "paused";
        a.g.title = b;
        a.h = !1;
        Oh(a)
    };
    Oh = function(a) {
        Kh(a, a.h && !a.l)
    };
    Qh = function(a, b, c) {
        cast.receiver.J.Yb.call(this, a, b, c)
    };
    Sh = function() {
        var a = Yc.call(this) || this;
        (0, cast.receiver.J.Ek)(a);
        a.h = null;
        a.H = !1;
        a.D = $d.F();
        a.G = !0;
        a.I = null;
        a.A = {};
        a.o = {};
        ["slot-primary-1", "slot-primary-2", "slot-secondary-1", "slot-secondary-2"].forEach(function(b) {
            a.A[b] = a.querySelector(".slot." + b)
        });
        a.K = _.w;
        a.M = _.w;
        a.O = _.w;
        a.N = _.w;
        a.w = Bf.F();
        a.g = null;
        Df(a, !0);
        a.l = new cast.receiver.J.Xl;
        ve(a.l.g, a.querySelector("play-placeholder"));
        a.l.o = function() {
            a.K()
        };
        a.l.w = function() {
            a.M()
        };
        a.C = new Qh(function() {
            a.O()
        }, cast.receiver.V.Nl, "btn-stop");
        ve(a.C.g,
            a.querySelector("stop-placeholder"));
        L(a.C.g, !1);
        uf() && (a.addEventListener("keydown", function(b) {
            b.preventDefault();
            if ("ArrowRight" === b.key) {
                a: {
                    var c = Rh(a);
                    for (var d = 0; d < c.length - 1; d++)
                        if (a.w.g.includes(c[d])) {
                            c = c[d + 1];
                            break a
                        }
                    c = null
                }
                c && (a.g = c, a.w.focus(a.g), ce(a.D), b.stopPropagation())
            }
            if ("ArrowLeft" === b.key) {
                a: {
                    c = Rh(a);
                    for (d = 1; d < c.length; d++)
                        if (a.w.g.includes(c[d])) {
                            c = c[d - 1];
                            break a
                        }
                    c = null
                }
                c && (a.g = c, a.w.focus(a.g), ce(a.D), b.stopPropagation())
            }
        }), a.addEventListener("focus", function() {
            a.g && Ef(a.g) ?
                a.w.focus(a.g) : a.w.focus(a.l.g)
        }));
        return a
    };
    Th = function(a) {
        a.h = new cast.receiver.J.Qk(function() {
            a.N()
        });
        a.querySelector(".device-controller-slot").appendChild(a.h.h)
    };
    Uh = function(a) {
        a.h && L(a.h.h, a.G && (a.H || a.I === cast.receiver.J.Ba.AUDIO))
    };
    Rh = function(a) {
        return Array.from(a.querySelectorAll("[data-focusable]")).filter(function(b) {
            return Ef(b)
        })
    };
    Wh = function() {
        this.D = this.C = this.G = this.A = this.l = this.o = null;
        this.w = _.zg.F();
        this.g = Ag(this.w, Vh, "JSON");
        this.g.l = this.H.bind(this);
        this.h = new _.vg
    };
    Zh = function(a, b, c, d) {
        _.J().then(function() {
            return d(c)
        }).then(function(e) {
            e = Xh(c, e);
            a.g.send(b, e)
        }, function(e) {
            e && "ERROR" == e.type ? (e = Xh(c, e), a.g.send(b, e)) : (e = "Got a rejected promise " + JSON.stringify(e), Yh(e, c, "APP_ERROR"), a.g.send(b, Yh(e, c, "APP_ERROR")))
        })
    };
    Yh = function(a, b, c) {
        _.G($h, a);
        a = new ai(c);
        a.requestId = b.requestId;
        return a
    };
    Xh = function(a, b) {
        if (!b) return Yh("No response data", a, "APP_ERROR");
        switch (b.type) {
            case "SUCCESS":
            case "ERROR":
                return b.requestId = a.requestId, b
        }
        return Yh("Invalid response data " + JSON.stringify(b), a, "APP_ERROR")
    };
    bi = function(a, b, c) {
        if (b) {
            var d = a.h.get(b);
            d ? (_.yg(a.h, b), d(c)) : _.H($h, "No matching request for response " + JSON.stringify(c))
        }
    };
    ci = function(a) {
        this.type = a
    };
    di = function() {
        this.type = "REFRESH_CREDENTIALS"
    };
    ei = function(a, b) {
        this.type = "PLAY_STRING";
        this.stringId = a;
        this.arguments = b
    };
    fi = function() {
        this.type = "USER_ACTION"
    };
    gi = function() {
        this.type = "SHOW_REMOTE_CONTROL_OVERLAY"
    };
    hi = function(a) {
        this.type = a
    };
    ii = function(a) {
        this.type = "SUCCESS";
        this.status = a
    };
    ai = function(a, b) {
        this.type = "ERROR";
        this.code = a;
        this.reason = b
    };
    li = function(a) {
        if (!ji.test(a)) throw Error("'" + a + "' is not a valid alpha hex color");
        5 == a.length && (a = a.replace(ki, "#$1$1$2$2$3$3$4$4"));
        a = a.toLowerCase();
        return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16), parseInt(a.substr(7, 2), 16) / 255]
    };
    mi = function(a) {
        var b = a.slice(0);
        b[3] = Math.round(1E3 * a[3]) / 1E3;
        return "rgba(" + b.join(",") + ")"
    };
    si = function(a, b, c, d) {
        _.C.call(this);
        this.g = a;
        this.l = this.o = null;
        for (a = this.g; a.parentNode;) a = a.parentNode;
        this.w = 0 > a.toString().toLowerCase().indexOf("shadow") ? document.head : a;
        this.h = [];
        this.D = !1;
        this.A = "cast-captions-" + Math.floor(1E6 * Math.random()).toString();
        this.I = "[" + this.A + '="true"]::cue ';
        this.K = new RegExp(/^[\.'":%,;\s\-0-9a-z]+$/i);
        this.H = void 0;
        ni(this, b);
        oi(this);
        pi(this);
        d && qi(this, d);
        ri(this, c)
    };
    ti = function(a, b) {
        a = _.p(a.h);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = c.track;
            b(c) ? d.mode = "showing" : (d.mode = "showing", d.mode = "disabled")
        }
    };
    ui = function(a) {
        return a.h.map(function(b) {
            return parseInt(b.id, 10)
        })
    };
    ri = function(a, b) {
        ti(a, function(c) {
            return _.db(b, parseInt(c.id, 10))
        })
    };
    vi = function(a, b) {
        ti(a, function(c) {
            return cast.receiver.md(b, c.srclang)
        })
    };
    wi = function(a) {
        var b = [];
        a = _.p(a.h);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, "showing" == c.track.mode && b.push(parseInt(c.id, 10));
        return b
    };
    ni = function(a, b) {
        b = _.p(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = c.trackContentId;
            if ("TEXT" == c.type && d) {
                var e = c.trackContentType;
                if (yb(d, "vtt") || void 0 !== e && 0 == wb(e, "text/vtt")) d = document.createElement("track"), d.src = c.trackContentId, d.id = c.trackId, d.label = c.name, d.srclang = c.language, d.kind = (c.subtype || "CAPTIONS").toLowerCase(), a.h.push(d)
            }
        }
        xi(a);
        0 < a.h.length && !a.g.getAttribute("crossorigin") && (a.g.setAttribute("crossorigin", "anonymous"), a.D = !0);
        b = _.p(a.h);
        for (c = b.next(); !c.done; c =
            b.next()) c = c.value, a.g.contains(c) || a.g.appendChild(c)
    };
    oi = function(a, b) {
        if (void 0 === b ? 0 : b) a.g.removeAttribute(a.A), a.w.contains(a.l) && a.w.removeChild(a.l), a.o = null, a.l = null;
        else if (a.l)
            for (b = a.o.cssRules.length - 1; 0 <= b; b--) a.o.deleteRule(b)
    };
    xi = function(a) {
        a.D && (a.g.removeAttribute("crossorigin"), a.D = !1)
    };
    zi = function(a, b, c) {
        1 == c || a.K.test(b) ? a.o.insertRule(a.I + "{ " + b + " }", a.o.cssRules.length) : _.H(yi, "Invalid css cue: " + b)
    };
    pi = function(a) {
        if (!a.l) {
            var b;
            a.w.getElementById ? b = a.w.getElementById("cue-style") : b = document.getElementById("cue-style");
            b || (b = document.createElement("style"), b.id = "cue-style", b.type = "text/css", a.w.appendChild(b), b.appendChild(document.createTextNode("")));
            a.l = b;
            a.o = a.l.sheet
        }
        zi(a, "font-size: 4.1vh;");
        zi(a, "font-family: monospace;");
        zi(a, "font-style: normal;");
        zi(a, "font-weight: normal;");
        zi(a, "background-color: black;");
        zi(a, "color: white;");
        a.g.setAttribute(a.A, !0)
    };
    Ai = function(a, b) {
        try {
            var c = mi(li(a))
        } catch (d) {
            _.H(yi, "Invalid color: " + a)
        }
        if (c) switch (a = "rgba(204, 204, 204, " + parseInt(a.substring(7, 9), 16) + ")", b) {
            case "OUTLINE":
                return "text-shadow: 0 0 4px " + c + ", 0 0 4px " + c + ", 0 0 4px " + c + ", 0 0 4px " + c + ";";
            case "DROP_SHADOW":
                return "text-shadow: 0px 2px 3px " + c + ", 0px 2px 4px " + c + ", 0px 2px 5px " + c + ";";
            case "RAISED":
                return "text-shadow: 1px 1px " + c + ", 2px 2px " + c + ", 3px 3px " + c + ";";
            case "DEPRESSED":
                return "text-shadow: 1px 1px " + a + ", 0 1px " + a + ", -1px -1px " + c + ", 0 -1px " +
                    c + ";"
        }
        return ""
    };
    Bi = function(a) {
        switch (a) {
            case "BOLD":
                return "font-weight: bold;";
            case "BOLD_ITALIC":
                return "font-style: italic; font-weight: bold;";
            case "ITALIC":
                return "font-style: italic;"
        }
        return "font-style: normal;"
    };
    qi = function(a, b) {
        a.H = b;
        if (void 0 !== b.foregroundColor) try {
            var c = mi(li(b.foregroundColor));
            zi(a, "color: " + c + ";", !0)
        } catch (k) {
            _.H(yi, "Invalid color: " + b.foregroundColor)
        }
        if (void 0 !== b.backgroundColor) try {
            var d = mi(li(b.backgroundColor));
            zi(a, "background-color: " + d + ";", !0)
        } catch (k) {
            _.H(yi, "Invalid color: " + b.backgroundColor)
        }
        void 0 !== b.fontScale && zi(a, "font-size: " + 100 * b.fontScale + "%;");
        if (void 0 !== b.fontFamily || void 0 !== b.fontGenericFamily) {
            c = b.fontFamily;
            d = b.fontGenericFamily;
            var e = "font-family: ",
                f =
                "";
            void 0 !== c && (e += '"' + c + '"', f = ", ");
            if (void 0 !== d) {
                switch (d) {
                    case "SANS_SERIF":
                        var g = '"Droid Sans", sans-serif';
                        break;
                    case "MONOSPACED_SANS_SERIF":
                        g = '"Droid Sans Mono", monospace';
                        break;
                    case "SERIF":
                        g = '"Droid Serif", serif';
                        break;
                    case "MONOSPACED_SERIF":
                        g = '"Cutive Mono", serif-monospace';
                        break;
                    case "CASUAL":
                        g = '"Short Stack", casual';
                        break;
                    case "CURSIVE":
                        g = "Quintessential, cursive";
                        break;
                    case "SMALL_CAPITALS":
                        g = '"Alegreya Sans SC", sans-serif-smallcaps'
                }
                e += f + g
            }
            zi(a, e + ";")
        }
        void 0 !== b.fontStyle && zi(a,
            Bi(b.fontStyle));
        void 0 !== b.edgeType && (g = void 0 !== b.foregroundColor ? b.foregroundColor : "#FFFFFFFF", b = void 0 !== b.edgeColor ? Ai(b.edgeColor, b.edgeType) : Ai(g, b.edgeType), zi(a, b, !0))
    };
    Ci = function(a) {
        this.fa = N;
        this.g = a;
        this.I = this.D = this.H = _.w;
        this.w = 0;
        this.o = this.C = null;
        this.K = 0;
        this.l = this.h = null;
        this.A = !1;
        this.G = !0;
        _.Gd(this.g, "error", this.Xm, !1, this);
        _.Gd(this.g, "ended", this.Di, !1, this);
        _.Gd(this.g, "loadedmetadata", this.Ym, !1, this);
        _.I(this.fa, "Using default Player")
    };
    Di = function(a) {
        var b = a.g.duration;
        if (isNaN(b) || null == a.o) return b;
        if (null != a.C) return a.C;
        a.C = 0 <= a.o ? Math.min(a.K + a.o, b) : Math.max(b + a.o, a.w);
        return a.C
    };
    Ei = function(a) {
        null != a.o && (Rd(a.g, "timeupdate", a.Ij, !1, a), a.C = null, a.o = null)
    };
    Fi = function(a) {
        if (null == a.o) return !1;
        var b = Di(a);
        return isNaN(b) ? !1 : a.g.currentTime >= b ? (a.Di(), !0) : !1
    };
    Gi = function(a, b) {
        a.l = b ? b.slice(0) : a.l;
        a.l = a.l || [];
        if (a.h) {
            var c = ui(a.h);
            a.l = a.l.filter(function(d) {
                return !c.includes(d)
            }).concat(wi(a.h))
        }
        0 == a.l.length && (a.l = null)
    };
    Hi = function(a) {
        this.itemId = a;
        this.customData = this.activeTrackIds = this.preloadTime = this.playbackDuration = this.startTime = this.autoplay = this.media = void 0
    };
    Ii = function(a, b) {
        var c = new Hi(a.itemId);
        c.autoplay = a.autoplay;
        c.startTime = a.startTime;
        c.playbackDuration = a.playbackDuration;
        c.preloadTime = a.preloadTime;
        c.activeTrackIds = a.activeTrackIds;
        c.customData = a.customData;
        if (void 0 === b || b) c.media = a.media;
        return c
    };
    Ji = function(a) {
        this.g = void 0;
        this.o = "REPEAT_OFF";
        this.h = 0;
        this.w = this.l = this.C = void 0;
        this.D = a;
        this.A = 1;
        this.G = 0
    };
    Ki = function(a) {
        a.G = 0;
        a.g.forEach(function(b, c) {
            b.orderId = c;
            a.G++
        })
    };
    Li = function(a, b) {
        a.w && (a.w.shuffle = b)
    };
    Mi = function(a) {
        return !(!a.w || !a.w.shuffle)
    };
    Pi = function(a, b) {
        if (a.l) return Promise.resolve(a.l.initialize(b)).then(function(c) {
            c ? (Ni(a, c, !0, !0), Ki(a)) : Oi(a, b)
        });
        Oi(a, b)
    };
    Oi = function(a, b) {
        var c = b.queueData;
        c && c.items ? Ni(a, c) : (c = new Hi(a.D()), c.media = b.media, c.autoplay = b.autoplay, c.activeTrackIds = b.activeTrackIds, c.customData = b.customData, c.itemId = 1, a.g = [c], a.w = b.queueData);
        Ki(a)
    };
    Ni = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Qi(a, b, void 0 === c ? !1 : c) || _.H(Ri, "The passed in queueData is not completely valid: " + b);
        a.w = b;
        d && b.items && Si(b.items);
        a.g = b.items;
        a.o = b.repeatMode || a.o;
        a.h = b.startIndex || 0;
        a.C = b.startTime || void 0
    };
    Si = function(a) {
        a = _.p(a);
        for (var b = a.next(); !b.done; b = a.next()) b = b.value, b.preloadTime = null != b.preloadTime ? b.preloadTime : 0
    };
    Ti = function(a, b, c) {
        var d = new Fc;
        d.requestId = b;
        d.items = [];
        if (a.g)
            for (b = _.p(c), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                for (var e = _.p(a.g), f = e.next(); !f.done; f = e.next())
                    if (f = f.value, f.itemId == c) {
                        d.items.push(f);
                        break
                    }
                _.H(Ri, "Unknown item id: " + c)
            }
        return d
    };
    Ui = function(a, b) {
        var c = new Gc;
        c.requestId = b;
        c.itemIds = a.yc().map(function(d) {
            return d.itemId
        });
        return c
    };
    Xi = function(a, b) {
        return new Promise(function(c, d) {
            var e = void 0,
                f = a.h + b;
            0 <= f && f < a.g.length ? (e = new Ec, e.changeType = "NO_CHANGE", c(e)) : (f = Vi(a), 1 == b ? e = a.l.nextItems.bind(a.l, f) : -1 == b ? e = a.l.prevItems.bind(a.l, f) : 1 < b ? e = a.l.fetchItems.bind(a.l, f, b, 0) : -1 > b ? e = a.l.fetchItems.bind(a.l, f, 0, -b) : d("Should not be requesting more items on the current item"), Promise.resolve(e()).then(function(g) {
                Si(g);
                var k = new Ec;
                if (0 < g.length) {
                    _.I(Ri, "Fetched more items " + g);
                    var l = 0 <= b ? void 0 : a.g[0].itemId;
                    Wi(a, g, l);
                    k.changeType =
                        "INSERT";
                    k.itemIds = g.map(function(m) {
                        return m.itemId
                    });
                    k.insertBefore = l;
                    k.sequenceNumber = a.A++
                } else k.changeType = "NO_CHANGE", k.sequenceNumber = a.A - 1;
                c(k)
            }, function() {
                return d("Failed to get more items from the queue.")
            }))
        })
    };
    Yi = function(a) {
        return void 0 !== a.g
    };
    Vi = function(a) {
        if (!(0 > a.h) && a.g) return a.g[a.h].itemId
    };
    Zi = function(a, b) {
        a.o = b;
        a.w && (a.w.repeatMode = b)
    };
    $i = function(a, b) {
        for (var c = [], d = 0; d < b.length; d++)
            for (var e = 0; e < a.g.length; e++)
                if (b[d] == a.g[e].itemId) {
                    c.push(b[d]);
                    break
                }
        return c
    };
    aj = function(a, b) {
        for (var c = 0; c < a.g.length; c++)
            if (b == a.g[c].itemId) return c;
        return -1
    };
    bj = function(a) {
        return "REPEAT_ALL_AND_SHUFFLE" == a.o || "REPEAT_ALL" == a.o
    };
    dj = function(a, b) {
        b = aj(a, b);
        if (-1 == b || a.h == b) return !1;
        cj(a, b);
        return !0
    };
    fj = function(a, b, c) {
        if (!ej(a, "reorderItems") && b && 0 != b.length) {
            var d = a.g[a.h].itemId,
                e = void 0 !== c ? c : -1;
            c = a.g.length - b.length;
            for (var f = [], g = -1 == e ? !0 : !1, k = 0; k < a.g.length; k++) _.db(b, a.g[k].itemId) ? g || a.g[k].itemId != b[0] || (c = f.length) : (f.push(a.g[k]), e == a.g[k].itemId && (c = f.length - 1, g = !0));
            e = [];
            for (g = 0; g < b.length; g++) {
                a: {
                    for (k = 0; k < a.g.length; k++)
                        if (b[g] == a.g[k].itemId) {
                            k = a.g[k];
                            break a
                        }
                    k = null
                }
                e.push(k)
            }
            _.Ra(hb, f, c, 0).apply(null, e);
            a.g = f;
            void 0 !== d && dj(a, d);
            Mi(a) || Ki(a)
        }
    };
    Wi = function(a, b, c, d) {
        for (var e = _.p(b), f = e.next(); !f.done; f = e.next()) f = f.value, "number" !== typeof f.itemId && (f.itemId = a.D());
        e = "number" === typeof c ? aj(a, c) : a.g.length;
        e = -1 == e ? a.g.length : e;
        _.Ra(hb, a.g, e, 0).apply(null, b);
        void 0 !== d ? a.h = e + d : a.h >= e && (a.h += b.length);
        if (a.l) a.l.onItemsInserted(b, c);
        Mi(a) ? b.forEach(function(g) {
            g.orderId = a.G;
            a.G++
        }) : Ki(a);
        return b.map(function(g) {
            return g.itemId
        })
    };
    ej = function(a, b) {
        return a.l ? (b && _.H(Ri, b + " not supported when external queue is provided."), !0) : !1
    };
    hj = function(a, b, c) {
        if (0 > a.h) return "QUEUE_ENDED";
        b = a.h + b;
        var d = !1;
        b >= a.g.length ? (b = bj(a) ? b % a.g.length : -1, d = !0) : 0 > b && (b = bj(a) ? a.g.length + (b + 1) % a.g.length - 1 : 0, d = !0);
        c && cj(a, b);
        return -1 == b ? "QUEUE_ENDED" : d ? ("REPEAT_ALL_AND_SHUFFLE" === a.o && Li(a, !0), Mi(a) ? (gj(a), "QUEUE_SHUFFLED") : "QUEUE_LOOP") : "QUEUE_ACTIVE"
    };
    gj = function(a) {
        var b = a.g.length;
        if (!(3 > a.g.length))
            for (Li(a, !0); 0 < b;) {
                var c = Math.floor(Math.random() * b);
                --b;
                var d = a.g[c];
                a.g[c] = a.g[b];
                a.g[b] = d
            }
    };
    ij = function(a) {
        3 > a.g.length || (Li(a, !1), a.g.sort(function(b, c) {
            return b.orderId - c.orderId
        }))
    };
    Qi = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (void 0 !== b.startIndex && ("number" !== typeof b.startIndex || 0 > b.startIndex)) return _.G(Ri, "Invalid startIndex " + b.startIndex), !1;
        var d = (b.startIndex || 0) + 1;
        if (!b.items || b.items.length < d) return _.G(Ri, "Invalid number of items"), !1;
        if (b.repeatMode && !cast.receiver.media.jj(b.repeatMode)) return _.G(Ri, "Invalid repeatMode"), !1;
        for (d = 0; d < b.items.length; d++)
            if (b.items[d].media)
                if (c || void 0 === b.items[d].itemId) b.items[d].itemId = "number" === typeof b.items[d].itemId ? b.items[d].itemId :
                    a.D();
                else return _.G(Ri, "ItemId should not be defined, element at index: " + d), !1;
        else return _.G(Ri, "Media is mandatory, missing in element at index: " + d), !1;
        return !0
    };
    cj = function(a, b) {
        a.h = b;
        if (a.l && 0 <= b && b < a.g.length) a.l.onCurrentItemIdChanged(a.g[b].itemId)
    };
    jj = function(a) {
        return a.l && a.g && 0 < a.g.length && a.h == a.g.length - 1 ? Xi(a, 1) : Promise.reject("No need to prefetch more for now.")
    };
    lj = function(a) {
        return a === kj ? 2 : "__touch_controls__" === a ? 3 : a === cast.receiver.Dc.pe ? 4 : "__physical_remote__" === a ? 5 : "*:*" === a ? 6 : 1
    };
    mj = function(a) {
        var b = this;
        this.l = a;
        this.g = null;
        this.h = "sdr";
        this.o = function() {
            b.l()
        }
    };
    nj = function(a) {
        return a.g ? a.g.videoWidth : 0
    };
    oj = function(a) {
        return a.g ? a.g.videoHeight : 0
    };
    pj = function(a) {
        return !!a && "function" === typeof a.then
    };
    qj = function() {
        this.g = [];
        this.h = []
    };
    rj = function(a) {
        0 == a.g.length && (a.g = a.h, a.g.reverse(), a.h = []);
        return a.g.pop()
    };
    sj = function(a) {
        return 0 == a.g.length && 0 == a.h.length
    };
    tj = function(a, b, c) {
        var d = this;
        this.wa = _.zg.F();
        Dh.F();
        this.U = c || "local";
        cast.receiver.Za.xq(this.U);
        this.w = Ag(this.wa, cast.receiver.media.gb, "JSON");
        this.G = 0;
        this.Z = this.C = null;
        this.A = 1;
        this.pa = b || 12303;
        this.Nj = this.kj = this.K = this.I = this.g = this.l = null;
        this.H = !1;
        this.Gb = void 0;
        this.D = this.o = null;
        this.na = !0;
        this.Y = null;
        this.sa = this.cn.bind(this);
        this.h = new Ji(this.Ui.bind(this));
        this.W = !1;
        this.M = null;
        this.iq = 1;
        this.la = -1;
        this.wc = new qj;
        this.O = !1;
        this.N = [];
        this.lg = this.on;
        this.Na = null;
        this.Yd = this.An;
        this.Id = this.En;
        this.wf = this.Dn;
        this.Jd = this.Kn;
        this.ee = null;
        this.de = this.Ln;
        this.Hd = this.Cn;
        this.Fe = this.On;
        this.Cf = this.Mn;
        this.uf = this.rn;
        this.tf = this.qn;
        this.zf = this.Hn;
        this.yf = this.Gn;
        this.be = this.Li;
        this.Af = this.In;
        this.Bf = this.Jn;
        this.Ca = null;
        this.qh = this.Bn;
        this.Eg = this.zn;
        this.Kd = this.tn;
        this.ka = this.Fn;
        this.lj = _.w;
        this.gj = this.un;
        this.da = this.Zd = _.w;
        this.ae = this.rh = null;
        this.nj = this.vn;
        this.qj = this.wn;
        this.Ej = this.xn;
        this.Gj = this.Nn;
        this.Xd = null;
        this.vf = this.yn;
        this.ce = this.fe = null;
        this.ca =
            new mj(this.ba.bind(this, !1));
        this.wa.Y = function(e) {
            var f = d.ca;
            f.h = e;
            f.l()
        };
        this.za = new _.Yd;
        this.ab = this.Vh = this.R = !1;
        this.Bb(a);
        this.w.l = this.ph.bind(this);
        this.Y = _.jf(this.sa, 1E3)
    };
    uj = function(a) {
        if (a.g) return a.g.customData || void 0
    };
    vj = function(a) {
        return a.g ? a.g.activeTrackIds || null : null
    };
    wj = function(a) {
        return Yi(a.h) ? a.h : null
    };
    xj = function(a) {
        for (var b = 0; b < a.length; b++)
            if (void 0 === a[b].trackId || void 0 === a[b].type) return !1;
        return !0
    };
    yj = function(a, b) {
        if (!b || 0 == b.length) return !0;
        if (!a || b.length > a.length) return _.G(N, "Too many track IDs"), !1;
        for (var c = 0, d = 0, e = 0; e < b.length; e++) {
            for (var f = !1, g = 0; g < a.length; g++)
                if (b[e] == a[g].trackId) {
                    f = !0;
                    break
                }
            if (!f) return _.G(N, "Track ID does not exist: " + b[e]), !1;
            "AUDIO" == a[g].type ? d++ : "VIDEO" == a[g].type && c++;
            if (1 < d || 1 < c) return _.G(N, "Maximum one active video and one active audio track supported"), !1
        }
        return !0
    };
    zj = function(a, b, c) {
        c.mediaSessionId = a.G;
        cast.receiver.Za.Xg(c.type, b);
        a.ph(new ug("message", b, c))
    };
    Aj = function(a, b, c, d) {
        b && (_.G(N, "Sending error: " + b.type + " " + b.reason), a.Zd && c == a.U ? (b.requestId = d, a.Zd(b)) : a.Ja(c, d, b.type, b.reason))
    };
    Bj = function(a) {
        if (!a.g) return "IDLE";
        var b = a.l.getState();
        return "PLAYING" == b && !a.Vh && a.H ? "BUFFERING" : b
    };
    Dj = function(a, b, c, d) {
        function e(k) {
            k ? f.status = [k] : f = null;
            return f
        }
        var f = {
                type: "MEDIA_STATUS"
            },
            g = a.o && a.o.message.media || null;
        if (!a.g && !a.I && !g) return f.status = [], f;
        a = Cj(a, b, c, void 0 === d ? !1 : d);
        return pj(a) ? a.then(e) : e(a)
    };
    Cj = function(a, b, c, d) {
        var e = !1;
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var f = a.o && a.o.message.media || null;
        if (!a.g && !a.I && !f) return Promise.resolve(null);
        var g = {
            mediaSessionId: a.G,
            playbackRate: a.A,
            playerState: Bj(a),
            currentTime: a.l.getCurrentTimeSec(),
            supportedMediaCommands: a.pa,
            volume: a.l.getVolume()
        };
        a.M && (g.preloadedItemId = a.M);
        var k = nj(a.ca),
            l = oj(a.ca);
        0 < k && 0 < l && (g.videoInfo = new Cc(k, l, a.ca.h));
        if (a.g) g.activeTrackIds = a.g.activeTrackIds, b && (g.media = a.ub() || void 0, k = a.h.w) && (g.queueData = _.rb(k), g.queueData.items =
            void 0), g.currentItemId = a.g.itemId;
        else if (a.I && (b && (g.media = a.I.media || void 0), g.currentItemId = a.I.itemId, a.I = null), Yi(a.h) && (k = a.h.ec())) g.loadingItemId = k.itemId;
        "IDLE" === g.playerState ? (a.D && (g.idleReason = a.D), f && (g.extendedStatus = new Dc(f, a.o.mediaSessionId))) : a.D = null;
        null != c && (g.customData = c);
        Yi(a.h) && (d && (g.items = a.h.yc(b, a.R && !e)), g.repeatMode = a.h.o);
        if (!a.lg) return g;
        b = a.lg(g);
        if (pj(b)) return b.then(function(m) {
            a.ab = !!g.breakStatus && void 0 !== g.breakStatus.currentBreakClipTime;
            return m
        });
        a.ab = !!g.breakStatus && void 0 !== g.breakStatus.currentBreakClipTime;
        return b
    };
    Ej = function(a) {
        null != a.Z && (_.kf(a.Z), a.Z = null)
    };
    Fj = function(a) {
        var b = a.l.getCurrentTimeSec();
        a.K = b;
        a.kj = b;
        a.Nj = (0, _.M)();
        null != a.Y && _.kf(a.Y);
        a.Y = _.jf(a.sa, 1E3)
    };
    Gj = function(a, b) {
        a.Ja("*:*", void 0, "ERROR", b && b.reason, b && b.customData, b && b.detailedErrorCode, a.g ? a.g.itemId : void 0)
    };
    Hj = function(a, b) {
        if (a.Na) {
            b = sb(b);
            b.type = "CLOUD_STATUS";
            try {
                b = a.Na(b)
            } catch (c) {
                _.G(N, "Cloud status handler failed. " + c);
                return
            }
            pj(b) ? b.then(function(c) {
                a.w.send("__cloud__", c)
            }) : a.w.send("__cloud__", b)
        }
    };
    Ij = function(a) {
        a.o = null;
        if (a.O)
            for (a.O = !1; !sj(a.wc) && !a.O;) a.ph(rj(a.wc))
    };
    Mj = function(a, b, c, d, e, f) {
        f = void 0 === f ? null : f;
        _.I(N, "Dispatching MediaManager load event");
        _.I(N, "Load message received:" + JSON.stringify(c));
        var g = !1,
            k = e;
        c.media || c.queueData ? c.media && c.media.tracks && !xj(c.media.tracks) ? (_.G(N, "Invalid tracks information"), g = !0) : c.activeTrackIds && c.media && !yj(c.media.tracks, c.activeTrackIds) && (g = !0) : (_.G(N, "Media or QueueData is mandatory"), g = !0);
        e = c.playbackRate;
        if (void 0 !== e && ("number" !== typeof e || .5 > e || 2 < e)) return _.G(N, "Bad value for playback rate " + e), {
            type: "INVALID_REQUEST",
            reason: "INVALID_PARAMS"
        };
        if (g) return k && k(), {
            type: "INVALID_REQUEST",
            reason: "INVALID_PARAMS"
        };
        a.o ? Jj(a, "LOAD_CANCELLED", f && f.customData, f && f.reason, f && f.detailedErrorCode) : a.g && (Kj(a, "INTERRUPTED", !1), k = a.ba.bind(a, !1));
        a.o = {
            senderId: b,
            message: c,
            mediaSessionId: d ? a.G + 1 : a.G
        };
        k && k();
        a.O = !0;
        if (d && (a.G++, a.D = null, a.W = void 0 !== c.queueData, d = Pi(a.h, c), pj(d))) return d.then(function() {
            a.W = !0;
            var l = a.h.ec();
            !l || !l.media || c.media && l.media.contentId == c.media.contentId || (c.media && _.I(N, "Implementation of queueing has provided " +
                l.media.contentId + " as the first item whilethe original media portion of the LOAD provided " + c.media.contentId), c.media = l.media, c.autoplay = c.autoplay || l.autoplay, c.currentTime = c.currentTime || l.startTime || a.h.C);
            Lj(a, b, c, k)
        }, function() {
            Jj(a, "LOAD_FAILED")
        }), null;
        Lj(a, b, c, k);
        return null
    };
    Lj = function(a, b, c, d) {
        a.g = sb(a.h.ec());
        a.N = [];
        c.media = a.g.media || c.media;
        a.g.activeTrackIds = c.activeTrackIds;
        Ej(a);
        a.C = c;
        if (a.na && a.l.preload) {
            var e = a.h.C;
            a.l.preload(void 0 !== c.autoplay ? c.autoplay : !0, 0 < c.currentTime ? c.currentTime : 0 < e ? e : 0, a.g.playbackDuration, a.g.startTime)
        }
        e = new Nj("load", c, b);
        a.Yd && (a.A = c.playbackRate ? c.playbackRate : 1, a.Yd(e));
        Oj(a, e);
        d || a.ba(!0);
        a.M = null;
        jj(a.h).then(function(f) {
            Pj(a, f, b, c)
        }, function(f) {
            _.I(N, f)
        })
    };
    Qj = function(a, b) {
        a.o && (b.tracks = b.tracks || void 0, b.tracks && !xj(b.tracks) ? _.G(N, "Invalid tracks information") : b.activeTrackIds && !yj(b.tracks, b.activeTrackIds) ? _.G(N, "Invalid active tracks") : (a.g && a.g.media && (a.g.activeTrackIds = b.activeTrackIds, a.g.media.tracks = b.tracks, a.g.media.textTrackStyle = b.textTrackStyle), a.l.load("", !1, void 0, b, !0)))
    };
    Rj = function(a, b, c) {
        c = void 0 === c ? !0 : c;
        a.g && a.g.media && (a.g.activeTrackIds = b.activeTrackIds, c && (a.g.media.tracks = b.tracks, a.g.media.textTrackStyle = b.textTrackStyle), a.o || a.ba(c))
    };
    Jj = function(a, b, c, d, e) {
        var f = a.g ? a.g.itemId : void 0;
        a.g && Kj(a, "ERROR", !1);
        a.o ? (b = b || "LOAD_FAILED", a.o.senderId == a.U ? a.Zd && a.Zd({
            type: b
        }) : "" != a.o.senderId && a.Ja(a.o.senderId, a.o.message.requestId, b, d, c, e, f), Ij(a)) : _.G(N, "Not sending LOAD error as there is no on going LOAD request")
    };
    Sj = function(a) {
        if (a.o) {
            var b = a.o.message.requestId;
            a.ba(!0, b, void 0, 0 != b || a.R);
            Ij(a)
        } else _.G(N, "Not sending status as there is no on going LOAD request")
    };
    Tj = function(a, b) {
        var c = !0;
        c = void 0 === c ? !0 : c;
        b = void 0 === b ? null : b;
        var d = a.h.Md();
        Yi(a.h) && -1 != d && d < a.h.g.length - 1 ? (Gj(a, b), a.Kd("ERROR", b)) : (a.o ? Jj(a, "LOAD_FAILED", b && b.customData, b && b.reason, b && b.detailedErrorCode) : Gj(a, b), Kj(a, "ERROR", c))
    };
    Uj = function(a, b, c, d, e, f, g, k, l) {
        c = a.ap.bind(a, b, c, d, e, f, g, k, void 0 === l ? null : l);
        ej(a.h) ? Xi(a.h, b).then(c, c) : c()
    };
    Vj = function(a, b) {
        a.A = b
    };
    Kj = function(a, b, c, d) {
        c = void 0 === c || c;
        if (d && !c) throw Error("customData and requestId should only be provided in broadcast mode");
        a.g ? (a.h.clear(), a.l.reset(b), b && (a.D = b), a.I = a.g, a.g = null, a.N = []) : _.I(N, "Nothing to reset, Media is already null");
        c && a.ba(!1, d, void 0, void 0);
        a.C && (Ej(a), a.Z = _.jf(function() {
            a.C = null;
            a.Z = null
        }, 9E5));
        b && "INTERRUPTED" == b && a.lj()
    };
    Wj = function(a, b) {
        var c = a.g && a.g.media && a.g.media.tracks;
        if (!c || 0 == c.length) return _.G(N, "No tracks available"), null;
        c = c.filter(function(f) {
            return "TEXT" == f.type
        }).map(function(f) {
            return f.trackId
        });
        if (0 == c.length) return _.G(N, "No text tracks available"), null;
        var d = a.g.activeTrackIds || [],
            e = c.filter(function(f) {
                return 0 <= d.indexOf(f)
            });
        if (!b.enableTextTracks) {
            if (0 < e.length) return a.N = e, d.filter(function(f) {
                return 0 > e.indexOf(f)
            })
        } else if (0 == e.length) return b = d.concat(0 < a.N.length ? a.N : [c[0]]), a.N = [],
            b;
        return d
    };
    Xj = function(a) {
        if (2 > a.length) return !0;
        for (var b = 0; b < a.length; b++)
            for (var c = b + 1; c < a.length; c++)
                if (a[b] == a[c]) return _.G(N, "Duplicate itemId: " + a[b] + "at positions:" + b + " " + c), !1;
        return !0
    };
    Yj = function(a) {
        for (var b = 0; b < a.length; b++) {
            if ("number" !== typeof a[b].itemId) return _.G(N, "Invalid itemId at position: " + b), !1;
            for (var c = b + 1; c < a.length; c++) {
                if ("number" !== typeof a[c].itemId) return _.G(N, "Invalid itemId at position: " + c), !1;
                if (a[b].itemId == a[c].itemId) return _.G(N, "Duplicate itemId: " + a[b].itemId + "at positions:" + b + " " + c), !1
            }
        }
        return !0
    };
    Zj = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = new Hi(a[c].itemId);
            d.media = a[c].media;
            d.autoplay = a[c].autoplay;
            d.startTime = a[c].startTime;
            d.playbackDuration = a[c].playbackDuration;
            d.preloadTime = a[c].preloadTime;
            d.activeTrackIds = a[c].activeTrackIds;
            d.customData = a[c].customData;
            b.push(d)
        }
        return b
    };
    bk = function(a, b, c, d) {
        if (!b) return null;
        var e = new ak;
        e.requestId = c || 0;
        e.mediaSessionId = a.G;
        e.type = "LOAD";
        e.autoplay = b.autoplay;
        e.currentTime = void 0 !== d ? d : b.startTime;
        e.activeTrackIds = b.activeTrackIds;
        e.customData = b.customData || void 0;
        e.media = b.media;
        a.C && (e.credentials = a.C.credentials, e.credentialsType = a.C.credentialsType);
        return e
    };
    dk = function(a, b) {
        if (a.g.media.duration - a.l.getCurrentTimeSec() <= b || 0 == b && a.l.af && a.l.af()) return !0;
        if (null == a.M) return !1;
        a.M = null;
        if (!a.Xd) return !1;
        b = new ck("CANCEL_PRELOAD");
        b.requestId = 0;
        b.mediaSessionId = a.G;
        b = new Nj("cancelpreload", b, "");
        _.I(N, "Sending cancel preload event: " + JSON.stringify(b));
        a.Xd(b) && a.ba(!1);
        return !1
    };
    ek = function(a, b, c) {
        _.I(N, "Dispatching MediaManager queueUpdate event");
        var d = !1;
        Yi(a.h) ? c.items && !Yj(c.items) ? d = !0 : c.repeatMode && !cast.receiver.media.jj(c.repeatMode) && (_.G(N, "Invalid repeatMode"), d = !0) : (_.G(N, "Queue does not exist"), d = !0);
        if (d) return {
            type: "INVALID_REQUEST",
            reason: "INVALID_PARAMS"
        };
        if (c.items && 0 < c.items.length) {
            d = a.h;
            for (var e = c.items, f = [], g = 0; g < e.length; g++)
                for (var k = 0; k < d.g.length; k++)
                    if (e[g].itemId == d.g[k].itemId) {
                        f.push(e[g]);
                        break
                    }
            c.items = Zj(f)
        }
        b = new Nj("queueupdate", c, b);
        a.be &&
            a.be(b);
        Oj(a, b);
        return null
    };
    Pj = function(a, b, c, d) {
        "NO_CHANGE" == b.changeType && void 0 !== c ? a.w.send(c, b) : (a.w.send("*:*", b), a.R && a.ba(!0, d.requestId, d.customData, !0))
    };
    fk = function(a, b, c, d) {
        var e = new Ec;
        e.changeType = b;
        e.itemIds = c;
        null != d && (e.insertBefore = d);
        a.w.send("*:*", e)
    };
    Oj = function(a, b) {
        b.target = a;
        return a.za.dispatchEvent(b)
    };
    Nj = function(a, b, c) {
        _.E.call(this, a);
        this.data = b;
        this.senderId = c
    };
    ck = function(a) {
        this.type = a;
        this.requestId = 0;
        this.customData = this.mediaSessionId = void 0
    };
    ak = function() {
        ck.call(this, "LOAD");
        this.media = new yc;
        this.autoplay = !1;
        this.loadOptions = this.credentialsType = this.credentials = this.queueData = this.activeTrackIds = this.playbackRate = this.currentTime = void 0
    };
    gk = function(a) {
        ak.call(this);
        this.type = "PRELOAD";
        this.itemId = a
    };
    hk = function() {
        ck.call(this, "EDIT_TRACKS_INFO");
        this.enableTextTracks = this.isSuggestedLanguage = this.textTrackStyle = this.language = this.activeTrackIds = void 0
    };
    ik = function() {
        ck.call(this, "SEEK");
        this.relativeTime = this.currentTime = this.resumeState = void 0
    };
    jk = function() {
        ck.call(this, "QUEUE_UPDATE");
        this.shuffle = this.repeatMode = this.items = this.jump = this.currentTime = this.currentItemId = void 0
    };
    kk = function(a) {
        ck.call(this, "SESSION_STATE");
        this.sessionState = a
    };
    lk = function(a) {
        this.g = a
    };
    mk = function(a) {
        a.g.g(new ck("PLAY"))
    };
    nk = function(a) {
        a.g.g(new ck("PAUSE"))
    };
    ok = function(a, b) {
        var c = new ik;
        c.relativeTime = b;
        a.g.g(c)
    };
    pk = function(a) {
        var b = new jk;
        b.jump = 1;
        a.g.g(b)
    };
    qk = function(a) {
        var b = new jk;
        b.jump = -1;
        a.g.g(b)
    };
    rk = function(a, b, c) {
        var d = new fi;
        d.userAction = b;
        c && (d.clear = !0);
        a.g.H(d)
    };
    tk = function(a) {
        var b = this;
        this.h = this.l = null;
        this.I = this.D = _.w;
        this.w = a;
        this.G = _.zg.F();
        yh(this.G).then(function() {
            sk(b, b.G)
        })
    };
    sk = function(a, b) {
        a.l = b.g[cast.receiver.media.gb] || null;
        a.l ? (sg(a.l, function(c, d, e) {
            if (e && "MEDIA_STATUS" === e.type) {
                if (d = e.status[0]) a.o !== d.mediaSessionId && a.I(), a.o = d.mediaSessionId;
                a.D(d)
            }
            return c === a.w
        }), a.h = b.g[cast.receiver.Db.Zb] || null, a.h && sg(a.h, function(c) {
            return c === a.w
        })) : _.H(uk, "media namespace is not available.")
    };
    xk = function(a) {
        cast.receiver.J.Yb.call(this, function() {
            a: {
                switch (b.h) {
                    case "REPEAT_OFF":
                        var c = "REPEAT_ALL";
                        break a;
                    case "REPEAT_ALL":
                    case "REPEAT_ALL_AND_SHUFFLE":
                        c = b.l ? "REPEAT_SINGLE" : "REPEAT_OFF";
                        break a
                }
                c = "REPEAT_OFF"
            }
            b.o(c);vk(b, c)
        }, "", "btn-repeat");
        var b = this;
        this.o = a;
        this.l = !0;
        this.h = "REPEAT_OFF";
        wk(this, this.h)
    };
    vk = function(a, b) {
        a.h = b;
        "REPEAT_ALL_AND_SHUFFLE" === a.h ? wk(a, "REPEAT_ALL") : wk(a, a.h)
    };
    wk = function(a, b) {
        a.g.dataset.state = yk[b].state;
        a.g.title = yk[b].$f
    };
    zk = function(a, b, c) {
        cast.receiver.J.Yb.call(this, function() {
            d.l(!d.h)
        }, b, c);
        var d = this;
        this.h = !1;
        this.l = a;
        this.g.setAttribute("aria-pressed", String(this.h))
    };
    Ak = function(a, b) {
        b !== a.h && (a.h = b, a.g.setAttribute("aria-pressed", String(b)))
    };
    Bk = function(a, b, c) {
        _.C.call(this);
        this.o = null != c ? (0, _.Qa)(a, c) : a;
        this.l = b;
        this.h = (0, _.Qa)(this.bq, this);
        this.g = []
    };
    Ck = function(a) {
        a.ed = _.jf(a.h, a.l);
        a.o.apply(null, a.g)
    };
    Hk = function() {
        var a = Yc.call(this) || this;
        (0, cast.receiver.J.vm)(a);
        a.za = Bf.F();
        a.pa = 0;
        a.Z = _.w;
        a.Y = _.w;
        a.C = a.querySelector("#live-label");
        a.C.innerText = cast.receiver.V.Xf;
        a.l = a.querySelector("#scrubber-layer");
        a.g = a.querySelector("#scrubber");
        a.K = a.l.querySelector("#progress-fill");
        a.w = 0;
        a.M = a.l.querySelector("#progress-seekable-range");
        a.da = a.l.querySelector("#progress-seekable-played");
        a.I = a.l.querySelector("#progress-breaks");
        a.D = a.l.querySelector("#progress-loading");
        a.ka = a.querySelector("#current-time");
        a.H = a.querySelector("#total-time");
        a.Ca = parseFloat(a.g.min);
        a.sa = parseFloat(a.g.max);
        a.O = 0;
        a.A = 0;
        a.h = !1;
        a.la = !1;
        a.W = !1;
        a.ca = _.w;
        a.R = !1;
        a.N = void 0;
        a.G = void 0;
        a.U = null;
        a.o = $d.F();
        Df(a, !0);
        a.wa = new Bk(function(b) {
            var c = parseFloat(b) + a.O;
            a.ka.textContent = a.U ? cast.receiver.J.aa.qg(a.U + c) : cast.receiver.J.aa.Ra(c);
            Dk(a, parseFloat(b), a.A)
        }, 100);
        a.g.addEventListener("input", function() {
            Ek(a, a.g.value)
        });
        a.g.addEventListener("change", function() {
            Fk(a)
        });
        a.g.addEventListener("click", function() {
            a.h && Fk(a)
        });
        a.g.addEventListener("touchend",
            function() {
                a.h = !1
            });
        a.g.addEventListener("touchcancel", function() {
            a.h = !1
        });
        uf() && (a.addEventListener("focus", function() {
            a.za.focus(a.g)
        }), a.g.addEventListener("keydown", function(b) {
            b.preventDefault();
            "ArrowLeft" === b.key && (a.h || a.Y(), a.g.value = String(parseInt(a.g.value, 10) - 10), Ek(a, a.g.value), be(a.o, !0), b.stopPropagation());
            "ArrowRight" === b.key && (a.h || a.Y(), a.g.value = String(parseInt(a.g.value, 10) + 10), Ek(a, a.g.value), be(a.o, !0), b.stopPropagation());
            "Enter" === b.key && (a.h ? (a.ca(parseFloat(a.g.value) +
                a.O), a.Z(), a.h = !1, be(a.o, !1), a.o.dispatchEvent(new _.E("EXPIRED"))) : ce(a.o), b.stopPropagation())
        }), a.g.addEventListener("blur", function() {
            a.g.value = a.pa;
            var b = a.g.value;
            "number" === typeof a.w && Gk(a, b);
            a.wa.aj(b);
            a.h && (a.h = !1, a.Z(), be(a.o, !1), ce(a.o))
        }));
        return a
    };
    Ek = function(a, b) {
        a.h = !0;
        "number" === typeof a.w && Gk(a, b);
        a.wa.aj(b)
    };
    Fk = function(a) {
        a.ca(parseFloat(a.g.value) + a.O);
        a.h = !1
    };
    Gk = function(a, b) {
        var c = a.sa - a.w;
        b -= a.w;
        c = c ? b / c : 0;
        b = (.5 - c) / 200;
        0 < c && (c += b);
        a.K.style.transform = "scaleX(" + c + ")";
        a.K.style.left = a.w / a.A * 100 + "%";
        a.N ? b = a.N : (a.N = parseInt(window.getComputedStyle(a.l, null).width, 10), b = a.N || void 0);
        if (a.G) var d = a.G;
        else a.G = parseInt(getComputedStyle(a.D).getPropertyValue("--loading-bar-width"), 10), d = a.G || void 0;
        a.D.style.transform = b && d ? "scaleX(" + b / d * (1 - c) + ")" : "scaleX(0)"
    };
    Ik = function(a) {
        return a.R && !a.W && "none" != a.style.display
    };
    Jk = function(a, b) {
        a.g.max = b;
        a.sa = parseFloat(a.g.max)
    };
    Kk = function(a, b) {
        for (; a.I.firstChild;) a.I.removeChild(a.I.firstChild);
        b && b.forEach(function(c) {
            var d = document.createElement("div");
            d.classList.add("break-mark");
            100 < c + 1 ? d.style.right = "0" : d.style.left = c + "%";
            d.style.width = "1%";
            a.I.appendChild(d)
        })
    };
    Lk = function(a, b) {
        b = (void 0 === b ? !1 : b) || !a.la || a.W;
        a.g.disabled = b;
        Df(a, !b)
    };
    Dk = function(a, b, c) {
        c = void 0 === c ? -1 : c;
        b = !cast.receiver.J.aa.ld(c) || 0 >= c ? cast.receiver.J.aa.Ra(b) : cast.receiver.V.dc(cast.receiver.V.tl, {
            CURRENT_TIME: cast.receiver.J.aa.Ra(b),
            DURATION: cast.receiver.J.aa.Ra(c)
        });
        a.g.setAttribute("aria-valuetext", b)
    };
    Rk = function(a) {
        var b = this;
        this.h = a;
        this.g = Bf.F();
        this.A = a.querySelector("goog-timeline");
        this.l = this.h.querySelector("goog-buttons-bar");
        this.o = this.h.querySelector("#break-skip-btn");
        this.K = a.querySelector("#alert-show-controls");
        this.K.textContent = cast.receiver.V.ji;
        this.I = a.querySelector("#alert-hide-controls");
        this.I.textContent = cast.receiver.V.ii;
        this.H = this.C = this.G = this.D = !1;
        this.w = $d.F();
        this.w.o = 4500;
        this.w.listen("EXPIRED", function() {
            Mk(b)
        });
        Df(this.h, !0);
        this.g.focus(this.h);
        this.g.w = function() {
            b.C ||
                b.G ? Nk(b) : Ok(b)
        };
        this.h.addEventListener("keydown", function(c) {
            var d = c.key;
            Pk.includes(d) && (c.preventDefault(), c.stopPropagation(), ce(b.w), b.C || b.G ? ("ArrowDown" === d && b.g.g.includes(b.A) && Ef(b.l) && b.g.focus(b.l), "ArrowUp" === d && (!b.g.g.includes(b.A) && Ef(b.A) ? b.g.focus(b.A) : (b.g.focus(b.h), Mk(b))), "ArrowRight" === d && b.g.g.includes(b.l) && Ef(b.o) && b.g.focus(b.o), "ArrowLeft" === d && b.g.g.includes(b.o) && b.g.focus(b.l)) : Qk(b))
        })
    };
    Nk = function(a) {
        Ef(a.A) ? a.g.focus(a.A) : Ef(a.o) ? a.g.focus(a.o) : Ef(a.l) ? a.g.focus(a.l) : a.g.focus(a.h)
    };
    Ok = function(a) {
        Ef(a.o) ? a.g.focus(a.o) : a.g.focus(a.h);
        a.l.g = null
    };
    Qk = function(a) {
        a.C = !0;
        Sk(a);
        a.Wc()
    };
    Mk = function(a) {
        a.C = !1;
        Sk(a);
        a.l.g = null;
        a.Wc()
    };
    Sk = function(a) {
        var b = a.C;
        L(a.K, b);
        L(a.I, !b);
        a.h.classList.toggle("active", b)
    };
    Uk = function(a) {
        return function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
            c = a.apply(null, _.oa(c));
            Tk.set(c, !0);
            return c
        }
    };
    Vk = function(a) {
        return "function" === typeof a && Tk.has(a)
    };
    Wk = function(a, b, c) {
        for (c = void 0 === c ? null : c; b !== c;) {
            var d = b.nextSibling;
            a.removeChild(b);
            b = d
        }
    };
    Xk = function(a) {
        return a && a.Nb ? a.vb() : a
    };
    Yk = function(a, b) {
        return b
    };
    Zk = function(a, b) {
        throw Error(void 0 === b ? "unexpected value " + a + "!" : b);
    };
    bl = function(a, b, c) {
        if (Object.hasOwnProperty.call($k, a) && (a = $k[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
            for (var d = null, e = !1, f = 0, g = a.length; f < g; ++f) {
                var k = a[f],
                    l = k.Ga;
                if (!l) return k.T;
                null === d && (d = {});
                l = Object.hasOwnProperty.call(d, l) ? d[l] : d[l] = c(l);
                if (l === k.Ia) return k.T;
                null == l && (e = !0)
            }
            if (e) return null
        }
        b = al[b];
        return "number" === typeof b ? b : null
    };
    el = function(a) {
        var b = cl;
        if (!b) {
            b = dl();
            var c = {};
            for (d in b) c[b[d]] = d;
            b = cl = c
        }
        var d = b[a];
        return "string" === typeof d ? d : vc(a)
    };
    fl = function(a) {
        a = String(a).toLowerCase();
        var b = dl()[a];
        return "string" === typeof b ? b : uc(a)
    };
    gl = function(a) {
        a = a.toLowerCase();
        a = dl()[a];
        return "string" === typeof a ? a : null
    };
    dl = function() {
        if (!hl) {
            hl = _.rb(il);
            for (var a = 0, b = jl.length; a < b; ++a) {
                var c = jl[a];
                hl[c.toLowerCase()] = c
            }
        }
        return hl
    };
    ml = function(a, b) {
        var c = window.customElements;
        return c && c.get(a) || !0 === kl[a] ? 2 : "HTMLUnknownElement" === b.name ? 1 : "HTMLElement" === b.name && ll.test(a) ? 3 : 0
    };
    ol = function(a) {
        return (a = a.split(nl, 2)) ? {
            url: a[0],
            metadata: a[1]
        } : null
    };
    ql = function(a) {
        var b = String(a.url).replace(pl, encodeURIComponent);
        if (a = a.metadata) {
            pl.lastIndex = 0;
            if (pl.test(a)) return null;
            b += " " + a
        }
        return b
    };
    rl = function(a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
        d = [b].concat(_.oa(d));
        a ? console.warn.apply(console, _.oa(d)) : console.log.apply(console, _.oa(d))
    };
    sl = function(a, b, c) {
        return c
    };
    xl = function(a, b, c) {
        return [, {
            jb: void 0,
            kb: function(d, e, f) {
                return f
            },
            yb: void 0,
            zb: void 0
        }, {
            jb: void 0,
            kb: void 0,
            yb: void 0,
            zb: "HTML"
        }, {
            jb: void 0,
            kb: void 0,
            yb: "about:invalid#zClosurez",
            zb: "URL"
        }, {
            jb: void 0,
            kb: void 0,
            yb: "about:invalid#zClosurez",
            zb: "RESOURCE_URL"
        }, {
            jb: void 0,
            kb: void 0,
            yb: "zClosurez",
            zb: "STYLE"
        }, , {
            jb: void 0,
            kb: void 0,
            yb: " /*zClosurez*/ ",
            zb: "JAVASCRIPT"
        }, {
            jb: void 0,
            kb: function(d, e, f) {
                f = String(f).toLowerCase();
                a: {
                    var g = null;
                    (d = tl[d]) && (g = d[e]);
                    if ("number" !== typeof g && ((d = tl["*"]) && (g = d[e]),
                            "number" !== typeof g)) {
                        e = !1;
                        break a
                    }
                    e = !0 === ul[g][String(f).toLowerCase()]
                }
                return e ? f : "zClosurez"
            },
            yb: "zClosurez",
            zb: void 0
        }, {
            jb: void 0,
            kb: void 0,
            yb: "zClosurez",
            zb: "CONSTANT"
        }, {
            jb: void 0,
            kb: function(d, e, f) {
                return a.test(f) ? f : "zClosurez"
            },
            yb: "zClosurez",
            zb: "CONSTANT"
        }, {
            jb: function(d, e, f) {
                if ("string" === typeof f) var g = (g = f.match(vl)) ? g.map(ol).filter(Boolean) : [];
                else if (Array.isArray(f)) g = f;
                else return "about:invalid#zClosurez";
                var k = g;
                g = [];
                var l = [],
                    m = {};
                if (Array.isArray(k))
                    for (var n = 0, u = k.length; n < u; ++n) {
                        var r =
                            k[n],
                            x = r && r.url;
                        if (x) {
                            var y = b(x, "URL", m);
                            if (y) {
                                var D = y !== m;
                                (D ? g : l).push({
                                    url: D ? y : x,
                                    metadata: r.metadata
                                })
                            }
                        }
                    } else l.push(k);
                k = l.length ? JSON.stringify(l) : null;
                l = wl;
                if (g.length) {
                    if (!Array.isArray(g)) throw Error();
                    l = g.map(ql).filter(Boolean).join(" , ") || wl
                }
                k && c && c(!0, 'Failed to sanitize attribute value of <%s>: <%s %s="%O">: %s', d, d, e, f, k);
                return l === wl ? "about:invalid#zClosurez" : l
            },
            kb: void 0,
            yb: void 0,
            zb: void 0
        }]
    };
    Dl = function(a, b) {
        this.g = [];
        this.h = b;
        var c = [],
            d = [];
        b = document.createTreeWalker(b.content, 133, null, !1);
        var e = 0,
            f = -1,
            g = 0,
            k = a.Wa;
        for (a = a.values.length; g < a;) {
            var l = b.nextNode();
            if (null === l) b.currentNode = d.pop();
            else if (f++, 1 === l.nodeType) {
                if (l.hasAttributes()) {
                    for (var m = l.attributes, n = m.length, u = 0, r = 0; r < n; r++) yl(m[r].name) && u++;
                    for (; 0 < u--;) m = zl.exec(k[g])[2], n = m.toLowerCase() + "$lit$", r = l.getAttribute(n), l.removeAttribute(n), n = r.split(Al), this.g.push({
                            type: "attribute",
                            index: f,
                            name: m,
                            Wa: n,
                            he: void 0
                        }), g +=
                        n.length - 1
                }
                "TEMPLATE" === l.tagName && (d.push(l), b.currentNode = l.content)
            } else if (3 === l.nodeType) {
                if (m = l.data, 0 <= m.indexOf(Bl)) {
                    u = l.parentNode;
                    m = m.split(Al);
                    n = m.length - 1;
                    for (r = 0; r < n; r++) {
                        var x = m[r];
                        if ("" === x) x = Cl();
                        else {
                            var y = zl.exec(x);
                            null !== y && yl(y[2]) && (x = x.slice(0, y.index) + y[1] + y[2].slice(0, -5) + y[3]);
                            x = document.createTextNode(x)
                        }
                        u.insertBefore(x, l);
                        this.g.push({
                            type: "node",
                            index: ++f
                        })
                    }
                    "" === m[n] ? (u.insertBefore(Cl(), l), c.push(l)) : l.data = m[n];
                    g += n
                }
            } else if (8 === l.nodeType)
                if (l.data === Bl) {
                    u = l.parentNode;
                    if (null === l.previousSibling || f === e) f++, u.insertBefore(Cl(), l);
                    e = f;
                    this.g.push({
                        type: "node",
                        index: f
                    });
                    null === l.nextSibling ? l.data = "" : (c.push(l), f--);
                    g++
                } else
                    for (u = -1; - 1 !== (u = l.data.indexOf(Bl, u + 1));) this.g.push({
                        type: "node",
                        index: -1
                    }), g++
        }
        c = _.p(c);
        for (d = c.next(); !d.done; d = c.next()) d = d.value, d.parentNode.removeChild(d)
    };
    yl = function(a) {
        var b = a.length - 5;
        return 0 <= b && "$lit$" === a.slice(b)
    };
    Cl = function() {
        return document.createComment("")
    };
    El = function(a, b) {
        this.h = [];
        this.g = a;
        this.options = b
    };
    Gl = function(a) {
        var b = window;
        if ((b = b.trustedTypes || b.TrustedTypes) && void 0 === Fl) try {
            Fl = b.createPolicy("lit-html", {
                createHTML: function(c) {
                    return c
                }
            })
        } catch (c) {
            console.error("Multiple copies of lit-html found in the page. Note that if Trusted Types is enforced, the app will break, as subsequent copies of lit-html will write raw strings to the DOM."), Fl = null
        }
        return Fl ? Fl.createHTML(a) : a
    };
    Hl = function(a, b) {
        this.Wa = a;
        this.values = b;
        this.type = "html"
    };
    Il = function(a) {
        return null === a || !("object" === typeof a || "function" === typeof a)
    };
    Jl = function(a) {
        fa();
        na();
        return Array.isArray(a) || !(!a || !a[Symbol.iterator])
    };
    Kl = function(a) {
        return a
    };
    Ll = function() {
        return Kl
    };
    Nl = function(a, b, c) {
        return Ml(a, b, c)
    };
    Ol = function(a, b, c, d, e) {
        this.h = !0;
        this.o = a;
        this.name = b;
        this.Wa = c;
        this.g = [];
        var f = d && d.he;
        void 0 === f && (f = Ml(a, b, void 0 === e ? "attribute" : e), void 0 !== d && (d.he = f));
        this.he = f;
        for (a = 0; a < c.length - 1; a++) this.g[a] = this.w()
    };
    Pl = function(a) {
        this.value = void 0;
        this.g = a
    };
    Ql = function(a, b) {
        this.l = this.o = this.value = void 0;
        this.options = a;
        this.w = b
    };
    Rl = function(a, b, c) {
        this.g = this.value = void 0;
        if (2 !== c.length || "" !== c[0] || "" !== c[1]) throw Error("Boolean attributes can only contain a single expression");
        this.h = a;
        this.name = b;
        this.Wa = c
    };
    Sl = function(a, b, c, d) {
        Ol.call(this, a, b, c, d, "property");
        this.C = 2 === c.length && "" === c[0] && "" === c[1]
    };
    Tl = function() {
        Pl.apply(this, arguments)
    };
    Ul = function(a, b, c) {
        var d = this;
        this.g = this.value = void 0;
        this.h = a;
        this.w = b;
        this.A = c;
        this.l = function(e) {
            return d.handleEvent(e)
        }
    };
    Vl = function(a, b, c, d, e) {
        var f = b[0];
        return "." === f ? (new Sl(a, b.slice(1), c, e)).g : "@" === f ? [new Ul(a, b.slice(1), d.g)] : "?" === f ? [new Rl(a, b.slice(1), c)] : (new Ol(a, b, c, e)).g
    };
    Zl = function(a) {
        var b = Wl.get(a.type);
        void 0 === b && (b = {
            ek: new WeakMap,
            mj: new Map
        }, Wl.set(a.type, b));
        var c = b.ek.get(a.Wa);
        if (void 0 !== c) return c;
        var d = a.Wa.join(Bl);
        c = b.mj.get(d);
        if (void 0 === c) {
            c = document.createElement("template");
            for (var e = a.Wa.length - 1, f = "", g = !1, k = 0; k < e; k++) {
                var l = a.Wa[k],
                    m = l.lastIndexOf("\x3c!--");
                g = (-1 < m || g) && -1 === l.indexOf("--\x3e", m + 1);
                m = zl.exec(l);
                f = null === m ? f + (l + (g ? Xl : Yl)) : f + (l.substr(0, m.index) + m[1] + m[2] + "$lit$" + m[3] + Bl)
            }
            f += a.Wa[e];
            c.innerHTML = Gl(f);
            c = new Dl(a, c);
            b.mj.set(d,
                c)
        }
        b.ek.set(a.Wa, c);
        return c
    };
    am = function(a, b) {
        var c = $l.get(b);
        if (void 0 === c) {
            Wk(b, b.firstChild);
            $l.set(b, c = new Ql(Object.assign({
                Uh: Zl
            }, void 0), void 0));
            var d = c;
            d.h = b.appendChild(Cl());
            d.g = b.appendChild(Cl())
        }
        c.wb(a);
        c.Ic()
    };
    bm = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        return new Hl(a, c)
    };
    cm = function() {
        var a = this;
        this.g = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    em = function() {
        var a = Yc.call(this) || this;
        a.w = !1;
        a.G = new cm;
        dm(a);
        return a
    };
    dm = function(a) {
        a.w || (a.w = !0, setTimeout(function() {
            a.w = !1;
            a.D();
            a.G.resolve()
        }, 0))
    };
    fm = function(a, b) {
        b = new CustomEvent(b, {
            bubbles: !0,
            composed: !0,
            detail: null
        });
        a.dispatchEvent(b)
    };
    gm = function() {
        var a = em.call(this) || this;
        a.h = "";
        a.g = !1;
        a.l = !0;
        a.attachShadow({
            mode: "open"
        });
        return a
    };
    jm = function(a) {
        return a.g ? bm(hm, cast.receiver.V.mi, !a.l, function() {
            fm(a, "PAUSE")
        }) : bm(im, cast.receiver.V.oi, function() {
            fm(a, "PLAY")
        })
    };
    mm = function(a) {
        return a.h ? bm(km, lm({
            content: cast.receiver.J.aa.lb(a.h)
        }), function() {
            return fm(a, "ALBUM_ART_CLICK")
        }) : null
    };
    nm = function() {
        var a = em.call(this) || this;
        a.attachShadow({
            mode: "open"
        });
        a.H = "0";
        a.I = "hidden";
        a.K = "visible";
        a.C = "scroll";
        a.g = null;
        a.h = null;
        a.o = !0;
        a.A = null;
        a.l = new gm;
        return a
    };
    om = function(a, b) {
        a.o !== b && (a.o = b, dm(a))
    };
    pm = function(a, b) {
        var c, d;
        Ba(new za(new va(function(e) {
            if (1 == e.g) return ua(e, a.G.g);
            c = a.shadowRoot.querySelector(".media-browse-logo");
            d = window.getComputedStyle(c, null);
            "none" === d.backgroundImage && cast.receiver.J.aa.mg(b).then(function() {
                a.h !== b && (a.h = b, dm(a))
            }).catch(function() {
                "" !== a.h && (a.h = "", dm(a))
            });
            e.g = 0
        })))
    };
    um = function(a, b) {
        if (!b) return bm(qm, lm({
            overflowX: a.C
        }));
        var c = b.targetAspectRatio ? b.targetAspectRatio.replace(/_/g, "-").toLowerCase() : "",
            d = [],
            e = {};
        b = _.p(b.items);
        for (var f = b.next(); !f.done; e = {
                qc: e.qc
            }, f = b.next()) e.qc = f.value, e.qc && (f = bm(rm, c, function(g) {
            return function() {
                var k = g.qc;
                hd("Cast.Controls.MediaBrowseItemSelected");
                a.A && a.A(k)
            }
        }(e), sm(e.qc), e.qc.title || "", e.qc.subtitle || ""), d.push(f));
        return bm(tm, d)
    };
    sm = function(a) {
        var b = {
            "browse-item-img": !0
        };
        a.imageType && (b[a.imageType.replace(/_/g, "-").toLowerCase()] = !0);
        var c = {};
        a.image && a.image.url && (c["background-image"] = cast.receiver.J.aa.lb(a.image.url), b["has-image"] = !0);
        b = vm(b);
        c = lm(c);
        if (cast.receiver.J.aa.ld(a.duration)) {
            var d = cast.receiver.J.aa.Ra(a.duration);
            d = bm(wm, d)
        } else d = null;
        return bm(xm, b, c, d, "LIVE" !== a.mediaBadge ? null : bm(ym, cast.receiver.V.Xf))
    };
    zm = function(a, b, c, d, e, f, g, k) {
        this.g = a;
        this.w = b;
        this.l = c;
        this.A = d;
        this.o = e;
        this.C = f;
        this.h = g;
        this.G = k
    };
    Am = function(a, b) {
        if (0 == b) return a.g;
        if (1 == b) return a.h;
        var c = te(a.g, a.l, b),
            d = te(a.l, a.o, b);
        a = te(a.o, a.h, b);
        c = te(c, d, b);
        d = te(d, a, b);
        return te(c, d, b)
    };
    Bm = function(a, b) {
        var c = (b - a.g) / (a.h - a.g);
        if (0 >= c) return 0;
        if (1 <= c) return 1;
        for (var d = 0, e = 1, f = 0, g = 0; 8 > g; g++) {
            f = Am(a, c);
            var k = (Am(a, c + 1E-6) - f) / 1E-6;
            if (1E-6 > Math.abs(f - b)) return c;
            if (1E-6 > Math.abs(k)) break;
            else f < b ? d = c : e = c, c -= (f - b) / k
        }
        for (g = 0; 1E-6 < Math.abs(f - b) && 8 > g; g++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = Am(a, c);
        return c
    };
    Cm = function(a, b, c) {
        _.C.call(this);
        this.g = null;
        this.o = !1;
        this.A = a;
        this.w = c;
        this.h = b || window;
        this.l = (0, _.Qa)(this.Go, this)
    };
    Dm = function(a) {
        a = a.h;
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
    };
    Em = function(a) {
        a = a.h;
        return a.cancelAnimationFrame || a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
    };
    Fm = function(a, b, c) {
        _.C.call(this);
        this.g = a;
        this.o = b || 0;
        this.h = c;
        this.l = (0, _.Qa)(this.Ho, this)
    };
    Im = function(a) {
        a = _.Na(a);
        delete Gm[a];
        _.qb(Gm) && Hm && Hm.stop()
    };
    Lm = function() {
        Hm || (Jm ? Hm = new Cm(function(b) {
            Km(b)
        }, Jm) : Hm = new Fm(function() {
            Km((0, _.M)())
        }, 20));
        var a = Hm;
        a.Pb() || a.start()
    };
    Km = function(a) {
        _.kb(Gm, function(b) {
            Mm(b, a)
        });
        _.qb(Gm) || Lm()
    };
    Nm = function() {
        _.Yd.call(this);
        this.g = 0;
        this.endTime = this.startTime = null
    };
    Om = function(a, b, c, d) {
        Nm.call(this);
        if (!_.Ia(a) || !_.Ia(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.h = a;
        this.o = b;
        this.duration = c;
        this.l = d;
        this.coords = [];
        this.progress = 0
    };
    Mm = function(a, b) {
        b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.progress && (a.progress = 1);
        Pm(a, a.progress);
        1 == a.progress ? (a.g = 0, Im(a), a.ib("finish"), a.ib("end")) : 1 == a.g && a.ib("animate")
    };
    Pm = function(a, b) {
        _.z(a.l) && (b = a.l(b));
        a.coords = Array(a.h.length);
        for (var c = 0; c < a.h.length; c++) a.coords[c] = (a.o[c] - a.h[c]) * b + a.h[c]
    };
    Qm = function(a, b) {
        _.E.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.g
    };
    Rm = function(a) {
        return 1 - Math.pow(1 - a, 3)
    };
    Sm = function() {
        _.Yd.call(this);
        this.h = this.g = this.I = null;
        this.l = 0;
        this.o = "IDLE";
        this.w = null;
        var a = window,
            b = Hm && Hm.Pb();
        _.ld(Hm);
        Hm = null;
        Jm = a;
        b && Lm();
        this.D = !1
    };
    Tm = function(a) {
        "number" === typeof a.g && (a.l = a.g)
    };
    Um = function(a) {
        return a.D && "number" === typeof a.g && "number" === typeof a.h
    };
    Wm = function(a, b) {
        a.dispatchEvent(new Vm(b))
    };
    $m = function(a, b) {
        b = void 0 === b ? !0 : b;
        if (Um(a) && (Xa(a.g), Xa(a.h), "IDLE" === a.o && !a.w)) {
            if (b) {
                if (a.l === a.h) return;
                b = a.g;
                var c = a.h
            } else {
                if (a.l === a.g) return;
                b = a.h;
                c = a.g
            }
            Xm(a, b, c, 700, Ym, function(d) {
                Wm(a, d)
            }, function(d) {
                Wm(a, d);
                a.dispatchEvent(new Zm(d));
                a.l = d
            })
        }
    };
    an = function(a) {
        Um(a) && (Xa(a.g), Xa(a.h), a.w && (a.o = "ANIMATION_ELIGIBLE", a.w.listenOnce("pause", function(b) {
            a.l = b.coords[0]
        }), a.w.pause()))
    };
    cn = function(a, b, c) {
        Um(a) && (Xa(a.g), Xa(a.h), "ANIMATION_NOT_ELIGIBLE" !== a.o && ("IDLE" === a.o && (a.o = Math.abs(c) > Math.abs(b) ? "ANIMATION_ELIGIBLE" : "ANIMATION_NOT_ELIGIBLE"), "ANIMATION_ELIGIBLE" === a.o && (a.w && (a.w.ga(), a.w = null), a.l -= c, a.I && cancelAnimationFrame(a.I), a.I = requestAnimationFrame(function() {
            Xa(a.g);
            Xa(a.h);
            Wm(a, bn(a.l, a.g, a.h));
            a.I = null
        }))))
    };
    en = function(a, b) {
        if (Um(a))
            if (Xa(a.g), Xa(a.h), "ANIMATION_ELIGIBLE" !== a.o) a.o = "IDLE";
            else {
                a.o = "IDLE";
                var c = bn(a.l, a.g, a.h),
                    d = 0 > b ? a.h : a.g;
                Xm(a, c, d, dn(b, c, d), Rm, function(e) {
                    Wm(a, e)
                }, function(e) {
                    Wm(a, e);
                    a.dispatchEvent(new Zm(d));
                    a.l = d
                })
            }
    };
    fn = function(a) {
        if (Um(a))
            if (Xa(a.g), Xa(a.h), "ANIMATION_ELIGIBLE" !== a.o) a.o = "IDLE";
            else {
                a.o = "IDLE";
                var b = bn(a.l, a.g, a.h),
                    c = b > a.h / 2 ? a.h : a.g;
                Xm(a, b, c, 300, Rm, function(d) {
                    Wm(a, d)
                }, function(d) {
                    Wm(a, d);
                    a.dispatchEvent(new Zm(c));
                    a.l = c
                })
            }
    };
    Xm = function(a, b, c, d, e, f, g) {
        b = new Om([b], [c], d, e);
        b.listen("animate", function(k) {
            f(k.coords[0])
        });
        b.listen("finish", function(k) {
            g(k.coords[0]);
            a.w && (a.w.ga(), a.w = null)
        });
        b.play();
        a.w = b
    };
    Vm = function(a) {
        _.E.call(this, "POSITION_CHANGED");
        this.position = a
    };
    Zm = function(a) {
        _.E.call(this, "ANIMATION_FINISHED");
        this.position = a
    };
    bn = function(a, b, c) {
        a < b ? a = b : a > c && (a = c);
        return a
    };
    gn = function() {
        var a = new zm(0, 0, .6, 0, 0, 1, 1, 1);
        return function(b) {
            b = Bm(a, b);
            if (0 == b) b = a.w;
            else if (1 == b) b = a.G;
            else {
                var c = te(a.w, a.A, b),
                    d = te(a.A, a.C, b),
                    e = te(a.C, a.G, b);
                c = te(c, d, b);
                d = te(d, e, b);
                b = te(c, d, b)
            }
            return b
        }
    };
    dn = function(a, b, c) {
        a = Math.abs(c - b) / Math.abs(a) * 1E3;
        500 < a && (a = 500);
        return a
    };
    ln = function(a, b) {
        var c = this;
        this.g = a;
        this.G = b;
        this.h = new Sm;
        this.w = this.o = this.C = this.l = null;
        this.A = 0;
        this.h.listen("POSITION_CHANGED", function(d) {
            hn(c, d.position)
        });
        this.h.listen("ANIMATION_FINISHED", function(d) {
            hn(c, d.position);
            d.position >= c.w ? (hd("Cast.Controls.MediaBrowsePlayingActive"), jn(c)) : clearTimeout(c.A)
        });
        this.g.addEventListener("touchstart", function() {
            clearTimeout(c.A)
        });
        this.g.addEventListener("touchend", function() {
            "PLAYING" === c.l && jn(c)
        });
        kn(this)
    };
    mn = function(a, b) {
        $m(a.h, void 0 === b ? !0 : b)
    };
    on = function(a) {
        a.g.g ? "LOADING" === a.C ? nn(a) : a.C && "IDLE" !== a.C ? "PLAYING" !== a.l && (a.l = "PLAYING", a.h.D = !0, Tm(a.h), L(a.g, !0), hn(a, a.o), om(a.g, !1)) : (clearTimeout(a.A), "LANDING" !== a.l && (a.l = "LANDING", a.h.D = !1, Tm(a.h), L(a.g, !0), hn(a, a.w), om(a.g, !0), hd("Cast.Controls.MediaBrowseLandingActive"))) : nn(a)
    };
    nn = function(a) {
        clearTimeout(a.A);
        "DISABLED" !== a.l && (a.l = "DISABLED", kn(a))
    };
    kn = function(a) {
        a.h.D = !1;
        Tm(a.h);
        L(a.g, !1);
        hn(a, a.o);
        om(a.g, !1)
    };
    hn = function(a, b) {
        if ("number" !== typeof b || "number" !== typeof a.o || "number" !== typeof a.w) a.G.style.visibility = "hidden";
        else {
            var c = (b - a.o) / (a.w - a.o),
                d = b <= a.o,
                e = b >= a.w;
            a.G.style.opacity = c.toString();
            a.G.style.visibility = d ? "hidden" : "visible";
            d ? (a.g.style.transform = "", a.g.style.transition = "", a.g.style.top = "") : e ? (a.g.style.transform = "none", a.g.style.transition = "initial", a.g.style.top = "0") : (a.g.style.transform = "translateY(-" + b + "px)", a.g.style.transition = "initial", a.g.style.top = "");
            a = a.g;
            b = 1 <= c;
            a.H = .5 < c ? (2 *
                c - 1).toString() : "0";
            a.I = 0 >= c ? "hidden" : "visible";
            a.K = b ? "hidden" : "visible";
            a.C = b ? "scroll" : "hidden";
            dm(a)
        }
    };
    jn = function(a) {
        clearTimeout(a.A);
        a.A = setTimeout(function() {
            mn(a, !1)
        }, 3E4)
    };
    pn = function(a, b) {
        this.x = a;
        this.y = b
    };
    xn = function(a) {
        _.Yd.call(this);
        var b = this;
        this.h = this.g = null;
        this.M = this.K = 0;
        this.D = !1;
        this.w = this.l = this.I = null;
        a.addEventListener("touchstart", function(c) {
            qn(b, c)
        });
        a.addEventListener("touchmove", function(c) {
            if (b.l) {
                c = rn(c.touches);
                var d = c.x - b.g.x,
                    e = c.y - b.g.y,
                    f = (0, _.M)(),
                    g = f - b.o;
                b.K = d / g * 1E3;
                b.M = e / g * 1E3;
                b.o = f;
                b.D || (f = c.x - b.h.x, g = c.y - b.h.y, 25 < f * f + g * g && (b.D = !0, clearTimeout(b.I)));
                b.D && (1 <= Math.abs(d) || 1 <= Math.abs(e)) && (b.dispatchEvent(new sn(d, e)), b.g = new pn(c.x, c.y))
            }
        });
        a.addEventListener("touchend",
            function(c) {
                b.l && (1 > c.touches.length ? (c = (0, _.M)() - b.o, (20 < Math.abs(b.K) || 20 < Math.abs(b.M)) && 100 >= c ? b.dispatchEvent(new tn(b.K, b.M)) : b.dispatchEvent(new un), vn(b)) : (c = rn(c.touches), b.g = b.h = new pn(c.x, c.y), b.o = (0, _.M)()))
            });
        a.addEventListener("touchcancel", function() {
            b.l && (b.dispatchEvent(new un), vn(b))
        });
        a.addEventListener("click", function(c) {
            clearTimeout(b.I);
            b.dispatchEvent(new wn(c.target))
        })
    };
    qn = function(a, b) {
        if (1 === b.touches.length) {
            clearTimeout(a.I);
            a.l = b;
            a.w = b.target;
            a.dispatchEvent(new yn(a.w));
            var c = a.w;
            a.I = setTimeout(function() {
                a.dispatchEvent(new wn(c))
            }, 300)
        }
        b = rn(b.touches);
        a.g = a.h = new pn(b.x, b.y);
        a.o = (0, _.M)()
    };
    vn = function(a) {
        a.l = null;
        a.w = null;
        a.o = void 0;
        a.K = 0;
        a.M = 0;
        a.g = null;
        a.h = null;
        a.D = !1
    };
    sn = function(a, b) {
        _.E.call(this, "SCROLL");
        this.deltaX = a;
        this.deltaY = b
    };
    tn = function(a, b) {
        _.E.call(this, "FLING");
        this.velocityX = a;
        this.velocityY = b
    };
    un = function() {
        _.E.call(this, "NO_FLING_RELEASE")
    };
    yn = function(a) {
        _.E.call(this, "FIRST_TOUCH");
        this.uh = a
    };
    wn = function(a) {
        _.E.call(this, "CONFIRMED_SINGLE_TAP");
        this.uh = a
    };
    rn = function(a) {
        for (var b = 0, c = 0, d = a.length, e = 0; e < d; e++) b += a[e].clientX, c += a[e].clientY;
        return new pn(b / d, c / d)
    };
    Cn = function(a, b, c) {
        var d = this;
        this.g = a;
        this.D = a.querySelector("#scrubber");
        this.I = a.querySelector("#controls-toggle");
        this.W = a.querySelector("#controls-layer");
        this.Y = b;
        this.w = c;
        this.R = !1;
        this.O = a.querySelector("#alert-show-controls");
        this.N = a.querySelector("#alert-hide-controls");
        this.K = this.G = this.M = this.C = this.U = this.o = !1;
        this.A = cast.receiver.J.Ba.VIDEO;
        this.H = 4500;
        this.h = $d.F();
        this.h.o = this.H;
        this.h.listen("EXPIRED", function() {
            d.C = !1;
            zn(d);
            d.g.classList.remove("scrubbing-ending")
        });
        this.l = new xn(this.g);
        this.O.textContent = cast.receiver.V.ji;
        this.N.textContent = cast.receiver.V.ii;
        this.Y.addEventListener("click", function(e) {
            mn(d.w, !0);
            e.stopPropagation()
        });
        this.l.listen("FIRST_TOUCH", function() {
            an(d.w.h)
        });
        this.l.listen("SCROLL", function(e) {
            cn(d.w.h, e.deltaX, e.deltaY)
        });
        this.l.listen("FLING", function(e) {
            en(d.w.h, e.velocityY)
        });
        this.l.listen("NO_FLING_RELEASE", function() {
            fn(d.w.h)
        });
        this.W.addEventListener("touchstart", function(e) {
            e.target === d.D && e.stopPropagation()
        });
        this.l.listen("CONFIRMED_SINGLE_TAP",
            function(e) {
                e.uh.closest("#controls") && d.g.classList.contains("active") ? ce(d.h) : e.uh.closest("#controls-layer") && An(d)
            });
        this.I.addEventListener("click", function() {
            An(d)
        });
        this.D.addEventListener("input", function() {
            Bn(d, !0)
        });
        this.D.addEventListener("change", function() {
            Bn(d, !1);
            ce(d.h)
        })
    };
    An = function(a) {
        a.A === cast.receiver.J.Ba.VIDEO && a.o && a.K || (a.g.classList.contains("active") ? (Bn(a, !1), a.h.dispatchEvent(new _.E("EXPIRED"))) : (Dn(a), ce(a.h)))
    };
    Dn = function(a) {
        ce(a.h);
        a.C = !0;
        zn(a)
    };
    Bn = function(a, b) {
        be(a.h, b);
        a.U !== b && (a.U = b, clearTimeout(a.Z), a.g.classList.toggle("scrubbing", b), b || (a.g.classList.add("scrubbing-ending"), a.Z = setTimeout(function() {
            a.g.classList.remove("scrubbing-ending")
        }, 4E3)))
    };
    zn = function(a) {
        var b = a.C || a.M && (a.A === cast.receiver.J.Ba.AUDIO || a.G);
        L(a.O, b);
        L(a.N, !b);
        a.I.setAttribute("aria-label", b ? cast.receiver.V.sl : cast.receiver.V.vl);
        a.g.classList.toggle("active", b)
    };
    En = function() {
        var a = Yc.call(this) || this;
        (0, cast.receiver.J.zm)(a);
        a.g = a.querySelector("#logo");
        a.o = a.querySelector("#title");
        a.h = a.querySelector("#break-title");
        a.l = a.querySelector("#subtitle");
        return a
    };
    Fn = function(a, b, c) {
        "none" === window.getComputedStyle(a.g, null).backgroundImage && cast.receiver.J.aa.mg(c).then(function() {
            var d = cast.receiver.J.aa.lb(c);
            a.g.textContent = "";
            a.g.style.backgroundImage = d;
            a.g.classList.add("app-icon")
        }).catch(function() {
            a.g.style.backgroundImage = "";
            a.g.classList.remove("app-icon");
            a.g.textContent = b
        })
    };
    Gn = function() {
        var a = Yc.call(this) || this;
        var b = a.attachShadow({
            mode: "open"
        });
        a.A = document.createElement("div");
        a.A.classList.add("touch-layer");
        a.K = uf();
        a.K ? (0, cast.receiver.J.jl)(a.A) : (0, cast.receiver.J.wm)(a.A);
        b.appendChild(a.A);
        a.w = b.querySelector("goog-media-browse");
        a.U = b.querySelector(".media-browse-scrim");
        a.G = new ln(a.w, a.U);
        a.l = b.querySelector("goog-buttons-bar");
        a.D = b.querySelector("goog-video-metadata");
        a.C = b.querySelector("goog-break-ui");
        a.g = b.querySelector("goog-timeline");
        a.R = Bf.F();
        Cf(a.R, a.shadowRoot);
        a.o = a.K ? new Rk(a.A) : new Cn(a.A, a.w, a.G);
        a.h = null;
        a.H = _.w;
        a.I = _.w;
        a.O = _.w;
        a.M = _.w;
        a.N = _.w;
        a.l.K = function() {
            jd("PAUSE");
            a.H()
        };
        a.l.M = function() {
            jd("PLAY");
            a.I()
        };
        a.g.Z = function() {
            a.I()
        };
        a.g.Y = function() {
            a.H()
        };
        a.l.O = function() {
            jd("STOP");
            a.O()
        };
        a.l.N = function() {
            jd("SHOW_DEVICE_CONTROLLER");
            a.N()
        };
        a.w.addEventListener("PLAY", function() {
            jd("MINI_PLAYER_PLAY");
            a.I()
        });
        a.w.addEventListener("PAUSE", function() {
            jd("MINI_PLAYER_PAUSE");
            a.H()
        });
        a.w.addEventListener("ALBUM_ART_CLICK", function() {
            jd("MINI_PLAYER_ALBUM_ART");
            mn(a.G, !1)
        });
        a.g.ca = function(c) {
            B("Cast.Controls.ScrubberPositionChanged", parseInt(c, 10));
            a.M(c)
        };
        return a
    };
    Hn = function(a) {
        var b = getComputedStyle(a.w),
            c = parseInt(b.getPropertyValue("--media-browse-top-padding"), 10);
        b = parseInt(b.getPropertyValue("--media-browse-visible-part-height"), 10);
        a = a.G;
        c = _.t.innerHeight - c;
        a.o = b;
        a.w = c;
        var d = a.h;
        d.g = b;
        d.h = c;
        a.l = null;
        on(a)
    };
    In = function(a) {
        a.h = document.createElement("goog-audio-player-compatibility");
        ve(a.h, a.A.querySelector("audio-player-compatibility-placeholder"));
        a.o.yj()
    };
    Jn = function(a, b) {
        a.w.A = b
    };
    Kn = function(a, b, c) {
        var d = a.g;
        d.pa = b;
        d.h || (d.g.value = b, d.ka.textContent = c ? c : cast.receiver.J.aa.Ra(b), Dk(d, b, d.A), "number" === typeof d.w && Gk(d, d.g.value));
        a = a.C;
        a.H = b;
        a.l && jg(a)
    };
    Ln = function(a, b, c) {
        var d = a.g;
        if (b !== d.A || c && d.H.textContent !== c) d.A = b, 0 > b || Infinity === b ? (Jk(d, 0), d.H.textContent = "", Dk(d, parseFloat(d.g.value))) : ("none" != d.M.style.display && d.R || Jk(d, b), d.H.textContent = c ? c : cast.receiver.J.aa.Ra(b), Dk(d, parseFloat(d.g.value), b)), Lk(d, 0 >= b);
        a = a.C;
        a.I = b;
        a.l && jg(a)
    };
    Mn = function(a, b) {
        "IDLE" === b ? (a.o.jh(!0), a.h && L(a.h, !1)) : (a.o.jh(!1), a.h && L(a.h, !0));
        if ("PLAYING" === b) {
            a.o.Cj();
            var c = a.w.l;
            !0 !== c.g && (c.g = !0, dm(c))
        }
        "PAUSED" === b && (a.o.Bj(), c = a.w.l, !1 !== c.g && (c.g = !1, dm(c)));
        "BUFFERING" === b || "LOADING" === b ? (a.o.Kh(!0), c = a.g, L(c.D, !0), Gk(c, c.g.value)) : (a.o.Kh(!1), c = a.g, L(c.D, !1), Gk(c, c.g.value));
        c = a.l;
        if ("PLAYING" === b) {
            var d = c.l,
                e = cast.receiver.V.mi;
            d.g.dataset.state = "playing";
            d.g.title = e;
            d.h = !0;
            Oh(d)
        }
        "PAUSED" === b && Nh(c.l);
        a = a.G;
        a.C = b;
        on(a)
    };
    Nn = function(a, b) {
        a.C.w = b
    };
    On = function() {
        var a = _.t.navigator.userAgent.match(/CrKey\/(\d+)\.(\d+)\.[\d]{6}/);
        return {
            rj: a && parseFloat(a[1]) || -1,
            sj: a && parseFloat(a[2]) || -1
        }
    };
    Tn = function(a) {
        _.C.call(this);
        var b = this;
        this.M = !0;
        this.l = {};
        this.w = {};
        this.ca = this.U();
        this.o = new lk(this.ca);
        this.g = null;
        this.da = Pn();
        Qn(this);
        var c = new cast.receiver.J.xm;
        document.body.appendChild(c);
        this.g = c;
        a || In(this.g);
        this.g.H = function() {
            nk(b.o)
        };
        this.g.I = function() {
            mk(b.o)
        };
        this.g.O = function() {
            b.o.g.g(new ck("SHUTDOWN"))
        };
        this.g.M = function(d) {
            var e = b.o,
                f = new ik;
            f.currentTime = d;
            e.g.g(f)
        };
        Nn(this.g, function() {
            b.o.g.g(new ck("SKIP_AD"))
        });
        this.g.N = function() {
            var d = b.o,
                e = _.zg.F();
            if (e.isRemoteControl()) e.w.send(cast.receiver.ra.sb, {
                type: "showremotecontroloverlay"
            });
            else {
                e = new gi;
                e.requestId = 0;
                d = d.g;
                if (!d.h) throw Error("Command and control channel is not set");
                d.h.send("system-0", e)
            }
        };
        Jn(this.g, function(d) {
            var e = b.o;
            d = d.entity;
            var f = new ak;
            f.media = new yc;
            f.media.entity = d;
            f.autoplay = !0;
            e.g.g(f)
        });
        Rn(this, cast.receiver.J.Ba.VIDEO);
        Mn(this.g, "IDLE");
        Ln(this.g, 0);
        Kn(this.g, 0);
        a = _.zg.F();
        (c = a.ad()) && c.remote_control_overlay_supported && Th(this.g.l);
        this.g.o.kh(1 === a.la);
        a.addEventListener("showmediacontrols", function(d) {
            b.g.o.kh(1 ===
                d.mediaControlsState)
        });
        cast.receiver.platform.getAccessibilitySettings().then(function(d) {
            b.g.o.Dj(d.isScreenReaderEnabled)
        });
        a.isRemoteControl() || ((c = a.I) && Sn(this, c), a.addEventListener("playbackdevicestatus", function(d) {
            Sn(b, d.playbackDeviceStatus)
        }))
    };
    Wn = function(a, b, c, d) {
        var e = b,
            f = {};
        b = (f["slot-1"] = "slot-secondary-1", f["slot-2"] = "slot-primary-1", f["slot-3"] = "slot-primary-2", f["slot-4"] = "slot-secondary-2", f)[b] || b;
        if (!Object.values(Un).includes(c)) throw Error("Invalid controls button name '" + c + "'");
        if (!Object.values(Vn).includes(b)) throw Error("Invalid controls slot name '" + b + "'");
        d && a.w[b] !== c && B("Cast.Controls.ButtonAssignedTo_" + e, id[c] || 0);
        "no-button" !== c ? a.w[b] !== c && (a.g.ac(b, a.l[c]), a.w[b] = c) : (a.g.ac(b, null), delete a.w[b])
    };
    Qn = function(a) {
        a.l["queue-next"] = new Qh(function() {
            jd("queue-next");
            pk(a.o)
        }, cast.receiver.V.Al, "btn-next");
        a.l["queue-prev"] = new Qh(function() {
            jd("queue-prev");
            if (a.h.media && null === a.h.sectionStartTimeInMedia && a.Z !== cast.receiver.J.Ba.PHOTO && 4 <= a.h.currentTime && Xn(a, a.h.supportedMediaCommands, cast.B.L.Oc(a.h.media))) {
                var b = a.o,
                    c = new ik;
                c.currentTime = 0;
                b.g.g(c)
            } else qk(a.o)
        }, cast.receiver.V.Bl, "btn-back");
        a.l["seek-forward-10"] = new Qh(function() {
                jd("seek-forward-10");
                ok(a.o, 10)
            }, cast.receiver.V.Il,
            "btn-seek-forward-10");
        a.l["seek-forward-15"] = new Qh(function() {
            jd("seek-forward-15");
            ok(a.o, 15)
        }, cast.receiver.V.Jl, "btn-seek-forward-15");
        a.l["seek-forward-30"] = new Qh(function() {
            jd("seek-forward-30");
            ok(a.o, 30)
        }, cast.receiver.V.Kl, "btn-seek-forward-30");
        a.l["seek-backward-10"] = new Qh(function() {
            jd("seek-backward-10");
            ok(a.o, -10)
        }, cast.receiver.V.Fl, "btn-seek-backward-10");
        a.l["seek-backward-15"] = new Qh(function() {
            jd("seek-backward-15");
            ok(a.o, -15)
        }, cast.receiver.V.Gl, "btn-seek-backward-15");
        a.l["seek-backward-30"] =
            new Qh(function() {
                jd("seek-backward-30");
                ok(a.o, -30)
            }, cast.receiver.V.Hl, "btn-seek-backward-30");
        a.l.repeat = a.H = new xk(function(b) {
            jd("repeat");
            var c = a.o,
                d = new jk;
            d.repeatMode = b;
            c.g.g(d)
        });
        a.l.shuffle = a.I = new zk(function(b) {
            jd("shuffle");
            var c = a.o,
                d = new jk;
            d.shuffle = b;
            c.g.g(d);
            Ak(a.I, b)
        }, cast.receiver.V.Ll, "btn-shuffle");
        a.l.captions = a.N = new zk(function(b) {
            jd("captions");
            var c = a.o,
                d = new hk;
            b ? d.enableTextTracks = !0 : d.activeTrackIds = [];
            c.g.g(d)
        }, cast.receiver.V.wl, "btn-captions");
        a.l.like = a.D = new zk(function(b) {
            jd("like");
            rk(a.o, "LIKE", !b);
            Ak(a.D, b)
        }, cast.receiver.V.zl, "btn-like");
        a.l.dislike = a.A = new zk(function(b) {
            jd("dislike");
            rk(a.o, "DISLIKE", !b);
            Ak(a.A, b)
        }, cast.receiver.V.yl, "btn-dislike")
    };
    Zn = function(a, b, c) {
        var d = Xn(a, c, b),
            e = a.g.g;
        d || (e.h = !1);
        e.la = d;
        Lk(e);
        var f = a.g;
        e = !!(c & 1);
        var g = f.l.l;
        g.l = e;
        Oh(g);
        f = f.w.l;
        f.l !== e && (f.l = e, dm(f));
        Kh(a.l["queue-next"], !(c & 64));
        Kh(a.l["queue-prev"], !(c & 128));
        Kh(a.l.shuffle, !(c & 256));
        Kh(a.l["seek-forward-10"], !d);
        Kh(a.l["seek-forward-15"], !d);
        Kh(a.l["seek-forward-30"], !d);
        Kh(a.l["seek-backward-10"], !d);
        Kh(a.l["seek-backward-15"], !d);
        Kh(a.l["seek-backward-30"], !d);
        Kh(a.H, !(c & 1024));
        a.H.l = !(c & 2048);
        Kh(a.I, !(c & 256));
        Kh(a.N, !(c & 4096));
        Kh(a.D, !(c & 16384));
        Kh(a.A, !(c & 32768));
        d = cast.receiver.J.aa.so(b);
        Rn(a, d);
        d === cast.receiver.J.Ba.VIDEO ? a.M && (d = Xn(a, c, b), e = !!(c & 128), c = !!(c & 64), Yn(b) ? Wn(a, "slot-secondary-1", "captions") : e && d ? Wn(a, "slot-secondary-1", "queue-prev") : Wn(a, "slot-secondary-1", "no-button"), d ? Wn(a, "slot-primary-1", "seek-backward-30") : e ? Wn(a, "slot-primary-1", "queue-prev") : Wn(a, "slot-primary-1", "no-button"), d ? Wn(a, "slot-primary-2", "seek-forward-30") : c ? Wn(a, "slot-primary-2", "queue-next") : Wn(a, "slot-primary-2", "no-button"), d && c ? Wn(a, "slot-secondary-2",
            "queue-next") : Wn(a, "slot-secondary-2", "no-button")) : a.M && (c & 128 ? Wn(a, "slot-primary-1", "queue-prev") : Wn(a, "slot-primary-1", "no-button"), c & 64 ? Wn(a, "slot-primary-2", "queue-next") : Wn(a, "slot-primary-2", "no-button"), Wn(a, "slot-secondary-1", "no-button"), Wn(a, "slot-secondary-2", "no-button"))
    };
    ao = function(a, b) {
        var c = a.W,
            d = "",
            e = "",
            f = "";
        f = e = d = "";
        var g = [];
        if (b) switch (b.metadataType) {
            case 3:
                d = b.title;
                e = b.artist || b.albumArtist || b.composer;
                f = b.albumName;
                g = b.images;
                break;
            case 5:
                d = b.chapterTitle || b.title;
                e = b.bookTitle || b.subtitle;
                g = b.images;
                break;
            case 4:
                break;
            case 2:
                d = b.title;
                if (b.season || b.episode) e = cast.receiver.V.sg(b.season, b.episode);
                g = b.images;
                break;
            case 1:
                d = b.title;
                e = b.subtitle;
                g = b.images;
                break;
            case 0:
                d = b.title;
                e = b.subtitle;
                g = b.images;
                break;
            default:
                _.G($n, "Unexpected metadata type: " + b.metadataType)
        }
        d =
            d ? d : cast.receiver.V.dc(cast.receiver.V.ni, {
                APP_NAME: c || ""
            });
        e = e || "";
        f = f || "";
        (b = g && g[0] && g[0].url || "") && "string" !== typeof b && (_.G($n, "Unknown item image url type"), b = "");
        c = a.g;
        c.D.o.innerText = d || "";
        c.h && (c.h.w.textContent = d);
        d = a.g;
        d.D.l.innerText = e || "";
        d.h && (d.h.o.textContent = e);
        e = a.g;
        e.h && (e.h.l.textContent = f);
        a = a.g;
        f = b;
        a.h && (e = a.h, f ? (e.style.setProperty("--album-art-image", cast.receiver.J.aa.lb(f)), e.h.src = f) : (e.style.removeProperty("--album-art-image"), e.h.src = ""));
        a = a.w.l;
        f = f || "";
        a.h !== f && (a.h =
            f, dm(a))
    };
    bo = function(a, b) {
        if (b) {
            var c = !!(b.userActionStates || []).find(function(d) {
                return d && "LIKE" == d.userAction
            });
            Ak(a.D, c);
            b = !!(b.userActionStates || []).find(function(d) {
                return d && "DISLIKE" == d.userAction
            });
            Ak(a.A, b)
        } else Ak(a.D, !1), Ak(a.A, !1)
    };
    co = function(a, b, c) {
        var d = !1;
        if (c && b) {
            c = _.p(c);
            for (var e = c.next(); !e.done; e = c.next()) {
                e = e.value;
                for (var f = _.p(b), g = f.next(); !g.done; g = f.next()) g = g.value, g.trackId == e && "TEXT" == g.type && (d = !0)
            }
        }
        Ak(a.N, d)
    };
    Yn = function(a) {
        return a && a.tracks && a.tracks.some(function(b) {
            return "TEXT" == b.type
        }) || !1
    };
    Sn = function(a, b) {
        var c = [3, 2, 4].includes(b.playbackType),
            d = On();
        a = a.g.l;
        a.h && Mh(a.h, 3 === b.playbackType && 1 === d.rj && 44 > d.sj ? "" : b.deviceName, c)
    };
    Rn = function(a, b) {
        a.Z = b;
        a = a.g;
        a.o.Aj(b);
        a = a.l;
        a.I = b;
        Uh(a)
    };
    Pn = function() {
        var a = window.document.createElement("div");
        (0, cast.receiver.J.al)(a);
        window.document.body.appendChild(a);
        return a
    };
    eo = function() {
        var a = _.zg.F();
        this.K = Ag(a, "urn:x-cast:com.google.cast.debugoverlay", "JSON");
        this.K.l = this.I.bind(this);
        this.h = this.g = this.A = this.w = null;
        this.l = [];
        this.o = [];
        this.C = null
    };
    fo = function(a) {
        a.g || a.h || (a.l.length = 0, a.o.length = 0, a.H(), a.g || (a.h = window.setInterval(a.H.bind(a), 1E3)))
    };
    go = function(a) {
        if (a.g || a.h) a.w && (document.body.removeChild(a.w.parentElement), a.w = null), a.A && (window.clearInterval(a.A), a.A = null), a.g && (Rd(a.g, "seeking", a.D, !1, a), a.g = null), a.h && (window.clearInterval(a.h), a.h = null)
    };
    jo = function(a, b) {
        if (ho(b)) {
            _.I(io, "found active video");
            a.g = b;
            b = document.createElement("div");
            b.style.cssText = "position:fixed;box-sizing:border-box;top:0;left:0;max-width:100vw;max-height:100vh;z-index:2000000;color:yellowgreen;text-shadow:1px 1px 2px #000;padding-left:5vw;padding-top:5vh;margin:0;font-size:24px;pointer-events:none;";
            var c = _.Fa("cast.framework.VERSION"),
                d = cast.receiver.Wf,
                e = "";
            c ? e = "CAF: " + c + " " : d && (e += "V2: " + d + " ");
            c = document.createTextNode("");
            b.appendChild(c);
            c.textContent = e;
            e =
                document.createTextNode("");
            b.appendChild(e);
            b.id = "__CAST_DEBUG_OVERLAY__";
            document.body.appendChild(b);
            a.w = e;
            _.Gd(a.g, "seeking", a.D, !1, a);
            a.h && (window.clearInterval(a.h), a.h = null);
            a.A = window.setInterval(a.G.bind(a), 1E3);
            a.G()
        }
    };
    ho = function(a) {
        return !(!a.src || a.error || a.ended || !(1 <= a.readyState))
    };
    mo = function() {
        _.C.call(this);
        var a = this;
        this.w = new ko("__physical_remote__");
        this.g = new lk(this.w);
        this.o = !1;
        this.l = function(b) {
            lo(a, b)
        };
        this.h = null;
        this.w.D = function(b) {
            b && ("IDLE" === b.playerState && b.extendedStatus && "LOADING" === b.extendedStatus.playerState ? a.h = "LOADING" : a.h = b.playerState)
        };
        document.addEventListener("keydown", this.l)
    };
    lo = function(a, b) {
        if (a.h && "IDLE" !== a.h) {
            switch (b.key) {
                case "MediaPlayPause":
                    no(a);
                    return;
                case "MediaRewind":
                    ok(a.g, -10);
                    return;
                case "MediaFastForward":
                    ok(a.g, 10);
                    return;
                case "MediaTrackNext":
                    pk(a.g);
                    return;
                case "MediaTrackPrevious":
                    qk(a.g);
                    return;
                case "MediaPause":
                    nk(a.g);
                    return;
                case "MediaPlay":
                    mk(a.g);
                    return;
                case "MediaStop":
                    a.g.g.g(new ck("STOP"));
                    return
            }
            if (!a.o) switch (b.key) {
                case "Enter":
                    no(a);
                    return;
                case "ArrowLeft":
                    ok(a.g, -10);
                    return;
                case "ArrowRight":
                    ok(a.g, 10);
                    return
            }
            _.I(oo, "Unhandled keydown event, key: " +
                b.key)
        }
    };
    no = function(a) {
        "PLAYING" === a.h ? nk(a.g) : mk(a.g)
    };
    po = function() {
        _.C.call(this);
        var a = this;
        this.o = 0;
        this.w = (new Date).getTime();
        this.A = 1;
        this.h = !1;
        this.l = _.w;
        this.D = function() {
            a.h && a.l()
        }
    };
    qo = function(a) {
        return a.g ? a.g.currentTime : a.h ? a.o + (Date.now() - a.w) / 1E3 * a.A : a.o || 0
    };
    ro = function(a) {
        a.h = !0;
        clearInterval(a.H);
        a.H = setInterval(function() {
            a.g || a.D()
        }, 200)
    };
    so = function() {
        var a = Yc.call(this) || this;
        a.h = null;
        a.g = null;
        a.w = 0;
        a.o = !1;
        a.createdCallback();
        return a
    };
    to = function(a, b, c, d, e) {
        var f = document.createElement("div");
        f.classList.add("wave");
        f.style.width = b + "px";
        f.style.height = b + "px";
        a.o ? f.style.transform = "translate(" + c + "px, " + d + "px) scale(" + e + ")" : (f.style.transform = "scale(" + e + ")", f.style.left = c + "px", f.style.top = d + "px");
        a.shadowRoot.appendChild(f);
        setTimeout(function() {
            f.remove()
        }, a.C)
    };
    uo = function() {};
    wo = function(a) {
        var b;
        (b = a.g) || (b = {}, vo(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
        return b
    };
    xo = function() {};
    yo = function(a) {
        return (a = vo(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    };
    vo = function(a) {
        if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.h = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.h
    };
    zo = function(a) {
        if (a.mb && "function" == typeof a.mb) return a.mb();
        if ("string" === typeof a) return a.split("");
        if (_.Ja(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return _.lb(a)
    };
    Bo = function(a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
        else if (_.Ja(a) || "string" === typeof a)(0, _.Ao)(a, b, void 0);
        else {
            if (a.Jb && "function" == typeof a.Jb) var c = a.Jb();
            else if (a.mb && "function" == typeof a.mb) c = void 0;
            else if (_.Ja(a) || "string" === typeof a) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++) c.push(e)
            } else c = _.mb(a);
            d = zo(a);
            e = d.length;
            for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        }
    };
    _.Co = function(a) {
        _.Yd.call(this);
        this.headers = new _.vg;
        this.R = a || null;
        this.h = !1;
        this.O = this.g = null;
        this.Z = this.M = "";
        this.o = 0;
        this.D = "";
        this.l = this.W = this.K = this.U = !1;
        this.w = 0;
        this.I = null;
        this.ca = "";
        this.N = this.Y = !1
    };
    Eo = function(a) {
        return _.Do && _.td(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    };
    Fo = function(a) {
        return "content-type" == a.toLowerCase()
    };
    Io = function(a, b) {
        a.h = !1;
        a.g && (a.l = !0, a.g.abort(), a.l = !1);
        a.D = b;
        a.o = 5;
        Go(a);
        Ho(a)
    };
    Go = function(a) {
        a.U || (a.U = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
    Po = function(a) {
        if (a.h && "undefined" != typeof Jo)
            if (a.O[1] && 4 == _.Ko(a) && 2 == _.Lo(a)) _.qe(a.fa, Mo(a, "Local request error detected and ignored"));
            else if (a.K && 4 == _.Ko(a)) _.jf(a.Mj, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == _.Ko(a)) {
            _.qe(a.fa, Mo(a, "Request complete"));
            a.h = !1;
            try {
                var b = _.Lo(a);
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
                        var f = String(a.M).match(_.No)[1] || null;
                        if (!f && _.t.self && _.t.self.location) {
                            var g =
                                _.t.self.location.protocol;
                            f = g.substr(0, g.length - 1)
                        }
                        e = !Oo.test(f ? f.toLowerCase() : "")
                    }
                    d = e
                }
                if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    a.o = 6;
                    try {
                        var k = 2 < _.Ko(a) ? a.g.statusText : ""
                    } catch (l) {
                        _.qe(a.fa, "Can not get status: " + l.message), k = ""
                    }
                    a.D = k + " [" + _.Lo(a) + "]";
                    Go(a)
                }
            } finally {
                Ho(a)
            }
        }
    };
    Ho = function(a, b) {
        if (a.g) {
            Qo(a);
            var c = a.g,
                d = a.O[0] ? _.w : null;
            a.g = null;
            a.O = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                _.G(a.fa, "Problem encountered resetting onreadystatechange: " + e.message)
            }
        }
    };
    Qo = function(a) {
        a.g && a.N && (a.g.ontimeout = null);
        a.I && (_.kf(a.I), a.I = null)
    };
    _.Ko = function(a) {
        return a.g ? a.g.readyState : 0
    };
    _.Lo = function(a) {
        try {
            return 2 < _.Ko(a) ? a.g.status : -1
        } catch (b) {
            return -1
        }
    };
    Mo = function(a, b) {
        return b + " [" + a.Z + " " + a.M + " " + _.Lo(a) + "]"
    };
    Ro = function(a) {
        this.type = a;
        this.reason = void 0;
        this.requestId = 0;
        this.customData = this.detailedErrorCode = void 0
    };
    So = function(a, b) {
        this.start = a;
        this.end = b
    };
    To = function(a) {
        this.type = "CUSTOM_STATE";
        this.state = a
    };
    O = function(a) {
        this.type = a;
        this.requestId = 0;
        this.customData = this.mediaSessionId = void 0
    };
    Vo = function() {
        O.call(this, "LOAD");
        this.media = new Uo;
        this.autoplay = !1;
        this.loadOptions = this.credentialsType = this.credentials = this.queueData = this.activeTrackIds = this.playbackRate = this.currentTime = void 0
    };
    Wo = function(a) {
        Vo.call(this);
        this.type = "PRELOAD";
        this.itemId = a
    };
    Xo = function(a) {
        Vo.call(this);
        this.type = "PRECACHE";
        this.precacheData = a
    };
    Zo = function() {
        O.call(this, "SET_VOLUME");
        this.volume = new Yo
    };
    $o = function() {
        O.call(this, "EDIT_TRACKS_INFO");
        this.enableTextTracks = this.isSuggestedLanguage = this.textTrackStyle = this.language = this.activeTrackIds = void 0
    };
    ap = function() {
        O.call(this, "EDIT_AUDIO_TRACKS");
        this.isSuggestedLanguage = this.language = void 0
    };
    bp = function() {
        O.call(this, "SEEK");
        this.relativeTime = this.currentTime = this.resumeState = void 0
    };
    cp = function() {
        O.call(this, "SET_PLAYBACK_RATE");
        this.relativePlaybackRate = this.playbackRate = void 0
    };
    dp = function() {
        O.call(this, "GET_STATUS");
        this.options = void 0
    };
    ep = function(a) {
        O.call(this, "QUEUE_LOAD");
        this.repeatMode = void 0;
        this.items = a;
        this.currentTime = this.startIndex = void 0
    };
    fp = function(a) {
        O.call(this, "QUEUE_INSERT");
        this.currentTime = this.currentItemId = this.currentItemIndex = this.insertBefore = void 0;
        this.items = a
    };
    gp = function() {
        O.call(this, "QUEUE_UPDATE");
        this.shuffle = this.repeatMode = this.items = this.jump = this.currentTime = this.currentItemId = void 0
    };
    hp = function(a) {
        O.call(this, "QUEUE_REMOVE");
        this.currentTime = this.currentItemId = void 0;
        this.itemIds = a
    };
    ip = function(a) {
        O.call(this, "QUEUE_REORDER");
        this.insertBefore = this.currentTime = this.currentItemId = void 0;
        this.itemIds = a
    };
    jp = function(a, b, c) {
        O.call(this, "QUEUE_GET_ITEM_RANGE");
        this.itemId = a;
        this.nextCount = b;
        this.prevCount = c
    };
    kp = function(a) {
        O.call(this, "QUEUE_GET_ITEMS");
        this.itemIds = a
    };
    lp = function() {
        this.customData = this.loadRequestData = void 0
    };
    mp = function() {
        O.call(this, "STORE_SESSION")
    };
    np = function() {
        O.call(this, "RESUME_SESSION")
    };
    op = function(a) {
        O.call(this, "SESSION_STATE");
        this.sessionState = a
    };
    Uo = function() {
        this.contentId = "";
        this.contentUrl = void 0;
        this.streamType = "NONE";
        this.mediaCategory = void 0;
        this.contentType = "";
        this.userActionStates = this.vmapAdsRequest = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.breakClips = this.breaks = this.customData = this.textTrackStyle = this.tracks = this.startAbsoluteTime = this.duration = this.entity = this.metadata = void 0
    };
    pp = function(a, b) {
        this.start = a;
        this.end = b
    };
    qp = function(a, b, c, d) {
        pp.call(this, a, b);
        this.isMovingWindow = c;
        this.isLiveDone = d
    };
    rp = function(a, b, c, d, e, f, g) {
        this.id = a;
        this.queueType = this.entity = void 0;
        this.name = b;
        this.description = c;
        this.repeatMode = d;
        this.shuffle = !1;
        this.items = e;
        this.startIndex = f;
        this.startTime = g;
        this.containerMetadata = void 0
    };
    sp = function(a) {
        this.containerType = void 0 === a ? 0 : a;
        this.containerDuration = this.containerImages = this.sections = this.title = void 0
    };
    tp = function(a) {
        this.metadataType = a;
        this.queueItemId = this.sectionStartTimeInContainer = this.sectionStartAbsoluteTime = this.sectionStartTimeInMedia = this.sectionDuration = this.posterUrl = void 0
    };
    up = function() {
        tp.call(this, 0);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.contentRating = this.title = void 0
    };
    vp = function() {
        tp.call(this, 1);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.contentRating = this.title = void 0
    };
    wp = function() {
        tp.call(this, 2);
        this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.contentRating = this.title = this.seriesTitle = void 0
    };
    xp = function() {
        tp.call(this, 3);
        this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.contentRating = this.title = this.albumName = void 0
    };
    yp = function() {
        tp.call(this, 4);
        this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.contentRating = this.title = void 0
    };
    zp = function() {
        sp.call(this, 1);
        this.releaseDate = this.publisher = this.narrators = this.authors = void 0
    };
    Ap = function() {
        tp.call(this, 5);
        this.images = this.subtitle = this.bookTitle = this.chapterNumber = this.contentRating = this.title = this.chapterTitle = void 0
    };
    Yo = function() {
        this.muted = this.level = void 0
    };
    Bp = function() {
        this.type = "MEDIA_STATUS";
        this.mediaSessionId = 0;
        this.videoInfo = this.queueData = this.media = void 0;
        this.playbackRate = 1;
        this.playerState = "IDLE";
        this.idleReason = void 0;
        this.supportedMediaCommands = this.currentTime = 0;
        this.volume = new Yo;
        this.disableStreamGrouping = this.liveSeekableRange = this.extendedStatus = this.breakStatus = this.repeatMode = this.items = this.customData = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.activeTrackIds = void 0
    };
    Cp = function() {
        Bp.call(this)
    };
    Dp = function(a, b) {
        this.trackId = a;
        this.trackContentType = this.trackContentId = void 0;
        this.type = b;
        this.roles = this.assocLanguage = this.forced = this.customData = this.isInband = this.subtype = this.language = this.name = void 0
    };
    Ep = function() {
        this.textTrackStyle = this.language = this.activeTrackIds = this.tracks = void 0
    };
    _.Fp = function(a, b, c) {
        this.id = a;
        this.breakClipIds = b;
        this.position = c;
        this.duration = void 0;
        this.isWatched = !1;
        this.expanded = this.isEmbedded = void 0
    };
    _.Gp = function(a) {
        this.id = a;
        this.vastAdsRequest = this.customData = this.hlsSegmentFormat = this.clickThroughUrl = this.posterUrl = this.whenSkippable = this.duration = this.title = this.contentType = this.contentUrl = this.contentId = void 0
    };
    _.Hp = function() {
        this.adsResponse = this.adTagUrl = void 0
    };
    Ip = function(a, b) {
        this.currentBreakTime = a;
        this.currentBreakClipTime = b;
        this.whenSkippable = this.breakClipId = this.breakId = void 0
    };
    Jp = function() {
        O.call(this, "SET_CREDENTIALS")
    };
    Kp = function() {
        O.call(this, "LOAD_BY_ENTITY")
    };
    Lp = function() {
        O.call(this, "CUSTOM_COMMAND")
    };
    Mp = function() {
        O.call(this, "REFRESH_CREDENTIALS")
    };
    Np = function(a, b) {
        O.call(this, "PLAY_STRING");
        this.stringId = a;
        this.arguments = b
    };
    Op = function(a) {
        O.call(this, "EXECUTE_ACTION_SCRIPT");
        this.actionScript = JSON.stringify(a)
    };
    Pp = function() {
        O.call(this, "USER_ACTION")
    };
    Qp = function() {
        O.call(this, "DISPLAY_STATUS")
    };
    Rp = function() {
        O.call(this, "SHOW_REMOTE_CONTROL_OVERLAY")
    };
    Sp = function() {
        O.call(this, "FOCUS_STATE")
    };
    Tp = function(a) {
        this.type = a
    };
    Up = function(a, b, c) {
        this.type = "senderdisconnected";
        this.senderId = a;
        this.userAgent = b;
        this.reason = c
    };
    Vp = function(a, b) {
        this.type = "senderconnected";
        this.senderId = a;
        this.userAgent = b
    };
    Wp = function(a) {
        this.type = "visibilitychanged";
        this.isVisible = a
    };
    Xp = function(a) {
        this.type = "standbychanged";
        this.isStandby = a
    };
    Yp = function(a) {
        this.type = "systemvolumechanged";
        this.data = a
    };
    Zp = function(a) {
        this.type = "ready";
        this.data = a
    };
    $p = function() {
        this.type = "shutdown"
    };
    aq = function() {
        this.type = "feedbackstarted"
    };
    bq = function(a) {
        this.type = "playbackdevicestatus";
        this.playbackDeviceStatus = a
    };
    cq = function(a) {
        this.type = "showmediacontrols";
        this.mediaControlsState = a
    };
    dq = function(a) {
        this.type = "maxvideoresolutionchanged";
        this.height = a
    };
    eq = function() {
        this.type = "groupcapabilities";
        this.capabilities = void 0
    };
    fq = function() {
        this.type = "allowgroupchange";
        this.newGroupCapabilities = void 0
    };
    gq = function() {};
    iq = function(a) {
        if (!(a instanceof gq)) throw _.G(hq, "Proper AudioTracksManager object can be acquried by calling cast.framework.PlayerManager.getAudioTracksManager()"), Error("AudioTracksManager is not created properly.");
        this.g = this.h = null
    };
    jq = function(a) {
        if (!a.g || !a.g.ma()) throw Error("Tracks info is not available.");
    };
    kq = function() {};
    lq = function() {};
    mq = function(a) {
        this.yh = a
    };
    oq = function(a) {
        if (!(a instanceof mq)) throw _.G(nq, "Proper QueueManager object can be acquried by calling cast.framework.PlayerManager.getQueueManager()"), Error("QueueManager is not created properly.");
        this.g = null;
        this.l = !0;
        this.h = a.yh;
        this.o = !1
    };
    qq = function(a, b) {
        var c = a.h.ub(),
            d = wj(a.g);
        if (d && c) {
            if (b && c.metadata) {
                var e = c.metadata;
                if (void 0 === e.sectionStartTimeInMedia || void 0 === e.sectionDuration) return;
                var f = a.h.getCurrentTimeSec();
                if (f >= e.sectionStartTimeInMedia && f <= e.sectionStartTimeInMedia + e.sectionDuration) return
            }
            e = a.h.getCurrentTimeSec();
            d = pq(a, e, Vi(d));
            b && !d ? a.o || (_.G(nq, "Cannot find section metadata for current time " + e), a.o = !0, hd("Cast.CAF.SectionMetadataMissing")) : (a.o = !1, d && c.metadata != d && (c.metadata = d, _.I(nq, "Updating current section metadata"),
                hd("Cast.CAF.SectionMetadataUpdated"), a.h.sd(c, !0)))
        }
    };
    pq = function(a, b, c) {
        return (a = a.ug()) && a.sections ? a.sections.find(function(d) {
            return (void 0 === d.queueItemId || d.queueItemId == c) && void 0 !== d.sectionStartTimeInMedia && void 0 !== d.sectionDuration && b >= d.sectionStartTimeInMedia && b <= d.sectionStartTimeInMedia + d.sectionDuration
        }) || null : null
    };
    rq = function(a) {
        var b = Vi(wj(a.g)),
            c = a.ug(),
            d = a.h.Ac();
        d && c && c.sections && c.sections.forEach(function(e) {
            void 0 !== e.queueItemId && e.queueItemId !== b || void 0 === e.sectionStartAbsoluteTime || void 0 !== e.sectionStartTimeInMedia || (e.sectionStartTimeInMedia = e.sectionStartAbsoluteTime - d)
        })
    };
    sq = function() {};
    uq = function(a) {
        if (!(a instanceof sq)) throw _.G(tq, "Proper TextTracksManager object can be acquried by calling cast.framework.PlayerManager.getTextTracksManager()"), Error("TextTracksManager is not created properly.");
        this.g = this.h = null
    };
    vq = function(a) {
        if (!a.g || !a.g.ma()) throw Error("Tracks info is not available.");
    };
    wq = function() {
        this.h = {};
        this.l = {};
        this.o = {};
        this.g = this.w.bind(this)
    };
    xq = function(a, b, c) {
        a.o[b] = c || _.w
    };
    yq = function(a, b) {
        a = a.h[b];
        return a == _.w ? null : a
    };
    zq = function(a, b) {
        _.kb(b, function(c, d) {
            a.l[d] = c || _.w
        })
    };
    Aq = function(a, b) {
        this.handleEvent = a;
        this.g = b
    };
    Bq = function() {
        _.C.call(this);
        this.g = {};
        this.h = this.l = null
    };
    Dq = function(a, b, c) {
        var d = a.g[b];
        d && d.slice().forEach(function(e) {
            try {
                e.handleEvent.call(e.g, c)
            } catch (f) {
                _.G(Cq, "Handler for " + b + " encountered an error."), a.h && a.h(b, f), window.setTimeout(function() {
                    throw f;
                }, 0)
            }
        })
    };
    Eq = function(a, b) {
        a.h = b
    };
    Fq = function(a, b) {
        this.l = a;
        this.o = b;
        this.h = this.g = null
    };
    Gq = function(a) {
        clearTimeout(a.g);
        a.g = null
    };
    Iq = function(a, b) {
        b == a.h ? _.qe(Hq, "state is already set to idle due to " + b) : (a.h = b, b = cast.B.common.bl[b], Gq(a), a.g = setTimeout(function() {
            _.I(Hq, "timer expired");
            this.o()
        }.bind(a), 6E4 * b))
    };
    Jq = function(a) {
        this.type = a
    };
    Kq = function(a) {
        this.type = "BITRATE_CHANGED";
        this.totalBitrate = a
    };
    Lq = function(a) {
        this.type = "EMSG";
        this.messageData = a.messageData;
        this.schemeIdUri = a.schemeIdUri;
        this.value = a.value;
        this.startTime = a.startTime;
        this.endTime = a.endTime;
        this.timescale = a.timescale;
        this.presentationTimeDelta = a.presentationTimeDelta;
        this.eventDuration = a.eventDuration;
        this.id = a.id;
        this.segmentData = a.segmentData
    };
    Mq = function(a, b, c) {
        this.type = "ERROR";
        this.detailedErrorCode = a;
        this.reason = c;
        this.error = b
    };
    Nq = function(a, b) {
        this.type = "ID3";
        this.segmentData = a;
        this.timestamp = b
    };
    Oq = function(a, b) {
        this.type = a;
        this.currentMediaTime = b
    };
    Pq = function(a, b) {
        b = void 0 === b ? !1 : b;
        Oq.call(this, "PAUSE", a);
        this.ended = b
    };
    Qq = function(a) {
        this.type = "MEDIA_STATUS";
        this.mediaStatus = a
    };
    Rq = function(a) {
        this.type = "CUSTOM_STATE";
        this.state = a
    };
    Sq = function(a, b) {
        this.type = "MEDIA_FINISHED";
        this.currentMediaTime = a;
        this.endedReason = b
    };
    Tq = function(a, b, c) {
        this.type = a;
        this.requestData = b;
        this.senderId = c
    };
    Uq = function(a, b) {
        this.type = a;
        this.media = b
    };
    Vq = function(a) {
        Uq.call(this, "MEDIA_INFORMATION_CHANGED", a)
    };
    Wq = function(a, b, c, d, e, f, g, k) {
        this.type = a;
        this.currentMediaTime = b;
        this.index = c;
        this.total = d;
        this.whenSkippable = "number" === typeof e ? e : void 0;
        this.endedReason = f;
        this.breakClipId = g;
        this.breakId = k
    };
    Xq = function(a) {
        this.type = "BUFFERING";
        this.isBuffering = a
    };
    Yq = function(a, b) {
        this.type = "CLIP_ENDED";
        this.currentMediaTime = a;
        this.endedReason = b
    };
    Zq = function(a, b) {
        this.type = "SEGMENT_DOWNLOADED";
        this.downloadTime = a;
        this.size = b
    };
    $q = function(a) {
        this.type = "CACHE_LOADED";
        this.media = a
    };
    ar = function(a) {
        this.type = "INBAND_TRACK_ADDED";
        this.track = a
    };
    br = function(a, b) {
        this.type = a;
        this.url = b
    };
    cr = function(a, b) {
        this.type = a;
        this.liveSeekableRange = b
    };
    dr = function(a, b) {
        _.C.call(this);
        this.M = b;
        a = this.player = a;
        this.ignoreTtmlPositionInfo = a.h.playbackConfig && a.h.playbackConfig.ignoreTtmlPositionInfo ? a.h.playbackConfig.ignoreTtmlPositionInfo : !1;
        this.tracks = [];
        this.A = [];
        this.h = null;
        this.o = [];
        this.I = -1;
        this.K = 1;
        this.w = new si(b, [], [], null);
        _.kd(this, _.Ra(_.ld, this.w));
        this.l = null
    };
    er = function(a, b) {
        var c = b.type,
            d = b.name,
            e = b.language,
            f = b.trackContentType,
            g = b.subtype,
            k = b.roles;
        return 0 === a.tracks.length ? null : "VIDEO" === c ? a.tracks.find(function(l) {
            return l.type === c
        }) || null : a.tracks.find(function(l) {
            return c !== l.type || d && d !== l.name || e && e !== l.language || f && f !== l.trackContentType || g && g !== l.subtype || k && !k.every(function(m, n) {
                return l.roles[n] === m
            }) ? !1 : !0
        }) || null
    };
    fr = function(a, b) {
        if (0 !== b.length) {
            b.sort(function(d, e) {
                return d.trackId - e.trackId
            });
            if (b[0].trackId <= a.I) throw Error("track id conflicts");
            for (var c = 1; c < b.length; c++)
                if (b[c].trackId == b[c - 1].trackId) throw Error("track id conflicts");
            a.tracks = a.tracks.concat(b);
            a.I = b[b.length - 1].trackId;
            a.K = Math.max(a.K, a.I + 1);
            b.find(function(d) {
                return !a.Rg(d)
            }) && ni(a.w, cast.B.L.kk(b))
        }
    };
    hr = function(a, b) {
        a.Ta() ? _.G(gr, "Cannot change tracks info in disposed state") : b && (b.activeTrackIds && (a.A = b.activeTrackIds), b.textTrackStyle && a.w.pb(cast.B.L.jk(b.textTrackStyle)), b.tracks && fr(a, b.tracks))
    };
    jr = function(a, b) {
        if (a.Ta()) _.G(gr, "Cannot change tracks in disposed state");
        else {
            for (var c = null, d = _.p(a.tracks), e = d.next(); !e.done; e = d.next())
                if (e = e.value, "TEXT" === e.type && e.language && e.language.toLowerCase() === b.toLowerCase()) {
                    c = e.trackId;
                    break
                }
            if (null === c)
                for (d = _.p(a.tracks), e = d.next(); !e.done; e = d.next())
                    if (e = e.value, "TEXT" === e.type && e.language && cast.receiver.md(e.language, b)) {
                        c = e.trackId;
                        break
                    }
            null === c ? _.H(gr, "No matching track.") : ir(a, [c])
        }
    };
    lr = function(a, b) {
        if (a.Ta()) _.G(gr, "Cannot change tracks in disposed state");
        else {
            for (var c = null, d = null != a.h ? a.h : null, e = _.p(a.tracks), f = e.next(); !f.done; f = e.next())
                if (f = f.value, "AUDIO" === f.type && f.language && b && f.language.toLowerCase() === b.toLowerCase() && !f.trackContentId) {
                    c = f.trackId;
                    break
                }
            if (null === c)
                for (e = _.p(a.tracks), f = e.next(); !f.done; f = e.next())
                    if (f = f.value, "AUDIO" === f.type && f.language && b && cast.receiver.md(f.language, b) && !f.trackContentId) {
                        c = f.trackId;
                        break
                    }
            null === c ? _.H(gr, "No matching track.") :
                (kr(a, c, a.o), a.ud(d, c))
        }
    };
    ir = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (a.Ta()) _.G(gr, "Cannot change tracks in disposed state");
        else {
            for (var d = null, e = null, f = [], g = [], k = null, l = _.p(a.tracks), m = l.next(); !m.done; m = l.next()) {
                m = m.value;
                if (b.includes(m.trackId))
                    if ("TEXT" == m.type)
                        if (a.Rg(m)) f.push(m.trackId);
                        else if (null != m.trackContentId && yb(m.trackContentId, ".ttml") || null != m.trackContentType && 0 == wb(m.trackContentType, "application/ttml+xml"))
                    if (null == k) k = m.trackId;
                    else {
                        _.H(gr, "Can not sideload more than one TTML text track.");
                        continue
                    } else null !=
                    m.trackContentId && yb(m.trackContentId, ".vtt") || null != m.trackContentType && 0 == wb(m.trackContentType, "text/vtt") ? g.push(m.trackId) : _.H(gr, "unsupported track type " + m.trackContentType + ", " + m.trackContentId);
                else "AUDIO" != m.type || m.trackContentId || (d = m.trackId);
                null != a.h && (e = a.h)
            }
            ri(a.w, g);
            c && (e = d);
            a.Vj(e, d, f, k, g)
        }
    };
    kr = function(a, b, c) {
        if (null != b || c) null != b && (a.h = b), a.o = c, null != a.h ? a.A = a.o.concat(a.h) : a.A = a.o, a.A.sort()
    };
    mr = function(a, b, c) {
        if (a.l || null != b) {
            if (!a.l) {
                if (!a.M) {
                    _.G(gr, "Media element is not ready yet.");
                    return
                }
                c = new cast.player.api.Host({
                    url: "",
                    mediaElement: a.M,
                    ignoreTtmlPositionInfo: c
                });
                a.l = new cast.player.api.Player(c)
            }
            a.l.enableCaptions(!1, "ttml");
            null != b && (c = a.tracks.find(function(d) {
                return d.trackId == b
            }), a.l.enableCaptions(!0, "ttml", c.trackContentId))
        }
    };
    or = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = b.toLowerCase();
        var d = null;
        "string" !== typeof a ? d = "Url(" + a + ") should be string" : "string" !== typeof b && (d = "mimeType(" + b + ") should be string");
        if (d) throw _.G(nr, d), Error(d);
        this.mimeType = b;
        this.url = a;
        this.playbackConfig = c || new lq;
        this.hlsVideoSegmentFormat = this.hlsSegmentFormat = null;
        this.startTime = void 0;
        this.tracksInfo = this.breakClip = this.media = null
    };
    vr = function(a, b, c, d, e) {
        var f = cast.B.media.util.Re(a.toLowerCase());
        b = (b || "").toLowerCase();
        var g = tr[f];
        !_.pb(_.ur, b) && g && _.pb(_.ur, g) && (b = g);
        b = b || cast.B.media.util.Xe(f);
        a = new or(a, b, c);
        void 0 !== d && (a.hlsSegmentFormat = d);
        void 0 !== e && (a.hlsVideoSegmentFormat = e);
        return a
    };
    xr = function(a, b) {
        b = void 0 === b ? null : b;
        this.mediaElement = null;
        this.h = a;
        this.va = new Bq;
        this.o = 1;
        this.ka = this.ca = null;
        this.ab = !1;
        this.Na = b || wr;
        this.l = null;
        this.la = [];
        this.H = !1;
        this.C = null;
        this.A = We();
        this.M = !1;
        this.sa = null;
        this.R = this.O = void 0;
        this.Gb = this.Qm.bind(this);
        this.D = this.K = null;
        this.wa = 1;
        this.Kd = a.media && a.media.mediaCategory ? a.media.mediaCategory : cast.B.media.util.cj(a.mimeType)
    };
    zr = function(a, b, c, d) {
        6 !== a.o && (a.o = 5, yr(a, new Mq(b, c, d && d.reason)), a.end("ERROR", d))
    };
    Br = function(a) {
        if (6 !== a.o) {
            a.l = a.Na(a, a.mediaElement);
            a.l.ne(a.h);
            var b = a.l;
            b.h = b.vg();
            ir(b, b.A);
            a.Vc(a.getPlaybackRate());
            a.ab ? Ar(a, !0) : a.o = 3;
            a.C && (a.C.resolve(), a.C = null)
        }
    };
    Cr = function(a, b) {
        if (!a.l) return null;
        b.textTrackStyle && a.l.pb(b.textTrackStyle);
        b.language ? jr(a.l, b.language) : b.activeTrackIds && ir(a.l, b.activeTrackIds);
        return a.l.getTracksInfo().activeTrackIds
    };
    Dr = function(a, b) {
        if (!a.l) return null;
        lr(a.l, b.language);
        return a.l.getTracksInfo().activeTrackIds
    };
    yr = function(a, b) {
        a.va.dispatchEvent(b)
    };
    wr = function(a, b) {
        return new dr(a, b)
    };
    Er = function(a, b, c, d) {
        _.Gd(b, c, d);
        a.la.push({
            type: c,
            listener: d
        })
    };
    Fr = function(a, b) {
        for (var c = _.p(a.la), d = c.next(); !d.done; d = c.next()) d = d.value, Rd(b, d.type, d.listener);
        a.la.length = 0
    };
    Ar = function(a, b) {
        b = void 0 === b ? !1 : b;
        Gr(a);
        a.sa = a.getCurrentTimeSec();
        b || void 0 !== a.O || void 0 !== a.R || (a.O = a.isLiveDone(), a.R = a.Uc());
        a.K = setTimeout(a.Gb, 500)
    };
    Gr = function(a) {
        null != a.K && (clearTimeout(a.K), a.K = null)
    };
    P = function() {};
    Hr = function(a) {
        this.type = a
    };
    Ir = function(a, b) {
        this.type = "BITRATE_CHANGED";
        this.newBitrate = a;
        this.previousBitrate = b
    };
    Jr = function(a, b) {
        this.type = "TIME_TO_TARGET_BITRATE";
        this.bitrate = a;
        this.timeToTargetSec = b
    };
    Kr = function(a, b, c) {
        xr.call(this, b, void 0 === c ? null : c);
        var d = this;
        this.g = a;
        this.w = null;
        this.G = "IDLE";
        this.g.setEventsListener(function(e) {
            switch (e.type) {
                case "CLIP_ENDED":
                    d.end("END_OF_STREAM");
                    break;
                case "ERROR":
                    zr(d, e.detailedErrorCode || 100, e.error || void 0);
                    break;
                case "STATE_CHANGED":
                    e = d.g.getPlayerState();
                    if (e != d.G) {
                        switch (e) {
                            case "PAUSED":
                                var f = new Pq(d.getCurrentTimeSec(), !1);
                                yr(d, f);
                                break;
                            case "PLAYING":
                                4 > d.o && (d.o = 4, yr(d, new Jq("CLIP_STARTED")));
                                f = new Oq("PLAY", d.getCurrentTimeSec());
                                yr(d, f);
                                break;
                            case "BUFFERING":
                                d.pc(!0)
                        }
                        d.G = e
                    }
                    break;
                case "TIME_UPDATE":
                    yr(d, new Oq("TIME_UPDATE", d.getCurrentTimeSec()));
                    break;
                case "DURATION_CHANGED":
                    yr(d, new Oq("DURATION_CHANGE", d.getCurrentTimeSec()));
                    break;
                case "BITRATE_CHANGED":
                    yr(d, e);
                    break;
                case "RATE_CHANGED":
                    yr(d, new Oq("RATE_CHANGE", d.getCurrentTimeSec()));
                    d.Vc(d.getPlaybackRate());
                    break;
                case "TEXT_TRACKS_CHANGED":
                case "AUDIO_TRACKS_CHANGED":
                    d.l && (e = d.l, f = d.g.getTracksInfo()) && (e.tracks = f.tracks || [], ir(e, f.activeTrackIds || [], !0))
            }
        })
    };
    Mr = function(a, b) {
        if (a.w) return _.H(Lr, "Player is busy, request rejected"), Qe("INVALID_COMMAND");
        a.w = new Me(function(c) {
            return c(b())
        });
        return a.w.then(function(c) {
            a.w = null;
            return c
        }, function(c) {
            a.w = null;
            _.H(Lr, "Player command failed" + c);
            return Qe(c)
        })
    };
    Nr = function(a, b) {
        dr.call(this, a, b);
        this.g = a.g
    };
    Or = function(a) {
        xr.call(this, a);
        this.g = null
    };
    Pr = function(a) {
        return new Me(function(b, c) {
            var d = new Image;
            d.onerror = c;
            d.onload = b;
            d.src = a
        })
    };
    Rr = function(a, b) {
        var c = document.createElement("script");
        c.type = "text/javascript";
        c.src = a;
        c.onload = function() {
            _.I(Qr, "library(" + a + ") is loaded");
            b.resolve()
        };
        c.onerror = function() {
            _.G(Qr, "library(" + a + ") cannot be loaded");
            b.reject()
        };
        document.head.appendChild(c)
    };
    Sr = function(a, b, c) {
        xr.call(this, a, void 0 === c ? null : c);
        var d = this;
        this.Ca = a;
        this.I = b;
        this.G = this.Z = this.W = this.Y = this.U = this.g = null;
        this.N = this.za = !1;
        this.na = void 0;
        this.w = 0;
        this.pa = !1;
        this.wc = $a(function() {
            B("Cast.Shaka.Bandwidth", d.g.getStats().estimatedBandwidth)
        })
    };
    Zr = function(a) {
        for (var b = a.Ca.playbackConfig, c = _.p(["autoResumeNumberOfSegments", "autoPauseDuration", "licenseCustomData", "captionsRequestHandler"]), d = c.next(); !d.done; d = c.next()) d = d.value, void 0 !== b[d] && _.H(Tr, d + " is not supported for Shakaplayer. Its value will be ignored.");
        Ur(a, b);
        Vr(a, b);
        c = _.rb(Wr);
        "number" === typeof b.segmentRequestRetryLimit && (c.maxAttempts = b.segmentRequestRetryLimit + 1);
        c = {
            abr: {
                defaultBandwidthEstimate: b.initialBandwidth || 2E6
            },
            drm: {
                retryParameters: Wr,
                servers: Xr(b),
                advanced: {
                    "com.widevine.alpha": {
                        audioRobustness: "HW_SECURE_CRYPTO",
                        videoRobustness: "HW_SECURE_ALL"
                    }
                }
            },
            manifest: {
                retryParameters: Wr
            },
            streaming: {
                jumpLargeGaps: !0,
                rebufferingGoal: b.autoResumeDuration || 10,
                retryParameters: c,
                stallThreshold: 5
            }
        };
        b.shakaConfig && (_.I(Tr, "Supplying custom Shaka configurations is not recommended. Please use cast.framework.PlaybackConfig instead."), Yr(a, c, b.shakaConfig));
        a.g.configure(c)
    };
    Yr = function(a, b, c, d) {
        d = void 0 === d ? "" : d;
        Object.keys(c).forEach(function(e) {
            var f = d ? d + "." + e : e;
            _.Ka(b[e]) && _.Ka(c[e]) ? Yr(a, b[e], c[e], f) : (e in b && _.I(Tr, "overriding " + f + " Shaka configuration with custom value"), b[e] = c[e])
        })
    };
    Xr = function(a) {
        var b = {},
            c = a.licenseUrl;
        a = a.protectionSystem;
        if (!c) return {};
        if (a) {
            if (!_.pb($r, a)) return _.H(Tr, a + " is not a supported protection system by Shaka player."), {};
            var d = as[a];
            if (!d) return {};
            b[d] = c;
            return b
        }
        for (d in as) b[as[d]] = c;
        return b
    };
    Ur = function(a, b) {
        (b.manifestRequestHandler || b.segmentRequestHandler || b.licenseRequestHandler) && a.g.getNetworkingEngine().registerRequestFilter(function(c, d) {
            var e = {
                url: d.uris[0],
                headers: d.headers,
                content: d.body,
                withCredentials: d.allowCrossSiteCredentials
            };
            switch (c) {
                case a.I.net.NetworkingEngine.RequestType.MANIFEST:
                    _.z(b.manifestRequestHandler) && b.manifestRequestHandler(e);
                    break;
                case a.I.net.NetworkingEngine.RequestType.SEGMENT:
                    _.z(b.segmentRequestHandler) && b.segmentRequestHandler(e);
                    break;
                case a.I.net.NetworkingEngine.RequestType.LICENSE:
                    _.z(b.licenseRequestHandler) &&
                        b.licenseRequestHandler(e)
            }
            d.uris[0] = e.url;
            d.headers = e.headers;
            d.body = e.content;
            d.allowCrossSiteCredentials = e.withCredentials
        })
    };
    Vr = function(a, b) {
        var c = a.g.getNetworkingEngine(),
            d = a.I.net.NetworkingEngine.RequestType;
        c.registerResponseFilter(function(e, f) {
            var g = f.data,
                k;
            switch (e) {
                case d.MANIFEST:
                    _.z(b.manifestHandler) && g && (k = Promise.resolve(b.manifestHandler(String.fromCharCode.apply(String, _.oa(new Uint16Array((new Uint16Array(new Uint8Array(g))).buffer))))).then(function(l) {
                        for (var m = new ArrayBuffer(2 * l.length), n = new Uint16Array(m), u = 0; u < l.length; u++) n[u] = l.charCodeAt(u);
                        f.data = (new Uint8Array(new Uint16Array(m))).buffer
                    }));
                    break;
                case d.SEGMENT:
                    a.wc();
                    _.z(b.segmentHandler) && (k = Promise.resolve(b.segmentHandler(new Uint8Array(g))).then(function(l) {
                        f.data = l.buffer
                    }));
                    yr(a, new Zq(f.timeMs, g.byteLength));
                    break;
                case d.LICENSE:
                    _.z(b.licenseHandler) && g && (k = Promise.resolve(b.licenseHandler(new Uint8Array(g))).then(function(l) {
                        f.data = l.buffer
                    }))
            }
            return k
        })
    };
    bs = function(a, b) {
        if (b && b.code) {
            _.G(Tr, "category: " + b.category + " code: " + b.code);
            var c = b.code,
                d = {
                    shakaErrorCode: c,
                    shakaErrorData: b.data
                };
            zr(a, cast.B.media.ak.wg(b), d);
            B("Cast.Shaka.Error", c)
        } else _.G(Tr, JSON.stringify(b))
    };
    cs = function(a, b) {
        Er(a, b, "loadedmetadata", a.Tm.bind(a, b));
        Er(a, b, "pause", a.Ci.bind(a));
        Er(a, b, "play", a.Um.bind(a));
        Er(a, b, "playing", a.Tp.bind(a))
    };
    ds = function(a) {
        var b = {};
        a = _.p(a.g.getVariantTracks());
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = void 0;
            c.videoId ? d = "video" : c.audioId && (d = "audio");
            b[d] || (b[d] = []);
            b[d].push(c.bandwidth)
        }
        return b
    };
    fs = function(a) {
        hd("Cast.Shaka.Load");
        ed("Cast.Shaka.Live", a.g.isLive());
        a.g.getVariantTracks().forEach(function(e) {
            e.codecs && gd(e.codecs);
            e.mimeType && B("Cast.Shaka.MimeType", es[e.mimeType] || 0)
        });
        var b = a.mediaElement.duration;
        a.isLiveStream() && (b = -1, void 0 !== a.h.startTime && (a.pa = !0));
        B("Cast.Shaka.MediaDuration", b);
        a.g.getManifest() && "number" === typeof a.g.getManifest().minBufferTime && 0 != a.g.getManifest().minBufferTime && B("Cast.Shaka.MinBufferTime", a.g.getManifest().minBufferTime);
        b = ds(a);
        for (var c =
                _.p(["audio", "video"]), d = c.next(); !d.done; d = c.next()) d = d.value, b[d] && dd(b[d], d + "/*");
        Br(a);
        a.l.H = a.Mi.bind(a)
    };
    gs = function(a, b) {
        return cast.B.common.Rd.$j.then(function() {
            return new Sr(a, shaka, b)
        })
    };
    hs = function(a, b) {
        dr.call(this, a, b);
        this.g = a.g;
        this.D = new Map;
        this.H = null
    };
    is = function(a, b) {
        return new hs(a, b)
    };
    js = function(a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c].audioId] || (b[a[c].audioId] = a[c].id);
        var d = [],
            e;
        for (e in b) b.hasOwnProperty(e) && d.push(b[e]);
        return a.filter(function(f) {
            return d.includes(f.id)
        })
    };
    ks = function(a, b) {
        xr.call(this, a, b)
    };
    ls = function(a, b) {
        Er(a, b, "loadedmetadata", a.g.bind(a, b));
        Er(a, b, "error", function() {
            zr(a, xc(b.error))
        })
    };
    ms = function() {
        dr.apply(this, arguments)
    };
    ns = function(a, b) {
        return new ms(a, b)
    };
    rs = function() {
        this.g = os;
        this.l = ps;
        this.h = qs
    };
    os = function(a, b) {
        b = void 0 === b ? {} : b;
        b.url = b.url || a;
        return new cast.player.api.Host(b)
    };
    ps = function(a, b, c, d) {
        switch (a) {
            case "application/x-mpegurl":
            case "application/vnd.apple.mpegurl":
            case "audio/mpegurl":
            case "audio/x-mpegurl":
                return cast.player.api.CreateHlsStreamingProtocol(d, cast.B.media.Tb.qo(b), cast.B.media.Tb.ro(c));
            case "application/vnd.ms-sstr+xml":
                return cast.player.api.CreateSmoothStreamingProtocol(d);
            case "application/dash+xml":
                return cast.player.api.CreateDashStreamingProtocol(d);
            default:
                return _.Wa("Unsupported mimetype: " + a), cast.player.api.CreateHlsStreamingProtocol(d)
        }
    };
    qs = function(a) {
        return new cast.player.api.Player(a)
    };
    ss = function(a, b, c) {
        xr.call(this, a, void 0 === c ? null : c);
        this.N = b
    };
    vs = function(a) {
        if (!a.G) {
            var b = a.h.playbackConfig,
                c = b.mplConfig || {};
            null != b.disableSourceBufferTimeAdjust && (c.disableSourceBufferTimeAdjust = b.disableSourceBufferTimeAdjust);
            null != b.enableSmoothLiveRefresh && (c.enableSmoothLiveRefresh = b.enableSmoothLiveRefresh);
            null != b.ignoreTtmlPositionInfo && (c.ignoreTtmlPositionInfo = b.ignoreTtmlPositionInfo);
            c.enableSideloadedTextTrackStyling = !!b.enableSideloadedTextTrackStyling;
            a.w = a.N.g(a.h.url, c);
            ts(a.w, b);
            a.w.onError = a.Cp.bind(a);
            a.w.onManifestReady = a.xp.bind(a);
            a.w.processMetadata = function(d, e, f, g) {
                if ("EMSG" === d) {
                    if (void 0 !== g)
                        for (d = _.p(g), f = d.next(); !f.done; f = d.next()) f = f.value, yr(a, new Lq({
                            endTime: f.endTime,
                            eventDuration: f.eventDuration,
                            id: f.id,
                            messageData: f.messageData,
                            presentationTimeDelta: f.presentationTimeDelta,
                            schemeIdUri: f.schemeIdUri,
                            segmentData: e,
                            startTime: f.startTime,
                            timescale: f.timescale,
                            value: f.value
                        }))
                } else "ID3" === d ? yr(a, new Nq(e, f)) : _.H(us, "MPL metadata event of type " + d + " was ignored.")
            };
            a.w.trackBandwidth = a.Wm.bind(a);
            a.w.getQualityLevel =
                a.Bo.bind(a);
            a.g = a.N.l(a.h.mimeType, a.h.hlsSegmentFormat, a.h.hlsVideoSegmentFormat, a.w);
            a.G = a.N.h(a.w)
        }
    };
    ts = function(a, b) {
        null != b.initialBandwidth && (a.initialBandwidth = b.initialBandwidth);
        null != b.autoResumeDuration && (a.autoResumeDuration = b.autoResumeDuration);
        null != b.autoResumeNumberOfSegments && (a.autoResumeNumberOfSegments = b.autoResumeNumberOfSegments);
        null != b.autoPauseDuration && (a.autoPauseDuration = b.autoPauseDuration);
        null != b.segmentRequestRetryLimit && (a.segmentRequestRetryLimit = b.segmentRequestRetryLimit);
        null != b.licenseUrl && (a.licenseUrl = b.licenseUrl);
        null != b.protectionSystem && (a.protectionSystem =
            b.protectionSystem);
        null != b.licenseCustomData && (a.licenseCustomData = b.licenseCustomData);
        null != b.manifestRequestHandler && (a.updateManifestRequestInfo = b.manifestRequestHandler);
        null != b.segmentRequestHandler && (a.updateSegmentRequestInfo = function(c) {
            b.segmentRequestHandler(c)
        });
        null != b.licenseRequestHandler && (a.updateLicenseRequestInfo = b.licenseRequestHandler);
        null != b.captionsRequestHandler && (a.updateCaptionsRequestInfo = b.captionsRequestHandler);
        null != b.manifestHandler && (a.processManifest = b.manifestHandler);
        null != b.segmentHandler && (a.processSegment = function(c, d) {
            return b.segmentHandler(d)
        });
        null != b.licenseHandler && (a.processLicense = b.licenseHandler)
    };
    ws = function(a, b) {
        return cast.B.common.Rd.Qj.then(function() {
            return new ss(a, new rs, b)
        })
    };
    xs = function(a, b) {
        dr.call(this, a, b);
        this.l = this.g = a.G;
        this.H = a.g;
        this.D = new Map
    };
    ys = function(a, b) {
        return new xs(a, b)
    };
    Bs = function(a, b) {
        a = a.toLowerCase();
        if (_.pb(zs, a)) return a;
        if ("text/mp2t" == a) return "text/cea608";
        b = b ? b.toLowerCase() : null;
        switch (b) {
            case "ttml":
                return "application/ttml+xml";
            case "webvtt":
                return "text/vtt"
        }
        _.H(As, "cannot guess text mime type. Defaults to VTT");
        return "text/vtt"
    };
    Cs = function() {
        this.g = null
    };
    Es = function(a, b) {
        return _.J(Ds(a, b)).then(function(c) {
            if (!c) a: {
                c = b.mimeType.toLowerCase();
                switch (c) {
                    case "application/x-mpegurl":
                    case "application/vnd.apple.mpegurl":
                    case "audio/mpegurl":
                    case "audio/x-mpegurl":
                    case "application/vnd.ms-sstr+xml":
                    case "application/dash+xml":
                        var d = ws,
                            e = ys;
                        cast.B.common.Rd.nk && "application/dash+xml" === c && (d = gs, e = is);
                        c = d(b, e);
                        break a
                }
                c = c.startsWith("image/") ? _.J(new Or(b)) : _.J(new ks(b, ns))
            }
            return c
        })
    };
    Ds = function(a, b) {
        return window.caf_ && window.caf_["3pp"] && a.g ? _.J(a.g(b)).then(function(c) {
            return c && Fs(c) ? new Kr(c, b, function(d, e) {
                return new cast.B.media.Lk(d, e)
            }) : null
        }) : null
    };
    Fs = function(a) {
        if (!a.getPlayerVersion) return _.G(Gs, "Missing implementation of player interface getPlayerVersion method."), hd("Cast.CAF.PlayerCreationFailed"), !1;
        a = a.getPlayerVersion();
        if ("number" !== typeof a) return _.G(Gs, "Player getPlayerVersion should return a number."), hd("Cast.CAF.PlayerCreationFailed"), !1;
        B("Cast.CAF.PlayerVersion", a);
        return !0
    };
    Hs = function(a, b, c) {
        this.seekFrom = a;
        this.seekTo = b;
        this.breaks = c
    };
    Is = function(a) {
        this.break = a
    };
    _.Js = function(a, b) {
        this.breaks = a;
        this.breakClips = b
    };
    Ms = function(a) {
        var b = this;
        this.h = a;
        this.w = new Map;
        this.o = new Map;
        this.g = this.l = null;
        this.C = this.G = this.A = 0;
        this.h.addEventListener("TIME_UPDATE", function() {
            return Ks(b)
        });
        this.h.addEventListener("MEDIA_FINISHED", function() {
            b.g && (Ls(b, "BREAK_CLIP_ENDED", b.g, b.l, void 0, b.A), Ls(b, "BREAK_ENDED", b.g, b.l, void 0, b.A));
            b.w.clear();
            b.o.clear();
            b.l = null;
            b.g = null;
            b.A = 0;
            b.C = 0
        })
    };
    Os = function(a, b, c) {
        if (!b.id) return _.G(Ns, "Break should specify id " + JSON.stringify(b)), !1;
        if (!b.isEmbedded) return _.G(Ns, "Only embedded breaks are supported"), !1;
        if (!b.expanded) return _.G(Ns, "Only expanded breaks are supported"), !1;
        if (a.o.has(b.id)) return _.G(Ns, "Duplicate dynamic break id " + JSON.stringify(b)), !1;
        if ("number" !== typeof b.position || 0 > b.position) return _.G(Ns, "Break position should be positive " + JSON.stringify(b)), !1;
        if (!c || 0 === c.length) return _.G(Ns, "Break clips were not provided"), !1;
        var d = [],
            e = 0;
        c.forEach(function(f) {
            "number" !== typeof f.duration || 0 >= f.duration ? _.G(Ns, "BreakClip should include positive duration " + JSON.stringify(f)) : f.id ? a.w.has(f.id) || d.includes(f.id) ? _.G(Ns, "Duplicate dynamic break clip id " + JSON.stringify(f)) : void 0 !== f.whenSkippable ? _.G(Ns, "Dynamic BreakClip are not skippable " + JSON.stringify(f)) : (d.push(f.id), e += f.duration) : _.G(Ns, "BreakClip should specify id " + JSON.stringify(f))
        });
        if (c.length != d.length) return !1;
        b.duration = e;
        b.breakClipIds = d;
        return !0
    };
    Ks = function(a) {
        if (a.l || 0 !== a.o.size) {
            var b = a.h.getCurrentTimeSec(),
                c = Ps(a, b);
            b = c.Hi;
            var d = c.Ii,
                e = c.currentBreakClipTime,
                f = c.Jm;
            c = c.Lm;
            if (d !== a.g) {
                a.g && Ls(a, "BREAK_CLIP_ENDED", a.g, a.l, void 0, a.A);
                a.l && a.l !== b && (Ls(a, "BREAK_ENDED", a.g, a.l, void 0, a.A), B("Cast.CAF.DynamicBreakEnded", ((0, _.M)() - a.G) / 1E3));
                var g = a.h.ub();
                g && (g.breaks = b ? [b] : [], g.breakClips = d ? [d] : [], a.h.sd(g, !1));
                b && a.l !== b && (Ls(a, "BREAK_STARTED", d, b, e, f), hd("Cast.CAF.DynamicBreakStarted"), a.G = (0, _.M)());
                d && b && (Ls(a, "BREAK_CLIP_LOADING",
                    d, b, e, f), Ls(a, "BREAK_CLIP_STARTED", d, b, e, f));
                a.l = b;
                a.g = d;
                a.A = f;
                a.C = c;
                a.h.ba(!0)
            }
        }
    };
    Ls = function(a, b, c, d, e, f) {
        a.h.o.dispatchEvent(new Wq(b, e, f + 1, d.breakClipIds.length, void 0, void 0, c.id, d.id))
    };
    Ps = function(a, b) {
        var c = void 0,
            d = void 0,
            e = Array.from(a.o.values()).find(function(m) {
                return b >= m.position && b < m.position + m.duration
            }) || null,
            f = e ? e.position : 0;
        c = d = b - f;
        var g = 0,
            k = f,
            l = e ? e.breakClipIds.find(function(m) {
                f += a.w.get(m).duration;
                return f <= b ? (d = b - f, g++, k = f, !1) : !0
            }) : null;
        l = a.w.get(l) || null;
        e && !l && (_.G(Ns, "Could not find break clip in dynamic break"), e = null);
        return {
            Hi: e,
            Ii: l,
            currentBreakTime: c,
            currentBreakClipTime: d,
            Jm: g,
            Lm: k
        }
    };
    Qs = function() {
        this.l = null;
        this.D = this.Ji.bind(this);
        this.H = this.Ki.bind(this);
        this.o = !1;
        this.g = this.A = this.C = this.w = this.h = null;
        this.G = void 0
    };
    Rs = function(a, b) {
        if (a.g && (a = a.g, 0 !== a.o.size)) {
            var c = a.h.getCurrentTimeSec(),
                d = Ps(a, c);
            a = d.Hi;
            c = d.Ii;
            var e = d.currentBreakTime;
            d = d.currentBreakClipTime;
            var f = b.breakStatus = new Ip(void 0, void 0);
            a && c && (f.breakId = a.id, f.breakClipId = c.id, f.currentBreakTime = e, f.currentBreakClipTime = d, b.media && (b.media.breakClips = [c], b.media.breaks = [a]))
        }
    };
    Ss = function(a, b, c) {
        try {
            var d = a(b, c);
            return _.J(d)
        } catch (e) {
            return Qe(e)
        }
    };
    Us = function(a) {
        if (null !== a && !_.z(a)) throw _.G(Ts, "Fail to set interceptor since interceptor is not a function"), Error("Fail to set interceptor since interceptor is not a function");
    };
    Vs = function(a, b) {
        _.I(Ts, "break seek interceptor is invoked.");
        return Ss(a.H, b)
    };
    Ws = function(a, b, c) {
        _.I(Ts, "break clip initialize interceptor is invoked. ");
        return Ss(a.D, b, c).then(function(d) {
            if (!d) return [];
            d instanceof Array || (d = [d]);
            d = d.map(function(e) {
                return a.h && e.vastAdsRequest && !e.contentId ? a.h.Km(e) : [e]
            });
            return Ue(d).then(function(e) {
                var f = [];
                e.forEach(function(g) {
                    g.rg ? f.push.apply(f, g.value) : a.l.va.dispatchEvent(new Mq(901, Error(g.reason)))
                });
                return f
            })
        })
    };
    Xs = function(a) {
        if (a.vmapAdsRequest) return !0;
        if (a.breakClips) {
            a = _.p(a.breakClips);
            for (var b = a.next(); !b.done; b = a.next())
                if (b = b.value, b.vastAdsRequest && !b.contentId) return !0
        }
        return !1
    };
    Zs = function(a, b) {
        if (!Xs(b)) return _.J();
        a.w || (a.w = cast.B.common.Rd.cp(), a.w.then(function() {
            a.h = new _.Ys(a.C);
            a.C.addEventListener("BREAK_CLIP_LOADING", a.qp.bind(a));
            a.A && a.h.Wj(a.A);
            void 0 !== a.G && a.h.Qf(a.G)
        }));
        return a.w
    };
    $s = function(a, b) {
        return a.h ? a.h.Om(b) : (_.G(Ts, "VastManager hasn't been loaded"), _.J(null))
    };
    at = function(a, b, c) {
        this.h = a;
        this.l = b;
        this.g = c
    };
    bt = function(a, b) {
        b.breakId = a.h.id;
        b.breakClipId = a.g.id;
        a = a.g.whenSkippable;
        "number" === typeof a && (b.whenSkippable = a)
    };
    et = function(a, b, c, d) {
        c = void 0 === c ? [] : c;
        d = void 0 === d ? [] : d;
        this.g = [];
        this.l = new Map;
        this.C = new Map;
        this.isEmbedded = a;
        this.w = b;
        this.va = new Bq;
        this.D = 0;
        this.A = !1;
        ct(this, d);
        dt(this, c);
        b = this.xc();
        a = sb(this.g);
        b = sb(b);
        this.I = new _.Js(a, b)
    };
    ct = function(a, b) {
        b.forEach(function(c) {
            ft(a, c) && a.l.set(c.id, c)
        })
    };
    dt = function(a, b) {
        b.forEach(function(c) {
            return a.Ed(c)
        })
    };
    ft = function(a, b) {
        return b.id ? a.isEmbedded && ("number" !== typeof b.duration || 0 >= b.duration) ? (_.G(gt, "Break Clip with invalid duration is ignored"), !1) : a.l.has(b.id) ? (_.H(gt, "Duplicate break clip id, " + b.id + ", clip is ignored"), !1) : !0 : (_.G(gt, "Break Clip with no clip id is ignored"), !1)
    };
    ht = function(a, b) {
        if (!b.id) return _.G(gt, "Break with no clip is ignored"), !1;
        if (a.isEmbedded && !b.isEmbedded) return _.G(gt, "Stitched break is ignored in embedded timeline"), !1;
        if (!a.isEmbedded && b.isEmbedded) return _.G(gt, "Embedded break is ignored in stitched timeline"), !1;
        if ("number" !== typeof b.position) return _.G(gt, "Break with no position is ignored."), !1;
        if (0 > b.position && b.isEmbedded) return _.G(gt, "Break with negative position is ignored."), !1;
        var c = b.breakClipIds || [],
            d = c.filter(function(e) {
                return a.l.has(e)
            });
        d.length < c.length && (_.H(gt, "Unknown clip id in break is ignored."), b.breakClipIds = d);
        return 0 == d.length ? (_.G(gt, "Break with no break clips is ignored."), !1) : !0
    };
    it = function(a, b, c, d) {
        var e = [];
        d.forEach(function(f) {
            if (!f.id) {
                for (; a.l.has("GENERATED:" + a.D);) a.D++;
                f.id = "GENERATED:" + a.D
            }
            a.l.has(f.id) ? a.l.get(f.id) !== f && _.H(gt, "BreakClip with existing id is ignored. BreakClip id = " + f.id) : ft(a, f) && a.l.set(f.id, f);
            e.push(f.id)
        });
        b.breakClipIds.splice.apply(b.breakClipIds, [c, 1].concat(_.oa(e)))
    };
    jt = function(a, b) {
        var c = [],
            d = "seek-" + Date.now();
        a.C.set(d, b.breaks.slice());
        a = _.p(b.breaks);
        for (var e = a.next(); !e.done; e = a.next()) c.push.apply(c, _.oa(e.value.breakClipIds));
        return new _.Fp(d, c, b.seekTo)
    };
    kt = function(a, b) {
        b.isWatched || (a.A = !0);
        b.isWatched = !0;
        a.C.has(b.id) && (a.C.get(b.id).forEach(function(c) {
            c.isWatched = !0
        }), a.C.delete(b.id))
    };
    lt = function(a, b, c) {
        var d = b > c,
            e = d ? c : b,
            f = d ? b : c;
        return a.g.filter(function(g) {
            return g.position > e && g.position <= f
        })
    };
    mt = function(a, b, c) {
        this.o = a;
        this.h = b;
        this.g = -1;
        this.l = null;
        this.seekTo = c
    };
    nt = function() {
        this.h = this.l = this.g = null
    };
    ot = function(a, b) {
        return a.l < b && b < a.h
    };
    qt = function(a, b, c) {
        b = void 0 === b ? [] : b;
        c = void 0 === c ? [] : c;
        et.call(this, !0, a, b, c);
        this.o = [];
        this.H = new Map;
        this.G = new nt;
        this.h = null;
        a = 0;
        b = _.p(this.g);
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = 0, e = 0; e < c.breakClipIds.length; e++) {
                var f = this.tb(c.breakClipIds[e]);
                if (f) {
                    var g = c.position + a,
                        k = g + d;
                    g = new pt(c, f, c.position, g, k, k + f.duration, e);
                    this.H.set(c.id + "___" + f.id, g);
                    this.o.push(g);
                    d += f.duration
                }
            }
            a += d
        }
    };
    rt = function(a, b) {
        return (a = a.o.slice(0).reverse().find(function(c) {
            return c.l < b
        })) ? a.h + (b - a.l) : b
    };
    tt = function(a, b) {
        return a.o.find(function(c) {
            return st(c, b)
        }) || null
    };
    ut = function(a, b) {
        if (ot(a.G, b)) return a.G.g;
        var c = null,
            d = tt(a, b);
        if (d) {
            c = a.g.find(function(g) {
                return g == d.w
            });
            var e = d.g;
            var f = d.h;
            c = new at(c, d.o, d.breakClip)
        } else f = a.o.find(function(g) {
            return g.g > b
        }), e = b, f = f ? f.g : Infinity, c = null;
        a.G.cache(c, e, f);
        return c
    };
    vt = function(a) {
        if (a.h.g === a.h.h.length - 1) return null;
        var b = a.h.h[a.h.g + 1];
        return new at(a.h.o, b.o, b.breakClip)
    };
    wt = function(a, b) {
        a.h.g++;
        a.h.l = b
    };
    xt = function(a, b) {
        return (a = tt(a, b)) ? a.h : b
    };
    yt = function(a, b) {
        return a.o.slice(0).reverse().find(function(c) {
            return c.w === b
        }).h
    };
    pt = function(a, b, c, d, e, f, g) {
        this.w = a;
        this.breakClip = b;
        this.l = c;
        this.A = d;
        this.g = e;
        this.h = f;
        this.o = g
    };
    st = function(a, b) {
        return a.g <= b && (0 > a.h || b <= a.h)
    };
    zt = function(a, b, c, d, e) {
        this.Ca = a;
        this.ab = b.contentUrl || b.contentId;
        this.w = c;
        this.Gb = e;
        this.va = new Bq;
        this.g = this.mediaElement = null;
        this.timeline = d;
        this.h = null;
        this.N = this.isPlayingBreak = !1;
        this.da = this.I = this.na = _.w;
        this.A = 1;
        this.O = 0;
        this.Na = null;
        this.H = We();
        this.ca = !1;
        this.R = this.U = this.Z = null;
        this.W = !1;
        this.va.addEventListener("BREAK_STARTED", this.Xq, this);
        this.va.addEventListener("BREAK_ENDED", this.Wq, this);
        this.va.addEventListener("CLIP_STARTED", this.$q, this);
        this.va.addEventListener("CLIP_ENDED",
            this.Zq, this)
    };
    Ct = function(a) {
        if (!a.h) return _.I(At, "skipAd - not playing ad"), Qe("INVALID_COMMAND");
        if (!Bt(a)) return _.I(At, "skipAd - ad cannot be skipped"), Qe("INVALID_COMMAND");
        _.I(At, "skipAd");
        return a.Sh()
    };
    Bt = function(a) {
        if (!a.h) return !1;
        var b = a.h.g.whenSkippable;
        a = a.Xa();
        return "number" === typeof b && Number(b) <= a
    };
    Dt = function(a) {
        return a.g ? a.g.dg() : {}
    };
    Et = function(a, b, c, d) {
        a.mediaElement = b;
        return a.Ug(c).then(function() {
                3 > a.A && (a.A = 3);
                var e = a.w.media;
                e && (e.mediaCategory = a.getMediaCategory() || void 0);
                a.O = a.timeline.Qe(a.Ag());
                e = a.timeline;
                var f = a.O;
                if (!e.isEmbedded) {
                    for (var g = null, k = e.g.length, l = 0; l < e.g.length; l++) {
                        var m = e.g[l];
                        if (m.position >= f || 0 > m.position) g ? g.breakClipIds.push.apply(g.breakClipIds, _.oa(m.breakClipIds)) : (g = m, k = l, g.position = -1)
                    }
                    k < e.g.length - 1 && e.g.splice(k + 1)
                }
                if (e = a.getLiveSeekableRange()) a.Na = (0, _.M)() / 1E3 - e.end;
                a.na();
                a.setPlaybackRate(d)
            },
            function(e) {
                a.W || (a.W = !0, a.I(e));
                return Promise.reject(e)
            })
    };
    Ft = function(a) {
        return a.g ? a.g.getCurrentTimeSec() : 0
    };
    Gt = function(a, b) {
        a.g && a.g.isLiveStream() && (b.metadata ? b.metadata.sectionStartAbsoluteTime ? "number" === typeof b.metadata.sectionStartTimeInMedia ? ("number" === typeof cast.receiver.media.startAbsoluteTime && _.H(At, "media.startAbsoluteTime will be updated based on section start absolute time and section start media time."), b.startAbsoluteTime = b.metadata.sectionStartAbsoluteTime - b.metadata.sectionStartTimeInMedia) : (b.startAbsoluteTime || (b.startAbsoluteTime = a.Ac() || void 0), b.startAbsoluteTime && (b.metadata.sectionStartTimeInMedia =
            b.metadata.sectionStartAbsoluteTime - b.startAbsoluteTime)) : b.startAbsoluteTime = void 0 : ("number" === typeof b.startAbsoluteTime && _.G(At, "media.startAbsoluteTime should not be provided if no metadata"), b.startAbsoluteTime = void 0))
    };
    Ht = function(a, b, c, d) {
        var e = b.h,
            f = b.g;
        b = b.l + 1;
        var g = e.breakClipIds.length,
            k = f.whenSkippable,
            l = a.Xa() || 0;
        "BREAK_CLIP_ENDED" == c && (l = void 0 !== a.D ? a.D : l);
        a.va.dispatchEvent(new Wq(c, l, b, g, k, d, f.id, e.id))
    };
    Jt = function(a) {
        a.A = 4;
        "PAUSED" == a.getState() && It(a)
    };
    Kt = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        var e = c != a.h,
            f = !1;
        a.h && e && Ht(a, a.h, "BREAK_CLIP_ENDED", d);
        a.h && "BREAK_ENDED" == b && (Ht(a, a.h, b), f = !0, a.isPlayingBreak = !1, a.N = !1);
        if (a.h = c) B("Cast.CAF.AdMimeType", es[a.h.g.contentType || ""] || 0), d = a.h.g, f = d.whenSkippable, ed("Cast.CAF.AdSkippable", null != f && f < d.duration), a.isPlayingBreak || (Ht(a, c, "BREAK_STARTED"), a.isPlayingBreak = !0, a.N = Bt(a), d = c.h, kt(a.timeline, d)), e && "BREAK_CLIP_STARTED" == b && Ht(a, c, "BREAK_CLIP_LOADING"), Ht(a, c, b), f = !0;
        f && It(a)
    };
    It = function(a) {
        var b = a.ca || a.timeline.A;
        a.Gb(b);
        b && (a.timeline.A = !1, a.ca = !1)
    };
    Lt = function(a, b, c) {
        a.g ? a.g.va.addEventListener(b, c, a) : _.G(At, "No active player, cannot listen to events")
    };
    Mt = function(a, b) {
        a.g ? a.g.va.removeEventListener("CLIP_ENDED", b) : _.G(At, "No active player, cannot unlisten to events")
    };
    Nt = function(a) {
        a.g.va.Of(a.va);
        Lt(a, "ERROR", a.xf);
        Lt(a, "TIME_UPDATE", a.$d)
    };
    Ot = function(a, b) {
        var c = a.getCurrentTimeSec(),
            d = lt(a.timeline, c, b),
            e = null;
        0 < d.length && (e = $e(Vs(a.Ca, new Hs(c, b, d)), function(f) {
            a.va.dispatchEvent(new Mq(902, Error(f)));
            return null
        }));
        return _.J(e)
    };
    Pt = function(a, b, c, d, e) {
        cast.B.media.Player.call(this, a, b, c, d, e);
        this.o = this.l = this.C = null
    };
    Qt = function(a) {
        var b = a.timeline;
        a.w.startTime && (a.w.startTime = rt(b, a.w.startTime));
        return Es(Cs.F(), a.w)
    };
    Rt = function(a) {
        var b = Ft(a),
            c = a.timeline,
            d = null,
            e = _.J();
        if (a.l) 0 > c.h.g || !st(c.h.h[c.h.g], b) ? (d = vt(c)) ? (e = a.g.seek(c.h.h[c.h.g + 1].g), wt(c, d)) : (c.h = null, a.l.resolve(), a.l = null, e = a.o, a.o = null) : d = c.h.l;
        else if (d = ut(c, b)) b = d.h, a.h || !b.isWatched || c.w.o || (e = a.g.seek(yt(c, b)), d = null);
        return e.then(function() {
            if (d) {
                var f;
                if (f = a.h) f = a.h, f = null !== d && f.h == d.h && f.g == d.g;
                f || Kt(a, "BREAK_CLIP_STARTED", d)
            } else a.h && Kt(a, "BREAK_ENDED")
        })
    };
    St = function(a, b, c, d) {
        d = void 0 === d ? Infinity : d;
        this.g = a;
        this.breakStatus = b;
        this.startTime = void 0 === c ? 0 : c;
        this.endTime = d
    };
    Tt = function(a, b, c) {
        b = void 0 === b ? [] : b;
        c = void 0 === c ? [] : c;
        et.call(this, !1, a, b, c)
    };
    Xt = function(a, b, c) {
        return _.J().then(function() {
            var d = a.g.find(function(e) {
                return !(e.isWatched && !a.w.o) && e.position == b
            });
            return d ? $e(Ut(a, d, 0, c), function() {
                _.I(Vt, "createMediaClipAt: Cannot create a stitching media clip");
                return null
            }) : null
        }).then(function(d) {
            return d ? d : new St(c, null, b, Wt(a, b))
        })
    };
    Yt = function(a, b, c) {
        return _.J().then(function() {
            if (b.isPlayingBreak()) {
                var d = b.breakStatus,
                    e = d.h,
                    f = d.l + 1;
                return _.J().then(function() {
                    if (e.breakClipIds.length > f) return $e(Ut(a, e, f, c), function(k) {
                        if (k instanceof Le) return Qe(k);
                        _.I(Vt, "createNextMediaClip: Cannot create stitching clip in break.")
                    });
                    _.I(Vt, "createNextMediaClip: No more break clip");
                    return null
                }).then(function(k) {
                    if (k) return k;
                    k = d.getPosition();
                    _.I(Vt, "createNextMediaClip: The current break status position is: " + k);
                    return k
                })
            }
            var g =
                a.g.find(function(k) {
                    return !(k.isWatched && !a.w.o) && (k.position >= b.endTime || 0 > k.position)
                });
            if (g) return $e(Ut(a, g, 0, c), function(k) {
                return k instanceof Le ? Qe(k) : null
            }).then(function(k) {
                if (k) return k;
                _.I(Vt, "createNextMediaClip: next break is skipped.");
                return g.position
            });
            _.I(Vt, "createNextMediaClip: No next break");
            return -1
        }).then(function(d) {
            return "number" !== typeof d ? d : 0 > d ? (_.I(Vt, "createNextMediaClip: No more clip"), null) : new St(c, null, d, Wt(a, d))
        })
    };
    Ut = function(a, b, c, d) {
        var e = _.J();
        0 === c && (e = Zt(a, b));
        return e.then(function() {
            for (var f = c; f < b.breakClipIds.length; f++) {
                var g = b;
                var k = f,
                    l = d,
                    m = a.tb(g.breakClipIds[k]);
                m ? g = new St(cast.B.media.util.Ko(m, l.playbackConfig), new at(g, k, m), 0) : (_.I(Vt, "createStitchingMediaClipAt_:No next clip at " + k), g = null);
                if (g) return g
            }
            _.I(Vt, "createValidStitchingClip:No more valid break clip in a break");
            return null
        })
    };
    Zt = function(a, b) {
        if (0 === b.breakClipIds.length) return _.J();
        var c = new Is(b),
            d = b.breakClipIds.map(function(e) {
                return (e = a.tb(e)) ? (e = new window.Proxy(e, {
                    set: function(f, g, k) {
                        k !== f[g] && (f[g] = k, a.A = !0);
                        return !0
                    }
                }), Ws(a.w, e, c)) : _.J([])
            });
        return Ue(d).then(function(e) {
            var f = 0,
                g = b.breakClipIds.slice();
            e.forEach(function(k) {
                k.rg ? (it(a, b, f, k.value), f += k.value.length) : (a.va.dispatchEvent(new Mq(901, Error(k.reason))), f++)
            });
            jb(g, b.breakClipIds) || (a.A = !0)
        })
    };
    Wt = function(a, b) {
        var c = a.g.find(function(d) {
            return !(d.isWatched && !a.w.o) && d.position > b
        });
        return c ? c.position : Infinity
    };
    $t = function(a, b, c, d, e) {
        cast.B.media.Player.call(this, a, b, c, d, e);
        this.C = this.ka = null;
        this.M = this.timeline;
        this.la = this.G = this.l = this.o = null;
        this.K = void 0;
        this.Y = We();
        this.wa = 1;
        this.pa = 0;
        this.za = null;
        this.sa = "VIDEO";
        this.M.va.Of(this.va)
    };
    eu = function(a, b, c, d) {
        au(a);
        return Ut(a.M, b, 0, a.w).then(function(e) {
            if (!e) return _.I(bu, "Fail to create seek clip"), !1;
            cu(a, e).then(function(f) {
                if (void 0 === d) {
                    var g = !0;
                    a.g && (g = "PAUSED" !== a.g.eg())
                } else g = "PLAYBACK_START" == d;
                if (a.g) {
                    Mt(a, a.fh);
                    var k = a.g.end("STOPPED")
                } else k = _.J();
                a.G = c;
                k.then(function() {
                    du(a, f, e, g)
                })
            });
            return !0
        })
    };
    au = function(a) {
        a.l && (a.l.cancel("0"), a.l = null);
        a.C && (a.C.cancel("0"), a.C = null)
    };
    fu = function(a, b) {
        return Yt(a.M, b, a.w).then(function(c) {
            return c && !b.isPlayingBreak() && !c.isPlayingBreak() && b.g.url === c.g.url && Ft(a) < b.endTime ? (b.endTime = c.endTime, fu(a, b)) : c
        })
    };
    gu = function(a, b) {
        a.l = fu(a, b);
        var c = a.l;
        a.C = $e(a.l.then(function(d) {
            return d ? cu(a, d).then(function(e) {
                a.Y.g.then(function() {
                    _.I(bu, "Preloading Next Clip");
                    e.Jc()
                });
                return e
            }) : (_.I(bu, "No more clip afterwards"), null)
        }), function(d) {
            d && "0" === d.message && _.I(bu, "Next player creation is interrupted by seek.")
        }).then(function(d) {
            if (d) return d;
            c === a.l && (a.l = null);
            _.I(bu, "No more player afterwards");
            return null
        })
    };
    hu = function(a) {
        _.I(bu, "switchPlayerAndCip");
        if (a.l) {
            if (a.C) return $e(Te([a.l, a.C]).then(function(b) {
                var c = _.p(b);
                b = c.next().value;
                c = c.next().value;
                if (!b || !c) return !0;
                a.l = null;
                a.C = null;
                du(a, c, b, !0);
                return !1
            }), function(b) {
                if (b && "0" === b.message) return _.I(bu, "Player switching is interrupted by seek."), !1;
                _.G(bu, "Switch player failed " + b.message);
                return !0
            });
            _.I(bu, "switchPlayerAndClip_: No next player.");
            return _.J(!0)
        }
        _.I(bu, "switchPlayerAndClip_: No next clip.");
        return _.J(!0)
    };
    du = function(a, b, c, d) {
        _.I(bu, "loadCurrentPlayerAndCreateNext_: " + c.startTime);
        a.g = b;
        a.o = c;
        Nt(a);
        Lt(a, "CLIP_STARTED", a.up);
        Lt(a, "CLIP_ENDED", a.fh);
        a.o.breakStatus && Kt(a, "BREAK_CLIP_LOADING", a.o.breakStatus, a.K);
        a.K = void 0;
        var e = a.mediaElement;
        a.Y = We();
        d = b.De(e, d).then(function() {
            a.o.breakStatus || (cast.B.media.Player.prototype.setPlaybackRate.call(a, a.wa), a.la = b.l)
        });
        gu(a, c);
        return d
    };
    cu = function(a, b) {
        var c = _.rb(b.g);
        c.startTime = b.startTime;
        b.breakStatus || (c.tracksInfo = a.za);
        return Es(Cs.F(), c)
    };
    ju = function(a) {
        return (a.ka || Es(Cs.F(), a.w)).then(function(b) {
            b.va.addEventListener("ERROR", function(c) {
                return cast.B.media.Player.prototype.xf.call(a, c)
            });
            return b.De(a.mediaElement, !1).then(function() {
                iu(a, b);
                return b.end("STOPPED")
            })
        })
    };
    iu = function(a, b) {
        a.pa = b.getDurationSec();
        a.la = b.l;
        a.sa = b.getMediaCategory()
    };
    ku = function(a) {
        this.g = a
    };
    lu = function(a, b, c, d) {
        return Zs(b, c).then(function() {
            var e = null;
            c.breaks && 0 !== c.breaks.length || !c.vmapAdsRequest || (e = $s(b, c.vmapAdsRequest).then(function(f) {
                f && (c.breaks = f.breaks, c.breakClips = f.breakClips)
            }));
            return _.J(e).then(function() {
                if (c.breaks && 0 < c.breaks.length && !c.breaks[0].isEmbedded) {
                    var f = new Tt(b, c.breaks, c.breakClips);
                    var g = new cast.B.media.sm(b, c, d, f, a.g)
                } else f = new qt(b, c.breaks, c.breakClips), g = new Pt(b, c, d, f, a.g);
                b.l = f;
                return _.J(g)
            })
        })
    };
    mu = function(a) {
        this.g = a
    };
    Q = function(a) {
        if (!(a instanceof mu)) throw _.G(nu, "Proper Player object can be acquried by calling getPlayer() of cast.framework.Application object"), Error("player is not created properly.");
        this.o = new Bq;
        this.ab = new ku(this.ba.bind(this));
        this.h = new wq;
        this.A = new wq;
        this.l = null;
        this.K = We();
        this.w = Wh.F();
        this.ca = this.H = this.g = this.za = this.pa = this.Z = this.ka = this.sa = this.la = null;
        this.N = new iq(new gq);
        this.I = new uq(new sq);
        this.W = new oq(new mq(this));
        this.D = a.g;
        this.Na = Date.now();
        this.R = new Map;
        this.G =
            0;
        this.O = null;
        this.C = 1;
        this.U = this.M = null;
        this.Y = !1;
        this.Ca = (0, _.M)();
        this.na = this.wa = 0;
        this.da = !1;
        ou(this)
    };
    ou = function(a) {
        Eq(a.o, function(c, d) {
            "ERROR" !== c && a.o.dispatchEvent(new Mq(900, d))
        });
        a.o.addEventListener("MEDIA_FINISHED", a.Bp, a);
        a.o.addEventListener("LIVE_IS_MOVING_WINDOW_CHANGED", a.ba, a);
        a.o.addEventListener("LIVE_ENDED", a.ba, a);
        a.o.addEventListener("RATE_CHANGE", a.Up, a);
        a.o.addEventListener("ERROR", a.Nm, a);
        a.o.addEventListener("REQUEST_PRECACHE", a.Wp, a);
        a.o.addEventListener("BUFFERING", a.Yq, a);
        a.o.addEventListener("TIME_UPDATE", function() {
            qq(a.W, !0)
        });
        a.w.o = a.Zp.bind(a);
        a.w.l = a.yp.bind(a);
        xq(a.A,
            "LOAD_BY_ENTITY", a.w.l.bind(a.w));
        a.w.l = a.A.g;
        xq(a.A, "SET_CREDENTIALS", a.w.o.bind(a.w));
        a.w.o = a.A.g;
        a.w.A = a.A.g;
        a.w.G = a.A.g;
        a.w.C = a.A.g;
        a.w.D = a.A.g;
        var b = Object.keys(pu).reduce(function(c, d) {
            c[d] = a.Gg.bind(a);
            return c
        }, {});
        zq(a.h, b);
        b = Object.keys(qu).reduce(function(c, d) {
            c[d] = a.Gg.bind(a);
            return c
        }, {});
        zq(a.A, b)
    };
    ru = function(a) {
        var b = (0, _.M)(),
            c = (b - a.Ca) / 1E3;
        a.Ca = b;
        a.da && (a.Y ? a.na += c : a.wa += c)
    };
    su = function(a) {
        return (a = a.Z.getVideoPlaybackQuality && a.Z.getVideoPlaybackQuality()) ? {
            droppedFrames: a.droppedVideoFrames,
            decodedFrames: a.totalVideoFrames,
            height: a.videoHeight,
            width: a.videoWidth
        } : {}
    };
    uu = function(a, b, c) {
        B("Cast.CAF.EventListenerAdded", cast.B.common.ua.Xi(b));
        if (!_.pb(tu, b)) throw a = "addEventListener(" + b + ") failed due to invalid event type", _.G(nu, a), Error(a);
        a.o.addEventListener(b, c)
    };
    vu = function(a, b, c) {
        B("Cast.CAF.EventListenerRemoved", cast.B.common.ua.Xi(b));
        a.o.removeEventListener(b, c)
    };
    wu = function(a, b, c, d, e) {
        a.l.Ja(b.senderId, b.data.requestId, c || ("LOAD" == b.data.type ? "LOAD_FAILED" : "ERROR"), void 0 === d ? "APP_ERROR" : d, e)
    };
    xu = function(a) {
        B("Cast.CAF.MessageInterceptorDuration", (0, _.M)() - a)
    };
    yu = function(a) {
        return function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
            var e = (0, _.M)();
            return Promise.resolve(a.apply(null, _.oa(c))).then(function(f) {
                xu(e);
                return f
            }).catch(function(f) {
                xu(e);
                return Promise.reject(f)
            })
        }
    };
    zu = function(a, b) {
        b.requestId || (b.requestId = a.Na++);
        var c = We();
        a.R.set(b.requestId, c);
        return Promise.resolve(c.g)
    };
    Au = function(a, b) {
        if (b) {
            a.G = 0;
            var c = a.R.get(b);
            c && (c.resolve(), a.R.delete(b))
        }
    };
    Bu = function(a, b, c) {
        if (b) {
            a.G = 0;
            var d = a.R.get(b);
            d && (d.reject(c), a.R.delete(b))
        }
    };
    Cu = function(a, b) {
        var c = new Ep;
        a.tracks && (c.tracks = a.tracks || []);
        a.textTrackStyle && (c.textTrackStyle = a.textTrackStyle);
        c.activeTrackIds = b;
        return c
    };
    Fu = function(a, b, c) {
        var d = "ERROR",
            e = "APP_ERROR",
            f = void 0;
        c && (_.pb(Du, c) ? d = c : _.pb(Eu, c) ? e = c : (_.pb(Du, c.type) && (d = c.type), _.pb(Eu, c.reason) && (e = c.reason)), f = c.customData);
        wu(a, b, d, e, f)
    };
    Gu = function(a) {
        var b = a.I.getTracks().length;
        B("Cast.CAF.NumSubtitles", b);
        a.I.getTracks().forEach(function(c) {
            (c = c.trackContentType) && B("Cast.CAF.SubtitleType", es[c] || 0)
        })
    };
    Ju = function(a) {
        if (a = a.ub()) {
            var b = 0;
            a.streamType && (b = Hu[a.streamType] || 0);
            var c = 0;
            a.mediaCategory && (c = Iu[a.mediaCategory] || 0);
            B("Cast.CAF.MediaMimeType", es[a.contentType] || 0);
            B("Cast.CAF.MediaStreamType", b);
            B("Cast.CAF.MediaCategory", c)
        }
    };
    Ku = function(a, b) {
        var c = b.media,
            d = Object.assign(new lq, a.ca);
        a.la && (d = a.la(b, d));
        var e = a.sa ? a.sa(b) : c.contentUrl || c.contentId;
        return _.J(d).then(function(f) {
            return f ? _.J(e).then(function(g) {
                if (!g) return _.G(nu, "Load failed, missing content url."), Qe();
                g = cast.B.media.util.Lo(c, b.currentTime, f, g, Cu(c, b.activeTrackIds));
                c.contentType = g.mimeType;
                return lu(a.ab, a.D, c, g)
            }) : (_.G(nu, "Load failed, missing playback config."), Qe())
        })
    };
    Lu = function(a, b) {
        if (a.g && a.g.ma()) {
            var c = a.I,
                d = c.Wi();
            0 < d.length ? a.M = d[0].language || null : b && null != a.M ? 0 < c.Ve(a.M).length && c.Lf(a.M) : a.M = null;
            (d = c.Cc()) ? a.U = d: b && null != a.U && c.pb(a.U)
        }
    };
    Mu = function() {};
    R = function(a) {
        if (!(a instanceof Mu)) throw _.G(Nu, "CastReceiverContext is a singleton.Please call CastReceiverContext.getInstance() instead."), Error("CastReceiverContext is not created properly.");
        Qg || (Qg = new Pg);
        Qg && Rg();
        cast.receiver.Rb.w(0);
        le(Nu, Vg, "CAF Receiver Version: " + cast.B.VERSION);
        cast.B.common.ua.ep();
        this.h = _.zg.F();
        this.A = new Qs;
        this.l = new Q(new mu(this.A));
        a = this.A;
        var b = this.l;
        a.C = b;
        a.g = new cast.B.breaks.Rk(b);
        this.g = null;
        this.w = !1;
        this.o = null
    };
    Ou = function(a, b, c, d, e) {
        a.w || (cast.B.common.Rd.load(void 0 === b ? !1 : b, c, d, void 0 === e ? !1 : e), a.w = !0)
    };
    Qu = function() {
        var a = document.getElementsByTagName("video"),
            b = document.getElementsByTagName("audio"),
            c = Pu();
        if (0 == a.length && 0 == b.length && !c) return _.H(Nu, "MediaElement is not created yet"), null;
        if (c) return c.getMediaElement();
        c = _.p(a);
        for (var d = c.next(); !d.done; d = c.next())
            if (d = d.value, d.classList && d.classList.contains("castMediaElement")) return d;
        c = _.p(b);
        for (d = c.next(); !d.done; d = c.next())
            if (d = d.value, d.classList && d.classList.contains("castMediaElement")) return d;
        return 0 < a.length ? a[0] : b[0]
    };
    Pu = function() {
        var a = document.getElementsByTagName("cast-media-player");
        return 0 < a.length ? a[0] : null
    };
    Ru = function(a, b) {
        return Ag(a.h, b, cast.B.L.ik(a.g && a.g.customNamespaces && a.g.customNamespaces[b] || "JSON"))
    };
    Tu = function() {
        Su || (Su = new R(new Mu));
        return Su
    };
    Wu = function() {
        var a = this;
        this.h = new Bq;
        this.g = Tu();
        if (this.l = this.g.isRemoteControl()) le(Uu, Vg, "App Running as a Remote Control"), this.g.xi("urn:x-cast:com.google.cast.remotecontrol", this.o.bind(this)), this.addEventListener("APPLICATION_CHANGED", function() {
            return Vu(a, new dp)
        })
    };
    Vu = function(a, b) {
        a.g.Uj("urn:x-cast:com.google.cast.remotecontrol", "system-0", b)
    };
    Xu = function() {
        this.g = We();
        this.h = Te([lf(), this.g.g])
    };
    ko = function(a) {
        tk.call(this, a);
        var b = this;
        this.A = Tu().isRemoteControl();
        this.C = cast.B.Cd.F();
        this.A && this.C.addEventListener("MEDIA_STATUS", function(c) {
            c && c.status && c.status[0] && (c = c.status[0], b.o = c.mediaSessionId, b.D(c))
        })
    };
    Yu = function(a, b, c, d) {
        this.name = a;
        this.isRemoteControl = void 0 === d ? !1 : d;
        this.iconUrl = b;
        this.groupName = void 0 === c ? "" : c
    };
    Zu = function() {
        this.applicationData = null;
        this.state = "launching";
        this.isSeeking = !1;
        this.currentTime = this.duration = 0;
        this.playbackRate = 1;
        this.metadata = null;
        this.mediaSessionId = 0;
        this.queueData = this.media = null;
        this.nextThumbnailUrl = this.nextSubtitle = this.nextTitle = this.thumbnailUrl = this.subtitle = this.title = "";
        this.nextMetadata = null;
        this.preloadingNext = !1;
        this.mediaCategory = this.contentType = null;
        this.supportedMediaCommands = 0;
        this.isAtLiveEdge = this.isLive = !1;
        this.sectionDuration = this.sectionStartTimeInMedia =
            this.mediaStartAbsoluteTime = this.liveSeekableRange = null;
        this.breakPercentagePositions = [];
        this.isBreakSkippable = this.isPlayingBreak = !1;
        this.whenSkippable = void 0;
        this.currentBreakClipNumber = this.numberBreakClips = 0;
        this.breakTitle = "";
        this.displayStatus = !1;
        this.displayType = "tv";
        this.customState = this.presentation = null;
        this.activeTrackIds = []
    };
    $u = function(a, b, c) {
        this.type = a;
        this.field = b;
        this.value = c
    };
    av = function() {
        var a = Yc.call(this) || this;
        window.customElements && window.customElements.define && a.createdCallback();
        return a
    };
    cv = function(a, b) {
        if (b) {
            a.l.classList.add("start-animation");
            var c = bv(b);
            a.g = c;
            c.then(function(d) {
                c === a.g && (a.l.classList.remove("start-animation"), d = cast.receiver.J.aa.lb(d.src), a.h.style.backgroundImage = d)
            })
        } else a.h.style.backgroundImage = "", a.g = null
    };
    bv = function(a) {
        var b = new Image;
        b.src = a;
        return b.decode().then(function() {
            return b
        }).catch(function() {
            return b
        })
    };
    gv = function(a) {
        this.l = Tu();
        this.h = this.l.l;
        this.H = cast.B.Cd.F();
        this.C = new Bq;
        this.A = void 0;
        this.O = !1;
        this.N = [];
        this.D = 0;
        this.g = dv(this, a);
        ev(this);
        this.I = this.K = this.M = this.w = this.o = null;
        this.G = new po;
        fv(this)
    };
    dv = function(a, b) {
        return new window.Proxy(b, {
            set: function(c, d, e) {
                if (e === c[d] && "object" != typeof e) return !0;
                c[d] = e;
                c = new $u(d + cast.B.J.ea, d, e);
                a.O ? a.N.push(c) : a.C.dispatchEvent(c);
                return !0
            }
        })
    };
    hv = function(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
            a.O = !0;
            b.apply(null, _.oa(d));
            for (a.O = !1; 0 < a.N.length;) d = a.N.shift(), a.C.dispatchEvent(d)
        }
    };
    iv = function(a, b) {
        b && (a.g.applicationData = new Yu(b.name, b.iconUrl))
    };
    nv = function(a, b) {
        b = (a.g.media = b) || new Uo;
        a: {
            switch ((b.contentType || "").toLowerCase().split("/")[0]) {
                case "image":
                    var c = "image";
                    break a;
                case "audio":
                    c = "audio";
                    break a
            }
            c = "video"
        }
        a.g.contentType = c;
        a.g.mediaCategory = b.mediaCategory || cast.B.media.util.cj(b.contentType || "");
        a.g.isLive = "LIVE" === b.streamType;
        a.g.metadata = b.metadata || null;
        c = b.metadata || {};
        a.g.title = c.title || "";
        a.g.subtitle = c.subtitle || "";
        c = c.images;
        a.g.thumbnailUrl = c && c[0] && c[0].url || "";
        a.D = 0;
        jv(a, kv(a));
        lv(a);
        mv(a, b)
    };
    ov = function(a, b) {
        b ? (a.g.preloadingNext = !0, a.g.nextTitle = b.title || "", a.g.nextSubtitle = b.subtitle || "", a.g.nextThumbnailUrl = b.images && b.images[0] && b.images[0].url || "", a.g.nextMetadata = b) : (a.g.preloadingNext = !1, a.g.nextTitle = "", a.g.nextSubtitle = "", a.g.nextThumbnailUrl = "", a.g.nextMetadata = null)
    };
    pv = function(a, b) {
        return !a || "number" !== typeof b || isNaN(b) || 0 == b ? [] : a.map(function(c) {
            return 0 > c.position ? 100 : Math.min(100, c.position / b * 100)
        })
    };
    qv = function(a) {
        a = a.l.g;
        return !!(a && a.uiConfig && a.uiConfig.useStatusOnlyForUi)
    };
    fv = function(a) {
        a.l.isRemoteControl() ? (a.G.l = hv(a, function() {
            a.g.currentTime = qo(a.G);
            rv(a)
        }), a.H.addEventListener("MEDIA_STATUS", hv(a, function(b) {
            b && b.status && b.status[0] && sv(a, b.status[0])
        })), a.H.addEventListener("APPLICATION_CHANGED", function(b) {
            var c = "",
                d = b.iconUrl,
                e = b.deviceName || "";
            if (b = b.application) c = b.displayName, b = b.appImages, d = d || b && b[0] && b[0].url || "";
            a.g.applicationData = new Yu(c, d, e, !0)
        }), a.H.addEventListener("CUSTOM_STATE", function(b) {
            a.g.customState = b.state
        })) : a.l.Fc() ? tv(a) : a.l.addEventListener("ready",
            function() {
                return tv(a)
            });
        yh(a.l.h).then(function(b) {
            a.g.displayType = b ? "touch" : "tv"
        })
    };
    tv = function(a) {
        iv(a, a.l.Oe());
        uv(a);
        setTimeout(function() {
            "launching" == a.g.state && vv(a, "idle")
        }, 1E3)
    };
    uv = function(a) {
        qv(a) ? (a.h.addEventListener("MEDIA_STATUS", hv(a, function(b) {
            b.mediaStatus && sv(a, b.mediaStatus)
        })), a.G.l = hv(a, function() {
            a.g.currentTime = qo(a.G);
            rv(a)
        })) : (a.h.addEventListener("MEDIA_FINISHED", hv(a, function(b) {
            "INTERRUPTED" === b.endedReason ? vv(a, "loading") : vv(a, "idle");
            wv(a);
            ov(a, void 0)
        })), a.h.addEventListener("PLAYER_LOADING", hv(a, function(b) {
            ov(a, void 0);
            nv(a, b.media);
            "IMAGE" === a.g.mediaCategory ? vv(a, "playing") : vv(a, "loading")
        })), a.h.addEventListener("PLAYER_LOAD_COMPLETE", hv(a, function(b) {
            nv(a,
                b.media);
            "PAUSED" == a.h.getPlayerState() && vv(a, "paused");
            xv(a);
            yv(a, b.media, a.h.getLiveSeekableRange())
        })), a.h.addEventListener("MEDIA_INFORMATION_CHANGED", hv(a, function(b) {
            nv(a, b.media)
        })), a.h.addEventListener("PLAYING", hv(a, function() {
            return vv(a, "playing")
        })), a.h.addEventListener("PAUSE", hv(a, function(b) {
            b.ended ? ov(a, void 0) : vv(a, "paused")
        })), a.h.addEventListener("BUFFERING", hv(a, function(b) {
            b.isBuffering ? vv(a, "buffering") : "buffering" === a.g.state && vv(a, "playing")
        })), a.h.addEventListener("SEEKING",
            hv(a, function() {
                a.g.isSeeking = !0;
                jv(a, kv(a));
                xv(a);
                ov(a, void 0)
            })), a.h.addEventListener("SEEKED", hv(a, function() {
            a.g.isSeeking = !1;
            jv(a, kv(a));
            xv(a)
        })), a.h.addEventListener("BREAK_STARTED", hv(a, function(b) {
            return zv(a, b)
        })), a.h.addEventListener("BREAK_ENDED", hv(a, function(b) {
            return zv(a, b)
        })), a.h.addEventListener("BREAK_CLIP_LOADING", hv(a, function(b) {
            return zv(a, b)
        })), a.h.addEventListener("BREAK_CLIP_STARTED", hv(a, function(b) {
            return zv(a, b)
        })), a.h.addEventListener("BREAK_CLIP_ENDED", hv(a, function(b) {
            return zv(a,
                b)
        })), a.h.addEventListener("DURATION_CHANGE", hv(a, function() {
            return xv(a)
        })), a.h.addEventListener("TIME_UPDATE", hv(a, function() {
            return xv(a)
        })), a.h.addEventListener("REQUEST_DISPLAY_STATUS", hv(a, function() {
            "VIDEO" === a.g.mediaCategory && jv(a, !0)
        })), a.h.addEventListener("REQUEST_PLAY", function() {
            "VIDEO" === a.g.mediaCategory && "playing" === a.g.state && jv(a, !0)
        }), a.h.addEventListener("PLAYER_PRELOADING", hv(a, function(b) {
            ov(a, b.media.metadata)
        })), a.h.addEventListener("MEDIA_STATUS", hv(a, function(b) {
            b.mediaStatus &&
                Av(a, b.mediaStatus)
        })), a.h.addEventListener("CUSTOM_STATE", function(b) {
            a.g.customState = b.state
        }), a.l.addEventListener("ready", function() {
            return tv(a)
        }))
    };
    Av = function(a, b) {
        b.extendedStatus && (b = _.rb(b), Object.assign(b, b.extendedStatus));
        a.g.mediaSessionId !== b.mediaSessionId ? (a.g.mediaSessionId = b.mediaSessionId, nv(a, b.media), a.g.queueData = b.queueData) : (b.queueData && (a.g.queueData = b.queueData), b.media && nv(a, b.media));
        "number" === typeof b.supportedMediaCommands && (a.g.supportedMediaCommands = b.supportedMediaCommands);
        if (b.liveSeekableRange) {
            var c = b.liveSeekableRange;
            a.g.isLive && (wv(a), Bv(a) ? (a.g.liveSeekableRange = c, Cv(a), Dv(a)) : a.g.liveSeekableRange = null)
        }
        a.g.activeTrackIds =
            b.activeTrackIds || [];
        switch (b.playerState) {
            case "PLAYING":
                vv(a, "playing");
                break;
            case "PAUSED":
                vv(a, "paused");
                break;
            case "BUFFERING":
                vv(a, "buffering");
                break;
            case "IDLE":
                vv(a, "idle");
                break;
            case "LOADING":
                vv(a, "loading")
        }
        Ev(a)
    };
    sv = function(a, b) {
        Av(a, b);
        var c = b.breakStatus,
            d = a.g.media,
            e = a.G,
            f = cast.B.L.Rq(b),
            g = cast.receiver.J.aa.hj(f.breakStatus),
            k = g ? f.breakStatus.currentBreakClipTime : f.currentTime;
        k = k || 0;
        cast.receiver.J.aa.ld(k) ? (e.o = Number(k), e.w = Date.now(), e.l()) : e.h && (e.o += (Date.now() - e.w) / 1E3 * e.A, e.w = Date.now(), e.l(), "IDLE" !== f.playerState && (e.g || _.H(Fv, "currentTime was not synchronized from Media Status. Possible incorrect progress bar position")));
        "PLAYING" === f.playerState ? ro(e) : (e.h = !1, clearInterval(e.H));
        e.A = !g &&
            cast.receiver.J.aa.ld(f.playbackRate) ? f.playbackRate : 1;
        a.g.isPlayingBreak = !!Gv(c);
        e = Hv(c, d);
        f = Iv(c, d);
        a: {
            if (a.g.isPlayingBreak) {
                if (!f) {
                    _.G(Jv, "Break clip data is not found for currently playing break.");
                    d = void 0;
                    break a
                }
                d = f.duration
            } else {
                if (!d) {
                    d = void 0;
                    break a
                }
                d = d.duration
            }
            cast.receiver.J.aa.ld(d) || (_.H(Jv, "Duration is not a valid number. Duration: " + d), d = void 0)
        }
        a.g.isPlayingBreak ? (jv(a, !1, !0), a.g.breakTitle = f && f.title || "") : a.g.breakTitle = "";
        a.g.duration = void 0 === d ? 0 : d;
        lv(a);
        a.A = Gv(c) ? c.whenSkippable :
            void 0;
        rv(a);
        a.g.numberBreakClips = e && _.Ia(e.breakClipIds) ? e.breakClipIds.length : 0;
        e && f ? (c = e.breakClipIds.indexOf(f.id), c = 0 > c ? 0 : c + 1) : c = 0;
        a.g.currentBreakClipNumber = c;
        b.media && yv(a, b.media, b.liveSeekableRange)
    };
    Bv = function(a) {
        return !!(a.g.supportedMediaCommands & 2)
    };
    kv = function(a) {
        if (a.g.isPlayingBreak) return !1;
        if ("AUDIO" === a.g.mediaCategory || "VIDEO" === a.g.mediaCategory && a.g.applicationData && a.g.applicationData.isRemoteControl) switch (a.g.state) {
            case "playing":
            case "loading":
            case "buffering":
            case "paused":
                return !0;
            default:
                return !1
        }
        if ("VIDEO" === a.g.mediaCategory) switch (a.g.state) {
            case "loading":
                return !0;
            case "buffering":
            case "playing":
            case "paused":
                return a.g.isSeeking
        }
        return !1
    };
    vv = function(a, b) {
        a.g.state != b && (a.g.state = b, "VIDEO" !== a.g.mediaCategory || "paused" !== b || a.g.isPlayingBreak ? jv(a, kv(a)) : jv(a, !0))
    };
    zv = function(a, b) {
        "BREAK_STARTED" == b.type ? (a.g.isPlayingBreak = !0, jv(a, !1, !0)) : "BREAK_ENDED" == b.type && (a.g.isPlayingBreak = !1);
        if (a.g.isPlayingBreak) {
            a.g.numberBreakClips = b.total || 0;
            a.g.currentBreakClipNumber = b.index || 0;
            a.A = b.whenSkippable;
            var c = (a.g.media && a.g.media.breakClips || []).find(function(d) {
                return d.id == b.breakClipId
            });
            a.g.breakTitle = c && c.title || ""
        } else a.A = void 0, a.g.numberBreakClips = 0, a.g.currentBreakClipNumber = 0, a.g.breakTitle = "";
        xv(a)
    };
    mv = function(a, b) {
        a.g.mediaStartAbsoluteTime = b.startAbsoluteTime || null;
        b.metadata ? (a.g.sectionStartTimeInMedia = "number" === typeof b.metadata.sectionStartTimeInMedia ? b.metadata.sectionStartTimeInMedia : null, a.g.sectionDuration = b.metadata.sectionDuration || null) : (a.g.sectionStartTimeInMedia = null, a.g.sectionDuration = null)
    };
    yv = function(a, b, c) {
        b && (a.g.isLive = "LIVE" == b.streamType, mv(a, b), a.g.isLive && Bv(a) && c && "number" === typeof c.start && "number" === typeof c.end ? (a.g.liveSeekableRange = c, Cv(a), Dv(a)) : a.g.liveSeekableRange = null)
    };
    Ev = function(a) {
        a.g.isAtLiveEdge = a.g.isLive ? Bv(a) ? "number" === typeof a.g.currentTime && a.g.liveSeekableRange ? 10 > Math.abs(a.g.currentTime - a.g.liveSeekableRange.end) : !1 : "PLAYING" === a.h.getPlayerState() : !1
    };
    Dv = function(a) {
        clearTimeout(a.w);
        a.w = null;
        if (a.g.isLive && Bv(a) && a.g.liveSeekableRange) {
            var b = (0, _.M)() / 1E3 - a.M;
            a.g.liveSeekableRange.isMovingWindow && (a.g.liveSeekableRange.start = a.K + b);
            a.g.liveSeekableRange.isLiveDone || (a.g.liveSeekableRange.end = a.I + b);
            Ev(a);
            a.C.dispatchEvent(new $u(Kv, "liveSeekableRange", a.g.liveSeekableRange));
            a.w = setTimeout(function() {
                Dv(a)
            }, 500)
        }
    };
    Cv = function(a) {
        a.K = a.g.liveSeekableRange.start;
        a.I = a.g.liveSeekableRange.end;
        a.M = (0, _.M)() / 1E3
    };
    wv = function(a) {
        null != a.w && (clearTimeout(a.w), a.w = null, a.M = null, a.K = null, a.I = null)
    };
    xv = function(a) {
        if (a.g.isPlayingBreak) {
            a.g.duration = a.h.Ib() || 0;
            var b = a.h.Xa();
            null !== b && (a.g.currentTime = b)
        } else a.g.duration = a.h.getDurationSec() || 0, a.g.currentTime = a.h.getCurrentTimeSec() || 0, Ev(a);
        lv(a);
        rv(a);
        Dv(a)
    };
    lv = function(a) {
        a.g.isPlayingBreak ? (a.g.breakPercentagePositions = [], a.D = 0) : a.D != a.g.duration && (a.g.breakPercentagePositions = pv(a.g.media && a.g.media.breaks, a.g.duration), a.D = a.g.duration)
    };
    rv = function(a) {
        if ("number" === typeof a.A && 0 <= a.A) {
            var b = a.A - a.g.currentTime;
            0 < b ? (a.g.whenSkippable = b, a.g.isBreakSkippable = !1) : (a.g.whenSkippable = 0, a.g.isBreakSkippable = !0)
        } else a.g.whenSkippable = void 0, a.g.isBreakSkippable = !1
    };
    jv = function(a, b, c) {
        if (b || !a.o || (void 0 === c ? 0 : c))
            if (null !== a.o && (clearTimeout(a.o), a.o = null), a.g.displayStatus = b) a.o = setTimeout(function() {
                a.g.displayStatus = kv(a);
                a.o = null
            }, 5E3)
    };
    ev = function(a) {
        var b = Lv;
        if (b) {
            var c = a.g;
            Object.keys(b).forEach(function(d) {
                return c[d] = b[d]
            })
        } else a.g.supportedMediaCommands = a.h.Bc()
    };
    Hv = function(a, b) {
        return Gv(a) ? (b && b.breaks || []).find(function(c) {
            return c.id === a.breakId
        }) || null : null
    };
    Iv = function(a, b) {
        return Gv(a) ? (b && b.breakClips || []).find(function(c) {
            return c.id === a.breakClipId
        }) || null : null
    };
    Gv = function(a) {
        return cast.receiver.J.aa.hj(a)
    };
    Mv = function(a) {
        this.h = a;
        this.D = window.getComputedStyle(this.h);
        this.g = []
    };
    Nv = function(a) {
        a.G = setTimeout(function() {
            void 0 !== a.o && a.g[a.o].classList.remove("visible")
        }, a.w)
    };
    Ov = function(a) {
        return a.h && a.h.children ? Array.from(a.h.children).filter(function(b) {
            var c = window.getComputedStyle(b).backgroundImage;
            if (c && "none" !== c) return b
        }) : []
    };
    Qv = function(a, b) {
        a = a.D.getPropertyValue(b) || "";
        a = a.toLocaleLowerCase().trim();
        var c = parseFloat(a);
        switch (a.replace(/[-+.0-9]/g, "").trim()) {
            case "ms":
                return c;
            case "s":
                return 1E3 * c;
            default:
                return _.G(Pv, "Cannot parse value " + a + " of CSS style " + b), 0
        }
    };
    Rv = function() {
        this.type = "changed"
    };
    $v = function(a) {
        var b = this;
        this.h = new Bq;
        this.g = a;
        this.g.addEventListener(Sv, function() {
            Tv(b)
        });
        this.g.addEventListener(Uv, function() {
            Tv(b)
        });
        this.g.addEventListener(Vv, function() {
            Tv(b)
        });
        this.g.addEventListener(Wv, function() {
            Tv(b)
        });
        this.g.addEventListener(Xv, function() {
            Tv(b)
        });
        this.g.addEventListener(Yv, function() {
            Tv(b)
        });
        this.g.addEventListener(Kv, function() {
            Tv(b)
        });
        this.g.addEventListener(Zv, function() {
            Tv(b)
        })
    };
    Tv = function(a) {
        a.h.dispatchEvent(new Rv)
    };
    aw = function(a) {
        var b = a.g.g;
        a = Bv(a.g);
        return b.isPlayingBreak ? 0 : "number" === typeof b.sectionStartTimeInMedia ? b.sectionStartTimeInMedia : a && b.liveSeekableRange && b.liveSeekableRange.start ? b.liveSeekableRange.start : 0
    };
    bw = function(a) {
        a = a.g.g;
        return !a.isPlayingBreak && "number" === typeof a.mediaStartAbsoluteTime
    };
    cw = function(a) {
        a = a.g.g.currentTime - aw(a);
        return 0 <= a ? a : 0
    };
    dw = function(a) {
        var b = a.g.g,
            c = bw(a),
            d = cw(a);
        return Bv(a.g) && b.isLive && !b.isPlayingBreak && b.liveSeekableRange && "number" !== typeof b.sectionStartTimeInMedia && !c ? cast.receiver.J.aa.Ra(b.currentTime) : c ? cast.receiver.J.aa.qg(b.mediaStartAbsoluteTime + b.currentTime) : cast.receiver.J.aa.Ra(d)
    };
    ew = function(a) {
        a = a.g.g;
        return 0 < a.duration || "loading" === a.state || "number" === typeof a.sectionStartTimeInMedia && !!a.sectionDuration
    };
    fw = function(a) {
        var b = a.g.g,
            c = Bv(a.g);
        a = aw(a);
        return b.isPlayingBreak ? b.duration : "number" === typeof b.sectionStartTimeInMedia && b.sectionDuration ? b.sectionDuration : c && b.isLive && b.liveSeekableRange && b.liveSeekableRange.end ? b.liveSeekableRange.end - a : b.isLive ? -1 : b.duration - a
    };
    gw = function(a) {
        if (!ew(a)) return "";
        var b = a.g.g,
            c = fw(a);
        return bw(a) ? cast.receiver.J.aa.qg(b.mediaStartAbsoluteTime + b.sectionStartTimeInMedia + b.sectionDuration) : cast.receiver.J.aa.Ra(c)
    };
    hw = function(a) {
        var b = a.g.g;
        a = Bv(a.g);
        return b.isPlayingBreak || !b.isLive || (!a || !b.liveSeekableRange) && "number" === typeof b.sectionStartTimeInMedia && !!b.sectionDuration
    };
    iw = function(a) {
        if (!hw(a)) return null;
        a = aw(a);
        return 0 > a ? 0 - a : 0
    };
    jw = function(a) {
        var b = a.g.g;
        return Bv(a.g) && b.isLive && !b.isPlayingBreak && !!b.liveSeekableRange
    };
    kw = function(a) {
        if (!jw(a)) return null;
        var b = a.g.g,
            c = aw(a);
        a = fw(a);
        return new qp(Math.min(Math.max(0, b.liveSeekableRange.start - c), a), Math.min(Math.max(0, b.liveSeekableRange.end - c), a), b.liveSeekableRange.isMovingWindow, b.liveSeekableRange.isLiveDone)
    };
    lw = function(a) {
        var b = kw(a);
        return b ? b.start / fw(a) * 100 : 0
    };
    mw = function(a) {
        var b = kw(a);
        return b ? (cw(a) - b.start) / fw(a) * 100 : 0
    };
    nw = function(a) {
        var b = kw(a);
        return b ? (b.end - b.start) / fw(a) * 100 : 0
    };
    ow = function() {
        var a = Yc.call(this) || this;
        window.customElements && window.customElements.define && a.createdCallback();
        return a
    };
    pw = function(a, b) {
        if (b) {
            a.h.setAttribute("isRemoteControl", b.isRemoteControl);
            var c = a.h.querySelector(".logo"),
                d = window.getComputedStyle(c, null);
            "none" == d.backgroundImage && (c.textContent = b.name);
            c = a.h.querySelector(".splash");
            "none" == window.getComputedStyle(c, null).backgroundImage && ("none" == d.backgroundImage ? c.textContent = b.name : c.classList.add("logo"));
            var e = a.h.querySelector(".playback-logo");
            "none" === window.getComputedStyle(e, null).backgroundImage && (b.iconUrl ? (a = new Image, a.src = b.iconUrl, a.decode().then(function() {
                e.style.backgroundImage =
                    cast.receiver.J.aa.lb(b.iconUrl);
                e.classList.add("app-icon");
                e.textContent = ""
            }, function() {
                e.textContent = b.name;
                e.style.backgroundImage = "";
                e.classList.remove("app-icon")
            })) : (e.textContent = b.name, e.style.backgroundImage = "", e.classList.remove("app-icon")))
        }
    };
    qw = function(a, b) {
        b ? a.style.content = cast.receiver.J.aa.lb(b) : a.style.removeProperty("content")
    };
    rw = function(a) {
        var b = a.g.applicationData;
        a.wc.textContent = a.A ? a.A : "touch" === a.g.displayType ? cast.receiver.V.dc(cast.receiver.V.ni, {
            APP_NAME: b && b.name || ""
        }) : ""
    };
    sw = function(a) {
        for (var b; b = a.lastChild;) a.removeChild(b)
    };
    tw = function(a, b) {
        if (b) {
            var c = document.createElement("span");
            c.innerText = b;
            a.appendChild(c)
        }
    };
    uw = function(a, b, c) {
        0 < c ? a.R.innerText = 1 < c ? cast.receiver.V.Vi(b, c) : "" : (a.R.innerText = "", a.U.innerText = "")
    };
    vw = function(a) {
        var b = Math.floor(a.g.duration) - Math.floor(a.g.currentTime);
        0 > b && (b = 0);
        b = cast.receiver.J.aa.Ra(b);
        1 < a.g.numberBreakClips && (b = "(" + b + ")");
        a.U.innerText = b;
        void 0 === a.g.whenSkippable ? (L(a.G, !1), L(a.C, !1)) : 0 < a.g.whenSkippable ? (a.C.innerText = cast.receiver.V.Ti(cast.receiver.J.aa.Ra(a.g.whenSkippable, !0)), L(a.G, !1), L(a.C, !0)) : (L(a.G, !0), L(a.C, !1))
    };
    ww = function(a, b) {
        for (var c = _.p(a.I.querySelectorAll(".breakMarker")), d = c.next(); !d.done; d = c.next()) d.value.remove();
        if (b) {
            var e = b.length - 1;
            b.forEach(function(f, g) {
                var k = document.createElement("div");
                k.classList.add("breakMarker");
                k.style.left = f + "%";
                a.I.appendChild(k);
                g === e && (f = a.I.getBoundingClientRect().right, k.getBoundingClientRect().right >= f && (k.style.left = "", k.style.right = "0"))
            })
        }
    };
    xw = function(a, b, c) {
        a.H.addEventListener(b, c);
        c()
    };
    yw = function(a) {
        Array.prototype.forEach.call(a.h.getElementsByClassName("breakIcon"), function(b) {
            return b.dataset.adLabel = cast.receiver.V.ki
        });
        Array.prototype.forEach.call(a.h.getElementsByClassName("liveLabel"), function(b) {
            return b.dataset.liveLabel = cast.receiver.V.Xf
        });
        a.G.innerText = "Skip from your device"
    };
    zw = function(a, b) {
        b ? (a.h.setAttribute("isSeeking", !0), a.o = new Xu, a.o.then(function() {
            a.h.setAttribute("isSeeking", !1)
        })) : a.o && (a.o.resolve(), a.o = null)
    };
    Aw = function(a, b) {
        return a.shadowRoot.getElementById(b)
    };
    Qw = function(a) {
        Tn.call(this, a);
        var b = this;
        a = document.querySelector("cast-media-player");
        this.h = new Zu;
        this.O = new gv(this.h);
        this.K = a;
        this.Y = cast.B.Cd.F();
        this.R = new $v(this.O);
        this.R.addEventListener("changed", function() {
            var c = b.R;
            b.g.g.O = aw(c);
            b.g.g.U = b.h.mediaStartAbsoluteTime;
            L(b.g.g.H, ew(c));
            Ln(b.g, fw(c), gw(c));
            var d = jw(c),
                e = b.g.g;
            L(e.M, d);
            L(e.da, d);
            if (d) {
                d = b.g.g;
                e = cast.B.L.hk(kw(c));
                var f = lw(c),
                    g = mw(c),
                    k = nw(c);
                d.h || (d.g.min = e.start, d.Ca = parseFloat(d.g.min), Jk(d, e.end), d.da.style.left = f + "%", d.da.style.width =
                    g + "%", d.M.style.left = f + "%", d.M.style.width = k + "%", d.g.style.left = f + "%", d.g.style.width = k + "%")
            }
            d = hw(c);
            L(b.g.g.K, d);
            d && (d = b.g.g, d.w = iw(c), Gk(d, d.g.value));
            Kn(b.g, cw(c) || 0, dw(c))
        });
        Bw(this, Cw, function() {
            if (b.h.media) {
                var c = cast.B.L.Oc(b.h.media);
                Zn(b, c, b.h.supportedMediaCommands);
                bo(b, c);
                co(b, c.tracks, b.h.activeTrackIds)
            }
        });
        Bw(this, Dw, function() {
            if (b.h.queueData) {
                var c = cast.B.L.Tq(b.h.queueData);
                c.repeatMode && vk(b.H, c.repeatMode);
                Ak(b.I, !!c.shuffle)
            } else vk(b.H, "REPEAT_OFF"), Ak(b.I, !1)
        });
        Bw(this, Ew,
            function() {
                b.h.media && co(b, b.h.media.tracks ? cast.B.L.kk(b.h.media.tracks) : void 0, b.h.activeTrackIds)
            });
        Bw(this, Fw, function() {
            ao(b, b.h.metadata)
        });
        Bw(this, Zv, function() {
            b.h.media && Zn(b, cast.B.L.Oc(b.h.media), b.h.supportedMediaCommands)
        });
        Bw(this, Gw, function() {
            Mn(b.g, Hw[b.h.state] || "IDLE")
        });
        Bw(this, Iw, function() {
            var c = b.g,
                d = b.h.isPlayingBreak,
                e = c.l,
                f;
            for (f in e.o) L(e.o[f].g, !d);
            Uh(e);
            e = c.D;
            L(e.o, !d);
            L(e.l, !d);
            L(e.h, d);
            e = c.C;
            e.l = d;
            L(e, d);
            e.l && jg(e);
            e = c.g;
            e.K.classList.toggle("break", d);
            e.W = d;
            Lk(e);
            L(e.C, Ik(e));
            e.l.classList.toggle("live", Ik(e));
            c.o.Wc()
        });
        Bw(this, Jw, function() {
            b.g.D.h.innerText = b.h.breakTitle || ""
        });
        Bw(this, Kw, function() {
            Kk(b.g.g, b.h.breakPercentagePositions)
        });
        Bw(this, Sv, function() {
            var c = b.g.g;
            c.R = b.h.isLive;
            L(c.C, Ik(c));
            c.l.classList.toggle("live", Ik(c))
        });
        Bw(this, Kv, function() {
            b.h.media && Zn(b, cast.B.L.Oc(b.h.media), b.h.supportedMediaCommands)
        });
        Bw(this, Lw, function() {
            b.g.g.C.classList.toggle("live-edge", b.h.isAtLiveEdge)
        });
        Bw(this, Mw, function() {
            var c = b.g,
                d = c.C,
                e = b.h.whenSkippable;
            void 0 === e ? (Df(d.g, !1), L(d.g, !1), L(d.h, !1)) : 0 < e ? (Df(d.g, !1), L(d.g, !1), L(d.h, !0), d.K.textContent = cast.receiver.V.Ti(cast.receiver.J.aa.Ra(e, !0))) : (Df(d.g, !0), L(d.g, !0), L(d.h, !1));
            c.o.Wc()
        });
        Bw(this, Nw, function() {
            if (b.h.applicationData) {
                var c = b.h.applicationData,
                    d = c.name,
                    e = c.iconUrl;
                b.W = d;
                var f = b.g;
                Fn(f.D, d, e);
                pm(f.w, e);
                f.h && $c(f.h, d, e);
                d = b.g;
                c = !!c.isRemoteControl;
                d.o.zj(c);
                d = d.l;
                d.H = c;
                Uh(d);
                ao(b, b.h.metadata)
            }
        });
        Bw(this, Ow, function() {
            kg(b.g.C, b.h.currentBreakClipNumber, b.h.numberBreakClips)
        });
        Bw(this,
            Pw,
            function() {
                kg(b.g.C, b.h.currentBreakClipNumber, b.h.numberBreakClips)
            });
        this.Y.addEventListener("APPLICATION_CHANGED", function(c) {
            var d, e = On();
            3 === c.playbackType && 1 === e.rj && 44 > e.sj ? d = "" : d = c.deviceName || "";
            e = b.g.l;
            e.h && Mh(e.h, d, !0);
            d = b.g.l;
            c = 5 === c.playbackType;
            d.classList.toggle("bluetooth", !!c);
            L(d.C.g, c)
        });
        this.K && this.g.A.classList.toggle("hidden-audio-scrim", !0)
    };
    Bw = function(a, b, c) {
        a.O.addEventListener(b, c);
        c()
    };
    Xn = function(a, b, c) {
        return a.h.isLive ? !!a.h.liveSeekableRange : c ? !!(b & 2) && !isNaN(c.duration) && Infinity !== c.duration && 0 < c.duration : !1
    };
    Rw = function() {
        mo.apply(this, arguments)
    };
    Tw = function() {
        var a = this;
        this.l = _.zg.F();
        this.g = null;
        this.h = new cm;
        uf() ? (_.I(Sw, "D-Pad UI is rendered."), this.g = new Qw(!0), this.h.resolve(!0), cast.B.J.kl.F().o = !0) : zh(this.l).then(function(b) {
            _.I(Sw, "Controls type is " + b);
            "touch-optimized" === b ? (a.g = new Qw(!0), a.h.resolve(!0)) : (a.h.resolve(!1), "non-touch-optimized" === b && (a.g = new Qw(!1)))
        })
    };
    Uw = function(a, b) {
        Ba(new za(new va(function(c) {
            if (1 == c.g) return ua(c, a.h.g);
            c.A && b.call(a);
            c.g = 0
        })))
    };
    Vw = function() {};
    _.ba = [];
    ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    };
    ha = ea(this);
    ka.prototype.toString = function() {
        return this.g
    };
    var ia = function() {
            function a(c) {
                if (this instanceof a) throw new TypeError("Symbol is not a constructor");
                return new ka("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }
            var b = 0;
            return a
        }(),
        pa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        Ww;
    if ("function" == typeof Object.setPrototypeOf) Ww = Object.setPrototypeOf;
    else {
        var Xw;
        a: {
            var Yw = {
                    Fm: !0
                },
                Zw = {};
            try {
                Zw.__proto__ = Yw;
                Xw = Zw.Fm;
                break a
            } catch (a) {}
            Xw = !1
        }
        Ww = Xw ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = Ww;
    ra.prototype.w = function(a) {
        this.A = a
    };
    ra.prototype.return = function(a) {
        this.l = {
            return: a
        };
        this.g = this.C
    };
    Aa("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.l = void 0;
            this.g = [];
            var k = this.o();
            try {
                g(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        }

        function c() {
            this.g = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(k) {
                k(g)
            })
        }
        if (a) return a;
        c.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var k = this;
                this.l(function() {
                    k.w()
                })
            }
            this.g.push(g)
        };
        var e = ha.setTimeout;
        c.prototype.l = function(g) {
            e(g, 0)
        };
        c.prototype.w = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var k = 0; k < g.length; ++k) {
                    var l =
                        g[k];
                    g[k] = null;
                    try {
                        l()
                    } catch (m) {
                        this.o(m)
                    }
                }
            }
            this.g = null
        };
        c.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        };
        b.prototype.o = function() {
            function g(m) {
                return function(n) {
                    l || (l = !0, m.call(k, n))
                }
            }
            var k = this,
                l = !1;
            return {
                resolve: g(this.H),
                reject: g(this.w)
            }
        };
        b.prototype.H = function(g) {
            if (g === this) this.w(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.I(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var k = null != g;
                        break a;
                    case "function":
                        k = !0;
                        break a;
                    default:
                        k = !1
                }
                k ? this.D(g) : this.A(g)
            }
        };
        b.prototype.D = function(g) {
            var k = void 0;
            try {
                k = g.then
            } catch (l) {
                this.w(l);
                return
            }
            "function" == typeof k ? this.K(k, g) : this.A(g)
        };
        b.prototype.w = function(g) {
            this.C(2, g)
        };
        b.prototype.A = function(g) {
            this.C(1, g)
        };
        b.prototype.C = function(g, k) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + k + "): Promise already settled in state" + this.h);
            this.h = g;
            this.l = k;
            this.G()
        };
        b.prototype.G = function() {
            if (null != this.g) {
                for (var g = 0; g < this.g.length; ++g) f.h(this.g[g]);
                this.g = null
            }
        };
        var f = new c;
        b.prototype.I = function(g) {
            var k = this.o();
            g.Ce(k.resolve, k.reject)
        };
        b.prototype.K = function(g, k) {
            var l = this.o();
            try {
                g.call(k, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        b.prototype.then = function(g, k) {
            function l(r, x) {
                return "function" == typeof r ? function(y) {
                    try {
                        m(r(y))
                    } catch (D) {
                        n(D)
                    }
                } : x
            }
            var m, n, u = new b(function(r, x) {
                m = r;
                n = x
            });
            this.Ce(l(g, m), l(k, n));
            return u
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.Ce = function(g, k) {
            function l() {
                switch (m.h) {
                    case 1:
                        g(m.l);
                        break;
                    case 2:
                        k(m.l);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            m.h);
                }
            }
            var m = this;
            null == this.g ? f.h(l) : this.g.push(l)
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(k, l) {
                l(g)
            })
        };
        b.race = function(g) {
            return new b(function(k, l) {
                for (var m = _.p(g), n = m.next(); !n.done; n = m.next()) d(n.value).Ce(k, l)
            })
        };
        b.all = function(g) {
            var k = _.p(g),
                l = k.next();
            return l.done ? d([]) : new b(function(m, n) {
                function u(y) {
                    return function(D) {
                        r[y] = D;
                        x--;
                        0 == x && m(r)
                    }
                }
                var r = [],
                    x = 0;
                do r.push(void 0), x++, d(l.value).Ce(u(r.length - 1), n), l = k.next(); while (!l.done)
            })
        };
        return b
    });
    Aa("globalThis", function(a) {
        return a || ha
    });
    Aa("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Ca(this, b, c).fj
        }
    });
    Aa("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Ca(this, b, c).pk
        }
    });
    Aa("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Da(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    Aa("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Da(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    Aa("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Da(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    Aa("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    Aa("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    Aa("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Da(this, b, "includes").indexOf(b, c || 0)
        }
    });
    var $w = function() {
        function a() {
            function c() {}
            new c;
            Reflect.construct(c, [], function() {});
            return new c instanceof c
        }
        if ("undefined" != typeof Reflect && Reflect.construct) {
            if (a()) return Reflect.construct;
            var b = Reflect.construct;
            return function(c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c
            }
        }
        return function(c, d, e) {
            void 0 === e && (e = c);
            e = pa(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }();
    Aa("Reflect.construct", function() {
        return $w
    });
    Aa("Object.setPrototypeOf", function(a) {
        return a || qa
    });
    Aa("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    Aa("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    Aa("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Ea(b, d) && c.push(b[d]);
            return c
        }
    });
    Aa("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(k) {
                return k
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    Aa("WeakMap", function(a) {
        function b(l) {
            this.g = (k += Math.random() + 1).toString();
            if (l) {
                l = _.p(l);
                for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        }

        function c() {}

        function d(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }

        function e(l) {
            if (!Ea(l, g)) {
                var m = new c;
                ja(l, g, {
                    value: m
                })
            }
        }

        function f(l) {
            var m = Object[l];
            m && (Object[l] = function(n) {
                if (n instanceof c) return n;
                e(n);
                return m(n)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        m = Object.seal({}),
                        n = new a([
                            [l,
                                2
                            ],
                            [m, 3]
                        ]);
                    if (2 != n.get(l) || 3 != n.get(m)) return !1;
                    n.delete(l);
                    n.set(m, 4);
                    return !n.has(l) && 4 == n.get(m)
                } catch (u) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var k = 0;
        b.prototype.set = function(l, m) {
            if (!d(l)) throw Error("Invalid WeakMap key");
            e(l);
            if (!Ea(l, g)) throw Error("WeakMap key fail: " + l);
            l[g][this.g] = m;
            return this
        };
        b.prototype.get = function(l) {
            return d(l) && Ea(l, g) ? l[g][this.g] : void 0
        };
        b.prototype.has = function(l) {
            return d(l) && Ea(l, g) && Ea(l[g],
                this.g)
        };
        b.prototype.delete = function(l) {
            return d(l) && Ea(l, g) && Ea(l[g], this.g) ? delete l[g][this.g] : !1
        };
        return b
    });
    Aa("Map", function(a) {
        function b() {
            var k = {};
            return k.Vb = k.next = k.head = k
        }

        function c(k, l) {
            var m = k.g;
            return ma(function() {
                if (m) {
                    for (; m.head != k.g;) m = m.Vb;
                    for (; m.next != m.head;) return m = m.next, {
                        done: !1,
                        value: l(m)
                    };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(k, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? f.has(l) ? m = f.get(l) : (m = "" + ++g, f.set(l, m)) : m = "p_" + l;
            var n = k.h[m];
            if (n && Ea(k.h, m))
                for (k = 0; k < n.length; k++) {
                    var u = n[k];
                    if (l !== l && u.key !== u.key || l === u.key) return {
                        id: m,
                        list: n,
                        index: k,
                        Pa: u
                    }
                }
            return {
                id: m,
                list: n,
                index: -1,
                Pa: void 0
            }
        }

        function e(k) {
            this.h = {};
            this.g = b();
            this.size = 0;
            if (k) {
                k = _.p(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var k = Object.seal({
                            x: 4
                        }),
                        l = new a(_.p([
                            [k, "s"]
                        ]));
                    if ("s" != l.get(k) || 1 != l.size || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || 2 != l.size) return !1;
                    var m = l.entries(),
                        n = m.next();
                    if (n.done || n.value[0] != k || "s" != n.value[1]) return !1;
                    n = m.next();
                    return n.done || 4 != n.value[0].x ||
                        "t" != n.value[1] || !m.next().done ? !1 : !0
                } catch (u) {
                    return !1
                }
            }()) return a;
        na();
        var f = new WeakMap;
        e.prototype.set = function(k, l) {
            k = 0 === k ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this.h[m.id] = []);
            m.Pa ? m.Pa.value = l : (m.Pa = {
                next: this.g,
                Vb: this.g.Vb,
                head: this.g,
                key: k,
                value: l
            }, m.list.push(m.Pa), this.g.Vb.next = m.Pa, this.g.Vb = m.Pa, this.size++);
            return this
        };
        e.prototype.delete = function(k) {
            k = d(this, k);
            return k.Pa && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.h[k.id], k.Pa.Vb.next = k.Pa.next, k.Pa.next.Vb = k.Pa.Vb,
                k.Pa.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.h = {};
            this.g = this.g.Vb = b();
            this.size = 0
        };
        e.prototype.has = function(k) {
            return !!d(this, k).Pa
        };
        e.prototype.get = function(k) {
            return (k = d(this, k).Pa) && k.value
        };
        e.prototype.entries = function() {
            return c(this, function(k) {
                return [k.key, k.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(k) {
                return k.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(k) {
                return k.value
            })
        };
        e.prototype.forEach = function(k, l) {
            for (var m = this.entries(),
                    n; !(n = m.next()).done;) n = n.value, k.call(l, n[1], n[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });
    var ax = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Ea(d, e) && (a[e] = d[e])
        }
        return a
    };
    Aa("Object.assign", function(a) {
        return a || ax
    });
    Aa("Set", function(a) {
        function b(c) {
            this.g = new Map;
            if (c) {
                c = _.p(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.p([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        na();
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return this.g.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    Aa("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    Aa("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    Jo = Jo || {};
    _.t = this || self;
    La = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Ma = 0;
    _.M = Date.now || function() {
        return +new Date
    };
    _.t.cast = _.t.cast || {};
    cast = _.t.cast;
    cast.il = !1;
    cast.platform = {};
    cast.platform.metrics = {};
    cast.platform.metrics.Td = function() {
        return !(!cast.__platform__ || !cast.__platform__.metrics)
    };
    cast.platform.metrics.logBoolToUma = function(a, b) {
        cast.platform.metrics.Td() && cast.__platform__.metrics.logBoolToUma(a, b)
    };
    cast.platform.metrics.logEventToUma = function(a) {
        cast.platform.metrics.Td() && cast.__platform__.metrics.logEventToUma(a)
    };
    cast.platform.metrics.logHistogramValueToUma = function(a, b, c, d, e) {
        cast.platform.metrics.Td() && cast.__platform__.metrics.logHistogramValueToUma(a, b, c, d, e)
    };
    cast.platform.metrics.logIntToUma = function(a, b) {
        cast.platform.metrics.Td() && cast.__platform__.metrics.logIntToUma(a, b)
    };
    cast.platform.metrics.setMplVersion = function(a) {
        cast.platform.metrics.Td() && cast.__platform__.metrics.setMplVersion(a)
    };
    cast.receiver = {};
    cast.receiver.ua = {};
    cast.receiver.ua.Fs = cast.platform.metrics.logEventToUma;
    cast.receiver.ua.Es = cast.platform.metrics.logBoolToUma;
    cast.receiver.ua.Hs = cast.platform.metrics.logIntToUma;
    cast.receiver.ua.Gs = cast.platform.metrics.logHistogramValueToUma;
    cast.receiver.J = {};
    cast.receiver.J.yk = function(a) {
        a.innerHTML = "<style>.audio-player-glanceable{width:100vw;height:100vh;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden}.bg-image,.scrim{position:absolute;width:100%;height:100%}.bg-image{background:#000 center / cover no-repeat;background-image:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1024_600.jpg'));transform:scale(1.25);transform-origin:center;filter:blur(37px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.bg-image{filter:blur(50px);background-image:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1280_800.jpg'))}}.scrim{background:rgba(0,0,0,0.7)}.playback-logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:#fff;font-family:'Roboto',Arial,sans-serif;font-weight:500;order:-2;overflow:hidden;font-size:36px;height:40px;line-height:40px}.playback-logo.app-icon{height:68px}.overlay{top:0;left:0;position:absolute;box-sizing:border-box;width:100%;padding:0 var(--cast-controls-horizontal-padding);display:flex;flex-direction:column;justify-content:center;height:calc(var(--cast-controls-safe-area-height) + 30px);padding-top:2px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.overlay{height:calc(var(--cast-controls-safe-area-height) + 48px);padding-top:38px}}.content{display:flex;justify-content:space-between;flex-direction:row;height:352px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.content{height:420px}}.metadataPlaceHolder{display:flex;flex-direction:column;justify-content:center;margin-top:0;height:100%;flex:none;margin-right:5%;width:55%}.album-art{object-fit:contain;margin:0 0 auto auto;zoom:5;max-width:40%;max-height:100%}.album{font-weight:500;margin-top:auto;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#dfe1e5;font-size:24px;letter-spacing:1.2px;line-height:24px}.title{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#fff;font-weight:normal;margin-top:18px;font-size:56px;line-height:76px;word-break:break-word}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.title{margin-top:32px;font-size:68px;line-height:80px}}.artist{margin-bottom:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:normal;color:#dfe1e5;font-size:28px;letter-spacing:1.4px;line-height:30px;margin-top:14px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.artist{font-size:32px;letter-spacing:1.6px;line-height:40px;margin-top:24px}}</style><div class=audio-player-glanceable><div class=bg-image id=bg-image></div><div class=scrim></div><div class=overlay><div class=content><div class=metadataPlaceHolder><div class=playback-logo id=logo></div><div class=album id=album></div><div class=title id=title></div><div class=artist id=artist></div></div><img alt=\"\" class=album-art id=album-art></div></div></div>"
    };
    cast.receiver.J.Ba = {
        AUDIO: "audio",
        VIDEO: "video",
        PHOTO: "photo"
    };
    cast.receiver.ra = {};
    cast.receiver.ra.Ad = "urn:x-cast:";
    cast.receiver.ra.qe = cast.receiver.ra.Ad + "com.google.cast.system";
    cast.receiver.ra.nl = "1.0";
    cast.receiver.ra.sb = "SystemSender";
    _.Sa(Ua, Error);
    Ua.prototype.name = "CustomError";
    _.Sa(Va, Ua);
    Va.prototype.name = "AssertionError";
    var cb;
    cb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    _.Ao = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };
    _.bx = Array.prototype.filter ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var k = f[g];
                b.call(void 0, k, g, a) && (d[e++] = k)
            }
        return d
    };
    _.cx = Array.prototype.map ? function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    };
    _.dx = Array.prototype.reduce ? function(a, b, c) {
        return Array.prototype.reduce.call(a, b, c)
    } : function(a, b, c) {
        var d = c;
        (0, _.Ao)(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    };
    _.ex = Array.prototype.some ? function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    };
    var tb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var zb, Ab, Bb, Cb, Db, Eb, Fb;
    _.Ib = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    zb = /&/g;
    Ab = /</g;
    Bb = />/g;
    Cb = /"/g;
    Db = /'/g;
    Eb = /\x00/g;
    Fb = /[\x00&<>"']/;
    a: {
        var fx = _.t.navigator;
        if (fx) {
            var gx = fx.userAgent;
            if (gx) {
                _.Lb = gx;
                break a
            }
        }
        _.Lb = ""
    };
    Rb.prototype.Nb = !0;
    Rb.prototype.vb = function() {
        return this.g
    };
    Rb.prototype.toString = function() {
        return "Const{" + this.g + "}"
    };
    var Qb = {},
        Pb = {},
        pc = _.Tb("");
    Vb.prototype.Nb = !0;
    var Ub = {};
    Vb.prototype.vb = function() {
        return this.g.toString()
    };
    Vb.prototype.toString = function() {
        return "SafeScript{" + this.g + "}"
    };
    _.h = _.Zb.prototype;
    _.h.Nb = !0;
    _.h.vb = function() {
        return this.g.toString()
    };
    _.h.Ng = !0;
    _.h.bd = ca(2);
    _.h.toString = function() {
        return "TrustedResourceUrl{" + this.g + "}"
    };
    var Yb = {},
        Xb = {};
    _.h = _.ec.prototype;
    _.h.Nb = !0;
    _.h.vb = function() {
        return this.g.toString()
    };
    _.h.Ng = !0;
    _.h.bd = ca(1);
    _.h.toString = function() {
        return "SafeUrl{" + this.g + "}"
    };
    var gc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        dc = {},
        cc = {};
    jc.prototype.Nb = !0;
    var ic = {};
    jc.prototype.vb = function() {
        return ""
    };
    jc.prototype.toString = function() {
        return "SafeStyle{}"
    };
    _.h = _.lc.prototype;
    _.h.Ng = !0;
    _.h.bd = ca(0);
    _.h.Nb = !0;
    _.h.vb = function() {
        return this.g.toString()
    };
    _.h.toString = function() {
        return "SafeHtml{" + this.g + "}"
    };
    var kc = {};
    _.oc("<!DOCTYPE html>", 0);
    var xe = _.oc("", 0);
    _.oc("<br>", 0);
    var sc = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    var hx = /dv(he|av).[s|d|p][e|t|w][n|r|h|b][a|h]?[e|t|w]?/;
    cast.receiver.media = {};
    cast.receiver.media.gb = cast.receiver.ra.Ad + "com.google.cast.media";
    var ix = {
        INVALID_PLAYER_STATE: "INVALID_PLAYER_STATE",
        LOAD_FAILED: "LOAD_FAILED",
        LOAD_CANCELLED: "LOAD_CANCELLED",
        INVALID_REQUEST: "INVALID_REQUEST",
        ERROR: "ERROR"
    };
    _.v("cast.receiver.media.repeatMode", {
        REPEAT_OFF: "REPEAT_OFF",
        REPEAT_ALL: "REPEAT_ALL",
        REPEAT_SINGLE: "REPEAT_SINGLE",
        REPEAT_ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
    }, void 0);
    cast.receiver.media.jj = function(a) {
        return "REPEAT_OFF" == a || "REPEAT_ALL" == a || "REPEAT_SINGLE" == a || "REPEAT_ALL_AND_SHUFFLE" == a
    };
    var jx = {
            Uk: ["BC", "AD"],
            Tk: ["Before Christ", "Anno Domini"],
            Rl: "JFMAMJJASOND".split(""),
            mm: "JFMAMJJASOND".split(""),
            rl: "January February March April May June July August September October November December".split(" "),
            lm: "January February March April May June July August September October November December".split(" "),
            hm: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            om: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            Bm: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            qm: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            jm: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            pm: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            Ur: "SMTWTFS".split(""),
            nm: "SMTWTFS".split(""),
            im: ["Q1", "Q2", "Q3", "Q4"],
            Yl: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
            wk: ["AM", "PM"],
            bi: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
            ri: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
            Mk: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
            ei: 6,
            qs: [5, 6],
            fi: 5
        },
        Oc = jx;
    Oc = jx;
    var Tc = [/^'(?:[^']|'')*('|$)/, /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^'GyYMkSEahKHcLQdmsvVwzZ]+/],
        Sc = !1;
    cast.receiver.J.aa = {};
    cast.receiver.J.aa.qg = function(a) {
        a = new Date(1E3 * a);
        var b = new Qc;
        if (!a) throw Error("The date to format must be non-null.");
        for (var c = [], d = 0; d < b.h.length; ++d) {
            var e = b.h[d].text;
            1 == b.h[d].type ? c.push(Wc(b, e, a, a, a)) : c.push(e)
        }
        return c.join("")
    };
    cast.receiver.J.aa.hj = function(a) {
        return !!a && void 0 !== a.currentBreakClipTime && void 0 !== a.breakClipId
    };
    cast.receiver.J.aa.ld = function(a) {
        return "number" === typeof a && isFinite(a) && !isNaN(a)
    };
    cast.receiver.J.aa.Ra = function(a, b) {
        if (!cast.receiver.J.aa.ld(a)) return "";
        var c = 0 > a ? "-" : "";
        a = Math.abs(a);
        a = (void 0 === b ? 0 : b) ? Math.ceil(a) : Math.floor(a);
        b = Math.floor(a / 3600);
        var d = Math.floor(a / 60) % 60;
        a %= 60;
        return b ? "" + c + String(b) + ":" + _.tc(d, 2) + ":" + _.tc(a, 2) : "" + c + String(d) + ":" + _.tc(a, 2)
    };
    cast.receiver.J.aa.mg = function(a) {
        return new Promise(function(b, c) {
            if (a) {
                var d = new Image;
                d.src = a;
                d.decode().then(function() {
                    b(a)
                }, function() {
                    c(a)
                })
            } else c(a)
        })
    };
    cast.receiver.J.aa.lb = function(a) {
        return 'url("' + String(a).replace(/"/g, '\\"') + '")'
    };
    cast.receiver.J.aa.so = function(a) {
        if (a.metadata) switch (a.metadata.metadataType) {
            case 1:
                return cast.receiver.J.Ba.VIDEO;
            case 2:
                return cast.receiver.J.Ba.VIDEO;
            case 3:
                return cast.receiver.J.Ba.AUDIO;
            case 5:
                return cast.receiver.J.Ba.AUDIO;
            case 4:
                return cast.receiver.J.Ba.PHOTO
        }
        a = Xc(a.contentType);
        return "audio" === a ? cast.receiver.J.Ba.AUDIO : "image" === a ? cast.receiver.J.Ba.PHOTO : cast.receiver.J.Ba.VIDEO
    };
    Yc.prototype = HTMLElement.prototype;
    Yc.prototype.constructor = Yc;
    Object.setPrototypeOf(Yc, HTMLElement);
    _.q(Zc, Yc);
    window.customElements && window.customElements.define && window.customElements.define("goog-audio-player-compatibility", Zc);
    cast.receiver.J.qr = Zc;
    cast.receiver.VERSION = "2.0.0";
    cast.receiver.Wf = "0104";
    cast.receiver.md = function(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return 0 == a.indexOf(b) || 0 == b.indexOf(a)
    };
    cast.receiver.J.zk = function(a) {
        a.innerHTML = '<div class=break-countdown id=break-countdown><span class=ad-label id=ad-label></span><span id=break-clip-index-text></span><span id=break-countdown-text></span></div><div class=break-skip id=break-skip-btn role=button><span class=skip-ad-text id=skip-ad-btn-text></span><img alt="" class=skip-ad-icon role=presentation src=""><div class=break-skip-scrim></div><div class=break-skip-highlight></div></div><div class="break-skip break-skip-btn-countdown" id=break-skip-btn-countdown><span class=skip-ad-text id=skip-ad-btn-countdown-text></span><div class=break-skip-scrim></div></div>'
    };
    var Hh = {
            MUSIC_TRACK: "MUSIC_TRACK",
            MUSIC_ALBUM: "MUSIC_ALBUM",
            ARTIST: "ARTIST",
            PLAYLIST: "PLAYLIST",
            EPISODE: "EPISODE",
            MOVIE: "MOVIE",
            PHOTO: "PHOTO",
            PODCAST: "PODCAST",
            MUSIC_GENRE: "MUSIC_GENRE",
            AUDIO_BOOK: "AUDIO_BOOK",
            RADIO_STATION: "RADIO_STATION",
            MUSIC_MIX: "MUSIC_MIX",
            VIDEO: "VIDEO",
            TV_SHOW: "TV_SHOW",
            NEWS: "NEWS"
        },
        Fh = {
            SQUARE_1_TO_1: "SQUARE_1_TO_1",
            PORTRAIT_2_TO_3: "PORTRAIT_2_TO_3",
            LANDSCAPE_16_TO_9: "LANDSCAPE_16_TO_9"
        },
        Ih = {
            LIVE: "LIVE"
        };
    var Un = {
        QUEUE_NEXT: "queue-next",
        QUEUE_PREV: "queue-prev",
        SEEK_FORWARD_10: "seek-forward-10",
        SEEK_FORWARD_15: "seek-forward-15",
        SEEK_FORWARD_30: "seek-forward-30",
        SEEK_BACKWARD_10: "seek-backward-10",
        SEEK_BACKWARD_15: "seek-backward-15",
        SEEK_BACKWARD_30: "seek-backward-30",
        CAPTIONS: "captions",
        REPEAT: "repeat",
        SHUFFLE: "shuffle",
        LIKE: "like",
        DISLIKE: "dislike",
        NO_BUTTON: "no-button"
    };
    var Vn = {
        SLOT_1: "slot-1",
        SLOT_2: "slot-2",
        SLOT_3: "slot-3",
        SLOT_4: "slot-4",
        SLOT_PRIMARY_1: "slot-primary-1",
        SLOT_PRIMARY_2: "slot-primary-2",
        SLOT_SECONDARY_1: "slot-secondary-1",
        SLOT_SECONDARY_2: "slot-secondary-2"
    };
    var kx = {},
        es = (kx["application/ttml+xml"] = 1, kx["text/vtt"] = 2, kx["text/mp4"] = 3, kx["audio/mp4"] = 4, kx["video/mp4"] = 5, kx["video/mp2t"] = 6, kx["audio/webm"] = 7, kx["video/webm"] = 8, kx["application/x-mpegurl"] = 9, kx["application/vnd.apple.mpegurl"] = 10, kx["application/dash+xml"] = 11, kx["application/vnd.ms-sstr+xml"] = 12, kx["text/cea608"] = 13, kx["video/ogg"] = 14, kx["audio/aac"] = 15, kx["audio/mp3"] = 16, kx["audio/ogg"] = 17, kx["audio/wav"] = 18, kx["image/gif"] = 19, kx["image/jpg"] = 20, kx["image/png"] = 21, kx["text/mp2t"] = 22, kx["application/mp4"] =
            23, kx),
        lx = {},
        fd = (lx.Sl = 0, lx["mp4a.a6"] = 1, lx["ec-3"] = 2, lx["mp4a.40.2"] = 3, lx["mp4a.40.5"] = 4, lx["mp4a.67"] = 5, lx["avc1.4D40"] = 6, lx["avc1.4D401E"] = 7, lx["mp4a.a5"] = 8, lx["ac-3"] = 9, lx.vorbis = 10, lx.opus = 11, lx.vp8 = 12, lx.vp9 = 13, lx.avc1 = 14, lx["mp4a.40"] = 15, lx);
    var mx = {},
        nx = (mx.SQUARE_1_TO_1 = 1, mx.PORTRAIT_2_TO_3 = 2, mx.LANDSCAPE_16_TO_9 = 3, mx),
        ox = {},
        id = (ox["no-button"] = 1, ox["queue-next"] = 2, ox["queue-prev"] = 3, ox["seek-forward-10"] = 4, ox["seek-forward-15"] = 5, ox["seek-forward-30"] = 6, ox["seek-backward-10"] = 7, ox["seek-backward-15"] = 8, ox["seek-backward-30"] = 9, ox.captions = 10, ox.repeat = 11, ox.shuffle = 12, ox.like = 13, ox.dislike = 14, ox.PLAY = 15, ox.PAUSE = 16, ox.SKIP_AD = 17, ox.STOP = 18, ox.SHOW_DEVICE_CONTROLLER = 19, ox.MINI_PLAYER_PLAY = 21, ox.MINI_PLAYER_PAUSE = 22, ox.MINI_PLAYER_ALBUM_ART =
            23, ox);
    _.C.prototype.G = !1;
    _.C.prototype.Ta = function() {
        return this.G
    };
    _.C.prototype.ga = function() {
        this.G || (this.G = !0, this.ha())
    };
    _.C.prototype.ha = function() {
        if (this.C)
            for (; this.C.length;) this.C.shift()()
    };
    _.E.prototype.h = function() {
        this.defaultPrevented = !0
    };
    nd[" "] = _.w;
    var ud, sx, pd;
    _.px = _.A("Opera");
    _.Do = _.A("Trident") || _.A("MSIE");
    _.qx = _.A("Edge");
    ud = _.A("Gecko") && !(_.Hb(_.Lb, "WebKit") && !_.A("Edge")) && !(_.A("Trident") || _.A("MSIE")) && !_.A("Edge");
    _.rx = _.Hb(_.Lb, "WebKit") && !_.A("Edge");
    a: {
        var tx = "",
            ux = function() {
                var a = _.Lb;
                if (ud) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (_.qx) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Do) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (_.rx) return /WebKit\/(\S+)/.exec(a);
                if (_.px) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        ux && (tx = ux ? ux[1] : "");
        if (_.Do) {
            var vx = rd();
            if (null != vx && vx > parseFloat(tx)) {
                sx = String(vx);
                break a
            }
        }
        sx = tx
    }
    _.sd = sx;
    pd = {};
    _.wx = _.t.document && _.Do ? rd() : void 0;
    var Qd = !_.Do || 9 <= Number(_.wx),
        xx = _.Do && !_.td("9"),
        Md = function() {
            if (!_.t.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                _.t.addEventListener("test", _.w, b), _.t.removeEventListener("test", _.w, b)
            } catch (c) {}
            return a
        }();
    var yx = Object.freeze || function(a) {
        return a
    };
    _.Sa(wd, _.E);
    var vd = yx({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    wd.prototype.h = function() {
        wd.eb.h.call(this);
        var a = this.l;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, xx) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var xd = "closure_listenable_" + (1E6 * Math.random() | 0),
        zd = 0;
    Cd.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var g = Ed(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Be = !1)) : (b = new Ad(b, this.src, f, !!d, e), b.Be = c, a.push(b));
        return b
    };
    Cd.prototype.Nd = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = Ed(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var Kd = "closure_lm_" + (1E6 * Math.random() | 0),
        Ud = {},
        Od = 0,
        Xd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    _.Sa(_.Yd, _.C);
    _.Yd.prototype[xd] = !0;
    _.h = _.Yd.prototype;
    _.h.Of = function(a) {
        this.H = a
    };
    _.h.addEventListener = function(a, b, c, d) {
        _.Gd(this, a, b, c, d)
    };
    _.h.removeEventListener = function(a, b, c, d) {
        Rd(this, a, b, c, d)
    };
    _.h.dispatchEvent = function(a) {
        var b, c = this.H;
        if (c)
            for (b = []; c; c = c.H) b.push(c);
        c = this.da;
        var d = a.type || a;
        if ("string" === typeof a) a = new _.E(a, c);
        else if (a instanceof _.E) a.target = a.target || c;
        else {
            var e = a;
            a = new _.E(d, c);
            _.ub(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; 0 <= f; f--) {
                var g = a.g = b[f];
                e = Zd(g, d, !0, a) && e
            }
        g = a.g = c;
        e = Zd(g, d, !0, a) && e;
        e = Zd(g, d, !1, a) && e;
        if (b)
            for (f = 0; f < b.length; f++) g = a.g = b[f], e = Zd(g, d, !1, a) && e;
        return e
    };
    _.h.ha = function() {
        _.Yd.eb.ha.call(this);
        if (this.A) {
            var a = this.A,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, Bd(d[e]);
                delete a.g[c];
                a.h--
            }
        }
        this.H = null
    };
    _.h.listen = function(a, b, c, d) {
        return this.A.add(String(a), b, !1, c, d)
    };
    _.h.listenOnce = function(a, b, c, d) {
        return this.A.add(String(a), b, !0, c, d)
    };
    _.h.unlisten = function(a, b, c, d) {
        var e = this.A;
        a = String(a).toString();
        if (a in e.g) {
            var f = e.g[a];
            b = Ed(f, b, c, d); - 1 < b ? (Bd(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.h--), e = !0) : e = !1
        } else e = !1;
        return e
    };
    _.h.Nd = function(a, b, c, d) {
        return this.A.Nd(String(a), b, c, d)
    };
    _.q($d, _.Yd);
    $d.prototype.ga = function() {
        _.Yd.prototype.ga.call(this);
        clearTimeout(this.l)
    };
    _.Ga($d);
    de.prototype.g = null;
    var zx = 0;
    de.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || zx++;
        this.l = d || (0, _.M)();
        this.o = a;
        this.w = b;
        this.h = c;
        delete this.g
    };
    fe.prototype.toString = function() {
        return this.name
    };
    var Vg = new fe("SHOUT", 1200),
        me = new fe("SEVERE", 1E3),
        ne = new fe("WARNING", 900),
        oe = new fe("INFO", 800),
        je = new fe("CONFIG", 700),
        pe = new fe("FINE", 500),
        Ax = new fe("FINER", 400),
        Bx = [new fe("OFF", Infinity), Vg, me, ne, oe, je, pe, Ax, new fe("FINEST", 300), new fe("ALL", 0)],
        Cx = null;
    ee.prototype.log = function(a, b, c) {
        if (a.value >= ge(this).value)
            for (_.z(b) && (b = b()), a = new de(a, String(b), this.A), c && (a.g = c), c = this; c;) {
                var d = c,
                    e = a;
                if (d.g)
                    for (var f = 0; b = d.g[f]; f++) b(e);
                c = c.l
            }
    };
    var ie = {},
        he = null;
    re.prototype.get = function() {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.l();
        return a
    };
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {}
    _.Dx = !_.Do || 9 <= Number(_.wx);
    _.Ex = !ud && !_.Do || _.Do && 9 <= Number(_.wx) || ud && _.td("1.9.1");
    _.Fx = _.Do || _.px || _.rx;
    var Ie;
    var Je = new re(function() {
        return new Ce
    }, function(a) {
        a.reset()
    });
    ze.prototype.add = function(a, b) {
        var c = Je.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    };
    Ce.prototype.set = function(a, b) {
        this.g = a;
        this.h = b;
        this.next = null
    };
    Ce.prototype.reset = function() {
        this.next = this.h = this.g = null
    };
    var De, Fe = !1,
        Ae = new ze;
    Ne.prototype.reset = function() {
        this.context = this.h = this.o = this.g = null;
        this.l = !1
    };
    var Oe = new re(function() {
        return new Ne
    }, function(a) {
        a.reset()
    });
    Me.prototype.then = function(a, b, c) {
        return Ze(this, _.z(a) ? a : null, _.z(b) ? b : null, c)
    };
    Me.prototype.$goog_Thenable = !0;
    Me.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new Le(a);
            Ge(function() {
                af(this, b)
            }, this)
        }
    };
    Me.prototype.D = function(a) {
        this.g = 0;
        Ke(this, 2, a)
    };
    Me.prototype.H = function(a) {
        this.g = 0;
        Ke(this, 3, a)
    };
    Me.prototype.G = function() {
        for (var a; a = bf(this);) cf(this, a, this.g, this.C);
        this.A = !1
    };
    var hf = we;
    _.Sa(Le, Ua);
    Le.prototype.name = "cancel";
    _.Sa(nf, _.Yd);
    _.h = nf.prototype;
    _.h.fb = null;
    _.h.Xb = null;
    _.h.fd = void 0;
    _.h.hg = !1;
    _.h.ge = 0;
    _.h.Kc = null;
    _.h.fa = _.F("goog.net.WebSocket");
    _.h.open = function(a, b) {
        null != this.Kc && _.kf(this.Kc);
        this.Kc = null;
        this.Xb = a;
        (this.fd = b) ? (_.I(this.fa, "Opening the WebSocket on " + this.Xb + " with protocol " + this.fd), this.fb = new WebSocket(this.Xb, this.fd)) : (_.I(this.fa, "Opening the WebSocket on " + this.Xb), this.fb = new WebSocket(this.Xb));
        this.fb.binaryType = this.o;
        this.fb.onopen = (0, _.Qa)(this.Np, this);
        this.fb.onclose = (0, _.Qa)(this.vp, this);
        this.fb.onmessage = (0, _.Qa)(this.Jo, this);
        this.fb.onerror = (0, _.Qa)(this.Io, this)
    };
    _.h.close = function() {
        null != this.Kc && _.kf(this.Kc);
        this.Kc = null;
        this.fb && (_.I(this.fa, "Closing the WebSocket."), this.hg = !0, this.fb.close(), this.fb = null)
    };
    _.h.send = function(a) {
        this.fb.send(a)
    };
    _.h.Np = function() {
        _.I(this.fa, "WebSocket opened on " + this.Xb);
        this.dispatchEvent("d");
        this.ge = 0;
        this.g = this.h(this.ge)
    };
    _.h.vp = function(a) {
        _.I(this.fa, "The WebSocket on " + this.Xb + " closed.");
        this.dispatchEvent("a");
        this.fb = null;
        this.hg ? (_.I(this.fa, "The WebSocket closed normally."), this.Xb = null, this.fd = void 0) : (_.G(this.fa, "The WebSocket disconnected unexpectedly: " + a.data), this.l && (_.I(this.fa, "Seconds until next reconnect attempt: " + Math.floor(this.g / 1E3)), this.Kc = _.jf((0, _.Qa)(this.open, this, this.Xb, this.fd), this.g, this), this.ge++, this.g = this.h(this.ge)));
        this.hg = !1
    };
    _.h.Jo = function(a) {
        this.dispatchEvent(new of(a.data))
    };
    _.h.Io = function(a) {
        a = a.data;
        _.G(this.fa, "An error occurred: " + a);
        this.dispatchEvent(new pf(a))
    };
    _.h.ha = function() {
        nf.eb.ha.call(this);
        this.close()
    };
    _.Sa(of, _.E);
    _.Sa(pf, _.E);
    cast.receiver.platform = {};
    cast.receiver.platform.ci = {
        "port-for-web-server": "8008"
    };
    cast.receiver.platform.dj = function() {
        return !(!cast.__platform__ || !cast.__platform__.canDisplayType)
    };
    cast.receiver.platform.canDisplayType = function(a) {
        return cast.__platform__.canDisplayType(a)
    };
    cast.receiver.platform.setTouchInputSupport = function(a) {
        return cast.__platform__ && _.z(cast.__platform__.setTouchInputSupport) ? cast.__platform__.setTouchInputSupport(a) : Promise.reject()
    };
    cast.receiver.platform.getAccessibilitySettings = function() {
        return cast.__platform__ && cast.__platform__.accessibility && cast.__platform__.accessibility.getAccessibilitySettings ? cast.__platform__.accessibility.getAccessibilitySettings() : Promise.resolve({
            isScreenReaderEnabled: !1,
            isColorInversionEnabled: !1
        })
    };
    cast.__platform__ && cast.__platform__.canDisplayType || delete window.cast.receiver.platform.canDisplayType;
    cast.receiver.platform.Ya = function(a) {
        if (cast.__platform__ && cast.__platform__.queryPlatformValue) return cast.__platform__.queryPlatformValue(a);
        if (a in cast.receiver.platform.ci) return cast.receiver.platform.ci[a]
    };
    cast.receiver.platform.getHdcpVersion = function() {
        return cast.__platform__ && cast.__platform__.display && cast.__platform__.display.getHdcpVersion ? cast.__platform__.display.getHdcpVersion() : Promise.reject(Error("getHdcpVersion is not available"))
    };
    _.h = qf.prototype;
    _.h.open = function() {
        this.g ? _.G(Gx, "PlatformChannel Already open") : cast.__platform__.channel.open((0, _.Qa)(this.jn, this), (0, _.Qa)(this.hn, this))
    };
    _.h.close = function() {
        this.g ? cast.__platform__.channel.close((0, _.Qa)(this.gn, this)) : _.G(Gx, "PlatformChannel Cannot close unopened channel")
    };
    _.h.send = function(a) {
        cast.__platform__.channel.send(a)
    };
    _.h.jn = function(a) {
        this.g = a;
        rf(this, a ? "d" : "b")
    };
    _.h.gn = function() {
        this.g && (this.g = !1, rf(this, "a"))
    };
    _.h.hn = function(a) {
        rf(this, new of(a))
    };
    _.h.addEventListener = function(a, b) {
        this.h.listen(a, b)
    };
    _.h.removeEventListener = function(a, b) {
        this.h.unlisten(a, b)
    };
    var Gx = _.F("cast.receiver.platform.WebSocket");
    _.Ga(sf);
    _.Hx = Mb();
    _.Ix = _.md() || _.A("iPod");
    _.Jx = _.A("iPad");
    _.Kx = _.A("Android") && !(Nb() || Mb() || _.A("Opera") || _.A("Silk"));
    _.Lx = Nb();
    _.Mx = Ob() && !(_.md() || _.A("iPad") || _.A("iPod"));
    var vf = !_.Do && !Ob();
    var zf = _.F("cast.receiver.ui.FocusService");
    Bf.prototype.focus = function(a) {
        this.h = a;
        a.focus()
    };
    _.Ga(Bf);
    var Nx = {
            xr: {
                1E3: {
                    other: "0K"
                },
                1E4: {
                    other: "00K"
                },
                1E5: {
                    other: "000K"
                },
                1E6: {
                    other: "0M"
                },
                1E7: {
                    other: "00M"
                },
                1E8: {
                    other: "000M"
                },
                1E9: {
                    other: "0B"
                },
                1E10: {
                    other: "00B"
                },
                1E11: {
                    other: "000B"
                },
                1E12: {
                    other: "0T"
                },
                1E13: {
                    other: "00T"
                },
                1E14: {
                    other: "000T"
                }
            },
            wr: {
                1E3: {
                    other: "0 thousand"
                },
                1E4: {
                    other: "00 thousand"
                },
                1E5: {
                    other: "000 thousand"
                },
                1E6: {
                    other: "0 million"
                },
                1E7: {
                    other: "00 million"
                },
                1E8: {
                    other: "000 million"
                },
                1E9: {
                    other: "0 billion"
                },
                1E10: {
                    other: "00 billion"
                },
                1E11: {
                    other: "000 billion"
                },
                1E12: {
                    other: "0 trillion"
                },
                1E13: {
                    other: "00 trillion"
                },
                1E14: {
                    other: "000 trillion"
                }
            }
        },
        Of = Nx;
    Of = Nx;
    var Lf = {
        AED: [2, "dh", "\u062f.\u0625."],
        ALL: [0, "Lek", "Lek"],
        AUD: [2, "$", "AU$"],
        BDT: [2, "\u09f3", "Tk"],
        BGN: [2, "lev", "lev"],
        BRL: [2, "R$", "R$"],
        CAD: [2, "$", "C$"],
        CDF: [2, "FrCD", "CDF"],
        CHF: [2, "CHF", "CHF"],
        CLP: [0, "$", "CL$"],
        CNY: [2, "\u00a5", "RMB\u00a5"],
        COP: [32, "$", "COL$"],
        CRC: [0, "\u20a1", "CR\u20a1"],
        CZK: [50, "K\u010d", "K\u010d"],
        DKK: [50, "kr.", "kr."],
        DOP: [2, "RD$", "RD$"],
        EGP: [2, "\u00a3", "LE"],
        ETB: [2, "Birr", "Birr"],
        EUR: [2, "\u20ac", "\u20ac"],
        GBP: [2, "\u00a3", "GB\u00a3"],
        HKD: [2, "$", "HK$"],
        HRK: [2, "kn", "kn"],
        HUF: [34,
            "Ft", "Ft"
        ],
        IDR: [0, "Rp", "Rp"],
        ILS: [34, "\u20aa", "IL\u20aa"],
        INR: [2, "\u20b9", "Rs"],
        IRR: [0, "Rial", "IRR"],
        ISK: [0, "kr", "kr"],
        JMD: [2, "$", "JA$"],
        JPY: [0, "\u00a5", "JP\u00a5"],
        KRW: [0, "\u20a9", "KR\u20a9"],
        LKR: [2, "Rs", "SLRs"],
        LTL: [2, "Lt", "Lt"],
        MNT: [0, "\u20ae", "MN\u20ae"],
        MVR: [2, "Rf", "MVR"],
        MXN: [2, "$", "Mex$"],
        MYR: [2, "RM", "RM"],
        NOK: [50, "kr", "NOkr"],
        PAB: [2, "B/.", "B/."],
        PEN: [2, "S/.", "S/."],
        PHP: [2, "\u20b1", "PHP"],
        PKR: [0, "Rs", "PKRs."],
        PLN: [50, "z\u0142", "z\u0142"],
        RON: [2, "RON", "RON"],
        RSD: [0, "din", "RSD"],
        RUB: [50, "\u20bd",
            "RUB"
        ],
        SAR: [2, "Rial", "Rial"],
        SEK: [50, "kr", "kr"],
        SGD: [2, "$", "S$"],
        THB: [2, "\u0e3f", "THB"],
        TRY: [2, "\u20ba", "TRY"],
        TWD: [2, "NT$", "NT$"],
        TZS: [0, "TSh", "TSh"],
        UAH: [2, "\u0433\u0440\u043d.", "UAH"],
        USD: [2, "$", "US$"],
        UYU: [2, "$", "$U"],
        VND: [48, "\u20ab", "VN\u20ab"],
        YER: [0, "Rial", "Rial"],
        ZAR: [2, "R", "ZAR"]
    };
    var Ox = {
            Ok: ".",
            gi: ",",
            Tl: "%",
            si: "0",
            Wl: "+",
            hi: "-",
            Wk: "E",
            Ul: "\u2030",
            gl: "\u221e",
            Ql: "NaN",
            Nk: "#,##0.###",
            hs: "#E0",
            $r: "#,##0%",
            yr: "\u00a4#,##0.00",
            di: "USD"
        },
        Ff = Ox;
    Ff = Ox;
    var Xf = {
        prefix: "",
        Fq: "",
        Rn: 0
    };
    var Wf = Mf;
    Wf = Mf;
    var Vf = Nf;
    Vf = Nf;
    var Pf = null,
        Qf = null,
        Rf = null,
        Zf = /'([{}#].*?)'/g,
        Yf = /''/g,
        bg = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
        cg = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
        dg = /^\s*(\w+)\s*,\s*select\s*,/;
    Sf.prototype.l = function(a) {
        return "\ufddf_" + (a.length - 1).toString(10) + "_"
    };
    cast.receiver.V = {
        Xf: "LIVE",
        oi: "Play",
        mi: "Pause",
        Nl: "Stop",
        Al: "Next item",
        Bl: "Previous item",
        Il: "Seek forward 10 seconds",
        Jl: "Seek forward 15 seconds",
        Kl: "Seek forward 30 seconds",
        Fl: "Seek backward 10 seconds",
        Gl: "Seek backward 15 seconds",
        Hl: "Seek backward 30 seconds",
        Ll: "Shuffle",
        wl: "Captions",
        zl: "Thumbs up",
        yl: "Thumbs down",
        Dl: "Repeat. State: Off.",
        Cl: "Repeat. State: All.",
        El: "Repeat. State: One.",
        Ml: "Skip Ad",
        ki: "Ad",
        vl: "Show controls.",
        sl: "Hide controls.",
        ji: "Controls are visible.",
        ii: "Controls are hidden.",
        tl: "{CURRENT_TIME} of {DURATION}",
        ni: "Playing {APP_NAME}",
        xl: "Device Controller"
    };
    cast.receiver.V.dc = function(a, b) {
        a = new Sf(a);
        if (a.o) {
            a.w = [];
            var c = $f(a, a.o);
            a.h = hg(a, c);
            a.o = null
        }
        if (a.h && 0 != a.h.length)
            for (a.g = _.fb(a.w), c = [], Tf(a, a.h, b, !1, c), b = c.join(""); 0 < a.g.length;) b = b.replace(a.l(a.g), a.g.pop());
        else b = "";
        return b
    };
    cast.receiver.V.jo = function(a) {
        return cast.receiver.V.dc("Your video will play in {FORMATTED_TIME}", {
            FORMATTED_TIME: a
        })
    };
    cast.receiver.V.Ti = function(a) {
        return cast.receiver.V.dc("Skip in {FORMATTED_TIME}", {
            FORMATTED_TIME: a
        })
    };
    cast.receiver.V.sg = function(a, b) {
        return b ? a ? cast.receiver.V.dc("Season {SEASON}, Episode {EPISODE}", {
            SEASON: a,
            EPISODE: b
        }) : cast.receiver.V.dc("Episode {EPISODE}", {
            EPISODE: b
        }) : cast.receiver.V.dc("Season {SEASON}", {
            SEASON: a
        })
    };
    cast.receiver.V.Vi = function(a, b) {
        return a + (" of " + b)
    };
    _.q(ig, Yc);
    window.customElements && window.customElements.define && window.customElements.define("goog-break-ui", ig);
    cast.receiver.J.rr = ig;
    _.F("cast.receiver.CastChannel");
    _.h = ng.prototype;
    _.h.bn = function() {
        pg(this, "opened")
    };
    _.h.Zm = function() {
        pg(this, "closed")
    };
    _.h.$m = function() {
        pg(this, "error")
    };
    _.h.an = function(a) {
        _.qe(lg, "Received message: " + a.message);
        var b = (a = JSON.parse(a.message)) && a.namespace;
        a && b && a.senderId && a.data ? (a = new og(b, a.senderId, a.data), a.target = this, this.h.dispatchEvent(a)) : _.G(lg, "IpcChannel Message received is invalid")
    };
    _.h.open = function() {
        _.I(lg, "Opening message bus websocket");
        this.g.open("ws://localhost:" + cast.receiver.platform.Ya("port-for-web-server") + "/v2/ipc")
    };
    _.h.close = function() {
        _.I(lg, "Closing message bus websocket");
        this.g.close()
    };
    _.h.send = function(a, b, c) {
        a = JSON.stringify({
            namespace: a,
            senderId: b,
            data: c
        });
        _.qe(lg, "IPC message sent: " + a);
        this.g.send(a)
    };
    _.h.addEventListener = function(a, b) {
        this.h.listen(a, b)
    };
    _.h.removeEventListener = function(a, b) {
        this.h.unlisten(a, b)
    };
    var lg = _.F("cast.receiver.IpcChannel");
    _.q(og, _.E);
    _.q(qg, _.C);
    _.h = qg.prototype;
    _.h.Kj = function(a) {
        le(fh, Ax, "Dispatching CastMessageBus message");
        var b = "STRING" == this.o ? a.data : this.M(a.data);
        tg(this, new ug(a.senderId, a.senderId, b));
        a = new ug("message", a.senderId, b);
        this.l && this.l(a);
        tg(this, a)
    };
    _.h.send = function(a, b) {
        this.D || this.h == cast.receiver.ra.qe || _.H(fh, "Application should not send requests before the system is ready (they will be ignored)");
        tg(this, new ug("send", a, b));
        for (var c = _.p(this.K), d = c.next(); !d.done; d = c.next())
            if (d = d.value, d(a, this.h, b)) return;
        if ("STRING" == this.o) {
            if ("string" !== typeof b) throw Error("Wrong argument, CastMessageBus type is STRING");
            this.A.send(this.h, a, b)
        } else this.A.send(this.h, a, this.H(b))
    };
    _.h.Pn = function(a) {
        if ("JSON" != this.o) throw Error("Unexpected message type for JSON serialization");
        return this.h === cast.receiver.media.gb ? JSON.stringify(a, function(b, c) {
            return null === c ? void 0 : c
        }) : JSON.stringify(a)
    };
    _.h.pn = function(a) {
        if ("JSON" != this.o) throw Error("Unexpected message type for JSON serialization");
        return JSON.parse(a)
    };
    _.h.ha = function() {
        _.C.prototype.ha.call(this);
        this.A.removeEventListener(this.h, this.I);
        this.w.ga();
        for (var a in this.g) this.g[a] && this.g[a].close();
        this.g = {};
        le(fh, Ax, "Disposed CastMessageBus[" + (this.h + "]"))
    };
    _.h.addEventListener = function(a, b) {
        _.Gd(this.w, a, b)
    };
    _.h.removeEventListener = function(a, b) {
        Rd(this.w, a, b)
    };
    _.h.dispatchEvent = function(a) {
        return tg(this, a)
    };
    var fh = _.F("cast.receiver.CastMessageBus");
    _.q(ug, _.E);
    cast.receiver.Db = {};
    cast.receiver.Db.Zb = cast.receiver.ra.Ad + "com.google.cast.cac";
    cast.receiver.Dc = {};
    cast.receiver.Dc.hl = cast.receiver.ra.Ad + "com.google.cast.inject";
    cast.receiver.Dc.pe = "__inject__";
    _.h = _.vg.prototype;
    _.h.mb = function() {
        xg(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
        return a
    };
    _.h.Jb = function() {
        xg(this);
        return this.g.concat()
    };
    _.h.clear = function() {
        this.h = {};
        this.l = this.g.length = 0
    };
    _.h.get = function(a, b) {
        return _.wg(this.h, a) ? this.h[a] : b
    };
    _.h.set = function(a, b) {
        _.wg(this.h, a) || (this.l++, this.g.push(a));
        this.h[a] = b
    };
    _.h.forEach = function(a, b) {
        for (var c = this.Jb(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    _.h.clone = function() {
        return new _.vg(this)
    };
    Bg.prototype.A = function(a) {
        var b = this,
            c = a.data,
            d = c.requestId,
            e = a.senderId;
        if ("WRAPPED" != c.type) Eg(this, "Unsupported message type " + c.type, e, d);
        else {
            a = JSON.parse(c.data);
            c = a.namespace;
            var f = this.l.g[c] || null;
            if (f) {
                var g = !1;
                if (c == cast.receiver.Db.Zb) a.data.requestId = d, g = !0;
                else if (c == cast.receiver.media.gb) {
                    var k = a.data;
                    k.requestId = d;
                    k.mediaSessionId = this.w
                } else {
                    Eg(this, "Unsupported namespace " + c, e, d);
                    return
                }
                this.g.set(d, e);
                try {
                    this.h = null, rg(f, c, cast.receiver.Dc.pe, JSON.stringify(a.data))
                } catch (m) {
                    throw _.yg(this.g,
                        d), Eg(this, "Injecting " + a.data + " failed with " + m, e, d), m;
                }
                if (!g) {
                    var l = function() {
                        return b.h ? (_.yg(b.g, d), Eg(b, "Error " + JSON.stringify(b.h), e, d, "WRAPPED_ERROR", b.h), !0) : !1
                    };
                    l() || setTimeout(function() {
                        l() || (_.yg(b.g, d), Gg(b, e, d))
                    }, 5)
                }
            } else Eg(this, "Unregistered namespace " + c, e, d, "WRAPPED_ERROR", {
                type: "ERROR",
                code: "UNREGISTERED_NAMESPACE"
            })
        }
    };
    Bg.prototype.G = function(a, b, c) {
        if (b == cast.receiver.media.gb && "STRING" == (this.l.g[b] || null).o) try {
            c = JSON.parse(c)
        } catch (e) {
            return _.G(Cg, "Parse failed: " + c), !1
        }
        var d = c.type;
        b == cast.receiver.media.gb && "MEDIA_STATUS" == d && c.status && c.status[0] && (this.w = c.status[0].mediaSessionId);
        if (a != cast.receiver.Dc.pe) return !1;
        a = c.requestId;
        if (void 0 === a) return _.H(Cg, "No requestId in " + c), !0;
        if (b == cast.receiver.media.gb) {
            switch (d) {
                case "INVALID_REQUEST":
                case "INVALID_PLAYER_STATE":
                    b = c.reason, this.h = {
                        type: "ERROR",
                        code: b ? b : d
                    }
            }
            return !0
        }
        d = this.g.get(a);
        if (!d) return _.G(Cg, "Request not found " + a), !0;
        _.yg(this.g, a);
        if (b != cast.receiver.Db.Zb) return _.G(Cg, "Unsupported namespace " + b), !0;
        b = c;
        switch (b.type) {
            case "SUCCESS":
                Gg(this, d, a, Object.getOwnPropertyNames(c).some(function(e) {
                    return "type" != e && "requestId" != e && void 0 !== c[e]
                }) ? JSON.stringify(c) : void 0);
                break;
            case "ERROR":
                Eg(this, "Wrapped error", d, a, "WRAPPED_ERROR", b);
                break;
            default:
                Eg(this, "Unknown message type " + c, d, a)
        }
        return !0
    };
    _.Ga(Bg);
    var Cg = _.F("cast.receiver.InjectManager");
    _.q(Fg, Hg);
    _.q(Dg, Hg);
    var Jg = null;
    Ig.prototype.set = function(a) {
        this.g = a
    };
    Ig.prototype.reset = function() {
        this.set((0, _.M)())
    };
    Ig.prototype.get = function() {
        return this.g
    };
    Kg.prototype.g = !0;
    Kg.prototype.h = !0;
    Kg.prototype.l = !1;
    _.Sa(Ng, Kg);
    Pg.prototype.l = function(a) {
        function b(f) {
            if (f) {
                if (f.value >= me.value) return "error";
                if (f.value >= ne.value) return "warn";
                if (f.value >= je.value) return "log"
            }
            return "debug"
        }
        if (!this.o[a.h]) {
            var c = Og(this.g, a),
                d = Px;
            if (d) {
                var e = b(a.o);
                Sg(d, e, c, a.g)
            }
        }
    };
    var Qg = null,
        Px = _.t.console;
    _.q(_.zg, _.C);
    _.h = _.zg.prototype;
    _.h.start = function(a) {
        if (a) {
            if (!a) throw Error("Cannot validate undefined config.");
            if (void 0 != a.maxInactivity && 5 > a.maxInactivity) throw Error("config.maxInactivity must be greater than or equal to 5 seconds.");
            _.ub(this.h, a || {})
        }
        this.h.versionCode && 0 <= this.h.versionCode && (Number.isInteger(this.h.versionCode) ? (B("Cast.Receiver.VersionCode", this.h.versionCode), _.I(Ug, "App Version " + this.h.versionCode)) : _.G(Ug, "Receiver versionCode needs to be an integer"));
        Bg.F();
        this.ka || xh(this, !1);
        this.na = !0;
        this.O.open()
    };
    _.h.stop = function() {
        this.ga();
        window.close()
    };
    _.h.isRemoteControl = function() {
        return !!cast.receiver.platform.Ya("is-remote-control-mode-enabled")
    };
    _.h.Fc = function() {
        return "ready" == this.A
    };
    _.h.getSenders = function() {
        return _.mb(this.o)
    };
    _.h.Te = function(a) {
        return this.o[a] ? _.rb(this.o[a]) : null
    };
    _.h.Dg = function() {
        return null == this.H ? this.D ? "notvisible" : "unknown" : this.H ? "visible" : "notvisible"
    };
    _.h.Bg = function() {
        return null == this.D ? this.H ? "notstandby" : "unknown" : this.D ? "standby" : "notstandby"
    };
    _.h.Ue = function() {
        "notstarted" == this.A && (this.A = /[&?]google_cast_bg=true(&|$)/.test(window.location.search) ? "startinginbackground" : "starting");
        return this.A
    };
    _.h.Oe = function() {
        return this.M
    };
    _.h.ad = function() {
        return this.l
    };
    _.h.ie = function(a) {
        this.Fc() ? $g(this, a) : this.h.statusText != a && (this.h.statusText = a, this.W = !0)
    };
    _.h.Ph = function(a) {
        if (0 > a || 1 < a) throw Error("Invalid level value");
        this.w.send(cast.receiver.ra.sb, {
            type: "setvolume",
            level: a
        })
    };
    _.h.Qh = function(a) {
        this.w.send(cast.receiver.ra.sb, {
            type: "setvolume",
            muted: a
        })
    };
    _.h.Od = function() {
        return this.sa
    };
    _.h.Nf = function(a) {
        this.w.send(cast.receiver.ra.sb, {
            type: "startheartbeat",
            maxInactivity: a
        })
    };
    _.h.Jf = function(a) {
        this.w.send(cast.receiver.ra.sb, {
            type: "sendfeedbackmessage",
            message: a
        })
    };
    _.h.aq = function(a) {
        var b = a.data;
        switch (b.type) {
            case "opened":
                _.I(Ug, "Underlying message bus is open");
                Zg(this, _.mb(this.g), this.h.statusText, this.h.Qn);
                this.h.maxInactivity && this.Nf(this.h.maxInactivity);
                break;
            case "closed":
                this.sh();
                break;
            case "error":
                ch(this, new Ah("error", null));
                break;
            case "ready":
                _.I(Ug, function() {
                    return "System ready event: " + JSON.stringify(b)
                });
                dh(this, b);
                break;
            case "senderconnected":
                gh(this, {
                    id: b.senderId,
                    userAgent: b.userAgent
                });
                break;
            case "senderdisconnected":
                ih(this, b.senderId,
                    b.reason);
                break;
            case "volumechanged":
                kh(this, {
                    level: b.level,
                    muted: b.muted
                });
                break;
            case "visibilitychanged":
                this.R || (a = b.visible, mh(this, void 0 !== a ? a : null));
                break;
            case "standbychanged":
                this.R || (a = b.standby, oh(this, void 0 !== a ? a : null));
                break;
            case "maxvideoresolutionchanged":
                sh(this, b.height);
                break;
            case "showmediacontrols":
                qh(this, b.controls);
                break;
            case "playbackdevicestatus":
                _.I(Ug, "Dispatching playbackdevicestatus " + b.playbackType);
                this.I = new Ta;
                this.I.playbackType = b.playbackType;
                this.I.deviceName =
                    b.deviceName;
                ch(this, new Ch(this.I));
                break;
            case "hdroutputtypechanged":
                this.Y && this.Y(b.hdrType);
                break;
            case "screenresolutionchanged":
                break;
            case "feedbackstarted":
                _.I(Ug, "Dispatching feedback started event");
                this.Jf("");
                break;
            case "groupcapabilities":
                uh(this, b);
                break;
            case "allowgroupchange":
                wh(this, b);
                break;
            default:
                _.G(Ug, "Unexpected system message type: " + b.type)
        }
    };
    _.h.canDisplayType = function(a, b, c, d, e) {
        if (!cast.receiver.platform.dj()) return !0;
        if (!xb(a, "video/") && !xb(a, "audio/")) return !1;
        b && (a += "; codecs=" + b);
        c && d && (a += "; width=" + c + "; height=" + d);
        e && (a += "; framerate=" + e);
        if (c = b) a: for (c = !1, b = b.split(","), d = 0; d < b.length; d++) {
            if (b[d].match(hx)) {
                c = !1;
                break a
            }
            0 === b[d].indexOf("hev1.2") && (c = !0)
        }
        c && (a += "; eotf=smpte2084");
        return cast.receiver.platform.canDisplayType(a)
    };
    _.h.Hj = function() {
        this.R && mh(this, "visible" == document.visibilityState)
    };
    _.h.sh = function() {
        _.I(Ug, "Dispatching shutdown event");
        this.Ue();
        this.A = "startinginbackground" == this.A ? "stoppinginbackground" : "stopping";
        for (var a in this.g) this.g[a].D = !1;
        ch(this, new Bh)
    };
    _.h.ha = function() {
        this.O.close();
        _.C.prototype.ha.call(this);
        window && Rd(window, "unload", this.sh, !1, this);
        document && Rd(document, "visibilitychange", this.Hj, !1, this);
        this.N.ga();
        delete _.zg.$e;
        _.qe(Ug, "Disposed CastReceiverManager")
    };
    _.h.addEventListener = function(a, b) {
        _.Gd(this.N, a, b)
    };
    _.h.removeEventListener = function(a, b) {
        Rd(this.N, a, b)
    };
    _.h.dispatchEvent = function(a) {
        return ch(this, a)
    };
    _.Ga(_.zg);
    _.zg.getInstance = _.zg.F;
    var Wg = null,
        Ug = _.F("cast.receiver.CastReceiverManager");
    _.q(Ah, _.E);
    _.q(hh, Ah);
    _.q(eh, Ah);
    _.q(lh, Ah);
    _.q(nh, Ah);
    _.q(jh, Ah);
    _.q(bh, Ah);
    _.q(Bh, Ah);
    _.q(Ch, Ah);
    _.q(ph, Ah);
    _.q(rh, Ah);
    _.q(th, Ah);
    _.q(vh, Ah);
    var Tg = {
        maxInactivity: 10
    };
    Dh.prototype.l = function(a) {
        if (this.g.Fc()) _.H(Qx, "Ignoring broadcast request, system is ready.");
        else {
            a = a.data;
            var b = a.type;
            if ("APPLICATION_BROADCAST" != b) _.G(Qx, "Ignoring message type: " + b);
            else if (b = a.g) {
                var c = this.g.g[b] || null;
                if (c) switch (b) {
                    case cast.receiver.media.gb:
                        var d = JSON.parse(a.message);
                        if ("PRECACHE" != d.type) {
                            _.G(Qx, "Unsupported type for media namespace: " + d.type);
                            break
                        }
                        rg(c, b, "__broadcast__", a.message);
                        break;
                    default:
                        _.G(Qx, "Unsupported namespace: " + a.g)
                } else _.G(Qx, "Invalid message bus for namespace: " +
                    b)
            } else _.G(Qx, "Missing namespace: " + b)
        }
    };
    _.Ga(Dh);
    var Qx = _.F("cast.receiver.BroadcastManager");
    var Gh = _.F("cast.receiver.ui.BrowseContentValidator");
    cast.receiver.J.Yb = function(a, b, c) {
        Bf.F();
        this.g = Lh(this, a, b, c);
        this.A = $d.F()
    };
    cast.receiver.J.Ek = function(a) {
        a.innerHTML = '<div class="slot device-controller-slot"></div><div class="slot slot-primary-1"></div><div class="slot center"><play-placeholder></play-placeholder><stop-placeholder></stop-placeholder></div><div class="slot slot-primary-2"></div><div class="slot slot-secondary-1"></div><div class="slot slot-secondary-2"></div>'
    };
    cast.receiver.J.Qk = function(a) {
        var b = document.createElement("goog-ripple"),
            c = document.createElement("img");
        c.classList.add("device-controller-icon");
        c.setAttribute("role", "presentation");
        var d = document.createElement("span");
        d.classList.add("device-controller-label");
        var e = document.createElement("div");
        e.classList.add("device-controller-btn");
        e.setAttribute("role", "button");
        e.appendChild(b);
        e.appendChild(c);
        e.appendChild(d);
        e.title = cast.receiver.V.xl;
        e.addEventListener("click", a);
        L(d, !1);
        this.h = e;
        this.g = d;
        this.l = c
    };
    _.q(Ph, cast.receiver.J.Yb);
    cast.receiver.J.Xl = Ph;
    _.q(Qh, cast.receiver.J.Yb);
    _.q(Sh, Yc);
    Sh.prototype.na = function() {
        if (Ef(this.l.g)) return !0;
        for (var a in this.o)
            if (Ef(this.o[a].g)) return !0;
        return !1
    };
    Sh.prototype.ac = function(a, b) {
        if (!this.A.hasOwnProperty(a)) throw Error("Invalid controls slot name. - " + a);
        for (var c = this.A[a]; c.firstChild;) c.removeChild(c.firstChild), delete this.o[a];
        b && (c.appendChild(b.g), this.o[a] = b);
        "slot-secondary-2" === a && this.classList.toggle("secondary-2-empty", !b)
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-buttons-bar", Sh);
    Wh.prototype.H = function(a) {
        var b = a.data,
            c = b.type;
        a = a.senderId;
        switch (c) {
            case "SET_CREDENTIALS":
                bi(this, b.forRequestId, b);
                var d = this.o;
                break;
            case "LOAD_BY_ENTITY":
                d = this.l;
                break;
            case "USER_ACTION":
                d = this.A;
                break;
            case "DISPLAY_STATUS":
                d = this.G;
                break;
            case "CUSTOM_COMMAND":
                d = this.C;
                break;
            case "FOCUS_STATE":
                (d = this.D) && this.w.ad().focus_state_supported && d(b);
                return;
            case "SUCCESS":
            case "ERROR":
                bi(this, b.requestId, b);
                return;
            default:
                c = "Unsupported event " + c;
                Yh(c, b, "INVALID_REQUEST");
                this.g.send(a, Yh(c, b,
                    "INVALID_REQUEST"));
                return
        }
        d ? Zh(this, a, b, d) : (c = "Handler for " + c + " not implemented", Yh(c, b, "NOT_SUPPORTED"), this.g.send(a, Yh(c, b, "NOT_SUPPORTED")))
    };
    Wh.prototype.xh = function(a, b) {
        var c = this,
            d = this.w.ad();
        if (d && !0 === d.display_supported && !d.touch_input_supported) return Promise.resolve(new ai("NOT_SUPPORTED"));
        d = (0, _.M)();
        if (_.wg(this.h.h, d)) return Promise.reject(Error("Duplicate request"));
        var e = new ei(a, b);
        e.requestId = d;
        return new Promise(function(f) {
            c.h.set(e.requestId, f);
            c.g.send("system-0", e)
        })
    };
    Wh.prototype.Dh = function(a, b) {
        var c = this,
            d = (0, _.M)(),
            e = new di;
        e.requestId = d;
        e.credentials = a || void 0;
        e.customData = b || void 0;
        return new Promise(function(f) {
            c.h.set(e.requestId, f);
            c.g.send("system-0", e)
        })
    };
    _.Ga(Wh);
    Wh.getInstance = Wh.F;
    var Vh = cast.receiver.Db.Zb,
        $h = _.F("cast.receiver.CommandAndControlManager");
    _.q(di, ci);
    _.q(ei, ci);
    _.q(fi, ci);
    _.q(gi, ci);
    _.q(hi, ci);
    _.q(ii, hi);
    _.q(ai, hi);
    var ki = /#(.)(.)(.)(.)/,
        ji = /^#(?:[0-9a-f]{4}){1,2}$/i;
    _.q(si, _.C);
    si.prototype.Cc = function() {
        return this.H
    };
    si.prototype.pb = function(a) {
        oi(this);
        pi(this);
        qi(this, a)
    };
    si.prototype.ha = function() {
        _.C.prototype.ha.call(this);
        for (var a = _.p(this.h), b = a.next(); !b.done; b = a.next()) this.g.removeChild(b.value);
        this.h.length = 0;
        oi(this, !0);
        xi(this);
        le(yi, Ax, "Disposed TextTracksManager")
    };
    var yi = _.F("cast.receiver.TextTracksManager");
    _.h = Ci.prototype;
    _.h.preload = function(a, b, c, d) {
        Ei(this);
        this.G = a;
        this.w = b;
        this.K = d || 0;
        this.o = c || null
    };
    _.h.Xm = function(a) {
        Ei(this);
        this.H(a)
    };
    _.h.Di = function() {
        Ei(this);
        this.D()
    };
    _.h.Ym = function() {
        this.h && this.l && ri(this.h, this.l);
        this.I()
    };
    _.h.registerErrorCallback = function(a) {
        this.H = a
    };
    _.h.registerEndedCallback = function(a) {
        this.D = a
    };
    _.h.registerLoadCallback = function(a) {
        this.I = a
    };
    _.h.unregisterErrorCallback = function() {
        this.H = _.w
    };
    _.h.unregisterEndedCallback = function() {
        this.D = _.w
    };
    _.h.unregisterLoadCallback = function() {
        this.I = _.w
    };
    _.h.Ij = function() {
        Fi(this)
    };
    _.h.load = function(a, b, c, d, e, f) {
        this.h && (this.h.ga(), this.h = null);
        this.A = !1;
        d && d.tracks && this.g && (this.h && this.h.ga(), this.h = new si(this.g, d.tracks, d.activeTrackIds || [], d.textTrackStyle || null), d.language && vi(this.h, d.language));
        null != this.o && _.Gd(this.g, "timeupdate", this.Ij, !1, this);
        e || (this.w = c && 0 < c ? c : 0, _.I(this.fa, "Load - contentId: " + a + " autoplay: " + b + " time: " + this.w), this.g.autoplay = !1, a && (this.g.src = a), this.g.autoplay = b, this.g.load(), void 0 !== f && (this.g.playbackRate = f))
    };
    _.h.reset = function() {
        this.A = !1;
        this.h && (this.h.ga(), this.h = null);
        this.l = null;
        this.g.removeAttribute("src");
        this.w = 0;
        this.g.load();
        Ei(this)
    };
    _.h.play = function() {
        this.A = !1;
        this.g.play()
    };
    _.h.seek = function(a, b) {
        this.g.currentTime != a && (this.g.currentTime = a);
        Fi(this) || ("PLAYBACK_START" == b && this.g.paused ? this.g.play() : "PLAYBACK_PAUSE" != b || this.g.paused || this.g.pause())
    };
    _.h.setPlaybackRate = function(a) {
        return this.g.playbackRate = a
    };
    _.h.pause = function() {
        this.A = !0;
        this.g.pause()
    };
    _.h.getState = function() {
        null == this.G && (this.G = this.g.autoplay);
        return this.g.paused || isNaN(this.g.duration) ? this.g.duration && (this.g.currentTime || 0 == this.g.currentTime) && this.g.currentTime < Di(this) ? this.g.currentTime == this.w && this.G && !this.A ? "BUFFERING" : "PAUSED" : "IDLE" : "PLAYING"
    };
    _.h.getCurrentTimeSec = function() {
        var a = Di(this);
        return isNaN(a) ? this.g.currentTime : this.g.currentTime < a ? this.g.currentTime : a
    };
    _.h.getDurationSec = function() {
        return Di(this)
    };
    _.h.getVolume = function() {
        return {
            level: this.g.volume,
            muted: this.g.muted
        }
    };
    _.h.setVolume = function(a) {
        void 0 !== a.level && (this.g.volume = a.level);
        void 0 !== a.muted && (this.g.muted = a.muted)
    };
    _.h.editTracksInfo = function(a) {
        this.h && (a.textTrackStyle && this.h.pb(a.textTrackStyle), a.language ? vi(this.h, a.language) : a.activeTrackIds && ri(this.h, a.activeTrackIds));
        Gi(this, a.activeTrackIds);
        return this.l
    };
    _.h = Ji.prototype;
    _.h.Nh = function(a) {
        this.l = a
    };
    _.h.fetchItems = function(a, b, c, d) {
        var e = this,
            f = void 0,
            g = aj(this, b);
        this.l ? 0 < c && 0 < d ? f = "Queue operations only support expanding the front or back." : 0 > g && (f = "Reference item id is not in current queue.") : f = "Fetch items is only supported with an external queue.";
        if (f) return _.H(Ri, f), Promise.reject(f);
        0 < c ? (f = this.g.length - 1, c -= f - g, b = this.g[f].itemId) : 0 < d && (d -= g, b = this.g[0].itemId);
        var k = new Ec;
        k.requestId = a;
        return 0 >= c && 0 >= d ? (k.changeType = "NO_CHANGE", k.sequenceNumber = this.A - 1, Promise.resolve(k)) : Promise.resolve(this.l.fetchItems(b,
            c, d)).then(function(l) {
            if (l && 0 != l.length) {
                var m = 0 < c ? void 0 : b;
                Wi(e, l, m);
                k.changeType = "INSERT";
                k.itemIds = l.map(function(n) {
                    return n.itemId
                });
                k.insertBefore = m;
                k.sequenceNumber = e.A++
            } else k.changeType = "NO_CHANGE", k.sequenceNumber = e.A - 1;
            return k
        })
    };
    _.h.clear = function() {
        this.g = void 0;
        this.o = "REPEAT_OFF";
        Li(this, !1);
        this.C = this.h = 0
    };
    _.h.yc = function(a, b) {
        a = void 0 === a ? !0 : a;
        b = void 0 === b ? !1 : b;
        var c = [],
            d = this.g.length;
        d = b && this.h < d - 1 ? this.h + 1 : d - 1;
        for (b = b && 0 < this.h ? this.h - 1 : 0; b <= d; b++) c.push(a ? this.g[b] : Ii(this.g[b], a));
        return c
    };
    _.h.ec = function() {
        return !this.g || 0 > this.h ? null : this.g[this.h]
    };
    _.h.Md = function() {
        return this.h
    };
    _.h.Wh = function(a) {
        for (var b = 0; b < a.length; b++)
            for (var c = 0; c < this.g.length; c++) a[b].itemId == this.g[c].itemId && (this.g[c] = a[b])
    };
    _.h.reset = function() {
        this.h = -1
    };
    _.h.Pg = function(a, b, c) {
        return Wi(this, a, b, c)
    };
    _.h.Fh = function(a) {
        for (var b = !1, c = 0; c < a.length; c++)
            for (var d = 0; d < this.g.length; d++)
                if (a[c] == this.g[d].itemId) {
                    this.g.splice(d, 1);
                    this.h == d ? b = !0 : this.h > d && this.h--;
                    break
                }
        this.h >= this.g.length && (this.h = bj(this) ? 0 : -1, Mi(this) && 0 == this.h && gj(this));
        if (this.l) this.l.onItemsRemoved(a);
        return b
    };
    _.h.shuffle = function() {
        var a = this;
        if (this.l) return Promise.resolve(this.l.shuffle()).then(function(b) {
            b ? (Li(a, !0), a.g = b) : gj(a)
        });
        gj(this);
        return Promise.resolve()
    };
    _.h.Tf = function() {
        var a = this;
        if (this.l) return Promise.resolve(this.l.Tf()).then(function(b) {
            b ? (Li(a, !1), a.g = b) : ij(a)
        });
        ij(this);
        return Promise.resolve()
    };
    var Ri = _.F("cast.receiver.MediaQueue");
    cast.receiver.Za = {};
    var Rx = {},
        Sx = (Rx.LOAD = "Cast.Receiver.Message.LOAD", Rx.GET_STATUS = "Cast.Receiver.Message.GET_STATUS", Rx.LOAD = "Cast.Receiver.Message.LOAD", Rx.PAUSE = "Cast.Receiver.Message.PAUSE", Rx.STOP = "Cast.Receiver.Message.STOP", Rx.SKIP_AD = "Cast.Receiver.Message.SKIP_AD", Rx.PLAY = "Cast.Receiver.Message.PLAY", Rx.PLAY_AGAIN = "Cast.Receiver.Message.PLAY_AGAIN", Rx.SEEK = "Cast.Receiver.Message.SEEK", Rx.SET_PLAYBACK_RATE = "Cast.Receiver.Message.SET_PLAYBACK_RATE", Rx.SET_VOLUME = "Cast.Receiver.Message.SET_VOLUME", Rx.EDIT_TRACKS_INFO =
            "Cast.Receiver.Message.EDIT_TRACKS_INFO", Rx.EDIT_AUDIO_TRACKS = "Cast.Receiver.Message.EDIT_AUDIO_TRACKS", Rx.PRELOAD = "Cast.Receiver.Message.PRELOAD", Rx.CANCEL_PRELOAD = "Cast.Receiver.Message.CANCEL_PRELOAD", Rx.PRECACHE = "Cast.Receiver.Message.PRECACHE", Rx.QUEUE_LOAD = "Cast.Receiver.Message.QUEUE_LOAD", Rx.QUEUE_INSERT = "Cast.Receiver.Message.QUEUE_INSERT", Rx.QUEUE_UPDATE = "Cast.Receiver.Message.QUEUE_UPDATE", Rx.QUEUE_REMOVE = "Cast.Receiver.Message.QUEUE_REMOVE", Rx.QUEUE_REORDER = "Cast.Receiver.Message.QUEUE_REORDER",
            Rx.QUEUE_NEXT = "Cast.Receiver.Message.QUEUE_NEXT", Rx.QUEUE_PREV = "Cast.Receiver.Message.QUEUE_PREV", Rx.QUEUE_GET_ITEM_RANGE = "Cast.Receiver.Message.QUEUE_GET_ITEM_RANGE", Rx.QUEUE_GET_ITEMS = "Cast.Receiver.Message.QUEUE_GET_ITEMS", Rx.QUEUE_GET_ITEM_IDS = "Cast.Receiver.Message.QUEUE_GET_ITEM_IDS", Rx.QUEUE_SHUFFLE = "Cast.Receiver.Message.QUEUE_SHUFFLE", Rx.USER_ACTION = "Cast.Receiver.Message.MEDIA_USER_ACTION", Rx.SET_CREDENTIALS = "Cast.Receiver.Message.SET_CREDENTIALS", Rx.LOAD_BY_ENTITY = "Cast.Receiver.Message.LOAD_BY_ENTITY",
            Rx.USER_ACTION = "Cast.Receiver.Message.USER_ACTION", Rx.DISPLAY_STATUS = "Cast.Receiver.Message.DISPLAY_STATUS", Rx.CUSTOM_COMMAND = "Cast.Receiver.Message.CUSTOM_COMMAND", Rx),
        Tx = {},
        Ux = (Tx.UNKNOWN = 1, Tx.SUCCESS = 2, Tx.INJECT_ERROR = 3, Tx.INVALID_COMMAND = 3, Tx.INVALID_PARAMS = 4, Tx.INVALID_MEDIA_SESSION_ID = 5, Tx.SKIP_LIMIT_REACHED = 6, Tx.NOT_SUPPORTED = 7, Tx.LANGUAGE_NOT_SUPPORTED = 8, Tx.END_OF_QUEUE = 9, Tx.DUPLICATE_REQUEST_ID = 10, Tx.APP_ERROR = 11, Tx.AUTHENTICATION_EXPIRED = 12, Tx.PREMIUM_ACCOUNT_REQUIRED = 13, Tx.CONCURRENT_STREAM_LIMIT =
            14, Tx.PARENTAL_CONTROL_RESTRICTED = 15, Tx.NOT_AVAILABLE_IN_REGION = 16, Tx.CONTENT_ALREADY_PLAYING = 17, Tx.INVALID_REQUEST = 18, Tx.GENERIC_LOAD_ERROR = 19, Tx.VIDEO_DEVICE_REQUIRED = 20, Tx.CONTENT_FILTERED = 21, Tx),
        Vx = {},
        Wx = (Vx.MEDIA_STATUS = "Cast.Receiver.OutMessage.MEDIA_STATUS", Vx.CLOUD_STATUS = "Cast.Receiver.OutMessage.CLOUD_STATUS", Vx.QUEUE_CHANGE = "Cast.Receiver.OutMessage.QUEUE_CHANGE", Vx.QUEUE_ITEMS = "Cast.Receiver.OutMessage.QUEUE_ITEMS", Vx.QUEUE_ITEM_IDS = "Cast.Receiver.OutMessage.QUEUE_ITEM_IDS", Vx.INVALID_PLAYER_STATE =
            "Cast.Receiver.OutMessage.INVALID_PLAYER_STATE", Vx.LOAD_FAILED = "Cast.Receiver.OutMessage.LOAD_FAILED", Vx.LOAD_CANCELLED = "Cast.Receiver.OutMessage.LOAD_CANCELLED", Vx.INVALID_REQUEST = "Cast.Receiver.OutMessage.INVALID_REQUEST", Vx.ERROR = "Cast.Receiver.OutMessage.ERROR", Vx),
        kj = "local";
    cast.receiver.Za.xq = function(a) {
        kj = a
    };
    cast.receiver.Za.Xg = function(a, b) {
        B(Sx[a] || "Cast.Receiver.Message.UNKNOWN", lj(b))
    };
    cast.receiver.Za.ar = function() {
        var a = _.zg.F(),
            b = a.g[cast.receiver.media.gb] || null;
        b && (b.addEventListener("message", function(c) {
            c.data && c.data.type && cast.receiver.Za.Xg(c.data.type, c.senderId)
        }), b.addEventListener("send", function(c) {
            c.data && c.data.type && B(Wx[c.data.type] || "Cast.Receiver.OutMessage.UNKNOWN", lj(c.senderId))
        }));
        (a = a.g[cast.receiver.Db.Zb] || null) && a.addEventListener("message", function(c) {
            c.data && c.data.type && cast.receiver.Za.Xg(c.data.type, c.senderId)
        })
    };
    cast.receiver.Za.Wg = function(a) {
        B("Cast.Receiver.CACResponse", Ux[a] || 1)
    };
    _.zg.F().addEventListener("ready", cast.receiver.Za.ar);
    qj.prototype.clear = function() {
        this.g = [];
        this.h = []
    };
    qj.prototype.contains = function(a) {
        return _.db(this.g, a) || _.db(this.h, a)
    };
    qj.prototype.mb = function() {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
        var c = this.h.length;
        for (b = 0; b < c; ++b) a.push(this.h[b]);
        return a
    };
    _.h = tj.prototype;
    _.h.Ui = function() {
        return this.iq++
    };
    _.h.ub = function() {
        return this.g ? this.g.media || null : null
    };
    _.h.sd = function(a, b, c) {
        b = void 0 === b || b;
        if (c && !b) throw Error("No broadcast call but status customData has been provided");
        this.g && (this.g.media = a);
        b && this.ba(!0, null, c)
    };
    _.h.Bc = function() {
        return this.pa
    };
    _.h.je = function(a, b) {
        this.pa !== a && (this.pa = a, (void 0 === b || b) && this.g && this.ba(!1))
    };
    _.h.we = function(a) {
        this.je(a | this.Bc())
    };
    _.h.Gh = function(a) {
        this.je(~a & this.Bc())
    };
    _.h.Ab = function(a) {
        zj(this, this.U, a)
    };
    _.h.ph = function(a) {
        var b = a.data,
            c = b.type;
        if ("SHUTDOWN" == c) this.wa.stop();
        else if (this.O && "LOAD" != c) _.H(N, "Load is in progress, media command is being queued."), this.wc.h.push(a);
        else {
            a = a.senderId;
            var d = b.type;
            var e = b.requestId;
            if ("number" !== typeof e || e != Math.floor(e)) _.G(N, "Ignoring request, requestId is not an integer: " + e), d = !1;
            else {
                var f = !1;
                void 0 != b.mediaSessionId && b.mediaSessionId != this.G ? (_.G(N, "Invalid media session ID: " + b.mediaSessionId + "  does not match the expected ID: " + this.G), f = !0) :
                    "LOAD" != d && "PLAY_AGAIN" != d && "GET_STATUS" != d && "QUEUE_LOAD" != d && "PRECACHE" != d && "STORE_SESSION" != d && "RESUME_SESSION" != d && (void 0 === b.mediaSessionId ? (_.G(N, "Invalid media session ID, it is undefined"), f = !0) : "IDLE" == Bj(this) && (_.G(N, "Unexpected command, player is in IDLE state so the media session ID is not valid yet"), f = !0));
                f ? (this.Ja(a, e, "INVALID_REQUEST", "INVALID_MEDIA_SESSION_ID"), d = !1) : (le(N, Ax, "MediaManager message received"), d = !0)
            }
            if (d) {
                d = b.requestId;
                e = null;
                switch (c) {
                    case "LOAD":
                        this.W = !1;
                        e = Mj(this,
                            a, b, !0);
                        break;
                    case "GET_STATUS":
                        _.I(N, "Dispatching MediaManager getStatus event");
                        b = new Nj("getstatus", b, a);
                        this.vf && this.vf(b);
                        Oj(this, b);
                        e = null;
                        break;
                    case "PLAY":
                        _.I(N, "Dispatching MediaManager play event");
                        b = new Nj("play", b, a);
                        this.Id && this.Id(b);
                        Oj(this, b);
                        e = null;
                        break;
                    case "PLAY_AGAIN":
                        _.I(N, "Dispatching MediaManager play again event");
                        b = new Nj("playagain", b, a);
                        this.wf && this.wf(b);
                        Oj(this, b);
                        e = null;
                        break;
                    case "SEEK":
                        void 0 === b.currentTime && void 0 === b.relativeTime ? (_.G(N, "currentTime or relativeTime is required"),
                            e = {
                                type: "INVALID_REQUEST",
                                reason: "INVALID_PARAMS"
                            }) : (_.I(N, "Dispatching MediaManager seek event"), b = new Nj("seek", b, a), this.Jd && this.Jd(b), Oj(this, b), e = null);
                        break;
                    case "SET_PLAYBACK_RATE":
                        (e = b.playbackRate) || (e = b.relativePlaybackRate * this.A);
                        "number" !== typeof e || .5 > e || 2 < e ? (_.G(N, "Bad value for playback rate " + e), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        }) : (_.I(N, "Dispatching MediaManager playback rate event"), b = new Nj("setplaybackrate", b, a), this.de && this.de(b), Oj(this, b), e = null);
                        break;
                    case "STOP":
                        _.I(N,
                            "Dispatching MediaManager stop event");
                        b = new Nj("stop", b, a);
                        this.Fe && this.Fe(b);
                        Oj(this, b);
                        e = null;
                        break;
                    case "PAUSE":
                        _.I(N, "Dispatching MediaManager pause event");
                        b = new Nj("pause", b, a);
                        this.Hd && this.Hd(b);
                        Oj(this, b);
                        e = null;
                        break;
                    case "SKIP_AD":
                        _.I(N, "Dispatching MediaManager skip ad event");
                        e = new Nj("skipad", b, a);
                        this.ee ? this.ee(e) : this.Ja(a, b.requestId, "INVALID_REQUEST", "NOT_SUPPORTED");
                        Oj(this, e);
                        e = null;
                        break;
                    case "SET_VOLUME":
                        !b.volume || void 0 === b.volume.level && void 0 === b.volume.muted ? (_.G(N, "volume is invalid"),
                            e = {
                                type: "INVALID_REQUEST",
                                reason: "INVALID_PARAMS"
                            }) : void 0 != b.volume.level && 0 > b.volume.level || 1 < b.volume.level ? (_.G(N, "volume level is invalid"), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        }) : (_.I(N, "Dispatching MediaManager setvolume event"), b = new Nj("setvolume", b, a), this.Cf && this.Cf(b), Oj(this, b), e = null);
                        break;
                    case "EDIT_TRACKS_INFO":
                        _.I(N, "Dispatching MediaManager editTracksInfo event");
                        yj(this.g.media.tracks, b.activeTrackIds) ? (e = new Nj("edittracksinfo", b, a), b.textTrackStyle && (this.g.media.textTrackStyle =
                            b.textTrackStyle), b.activeTrackIds && (this.g.activeTrackIds = b.activeTrackIds), this.uf && this.uf(e), Oj(this, e), e = null) : (_.G(N, "Invalid track info"), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        });
                        break;
                    case "EDIT_AUDIO_TRACKS":
                        _.I(N, "Dispatching MediaManager editAudioTracks event");
                        b = new Nj("editaudiotracks", b, a);
                        this.tf && this.tf(b);
                        Oj(this, b);
                        e = null;
                        break;
                    case "QUEUE_LOAD":
                        this.W = !0;
                        _.I(N, "Dispatching MediaManager queueLoad event");
                        Qi(this.h, b) ? (b.items = Zj(b.items), b = new Nj("queueload", b, a), this.zf &&
                            this.zf(b), Oj(this, b), e = null) : e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        };
                        break;
                    case "QUEUE_INSERT":
                        this.W = !0;
                        _.I(N, "Dispatching MediaManager queueInsert event");
                        e = !1;
                        if (Yi(this.h))
                            if (b.items && 0 != b.items.length)
                                if (void 0 !== b.currentItemId && void 0 !== b.currentItemIndex) _.G(N, "Maximum one currentItem must be provided"), e = !0;
                                else if (void 0 !== b.currentItemIndex && ("number" !== typeof b.currentItemIndex || 0 > b.currentItemIndex || b.currentItemIndex >= b.items.length)) _.G(N, "Invalid currentItemIndex"), e = !0;
                        else if (void 0 !== b.currentItemId && ("number" !== typeof b.currentItemId || 0 > b.currentItemId)) _.G(N, "Invalid currentItemId"), e = !0;
                        else
                            for (c = 0; c < b.items.length; c++)
                                if ("number" === typeof b.items[c].itemId) {
                                    _.G(N, "Item contains an itemId at index: " + c);
                                    e = !0;
                                    break
                                } else b.items[c].itemId = this.Ui();
                        else _.G(N, "No items to insert"), e = !0;
                        else _.G(N, "Queue does not exist"), e = !0;
                        e ? e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        } : (b.items = Zj(b.items), b = new Nj("queueinsert", b, a), this.yf && this.yf(b), Oj(this, b), e =
                            null);
                        break;
                    case "QUEUE_UPDATE":
                        e = ek(this, a, b);
                        break;
                    case "QUEUE_REMOVE":
                        _.I(N, "Dispatching MediaManager queueRemove event");
                        e = !1;
                        Yi(this.h) ? b.itemIds && 0 != b.itemIds.length ? Xj(b.itemIds) || (e = !0) : (_.G(N, "No itemIds to remove"), e = !0) : (_.G(N, "Queue does not exist"), e = !0);
                        e ? e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        } : (b.itemIds && (b.itemIds = $i(this.h, b.itemIds)), b = new Nj("queueremove", b, a), this.Af && this.Af(b), Oj(this, b), e = null);
                        break;
                    case "QUEUE_REORDER":
                        _.I(N, "Dispatching MediaManager queueReorder event");
                        e = !1;
                        Yi(this.h) ? b.itemIds && 0 != b.itemIds.length ? Xj(b.itemIds) ? void 0 !== b.insertBefore && _.db(b.itemIds, b.insertBefore) && (_.G(N, "insertBefore can not be one of the reordered items"), e = !0) : e = !0 : (_.G(N, "No itemIds to reorder"), e = !0) : (_.G(N, "Queue does not exist"), e = !0);
                        e ? e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_PARAMS"
                        } : (b.itemIds && (b.itemIds = $i(this.h, b.itemIds)), b = new Nj("queuereorder", b, a), this.Bf && this.Bf(b), Oj(this, b), e = null);
                        break;
                    case "PRECACHE":
                        b = new Nj("precache", b, "__broadcast__");
                        this.rh &&
                            this.rh(b);
                        Oj(this, b);
                        break;
                    case "QUEUE_NEXT":
                        c = new jk;
                        c.jump = 1;
                        c.requestId = b.requestId;
                        ek(this, a, c);
                        break;
                    case "QUEUE_PREV":
                        c = new jk;
                        c.jump = -1;
                        c.requestId = b.requestId;
                        ek(this, a, c);
                        break;
                    case "QUEUE_GET_ITEM_RANGE":
                        b = new Nj("getitemsrange", b, a);
                        this.nj && this.nj(b);
                        Oj(this, b);
                        break;
                    case "QUEUE_GET_ITEMS":
                        b = new Nj("getitemsinfo", b, a);
                        this.qj && this.qj(b);
                        Oj(this, b);
                        break;
                    case "QUEUE_GET_ITEM_IDS":
                        b = new Nj("getqueueids", b, a);
                        this.Ej && this.Ej(b);
                        Oj(this, b);
                        break;
                    case "QUEUE_SHUFFLE":
                        b = new Nj("shuffle",
                            b, a);
                        this.Gj && this.Gj(b);
                        Oj(this, b);
                        break;
                    case "USER_ACTION":
                        c = new Nj("useraction", b, a);
                        this.Ca ? this.Ca(c) : this.Ja(a, b.requestId, "INVALID_REQUEST", "NOT_SUPPORTED");
                        Oj(this, c);
                        break;
                    case "STORE_SESSION":
                        c = new Nj("storesession", b, a);
                        this.fe ? this.fe(c) : this.Ja(a, b.requestId, "INVALID_REQUEST", "NOT_SUPPORTED");
                        Oj(this, c);
                        break;
                    case "RESUME_SESSION":
                        c = new Nj("resumesession", b, a);
                        this.ce ? this.ce(c) : this.Ja(a, b.requestId, "INVALID_REQUEST", "NOT_SUPPORTED");
                        Oj(this, c);
                        break;
                    default:
                        _.G(N, "Unexpected message type: " +
                            c), e = {
                            type: "INVALID_REQUEST",
                            reason: "INVALID_COMMAND"
                        }
                }
                Aj(this, e, a, d)
            }
        }
    };
    _.h.cn = function() {
        this.Y = _.jf(this.sa, 1E3);
        var a = Bj(this);
        if ("IDLE" != a && "PAUSED" != a) {
            this.O && "PLAYING" == a && (_.H(N, "Triggering load complete, since media is playing."), Sj(this));
            var b = this.K;
            this.K = this.l.getCurrentTimeSec();
            var c = this.H;
            this.H = this.Vh ? "BUFFERING" === this.l.getState() : 100 > 1E3 * Math.abs(this.K - b);
            c != this.H ? (le(N, Ax, "Buffering state changed, isPlayerBuffering: " + this.H + " old time: " + b + " current time: " + this.K), this.ba(!1)) : this.Gb !== a ? (le(N, Ax, "Player state changed, playerState: " + a + " old state: " +
                this.Gb + " current time: " + this.K), this.ba(!1)) : this.H || this.ab || (a = 1E3 * (this.K - this.kj) - this.A * ((0, _.M)() - this.Nj), 1E3 < Math.abs(a) ? (le(N, Ax, "Time drifted: " + a), this.ba(!1)) : this.g && Yi(this.h) && (a = this.h, (a = 0 > a.h ? null : "REPEAT_SINGLE" == a.o ? a.g[a.h] : a.h + 1 >= a.g.length && ("REPEAT_ALL_AND_SHUFFLE" == a.o || "REPEAT_OFF" == a.o) ? null : a.g[(a.h + 1) % a.g.length]) && "number" === typeof a.preloadTime && this.g.media && !this.o && "LIVE" != this.g.media.streamType && dk(this, a.preloadTime) && this.M != a.itemId && (this.ae ? (b = new gk(a.itemId),
                b.requestId = 0, b.mediaSessionId = this.G, b.autoplay = a.autoplay, b.currentTime = a.startTime, b.customData = a.customData || void 0, b.activeTrackIds = a.activeTrackIds, b.media = a.media, b = new Nj("preload", b, ""), this.M = a.itemId, _.I(N, "Sending preload event: " + JSON.stringify(b)), this.ae(b) && this.ba(!1)) : _.I(N, "Not sending preload event"))))
        }
    };
    _.h.ba = function(a, b, c, d) {
        var e = this;
        if (this.l) {
            le(N, Ax, "Sending broadcast status message");
            var f = function(g) {
                null != g && (g.status && (e.da && e.da(g.status[0] || null), _.Ka(g.status[0]) && (e.Gb = g.status[0].playerState)), g.requestId = b || 0, e.w.send("*:*", g), Fj(e), Hj(e, g))
            };
            a = Dj(this, a, c, d);
            pj(a) ? a.then(f) : f(a)
        } else _.G(N, "Not sending broadcast status message, state is invalid")
    };
    _.h.Mh = function(a) {
        le(N, Ax, "Setting IDLE reason: " + a);
        this.D = a
    };
    _.h.Ja = function(a, b, c, d, e, f, g) {
        _.I(N, "Sending error message to " + a);
        var k = {};
        k.requestId = b;
        k.type = c;
        d && (k.reason = d);
        e && (k.customData = e);
        f && (k.detailedErrorCode = f);
        void 0 !== g && (k.itemId = g);
        this.w.send(a, k)
    };
    _.h.Kf = function(a, b, c, d, e) {
        var f = this;
        if (this.l) {
            le(N, Ax, "Sending status message to " + a);
            var g = function(k) {
                null != k && (f.da && k.status && f.da(k.status[0] || null), k.requestId = b, f.w.send(a, k), Fj(f))
            };
            c = Dj(this, c, d, e);
            pj(c) ? c.then(g) : g(c)
        } else _.G(N, "State is invalid"), this.Ja(a, b, "INVALID_PLAYER_STATE", null, d)
    };
    _.h.on = function(a) {
        return a
    };
    _.h.load = function(a) {
        a.type = "LOAD";
        zj(this, this.U, a)
    };
    _.h.An = function(a) {
        a = a.data;
        if (a.media && (a.media.contentUrl || a.media.contentId)) {
            var b = void 0 !== a.autoplay ? a.autoplay : !0,
                c = a.media.contentUrl || a.media.contentId;
            a.media.tracks ? this.l.load(c, b, a.currentTime, {
                tracks: a.media.tracks,
                activeTrackIds: a.activeTrackIds,
                textTrackStyle: a.media.textTrackStyle
            }, void 0, a.playbackRate) : this.l.load(c, b, a.currentTime, void 0, void 0, a.playbackRate)
        }
    };
    _.h.Bb = function(a) {
        if (a != this.l) {
            this.l && (this.l.unregisterErrorCallback(), this.l.unregisterEndedCallback(), this.l.unregisterLoadCallback());
            (this.na = a.getState ? !1 : !0) ? this.l = new Ci(a): this.l = a;
            this.l.registerErrorCallback(this.en.bind(this));
            this.l.registerEndedCallback(this.dn.bind(this));
            this.l.registerLoadCallback(this.fn.bind(this));
            var b = this.ca;
            b.g && b.g.removeEventListener("resize", b.o);
            var c = null;
            a.tagName && "video" == a.tagName.toLowerCase() ? c = a : (a = document.getElementsByTagName("video"), 1 ==
                a.length && (c = a[0]));
            b.g = c;
            b.g && b.g.addEventListener("resize", b.o)
        }
    };
    _.h.Nh = function(a) {
        this.h.Nh(a)
    };
    _.h.fn = function() {
        if (this.o) {
            _.I(N, "Metadata loaded");
            if (this.g && this.g.media) {
                var a = this.l.getDurationSec(); - 1 != a && Infinity != a || this.g.media.streamType && "NONE" != this.g.media.streamType ? -1 == a || Infinity == a || this.g.media.streamType && "NONE" != this.g.media.streamType || (_.H(N, "Media streamType is initially set wrong, changed to buffered."), this.g.media.streamType = "BUFFERED") : (_.H(N, "Media streamType is initially set wrong, changed to live."), this.g.media.streamType = "LIVE");
                this.g.media.duration = a;
                this.h.ec().media.duration =
                    a
            }
            this.H = !0;
            this.qh ? this.qh(this.o) : Ij(this)
        }
    };
    _.h.Bn = function(a) {
        this.na && a.message && void 0 != a.message.currentTime && a.message.currentTime != this.l.getCurrentTimeSec() && this.l.seek(a.message.currentTime);
        Sj(this)
    };
    _.h.en = function(a) {
        this.o ? (_.G(N, "Load metadata error: " + a), this.Eg ? this.Eg(this.o, a) : Ij(this)) : this.gj && this.gj(a)
    };
    _.h.un = function(a) {
        Tj(this, a)
    };
    _.h.zn = function(a, b) {
        Tj(this, b)
    };
    _.h.dn = function() {
        this.Kd && this.Kd()
    };
    _.h.tn = function(a, b) {
        if (Yi(this.h)) {
            var c = -1 != this.la ? this.la : void 0;
            this.la = -1;
            Uj(this, "REPEAT_SINGLE" == this.h.o ? 0 : 1, !1, c, void 0, void 0, void 0, void 0 === a ? "FINISHED" : a, void 0 === b ? null : b)
        }
    };
    _.h.Fn = function(a, b) {
        Kj(this, a, !0, b)
    };
    _.h.ap = function(a, b, c, d, e, f, g, k) {
        g = g || "INTERRUPTED";
        if (Yi(this.h) && "QUEUE_ENDED" != hj(this.h, a, !1)) {
            var l = hj(this.h, a, !0);
            _.I(N, "After " + a + " jump, transition is: " + l);
            (a = bk(this, this.h.ec(), void 0, f)) ? (this.g && (this.D = g, this.I = this.g, this.g = null, this.N = [], "QUEUE_SHUFFLED" == l && (e = !0), "INTERRUPTED" == this.D && this.lj()), b = this.ba.bind(this, b, c, d, e), c = "", this.o && (a.requestId = this.o.message.requestId, c = this.o.senderId || c, this.o = null), Mj(this, c, a, !1, b, k)) : this.ka && this.ka(g, c)
        } else this.ka && this.ka(g, c)
    };
    _.h.yn = function(a) {
        le(N, Ax, "onGetStatus");
        var b = a.data;
        le(N, Ax, "onGetStatus: " + JSON.stringify(b));
        var c = !0,
            d = !0;
        b.options && (b.options & 1 && (c = !1), b.options & 1 && (d = !1));
        this.Kf(a.senderId, a.data.requestId, c, null, d)
    };
    _.h.En = function(a) {
        le(N, Ax, "onPlay");
        this.l.play();
        this.ba(!1, a.data.requestId)
    };
    _.h.Dn = function(a) {
        le(N, Ax, "onPlayAgain");
        this.g ? (this.l.seek(0), this.l.play(), this.ba(!1, a.data.requestId)) : this.C && (this.C.type = "LOAD", this.C.autoplay = !0, zj(this, this.U, this.C))
    };
    _.h.Kn = function(a) {
        a = a.data;
        le(N, Ax, "onSeek: " + JSON.stringify(a));
        var b = void 0 !== a.relativeTime ? this.l.getCurrentTimeSec() + a.relativeTime : a.currentTime;
        this.l.seek(b, a.resumeState);
        "PAUSED" != this.l.getState() && (this.H = !0);
        b = this.l.getDurationSec(); - 1 == b || Infinity == b || this.l.getCurrentTimeSec() < this.l.getDurationSec() ? this.ba(!1, a.requestId) : this.la = a.requestId
    };
    _.h.Ln = function(a) {
        a = a.data;
        le(N, Ax, "onSetPlaybackRate: " + JSON.stringify(a));
        this.l.setPlaybackRate ? this.A = this.l.setPlaybackRate(Number(a.playbackRate ? a.playbackRate : this.A * a.relativePlaybackRate)) : _.H(N, "setPlaybackRate is not supported");
        this.ba(!1, a.requestId)
    };
    _.h.getPlaybackRate = function() {
        return this.A
    };
    _.h.On = function(a) {
        Kj(this, "CANCELLED", !0, a.data.requestId)
    };
    _.h.Cn = function(a) {
        this.l.pause();
        this.ba(!1, a.data.requestId)
    };
    _.h.Mn = function(a) {
        a = a.data;
        this.l.setVolume(a.volume);
        this.ba(!1, a.requestId)
    };
    _.h.rn = function(a) {
        var b = a.data,
            c;
        a: {
            var d = this.g.media.tracks;
            if (c = b.language) {
                if (d) {
                    d = _.p(d);
                    for (var e = d.next(); !e.done; e = d.next())
                        if (e = e.value, "TEXT" == e.type && void 0 !== e.language && cast.receiver.md(e.language, c)) {
                            c = !0;
                            break a
                        }
                }
                c = !1
            } else c = !0
        }
        if (c) {
            if (!b.activeTrackIds && !b.language && void 0 !== b.enableTextTracks)
                if (c = Wj(this, b)) b.activeTrackIds = c;
                else {
                    this.Ja(a.senderId, b.requestId, "INVALID_REQUEST", "INVALID_PARAMS");
                    return
                }
            a = {
                activeTrackIds: b.activeTrackIds,
                language: b.language,
                textTrackStyle: b.textTrackStyle
            };
            this.l.editTracksInfo && (this.g.activeTrackIds = this.l.editTracksInfo(a) || void 0);
            this.ba(b.textTrackStyle ? !0 : !1, b.requestId)
        } else _.G(N, "Invalid track language"), this.Ja(a.senderId, b.requestId, "INVALID_REQUEST", "LANGUAGE_NOT_SUPPORTED")
    };
    _.h.qn = function(a) {
        var b = a.data,
            c;
        a: {
            var d = this.g.media.tracks;
            if (c = b.language) {
                if (d) {
                    d = _.p(d);
                    for (var e = d.next(); !e.done; e = d.next())
                        if (e = e.value, "AUDIO" == e.type && void 0 !== e.language && cast.receiver.md(e.language, c)) {
                            c = !0;
                            break a
                        }
                }
                c = !1
            } else c = !0
        }
        c ? (this.l.ah && (this.g.activeTrackIds = this.l.ah(b)), this.ba(!1, b.requestId)) : (_.G(N, "Invalid audio track language"), this.Ja(a.senderId, b.requestId, "INVALID_REQUEST", "LANGUAGE_NOT_SUPPORTED"))
    };
    _.h.Hn = function(a) {
        var b = a.data,
            c = bk(this, b.items ? b.items[b.startIndex || 0] : null, b.requestId, b.currentTime),
            d = new zc;
        d.items = b.items;
        d.startIndex = b.startIndex || 0;
        d.startTime = b.currentTime;
        d.repeatMode = b.repeatMode || "REPEAT_OFF";
        c.queueData = d;
        c ? Mj(this, a.senderId, c, !0) : _.G(N, "Queue Load request is invalid")
    };
    _.h.Gn = function(a) {
        a = a.data;
        _.I(N, "Queue insert data: " + JSON.stringify(a));
        var b = !1;
        void 0 !== a.currentItemId && (b = dj(this.h, a.currentItemId));
        void 0 !== a.currentItemIndex && (b = !0);
        var c = this.h.Pg(a.items, a.insertBefore, a.currentItemIndex);
        fk(this, "INSERT", c, a.insertBefore);
        b ? Uj(this, 0, !0, a.requestId, a.customData, !0, a.currentTime) : this.ba(!0, a.requestId, a.customData, !0)
    };
    _.h.vn = function(a) {
        var b = this,
            c = a.data;
        this.h.fetchItems(c.requestId, c.itemId, c.nextCount, c.prevCount).then(function(d) {
            Pj(b, d, a.senderId, c)
        }, function() {
            Aj(b, {
                type: "INVALID_REQUEST",
                reason: "INVALID_COMMAND"
            }, a.senderId, c.requestId)
        })
    };
    _.h.wn = function(a) {
        var b = a.data;
        this.w.send(a.senderId, Ti(this.h, b.requestId, b.itemIds))
    };
    _.h.xn = function(a) {
        this.w.send(a.senderId, Ui(this.h, a.data.requestId))
    };
    _.h.Nn = function(a) {
        var b = this,
            c = a.data;
        this.h.shuffle().then(function() {
            b.ba(!1, c.requestId, c.customData, !0)
        })
    };
    _.h.Li = function(a) {
        var b = a.data;
        if (this.W) {
            _.I(N, "Queue update data: " + JSON.stringify(b));
            var c = a = !1;
            "number" === typeof b.currentItemId && (c = dj(this.h, b.currentItemId));
            "number" === typeof b.jump && (c = !0, this.R && (a = !0));
            b.repeatMode && Zi(this.h, b.repeatMode);
            if (b.items && 0 < b.items.length) {
                this.h.Wh(b.items);
                a = !0;
                var d = "ITEMS_CHANGE";
                var e = b.items.map(function(f) {
                    return f.itemId
                })
            }
            void 0 !== b.shuffle && (b.shuffle ? this.h.shuffle() : this.h.Tf(), c = !0, d = "UPDATE", e = this.h.yc().map(function(f) {
                return f.itemId
            }));
            d && e && fk(this, d, e);
            c ? Uj(this, b.jump || 0, a, b.requestId, b.customData, a, b.currentTime) : this.ba(a, b.requestId, b.customData, a)
        } else d = a.senderId, b.repeatMode && !b.jump ? (Zi(this.h, b.repeatMode), _.I(N, "repeatMode set. The rest of QUEUE_UPDATE was ignored.")) : d == cast.receiver.Dc.pe && this.be == this.Li ? this.Ja(d, b.requestId, "INVALID_REQUEST", "INVALID_COMMAND") : (_.I(N, "QUEUE_UPDATE request ignored"), this.ba(!1, b.requestId))
    };
    _.h.In = function(a) {
        a = a.data;
        _.I(N, "Queue remove data: " + JSON.stringify(a));
        var b = !1;
        "number" === typeof a.currentItemId && (b = dj(this.h, a.currentItemId));
        a.itemIds && 0 != a.itemIds.length ? (b = b || this.h.Fh(a.itemIds), fk(this, "REMOVE", a.itemIds), b ? Uj(this, 0, !1, a.requestId, a.customData, !0, a.currentTime) : this.ba(!1, a.requestId, a.customData, !0)) : _.G(N, "No itemIds to remove")
    };
    _.h.Jn = function(a) {
        a = a.data;
        _.I(N, "Queue reorder data: " + JSON.stringify(a));
        var b = !1,
            c = !1;
        "number" === typeof a.currentItemId && (c = dj(this.h, a.currentItemId));
        a.itemIds && 0 < a.itemIds.length && (fj(this.h, a.itemIds, a.insertBefore), b = !0);
        var d = this.h.yc().map(function(e) {
            return e.itemId
        });
        fk(this, "UPDATE", d, a.insertBefore);
        c ? Uj(this, 0, !1, a.requestId, a.customData, b, a.currentTime) : this.ba(!1, a.requestId, a.customData, b)
    };
    _.h.addEventListener = function(a, b) {
        _.Gd(this.za, a, b)
    };
    _.h.removeEventListener = function(a, b) {
        Rd(this.za, a, b)
    };
    _.h.dispatchEvent = function(a) {
        return Oj(this, a)
    };
    var N = _.F("cast.receiver.MediaManager");
    _.q(Nj, _.E);
    _.q(ak, ck);
    _.q(gk, ak);
    _.q(hk, ck);
    _.q(ik, ck);
    _.q(jk, ck);
    _.q(kk, ck);
    var $n = _.F("cast.receiver.ui.ControlsImplementationHelper");
    var uk = _.F("cast.receiver.ui.ControlsMessageHelper");
    Ag(_.zg.F(), cast.receiver.Db.Zb, "JSON");
    tk.prototype.g = function(a) {
        if ("SHUTDOWN" === a.type) this.G.stop();
        else {
            if (!this.l) throw Error("Media channel is not set");
            if (!this.o && "LOAD" !== a.type) throw Error("Invalid Media Session Id");
            a.mediaSessionId = this.o;
            rg(this.l, cast.receiver.media.gb, this.w, this.l.H(a))
        }
    };
    tk.prototype.H = function(a) {
        if (!this.h) throw Error("Command and control channel is not set");
        rg(this.h, cast.receiver.Db.Zb, this.w, this.h.H(a))
    };
    cast.receiver.J.al = function(a) {
        a.innerHTML = "<style>@import url(//fonts.googleapis.com/css?family=Google+Sans:400,500);html{--cast-controls-horizontal-padding:56px;--cast-controls-safe-area-height:calc(100vh - 192px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){html{--cast-controls-horizontal-padding:112px;--cast-controls-safe-area-height:calc(100vh - 240px)}}html[data-cast-extended-controls='true']{--cast-controls-safe-area-height:calc(100vh - 262px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){html[data-cast-extended-controls='true']{--cast-controls-safe-area-height:calc(100vh - 335px)}}body{overflow:hidden !important}</style>"
    };
    var Xx = {},
        yk = (Xx.REPEAT_OFF = {
            state: "off",
            $f: cast.receiver.V.Dl
        }, Xx.REPEAT_ALL = {
            state: "all",
            $f: cast.receiver.V.Cl
        }, Xx.REPEAT_SINGLE = {
            state: "single",
            $f: cast.receiver.V.El
        }, Xx);
    _.q(xk, cast.receiver.J.Yb);
    _.q(zk, cast.receiver.J.Yb);
    cast.receiver.J.jl = function(a) {
        a.innerHTML = '<style>.break-countdown{position:absolute;bottom:4.6875vw;left:5.72916667vw;z-index:-1;font-size:1.25vw;text-shadow:0 .10416667vw .20833333vw rgba(0,0,0,0.5);color:rgba(255,255,255,0.7)}.break-countdown .ad-label{border-radius:.15625vw;font-weight:bold;padding:.15625vw .3125vw;background-color:#fbbc04;text-shadow:none;color:#fff;margin-right:.41666667vw}.break-skip{color:#b8bdbe;background-color:#303134;outline:none;position:absolute;bottom:3.64583333vw;right:5.72916667vw;font-size:1.19791667vw;font-weight:500;padding:0 2.5vw;height:3.33333333vw;display:flex;align-items:center;justify-content:center;flex-direction:row;border-radius:1.66666667vw}.break-skip .break-skip-scrim,.break-skip .break-skip-highlight,.break-skip .skip-ad-icon{display:none}.break-skip.focused{color:#080808;background-color:#e8eaed}.break-skip.break-skip-btn-countdown{min-width:5.72916667vw;color:rgba(255,255,255,0.7);text-shadow:0 .10416667vw .20833333vw rgba(0,0,0,0.5);background-color:transparent}.break-skip .skip-ad-text{-webkit-font-smoothing:antialiased}.loading-bar{--loading-bar-width:1000px;height:100%;overflow:hidden;position:relative;transform:translateZ(0);transition:opacity 250ms linear;width:1000px}.loading-bar .rect,.loading-bar .rect-inner{height:100%;position:absolute;width:1000px}.loading-bar .rect{transform-origin:top left}.loading-bar .rect-primary{transform:scaleX(0)}.loading-bar .rect-inner{background-color:#9aa0a6;display:inline-block}.loading-bar .rect-primary{animation:primary-indeterminate-translate 2s infinite linear}.loading-bar .rect-primary>.rect-inner{animation:primary-indeterminate-scale 2s infinite linear}.loading-bar .rect-auxiliary{animation:auxiliary-indeterminate-translate 2s infinite linear}.loading-bar .rect-auxiliary>.rect-inner{animation:auxiliary-indeterminate-scale 2s infinite linear}@keyframes primary-indeterminate-translate{0%{transform:translateX(-1451.66611px)}20%{animation-timing-function:cubic-bezier(.5, 0, .701732, .495819);transform:translateX(-1451.66611px)}59.15%{animation-timing-function:cubic-bezier(.302435, .381352, .55, .956352);transform:translateX(-614.95191px)}100%{transform:translateX(554.44446px)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.334731, .12482, .785844, 1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06, .11, .6, 1);transform:scaleX(.661479)}100%{transform:scaleX(.08)}}@keyframes auxiliary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15, 0, .515058, .409685);transform:translateX(-548.88891px)}25%{animation-timing-function:cubic-bezier(.31033, .284058, .8, .733712);transform:translateX(-172.36978px)}48.35%{animation-timing-function:cubic-bezier(.4, .627035, .6, .902026);transform:translateX(294.97274px)}100%{transform:translateX(1053.88891px)}}@keyframes auxiliary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.205028, .057051, .57661, .453971);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.152313, .196432, .648374, 1.004315);transform:scaleX(.457104)}44.15%{animation-timing-function:cubic-bezier(.257759, .003163, .211762, 1.38179);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}:host{bottom:0;color:#e8eaed;font-family:\'Google Sans\',\'Roboto\',Arial,sans-serif;left:0;position:fixed;right:0;top:0;z-index:1000000}.controls-layer{display:flex;position:relative;flex-direction:column;justify-content:flex-start;height:100%;will-change:transform}.controls-toggle{position:absolute;width:100%;height:100%;top:0;left:0}.accessibility-alert,.controls-toggle{opacity:0;position:absolute;left:-9999px}.controls{box-sizing:border-box;flex:none;display:flex;flex-direction:column;justify-content:flex-end;padding:0 5.72916667vw 3.64583333vw}.scrim,.buffering-scrim{bottom:0;height:100vh;left:0;position:absolute;width:100vw;z-index:-1}.buffering-scrim{background-color:rgba(0,0,0,0.6);visibility:hidden}goog-video-metadata{display:none}goog-audio-player-compatibility{display:none}.touch-layer{height:100%;touch-action:manipulation;user-select:none;width:100%}.touch-layer.audio goog-audio-player-compatibility,.touch-layer.remote-controls goog-audio-player-compatibility{display:block}.touch-layer.with-related-content .controls-layer{height:calc(100% - 3.125vw)}.touch-layer .media-browse-scrim{display:none}.touch-layer goog-media-browse{display:none;position:relative;height:auto}.touch-layer goog-media-browse.focused{transform:translateY(-19.79166667vw)}.touch-layer .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5) 42.5%, rgba(0,0,0,0.92))}.touch-layer goog-video-metadata{align-items:flex-start;box-sizing:border-box;display:flex;flex-direction:column;flex-grow:1;text-align:left;padding:6.35416667vw 5.72916667vw 3.02083333vw}.touch-layer .logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:rgba(255,255,255,0.7);font-family:\'Roboto\',Arial,sans-serif;font-size:36px;font-weight:500;height:40px;line-height:40px;width:100%}.touch-layer .logo.app-icon{height:68px}.touch-layer .title{-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;font-weight:normal;overflow:hidden;word-break:break-word;width:auto;color:#f8f9fa;margin:0;font-size:3.75vw;line-height:4.79166667vw;letter-spacing:.375vw}.touch-layer.active .title,.touch-layer.buffering .title{width:100%}.touch-layer .subtitle{font-weight:500;margin-top:0;margin-bottom:1.25vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing:.00677083vw;font-size:2.08333333vw;line-height:2.65625vw}.touch-layer .subtitle-container{margin-top:auto;max-width:100%}.touch-layer goog-video-metadata,.touch-layer .controls{will-change:opacity,transform;opacity:0;transform:translateY(2.29166667vw);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer .scrim{will-change:opacity;opacity:0;transition:visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.active goog-video-metadata,.touch-layer.active .controls{opacity:1;transform:translateY(0);transition:transform 400ms cubic-bezier(.2, 0, 0, 1),opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.active .scrim{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.buffering .buffering-scrim{visibility:visible}.touch-layer.buffering .scrim,.touch-layer.buffering goog-video-metadata,.touch-layer.buffering .controls{opacity:1;visibility:visible;transition:none;transform:none}.touch-layer.disabled goog-audio-player-compatibility,.touch-layer.disabled .scrim,.touch-layer.disabled .buffering-scrim,.touch-layer.disabled goog-video-metadata,.touch-layer.disabled .controls-layer,.touch-layer.disabled .break-countdown,.touch-layer.disabled .break-skip{display:none !important}goog-buttons-bar{align-items:center;display:grid;grid-column-gap:3.90625vw;grid-template-columns:5.208333333333334vw 5.208333333333334vw 1fr [pr1] 5.208333333333334vw [center] 5.208333333333334vw [pr2] 5.208333333333334vw 1fr [sec1] 5.208333333333334vw [sec2] 5.208333333333334vw;flex:none;justify-content:center;margin-top:1.875vw}.btn{height:5.20833333vw;width:5.20833333vw;border-radius:2.60416667vw;display:flex;justify-content:center;align-items:center;outline:none}.btn.focused{background-color:#e8eaed}.btn-icon{height:3.125vw;width:3.125vw}.btn[aria-disabled=true]{pointer-events:none}.btn[aria-disabled=true] .btn-icon{opacity:.5}.slot.center{grid-column:center}.slot.slot-primary-1{grid-column:pr1}.slot.slot-primary-2{grid-column:pr2}.slot.slot-secondary-1{grid-column:sec1}.slot.slot-secondary-2{grid-column:sec2}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-1{grid-column:sec2}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-2{display:none}.btn-play-pause[data-state=\'playing\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M14%2012h10v36H14zm22%200h10v36H36z%27/%3E%3C/svg%3E%0A")}.btn-play-pause[data-state=\'paused\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M20%2012.5v35L47.5%2030z%27/%3E%3C/svg%3E%0A")}.btn-play-pause.focused[data-state=\'playing\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M14%2012h10v36H14zm22%200h10v36H36z%27/%3E%3C/svg%3E%0A")}.btn-play-pause.focused[data-state=\'paused\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M20%2012.5v35L47.5%2030z%27/%3E%3C/svg%3E%0A")}.btn-next .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M15%2045l21.25-15L15%2015v30zm25-30v30h5V15h-5z%27/%3E%3C/svg%3E%0A")}.btn-next.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%3E%3Cpath%20d=%27M15%2045l21.25-15L15%2015v30zm25-30v30h5V15h-5z%27/%3E%3C/svg%3E%0A")}.btn-back .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M15%2015h5v30h-5zm8.75%2015L45%2045V15z%27/%3E%3C/svg%3E%0A")}.btn-back.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%3E%3Cpath%20d=%27M15%2015h5v30h-5zm8.75%2015L45%2045V15z%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M22.816%2029.74l-2.06%201.5-1.32-2.02%204.02-2.9h1.98V40h-2.62V29.74zm11.912%2010.58c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-10.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27/%3E%3Cpath%20d=%27M22.816%2029.74l-2.06%201.5-1.32-2.02%204.02-2.9h1.98V40h-2.62V29.74zm11.912%2010.58c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M25.643%2040V26H23.62L19.5%2028.969l1.356%202.073%202.125-1.536V40h2.662zm8.682-2.425c-.65%200-1.175-.2-1.6-.6-.425-.4-.725-.925-.875-1.6l-2.35.925c.175.825.525%201.5%201.025%202.05.5.55%201.075.975%201.75%201.25s1.35.4%202.075.4c.925%200%201.775-.2%202.5-.6.725-.4%201.3-.95%201.725-1.65.425-.7.625-1.525.625-2.425%200-.9-.2-1.7-.6-2.4-.4-.7-.925-1.25-1.6-1.625s-1.375-.575-2.125-.575c-.925%200-1.725.275-2.375.825l-.15-.05.5-3.2h5.55V26h-7.725l-.775%206.85L32.45%2034c.225-.275.5-.5.825-.675.325-.175.7-.25%201.1-.25.65%200%201.2.225%201.6.65.425.425.625.975.625%201.6%200%20.65-.225%201.2-.65%201.625-.45.425-1%20.625-1.625.625z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-15.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27/%3E%3Cpath%20d=%27M25.643%2040V26H23.62L19.5%2028.969l1.356%202.073%202.125-1.536V40h2.662zm8.682-2.425c-.65%200-1.175-.2-1.6-.6-.425-.4-.725-.925-.875-1.6l-2.35.925c.175.825.525%201.5%201.025%202.05.5.55%201.075.975%201.75%201.25s1.35.4%202.075.4c.925%200%201.775-.2%202.5-.6.725-.4%201.3-.95%201.725-1.65.425-.7.625-1.525.625-2.425%200-.9-.2-1.7-.6-2.4-.4-.7-.925-1.25-1.6-1.625s-1.375-.575-2.125-.575c-.925%200-1.725.275-2.375.825l-.15-.05.5-3.2h5.55V26h-7.725l-.775%206.85L32.45%2034c.225-.275.5-.5.825-.675.325-.175.7-.25%201.1-.25.65%200%201.2.225%201.6.65.425.425.625.975.625%201.6%200%20.65-.225%201.2-.65%201.625-.45.425-1%20.625-1.625.625z%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M22.349%2040.32c-1.16%200-2.187-.307-3.08-.92-.88-.613-1.487-1.507-1.82-2.68l2.48-.98c.16.653.447%201.16.86%201.52.413.347.933.52%201.56.52.573%200%201.067-.173%201.48-.52.427-.347.64-.787.64-1.32%200-.573-.227-1.027-.68-1.36-.44-.347-1.04-.52-1.8-.52h-1.18v-2.38h1.08c.587%200%201.08-.147%201.48-.44.413-.293.62-.72.62-1.28%200-.453-.167-.827-.5-1.12-.334-.293-.76-.44-1.28-.44-.547%200-.987.147-1.32.44-.334.293-.567.66-.7%201.1l-2.38-.98c.28-.8.793-1.493%201.54-2.08.76-.587%201.72-.88%202.88-.88.853%200%201.613.16%202.28.48.68.32%201.206.76%201.58%201.32a3.22%203.22%200%2001.56%201.86c0%20.733-.174%201.36-.52%201.88-.334.52-.74.9-1.22%201.14v.16a3.606%203.606%200%20011.62%201.26c.413.573.62%201.267.62%202.08%200%20.787-.2%201.493-.6%202.12-.4.627-.967%201.12-1.7%201.48-.72.36-1.553.54-2.5.54zm13.246%200c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-forward-30.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M52.5%2032.5C52.5%2044.925%2042.425%2055%2030%2055S7.5%2044.925%207.5%2032.5%2017.575%2010%2030%2010c.525%200%201.05.05%201.55.1l-4.575-4.575L30.5%202l10.525%2010.5L30.5%2023.025%2026.975%2019.5l4.375-4.375C30.9%2015.075%2030.475%2015%2030%2015c-9.65%200-17.5%207.85-17.5%2017.5S20.35%2050%2030%2050s17.5-7.85%2017.5-17.5h5z%27%20fill=%27%23000%27/%3E%3Cpath%20d=%27M22.349%2040.32c-1.16%200-2.187-.307-3.08-.92-.88-.613-1.487-1.507-1.82-2.68l2.48-.98c.16.653.447%201.16.86%201.52.413.347.933.52%201.56.52.573%200%201.067-.173%201.48-.52.427-.347.64-.787.64-1.32%200-.573-.227-1.027-.68-1.36-.44-.347-1.04-.52-1.8-.52h-1.18v-2.38h1.08c.587%200%201.08-.147%201.48-.44.413-.293.62-.72.62-1.28%200-.453-.167-.827-.5-1.12-.334-.293-.76-.44-1.28-.44-.547%200-.987.147-1.32.44-.334.293-.567.66-.7%201.1l-2.38-.98c.28-.8.793-1.493%201.54-2.08.76-.587%201.72-.88%202.88-.88.853%200%201.613.16%202.28.48.68.32%201.206.76%201.58%201.32a3.22%203.22%200%2001.56%201.86c0%20.733-.174%201.36-.52%201.88-.334.52-.74.9-1.22%201.14v.16a3.606%203.606%200%20011.62%201.26c.413.573.62%201.267.62%202.08%200%20.787-.2%201.493-.6%202.12-.4.627-.967%201.12-1.7%201.48-.72.36-1.553.54-2.5.54zm13.246%200c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23000%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M22.816%2029.74l-2.06%201.5-1.32-2.02%204.02-2.9h1.98V40h-2.62V29.74zm11.912%2010.58c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-10.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27/%3E%3Cpath%20d=%27M22.816%2029.74l-2.06%201.5-1.32-2.02%204.02-2.9h1.98V40h-2.62V29.74zm11.912%2010.58c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M25.643%2040V26H23.62L19.5%2028.969l1.356%202.073%202.125-1.536V40h2.662zm8.682-2.425c-.65%200-1.175-.2-1.6-.6-.425-.4-.725-.925-.875-1.6l-2.35.925c.175.825.525%201.5%201.025%202.05.5.55%201.075.975%201.75%201.25s1.35.4%202.075.4c.925%200%201.775-.2%202.5-.6.725-.4%201.3-.95%201.725-1.65.425-.7.625-1.525.625-2.425%200-.9-.2-1.7-.6-2.4-.4-.7-.925-1.25-1.6-1.625s-1.375-.575-2.125-.575c-.925%200-1.725.275-2.375.825l-.15-.05.5-3.2h5.55V26h-7.725l-.775%206.85L32.45%2034c.225-.275.5-.5.825-.675.325-.175.7-.25%201.1-.25.65%200%201.2.225%201.6.65.425.425.625.975.625%201.6%200%20.65-.225%201.2-.65%201.625-.45.425-1%20.625-1.625.625z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-15.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27/%3E%3Cpath%20d=%27M25.643%2040V26H23.62L19.5%2028.969l1.356%202.073%202.125-1.536V40h2.662zm8.682-2.425c-.65%200-1.175-.2-1.6-.6-.425-.4-.725-.925-.875-1.6l-2.35.925c.175.825.525%201.5%201.025%202.05.5.55%201.075.975%201.75%201.25s1.35.4%202.075.4c.925%200%201.775-.2%202.5-.6.725-.4%201.3-.95%201.725-1.65.425-.7.625-1.525.625-2.425%200-.9-.2-1.7-.6-2.4-.4-.7-.925-1.25-1.6-1.625s-1.375-.575-2.125-.575c-.925%200-1.725.275-2.375.825l-.15-.05.5-3.2h5.55V26h-7.725l-.775%206.85L32.45%2034c.225-.275.5-.5.825-.675.325-.175.7-.25%201.1-.25.65%200%201.2.225%201.6.65.425.425.625.975.625%201.6%200%20.65-.225%201.2-.65%201.625-.45.425-1%20.625-1.625.625z%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27%20fill=%27%23e8eaed%27/%3E%3Cpath%20d=%27M22.349%2040.32c-1.16%200-2.187-.307-3.08-.92-.88-.613-1.487-1.507-1.82-2.68l2.48-.98c.16.653.447%201.16.86%201.52.413.347.933.52%201.56.52.573%200%201.067-.173%201.48-.52.427-.347.64-.787.64-1.32%200-.573-.227-1.027-.68-1.36-.44-.347-1.04-.52-1.8-.52h-1.18v-2.38h1.08c.587%200%201.08-.147%201.48-.44.413-.293.62-.72.62-1.28%200-.453-.167-.827-.5-1.12-.334-.293-.76-.44-1.28-.44-.547%200-.987.147-1.32.44-.334.293-.567.66-.7%201.1l-2.38-.98c.28-.8.793-1.493%201.54-2.08.76-.587%201.72-.88%202.88-.88.853%200%201.613.16%202.28.48.68.32%201.206.76%201.58%201.32a3.22%203.22%200%2001.56%201.86c0%20.733-.174%201.36-.52%201.88-.334.52-.74.9-1.22%201.14v.16a3.606%203.606%200%20011.62%201.26c.413.573.62%201.267.62%202.08%200%20.787-.2%201.493-.6%202.12-.4.627-.967%201.12-1.7%201.48-.72.36-1.553.54-2.5.54zm13.246%200c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27%20fill=%27%23e8eaed%27/%3E%3C/svg%3E%0A")}.btn-seek-backward-30.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M30%2010c-.525%200-1.05.05-1.55.1l4.575-4.575L29.5%202%2018.975%2012.5%2029.5%2023.025l3.525-3.525-4.375-4.375c.45-.05.875-.125%201.35-.125%209.65%200%2017.5%207.85%2017.5%2017.5S39.65%2050%2030%2050s-17.5-7.85-17.5-17.5h-5C7.5%2044.925%2017.575%2055%2030%2055s22.5-10.075%2022.5-22.5S42.425%2010%2030%2010z%27/%3E%3Cpath%20d=%27M22.349%2040.32c-1.16%200-2.187-.307-3.08-.92-.88-.613-1.487-1.507-1.82-2.68l2.48-.98c.16.653.447%201.16.86%201.52.413.347.933.52%201.56.52.573%200%201.067-.173%201.48-.52.427-.347.64-.787.64-1.32%200-.573-.227-1.027-.68-1.36-.44-.347-1.04-.52-1.8-.52h-1.18v-2.38h1.08c.587%200%201.08-.147%201.48-.44.413-.293.62-.72.62-1.28%200-.453-.167-.827-.5-1.12-.334-.293-.76-.44-1.28-.44-.547%200-.987.147-1.32.44-.334.293-.567.66-.7%201.1l-2.38-.98c.28-.8.793-1.493%201.54-2.08.76-.587%201.72-.88%202.88-.88.853%200%201.613.16%202.28.48.68.32%201.206.76%201.58%201.32a3.22%203.22%200%2001.56%201.86c0%20.733-.174%201.36-.52%201.88-.334.52-.74.9-1.22%201.14v.16a3.606%203.606%200%20011.62%201.26c.413.573.62%201.267.62%202.08%200%20.787-.2%201.493-.6%202.12-.4.627-.967%201.12-1.7%201.48-.72.36-1.553.54-2.5.54zm13.246%200c-1.147%200-2.153-.307-3.02-.92-.867-.627-1.54-1.48-2.02-2.56-.467-1.093-.7-2.32-.7-3.68%200-1.36.233-2.58.7-3.66.48-1.093%201.153-1.947%202.02-2.56.867-.627%201.873-.94%203.02-.94s2.153.313%203.02.94c.867.613%201.533%201.467%202%202.56.48%201.08.72%202.3.72%203.66%200%201.36-.24%202.587-.72%203.68-.467%201.08-1.133%201.933-2%202.56-.867.613-1.873.92-3.02.92zm0-2.46c.64%200%201.193-.2%201.66-.6.48-.413.84-.973%201.08-1.68.253-.72.38-1.527.38-2.42%200-1.387-.28-2.513-.84-3.38-.56-.88-1.32-1.32-2.28-1.32-.947%200-1.7.44-2.26%201.32-.56.88-.84%202.007-.84%203.38%200%20.893.12%201.7.36%202.42.253.707.613%201.267%201.08%201.68.48.4%201.033.6%201.66.6z%27/%3E%3C/svg%3E%0A")}.btn-repeat[data-state=\'off\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23e8eaed%27%3E%3Cpath%20d=%27M7%207h10v3l4-4-4-4v3H5v6h2V7zm10%2010H7v-3l-4%204%204%204v-3h12v-6h-2v4z%27/%3E%3C/svg%3E%0A")}.btn-repeat[data-state=\'off\'].focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%3E%3Cpath%20d=%27M7%207h10v3l4-4-4-4v3H5v6h2V7zm10%2010H7v-3l-4%204%204%204v-3h12v-6h-2v4z%27/%3E%3C/svg%3E%0A")}.btn-repeat[data-state=\'all\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%230b83e5%27%3E%3Cpath%20d=%27M7%207h10v3l4-4-4-4v3H5v6h2V7zm10%2010H7v-3l-4%204%204%204v-3h12v-6h-2v4z%27/%3E%3C/svg%3E%0A")}.btn-repeat[data-state=\'single\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%230b83e5%27%3E%3Cpath%20d=%27M7%207h10v3l4-4-4-4v3H5v6h2V7zm10%2010H7v-3l-4%204%204%204v-3h12v-6h-2v4zm-4-2V9h-1l-2%201v1h1.5v4H13z%27/%3E%3C/svg%3E%0A")}.btn-shuffle .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23e8eaed%27%3E%3Cpath%20d=%27M10.59%209.17L5.41%204%204%205.41l5.17%205.17%201.42-1.41zM14.5%204l2.04%202.04L4%2018.59%205.41%2020%2017.96%207.46%2020%209.5V4h-5.5zm.33%209.41l-1.41%201.41%203.13%203.13L14.5%2020H20v-5.5l-2.04%202.04-3.13-3.13z%27/%3E%3C/svg%3E%0A")}.btn-shuffle.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%3E%3Cpath%20d=%27M10.59%209.17L5.41%204%204%205.41l5.17%205.17%201.42-1.41zM14.5%204l2.04%202.04L4%2018.59%205.41%2020%2017.96%207.46%2020%209.5V4h-5.5zm.33%209.41l-1.41%201.41%203.13%203.13L14.5%2020H20v-5.5l-2.04%202.04-3.13-3.13z%27/%3E%3C/svg%3E%0A")}.btn-shuffle[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%230b83e5%27%3E%3Cpath%20d=%27M10.59%209.17L5.41%204%204%205.41l5.17%205.17%201.42-1.41zM14.5%204l2.04%202.04L4%2018.59%205.41%2020%2017.96%207.46%2020%209.5V4h-5.5zm.33%209.41l-1.41%201.41%203.13%203.13L14.5%2020H20v-5.5l-2.04%202.04-3.13-3.13z%27/%3E%3C/svg%3E%0A")}.btn-captions .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M47.5%2010h-35c-2.775%200-5%202.25-5%205v30c0%202.75%202.225%205%205%205h35c2.75%200%205-2.25%205-5V15c0-2.75-2.25-5-5-5zm0%2035h-35V15h35v30zm-30-7.5H25c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25h3.75V25c0-1.375-1.125-2.5-2.5-2.5h-7.5A2.507%202.507%200%200015%2025v10c0%201.375%201.125%202.5%202.5%202.5zm17.5%200h7.5c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25H45V25c0-1.375-1.125-2.5-2.5-2.5H35a2.507%202.507%200%2000-2.5%202.5v10c0%201.375%201.125%202.5%202.5%202.5z%27/%3E%3C/svg%3E%0A")}.btn-captions.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M47.5%2010h-35c-2.775%200-5%202.25-5%205v30c0%202.75%202.225%205%205%205h35c2.75%200%205-2.25%205-5V15c0-2.75-2.25-5-5-5zm0%2035h-35V15h35v30zm-30-7.5H25c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25h3.75V25c0-1.375-1.125-2.5-2.5-2.5h-7.5A2.507%202.507%200%200015%2025v10c0%201.375%201.125%202.5%202.5%202.5zm17.5%200h7.5c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25H45V25c0-1.375-1.125-2.5-2.5-2.5H35a2.507%202.507%200%2000-2.5%202.5v10c0%201.375%201.125%202.5%202.5%202.5z%27/%3E%3C/svg%3E%0A")}.btn-captions[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%230b83e5%27%20d=%27M47.5%2010h-35c-2.775%200-5%202.25-5%205v30c0%202.75%202.225%205%205%205h35c2.75%200%205-2.25%205-5V15c0-2.75-2.25-5-5-5zm0%2035h-35V15h35v30zm-30-7.5H25c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25h3.75V25c0-1.375-1.125-2.5-2.5-2.5h-7.5A2.507%202.507%200%200015%2025v10c0%201.375%201.125%202.5%202.5%202.5zm17.5%200h7.5c1.375%200%202.5-1.125%202.5-2.5v-2.5h-3.75v1.25h-5v-7.5h5v1.25H45V25c0-1.375-1.125-2.5-2.5-2.5H35a2.507%202.507%200%2000-2.5%202.5v10c0%201.375%201.125%202.5%202.5%202.5z%27/%3E%3C/svg%3E%0A")}.btn-like .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M8%2048h4.5c1.238%200%202.25-1.025%202.25-2.278v-20.5c0-1.253-1.012-2.278-2.25-2.278H8V48zm44.617-16.218A4.55%204.55%200%200053%2029.96V27.5c0-2.506-2.025-4.556-4.5-4.556H36.125l2.07-10.591a2.308%202.308%200%2000-.18-1.504%2010.932%2010.932%200%2000-1.98-2.778L35%207%2020.578%2021.6a4.598%204.598%200%2000-1.328%203.235v17.858c0%202.915%202.363%205.307%205.265%205.307h18.248a4.52%204.52%200%20003.87-2.21l5.984-14.008z%27/%3E%3C/svg%3E%0A")}.btn-like.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M8%2048h4.5c1.238%200%202.25-1.025%202.25-2.278v-20.5c0-1.253-1.012-2.278-2.25-2.278H8V48zm44.617-16.218A4.55%204.55%200%200053%2029.96V27.5c0-2.506-2.025-4.556-4.5-4.556H36.125l2.07-10.591a2.308%202.308%200%2000-.18-1.504%2010.932%2010.932%200%2000-1.98-2.778L35%207%2020.578%2021.6a4.598%204.598%200%2000-1.328%203.235v17.858c0%202.915%202.363%205.307%205.265%205.307h18.248a4.52%204.52%200%20003.87-2.21l5.984-14.008z%27/%3E%3C/svg%3E%0A")}.btn-like[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%230b83e5%27%20d=%27M8%2048h4.5c1.238%200%202.25-1.025%202.25-2.278v-20.5c0-1.253-1.012-2.278-2.25-2.278H8V48zm44.617-16.218A4.55%204.55%200%200053%2029.96V27.5c0-2.506-2.025-4.556-4.5-4.556H36.125l2.07-10.591a2.308%202.308%200%2000-.18-1.504%2010.932%2010.932%200%2000-1.98-2.778L35%207%2020.578%2021.6a4.598%204.598%200%2000-1.328%203.235v17.858c0%202.915%202.363%205.307%205.265%205.307h18.248a4.52%204.52%200%20003.87-2.21l5.984-14.008z%27/%3E%3C/svg%3E%0A")}.btn-dislike .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%23e8eaed%27%20d=%27M53%2012h-4.5c-1.237%200-2.25%201.025-2.25%202.278v20.5c0%201.253%201.013%202.278%202.25%202.278H53V12zM8.383%2028.218A4.557%204.557%200%20008%2030.04v2.46c0%202.506%202.025%204.556%204.5%204.556h12.375l-2.07%2010.591a2.308%202.308%200%2000.18%201.504%2010.932%2010.932%200%20001.98%202.778L26%2053l14.422-14.6a4.598%204.598%200%20001.328-3.235V17.33c0-2.938-2.362-5.33-5.265-5.33H18.26c-1.598%200-3.06.843-3.87%202.21L8.382%2028.217z%27/%3E%3C/svg%3E%0A")}.btn-dislike.focused .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M53%2012h-4.5c-1.237%200-2.25%201.025-2.25%202.278v20.5c0%201.253%201.013%202.278%202.25%202.278H53V12zM8.383%2028.218A4.557%204.557%200%20008%2030.04v2.46c0%202.506%202.025%204.556%204.5%204.556h12.375l-2.07%2010.591a2.308%202.308%200%2000.18%201.504%2010.932%2010.932%200%20001.98%202.778L26%2053l14.422-14.6a4.598%204.598%200%20001.328-3.235V17.33c0-2.938-2.362-5.33-5.265-5.33H18.26c-1.598%200-3.06.843-3.87%202.21L8.382%2028.217z%27/%3E%3C/svg%3E%0A")}.btn-dislike[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill=%27%230b83e5%27%20d=%27M53%2012h-4.5c-1.237%200-2.25%201.025-2.25%202.278v20.5c0%201.253%201.013%202.278%202.25%202.278H53V12zM8.383%2028.218A4.557%204.557%200%20008%2030.04v2.46c0%202.506%202.025%204.556%204.5%204.556h12.375l-2.07%2010.591a2.308%202.308%200%2000.18%201.504%2010.932%2010.932%200%20001.98%202.778L26%2053l14.422-14.6a4.598%204.598%200%20001.328-3.235V17.33c0-2.938-2.362-5.33-5.265-5.33H18.26c-1.598%200-3.06.843-3.87%202.21L8.382%2028.217z%27/%3E%3C/svg%3E%0A")}goog-timeline{flex:none;outline:none}.time-numbers .left{float:left}.time-numbers .right{float:right;height:30px}.time-numbers .right .time-indicator{margin-left:16px}.time-numbers:after{clear:both;content:\'\';display:table}.time-indicator,.live-label{display:inline-block;font-size:1.5625vw;line-height:1.5625vw;color:#e8eaed;font-weight:500;opacity:.6}.live-label.live-edge{opacity:1}.live-label.live-edge::before{display:inline-block;width:.41666667vw;height:.41666667vw;vertical-align:15%;margin-right:.52083333vw;background-color:#fa5847;content:\'\';border-radius:.41666667vw}.scrubber-layer{height:1.66666667vw;position:relative;margin-bottom:.52083333vw}.scrubber-layer.live .progress-fill,.scrubber-layer.live .scrubber::-webkit-slider-thumb{background-color:#fa5847}.progress-bar{background-color:rgba(255,255,255,0.1);border-radius:.20833333vw;height:.41666667vw;left:0;overflow:hidden;position:absolute;top:.625vw;width:100%}.progress-fill{background-color:rgba(255,255,255,0.6);height:100%;left:0;position:absolute;top:0;transform:scaleX(0);transform-origin:left center;width:100%;will-change:transform}.progress-fill.break{background-color:#fbbc04}.progress-seekable-range,.progress-seekable-played{height:100%;position:absolute;top:0}.progress-seekable-played{background-color:#fa5847}.progress-seekable-range{background-color:rgba(255,255,255,0.5)}.progress-breaks{height:100%;left:0;position:absolute;top:0;width:100%}.break-mark{position:absolute;height:100%;background-color:#fbbc04}.progress-loading{height:100%;right:0;position:absolute;top:0;transform-origin:right center;will-change:transform}input[type=range].scrubber{-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-focus-ring-color:rgba(255,255,255,0);-webkit-appearance:none;background-color:transparent;height:1.66666667vw;left:0;margin:0;outline:none;position:absolute;top:0;width:100%;will-change:transform}input[type=range].scrubber::-webkit-slider-thumb{visibility:hidden;-webkit-appearance:none;background:#d8d8d8;border-radius:.83333333vw;height:1.66666667vw;width:1.66666667vw;cursor:pointer}input[type=range].scrubber::-webkit-slider-runnable-track{background:transparent;cursor:pointer;height:1.66666667vw;width:100%}input[type=range].scrubber[disabled]::-webkit-slider-thumb{display:none}goog-timeline.focused .progress-bar{border-radius:.3125vw;height:.625vw;top:.52083333vw}goog-timeline.focused input[type=range].scrubber::-webkit-slider-thumb{visibility:visible}</style><audio-player-compatibility-placeholder></audio-player-compatibility-placeholder><div class=scrim></div><div class=buffering-scrim></div><div class=controls-layer id=controls-layer><div class=controls-toggle id=controls-toggle role=button></div><goog-video-metadata></goog-video-metadata><div class=controls id=controls><goog-timeline></goog-timeline><goog-buttons-bar></goog-buttons-bar></div></div><goog-break-ui></goog-break-ui><div class=media-browse-scrim></div><goog-media-browse></goog-media-browse><div aria-live=assertive class=accessibility-alert id=alert-show-controls style="display: none;"></div><div aria-live=assertive class=accessibility-alert id=alert-hide-controls style="display: none;"></div>'
    };
    cast.receiver.J.vm = function(a) {
        a.innerHTML = '<div class=scrubber-layer id=scrubber-layer><div class=progress-bar><div class=progress-fill id=progress-fill></div><div class=progress-seekable-range id=progress-seekable-range></div><div class=progress-seekable-played id=progress-seekable-played></div><div class="progress-loading loading-bar" id=progress-loading><div class="rect rect-primary"><span class=rect-inner></span></div><div class="rect rect-auxiliary"><span class=rect-inner></span></div></div><div class=progress-breaks id=progress-breaks></div></div><input class=scrubber id=scrubber max=0 min=0 step=any type=range></div><div class=time-numbers><div aria-hidden=true class="time-indicator left" id=current-time></div><div class=right><div class=live-label id=live-label style="display: none"></div><div aria-hidden=true class=time-indicator id=total-time></div></div></div>'
    };
    _.Sa(Bk, _.C);
    _.h = Bk.prototype;
    _.h.Rf = !1;
    _.h.vh = 0;
    _.h.ed = null;
    _.h.aj = function(a) {
        this.g = arguments;
        this.ed || this.vh ? this.Rf = !0 : Ck(this)
    };
    _.h.stop = function() {
        this.ed && (_.kf(this.ed), this.ed = null, this.Rf = !1, this.g = [])
    };
    _.h.pause = function() {
        this.vh++
    };
    _.h.ha = function() {
        Bk.eb.ha.call(this);
        this.stop()
    };
    _.h.bq = function() {
        this.ed = null;
        this.Rf && !this.vh && (this.Rf = !1, Ck(this))
    };
    _.q(Hk, Yc);
    Hk.prototype.Zj = function(a) {
        L(this, a)
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-timeline", Hk);
    cast.receiver.J.ns = Hk;
    var Pk = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Enter"];
    _.h = Rk.prototype;
    _.h.Wc = function() {
        var a = this.C || this.G;
        a ? this.g.g.includes(this.l) || this.g.g.includes(this.o) || this.g.g.includes(this.A) ? this.H !== a && Nk(this) : Nk(this) : Ok(this);
        this.H = a
    };
    _.h.jh = function(a) {
        this.h.classList.toggle("disabled", a);
        this.h.setAttribute("aria-hidden", String(a));
        var b = this.w;
        b.h = a;
        ae(b)
    };
    _.h.Kh = function(a) {
        this.G = a;
        this.h.classList.toggle("buffering", a);
        this.Wc()
    };
    _.h.Cj = function() {
        var a = this.w;
        a.g = !0;
        ae(a);
        this.D && (this.D = !1, ce(this.w))
    };
    _.h.Bj = function() {
        var a = this.w;
        a.g = !1;
        ae(a);
        this.D || Qk(this);
        this.D = !0
    };
    _.h.Dj = function(a) {
        var b = this.w;
        b.w = a;
        ae(b);
        a && Qk(this)
    };
    _.h.Aj = function() {};
    _.h.kh = function() {};
    _.h.zj = function() {};
    _.h.yj = function() {};
    /*

     Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at
     http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at
     http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at
     http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at
     http://polymer.github.io/PATENTS.txt
    */
    /*

     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at
     http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at
     http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at
     http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at
     http://polymer.github.io/PATENTS.txt
    */
    var Tk = new WeakMap;
    var Yx = null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback;
    /*

     Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at
     http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at
     http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at
     http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at
     http://polymer.github.io/PATENTS.txt
    */
    var Zx = {
            CONSTANT: {
                Qc: Rb,
                Sc: _.Sb
            },
            JAVASCRIPT: {
                Qc: Vb,
                Sc: function(a) {
                    a instanceof Vb && a.constructor === Vb && a.h === Ub ? a = a.g : (_.Wa("expected object of type SafeScript, got '" + a + "' of type " + Ha(a)), a = "type_error:SafeScript");
                    return a.toString()
                }
            },
            HTML: {
                Qc: _.lc,
                Sc: _.nc
            },
            RESOURCE_URL: {
                Qc: _.Zb,
                Sc: _.ac
            },
            STRING: {
                Qc: Object,
                Sc: Xk
            },
            STYLE: {
                Qc: jc,
                Sc: function(a) {
                    if (a instanceof jc && a.constructor === jc && a.g === ic) return "";
                    _.Wa("expected object of type SafeStyle, got '" + a + "' of type " + Ha(a));
                    return "type_error:SafeStyle"
                }
            },
            URL: {
                Qc: _.ec,
                Sc: _.fc
            }
        },
        $x = {
            CONSTANT: Yk,
            JAVASCRIPT: Yk,
            HTML: function(a) {
                return _.rc(a)
            },
            RESOURCE_URL: Yk,
            STRING: String,
            STYLE: Yk,
            URL: function(a, b) {
                a = _.hc(a).vb();
                return "about:invalid#zClosurez" === a ? b : a
            }
        };
    var ay = _.F("resin");
    var al = {
            align: 1,
            alt: 1,
            "aria-activedescendant": 10,
            "aria-atomic": 1,
            "aria-autocomplete": 1,
            "aria-busy": 1,
            "aria-checked": 1,
            "aria-disabled": 1,
            "aria-dropeffect": 1,
            "aria-expanded": 1,
            "aria-haspopup": 1,
            "aria-hidden": 1,
            "aria-invalid": 1,
            "aria-label": 1,
            "aria-level": 1,
            "aria-live": 1,
            "aria-multiline": 1,
            "aria-multiselectable": 1,
            "aria-orientation": 1,
            "aria-posinset": 1,
            "aria-pressed": 1,
            "aria-readonly": 1,
            "aria-relevant": 1,
            "aria-required": 1,
            "aria-selected": 1,
            "aria-setsize": 1,
            "aria-sort": 1,
            "aria-valuemax": 1,
            "aria-valuemin": 1,
            "aria-valuenow": 1,
            "aria-valuetext": 1,
            async: 8,
            autocapitalize: 1,
            autocomplete: 1,
            autocorrect: 1,
            autofocus: 1,
            bgcolor: 1,
            border: 1,
            checked: 1,
            "class": 1,
            color: 1,
            cols: 1,
            colspan: 1,
            contenteditable: 1,
            dir: 8,
            disabled: 1,
            draggable: 1,
            enctype: 1,
            face: 1,
            "for": 10,
            formenctype: 1,
            frameborder: 1,
            height: 1,
            hidden: 1,
            href: 4,
            hreflang: 1,
            id: 10,
            ismap: 1,
            itemid: 1,
            itemprop: 1,
            itemref: 1,
            itemscope: 1,
            itemtype: 1,
            label: 1,
            lang: 1,
            list: 10,
            loop: 1,
            max: 1,
            maxlength: 1,
            min: 1,
            multiple: 1,
            muted: 1,
            name: 10,
            placeholder: 1,
            preload: 1,
            rel: 1,
            required: 1,
            reversed: 1,
            role: 1,
            rows: 1,
            rowspan: 1,
            selected: 1,
            shape: 1,
            size: 1,
            sizes: 1,
            span: 1,
            spellcheck: 1,
            src: 4,
            start: 1,
            step: 1,
            style: 5,
            summary: 1,
            tabindex: 1,
            target: 8,
            title: 1,
            translate: 1,
            valign: 1,
            value: 1,
            width: 1,
            wrap: 1
        },
        $k = {
            a: {
                href: [{
                    T: 3
                }]
            },
            area: {
                href: [{
                    T: 3
                }]
            },
            audio: {
                src: [{
                    T: 3
                }]
            },
            blockquote: {
                cite: [{
                    T: 3
                }]
            },
            button: {
                formaction: [{
                    T: 3
                }],
                formmethod: [{
                    T: 1
                }],
                type: [{
                    T: 1
                }]
            },
            command: {
                type: [{
                    T: 1
                }]
            },
            content: {
                select: [{
                    T: 1
                }]
            },
            del: {
                cite: [{
                    T: 3
                }]
            },
            details: {
                open: [{
                    T: 1
                }]
            },
            form: {
                action: [{
                    T: 3
                }],
                method: [{
                    T: 1
                }]
            },
            iframe: {
                srcdoc: [{
                    T: 2
                }]
            },
            img: {
                src: [{
                    T: 3
                }],
                srcset: [{
                    T: 11
                }]
            },
            input: {
                formaction: [{
                    T: 3
                }],
                formmethod: [{
                    T: 1
                }],
                pattern: [{
                    T: 1
                }],
                readonly: [{
                    T: 1
                }],
                src: [{
                    T: 3
                }],
                type: [{
                    T: 1
                }]
            },
            ins: {
                cite: [{
                    T: 3
                }]
            },
            li: {
                type: [{
                    T: 1
                }]
            },
            link: {
                href: [{
                    T: 3,
                    Ga: "rel",
                    Ia: "alternate"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "author"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "bookmark"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "canonical"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "cite"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "help"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "icon"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "license"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "next"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "prefetch"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "dns-prefetch"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "prerender"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "preconnect"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "preload"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "prev"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "search"
                }, {
                    T: 3,
                    Ga: "rel",
                    Ia: "subresource"
                }],
                media: [{
                    T: 1
                }],
                nonce: [{
                    T: 1
                }],
                type: [{
                    T: 1
                }]
            },
            menuitem: {
                icon: [{
                    T: 3
                }]
            },
            ol: {
                type: [{
                    T: 1
                }]
            },
            q: {
                cite: [{
                    T: 3
                }]
            },
            script: {
                nonce: [{
                    T: 1
                }],
                type: [{
                    T: 1
                }]
            },
            source: {
                media: [{
                    T: 1
                }],
                src: [{
                    T: 3
                }],
                srcset: [{
                    T: 11
                }]
            },
            style: {
                media: [{
                    T: 1
                }],
                nonce: [{
                    T: 1
                }]
            },
            table: {
                cellpadding: [{
                    T: 1
                }],
                cellspacing: [{
                    T: 1
                }]
            },
            textarea: {
                readonly: [{
                    T: 1
                }]
            },
            time: {
                datetime: [{
                    T: 1
                }]
            },
            video: {
                autoplay: [{
                    T: 1
                }],
                controls: [{
                    T: 1
                }],
                poster: [{
                    T: 3
                }],
                src: [{
                    T: 3
                }]
            }
        },
        by = {
            a: 1,
            abbr: 1,
            address: 1,
            applet: 4,
            area: 5,
            article: 1,
            aside: 1,
            audio: 1,
            b: 1,
            base: 4,
            bdi: 1,
            bdo: 1,
            blockquote: 1,
            body: 1,
            br: 5,
            button: 1,
            canvas: 1,
            caption: 1,
            cite: 1,
            code: 1,
            col: 5,
            colgroup: 1,
            command: 1,
            content: 1,
            data: 1,
            datalist: 1,
            dd: 1,
            del: 1,
            details: 1,
            dfn: 1,
            dialog: 1,
            div: 1,
            dl: 1,
            dt: 1,
            em: 1,
            embed: 4,
            fieldset: 1,
            figcaption: 1,
            figure: 1,
            font: 1,
            footer: 1,
            form: 1,
            frame: 1,
            frameset: 1,
            h1: 1,
            h2: 1,
            h3: 1,
            h4: 1,
            h5: 1,
            h6: 1,
            head: 1,
            header: 1,
            hr: 5,
            html: 1,
            i: 1,
            iframe: 1,
            img: 5,
            input: 5,
            ins: 1,
            kbd: 1,
            keygen: 5,
            label: 1,
            legend: 1,
            li: 1,
            link: 5,
            main: 1,
            map: 1,
            mark: 1,
            math: 4,
            menu: 1,
            menuitem: 1,
            meta: 4,
            meter: 1,
            nav: 1,
            noscript: 1,
            object: 4,
            ol: 1,
            optgroup: 1,
            option: 1,
            output: 1,
            p: 1,
            param: 5,
            picture: 1,
            pre: 1,
            progress: 1,
            q: 1,
            rb: 1,
            rp: 1,
            rt: 1,
            rtc: 1,
            ruby: 1,
            s: 1,
            samp: 1,
            script: 3,
            section: 1,
            select: 1,
            slot: 1,
            small: 1,
            source: 5,
            span: 1,
            strong: 1,
            style: 2,
            sub: 1,
            summary: 1,
            sup: 1,
            svg: 4,
            table: 1,
            tbody: 1,
            td: 1,
            template: 4,
            textarea: 6,
            tfoot: 1,
            th: 1,
            thead: 1,
            time: 1,
            title: 6,
            tr: 1,
            track: 5,
            u: 1,
            ul: 1,
            "var": 1,
            video: 1,
            wbr: 5
        },
        ul = [{
            auto: !0,
            ltr: !0,
            rtl: !0
        }, {
            async: !0
        }, {
            _self: !0,
            _blank: !0
        }],
        tl = {
            "*": {
                async: 1,
                dir: 0,
                target: 2
            }
        };
    var jl = "aLink accessKey allowFullscreen bgColor cellPadding cellSpacing codeBase codeType contentEditable crossOrigin dateTime dirName formAction formEnctype formMethod formNoValidate formTarget frameBorder innerHTML innerText inputMode isMap longDesc marginHeight marginWidth maxLength mediaGroup minLength noHref noResize noShade noValidate noWrap nodeValue outerHTML outerText readOnly tabIndex textContent trueSpeed useMap vAlign vLink valueAsDate valueAsNumber valueType".split(" "),
        il = {
            accept_charset: "acceptCharset",
            "char": "ch",
            charoff: "chOff",
            checked: "defaultChecked",
            "class": "className",
            "for": "htmlFor",
            http_equiv: "httpEquiv",
            muted: "defaultMuted",
            selected: "defaultSelected",
            value: "defaultValue"
        },
        hl = null,
        cl = null;
    /*

     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at
     http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at
     http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at
     http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at
     http://polymer.github.io/PATENTS.txt

    */
    var kl = {},
        ll = /^(?!(?:annotation-xml|color-profile|font-face|font-face(?:-(?:src|uri|format|name))?|missing-glyph)$)[a-z][a-z.0-9_\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u200c\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\udfff\uf900-\ufdcf\ufdf0-\ufffd]*-[\-a-z.0-9_\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u200c\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\udfff\uf900-\ufdcf\ufdf0-\ufffd]*$/;
    var vl = /(?!,)([^\t\n\f\r ]+)(?:[\t\n\f\r ]+([.0-9+\-]+[a-z]?))?/gi,
        nl = /[\t\n\f\r ]+/,
        pl = /[\t\n\f\r ,]+/g,
        wl = {};
    var Ml = function(a) {
        function b(m) {
            var n = m.localName;
            if (!m.getAttribute("is") && 2 === ml(n, m.constructor)) return l;
            (m = k[n]) || (m = k[n] = document.createElement(n));
            return m
        }
        var c = a.reportHandler || void 0,
            d = a.safeTypesBridge || sl,
            e = /^$/;
        if (a = a.allowedIdentifierPrefixes) {
            a = _.p(a);
            for (var f = a.next(); !f.done; f = a.next()) e = new RegExp(e.source + "|^" + String(f.value).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"))
        }
        void 0 === c && "undefined" !== typeof console && (c = rl);
        c && c(!1, "initResin");
        var g = xl(e,
                d, c),
            k = {},
            l = document.createElement("polyresinuncustomized");
        return function(m, n, u) {
            var r = m.nodeType;
            if (r !== Node.ELEMENT_NODE) {
                if (r === Node.TEXT_NODE) {
                    r = m.parentElement;
                    n = !r;
                    if (r && r.nodeType === Node.ELEMENT_NODE) switch (u = r.localName, r = ml(u, r.constructor), r) {
                        case 0:
                        case 1:
                            n = Object.hasOwnProperty.call(by, u) ? by[u] : null;
                            n = 1 === n || 6 === n;
                            break;
                        case 3:
                        case 2:
                            n = !0;
                            break;
                        default:
                            Zk(r, "got an unknown element classification")
                    }
                    if (n) return function(K) {
                        return "" + d(K, "STRING", K)
                    }
                }
                return function(K) {
                    if (!K && K !== document.all) return K;
                    c && c(!0, "Failed to sanitize %s %s%s node to value %O", m.parentElement && m.parentElement.nodeName, "#text", "", K);
                    return "zClosurez"
                }
            }
            var x = m.localName;
            r = b(m);
            switch (u) {
                case "attribute":
                    if (fl(n) in r) break;
                    return function(K) {
                        return K
                    };
                case "property":
                    if (n in r) break;
                    var y = gl(n);
                    if (y && y in r) break;
                    return function(K) {
                        return K
                    };
                default:
                    Zk(u, "got an unknown resin type, expected either 'property' or 'attribute'")
            }
            var D = "attribute" === u ? n.toLowerCase() : el(n),
                la = bl(x, D, function(K) {
                    var aa = m.getAttribute(K);
                    return !aa ||
                        /[\[\{]/.test(K) ? null : aa
                });
            return function(K) {
                var aa = wl,
                    Hc = null;
                if (!K && K !== document.all) return K;
                if (null != la) {
                    var cd = g[la],
                        tf = cd.zb;
                    Hc = cd.yb;
                    tf && (aa = d(K, tf, wl));
                    aa === wl && (cd.kb ? (aa = String(d(K, "STRING", K)), aa = cd.kb(x, D, aa)) : cd.jb && (aa = cd.jb(x, D, K)), aa === Hc && (aa = wl))
                }
                aa === wl && (aa = Hc || "zClosurez", c && c(!0, 'Failed to sanitize attribute of <%s>: <%s %s="%O">', x, x, D, K));
                return aa
            }
        }
    }({
        allowedIdentifierPrefixes: [""],
        reportHandler: function(a, b, c) {
            for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
            if (a) {
                var f = 0;
                e = b.replace(/%\w/g, function() {
                    return String(d[f++])
                });
                _.H(ay, e)
            }
        },
        safeTypesBridge: function(a, b, c) {
            var d = Zx[b];
            return a instanceof d.Qc && (d = d.Sc(a, c), d !== c) ? d : (0, $x[b])(String(Xk(a)), c)
        }
    });
    var cy = {},
        dy = {};
    var Bl = "{{lit-" + String(Math.random()).slice(2) + "}}",
        Yl = "\x3c!--" + Bl + "--\x3e",
        Al = new RegExp(Bl + "|" + Yl),
        zl = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
    El.prototype.update = function(a) {
        for (var b = 0, c = _.p(this.h), d = c.next(); !d.done; d = c.next()) d = d.value, void 0 !== d && d.wb(a[b]), b++;
        a = _.p(this.h);
        for (d = a.next(); !d.done; d = a.next()) b = d.value, void 0 !== b && b.Ic()
    };
    El.prototype.l = function() {
        for (var a = Yx ? this.g.h.content.cloneNode(!0) : document.importNode(this.g.h.content, !0), b = [], c = this.g.g, d = document.createTreeWalker(a, 133, null, !1), e = 0, f = 0, g, k = d.nextNode(); e < c.length;) {
            g = c[e];
            if (-1 !== g.index) {
                for (; f < g.index;) f++, "TEMPLATE" === k.nodeName && (b.push(k), d.currentNode = k.content), null === (k = d.nextNode()) && (d.currentNode = b.pop(), k = d.nextNode());
                if ("node" === g.type) {
                    g = new Ql(this.options, g);
                    var l = k.previousSibling;
                    g.h = l;
                    g.g = l.nextSibling;
                    this.h.push(g)
                } else this.h.push.apply(this.h,
                    _.oa(Vl(k, g.name, g.Wa, this.options, g)))
            } else this.h.push(void 0);
            e++
        }
        Yx && (document.adoptNode(a), customElements.upgrade(a));
        return a
    };
    var Fl, Xl = " " + Bl + " ";
    Ol.prototype.w = function() {
        return new Pl(this)
    };
    Ol.prototype.l = function() {
        var a = this.Wa,
            b = this.g,
            c = a.length - 1;
        if (1 === c && "" === a[0] && "" === a[1] && void 0 !== b[0]) {
            var d = b[0].value;
            if (!Jl(d)) return d
        }
        d = "";
        for (var e = 0; e < c; e++) {
            d += a[e];
            var f = b[e];
            if (void 0 !== f)
                if (f = f.value, Il(f) || !Jl(f)) d += "string" === typeof f ? f : String(f);
                else {
                    f = _.p(f);
                    for (var g = f.next(); !g.done; g = f.next()) g = g.value, d += "string" === typeof g ? g : String(g)
                }
        }
        return d += a[c]
    };
    Ol.prototype.A = function() {
        if (this.h) {
            this.h = !1;
            var a = this.l();
            a = this.he(a);
            "symbol" === typeof a && (a = String(a));
            this.o.setAttribute(this.name, a)
        }
    };
    Pl.prototype.wb = function(a) {
        a === cy || Il(a) && a === this.value || (this.value = a, Vk(a) || (this.g.h = !0))
    };
    Pl.prototype.Ic = function() {
        for (; Vk(this.value);) {
            var a = this.value;
            this.value = cy;
            a(this)
        }
        this.value !== cy && this.g.A()
    };
    _.h = Ql.prototype;
    _.h.wb = function(a) {
        this.o = a
    };
    _.h.Ic = function() {
        for (; Vk(this.o);) {
            var a = this.o;
            this.o = cy;
            a(this)
        }
        a = this.o;
        a !== cy && (Il(a) ? a !== this.value && this.Zf(a) : a instanceof Hl ? this.Em(a) : a instanceof Node ? this.Yf(a) : Jl(a) ? this.Dm(a) : a === dy ? (this.value = dy, this.clear()) : this.Zf(a))
    };
    _.h.re = function(a) {
        this.g.parentNode.insertBefore(a, this.g)
    };
    _.h.Yf = function(a) {
        this.value !== a && (this.clear(), this.re(a), this.value = a)
    };
    _.h.Zf = function(a) {
        var b = this.h.nextSibling;
        a = null == a ? "" : a;
        if (b === this.g.previousSibling && 3 === b.nodeType) {
            void 0 === this.l && (this.l = Ml(b, "data", "property"));
            var c = this.l(a);
            b.data = "string" === typeof c ? c : String(c)
        } else b = document.createTextNode(""), this.Yf(b), void 0 === this.l && (this.l = Ml(b, "data", "property")), c = this.l(a), b.data = "string" === typeof c ? c : String(c);
        this.value = a
    };
    _.h.Em = function(a) {
        var b = this.options.Uh(a);
        if (this.value instanceof El && this.value.g === b) this.value.update(a.values);
        else {
            var c = this.g.parentNode;
            Nl !== Ll && "STYLE" === c.nodeName || "SCRIPT" === c.nodeName ? this.Zf("/* lit-html will not write TemplateResults to scripts and styles */") : (b = new El(b, this.options), c = b.l(), b.update(a.values), this.Yf(c), this.value = b)
        }
    };
    _.h.Dm = function(a) {
        Array.isArray(this.value) || (this.value = [], this.clear());
        var b = this.value,
            c = 0;
        a = _.p(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            var e = b[c];
            if (void 0 === e)
                if (e = new Ql(this.options, this.w), b.push(e), 0 === c) {
                    var f = e;
                    this.re(f.h = Cl());
                    this.re(f.g = Cl())
                } else {
                    f = e;
                    var g = b[c - 1];
                    g.re(f.h = Cl());
                    f.g = g.g;
                    g.g = f.h
                }
            e.wb(d);
            e.Ic();
            c++
        }
        c < b.length && (b.length = c, this.clear(e && e.g))
    };
    _.h.clear = function(a) {
        a = void 0 === a ? this.h : a;
        Wk(this.h.parentNode, a.nextSibling, this.g)
    };
    Rl.prototype.wb = function(a) {
        this.g = a
    };
    Rl.prototype.Ic = function() {
        for (; Vk(this.g);) {
            var a = this.g;
            this.g = cy;
            a(this)
        }
        this.g !== cy && (a = !!this.g, this.value !== a && (a ? this.h.setAttribute(this.name, "") : this.h.removeAttribute(this.name), this.value = a), this.g = cy)
    };
    _.q(Sl, Ol);
    Sl.prototype.w = function() {
        return new Tl(this)
    };
    Sl.prototype.l = function() {
        return this.C ? this.g[0].value : Ol.prototype.l.call(this)
    };
    Sl.prototype.A = function() {
        if (this.h) {
            this.h = !1;
            var a = this.l();
            a = this.he(a);
            this.o[this.name] = a
        }
    };
    _.q(Tl, Pl);
    var ey = !1;
    try {
        var fy = {get capture() {
                ey = !0;
                return !1
            }
        };
        window.addEventListener("test", fy, fy);
        window.removeEventListener("test", fy, fy)
    } catch (a) {}
    Ul.prototype.wb = function(a) {
        this.g = a
    };
    Ul.prototype.Ic = function() {
        for (; Vk(this.g);) {
            var a = this.g;
            this.g = cy;
            a(this)
        }
        if (this.g !== cy) {
            a = this.g;
            var b = this.value,
                c = null == a || null != b && (a.capture !== b.capture || a.once !== b.once || a.passive !== b.passive);
            b = null != a && (null == b || c);
            c && this.h.removeEventListener(this.w, this.l, this.o);
            b && (this.o = a && (ey ? {
                capture: a.capture,
                passive: a.passive,
                once: a.once
            } : a.capture), this.h.addEventListener(this.w, this.l, this.o));
            this.value = a;
            this.g = cy
        }
    };
    Ul.prototype.handleEvent = function(a) {
        "function" === typeof this.value ? this.value.call(this.A || this.h, a) : this.value.handleEvent(a)
    };
    var Wl = new Map;
    var $l = new WeakMap;
    (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
    var gy = ["\n<style>\n:host{font-family:'Google Sans','Roboto',Arial,sans-serif;position:absolute;pointer-events:none;top:0;left:0;display:block;height:100%;width:100%}.media-browse-root{width:100%;height:100%}.media-browse-landing-background{display:none;bottom:0;height:100%;left:0;position:absolute;width:100%;background-image:radial-gradient(circle at top left, #fff 0, #f1f3f4 50%, #f1f3f4 100%)}goog-mini-player{margin-left:auto;pointer-events:initial}.media-browse-root.landing goog-mini-player{display:none}.media-browse-root.landing .media-browse-landing-background{display:block}.media-browse-root.landing .media-browse-content-layer{transform:initial}.media-browse-root.landing .browse-item-img{box-shadow:8px 8px 20px rgba(218,220,224,0.8)}.media-browse-root.landing .browse-item-title{color:#3c4043}.media-browse-root.landing .media-browse-title,.media-browse-root.landing .browse-item-subtitle{color:#80868b}.media-browse-root.landing .media-browse-top-bar{opacity:initial !important;visibility:initial !important}.media-browse-root.landing .media-browse-touch-shield{display:none}.media-browse-root.landing .media-browse-carousel{overflow-x:scroll !important}.media-browse-content-layer{display:flex;width:100%;height:100%;position:absolute;box-sizing:border-box;left:0;top:0;padding:104px 0 0}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-content-layer{padding:159px 0 0}}.media-browse-carousel{font-size:0;pointer-events:initial;overflow-x:scroll;overflow-y:hidden;width:100%;height:100%;white-space:nowrap;position:relative;box-sizing:border-box;padding:0 0 0 44px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-carousel{padding:0 0 0 56px}}.media-browse-touch-shield{pointer-events:initial;width:100%;height:100%;box-sizing:border-box;position:absolute;top:104px;left:0}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-touch-shield{top:159px}}.browse-item{margin-right:24px;vertical-align:top;display:inline-block;font-size:initial;white-space:initial;width:296px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item{margin-right:32px}}.browse-item .browse-item-img{width:296px;height:296px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item{width:360px}.browse-item .browse-item-img{width:360px;height:360px}}.browse-item.portrait-2-to-3{width:240px}.browse-item.portrait-2-to-3 .browse-item-img{width:240px;height:360px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item.portrait-2-to-3{width:260px}.browse-item.portrait-2-to-3 .browse-item-img{width:260px;height:390px}}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item.portrait-2-to-3 .browse-item-title{font-size:36px;line-height:44px}}.browse-item.portrait-2-to-3 .browse-item-subtitle{-webkit-line-clamp:1}.browse-item.landscape-16-to-9{width:448px}.browse-item.landscape-16-to-9 .browse-item-img{width:448px;height:252px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item.landscape-16-to-9{width:560px}.browse-item.landscape-16-to-9 .browse-item-img{width:560px;height:315px}}.browse-item-img{position:relative;background-position:center center;background-size:132px 132px;background-color:#dadce0;background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-image.svg');background-repeat:no-repeat}.browse-item-img.has-image{background-size:contain}.browse-item-img.music-track{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-song.svg')}.browse-item-img.music-album{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-album.svg')}.browse-item-img.artist{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_guest.svg')}.browse-item-img.playlist,.browse-item-img.music-mix,.browse-item-img.music-genre{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-playlist.svg')}.browse-item-img.episode,.browse-item-img.photo{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-image.svg')}.browse-item-img.movie{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-movie.svg')}.browse-item-img.podcast,.browse-item-img.radio-station{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-podcast.svg')}.browse-item-img.audio-book{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-audiobook.svg')}.browse-item-img.video{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_media.svg')}.browse-item-img.tv-show{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-tv.svg')}.browse-item-img.news{background-image:url('//www.gstatic.com/cast/sdk/assets/icons/ic_default-newspaper.svg')}.duration,.live{position:absolute;bottom:16px;color:#fff;font-size:24px;line-height:24px;font-weight:500;padding:6px;border-radius:8px}.duration{right:16px;background-color:rgba(0,0,0,0.5)}.live{left:16px;background-color:#ea4335}.browse-item-text{margin:16px 4px 0}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item-text{margin:29px 9px 0}}.browse-item-title{font-size:32px;line-height:40px;font-weight:400;margin:0 0 8px;color:#fff;-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;overflow:hidden}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item-title{font-size:40px;line-height:52px}}.browse-item-subtitle{font-size:24px;line-height:32px;font-weight:400;color:#bdc1c6;margin:0;-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;overflow:hidden}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.browse-item-subtitle{font-size:32px;line-height:40px}}.media-browse-logo{content:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;height:40px;margin-right:16px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-logo{height:56px;margin-right:20px}}.media-browse-top-bar{padding:0 44px;top:0;box-sizing:border-box;width:100%;left:0;align-items:center;position:absolute;display:flex;flex-direction:row;height:104px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-top-bar{padding:0 56px}}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-top-bar{height:159px}}.media-browse-title{font-weight:400;margin:0;font-size:32px;color:#bdc1c6}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.media-browse-title{font-size:36px}}</style>\n"];
    gy.raw = gy.slice();
    var hy = bm(gy);
    var iy = ['\n<style>\n.mini-player-root{height:72px;border-radius:12px;display:flex;overflow:hidden}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.mini-player-root{height:96px;border-radius:16px}}.btn{width:48px;height:48px;padding:12px;background-color:#3c4043}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.btn{width:56px;height:56px;padding:20px}}.btn[aria-disabled=true]{pointer-events:none}.btn[aria-disabled=true] .btn-icon{opacity:.5}.btn-icon{width:48px;height:48px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.btn-icon{width:56px;height:56px}}.pause-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M32%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20stroke-width=%273%27/%3E%0A%20%20%3Cpath%20d=%27M16%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20stroke-width=%273%27/%3E%0A%3C/svg%3E%0A")}.play-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpolygon%20points=%2738.5%2024%2015.5%2038.5%2015.5%209.5%2038.5%2024%27%20fill=%27none%27%0A%20%20%20%20%20%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%0A%20%20%20%20%20%20stroke-width=%273%27/%3E%0A%3C/svg%3E%0A")}.album-art{height:72px;max-width:300px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.album-art{height:96px}}</style>\n'];
    iy.raw = iy.slice();
    var jy = bm(iy);
    _.q(em, Yc);
    /*
     Copyright (c) Microsoft Corporation. All rights reserved.
     Licensed under the Apache License, Version 2.0 (the "License"); you may not use
     this file except in compliance with the License. You may obtain a copy of the
     License at http://www.apache.org/licenses/LICENSE-2.0

     THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
     KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
     WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
     MERCHANTABLITY OR NON-INFRINGEMENT.

     See the Apache Version 2.0 License for specific language governing permissions
     and limitations under the License.
    */
    var ky = new WeakMap,
        ly = Uk(function(a) {
            return function(b) {
                if (!(b instanceof Ql)) throw Error("cache can only be used in text bindings");
                var c = ky.get(b);
                void 0 === c && (c = new WeakMap, ky.set(b, c));
                var d = b.value;
                if (d instanceof El) {
                    if (a instanceof Hl && d.g === b.options.Uh(a)) {
                        b.wb(a);
                        return
                    }
                    var e = c.get(d.g);
                    void 0 === e && (e = {
                        Yo: d,
                        Fj: document.createDocumentFragment()
                    }, c.set(d.g, e));
                    d = e.Fj;
                    e = b.h.nextSibling;
                    var f = b.g,
                        g;
                    f = void 0 === f ? null : f;
                    for (g = void 0 === g ? null : g; e !== f;) {
                        var k = e.nextSibling;
                        d.insertBefore(e, g);
                        e =
                            k
                    }
                }
                a instanceof Hl && (g = b.options.Uh(a), c = c.get(g), void 0 !== c && (b.wb(c.Fj), b.Ic(), b.value = c.Yo));
                b.wb(a)
            }
        });
    var my = new WeakMap,
        vm = Uk(function(a) {
            return function(b) {
                if (!(b instanceof Pl) || b instanceof Tl || "class" !== b.g.name || 1 < b.g.g.length) throw Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
                var c = b.g,
                    d = c.o,
                    e = my.get(b);
                void 0 === e && (d.className = c.Wa.join(" "), my.set(b, e = new Set));
                var f = d.classList;
                e.forEach(function(k) {
                    k in a || (f.remove(k), e.delete(k))
                });
                for (var g in a) b = a[g], b != e.has(g) && (b ? (f.add(g), e.add(g)) : (f.remove(g), e.delete(g)))
            }
        });
    var ny = new WeakMap,
        oy = Uk(function(a, b) {
            return function(c) {
                var d = ny.get(c);
                if (Array.isArray(a)) {
                    if (Array.isArray(d) && d.length === a.length && a.every(function(e, f) {
                            return e === d[f]
                        })) return
                } else if (d === a && (void 0 !== a || ny.has(c))) return;
                c.wb(b());
                ny.set(c, Array.isArray(a) ? Array.from(a) : a)
            }
        });
    var py = new WeakMap,
        lm = Uk(function(a) {
            return function(b) {
                if (!(b instanceof Pl) || b instanceof Tl || "style" !== b.g.name || 1 < b.g.g.length) throw Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
                var c = b.g,
                    d = c.o.style,
                    e = py.get(b);
                void 0 === e && (d.cssText = c.Wa.join(" "), py.set(b, e = new Set));
                e.forEach(function(g) {
                    g in a || (e.delete(g), -1 === g.indexOf("-") ? d[g] = null : d.removeProperty(g))
                });
                for (var f in a) e.add(f), -1 === f.indexOf("-") ? d[f] = a[f] : d.setProperty(f,
                    a[f])
            }
        });
    var km = ['\n      <div class="album-art" role="presentation"\n          style="', '"\n          @click="', '">\n      </div>'];
    km.raw = km.slice();
    var im = ['\n        <div role="button" class="btn"\n             title="', '"\n             @click="', '">\n          <img class="play-icon btn-icon" src="" alt="" role="presentation">\n        </div>'];
    im.raw = im.slice();
    var hm = ['\n        <div role="button" class="btn"\n             title="', '"\n             aria-disabled="', '"\n             @click="', '">\n          <img class="pause-icon btn-icon" src="" alt="" role="presentation">\n        </div>'];
    hm.raw = hm.slice();
    var qy = ["\n      ", '\n      <div class="mini-player-root">\n        ', "\n        ", "\n      </div>"];
    qy.raw = qy.slice();
    _.q(gm, em);
    gm.prototype.D = function() {
        var a = bm(qy, jy, ly(jm(this)), mm(this));
        am(a, this.shadowRoot)
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-mini-player", gm);
    var xm = ['\n      <div class="', '"\n        style="', '">\n        ', "\n        ", "\n      </div>"];
    xm.raw = xm.slice();
    var ym = ['<div class="live">', "</div>"];
    ym.raw = ym.slice();
    var wm = ['<div class="duration">', "</div>"];
    wm.raw = wm.slice();
    var ry = ['\n    <div class="media-browse-logo"\n         style="', '" aria-label="logo"></div>'];
    ry.raw = ry.slice();
    var tm = ['\n        <div class="media-browse-carousel">', "</div>"];
    tm.raw = tm.slice();
    var rm = '\n          <div class="browse-item ;"\n              @click=";">\n            ;\n            <div class="browse-item-text">\n              <h2 class="browse-item-title">\n                  ;\n              </h2>\n              <h3 class="browse-item-subtitle">\n                  ;\n              </h3>\n            </div>\n          </div>\n        '.split(";");
    rm.raw = rm.slice();
    var qm = ['\n      <div class="media-browse-carousel"\n           style="', '"></div>'];
    qm.raw = qm.slice();
    var sy = ["", ""];
    sy.raw = sy.slice();
    var ty = '\n      ;\n      <div class=";">\n        <div class="media-browse-landing-background"></div>\n        <div class="media-browse-content-layer">\n          <div class="media-browse-top-bar"\n              style=";">\n            ;\n            <h1 class="media-browse-title">\n              ;\n            </h1>\n            ;\n          </div>\n          ;\n          <div class="media-browse-touch-shield"\n              style=";"></div>\n        </div>\n      </div>'.split(";");
    ty.raw = ty.slice();
    _.q(nm, em);
    nm.prototype.Mc = function(a) {
        this.g = a;
        if (a = this.shadowRoot.querySelector(".media-browse-carousel")) a.scrollLeft = 0;
        dm(this)
    };
    nm.prototype.D = function() {
        var a = this,
            b = bm(ty, hy, vm({
                "media-browse-root": !0,
                landing: this.o
            }), lm({
                opacity: this.H,
                visibility: this.I
            }), oy(this.h, function() {
                var c = a.h,
                    d = {};
                c && (d.content = cast.receiver.J.aa.lb(c));
                return bm(ry, lm(d))
            }), this.g ? this.g.title : "", bm(sy, this.l), oy([this.g], function() {
                return um(a, a.g)
            }), lm({
                visibility: this.K
            }));
        am(b, this.shadowRoot)
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-media-browse", nm);
    zm.prototype.clone = function() {
        return new zm(this.g, this.w, this.l, this.A, this.o, this.C, this.h, this.G)
    };
    _.Sa(Cm, _.C);
    _.h = Cm.prototype;
    _.h.start = function() {
        this.stop();
        this.o = !1;
        var a = Dm(this),
            b = Em(this);
        a && !b && this.h.mozRequestAnimationFrame ? (this.g = _.Gd(this.h, "MozBeforePaint", this.l), this.h.mozRequestAnimationFrame(null), this.o = !0) : this.g = a && b ? a.call(this.h, this.l) : this.h.setTimeout(Za(this.l), 20)
    };
    _.h.stop = function() {
        if (this.Pb()) {
            var a = Dm(this),
                b = Em(this);
            a && !b && this.h.mozRequestAnimationFrame ? _.Sd(this.g) : a && b ? b.call(this.h, this.g) : this.h.clearTimeout(this.g)
        }
        this.g = null
    };
    _.h.Pb = function() {
        return null != this.g
    };
    _.h.Go = function() {
        this.o && this.g && _.Sd(this.g);
        this.g = null;
        this.A.call(this.w, (0, _.M)())
    };
    _.h.ha = function() {
        this.stop();
        Cm.eb.ha.call(this)
    };
    _.Sa(Fm, _.C);
    _.h = Fm.prototype;
    _.h.Pd = 0;
    _.h.ha = function() {
        Fm.eb.ha.call(this);
        this.stop();
        delete this.g;
        delete this.h
    };
    _.h.start = function(a) {
        this.stop();
        this.Pd = _.jf(this.l, void 0 !== a ? a : this.o)
    };
    _.h.stop = function() {
        this.Pb() && _.kf(this.Pd);
        this.Pd = 0
    };
    _.h.Pb = function() {
        return 0 != this.Pd
    };
    _.h.Ho = function() {
        this.Pd = 0;
        this.g && this.g.call(this.h)
    };
    var Gm = {},
        Jm = null,
        Hm = null;
    _.Sa(Nm, _.Yd);
    Nm.prototype.ib = function(a) {
        this.dispatchEvent(a)
    };
    _.Sa(Om, Nm);
    _.h = Om.prototype;
    _.h.play = function(a) {
        if (a || 0 == this.g) this.progress = 0, this.coords = this.h;
        else if (1 == this.g) return !1;
        Im(this);
        this.startTime = a = (0, _.M)(); - 1 == this.g && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.progress || this.ib("begin");
        this.ib("play"); - 1 == this.g && this.ib("resume");
        this.g = 1;
        var b = _.Na(this);
        b in Gm || (Gm[b] = this);
        Lm();
        Mm(this, a);
        return !0
    };
    _.h.stop = function(a) {
        Im(this);
        this.g = 0;
        a && (this.progress = 1);
        Pm(this, this.progress);
        this.ib("stop");
        this.ib("end")
    };
    _.h.pause = function() {
        1 == this.g && (Im(this), this.g = -1, this.ib("pause"))
    };
    _.h.ha = function() {
        0 == this.g || this.stop(!1);
        this.ib("destroy");
        Om.eb.ha.call(this)
    };
    _.h.ib = function(a) {
        this.dispatchEvent(new Qm(a, this))
    };
    _.Sa(Qm, _.E);
    var Ym = gn();
    _.q(Sm, _.Yd);
    _.q(Vm, _.E);
    _.q(Zm, _.E);
    cast.receiver.J.wm = function(a) {
        a.innerHTML = '<style>goog-video-metadata{align-items:flex-start;box-sizing:border-box;display:flex;flex-direction:column;flex-grow:1;text-align:left;padding:44px 56px 0}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){goog-video-metadata{padding:112px 112px 0}}.logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:rgba(255,255,255,0.7);font-family:\'Roboto\',Arial,sans-serif;font-size:36px;font-weight:500;height:40px;line-height:40px;width:100%}.logo.app-icon{height:68px}.title{-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;font-weight:normal;overflow:hidden;word-break:break-word;width:auto;margin-top:0;margin-bottom:0;font-size:56px;line-height:76px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.title{margin-bottom:4px;font-size:68px;line-height:80px}}.subtitle{font-weight:normal;margin:0;opacity:.7;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing:1.6px;line-height:30px;font-size:28px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.subtitle{letter-spacing:1.4px;line-height:40px;font-size:32px}}.subtitle-container{margin-top:auto;margin-bottom:16px;max-width:100%}.break-countdown{position:absolute;bottom:65px;left:56px;z-index:-1;font-size:24px;text-shadow:0 2px 4px rgba(0,0,0,0.5);color:rgba(255,255,255,0.7)}.break-countdown .ad-label{color:#fff}.break-countdown .ad-label:after{content:\' \u00b7 \'}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.break-countdown{bottom:82px;left:112px}}.break-skip{position:absolute;bottom:46px;right:32px;font-size:20px;padding:0 32px;height:64px;display:flex;align-items:center;justify-content:center;flex-direction:row;border-radius:32px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.break-skip{bottom:62px;right:82px}}.break-skip .break-skip-scrim{border:2px solid rgba(255,255,255,0.2);position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);border-radius:32px}.break-skip .break-skip-highlight{position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background-color:transparent;border-radius:32px}.break-skip:active .break-skip-scrim{background-color:rgba(0,0,0,0.3)}.break-skip .skip-ad-text{-webkit-font-smoothing:antialiased}.break-skip .skip-ad-icon{margin-left:10px;margin-right:-8px;width:28px;height:28px}.break-skip-btn-countdown{min-width:110px}.loading-bar{--loading-bar-width:1000px;height:100%;overflow:hidden;position:relative;transform:translateZ(0);transition:opacity 250ms linear;width:1000px}.loading-bar .rect,.loading-bar .rect-inner{height:100%;position:absolute;width:1000px}.loading-bar .rect{transform-origin:top left}.loading-bar .rect-primary{transform:scaleX(0)}.loading-bar .rect-inner{background-color:#9aa0a6;display:inline-block}.loading-bar .rect-primary{animation:primary-indeterminate-translate 2s infinite linear}.loading-bar .rect-primary>.rect-inner{animation:primary-indeterminate-scale 2s infinite linear}.loading-bar .rect-auxiliary{animation:auxiliary-indeterminate-translate 2s infinite linear}.loading-bar .rect-auxiliary>.rect-inner{animation:auxiliary-indeterminate-scale 2s infinite linear}@keyframes primary-indeterminate-translate{0%{transform:translateX(-1451.66611px)}20%{animation-timing-function:cubic-bezier(.5, 0, .701732, .495819);transform:translateX(-1451.66611px)}59.15%{animation-timing-function:cubic-bezier(.302435, .381352, .55, .956352);transform:translateX(-614.95191px)}100%{transform:translateX(554.44446px)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.334731, .12482, .785844, 1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06, .11, .6, 1);transform:scaleX(.661479)}100%{transform:scaleX(.08)}}@keyframes auxiliary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15, 0, .515058, .409685);transform:translateX(-548.88891px)}25%{animation-timing-function:cubic-bezier(.31033, .284058, .8, .733712);transform:translateX(-172.36978px)}48.35%{animation-timing-function:cubic-bezier(.4, .627035, .6, .902026);transform:translateX(294.97274px)}100%{transform:translateX(1053.88891px)}}@keyframes auxiliary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.205028, .057051, .57661, .453971);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.152313, .196432, .648374, 1.004315);transform:scaleX(.457104)}44.15%{animation-timing-function:cubic-bezier(.257759, .003163, .211762, 1.38179);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}:host{bottom:0;color:#fff;font-family:\'Google Sans\',\'Roboto\',Arial,sans-serif;left:0;position:fixed;right:0;top:0;z-index:1000000;--media-browse-top-padding:104px;--media-browse-visible-part-height:70px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){:host{--media-browse-top-padding:159px;--media-browse-visible-part-height:85px}}.controls-layer{display:flex;position:relative;flex-direction:column;justify-content:flex-start;height:100%;will-change:transform}.controls-toggle{position:absolute;width:100%;height:100%;top:0;left:0}.accessibility-alert,.controls-toggle{opacity:0;position:absolute;left:-9999px}.controls{box-sizing:border-box;flex:none;display:flex;flex-direction:column;justify-content:flex-end;height:192px;padding:0 56px 14px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.controls{height:240px;padding:0 112px 30px}}goog-audio-player-compatibility{position:absolute;display:none}.scrim,.buffering-scrim{bottom:0;height:100vh;left:0;position:absolute;width:100vw;z-index:-1}.buffering-scrim{background-color:rgba(0,0,0,0.6);visibility:hidden}goog-video-metadata{display:none}.touch-layer{height:100%;touch-action:manipulation;user-select:none;width:100%}.touch-layer.with-related-content{--media-browse-controls-offset:-70px;--media-browse-peek-offset:-70px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.with-related-content{--media-browse-controls-offset:-95px;--media-browse-peek-offset:-85px}}.touch-layer goog-media-browse{position:absolute;left:0;will-change:transform;pointer-events:none;top:calc(100% - 104px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer goog-media-browse{top:calc(100% - 159px)}}.touch-layer .media-browse-scrim{bottom:0;height:100%;left:0;position:absolute;width:100%;background-color:#202124;opacity:0;will-change:opacity}.touch-layer.video:not(.remote-controls) .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5) 42.5%, rgba(0,0,0,0.92))}.touch-layer.video:not(.remote-controls).compatibility-mode-scrim .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0.78), #000)}.touch-layer.video:not(.remote-controls) goog-video-metadata{flex-grow:1;display:flex}.touch-layer.video:not(.remote-controls).active .title,.touch-layer.video:not(.remote-controls).buffering .title{width:100%}.touch-layer.video:not(.remote-controls) .scrim{will-change:opacity;opacity:0;transition:visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .break-countdown,.touch-layer.video:not(.remote-controls) .break-skip .break-skip-scrim{opacity:1;transition:opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls) .logo{will-change:opacity,transform;opacity:0;transform:translateY(32px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .subtitle-container,.touch-layer.video:not(.remote-controls) .title{will-change:opacity,transform;opacity:0;transform:translateY(44px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .controls,.touch-layer.video:not(.remote-controls) goog-media-browse{will-change:transform;transform:translateY(56px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.video:not(.remote-controls) .scrubber-layer,.touch-layer.video:not(.remote-controls) .time-numbers{will-change:opacity;opacity:0;transition:visibility 0s 150ms,opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls) .slot{opacity:0;transition:visibility 0s 100ms,opacity 100ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls).active .break-skip[role="button"]:active .break-skip-highlight,.touch-layer.video:not(.remote-controls).buffering .break-skip[role="button"]:active .break-skip-highlight{background-color:rgba(255,255,255,0.1)}.touch-layer.video:not(.remote-controls).active .scrim{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .break-countdown,.touch-layer.video:not(.remote-controls).active .break-skip .break-skip-scrim{opacity:0;transition:visibility 0s 200ms,opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.video:not(.remote-controls).active .logo{opacity:1;transform:translateY(0);transition:transform 400ms cubic-bezier(.2, 0, 0, 1),opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .subtitle-container,.touch-layer.video:not(.remote-controls).active .title{opacity:1;transform:translateY(var(--media-browse-controls-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1),opacity 150ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .controls{transform:translateY(var(--media-browse-controls-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.video:not(.remote-controls).active goog-media-browse{transform:translateY(var(--media-browse-peek-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.video:not(.remote-controls).active .scrubber-layer,.touch-layer.video:not(.remote-controls).active .time-numbers,.touch-layer.video:not(.remote-controls).active .slot{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.video:not(.remote-controls).active .slot-primary-1,.touch-layer.video:not(.remote-controls).active .slot-primary-2{transition-delay:50ms}.touch-layer.video:not(.remote-controls).active .slot-secondary-1,.touch-layer.video:not(.remote-controls).active .slot-secondary-2,.touch-layer.video:not(.remote-controls).active .device-controller-slot{transition-delay:100ms}.touch-layer.video:not(.remote-controls).buffering .buffering-scrim{visibility:visible}.touch-layer.video:not(.remote-controls).buffering .scrim,.touch-layer.video:not(.remote-controls).buffering .logo,.touch-layer.video:not(.remote-controls).buffering .subtitle-container,.touch-layer.video:not(.remote-controls).buffering .title,.touch-layer.video:not(.remote-controls).buffering .controls,.touch-layer.video:not(.remote-controls).buffering .scrubber-layer,.touch-layer.video:not(.remote-controls).buffering .time-numbers,.touch-layer.video:not(.remote-controls).buffering .slot{opacity:1;visibility:visible;transition:none;transform:none}.touch-layer.video:not(.remote-controls).buffering .controls,.touch-layer.video:not(.remote-controls).buffering .subtitle-container,.touch-layer.video:not(.remote-controls).buffering .title{transform:translateY(var(--media-browse-controls-offset, 0))}.touch-layer.video:not(.remote-controls).buffering goog-media-browse{transform:translateY(var(--media-browse-peek-offset, 0))}.touch-layer.video:not(.remote-controls).buffering .break-countdown,.touch-layer.video:not(.remote-controls).buffering .break-skip .break-skip-scrim{opacity:0;transition:none;transform:none;visibility:hidden}.touch-layer.audio goog-audio-player-compatibility,.touch-layer.remote-controls goog-audio-player-compatibility{display:block}.touch-layer.audio .controls,.touch-layer.remote-controls .controls{margin-top:auto}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.audio .btn-play-pause .btn-icon,.touch-layer.remote-controls .btn-play-pause .btn-icon,.touch-layer.audio .btn-stop .btn-icon,.touch-layer.remote-controls .btn-stop .btn-icon{width:124px;height:124px}}.touch-layer.audio .scrim,.touch-layer.remote-controls .scrim{background:linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.92));height:192px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.audio .scrim,.touch-layer.remote-controls .scrim{height:240px}}.touch-layer.audio.with-related-content .scrim,.touch-layer.remote-controls.with-related-content .scrim{height:262px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.touch-layer.audio.with-related-content .scrim,.touch-layer.remote-controls.with-related-content .scrim{height:335px}}.touch-layer.audio .break-countdown,.touch-layer.remote-controls .break-countdown{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio .break-skip,.touch-layer.remote-controls .break-skip{opacity:0;transition:visibility 0s 200ms,opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.audio .break-skip-scrim,.touch-layer.remote-controls .break-skip-scrim{display:none}.touch-layer.audio .time-numbers,.touch-layer.remote-controls .time-numbers,.touch-layer.audio .slot,.touch-layer.remote-controls .slot{will-change:opacity;opacity:0;transition:visibility 0s 100ms,opacity 100ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.audio .scrubber::-webkit-slider-thumb,.touch-layer.remote-controls .scrubber::-webkit-slider-thumb{will-change:transform;transform:scaleY(.2);transition:transform 350ms cubic-bezier(.2, 0, 0, 1),visibility 0s 350ms;visibility:hidden}.touch-layer.audio .controls,.touch-layer.remote-controls .controls,.touch-layer.audio goog-media-browse,.touch-layer.remote-controls goog-media-browse{will-change:transform;transform:translateY(56px);transition:transform 350ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.active .time-numbers,.touch-layer.remote-controls.active .time-numbers,.touch-layer.audio.active .slot,.touch-layer.remote-controls.active .slot{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.active .break-countdown,.touch-layer.remote-controls.active .break-countdown{opacity:0;transition:visibility 0s 200ms,opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:hidden}.touch-layer.audio.active .break-skip,.touch-layer.remote-controls.active .break-skip{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.active .break-skip-scrim,.touch-layer.remote-controls.active .break-skip-scrim{display:none}.touch-layer.audio.active .slot-primary-1,.touch-layer.remote-controls.active .slot-primary-1,.touch-layer.audio.active .slot-primary-2,.touch-layer.remote-controls.active .slot-primary-2{transition-delay:50ms}.touch-layer.audio.active .slot-secondary-1,.touch-layer.remote-controls.active .slot-secondary-1,.touch-layer.audio.active .slot-secondary-2,.touch-layer.remote-controls.active .slot-secondary-2,.touch-layer.audio.active .device-controller-slot,.touch-layer.remote-controls.active .device-controller-slot{transition-delay:100ms}.touch-layer.audio.active .scrubber::-webkit-slider-thumb,.touch-layer.remote-controls.active .scrubber::-webkit-slider-thumb{transform:scaleY(1);transition:transform 400ms cubic-bezier(.2, 0, 0, 1);visibility:visible}.touch-layer.audio.active .controls,.touch-layer.remote-controls.active .controls{transform:translateY(var(--media-browse-controls-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.active goog-media-browse,.touch-layer.remote-controls.active goog-media-browse{transform:translateY(var(--media-browse-peek-offset, 0));transition:transform 400ms cubic-bezier(.2, 0, 0, 1)}.touch-layer.audio.scrubbing .scrubber::-webkit-slider-thumb,.touch-layer.remote-controls.scrubbing .scrubber::-webkit-slider-thumb{transform:scaleY(1);transition:transform 400ms cubic-bezier(.2, 0, 0, 1);visibility:visible}.touch-layer.audio.scrubbing .time-numbers,.touch-layer.remote-controls.scrubbing .time-numbers{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.scrubbing-ending .time-numbers,.touch-layer.remote-controls.scrubbing-ending .time-numbers{opacity:1;transition:opacity 200ms cubic-bezier(0, 0, 1, 1);visibility:visible}.touch-layer.audio.hidden-audio-scrim:not(.with-related-content) .scrim,.touch-layer.remote-controls.hidden-audio-scrim:not(.with-related-content) .scrim,.touch-layer.audio.compatibility-mode-scrim .scrim,.touch-layer.remote-controls.compatibility-mode-scrim .scrim{display:none}.touch-layer.photo:not(.remote-controls) goog-audio-player-compatibility,.touch-layer.disabled goog-audio-player-compatibility,.touch-layer.photo:not(.remote-controls) .scrim,.touch-layer.disabled .scrim,.touch-layer.photo:not(.remote-controls) .buffering-scrim,.touch-layer.disabled .buffering-scrim,.touch-layer.photo:not(.remote-controls) goog-video-metadata,.touch-layer.disabled goog-video-metadata,.touch-layer.photo:not(.remote-controls) .controls-layer,.touch-layer.disabled .controls-layer,.touch-layer.photo:not(.remote-controls) .break-countdown,.touch-layer.disabled .break-countdown,.touch-layer.photo:not(.remote-controls) .break-skip,.touch-layer.disabled .break-skip{display:none !important}goog-buttons-bar{align-items:center;display:grid;grid-template-columns:[dc] 96px 96px 1fr [pr1] 96px [center] auto [pr2] 96px 1fr [sec1] 96px [sec2] 96px;flex:none;margin-top:-8px;justify-content:center}.btn[aria-disabled=true]{pointer-events:none}.btn[aria-disabled=true] .btn-icon{opacity:.5}.slot{height:96px;margin:0;width:96px}.btn{height:96px;width:96px;display:flex;justify-content:center;align-items:center;position:relative}.btn-icon{height:48px;width:48px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.btn-icon{height:56px;width:56px}}.slot.center{height:104px;width:auto;margin:12px 28px;grid-column:center;display:flex;justify-content:space-between}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.slot.center{height:128px;margin:0 28px}}goog-buttons-bar.bluetooth .slot.center{margin-left:12px;margin-right:12px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){goog-buttons-bar.bluetooth .slot.center{margin-left:24px;margin-right:24px}}.slot.slot-primary-1{grid-column:pr1}.slot.slot-primary-2{grid-column:pr2}.slot.slot-secondary-1{grid-column:sec1;grid-row:1}.slot.slot-secondary-2{justify-self:end;grid-column:sec2;margin-right:-20px}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-1{grid-column:sec2;margin-left:auto;margin-right:-20px}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-2{display:none}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.slot-secondary-1,.slot-secondary-2{height:64px;width:64px}.slot-secondary-1 .btn,.slot-secondary-2 .btn{height:64px;width:64px}.slot-secondary-1 .btn-icon,.slot-secondary-2 .btn-icon{height:32px;width:32px}.slot.slot-secondary-1{margin-left:52px}.slot.slot-secondary-2{margin-right:-16px}goog-buttons-bar.secondary-2-empty .slot.slot-secondary-1{margin-right:-16px}}.device-controller-slot{display:flex;grid-column:dc / span 3;align-items:center;font-size:24px;font-weight:400;width:auto}.active  .device-controller-slot,.buffering  .device-controller-slot{width:100%}.device-controller-btn{display:flex;position:relative;justify-content:center;align-items:center;box-sizing:border-box;background-color:rgba(255,255,255,0.1);min-width:80px;max-width:270px;padding:0 16px;height:64px;border-radius:32px;margin-left:-10px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.device-controller-btn{max-width:330px;min-width:120px;height:80px;padding:0 20px;border-radius:40px}}.device-controller-label{-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:end;display:-webkit-box;overflow:hidden;font-size:20px;line-height:24px;margin:0 8px 0 12px;word-break:break-word}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.device-controller-label{margin:0 12px 0 16px;font-size:24px;line-height:28px}}.device-controller-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C8H7a3%2C3%2C0%2C0%2C0-3%2C3.06V16.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0V11l34%2C.06V36H26.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3H41a3%2C3%2C0%2C0%2C0%2C3-3.06V11.06A3%2C3%2C0%2C0%2C0%2C41%2C8Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%20d=%27M5.5%2C27.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3%2C7%2C7%2C0%2C0%2C1%2C7%2C7%2C1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A10%2C10%2C0%2C0%2C0%2C5.5%2C27.5Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M5.5%2C21a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3A13.52%2C13.52%2C0%2C0%2C1%2C19%2C37.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A16.52%2C16.52%2C0%2C0%2C0%2C5.5%2C21Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Ccircle%20cx=%276.55%27%20cy=%2736.5%27%20r=%272.5%27%20fill=%27%23FFF%27/%3E%0A%3C/svg%3E%0A");width:24px;height:24px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.device-controller-icon{width:32px;height:32px}}.device-controller-icon[connected]{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C8H7a3%2C3%2C0%2C0%2C0-3%2C3.06V16.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0V11l34%2C.06V36H26.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3H41a3%2C3%2C0%2C0%2C0%2C3-3.06V11.06A3%2C3%2C0%2C0%2C0%2C41%2C8Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M25.79%2C33H37a1%2C1%2C0%2C0%2C0%2C1-1V15a1%2C1%2C0%2C0%2C0-1-1H11a1%2C1%2C0%2C0%2C0-1%2C1v2.18a1%2C1%2C0%2C0%2C0%2C.8%2C1%2C19.55%2C19.55%2C0%2C0%2C1%2C14%2C14.07A1%2C1%2C0%2C0%2C0%2C25.79%2C33Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%20d=%27M5.5%2C27.5a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3%2C7%2C7%2C0%2C0%2C1%2C7%2C7%2C1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A10%2C10%2C0%2C0%2C0%2C5.5%2C27.5Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M5.5%2C21a1.5%2C1.5%2C0%2C0%2C0%2C0%2C3A13.52%2C13.52%2C0%2C0%2C1%2C19%2C37.5a1.5%2C1.5%2C0%2C0%2C0%2C3%2C0A16.52%2C16.52%2C0%2C0%2C0%2C5.5%2C21Z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27/%3E%0A%20%20%3Ccircle%20cx=%276.55%27%20cy=%2736.5%27%20r=%272.5%27%20fill=%27%23FFF%27/%3E%0A%3C/svg%3E%0A")}.btn-play-pause,.btn-stop{height:104px;width:104px}.btn-play-pause .btn-icon,.btn-stop .btn-icon{height:88px;width:88px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.btn-play-pause,.btn-stop{height:128px;width:128px}.btn-play-pause .btn-icon,.btn-stop .btn-icon{height:112px;width:112px}}.btn-play-pause[data-state=\'playing\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M32%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%20%20%3Cpath%20d=%27M16%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%3C/svg%3E%0A")}.btn-play-pause[data-state=\'paused\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpolygon%20points=%2738.5%2024%2015.5%2038.5%2015.5%209.5%2038.5%2024%27%20fill=%27none%27%0A%20%20%20%20%20%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%0A%20%20%20%20%20%20stroke-width=%274%27%20vector-effect=%27non-scaling-stroke%27/%3E%0A%3C/svg%3E%0A")}.btn-stop{display:flex;margin-left:10px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.btn-stop{margin-left:12px}}.btn-stop .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Crect%20id=%27Rectangle%27%20stroke=%27%23FFFFFF%27%20fill=%27none%27%20stroke-width=%274%27%0A%20%20%20%20%20%20vector-effect=%27non-scaling-stroke%27%20fill-rule=%27nonzero%27%20x=%2711.5%27%20y=%2710.5%27%20width=%2726%27%0A%20%20%20%20%20%20height=%2726%27%20rx=%272%27%3E%3C/rect%3E%0A%3C/svg%3E%0A")}.btn-next .btn-icon,.skip-ad-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M37%2C9.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v29a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M11%2C12.22V35.78L29.69%2C24ZM33.3%2C25.27l-23%2C14.5A1.5%2C1.5%2C0%2C0%2C1%2C8%2C38.5V9.5a1.5%2C1.5%2C0%2C0%2C1%2C2.3-1.27l23%2C14.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C2.54Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-back .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M8%2C9.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v29a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M14.7%2C25.27a1.5%2C1.5%2C0%2C0%2C1%2C0-2.54l23-14.5A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v29a1.5%2C1.5%2C0%2C0%2C1-2.3%2C1.27ZM37%2C35.78V12.22L18.31%2C24Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-forward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2024a1.5%201.5%200%200%201%203%200c0%2011.046-8.954%2020-20%2020S4%2035.046%204%2024%2012.954%204%2024%204h3.5a1.5%201.5%200%200%201%200%203H24C14.611%207%207%2014.611%207%2024s7.611%2017%2017%2017%2017-7.611%2017-17z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M24.44%202.56A1.5%201.5%200%200%201%2026.56.44l4%204a1.5%201.5%200%200%201%200%202.12l-4%204a1.5%201.5%200%200%201-2.12-2.12l2.939-2.94-2.94-2.94zM17.82%2030v-8.67l-2%20.82-.89-2.15%203.42-1.6h2V30zM27.65%2030.27A4.48%204.48%200%200%201%2024%2028.54a5.91%205.91%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.92%205.92%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.93%205.93%200%200%201%201%201.93%208.59%208.59%200%200%201%200%204.84%205.92%205.92%200%200%201-1%201.93%204.51%204.51%200%200%201-3.64%201.73h.01zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.76-.77%203.78%203.78%200%200%200%20.48-1.17%206.83%206.83%200%200%200%200-3%203.78%203.78%200%200%200-.48-1.17%202.44%202.44%200%200%200-.76-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.76.77%203.78%203.78%200%200%200-.48%201.17%206.87%206.87%200%200%200%200%203c.093.414.255.81.48%201.17.193.31.452.573.76.77a1.91%201.91%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-forward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2024a1.5%201.5%200%200%201%203%200c0%2011.046-8.954%2020-20%2020S4%2035.046%204%2024%2012.954%204%2024%204h3.5a1.5%201.5%200%200%201%200%203H24C14.611%207%207%2014.611%207%2024s7.611%2017%2017%2017%2017-7.611%2017-17z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M24.44%202.56A1.5%201.5%200%200%201%2026.56.44l4%204a1.5%201.5%200%200%201%200%202.12l-4%204a1.5%201.5%200%200%201-2.12-2.12l2.939-2.94-2.94-2.94zM18.51%2030v-8.67l-2%20.82-.89-2.15L19%2018.37h2V30zM27.69%2030.27a5.17%205.17%200%200%201-1.38-.19%204%204%200%200%201-2.25-1.58%203.9%203.9%200%200%201-.61-1.39l2.33-.9c.083.474.31.91.65%201.25a1.75%201.75%200%200%200%201.26.45%201.57%201.57%200%200%200%201.16-.48%201.74%201.74%200%200%200%200-2.38%201.59%201.59%200%200%200-1.18-.48%201.81%201.81%200%200%200-.85.19%202.12%202.12%200%200%200-.61.48l-2.45-1.12.63-5.76h6.78v2.18h-4.65L26.08%2023l.17.05a3.94%203.94%200%200%201%20.81-.48%202.84%202.84%200%200%201%201.18-.22%203.44%203.44%200%200%201%201.37.28c.435.184.83.453%201.16.79.347.358.622.779.81%201.24a4.19%204.19%200%200%201%20.31%201.63%204.25%204.25%200%200%201-.31%201.64%203.6%203.6%200%200%201-.87%201.27%203.94%203.94%200%200%201-1.33.82%204.72%204.72%200%200%201-1.69.25z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-forward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2024a1.5%201.5%200%200%201%203%200c0%2011.046-8.954%2020-20%2020S4%2035.046%204%2024%2012.954%204%2024%204h3.5a1.5%201.5%200%200%201%200%203H24C14.611%207%207%2014.611%207%2024s7.611%2017%2017%2017%2017-7.611%2017-17z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M24.44%202.56A1.5%201.5%200%200%201%2026.56.44l4%204a1.5%201.5%200%200%201%200%202.12l-4%204a1.5%201.5%200%200%201-2.12-2.12l2.939-2.94-2.94-2.94zM18.31%2030.27a4.67%204.67%200%200%201-2.76-.8A4.15%204.15%200%200%201%2014%2027.14l2.43-1c.1.96.936%201.673%201.9%201.62a1.7%201.7%200%200%200%201.07-.36%201.15%201.15%200%200%200%20.46-1c0-.92-.667-1.38-2-1.38h-1v-2.23h.94c.199%200%20.397-.024.59-.07.184-.04.36-.112.52-.21a1.07%201.07%200%200%200%20.37-.38%201.19%201.19%200%200%200%20.14-.59c0-.294-.12-.575-.33-.78a1.23%201.23%200%200%200-.93-.34%201.45%201.45%200%200%200-1%20.36%201.79%201.79%200%200%200-.52.85l-2.33-1a4.21%204.21%200%200%201%20.48-.92c.22-.315.49-.592.8-.82a4.17%204.17%200%200%201%201.14-.59%204.47%204.47%200%200%201%201.49-.23%204.9%204.9%200%200%201%201.57.24A3.74%203.74%200%200%201%2021%2019c.324.273.583.615.76%201%20.164.364.246.76.24%201.16a3.25%203.25%200%200%201-.46%201.7%202.54%202.54%200%200%201-.46.56%202.11%202.11%200%200%201-.51.35v.17a3%203%200%200%201%201.34%201%203%203%200%200%201%20.53%201.82%203.32%203.32%200%200%201-.29%201.39%203.21%203.21%200%200%201-.82%201.1A3.85%203.85%200%200%201%2020%2030a5.31%205.31%200%200%201-1.69.27zM29%2030.27a4.49%204.49%200%200%201-3.64-1.73%205.9%205.9%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.91%205.91%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.91%205.91%200%200%201%201%201.93%208.57%208.57%200%200%201%200%204.84%205.9%205.9%200%200%201-1%201.93A4.51%204.51%200%200%201%2029%2030.27zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.77-.77%203.8%203.8%200%200%200%20.47-1.17%206.83%206.83%200%200%200%200-3%203.81%203.81%200%200%200-.47-1.17%202.44%202.44%200%200%200-.77-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.77.77%203.81%203.81%200%200%200-.47%201.17%206.83%206.83%200%200%200%200%203c.09.413.25.809.47%201.17.195.311.459.575.77.77a1.9%201.9%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-backward-10 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M4%2024a1.5%201.5%200%200%201%203%200c0%209.389%207.611%2017%2017%2017s17-7.611%2017-17S33.389%207%2024%207h-3.5a1.5%201.5%200%200%201%200-3H24c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020S4%2035.046%204%2024z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M20.621%205.5l2.94%202.94a1.5%201.5%200%200%201-2.122%202.12l-4-4a1.5%201.5%200%200%201%200-2.12l4-4a1.5%201.5%200%200%201%202.122%202.12L20.62%205.5zM17.82%2030v-8.67l-2%20.82-.89-2.15%203.42-1.6h2V30zm9.83.27A4.48%204.48%200%200%201%2024%2028.54a5.91%205.91%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.92%205.92%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.93%205.93%200%200%201%201%201.93%208.59%208.59%200%200%201%200%204.84%205.92%205.92%200%200%201-1%201.93%204.51%204.51%200%200%201-3.64%201.73h.01zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.76-.77%203.78%203.78%200%200%200%20.48-1.17%206.83%206.83%200%200%200%200-3%203.78%203.78%200%200%200-.48-1.17%202.44%202.44%200%200%200-.76-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.76.77%203.78%203.78%200%200%200-.48%201.17%206.87%206.87%200%200%200%200%203c.093.414.255.81.48%201.17.193.31.452.573.76.77a1.91%201.91%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-backward-15 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M4%2024a1.5%201.5%200%200%201%203%200c0%209.389%207.611%2017%2017%2017s17-7.611%2017-17S33.389%207%2024%207h-3.5a1.5%201.5%200%200%201%200-3H24c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020S4%2035.046%204%2024z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M20.621%205.5l2.94%202.94a1.5%201.5%200%200%201-2.122%202.12l-4-4a1.5%201.5%200%200%201%200-2.12l4-4a1.5%201.5%200%200%201%202.122%202.12L20.62%205.5zM18.51%2030v-8.67l-2%20.82-.89-2.15L19%2018.37h2V30zM27.69%2030.27a5.17%205.17%200%200%201-1.38-.19%204%204%200%200%201-2.25-1.58%203.9%203.9%200%200%201-.61-1.39l2.33-.9c.083.474.31.91.65%201.25a1.75%201.75%200%200%200%201.26.45%201.57%201.57%200%200%200%201.16-.48%201.74%201.74%200%200%200%200-2.38%201.59%201.59%200%200%200-1.18-.48%201.81%201.81%200%200%200-.85.19%202.12%202.12%200%200%200-.61.48l-2.45-1.12.63-5.76h6.78v2.18h-4.65L26.08%2023l.17.05a3.94%203.94%200%200%201%20.81-.48%202.84%202.84%200%200%201%201.18-.22%203.44%203.44%200%200%201%201.37.28c.435.184.83.453%201.16.79.347.358.622.779.81%201.24a4.19%204.19%200%200%201%20.31%201.63%204.25%204.25%200%200%201-.31%201.64%203.6%203.6%200%200%201-.87%201.27%203.94%203.94%200%200%201-1.33.82%204.72%204.72%200%200%201-1.69.25z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-seek-backward-30 .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M4%2024a1.5%201.5%200%200%201%203%200c0%209.389%207.611%2017%2017%2017s17-7.611%2017-17S33.389%207%2024%207h-3.5a1.5%201.5%200%200%201%200-3H24c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020S4%2035.046%204%2024z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M20.621%205.5l2.94%202.94a1.5%201.5%200%200%201-2.122%202.12l-4-4a1.5%201.5%200%200%201%200-2.12l4-4a1.5%201.5%200%200%201%202.122%202.12L20.62%205.5zM18.31%2030.27a4.67%204.67%200%200%201-2.76-.8A4.15%204.15%200%200%201%2014%2027.14l2.43-1c.1.96.936%201.673%201.9%201.62a1.7%201.7%200%200%200%201.07-.36%201.15%201.15%200%200%200%20.46-1c0-.92-.667-1.38-2-1.38h-1v-2.23h.94c.199%200%20.397-.024.59-.07.184-.04.36-.112.52-.21a1.07%201.07%200%200%200%20.37-.38%201.19%201.19%200%200%200%20.14-.59c0-.294-.12-.575-.33-.78a1.23%201.23%200%200%200-.93-.34%201.45%201.45%200%200%200-1%20.36%201.79%201.79%200%200%200-.52.85l-2.33-1a4.21%204.21%200%200%201%20.48-.92c.22-.315.49-.592.8-.82a4.17%204.17%200%200%201%201.14-.59%204.47%204.47%200%200%201%201.49-.23%204.9%204.9%200%200%201%201.57.24A3.74%203.74%200%200%201%2021%2019c.324.273.583.615.76%201%20.164.364.246.76.24%201.16a3.25%203.25%200%200%201-.46%201.7%202.54%202.54%200%200%201-.46.56%202.11%202.11%200%200%201-.51.35v.17a3%203%200%200%201%201.34%201%203%203%200%200%201%20.53%201.82%203.32%203.32%200%200%201-.29%201.39%203.21%203.21%200%200%201-.82%201.1A3.85%203.85%200%200%201%2020%2030a5.31%205.31%200%200%201-1.69.27zM29%2030.27a4.49%204.49%200%200%201-3.64-1.73%205.9%205.9%200%200%201-1-1.93%208.59%208.59%200%200%201%200-4.84%205.91%205.91%200%200%201%201-1.93%204.64%204.64%200%200%201%207.28%200%205.91%205.91%200%200%201%201%201.93%208.57%208.57%200%200%201%200%204.84%205.9%205.9%200%200%201-1%201.93A4.51%204.51%200%200%201%2029%2030.27zm0-2.38a1.91%201.91%200%200%200%201-.28%202.44%202.44%200%200%200%20.77-.77%203.8%203.8%200%200%200%20.47-1.17%206.83%206.83%200%200%200%200-3%203.81%203.81%200%200%200-.47-1.17%202.44%202.44%200%200%200-.77-.77%202%202%200%200%200-2.06%200%202.44%202.44%200%200%200-.77.77%203.81%203.81%200%200%200-.47%201.17%206.83%206.83%200%200%200%200%203c.09.413.25.809.47%201.17.195.311.459.575.77.77a1.9%201.9%200%200%200%201.06.28z%27%0A%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-repeat[data-state=\'off\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-repeat[data-state=\'all\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-repeat[data-state=\'single\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpolygon%20fill=%27%234285F4%27%20fill-rule=%27nonzero%27%0A%20%20%20%20%20%20points=%2723.8%2029.92%2023.8%2021.25%2021.8%2022.07%2020.87%2019.89%2024.28%2018.29%2026.28%2018.29%2026.28%2029.92%27%3E%3C/polygon%3E%0A%3C/svg%3E%0A")}.btn-shuffle .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C11H29.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M8.44%2C10.56a1.5%2C1.5%2C0%2C0%2C1%2C2.12-2.12l27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12%2C2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M35.44%2C10.44a1.5%2C1.5%2C0%2C0%2C1%2C2.12%2C2.12l-27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12-2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C37V29.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v9A1.5%2C1.5%2C0%2C0%2C1%2C38.5%2C40h-9a1.5%2C1.5%2C0%2C0%2C1%2C0-3Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-shuffle[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C11H29.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M8.44%2C10.56a1.5%2C1.5%2C0%2C0%2C1%2C2.12-2.12l27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12%2C2.12Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M35.44%2C10.44a1.5%2C1.5%2C0%2C0%2C1%2C2.12%2C2.12l-27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12-2.12Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C37V29.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v9A1.5%2C1.5%2C0%2C0%2C1%2C38.5%2C40h-9a1.5%2C1.5%2C0%2C0%2C1%2C0-3Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-captions .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20%20%20d=%27M7%2011v26h34V11H7zm-.75-3h35.5A2.25%202.25%200%200%201%2044%2010.25v27.5A2.25%202.25%200%200%201%2041.75%2040H6.25A2.25%202.25%200%200%201%204%2037.75v-27.5A2.25%202.25%200%200%201%206.25%208z%27%0A%20%20%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20%20%20d=%27M23.38%2028a6%206%200%200%201-4.88%202.24A6.35%206.35%200%200%201%2016%2018a6.47%206.47%200%200%201%202.53-.49%206.1%206.1%200%200%201%202.59.51%206.42%206.42%200%200%201%202%201.48l-1.85%201.8a4.18%204.18%200%200%200-1.14-.91%203.23%203.23%200%200%200-1.58-.37%204%204%200%200%200-1.49.27%203.48%203.48%200%200%200-1.2.78%203.66%203.66%200%200%200-.8%201.22%204.42%204.42%200%200%200%200%203.15c.182.456.454.871.8%201.22.342.34.75.606%201.2.78a4%204%200%200%200%201.49.27%203.45%203.45%200%200%200%201.68-.39%204.27%204.27%200%200%200%201.29-1.12l1.86%201.8zM36%2028a6%206%200%200%201-4.88%202.24%206.48%206.48%200%200%201-2.53-.49%206.35%206.35%200%200%201%200-11.73%206.48%206.48%200%200%201%202.53-.49%206.11%206.11%200%200%201%202.59.51%206.41%206.41%200%200%201%202%201.48l-1.85%201.8a4.18%204.18%200%200%200-1.14-.91%203.22%203.22%200%200%200-1.58-.37%204%204%200%200%200-1.49.27%203.48%203.48%200%200%200-1.2.78%203.64%203.64%200%200%200-.8%201.22%204.42%204.42%200%200%200%200%203.15c.182.456.454.871.8%201.22.342.34.75.606%201.2.78a4%204%200%200%200%201.49.27%203.45%203.45%200%200%200%201.68-.39c.5-.283.94-.664%201.29-1.12L36%2028z%27%0A%20%20%20%20%20%20%20%20fill=%27%23FFF%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-captions[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M7%2011v26h34V11H7zm-.75-3h35.5A2.25%202.25%200%200%201%2044%2010.25v27.5A2.25%202.25%200%200%201%2041.75%2040H6.25A2.25%202.25%200%200%201%204%2037.75v-27.5A2.25%202.25%200%200%201%206.25%208z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27%20fill-rule=%27nonzero%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M23.38%2028a6%206%200%200%201-4.88%202.24A6.35%206.35%200%200%201%2016%2018a6.47%206.47%200%200%201%202.53-.49%206.1%206.1%200%200%201%202.59.51%206.42%206.42%200%200%201%202%201.48l-1.85%201.8a4.18%204.18%200%200%200-1.14-.91%203.23%203.23%200%200%200-1.58-.37%204%204%200%200%200-1.49.27%203.48%203.48%200%200%200-1.2.78%203.66%203.66%200%200%200-.8%201.22%204.42%204.42%200%200%200%200%203.15c.182.456.454.871.8%201.22.342.34.75.606%201.2.78a4%204%200%200%200%201.49.27%203.45%203.45%200%200%200%201.68-.39%204.27%204.27%200%200%200%201.29-1.12l1.86%201.8zM36%2028a6%206%200%200%201-4.88%202.24%206.48%206.48%200%200%201-2.53-.49%206.35%206.35%200%200%201%200-11.73%206.48%206.48%200%200%201%202.53-.49%206.11%206.11%200%200%201%202.59.51%206.41%206.41%200%200%201%202%201.48l-1.85%201.8a4.18%204.18%200%200%200-1.14-.91%203.22%203.22%200%200%200-1.58-.37%204%204%200%200%200-1.49.27%203.48%203.48%200%200%200-1.2.78%203.64%203.64%200%200%200-.8%201.22%204.42%204.42%200%200%200%200%203.15c.182.456.454.871.8%201.22.342.34.75.606%201.2.78a4%204%200%200%200%201.49.27%203.45%203.45%200%200%200%201.68-.39c.5-.283.94-.664%201.29-1.12L36%2028z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27%20fill-rule=%27nonzero%27/%3E%0A%3C/svg%3E%0A")}.btn-like .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M7%2C41.5a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-21a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0Zm29.82.21A2.59%2C2.59%2C0%2C0%2C1%2C34.31%2C43H11.5A1.5%2C1.5%2C0%2C0%2C1%2C10%2C41.5v-22a1.5%2C1.5%2C0%2C0%2C1%2C.44-1.06l11-11A11%2C11%2C0%2C0%2C1%2C22.8%2C6.28a7.15%2C7.15%2C0%2C0%2C1%2C2.15-1.12%2C3.31%2C3.31%2C0%2C0%2C1%2C2.89.35%2C5%2C5%2C0%2C0%2C1%2C2%2C2.89%2C7.94%2C7.94%2C0%2C0%2C1%2C.2%2C3c0%2C.18%2C0%2C.33-.06.42a1.5%2C1.5%2C0%2C0%2C1-.07.25l-2.24%2C6H39c2.81%2C0%2C5%2C2.63%2C5%2C5.5v2.94a3.36%2C3.36%2C0%2C0%2C1-.42%2C1.43ZM33.5%2C40h.83L40.9%2C26.5l.05-.1s0-1%2C0-2.9A2.39%2C2.39%2C0%2C0%2C0%2C39%2C21H25.5a1.5%2C1.5%2C0%2C0%2C1-1.4-2L27%2C11.12a5.21%2C5.21%2C0%2C0%2C0-.1-1.93A2%2C2%2C0%2C0%2C0%2C26.16%2C8S26%2C8%2C25.8%2C8a4.37%2C4.37%2C0%2C0%2C0-1.23.67%2C8.89%2C8.89%2C0%2C0%2C0-.73.59l-.28.26L13%2C20.12V40Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-like[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M7%2C41.5a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-21a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0Zm29.82.21A2.59%2C2.59%2C0%2C0%2C1%2C34.31%2C43H11.5A1.5%2C1.5%2C0%2C0%2C1%2C10%2C41.5v-22a1.5%2C1.5%2C0%2C0%2C1%2C.44-1.06l11-11A11%2C11%2C0%2C0%2C1%2C22.8%2C6.28a7.15%2C7.15%2C0%2C0%2C1%2C2.15-1.12%2C3.31%2C3.31%2C0%2C0%2C1%2C2.89.35%2C5%2C5%2C0%2C0%2C1%2C2%2C2.89%2C7.94%2C7.94%2C0%2C0%2C1%2C.2%2C3c0%2C.18%2C0%2C.33-.06.42a1.5%2C1.5%2C0%2C0%2C1-.07.25l-2.24%2C6H39c2.81%2C0%2C5%2C2.63%2C5%2C5.5v2.94a3.36%2C3.36%2C0%2C0%2C1-.42%2C1.43ZM33.5%2C40h.83L40.9%2C26.5l.05-.1s0-1%2C0-2.9A2.39%2C2.39%2C0%2C0%2C0%2C39%2C21H25.5a1.5%2C1.5%2C0%2C0%2C1-1.4-2L27%2C11.12a5.21%2C5.21%2C0%2C0%2C0-.1-1.93A2%2C2%2C0%2C0%2C0%2C26.16%2C8S26%2C8%2C25.8%2C8a4.37%2C4.37%2C0%2C0%2C0-1.23.67%2C8.89%2C8.89%2C0%2C0%2C0-.73.59l-.28.26L13%2C20.12V40Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}.btn-dislike .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C6.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v21a1.5%2C1.5%2C0%2C0%2C1-3%2C0ZM11.18%2C6.29A2.59%2C2.59%2C0%2C0%2C1%2C13.69%2C5H36.5A1.5%2C1.5%2C0%2C0%2C1%2C38%2C6.5v22a1.5%2C1.5%2C0%2C0%2C1-.44%2C1.06l-11%2C11a11%2C11%2C0%2C0%2C1-1.38%2C1.18%2C7.15%2C7.15%2C0%2C0%2C1-2.15%2C1.12%2C3.31%2C3.31%2C0%2C0%2C1-2.89-.35%2C5%2C5%2C0%2C0%2C1-2-2.89%2C7.94%2C7.94%2C0%2C0%2C1-.2-3c0-.18%2C0-.33.06-.42A1.5%2C1.5%2C0%2C0%2C1%2C18.1%2C36l2.24-6H9c-2.81%2C0-5-2.63-5-5.5V21.56a3.36%2C3.36%2C0%2C0%2C1%2C.42-1.43ZM35%2C8H13.67L7.1%2C21.5%2C7%2C21.6s0%2C1%2C0%2C2.9A2.39%2C2.39%2C0%2C0%2C0%2C9%2C27H22.5a1.5%2C1.5%2C0%2C0%2C1%2C1.4%2C2L21%2C36.88a5.21%2C5.21%2C0%2C0%2C0%2C.1%2C1.93%2C2%2C2%2C0%2C0%2C0%2C.78%2C1.2s.12%2C0%2C.36%2C0a4.37%2C4.37%2C0%2C0%2C0%2C1.23-.67%2C8.89%2C8.89%2C0%2C0%2C0%2C.73-.59l.28-.26L35%2C27.88Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A")}.btn-dislike[aria-pressed=\'true\'] .btn-icon{content:url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M41%2C6.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v21a1.5%2C1.5%2C0%2C0%2C1-3%2C0ZM11.18%2C6.29A2.59%2C2.59%2C0%2C0%2C1%2C13.69%2C5H36.5A1.5%2C1.5%2C0%2C0%2C1%2C38%2C6.5v22a1.5%2C1.5%2C0%2C0%2C1-.44%2C1.06l-11%2C11a11%2C11%2C0%2C0%2C1-1.38%2C1.18%2C7.15%2C7.15%2C0%2C0%2C1-2.15%2C1.12%2C3.31%2C3.31%2C0%2C0%2C1-2.89-.35%2C5%2C5%2C0%2C0%2C1-2-2.89%2C7.94%2C7.94%2C0%2C0%2C1-.2-3c0-.18%2C0-.33.06-.42A1.5%2C1.5%2C0%2C0%2C1%2C18.1%2C36l2.24-6H9c-2.81%2C0-5-2.63-5-5.5V21.56a3.36%2C3.36%2C0%2C0%2C1%2C.42-1.43ZM35%2C8H13.67L7.1%2C21.5%2C7%2C21.6s0%2C1%2C0%2C2.9A2.39%2C2.39%2C0%2C0%2C0%2C9%2C27H22.5a1.5%2C1.5%2C0%2C0%2C1%2C1.4%2C2L21%2C36.88a5.21%2C5.21%2C0%2C0%2C0%2C.1%2C1.93%2C2%2C2%2C0%2C0%2C0%2C.78%2C1.2s.12%2C0%2C.36%2C0a4.37%2C4.37%2C0%2C0%2C0%2C1.23-.67%2C8.89%2C8.89%2C0%2C0%2C0%2C.73-.59l.28-.26L35%2C27.88Z%27%0A%20%20%20%20%20%20fill=%27%234285F4%27/%3E%0A%3C/svg%3E%0A")}goog-timeline{flex:none;display:block;margin-bottom:-13px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){goog-timeline{margin-bottom:1px}}.time-numbers .left{float:left}.time-numbers .right{float:right;height:24px}.time-numbers .right .time-indicator{margin-left:16px}.time-numbers:after{clear:both;content:"";display:table}.time-indicator,.live-label{display:inline-block;font-size:24px;line-height:24px;opacity:.5}.live-label.live-edge{opacity:1}.live-label.live-edge::before{display:inline-block;width:8px;height:8px;vertical-align:15%;margin-right:10px;background-color:#fa5847;content:\'\';border-radius:8px}.scrubber-layer{margin:-15px 0;height:60px;position:relative}.scrubber-layer.live .progress-fill,.scrubber-layer.live .scrubber::-webkit-slider-thumb{background-color:#fa5847}.progress-bar{background-color:rgba(255,255,255,0.4);border-radius:2px;height:4px;left:0;overflow:hidden;position:absolute;top:28px;width:100%}.progress-fill{background-color:#fff;height:100%;left:0;position:absolute;top:0;transform:scaleX(0);transform-origin:left center;width:100%;will-change:transform}.progress-fill.break{background-color:#fbbc04}.progress-seekable-range,.progress-seekable-played{height:100%;position:absolute;top:0}.progress-seekable-played{background-color:#fa5847}.progress-seekable-range{background-color:rgba(255,255,255,0.5)}.progress-breaks{height:100%;left:0;position:absolute;top:0;width:100%}.break-mark{position:absolute;height:100%;background-color:#fbbc04}.progress-loading{height:100%;right:0;position:absolute;top:0;transform-origin:right center;will-change:transform}input[type=range].scrubber{-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-focus-ring-color:rgba(255,255,255,0);-webkit-appearance:none;background-color:transparent;height:60px;left:0;margin:0;outline:none;position:absolute;top:0;width:100%;will-change:transform}input[type=range].scrubber::-webkit-slider-thumb{-webkit-appearance:none;background:#fff;border-radius:2px;cursor:pointer;height:24px;margin-top:18px;width:4px}input[type=range].scrubber::-webkit-slider-runnable-track{background:transparent;cursor:pointer;height:60px;width:100%}input[type=range].scrubber[disabled]::-webkit-slider-thumb{display:none}</style><audio-player-compatibility-placeholder></audio-player-compatibility-placeholder><div class=scrim></div><div class=buffering-scrim></div><div class=controls-layer id=controls-layer><div class=controls-toggle id=controls-toggle role=button></div><goog-video-metadata></goog-video-metadata><div class=controls id=controls><goog-timeline></goog-timeline><goog-buttons-bar></goog-buttons-bar></div></div><goog-break-ui></goog-break-ui><div class=media-browse-scrim></div><goog-media-browse></goog-media-browse><div aria-live=assertive class=accessibility-alert id=alert-show-controls style="display: none;"></div><div aria-live=assertive class=accessibility-alert id=alert-hide-controls style="display: none;"></div>'
    };
    _.q(xn, _.Yd);
    _.q(sn, _.E);
    _.q(tn, _.E);
    _.q(un, _.E);
    _.q(yn, _.E);
    _.q(wn, _.E);
    _.h = Cn.prototype;
    _.h.yj = function() {
        this.K = !0;
        this.g.classList.add("compatibility-mode-scrim")
    };
    _.h.kh = function(a) {
        this.R || (this.M = a, zn(this))
    };
    _.h.Aj = function(a) {
        this.A = a;
        if (!this.g.classList.contains(a)) {
            for (var b in cast.receiver.J.Ba) cast.receiver.J.Ba.hasOwnProperty(b) && this.g.classList.remove(cast.receiver.J.Ba[b]);
            this.g.classList.add(a);
            this.H = this.A === cast.receiver.J.Ba.AUDIO || this.G ? 8E3 : 4500;
            this.h.o = this.H;
            zn(this)
        }
    };
    _.h.Wc = function() {};
    _.h.jh = function(a) {
        this.g.classList.toggle("disabled", a);
        this.g.setAttribute("aria-hidden", String(a));
        var b = this.h;
        b.h = a;
        ae(b)
    };
    _.h.Kh = function(a) {
        this.g.classList.toggle("buffering", a)
    };
    _.h.Cj = function() {
        var a = this.h;
        a.g = !0;
        ae(a);
        this.o && (this.o = !1, ce(this.h))
    };
    _.h.Bj = function() {
        var a = this.h;
        a.g = !1;
        ae(a);
        this.o || Dn(this);
        this.o = !0
    };
    _.h.zj = function(a) {
        this.G = a;
        this.g.classList.toggle("remote-controls", !!a);
        zn(this)
    };
    _.h.Dj = function(a) {
        (this.R = a) && Dn(this)
    };
    cast.receiver.J.zm = function(a) {
        a.innerHTML = '<div class=logo id=logo></div><div class=subtitle-container><h2 class=subtitle id=subtitle></h2></div><h1 class=title id=title></h1><h1 class=title id=break-title style="display: none"></h1>'
    };
    _.q(En, Yc);
    window.customElements && window.customElements.define && window.customElements.define("goog-video-metadata", En);
    _.q(Gn, Yc);
    Gn.prototype.connectedCallback = function() {
        var a = this;
        _.t.addEventListener("resize", function() {
            return Hn(a)
        });
        Hn(this)
    };
    Gn.prototype.ac = function(a, b) {
        this.l.ac(a, b)
    };
    Gn.prototype.Mc = function(a) {
        this.K || (this.w.Mc(a), on(this.G), this.A.classList.toggle("with-related-content", !!this.w.g))
    };
    window.customElements && window.customElements.define && window.customElements.define("touch-controls", Gn);
    cast.receiver.J.xm = Gn;
    _.q(Tn, _.C);
    Tn.prototype.U = function() {
        return new tk("__touch_controls__")
    };
    Tn.prototype.fg = function() {
        Wn(this, "slot-secondary-1", "no-button");
        Wn(this, "slot-primary-1", "no-button");
        Wn(this, "slot-primary-2", "no-button");
        Wn(this, "slot-secondary-2", "no-button");
        this.M = !1
    };
    Tn.prototype.ga = function() {
        _.C.prototype.ga.call(this);
        this.da.remove();
        this.g.remove()
    };
    _.F("cast.receiver.ui.ControlsBaseImplementation");
    cast.receiver.crypto = {};
    cast.receiver.cryptokeys = {};
    cast.receiver.crypto.zd = window.crypto && window.crypto.subtle || {};
    cast.receiver.crypto.fr = !(!cast.__platform__ || !cast.__platform__.cryptokeys);
    cast.receiver.crypto.wd = !(!cast.__platform__ || !cast.__platform__.crypto);
    cast.receiver.cryptokeys.getKeyByName = cast.receiver.crypto.fr ? cast.__platform__.cryptokeys.getKeyByName : window.cryptokeys && window.cryptokeys.getKeyByName;
    cast.receiver.crypto.decrypt = cast.receiver.crypto.wd ? cast.__platform__.crypto.decrypt : cast.receiver.crypto.zd.decrypt;
    cast.receiver.crypto.encrypt = cast.receiver.crypto.wd ? cast.__platform__.crypto.encrypt : cast.receiver.crypto.zd.encrypt;
    cast.receiver.crypto.sign = cast.receiver.crypto.wd ? cast.__platform__.crypto.sign : cast.receiver.crypto.zd.sign;
    cast.receiver.crypto.unwrapKey = cast.receiver.crypto.wd ? cast.__platform__.crypto.unwrapKey : cast.receiver.crypto.zd.unwrapKey;
    cast.receiver.crypto.verify = cast.receiver.crypto.wd ? cast.__platform__.crypto.verify : cast.receiver.crypto.zd.verify;
    cast.receiver.crypto.wrapKey = cast.receiver.crypto.wd ? cast.__platform__.crypto.wrapKey : cast.receiver.crypto.zd.wrapKey;
    eo.prototype.I = function(a) {
        _.I(io, "DebugOverlay: " + JSON.stringify(a.data));
        switch (a.data.type) {
            case "SHOW":
                fo(this);
                break;
            case "HIDE":
                go(this)
        }
    };
    eo.prototype.G = function() {
        var a = this.g;
        if (a && ho(a)) {
            var b = a.videoWidth || 0,
                c = a.videoHeight || 0,
                d = 0;
            if (a.paused || a.seeking) _.qe(io, "not calculating fps because paused or seeking");
            else {
                d = a.webkitDecodedFrameCount;
                a = a.currentTime;
                var e = 0;
                if (0 < this.l.length && 0 < this.o.length) {
                    var f = this.l[0],
                        g = this.o[0];
                    a > f && d > g && (e = (d - g) / (a - f))
                }
                this.l.push(a);
                this.o.push(d);
                5 <= this.l.length && 5 <= this.o.length && (this.l.splice(0, this.l.length - 5), this.o.splice(0, this.o.length - 5));
                d = e
            }
            b = b + "x" + c + "(" + (0 < d ? Math.round(d).toString() :
                "?") + ")";
            _.qe(io, "video is " + b);
            this.w.textContent = b
        } else if (_.qe(io, "video is no longer active, restarting search procedure"), this.g || this.h) go(this), fo(this)
    };
    eo.prototype.D = function() {
        _.I(io, "onSeeking");
        this.l = [this.g.currentTime];
        this.o = [this.g.webkitDecodedFrameCount]
    };
    eo.prototype.H = function() {
        function a(c) {
            for (var d = _.p(c.document.getElementsByTagName("video")), e = d.next(); !e.done; e = d.next())
                if (e = e.value, ho(e)) return e;
            for (d = 0; d < c.frames.length; ++d) try {
                var f = a(c.frames[d]);
                if (f) return f
            } catch (g) {}
            return null
        }
        var b = a(window) || this.C;
        b && jo(this, b)
    };
    var io = _.F("cast.receiver.DebugOverlay"),
        uy = new eo;
    cast.receiver.eme = {};
    cast.receiver.eme.sr = new Uint8Array([43, 248, 102, 128, 198, 229, 78, 36, 190, 35, 15, 129, 90, 96, 110, 178]);
    cast.receiver.eme.Cr = 2;
    _.q(mo, _.C);
    mo.prototype.ga = function() {
        _.C.prototype.ga.call(this);
        document.removeEventListener("keydown", this.l)
    };
    var oo = _.F("cast.receiver.ui.KeyEventsHandlerBase");
    cast.receiver.Rb = _.F("cast");
    cast.receiver.Rb.w = function(a) {
        if (cast.receiver.Rb) {
            var b = cast.receiver.Rb;
            a: {
                if (!Cx) {
                    Cx = {};
                    for (var c = 0, d; d = Bx[c]; c++) Cx[d.value] = d, Cx[d.name] = d
                }
                if (a in Cx) a = Cx[a];
                else {
                    for (c = 0; c < Bx.length; ++c)
                        if (d = Bx[c], d.value <= a) {
                            a = d;
                            break a
                        }
                    a = null
                }
            }
            b.h = a
        }
    };
    if (cast.receiver.Rb) {
        var vy = cast.il ? 800 : 1E3,
            wy = parseInt(cast.receiver.platform.Ya("log-level-cast-receiver"), 10);
        cast.receiver.Rb.w(wy || vy)
    };
    var Fv = _.F("cast.receiver.ui.PlaybackTimeTracker");
    _.q(po, _.C);
    po.prototype.Bb = function(a) {
        a !== this.g && (this.g && (this.g.removeEventListener("timeupdate", this.D), this.g = null), a && (this.g = a, this.g.addEventListener("timeupdate", this.D)))
    };
    po.prototype.ga = function() {
        _.C.prototype.ga.call(this);
        clearInterval(this.H);
        this.Bb(null)
    };
    cast.receiver.J.dm = function(a) {
        a.innerHTML = "<style>:host{display:block;position:absolute;border-radius:inherit;pointer-events:none;width:100%;height:100%;overflow:hidden;top:0;left:0;right:0;bottom:0;--wave-fade-duration:500ms}.highlight,.wave{pointer-events:none;position:absolute;top:0;left:0;background-color:#fff;width:100%;height:100%}:host([recenters]){border-radius:50%}:host([recenters]) .highlight{border-radius:50%}.highlight{opacity:0;transition:opacity 200ms;will-change:opacity;border-radius:inherit}.highlight.active{opacity:.04;transition:none}.wave{border-radius:50%;opacity:0;will-change:transform,opacity;animation:wave-fade-in-out var(--wave-fade-duration) linear,wave-expand 300ms linear forwards}@keyframes wave-fade-in-out{0%{opacity:0}10%{opacity:.07}100%{opacity:0}}@keyframes wave-expand{100%{transform:translate(0, 0) scale(1, 1)}}</style>"
    };
    _.q(so, Yc);
    _.h = so.prototype;
    _.h.createdCallback = function() {
        var a = this.attachShadow({
            mode: "open"
        });
        (0, cast.receiver.J.dm)(a);
        this.h = document.createElement("div");
        this.h.classList.add("highlight");
        a.appendChild(this.h);
        this.C = parseInt(this.style.getPropertyValue("--wave-fade-duration"), 10) || 500;
        this.A = this.eq.bind(this);
        this.l = this.cq.bind(this)
    };
    _.h.connectedCallback = function() {
        11 === this.parentNode.nodeType ? this.g = this.shadowRoot : this.g = this.parentNode;
        this.hasAttribute("recenters") && (this.o = !0);
        this.g.addEventListener("touchstart", this.A);
        this.g.addEventListener("touchend", this.l);
        this.g.addEventListener("touchcancel", this.l)
    };
    _.h.disconnectedCallback = function() {
        this.g.removeEventListener("touchstart", this.A);
        this.g.removeEventListener("touchend", this.l);
        this.g.removeEventListener("touchcancel", this.l);
        this.g = null
    };
    _.h.cq = function() {
        var a = this,
            b = this.G + 200 - (0, _.M)();
        0 >= b ? this.h.classList.remove("active") : this.w = setTimeout(function() {
            a.h.classList.remove("active")
        }, b)
    };
    _.h.eq = function(a) {
        var b = this.getBoundingClientRect(),
            c = a.targetTouches[0];
        a = c.clientX - b.left;
        c = c.clientY - b.top;
        var d = b.width;
        b = b.height;
        if (this.o) {
            b = Math.max(d, b);
            a -= b / 2;
            c -= b / 2;
            var e = Math.sqrt(a * a + c * c);
            d = (d - 50) / 2;
            e > d && (a *= d / e, c *= d / e)
        } else d = Math.max(a, d - a), b = Math.max(c, b - c), b = 2.2 * Math.sqrt(d * d + b * b), a -= b / 2, c -= b / 2;
        to(this, b, a, c, 50 / b);
        clearTimeout(this.w);
        this.h.classList.add("active");
        this.G = (0, _.M)()
    };
    window.customElements && window.customElements.define && window.customElements.define("goog-ripple", so);
    cast.receiver.J.gs = so;
    uo.prototype.g = null;
    var xy;
    _.Sa(xo, uo);
    xy = new xo;
    _.yy = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    _.No = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    _.Sa(_.Co, _.Yd);
    _.Co.prototype.fa = _.F("goog.net.XhrIo");
    var Oo = /^https?$/i,
        zy = ["POST", "PUT"];
    _.h = _.Co.prototype;
    _.h.send = function(a, b, c, d) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.M + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.M = a;
        this.D = "";
        this.o = 0;
        this.Z = b;
        this.U = !1;
        this.h = !0;
        this.g = this.R ? yo(this.R) : yo(xy);
        this.O = this.R ? wo(this.R) : wo(xy);
        this.g.onreadystatechange = (0, _.Qa)(this.Mj, this);
        try {
            _.qe(this.fa, Mo(this, "Opening Xhr")), this.W = !0, this.g.open(b, String(a), !0), this.W = !1
        } catch (f) {
            _.qe(this.fa, Mo(this, "Error opening Xhr: " + f.message));
            Io(this, f);
            return
        }
        a = c ||
            "";
        var e = this.headers.clone();
        d && Bo(d, function(f, g) {
            e.set(g, f)
        });
        d = _.bb(e.Jb(), Fo);
        c = _.t.FormData && a instanceof _.t.FormData;
        !_.db(zy, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, g) {
            this.g.setRequestHeader(g, f)
        }, this);
        this.ca && (this.g.responseType = this.ca);
        "withCredentials" in this.g && this.g.withCredentials !== this.Y && (this.g.withCredentials = this.Y);
        try {
            Qo(this), 0 < this.w && (this.N = Eo(this.g), _.qe(this.fa, Mo(this, "Will abort after " + this.w + "ms if incomplete, xhr2 " +
                this.N)), this.N ? (this.g.timeout = this.w, this.g.ontimeout = (0, _.Qa)(this.bj, this)) : this.I = _.jf(this.bj, this.w, this)), _.qe(this.fa, Mo(this, "Sending request")), this.K = !0, this.g.send(a), this.K = !1
        } catch (f) {
            _.qe(this.fa, Mo(this, "Send error: " + f.message)), Io(this, f)
        }
    };
    _.h.bj = function() {
        "undefined" != typeof Jo && this.g && (this.D = "Timed out after " + this.w + "ms, aborting", this.o = 8, _.qe(this.fa, Mo(this, this.D)), this.dispatchEvent("timeout"), this.abort(8))
    };
    _.h.abort = function(a) {
        this.g && this.h && (_.qe(this.fa, Mo(this, "Aborting")), this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.o = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ho(this))
    };
    _.h.ha = function() {
        this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), Ho(this, !0));
        _.Co.eb.ha.call(this)
    };
    _.h.Mj = function() {
        this.Ta() || (this.W || this.K || this.l ? Po(this) : this.Vp())
    };
    _.h.Vp = function() {
        Po(this)
    };
    _.h.Pb = function() {
        return !!this.g
    };
    cast.B = {};
    cast.B.Kk = function(a) {
        a.innerHTML = "<style>@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-webkit-keyframes loading{0%{margin-left:-100%}100%{margin-left:100%}}@-webkit-keyframes flashing{0%{background-color:#80868b}50%{background-color:#5f6368}100%{background-color:#80868b}}.background{background:var(--background, url('data:image/svg+xml,%3Csvg%20width=%271280%27%20height=%27720%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id=%27background%27%20x1=%270%25%27%20y1=%270%25%27%20x2=%270%25%27%20y2=%27100%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset=%2710%25%27%20stop-color=%27black%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset=%27100%25%27%20style=%27stop-color:rgb%2830%2C30%2C30%29%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20fill=%27url%28%23background%29%27%20x=%270%27%20y=%270%27%20width=%271280%27%20height=%27720%27/%3E%0A%3C/svg%3E%0A'));background-color:var(--background-color);background-image:var(--background-image);background-position:center;background-repeat:var(--background-repeat, no-repeat);background-size:var(--background-size, cover)}.breakIcon{border-radius:2px;color:#fff;display:block;font-weight:bold;padding:2px 4px}.breakIcon:after{content:var(--ad-title, attr(data-ad-label))}.breakMetadata{display:none;overflow:auto;padding-bottom:128px}.breakInfo{float:left}.breakPosition{margin-left:5px}.breakPosition,.breakTime{text-shadow:0 1px 4px #000}.skipBreakMessage,.breakSkippableTime{color:#fff;float:right;font-size:16px;font-weight:400;line-height:24px;text-shadow:0 1px 4px #000}.breakMarker{background-color:#fff;bottom:0;height:100%;opacity:.8;position:absolute;width:2px}.splash{background:var(--splash-background);background-color:var(--splash-color);background-image:var(--splash-image);background-repeat:var(--splash-repeat);background-size:var(--splash-size)}.logo{background:var(--logo-background);background-color:var(--logo-color);background-image:var(--logo-image);background-repeat:var(--logo-repeat);background-size:var(--logo-size)}.playback-logo{background-image:var(--playback-logo-image);background-position-x:left;background-repeat:no-repeat;background-size:contain;color:#fff;display:none;font-family:'Roboto',Arial,sans-serif;font-weight:500;order:-2;overflow:hidden}.nextMetadata{display:flex;justify-content:flex-end}.nextMetadataImage{object-fit:contain;max-width:286px;max-height:143px}.nextImagePlaceholder{position:relative;margin-right:40px;min-width:45px}.nextContentRating{margin:0 5px 5px 0;position:absolute;right:0;bottom:0;max-width:40px;max-height:40px}.nextMetadataPlaceHolder{font-weight:bold;margin-right:32px;display:flex;flex-direction:column;align-self:flex-end}.nextMetadataTitle{font-size:48px}.nextMetadataSubtitle,.nextMetadataSubtitle2,.nextMetadataSubtitle3,.nextMetadataCountdown{font-size:20px}.nextOverlay{display:inherit;opacity:0;position:absolute;bottom:0;left:0;right:0;padding:80px 40px}.watermark{background:var(--watermark-background);background-color:var(--watermark-color);background-image:var(--watermark-image);background-position:var(--watermark-position, bottom right);background-repeat:var(--watermark-repeat, no-repeat);background-size:var(--watermark-size);display:none;margin-bottom:128px}.player{background:#111;color:#f1f1f1;font-family:var(--font-family, ''),'Roboto',Arial,sans-serif;font-weight:300}.player,.background,.foreground,.audioPlaybackBackground,.audioPlaybackBackgroundScrim,.gradient,.slideshow,.logo,.splash{bottom:0;left:0;position:absolute;right:0;top:0}.breakOverlay,.overlay,.watermark{bottom:40px;left:80px;position:absolute;right:80px;top:40px}.logo,.splash{background-position:center;background-repeat:no-repeat;color:rgba(221,221,221,0.8);display:none;font-size:44px;padding-top:25%;position:absolute;text-align:center}video{background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain;display:none;height:100%;width:100%;object-fit:contain}.overlay{top:auto}[displayStatus=false] .gradient,[displayStatus=false] .metadata,[displayStatus=false] .watermark,[displayStatus=false] .controlsTimeline,[displayStatus=false] .audioPlaybackBackground,[displayStatus=false] .audioPlaybackBackgroundScrim,[displayStatus=false][state='playing'] .controlsPlayPause{opacity:0;visibility:hidden;-webkit-transition:opacity 1s linear,visibility 1s linear}.breakOverlay{display:none;top:auto}.gradient{background:linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0) 72%, rgba(0,0,0,0) 100%);display:block;opacity:.9}.metadataPlaceHolder{min-width:0;width:100%}.metadata{padding-bottom:128px}.liveIndicator{display:none}.touchImageLoader{display:none}.liveLabel{display:flex;flex-direction:row;align-items:center}.liveLabel:after{content:attr(data-live-label)}.liveLabel.live-edge:before{display:inline-block;background-color:var(--live-progress-color, #d0021b);content:'';border-radius:8px;height:8px;width:8px;margin-right:10px}.metadataTitle{color:rgba(255,255,255,0.8);font-size:48px;font-weight:400;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.metadataSubtitle,.metadataSubtitle2{color:rgba(203,203,203,0.8);font-size:20px;font-weight:400;line-height:30px;margin:0;max-height:60px;overflow:hidden}.metadataSubtitle span:not(:first-child):before,.metadataSubtitle2 span:not(:first-child):before{content:'\u00b7';font-weight:bold;padding-left:10px;padding-right:10px}.controls{bottom:0;height:88px;left:0;position:absolute;right:0}.controlsPlayPause{background-size:cover;float:left;height:46px;width:46px}.controlsProgress{background-color:rgba(255,255,255,0.2);height:4px;margin-top:28px;overflow:hidden;position:relative}.controlsProgressInner{height:100%;opacity:.8}.controlsSeekable{background-color:#fff;height:100%;position:absolute;top:0}.controlsSeekablePlayed{background-color:var(--live-progress-color, #d0021b);height:100%;position:absolute;top:0}.controlsTimelineLabels{color:rgba(255,255,255,0.7);font-size:14px;font-weight:400}.controlsCurTime{float:left}.controlsTotalTime{float:right;margin-left:16px}.videoLiveIndicator{float:right}.hidden{display:none}.player[isLive='true'][contentType='video'] .videoLiveIndicator{display:block}.player[isLive='true'][contentType='audio'] .audioLiveIndicator{display:block}.player[isLive='true'] .controlsProgressInner{background-color:var(--live-progress-color, #d0021b);position:absolute}.player[state='launching'] .logo{display:block}.player[state='launching'] .spinner{background-image:var(--spinner-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20x=%270px%27%20y=%270px%27%20width=%2724px%27%20height=%2724px%27%20viewBox=%270%200%2024%2024%27%20enable-background=%27new%200%200%2024%2024%27%20xml:space=%27preserve%27%20fill=%27%23FFFFFF%27%3E%0A%20%20%20%20%3Cpath%20d=%27M12%2C22C6.49%2C22%2C2%2C17.51%2C2%2C12C2%2C6.49%2C6.49%2C2%2C12%2C2c0.55%2C0%2C1%2C0.45%2C1%2C1s-0.45%2C1-1%2C1c-4.41%2C0-8%2C3.59-8%2C8s3.59%2C8%2C8%2C8s8-3.59%2C8-8c0-0.55%2C0.45-1%2C1-1s1%2C0.45%2C1%2C1C22%2C17.51%2C17.51%2C22%2C12%2C22z%27/%3E%0A%20%20%20%20%3Crect%20fill=%27none%27%20width=%2724%27%20height=%2724%27/%3E%0A%3C/svg%3E%0A'));background-size:cover;bottom:40px;display:block;height:32px;left:50%;margin-left:-16px;position:absolute;-webkit-animation:spin 1s infinite linear;width:32px}.player[state='loading'] .controlsTimelineLabels,.player[state='loading'] .controlsSeekablePlayed,.player[state='loading'] .controlsSeekable,.player[state='loading'] .controlsPlayPause{display:none}.player[state='loading'] .controlsProgressInner{-webkit-animation:loading 2s infinite linear;width:90% !important}.player[state='buffering'] .controlsPlayPause{background-image:var(--buffering-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20x=%270px%27%20y=%270px%27%20width=%2724px%27%20height=%2724px%27%20viewBox=%270%200%2024%2024%27%20enable-background=%27new%200%200%2024%2024%27%20xml:space=%27preserve%27%20fill=%27%23FFFFFF%27%3E%0A%20%20%20%20%3Cpath%20d=%27M12%2C22C6.49%2C22%2C2%2C17.51%2C2%2C12C2%2C6.49%2C6.49%2C2%2C12%2C2c0.55%2C0%2C1%2C0.45%2C1%2C1s-0.45%2C1-1%2C1c-4.41%2C0-8%2C3.59-8%2C8s3.59%2C8%2C8%2C8s8-3.59%2C8-8c0-0.55%2C0.45-1%2C1-1s1%2C0.45%2C1%2C1C22%2C17.51%2C17.51%2C22%2C12%2C22z%27/%3E%0A%20%20%20%20%3Crect%20fill=%27none%27%20width=%2724%27%20height=%2724%27/%3E%0A%3C/svg%3E%0A'));-webkit-animation:spin 1s infinite linear}.player[state='paused'] .controlsPlayPause{background-image:var(--pause-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724px%27%20height=%2724px%27%20viewBox=%270%200%2024%2024%27%20fill=%27%23FFFFFF%27%3E%0A%20%20%20%20%3Cpath%20d=%27M6%2019h4V5H6v14zm8-14v14h4V5h-4z%27/%3E%0A%20%20%20%20%3Cpath%20d=%27M0%200h24v24H0z%27%20fill=%27none%27/%3E%0A%3C/svg%3E%0A'))}.player[state='playing'] .controlsPlayPause{background-image:var(--play-image, none)}.player[state='idle'] .splash{display:block}.player[isPlayingBreak=true] .breakMetadata{display:block}.player[isPlayingBreak=true] .breakTime{display:inline}.player[isPlayingBreak=true] .breakIcon{display:inline-block}.player[contentType='image'] video{display:block}.player[contentType='image'] .background{background-color:#111;background-image:none}.player[contentType='image'] .controls{display:none}.player[contentType='audio'] .audioPlaybackBackground,.player[isRemoteControl='true'][displayType='touch'] .audioPlaybackBackground{background:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1024_600.jpg')) center / cover no-repeat}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[contentType='audio'] .audioPlaybackBackground,.player[isRemoteControl='true'][displayType='touch'] .audioPlaybackBackground{background:var(--album-art-image, url('//www.gstatic.com/cast/sdk/assets/touch_no_image_1280_800.jpg')) center / cover no-repeat}}.player[contentType='audio'] .metadata,.player[isRemoteControl='true'][displayType='touch'] .metadata{display:flex;flex-direction:row;justify-content:space-between;padding:0}.player[contentType='audio'] .metadataPlaceHolder,.player[isRemoteControl='true'][displayType='touch'] .metadataPlaceHolder{order:-1;display:flex;flex-direction:column;justify-content:center;margin-top:0}.player[contentType='audio'] .playback-logo,.player[isRemoteControl='true'][displayType='touch'] .playback-logo{display:inline-block}.player[contentType='audio'] .metadataTitle,.player[isRemoteControl='true'][displayType='touch'] .metadataTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:initial;word-break:break-word;color:#fff;font-weight:400}.player[contentType='audio'] .metadataSubtitle,.player[isRemoteControl='true'][displayType='touch'] .metadataSubtitle{margin-bottom:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400}.player[contentType='audio'] .metadataSubtitle2,.player[isRemoteControl='true'][displayType='touch'] .metadataSubtitle2{font-weight:500;order:-1;margin-top:auto;text-transform:uppercase;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.player[contentType='audio']:not([displayType='touch']){--default-progress-color:#fff;overflow:hidden;user-select:none;font-weight:400}.player[contentType='audio']:not([displayType='touch']) .breakOverlay,.player[contentType='audio']:not([displayType='touch']) .nextOverlay{display:none !important}.player[contentType='audio']:not([displayType='touch']) .audioStatusIndicators{flex-direction:row;display:flex;align-items:center;position:absolute;bottom:-3.59375vw;right:0}.player[contentType='audio']:not([displayType='touch']) .audioLiveIndicator{font-weight:500;font-size:1.25vw;line-height:1.25vw;margin-left:20px;text-align:right}.player[contentType='audio']:not([displayType='touch']) .queueStatusIcon{width:24px;height:24px;margin-left:20px}.player[contentType='audio']:not([displayType='touch']) .shuffleStatus{background-image:url(\"data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C11H29.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C40%2C9.5v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M8.44%2C10.56a1.5%2C1.5%2C0%2C0%2C1%2C2.12-2.12l27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12%2C2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M35.44%2C10.44a1.5%2C1.5%2C0%2C0%2C1%2C2.12%2C2.12l-27%2C27a1.5%2C1.5%2C0%2C0%2C1-2.12-2.12Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M37%2C37V29.5a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v9A1.5%2C1.5%2C0%2C0%2C1%2C38.5%2C40h-9a1.5%2C1.5%2C0%2C0%2C1%2C0-3Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A\")}.player[contentType='audio']:not([displayType='touch']) .repeatStatus{display:none}.player[contentType='audio']:not([displayType='touch']) .repeatStatus[data-state='REPEAT_SINGLE']{background-image:url(\"data:image/svg+xml,%3Csvg%20viewBox=%270%200%2048%2048%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%20%20%3Cpolygon%20fill=%27%23fff%27%20fill-rule=%27nonzero%27%0A%20%20%20%20%20%20points=%2723.8%2029.92%2023.8%2021.25%2021.8%2022.07%2020.87%2019.89%2024.28%2018.29%2026.28%2018.29%2026.28%2029.92%27%3E%3C/polygon%3E%0A%3C/svg%3E%0A\");display:block}.player[contentType='audio']:not([displayType='touch']) .repeatStatus[data-state='REPEAT_ALL']{background-image:url(\"data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%0A%20%20%20%20%20%20d=%27M39%2C32H33.5a1.5%2C1.5%2C0%2C0%2C1%2C0-3h9A1.5%2C1.5%2C0%2C0%2C1%2C44%2C30.5h0v9a1.5%2C1.5%2C0%2C0%2C1-3%2C0v-5A20%2C20%2C0%2C0%2C1%2C5.27%2C31a1.5%2C1.5%2C0%2C1%2C1%2C2.8-1A17%2C17%2C0%2C0%2C0%2C39%2C32ZM9%2C16h5.5a1.5%2C1.5%2C0%2C0%2C1%2C0%2C3h-9A1.5%2C1.5%2C0%2C0%2C1%2C4%2C17.5v-9a1.5%2C1.5%2C0%2C0%2C1%2C3%2C0v5A20%2C20%2C0%2C0%2C1%2C42.73%2C17a1.5%2C1.5%2C0%2C0%2C1-2.8%2C1A17%2C17%2C0%2C0%2C0%2C9%2C16Z%27%0A%20%20%20%20%20%20fill=%27%23fff%27/%3E%0A%3C/svg%3E%0A\");display:block}.player[contentType='audio']:not([displayType='touch']) .liveLabel.live-edge:before{display:inline-block;background-color:var(--live-progress-color, #d0021b);content:'';border-radius:.625vw;height:.625vw;width:.625vw;margin-right:.78125vw}.player[contentType='audio']:not([displayType='touch']) .audioPlaybackBackgroundScrim{background:rgba(0,0,0,0.9)}.player[contentType='audio']:not([displayType='touch']) .overlay{margin:auto;margin-left:7.8125vw;margin-right:7.8125vw;height:39.0625vw;top:0;left:0;bottom:0;right:0;position:absolute}.player[contentType='audio']:not([displayType='touch']) .metadataTitle{font-size:3.75vw;line-height:4.6875vw;margin-top:1.5625vw}.player[contentType='audio']:not([displayType='touch']) .metadataSubtitle{color:rgba(255,255,255,0.6);font-size:1.5625vw;line-height:1.875vw;margin-top:1.09375vw}.player[contentType='audio']:not([displayType='touch']) .metadataSubtitle2{color:rgba(255,255,255,0.6);font-size:1.25vw;line-height:1.25vw;letter-spacing:.0625vw}.player[contentType='audio']:not([displayType='touch']) .metadataPlaceHolder{margin-right:6.25vw;width:auto;height:39.0625vw;box-sizing:border-box;padding-bottom:2.8125vw}.player[contentType='audio']:not([displayType='touch']) .metadataImage{content:none !important;background:#000 var(--album-art-image) center / contain no-repeat;width:39.0625vw;height:39.0625vw;flex:none;box-shadow:0 .9375vw .9375vw rgba(0,0,0,0.5)}.player[contentType='audio']:not([displayType='touch']) .playback-logo{font-size:2.5vw;height:2.8125vw;line-height:2.8125vw}.player[contentType='audio']:not([displayType='touch']) .playback-logo.app-icon{height:4.6875vw}.player[contentType='audio']:not([displayType='touch']) .controls{width:39.0625vw;height:39.0625vw;position:absolute;bottom:0;right:0;left:auto;display:flex;justify-content:center;align-items:center}.player[contentType='audio']:not([displayType='touch']) .controlsProgress{box-shadow:0 -0.078125vw 0 rgba(0,0,0,0.25);background-color:rgba(0,0,0,0.3);height:.3125vw;width:100%;margin:0;position:absolute;bottom:0;left:0}.player[contentType='audio']:not([displayType='touch']) .controlsPlayPause{height:9.6875vw;width:9.6875vw}.player[contentType='audio']:not([displayType='touch']) .controlsCurTime,.player[contentType='audio']:not([displayType='touch']) .controlsTotalTime{position:absolute;bottom:1.40625vw;margin:0;font-size:1.09375vw;line-height:1.25vw;color:rgba(255,255,255,0.7);text-shadow:0 0 .3125vw rgba(0,0,0,0.5)}.player[contentType='audio']:not([displayType='touch']) .controlsCurTime{left:1.09375vw}.player[contentType='audio']:not([displayType='touch']) .controlsTotalTime{right:1.09375vw}.player[contentType='audio']:not([displayType='touch']) .breakMarker{background-color:#fbbc04;width:.78125vw}.player[contentType='audio']:not([displayType='touch'])[state='loading'] .controlsProgress{display:none}.player[contentType='audio']:not([displayType='touch'])[state='buffering'] .controlsPlayPause,.player[contentType='audio']:not([displayType='touch'])[state='loading'] .controlsPlayPause{-webkit-animation:spin 1s infinite linear;display:block;width:5.625vw;height:5.625vw;background-image:var(--buffering-image, url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%2072%2072%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%3Cpath%20d=%27M36%2C64%20C20.536027%2C64%208%2C51.463973%208%2C36%20C8%2C28.3421054%2011.0742312%2C21.402236%2016.0558797%2C16.3472055%20L18.9049104%2C19.1548779%20C14.5062491%2C23.6183335%2012.0001567%2C29.6058259%2012%2C35.9992989%20C12%2C49.2547411%2022.7450731%2C60%2036%2C60%20L36%2C64%20Z%20M64%2C36%20C64%2C51.463973%2051.463973%2C64%2036%2C64%20L36%2C60%20C49.254834%2C60%2060%2C49.254834%2060%2C36%20C60%2C28.2977044%2056.3514655%2C21.2105352%2050.2785664%2C16.7073115%20L52.6611093%2C13.4942928%20C59.5409482%2C18.5958848%2064%2C26.7772087%2064%2C36%20Z%27%20fill=%27%23FFFFFF%27%20fill-rule=%27nonzero%27%3E%3C/path%3E%0A%3C/svg%3E%0A'))}.player[contentType='audio']:not([displayType='touch'])[state='paused'] .controlsPlayPause{filter:drop-shadow(0 0 .3125vw rgba(0,0,0,0.5));background-image:var(--pause-image, url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2048%2048%27%3E%0A%20%20%3Cpath%20d=%27M32%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%20%20%3Cpath%20d=%27M16%2C9.5v29%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%0A%20%20%20%20%20%20stroke-linejoin=%27round%27%20vector-effect=%27non-scaling-stroke%27%0A%20%20%20%20%20%20stroke-width=%274%27/%3E%0A%3C/svg%3E%0A'))}.player[contentType='audio']:not([displayType='touch'])[state='buffering'] .controls,.player[contentType='audio']:not([displayType='touch'])[state='paused'] .controls{background-color:rgba(0,0,0,0.3);box-shadow:inset 0 -9.375vw 7.03125vw -7.03125vw rgba(0,0,0,0.5)}.player[contentType='audio']:not([displayType='touch'])[state='playing'] .controlsCurTime,.player[contentType='audio']:not([displayType='touch'])[state='playing'] .controlsTotalTime{display:none}.player[displayType='touch'][contentType='audio'],.player[displayType='touch'][isRemoteControl='true']{overflow:hidden;user-select:none;font-family:'Google Sans','Roboto',Arial,sans-serif;font-weight:400}.player[displayType='touch'][contentType='audio'] .slideshow,.player[displayType='touch'][isRemoteControl='true'] .slideshow,.player[displayType='touch'][contentType='audio'] .controls,.player[displayType='touch'][isRemoteControl='true'] .controls,.player[displayType='touch'][contentType='audio'] .gradient,.player[displayType='touch'][isRemoteControl='true'] .gradient,.player[displayType='touch'][contentType='audio'] .spinner,.player[displayType='touch'][isRemoteControl='true'] .spinner,.player[displayType='touch'][contentType='audio'] .watermark,.player[displayType='touch'][isRemoteControl='true'] .watermark,.player[displayType='touch'][contentType='audio'] .liveIndicator,.player[displayType='touch'][isRemoteControl='true'] .liveIndicator,.player[displayType='touch'][contentType='audio'] .breakOverlay,.player[displayType='touch'][isRemoteControl='true'] .breakOverlay,.player[displayType='touch'][contentType='audio'] .nextOverlay,.player[displayType='touch'][isRemoteControl='true'] .nextOverlay{display:none !important}.player[displayType='touch'][contentType='audio'] .audioPlaybackBackground,.player[displayType='touch'][isRemoteControl='true'] .audioPlaybackBackground{background-color:#000;transform:scale(1.25);transform-origin:center;filter:blur(37px)}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'] .audioPlaybackBackground,.player[displayType='touch'][isRemoteControl='true'] .audioPlaybackBackground{filter:blur(50px)}}.player[displayType='touch'][contentType='audio'] .audioPlaybackBackgroundScrim,.player[displayType='touch'][isRemoteControl='true'] .audioPlaybackBackgroundScrim{background:rgba(0,0,0,0.7)}.player[displayType='touch'][contentType='audio'] .overlay,.player[displayType='touch'][isRemoteControl='true'] .overlay{top:0;left:0;position:absolute;box-sizing:border-box;width:100%;padding:0 var(--cast-controls-horizontal-padding);height:var(--cast-controls-safe-area-height);padding-top:44px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'] .overlay,.player[displayType='touch'][isRemoteControl='true'] .overlay{height:var(--cast-controls-safe-area-height);padding-top:112px}}.player[displayType='touch'][contentType='audio'] .metadata,.player[displayType='touch'][isRemoteControl='true'] .metadata{height:352px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'] .metadata,.player[displayType='touch'][isRemoteControl='true'] .metadata{height:420px}}.player[displayType='touch'][contentType='audio'] .metadataTitle,.player[displayType='touch'][isRemoteControl='true'] .metadataTitle{margin-top:18px;font-size:56px;line-height:76px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'] .metadataTitle,.player[displayType='touch'][isRemoteControl='true'] .metadataTitle{margin-top:32px;font-size:68px;line-height:80px}}.player[displayType='touch'][contentType='audio'] .metadataSubtitle,.player[displayType='touch'][isRemoteControl='true'] .metadataSubtitle{color:#dfe1e5;font-size:28px;letter-spacing:1.4px;line-height:30px;margin-top:14px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'] .metadataSubtitle,.player[displayType='touch'][isRemoteControl='true'] .metadataSubtitle{font-size:32px;letter-spacing:1.6px;line-height:40px;margin-top:24px}}.player[displayType='touch'][contentType='audio'] .metadataSubtitle2,.player[displayType='touch'][isRemoteControl='true'] .metadataSubtitle2{color:#dfe1e5;font-size:24px;letter-spacing:1.2px;line-height:24px}.player[displayType='touch'][contentType='audio'] .metadataPlaceHolder,.player[displayType='touch'][isRemoteControl='true'] .metadataPlaceHolder{height:100%;margin-right:5%}.player[displayType='touch'][contentType='audio'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'] .touchImageLoader{display:block;flex:none;height:352px;width:352px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'] .touchImageLoader{height:420px;width:420px}}.player[displayType='touch'][contentType='audio'] .metadataImage,.player[displayType='touch'][isRemoteControl='true'] .metadataImage{display:none}.player[displayType='touch'][contentType='audio'] .playback-logo,.player[displayType='touch'][isRemoteControl='true'] .playback-logo{font-size:36px;height:40px;line-height:40px}.player[displayType='touch'][contentType='audio'] .playback-logo.app-icon,.player[displayType='touch'][isRemoteControl='true'] .playback-logo.app-icon{height:68px}.player[displayType='touch'][contentType='audio'][mediaBrowse='true'] .metadata,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadata{height:100%}.player[displayType='touch'][contentType='audio'][mediaBrowse='true'] .metadataPlaceHolder,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadataPlaceHolder{justify-content:initial}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.player[displayType='touch'][contentType='audio'][mediaBrowse='true'] .metadataTitle,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadataTitle{line-height:64px}}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'][mediaBrowse='true'] .metadataTitle,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadataTitle{margin-top:24px}}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.player[displayType='touch'][contentType='audio'][mediaBrowse='true'] .metadataSubtitle2,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadataSubtitle2{margin-top:18px}}@media (orientation:landscape) and (max-width: 1199px),(orientation:portrait) and (max-height: 1199px){.player[displayType='touch'][contentType='audio'][mediaBrowse='true'] .metadataSubtitle2,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadataSubtitle2{margin-top:38px;font-size:20px;line-height:20px}}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'][mediaBrowse='true'] .metadataSubtitle2,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .metadataSubtitle2{margin-top:40px}}.player[displayType='touch'][contentType='audio'][mediaBrowse='true'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .touchImageLoader{height:269px;width:269px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'][mediaBrowse='true'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'][mediaBrowse='true'] .touchImageLoader{height:353px;width:353px}}.player[displayType='touch'][contentType='audio'][isBluetooth='true'],.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true']{--album-art-image:unset !important}.player[displayType='touch'][contentType='audio'][isBluetooth='true'] .touchImageLoader,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .touchImageLoader{display:none}.player[displayType='touch'][contentType='audio'][isBluetooth='true'] .playback-logo,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .playback-logo{color:#dfe1e5;display:flex;align-items:center;font-weight:normal;height:50px;font-size:24px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'][isBluetooth='true'] .playback-logo,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .playback-logo{height:50px;font-size:32px}}.player[displayType='touch'][contentType='audio'][isBluetooth='true'] .playback-logo:before,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .playback-logo:before{display:block;content:'';background:url(\"data:image/svg+xml,%3Csvg%20viewBox=%270%200%2024%2024%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%20%20%3Cg%20stroke=%27none%27%20stroke-width=%271%27%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d=%27M17.71%2C7.71%20L12%2C2%20L11%2C2%20L11%2C9.59%20L6.41%2C5%20L5%2C6.41%20L10.59%2C12%20L5%2C17.59%20L6.41%2C19%20L11%2C14.41%20L11%2C22%20L12%2C22%20L17.71%2C16.29%20L13.41%2C12%20L17.71%2C7.71%20Z%20M13%2C5.83%20L14.88%2C7.71%20L13%2C9.59%20L13%2C5.83%20Z%20M14.88%2C16.29%20L13%2C18.17%20L13%2C14.41%20L14.88%2C16.29%20Z%27%20id=%27Shape%27%20fill=%27%23dfe1e5%27%20fill-rule=%27nonzero%27%3E%3C/path%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E%0A\") left center no-repeat;padding-right:20px;height:28px;width:28px;background-size:28px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'][isBluetooth='true'] .playback-logo:before,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .playback-logo:before{padding-right:20px;height:48px;width:48px;background-size:48px}}.player[displayType='touch'][contentType='audio'][isBluetooth='true'] .metadataImage,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .metadataImage{opacity:.2;display:block;flex:none;background:url(\"data:image/svg+xml,%3Csvg%20viewBox=%270%200%2024%2024%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%0A%20%20%20%20%3Cg%20stroke=%27none%27%20stroke-width=%271%27%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d=%27M17.71%2C7.71%20L12%2C2%20L11%2C2%20L11%2C9.59%20L6.41%2C5%20L5%2C6.41%20L10.59%2C12%20L5%2C17.59%20L6.41%2C19%20L11%2C14.41%20L11%2C22%20L12%2C22%20L17.71%2C16.29%20L13.41%2C12%20L17.71%2C7.71%20Z%20M13%2C5.83%20L14.88%2C7.71%20L13%2C9.59%20L13%2C5.83%20Z%20M14.88%2C16.29%20L13%2C18.17%20L13%2C14.41%20L14.88%2C16.29%20Z%27%20id=%27Shape%27%20fill=%27%23000%27%20fill-rule=%27nonzero%27%3E%3C/path%3E%0A%20%20%20%20%3C/g%3E%0A%3C/svg%3E%0A\") no-repeat center center !important;height:269px;width:269px}@media (orientation:landscape) and (min-width: 1200px),(orientation:portrait) and (min-height: 1200px){.player[displayType='touch'][contentType='audio'][isBluetooth='true'] .metadataImage,.player[displayType='touch'][isRemoteControl='true'][isBluetooth='true'] .metadataImage{height:353px;width:353px}}.player[contentType='video']:not([isRemoteControl='true']) .metadata{display:flex}.player[contentType='video']:not([isRemoteControl='true']) .watermark{display:block}.player[contentType='video']:not([isRemoteControl='true']) .metadataImage{content:var(--album-art-image);align-self:flex-end;height:auto;margin-right:40px;width:88px}.player[contentType='video']:not([isRemoteControl='true']) .metadataPlaceHolder{align-self:flex-end;flex:1}.player[contentType='video']:not([isRemoteControl='true'])[state='idle'] .metadata,.player[contentType='video']:not([isRemoteControl='true'])[state='idle'] .controlsTimeline,.player[contentType='video']:not([isRemoteControl='true'])[state='idle'] .gradient,.player[contentType='video']:not([isRemoteControl='true'])[state='idle'] .nextOverlay{display:none}.player[contentType='video']:not([isRemoteControl='true'])[state='loading'] video{display:block}.player[contentType='video']:not([isRemoteControl='true'])[state='buffering'] video{display:block}.player[contentType='video']:not([isRemoteControl='true'])[state='buffering'] .gradient{opacity:.1}.player[contentType='video']:not([isRemoteControl='true'])[state='paused'] video{display:block}.player[contentType='video']:not([isRemoteControl='true'])[state='paused'][displayStatus=false] .gradient{opacity:.1}.player[contentType='video']:not([isRemoteControl='true'])[state='playing'] video{display:block}.player[contentType='video']:not([isRemoteControl='true'])[state='playing'].showNextOverlay .gradient,.player[contentType='video']:not([isRemoteControl='true'])[state='playing'].showNextOverlay .nextOverlay{opacity:1;visibility:var(--next-preview-visibility, visible);-webkit-transition:opacity 1s linear}.player[contentType='video']:not([isRemoteControl='true'])[isPlayingBreak=true] .breakOverlay{display:block;visibility:visible}.player[contentType='video']:not([isRemoteControl='true'])[isPlayingBreak=true] .watermark{display:none}.player[contentType='video']:not([isRemoteControl='true']) .controlsPlayPause{margin:20px}.player[contentType='video']:not([isRemoteControl='true']) .controlsTimeline{margin-left:128px;margin-top:16px}.player[contentType='video']:not([isRemoteControl='true']) .controlsTimelineLabels{margin-top:22px}.player[displayType='touch'][contentType='video']:not([state='idle']):not([isRemoteControl='true']) .background,.player[dpadUi='true'][contentType='video']:not([state='idle']) .background,.player[displayType='touch'][contentType='video']:not([state='idle']):not([isRemoteControl='true']) .foreground>*:not(video),.player[dpadUi='true'][contentType='video']:not([state='idle']) .foreground>*:not(video){display:none}.slideshow{--animation-duration:var(--slideshow-animation-duration, 2s);display:none;--interval-duration:var(--slideshow-interval-duration, 10s)}.slideshow.active{display:block}.slideshow .slide{background-color:#000;background-position:center center;background-repeat:no-repeat;background-size:contain;height:100%;opacity:0;position:absolute;width:100%}.slideshow .slide.visible{opacity:1;-webkit-transition-property:opacity;-webkit-transition-duration:var(--slideshow-animation-duration, 2s)}.slideshow .slide.top{z-index:100}.slideshow .slideshow-image-1{background-image:var(--slideshow-image-1)}.slideshow .slideshow-image-2{background-image:var(--slideshow-image-2)}.slideshow .slideshow-image-3{background-image:var(--slideshow-image-3)}.slideshow .slideshow-image-4{background-image:var(--slideshow-image-4)}.slideshow .slideshow-image-5{background-image:var(--slideshow-image-5)}.slideshow .slideshow-image-6{background-image:var(--slideshow-image-6)}.slideshow .slideshow-image-7{background-image:var(--slideshow-image-7)}.slideshow .slideshow-image-8{background-image:var(--slideshow-image-8)}.slideshow .slideshow-image-9{background-image:var(--slideshow-image-9)}.slideshow .slideshow-image-10{background-image:var(--slideshow-image-10)}.progressBar {  background-color: var(--progress-color, var(--default-progress-color, hsl(var(--theme-hue, 42), 95%, 60%)));}.breakIcon {  background-color: var(--break-color, hsl(var(--theme-hue, 42), 100%, 50%));}</style><div class=player id=castPlayer live=false state=launching><div class=background></div><div class=foreground><video aria-hidden=true class=mediaElement id=castMediaElement style=height:100%;width:100%></video><div class=logo></div><div class=spinner></div><div class=splash></div><div class=slideshow id=castSlideshowElement><div class=\"slide slideshow-image-1\"></div><div class=\"slide slideshow-image-2\"></div><div class=\"slide slideshow-image-3\"></div><div class=\"slide slideshow-image-4\"></div><div class=\"slide slideshow-image-5\"></div><div class=\"slide slideshow-image-6\"></div><div class=\"slide slideshow-image-7\"></div><div class=\"slide slideshow-image-8\"></div><div class=\"slide slideshow-image-9\"></div><div class=\"slide slideshow-image-10\"></div></div><div class=gradient></div><div class=watermark></div><div class=audioPlaybackBackground></div><div class=audioPlaybackBackgroundScrim></div><div class=breakOverlay><div class=breakMetadata id=castBreakMetadata><div class=breakInfo><span class=breakIcon></span><span class=breakPosition id=castBreakPosition></span>&nbsp;<span class=breakTime id=castBreakTime></span></div><div class=breakSkippableTime id=castBreakSkippableTime></div><div class=skipBreakMessage id=castSkipBreakMessage></div></div></div><div class=overlay><div class=metadata><image-loader class=touchImageLoader id=metadataImageLoader></image-loader><div class=metadataImage id=castMetadataImage></div><div class=metadataPlaceHolder><div class=playback-logo></div><h1 class=metadataTitle id=castMetadataTitle></h1><h2 class=metadataSubtitle id=castMetadataSubtitle></h2><h2 class=metadataSubtitle2 id=castMetadataSubtitle2></h2></div></div><div class=controls><div class=audioStatusIndicators><div class=\"repeatStatus queueStatusIcon\" id=repeatStatus></div><div class=\"shuffleStatus queueStatusIcon\" id=shuffleStatus></div><div class=\"audioLiveIndicator liveIndicator\"><span class=liveLabel></span></div></div><span class=controlsPlayPause></span><div class=controlsTimeline id=castControlsTimeline><div class=controlsProgress id=castControlsProgress><div class=\"controlsProgressInner progressBar\" id=castControlsProgressInner></div><div class=controlsSeekable id=castControlsSeekable></div><div class=controlsSeekablePlayed id=castControlsSeekablePlayed></div></div><div class=controlsTimelineLabels><span class=controlsCurTime id=castControlsCurTime></span><span class=controlsTotalTime id=castControlsTotalTime></span><div class=\"videoLiveIndicator liveIndicator\"><span class=liveLabel></span></div></div></div></div></div><div class=nextOverlay><div class=nextMetadata><div class=nextMetadataPlaceHolder><div class=nextMetadataCountdown id=nextMetadataCountdown></div><div class=nextMetadataTitle id=nextMetadataTitle></div><div class=nextMetadataSubtitle id=nextMetadataSubtitle></div></div><div class=nextImagePlaceholder><div class=nextMetadataImage id=nextMetadataImage></div><div class=nextContentRating id=nextContentRating></div></div></div></div></div></div>"
    };
    cast.B.cl = function(a) {
        a.innerHTML = "<style>@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-webkit-keyframes loading{0%{margin-left:-100%}100%{margin-left:100%}}@-webkit-keyframes flashing{0%{background-color:#80868b}50%{background-color:#5f6368}100%{background-color:#80868b}}:host{display:block;position:relative}.image{background-size:contain;background-position:top right;background-repeat:no-repeat;width:100%;height:100%;overflow:hidden}.loading-animation{position:absolute;top:0;left:0;will-change:opacity;height:100%;width:100%;animation:flashing 1.3s infinite linear;animation-play-state:paused;transition:opacity 350ms cubic-bezier(.33, 0, .67, 1);opacity:0}.loading-animation.start-animation{opacity:1;animation-play-state:running}</style><div class=image id=image></div><div class=loading-animation id=loading-animation></div>"
    };
    cast.B.Ea = {};
    _.v("cast.framework.events.DetailedErrorCode", {
        MEDIA_UNKNOWN: 100,
        MEDIA_ABORTED: 101,
        MEDIA_DECODE: 102,
        MEDIA_NETWORK: 103,
        MEDIA_SRC_NOT_SUPPORTED: 104,
        SOURCE_BUFFER_FAILURE: 110,
        MEDIAKEYS_UNKNOWN: 200,
        MEDIAKEYS_NETWORK: 201,
        MEDIAKEYS_UNSUPPORTED: 202,
        MEDIAKEYS_WEBCRYPTO: 203,
        NETWORK_UNKNOWN: 300,
        SEGMENT_NETWORK: 301,
        HLS_NETWORK_MASTER_PLAYLIST: 311,
        HLS_NETWORK_PLAYLIST: 312,
        HLS_NETWORK_NO_KEY_RESPONSE: 313,
        HLS_NETWORK_KEY_LOAD: 314,
        HLS_NETWORK_INVALID_SEGMENT: 315,
        HLS_SEGMENT_PARSING: 316,
        DASH_NETWORK: 321,
        DASH_NO_INIT: 322,
        SMOOTH_NETWORK: 331,
        SMOOTH_NO_MEDIA_DATA: 332,
        MANIFEST_UNKNOWN: 400,
        HLS_MANIFEST_MASTER: 411,
        HLS_MANIFEST_PLAYLIST: 412,
        DASH_MANIFEST_UNKNOWN: 420,
        DASH_MANIFEST_NO_PERIODS: 421,
        DASH_MANIFEST_NO_MIMETYPE: 422,
        DASH_INVALID_SEGMENT_INFO: 423,
        SMOOTH_MANIFEST: 431,
        SEGMENT_UNKNOWN: 500,
        TEXT_UNKNOWN: 600,
        APP: 900,
        BREAK_CLIP_LOADING_ERROR: 901,
        BREAK_SEEK_INTERCEPTOR_ERROR: 902,
        IMAGE_ERROR: 903,
        LOAD_INTERRUPTED: 904,
        LOAD_FAILED: 905,
        MEDIA_ERROR_MESSAGE: 906,
        GENERIC: 999
    }, void 0);
    cast.B.Js = {};
    var Ay = {
        MEDIA_STATUS: "MEDIA_STATUS",
        CUSTOM_STATE: "CUSTOM_STATE",
        CLOUD_STATUS: "CLOUD_STATUS",
        QUEUE_CHANGE: "QUEUE_CHANGE",
        QUEUE_ITEMS: "QUEUE_ITEMS",
        QUEUE_ITEM_IDS: "QUEUE_ITEM_IDS",
        GET_STATUS: "GET_STATUS",
        LOAD: "LOAD",
        PAUSE: "PAUSE",
        STOP: "STOP",
        PLAY: "PLAY",
        SKIP_AD: "SKIP_AD",
        PLAY_AGAIN: "PLAY_AGAIN",
        SEEK: "SEEK",
        SET_PLAYBACK_RATE: "SET_PLAYBACK_RATE",
        SET_VOLUME: "SET_VOLUME",
        EDIT_TRACKS_INFO: "EDIT_TRACKS_INFO",
        EDIT_AUDIO_TRACKS: "EDIT_AUDIO_TRACKS",
        PRECACHE: "PRECACHE",
        PRELOAD: "PRELOAD",
        QUEUE_LOAD: "QUEUE_LOAD",
        QUEUE_INSERT: "QUEUE_INSERT",
        QUEUE_UPDATE: "QUEUE_UPDATE",
        QUEUE_REMOVE: "QUEUE_REMOVE",
        QUEUE_REORDER: "QUEUE_REORDER",
        QUEUE_NEXT: "QUEUE_NEXT",
        QUEUE_PREV: "QUEUE_PREV",
        QUEUE_GET_ITEM_RANGE: "QUEUE_GET_ITEM_RANGE",
        QUEUE_GET_ITEMS: "QUEUE_GET_ITEMS",
        QUEUE_GET_ITEM_IDS: "QUEUE_GET_ITEM_IDS",
        QUEUE_SHUFFLE: "QUEUE_SHUFFLE",
        SET_CREDENTIALS: "SET_CREDENTIALS",
        LOAD_BY_ENTITY: "LOAD_BY_ENTITY",
        USER_ACTION: "USER_ACTION",
        DISPLAY_STATUS: "DISPLAY_STATUS",
        FOCUS_STATE: "FOCUS_STATE",
        CUSTOM_COMMAND: "CUSTOM_COMMAND",
        STORE_SESSION: "STORE_SESSION",
        RESUME_SESSION: "RESUME_SESSION",
        SESSION_STATE: "SESSION_STATE",
        REFRESH_CREDENTIALS: "REFRESH_CREDENTIALS",
        PLAY_STRING: "PLAY_STRING",
        SHOW_REMOTE_CONTROL_OVERLAY: "SHOW_REMOTE_CONTROL_OVERLAY",
        EXECUTE_ACTION_SCRIPT: "EXECUTE_ACTION_SCRIPT",
        APPLICATION_CHANGED: "APPLICATION_CHANGED"
    };
    _.v("cast.framework.messages.MessageType", Ay, void 0);
    var Eu = {
        INVALID_COMMAND: "INVALID_COMMAND",
        INVALID_PARAMS: "INVALID_PARAMS",
        INVALID_MEDIA_SESSION_ID: "INVALID_MEDIA_SESSION_ID",
        SKIP_LIMIT_REACHED: "SKIP_LIMIT_REACHED",
        NOT_SUPPORTED: "NOT_SUPPORTED",
        LANGUAGE_NOT_SUPPORTED: "LANGUAGE_NOT_SUPPORTED",
        END_OF_QUEUE: "END_OF_QUEUE",
        DUPLICATE_REQUEST_ID: "DUPLICATE_REQUEST_ID",
        VIDEO_DEVICE_REQUIRED: "VIDEO_DEVICE_REQUIRED",
        PREMIUM_ACCOUNT_REQUIRED: "PREMIUM_ACCOUNT_REQUIRED",
        APP_ERROR: "APP_ERROR",
        AUTHENTICATION_EXPIRED: "AUTHENTICATION_EXPIRED",
        CONCURRENT_STREAM_LIMIT: "CONCURRENT_STREAM_LIMIT",
        PARENTAL_CONTROL_RESTRICTED: "PARENTAL_CONTROL_RESTRICTED",
        CONTENT_FILTERED: "CONTENT_FILTERED",
        NOT_AVAILABLE_IN_REGION: "NOT_AVAILABLE_IN_REGION",
        CONTENT_ALREADY_PLAYING: "CONTENT_ALREADY_PLAYING",
        INVALID_REQUEST: "INVALID_REQUEST",
        GENERIC_LOAD_ERROR: "GENERIC_LOAD_ERROR"
    };
    _.v("cast.framework.messages.ErrorReason", Eu, void 0);
    _.v("cast.framework.messages.ErrorData", Ro, void 0);
    _.v("cast.framework.messages.Range", So, void 0);
    _.v("cast.framework.messages.CustomStateMessage", To, void 0);
    _.v("cast.framework.messages.RequestData", O, void 0);
    _.q(Vo, O);
    _.v("cast.framework.messages.LoadRequestData", Vo, void 0);
    _.q(Wo, Vo);
    _.v("cast.framework.messages.PreloadRequestData", Wo, void 0);
    _.q(Xo, Vo);
    _.v("cast.framework.messages.PrecacheRequestData", Xo, void 0);
    _.q(Zo, O);
    _.v("cast.framework.messages.VolumeRequestData", Zo, void 0);
    _.q($o, O);
    _.v("cast.framework.messages.EditTracksInfoRequestData", $o, void 0);
    _.q(ap, O);
    _.v("cast.framework.messages.EditAudioTracksRequestData", ap, void 0);
    _.q(bp, O);
    _.v("cast.framework.messages.SeekRequestData", bp, void 0);
    _.q(cp, O);
    _.v("cast.framework.messages.SetPlaybackRateRequestData", cp, void 0);
    _.q(dp, O);
    _.v("cast.framework.messages.GetStatusRequestData", dp, void 0);
    _.q(ep, O);
    _.v("cast.framework.messages.QueueLoadRequestData", ep, void 0);
    _.q(fp, O);
    _.v("cast.framework.messages.QueueInsertRequestData", fp, void 0);
    _.q(gp, O);
    _.v("cast.framework.messages.QueueUpdateRequestData", gp, void 0);
    _.q(hp, O);
    _.v("cast.framework.messages.QueueRemoveRequestData", hp, void 0);
    _.q(ip, O);
    _.v("cast.framework.messages.QueueReorderRequestData", ip, void 0);
    _.q(jp, O);
    _.v("cast.framework.messages.FetchItemsRequestData", jp, void 0);
    _.q(kp, O);
    _.v("cast.framework.messages.GetItemsInfoRequestData", kp, void 0);
    _.v("cast.framework.messages.SessionState", lp, void 0);
    _.q(mp, O);
    _.v("cast.framework.messages.StoreSessionRequestData", mp, void 0);
    _.q(np, O);
    _.v("cast.framework.messages.ResumeSessionRequestData", np, void 0);
    _.q(op, O);
    _.v("cast.framework.messages.StoreSessionResponseData", op, void 0);
    _.v("cast.framework.messages.HlsSegmentFormat", {
        AAC: "aac",
        AC3: "ac3",
        MP3: "mp3",
        TS: "ts",
        TS_AAC: "ts_aac",
        E_AC3: "e_ac3",
        FMP4: "fmp4"
    }, void 0);
    _.v("cast.framework.messages.HlsVideoSegmentFormat", {
        MPEG2_TS: "mpeg2_ts",
        FMP4: "fmp4"
    }, void 0);
    _.v("cast.framework.messages.StreamType", {
        BUFFERED: "BUFFERED",
        LIVE: "LIVE",
        NONE: "NONE"
    }, void 0);
    _.v("cast.framework.messages.MediaCategory", {
        AUDIO: "AUDIO",
        VIDEO: "VIDEO",
        IMAGE: "IMAGE"
    }, void 0);
    _.v("cast.framework.messages.HdrType", {
        SDR: "sdr",
        HDR: "hdr",
        DV: "dv"
    }, void 0);
    var Du = {
        INVALID_PLAYER_STATE: "INVALID_PLAYER_STATE",
        LOAD_FAILED: "LOAD_FAILED",
        LOAD_CANCELLED: "LOAD_CANCELLED",
        INVALID_REQUEST: "INVALID_REQUEST",
        ERROR: "ERROR"
    };
    _.v("cast.framework.messages.ErrorType", Du, void 0);
    _.v("cast.framework.messages.IdleReason", {
        CANCELLED: "CANCELLED",
        INTERRUPTED: "INTERRUPTED",
        FINISHED: "FINISHED",
        ERROR: "ERROR"
    }, void 0);
    _.v("cast.framework.messages.SeekResumeState", {
        PLAYBACK_START: "PLAYBACK_START",
        PLAYBACK_PAUSE: "PLAYBACK_PAUSE"
    }, void 0);
    _.v("cast.framework.messages.PlayerState", {
        IDLE: "IDLE",
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        BUFFERING: "BUFFERING"
    }, void 0);
    _.v("cast.framework.messages.ExtendedPlayerState", {
        LOADING: "LOADING"
    }, void 0);
    _.v("cast.framework.messages.MediaInformation", Uo, void 0);
    _.v("cast.framework.messages.SeekableRange", pp, void 0);
    _.q(qp, pp);
    _.v("cast.framework.messages.LiveSeekableRange", qp, void 0);
    _.v("cast.framework.messages.QueueData", rp, void 0);
    _.v("cast.framework.messages.QueueType", {
        ALBUM: "ALBUM",
        PLAYLIST: "PLAYLIST",
        AUDIOBOOK: "AUDIOBOOK",
        RADIO_STATION: "RADIO_STATION",
        PODCAST_SERIES: "PODCAST_SERIES",
        TV_SERIES: "TV_SERIES",
        VIDEO_PLAYLIST: "VIDEO_PLAYLIST",
        LIVE_TV: "LIVE_TV",
        MOVIE: "MOVIE"
    }, void 0);
    _.v("cast.framework.messages.ContainerType", {
        GENERIC_CONTAINER: 0,
        AUDIOBOOK_CONTAINER: 1
    }, void 0);
    _.v("cast.framework.messages.ContainerMetadata", sp, void 0);
    _.v("cast.framework.messages.StreamingProtocolType", {
        UNKNOWN: 0,
        MPEG_DASH: 1,
        HLS: 2,
        SMOOTH_STREAMING: 3
    }, void 0);
    _.v("cast.framework.messages.MetadataType", {
        GENERIC: 0,
        MOVIE: 1,
        TV_SHOW: 2,
        MUSIC_TRACK: 3,
        PHOTO: 4,
        AUDIOBOOK_CHAPTER: 5
    }, void 0);
    _.v("cast.framework.messages.MediaMetadata", tp, void 0);
    _.q(up, tp);
    _.v("cast.framework.messages.GenericMediaMetadata", up, void 0);
    _.q(vp, tp);
    _.v("cast.framework.messages.MovieMediaMetadata", vp, void 0);
    _.q(wp, tp);
    _.v("cast.framework.messages.TvShowMediaMetadata", wp, void 0);
    _.q(xp, tp);
    _.v("cast.framework.messages.MusicTrackMediaMetadata", xp, void 0);
    _.q(yp, tp);
    _.v("cast.framework.messages.PhotoMediaMetadata", yp, void 0);
    _.q(zp, sp);
    _.v("cast.framework.messages.AudiobookContainerMetadata", zp, void 0);
    _.q(Ap, tp);
    _.v("cast.framework.messages.AudiobookChapterMediaMetadata", Ap, void 0);
    _.v("cast.framework.messages.ContentRating", function() {
        this.ratingIcon = void 0
    }, void 0);
    _.v("cast.framework.messages.Image", function(a) {
        this.url = a;
        this.width = this.height = void 0
    }, void 0);
    _.v("cast.framework.messages.Volume", Yo, void 0);
    _.v("cast.framework.messages.VideoInformation", function(a, b, c) {
        this.width = a;
        this.height = b;
        this.hdrType = c
    }, void 0);
    _.v("cast.framework.messages.MediaStatus", Bp, void 0);
    _.v("cast.framework.messages.ExtendedMediaStatus", function(a, b, c) {
        this.playerState = a;
        this.media = b;
        this.mediaSessionId = c
    }, void 0);
    _.q(Cp, Bp);
    _.v("cast.framework.messages.CloudMediaStatus", Cp, void 0);
    _.v("cast.framework.messages.Command", {
        PAUSE: 1,
        SEEK: 2,
        STREAM_VOLUME: 4,
        STREAM_MUTE: 8,
        ALL_BASIC_MEDIA: 12303,
        QUEUE_NEXT: 64,
        QUEUE_PREV: 128,
        QUEUE_SHUFFLE: 256,
        QUEUE_REPEAT_ALL: 1024,
        QUEUE_REPEAT_ONE: 2048,
        QUEUE_REPEAT: 3072,
        SKIP_AD: 512,
        EDIT_TRACKS: 4096,
        PLAYBACK_RATE: 8192,
        LIKE: 16384,
        DISLIKE: 32768,
        FOLLOW: 65536,
        UNFOLLOW: 131072,
        STREAM_TRANSFER: 262144
    }, void 0);
    _.v("cast.framework.messages.TrackType", {
        TEXT: "TEXT",
        AUDIO: "AUDIO",
        VIDEO: "VIDEO"
    }, void 0);
    var zs = {
        CEA608: "text/cea608",
        TTML: "application/ttml+xml",
        VTT: "text/vtt",
        TTML_MP4: "application/mp4"
    };
    _.v("cast.framework.messages.CaptionMimeType", zs, void 0);
    _.v("cast.framework.messages.TextTrackType", {
        SUBTITLES: "SUBTITLES",
        CAPTIONS: "CAPTIONS",
        DESCRIPTIONS: "DESCRIPTIONS",
        CHAPTERS: "CHAPTERS",
        METADATA: "METADATA"
    }, void 0);
    _.v("cast.framework.messages.TextTrackEdgeType", {
        NONE: "NONE",
        OUTLINE: "OUTLINE",
        DROP_SHADOW: "DROP_SHADOW",
        RAISED: "RAISED",
        DEPRESSED: "DEPRESSED"
    }, void 0);
    _.v("cast.framework.messages.TextTrackWindowType", {
        NONE: "NONE",
        NORMAL: "NORMAL",
        ROUNDED_CORNERS: "ROUNDED_CORNERS"
    }, void 0);
    _.v("cast.framework.messages.TextTrackFontGenericFamily", {
        SANS_SERIF: "SANS_SERIF",
        MONOSPACED_SANS_SERIF: "MONOSPACED_SANS_SERIF",
        SERIF: "SERIF",
        MONOSPACED_SERIF: "MONOSPACED_SERIF",
        CASUAL: "CASUAL",
        CURSIVE: "CURSIVE",
        SMALL_CAPITALS: "SMALL_CAPITALS"
    }, void 0);
    _.v("cast.framework.messages.TextTrackFontStyle", {
        NORMAL: "NORMAL",
        BOLD: "BOLD",
        BOLD_ITALIC: "BOLD_ITALIC",
        ITALIC: "ITALIC"
    }, void 0);
    _.v("cast.framework.messages.Track", Dp, void 0);
    _.v("cast.framework.messages.TextTrackStyle", function() {
        this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = this.fontScale = void 0
    }, void 0);
    _.v("cast.framework.messages.TracksInfo", Ep, void 0);
    _.v("cast.framework.messages.RepeatMode", {
        REPEAT_OFF: "REPEAT_OFF",
        REPEAT_ALL: "REPEAT_ALL",
        REPEAT_SINGLE: "REPEAT_SINGLE",
        REPEAT_ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
    }, void 0);
    _.v("cast.framework.messages.QueueChangeType", {
        INSERT: "INSERT",
        REMOVE: "REMOVE",
        ITEMS_CHANGE: "ITEMS_CHANGE",
        UPDATE: "UPDATE",
        NO_CHANGE: "NO_CHANGE"
    }, void 0);
    _.v("cast.framework.messages.QueueChange", function() {
        this.type = "QUEUE_CHANGE";
        this.sequenceNumber = this.insertBefore = this.itemIds = this.changeType = this.requestId = void 0
    }, void 0);
    _.v("cast.framework.messages.ItemsInfo", function() {
        this.type = "QUEUE_ITEMS";
        this.items = this.requestId = void 0
    }, void 0);
    _.v("cast.framework.messages.QueueIds", function() {
        this.type = "QUEUE_ITEM_IDS";
        this.itemIds = this.requestId = void 0
    }, void 0);
    _.v("cast.framework.messages.GetStatusOptions", {
        NO_METADATA: 1,
        NO_QUEUE_ITEMS: 2
    }, void 0);
    _.v("cast.framework.messages.Break", _.Fp, void 0);
    _.v("cast.framework.messages.BreakClip", _.Gp, void 0);
    _.v("cast.framework.messages.VastAdsRequest", _.Hp, void 0);
    _.v("cast.framework.messages.BreakStatus", Ip, void 0);
    _.v("cast.framework.messages.UserActionState", function(a) {
        this.userAction = a;
        this.customData = void 0
    }, void 0);
    _.v("cast.framework.messages.ContentFilteringMode", {
        FILTER_EXPLICIT: "FILTER_EXPLICIT"
    }, void 0);
    _.v("cast.framework.messages.LoadOptions", function() {
        this.contentFilteringMode = void 0
    }, void 0);
    _.v("cast.framework.messages.PlayStringId", {
        FREE_TRIAL_ABOUT_TO_EXPIRE: "FREE_TRIAL_ABOUT_TO_EXPIRE",
        SUBSCRIPTION_ABOUT_TO_EXPIRE: "SUBSCRIPTION_ABOUT_TO_EXPIRE",
        STREAM_HIJACKED: "STREAM_HIJACKED",
        PLAYING_ALTERNATE_MIX: "PLAYING_ALTERNATE_MIX"
    }, void 0);
    _.q(Jp, O);
    _.v("cast.framework.messages.SetCredentialsRequestData", Jp, void 0);
    _.q(Kp, O);
    _.v("cast.framework.messages.LoadByEntityRequestData", Kp, void 0);
    _.q(Lp, O);
    _.v("cast.framework.messages.CustomCommandRequestData", Lp, void 0);
    _.q(Mp, O);
    _.v("cast.framework.messages.RefreshCredentialsRequestData", Mp, void 0);
    _.q(Np, O);
    _.v("cast.framework.messages.PlayStringRequestData", Np, void 0);
    _.q(Op, O);
    _.v("cast.framework.messages.ExecuteActionScriptRequestData", Op, void 0);
    _.v("cast.framework.messages.ScriptAction", function(a, b) {
        this.app_id = a;
        this.action = b;
        this.custom_data = void 0
    }, void 0);
    _.v("cast.framework.messages.UserAction", {
        LIKE: "LIKE",
        DISLIKE: "DISLIKE",
        FOLLOW: "FOLLOW",
        UNFOLLOW: "UNFOLLOW",
        FLAG: "FLAG",
        SKIP_AD: "SKIP_AD"
    }, void 0);
    _.v("cast.framework.messages.UserActionContext", {
        UNKNOWN_CONTEXT: "UNKNOWN_CONTEXT",
        TRACK: "TRACK",
        ALBUM: "ALBUM",
        ARTIST: "ARTIST",
        PLAYLIST: "PLAYLIST",
        EPISODE: "EPISODE",
        SERIES: "SERIES",
        MOVIE: "MOVIE",
        CHANNEL: "CHANNEL",
        TEAM: "TEAM",
        PLAYER: "PLAYER",
        COACH: "COACH"
    }, void 0);
    _.q(Pp, O);
    _.v("cast.framework.messages.UserActionRequestData", Pp, void 0);
    _.q(Qp, O);
    _.v("cast.framework.messages.DisplayStatusRequestData", Qp, void 0);
    _.q(Rp, O);
    _.v("cast.framework.messages.ShowRemoteControlOverlayRequestData", Rp, void 0);
    _.q(Sp, O);
    _.v("cast.framework.messages.FocusStateRequestData", Sp, void 0);
    _.v("cast.framework.messages.FocusState", {
        IN_FOCUS: "IN_FOCUS",
        NOT_IN_FOCUS: "NOT_IN_FOCUS"
    }, void 0);
    _.v("cast.framework.messages.QueueItem", function(a) {
        this.itemId = a;
        this.customData = this.activeTrackIds = this.preloadTime = this.playbackDuration = this.startTime = this.autoplay = this.media = void 0
    }, void 0);
    cast.B.ra = {};
    _.v("cast.framework.system.Event", Tp, void 0);
    _.v("cast.framework.system.MessageType", {
        STRING: "STRING",
        JSON: "JSON"
    }, void 0);
    _.v("cast.framework.system.LaunchedFrom", {
        UNKNOWN: "UNKNOWN",
        DIAL: "DIAL",
        CAST: "CAST",
        CLOUD: "CLOUD"
    }, void 0);
    _.v("cast.framework.system.ApplicationData", function() {
        this.iconUrl = this.name = this.id = "";
        this.sessionId = 0;
        this.namespaces = [];
        this.launchingSenderId = "";
        this.launchedFrom = "UNKNOWN"
    }, void 0);
    _.v("cast.framework.system.PlaybackType", {
        UNKNOWN: 0,
        SINGLE_DEVICE: 1,
        STATIC_GROUP: 2,
        DYNAMIC_GROUP: 3,
        REMOTE: 4,
        BLUETOOTH: 5
    }, void 0);
    _.v("cast.framework.system.PlaybackDeviceStatus", function() {
        this.playbackType = 0;
        this.deviceName = ""
    }, void 0);
    _.v("cast.framework.system.SystemVolumeData", function() {
        this.level = 1;
        this.muted = !1
    }, void 0);
    _.v("cast.framework.system.Sender", function() {
        this.userAgent = this.id = "";
        this.largeMessageSupported = void 0
    }, void 0);
    _.v("cast.framework.system.VisibilityState", {
        VISIBLE: "visible",
        NOT_VISIBLE: "notvisible",
        UNKNOWN: "unknown"
    }, void 0);
    _.v("cast.framework.system.StandbyState", {
        STANDBY: "standby",
        NOT_STANDBY: "notstandby",
        UNKNOWN: "unknown"
    }, void 0);
    _.v("cast.framework.system.MediaControlsState", {
        HIDE: 0,
        SHOW: 1
    }, void 0);
    _.v("cast.framework.system.SystemState", {
        NOT_STARTED: "notstarted",
        STARTING_IN_BACKGROUND: "startinginbackground",
        STARTING: "starting",
        READY: "ready",
        STOPPING_IN_BACKGROUND: "stoppinginbackground",
        STOPPING: "stopping"
    }, void 0);
    _.v("cast.framework.system.DeviceCapabilities", {
            AUDIO_ASSISTANT: "audio_assistant",
            BLUETOOTH_SUPPORTED: "bluetooth_supported",
            DISPLAY_SUPPORTED: "display_supported",
            HI_RES_AUDIO_SUPPORTED: "hi_res_audio_supported",
            IS_DV_SUPPORTED: "is_dv_supported",
            IS_HDR_SUPPORTED: "is_hdr_supported",
            TOUCH_INPUT_SUPPORTED: "touch_input_supported",
            IS_GROUP: "is_group",
            REMOTE_CONTROL_OVERLAY_SUPPORTED: "remote_control_overlay_supported",
            APP_FOREGROUND: "app_foreground",
            IS_DEVICE_REGISTERED: "is_device_registered",
            IS_CBCS_SUPPORTED: "is_cbcs_supported"
        },
        void 0);
    _.v("cast.framework.system.EventType", {
        READY: "ready",
        SHUTDOWN: "shutdown",
        SENDER_CONNECTED: "senderconnected",
        SENDER_DISCONNECTED: "senderdisconnected",
        ERROR: "error",
        SYSTEM_VOLUME_CHANGED: "systemvolumechanged",
        VISIBILITY_CHANGED: "visibilitychanged",
        STANDBY_CHANGED: "standbychanged",
        MAX_VIDEO_RESOLUTION_CHANGED: "maxvideoresolutionchanged",
        SHOW_MEDIA_CONTROLS: "showmediacontrols",
        FEEDBACK_STARTED: "feedbackstarted",
        GROUP_CAPABILITIES: "groupcapabilities",
        ALLOW_GROUP_CHANGE: "allowgroupchange",
        PLAYBACK_DEVICE_STATUS: "playbackdevicestatus"
    }, void 0);
    _.v("cast.framework.system.DisconnectReason", {
        REQUESTED_BY_SENDER: "requested_by_sender",
        ERROR: "error",
        UNKNOWN: "unknown"
    }, void 0);
    _.q(Up, Tp);
    _.v("cast.framework.system.SenderDisconnectedEvent", Up, void 0);
    _.q(Vp, Tp);
    _.v("cast.framework.system.SenderConnectedEvent", Vp, void 0);
    _.q(Wp, Tp);
    _.v("cast.framework.system.VisibilityChangedEvent", Wp, void 0);
    _.q(Xp, Tp);
    _.v("cast.framework.system.StandbyChangedEvent", Xp, void 0);
    _.q(Yp, Tp);
    _.v("cast.framework.system.SystemVolumeChangedEvent", Yp, void 0);
    _.q(Zp, Tp);
    _.v("cast.framework.system.ReadyEvent", Zp, void 0);
    _.q($p, Tp);
    _.v("cast.framework.system.ShutdownEvent", $p, void 0);
    _.q(aq, Tp);
    _.v("cast.framework.system.FeedbackStartedEvent", aq, void 0);
    _.q(bq, Tp);
    _.v("cast.framework.system.PlaybackDeviceStatusEvent", bq, void 0);
    _.q(cq, Tp);
    _.v("cast.framework.system.ShowMediaControlsEvent", cq, void 0);
    _.q(dq, Tp);
    _.v("cast.framework.system.MaxVideoResolutionChangedEvent", dq, void 0);
    _.q(eq, Tp);
    _.v("cast.framework.system.GroupCapabilitiesChangeEvent", eq, void 0);
    _.q(fq, Tp);
    _.v("cast.framework.system.AllowGroupChangeEvent", fq, void 0);
    cast.Ck = 1582901654;
    cast.B.VERSION = "3.0.0071";
    _.v("cast.framework.VERSION", cast.B.VERSION, void 0);
    _.ur = {
        HLS: "application/x-mpegurl",
        Nr: "application/vnd.apple.mpegurl",
        Or: "audio/mpegurl",
        Pr: "audio/x-mpegurl",
        Ar: "application/dash+xml",
        js: "application/vnd.ms-sstr+xml"
    };
    cast.B.L = {};
    cast.B.L.Qi = function(a) {
        return a
    };
    cast.B.L.io = function(a) {
        return a
    };
    cast.B.L.eo = function(a) {
        return a
    };
    cast.B.L.fo = function(a) {
        return a
    };
    cast.B.L.Tn = function(a) {
        return a
    };
    cast.B.L.ho = function(a) {
        return a
    };
    cast.B.L.ik = function(a) {
        return a
    };
    cast.B.L.co = function(a) {
        return a
    };
    cast.B.L.Oq = function(a) {
        return a
    };
    cast.B.L.Nq = function(a) {
        return a
    };
    cast.B.L.Pq = function(a) {
        return a
    };
    cast.B.L.Lq = function(a) {
        return a
    };
    cast.B.L.Xn = function(a) {
        return a
    };
    cast.B.L.Oi = function(a) {
        return a
    };
    cast.B.L.Rq = function(a) {
        return a
    };
    cast.B.L.xs = function(a) {
        return a
    };
    cast.B.L.Oc = function(a) {
        return a
    };
    cast.B.L.Tq = function(a) {
        return a
    };
    cast.B.L.Yn = function(a) {
        return a
    };
    cast.B.L.Sq = function(a) {
        return a
    };
    cast.B.L.Qq = function(a) {
        return a
    };
    cast.B.L.ws = function(a) {
        return a
    };
    cast.B.L.Kq = function(a) {
        return a
    };
    cast.B.L.Jq = function(a) {
        return a
    };
    cast.B.L.Wn = function(a) {
        return a
    };
    cast.B.L.Zn = function(a) {
        return a
    };
    cast.B.L.Pi = function(a) {
        return a
    };
    cast.B.L.Uq = function(a) {
        return a
    };
    cast.B.L.ys = function(a) {
        return a
    };
    cast.B.L.Ns = function(a) {
        return a
    };
    cast.B.L.zs = function(a) {
        return a
    };
    cast.B.L.kk = function(a) {
        return a
    };
    cast.B.L.Ri = function(a) {
        return a
    };
    cast.B.L.jk = function(a) {
        return a
    };
    cast.B.L.Pc = function(a) {
        return a
    };
    cast.B.L.Si = function(a) {
        return a
    };
    cast.B.L.Iq = function(a) {
        return a
    };
    cast.B.L.Ls = function(a) {
        return a
    };
    cast.B.L.$n = function(a) {
        return a
    };
    cast.B.L.ao = function(a) {
        return a
    };
    cast.B.L.Ms = function(a) {
        return a
    };
    cast.B.L.hk = function(a) {
        return a
    };
    cast.B.L.Vq = function(a) {
        return a
    };
    cast.B.L.bo = function(a) {
        return a
    };
    cast.B.L.Vn = function(a) {
        return a
    };
    cast.B.L.Un = function(a) {
        return a
    };
    cast.B.L.Mq = function(a) {
        return a
    };
    cast.B.media = {};
    cast.B.media.Qa = {};
    cast.B.media.Qa.getTrackById = function(a, b) {
        return b.find(function(c) {
            return c.trackId == a
        }) || null
    };
    cast.B.media.Qa.yg = function(a, b) {
        return b.filter(function(c) {
            return c.language && cast.receiver.md(c.language, a)
        })
    };
    cast.B.media.Qa.ej = function(a, b) {
        return 0 !== cast.B.media.Qa.yg(a, b).length
    };
    cast.B.media.Qa.jr = function(a) {
        if (a.find(function(b) {
                return "TEXT" != b.type
            })) throw Error("Type is not matching.");
    };
    cast.B.media.Qa.qk = function(a, b) {
        if (b.filter(function(c) {
                return a.includes(c.trackId)
            }).length !== a.length) throw Error("Invalid id.");
    };
    _.h = iq.prototype;
    _.h.reset = function() {
        this.g = null
    };
    _.h.getTracks = function() {
        jq(this);
        return this.g.ma().getTracks("AUDIO")
    };
    _.h.getTrackById = function(a) {
        jq(this);
        if (0 > a) throw Error("Invalid track id.");
        return cast.B.media.Qa.getTrackById(a, this.getTracks())
    };
    _.h.Ve = function(a) {
        if (!a) throw Error("Need language as input.");
        return cast.B.media.Qa.yg(a, this.getTracks())
    };
    _.h.no = function() {
        jq(this);
        var a = this.g.ma().h;
        return null === a ? null : this.getTrackById(a)
    };
    _.h.lo = function() {
        jq(this);
        return this.g.ma().h
    };
    _.h.oq = function(a) {
        jq(this);
        if (null === a) _.H(hq, "No valid id, persist the current behavior.");
        else {
            cast.B.media.Qa.qk([a], this.getTracks());
            var b = this.g.ma().o.sort();
            b = b.concat(a);
            ir(this.g.ma(), b);
            this.h && Rj(this.h, cast.B.L.Pc(this.g.ma().getTracksInfo()), !1)
        }
    };
    _.h.Lf = function(a) {
        jq(this);
        if (!cast.B.media.Qa.ej(a, this.getTracks())) throw Error("No matching track.");
        lr(this.g.ma(), a);
        this.h && Rj(this.h, cast.B.L.Pc(this.g.ma().getTracksInfo()), !1)
    };
    _.h.getTracksInfo = function() {
        jq(this);
        return this.g.ma().getTracksInfo()
    };
    _.v("cast.framework.AudioTracksManager", iq, void 0);
    iq.prototype.setActiveByLanguage = iq.prototype.Lf;
    iq.prototype.setActiveById = iq.prototype.oq;
    iq.prototype.getActiveId = iq.prototype.lo;
    iq.prototype.getActiveTrack = iq.prototype.no;
    iq.prototype.getTracksByLanguage = iq.prototype.Ve;
    iq.prototype.getTrackById = iq.prototype.getTrackById;
    iq.prototype.getTracks = iq.prototype.getTracks;
    var hq = _.F("cast.framework.AudioTracksManager");
    _.v("cast.framework.NetworkRequestInfo", function() {
        this.headers = this.url = null;
        this.withCredentials = !1;
        this.content = null
    }, void 0);
    cast.B.J = {};
    _.v("cast.framework.ui.UiConfig", function() {}, void 0);
    _.v("cast.framework.CastReceiverOptions", kq, void 0);
    _.v("cast.framework.PlaybackConfig", lq, void 0);
    _.h = oq.prototype;
    _.h.Bq = function(a) {
        this.l = a;
        this.g && (this.g.R = this.l)
    };
    _.h.ug = function() {
        var a = wj(this.g);
        return a && (a = a.w) ? cast.B.L.Un(a.containerMetadata || null) : null
    };
    _.h.uq = function(a) {
        var b = wj(this.g);
        if (b) {
            var c = b.w;
            if (!c) {
                var d = c = new zc;
                d.repeatMode = b.o;
                b.w = d
            }
            c.containerMetadata = cast.B.L.Mq(a) || void 0;
            rq(this);
            qq(this, !1)
        } else _.G(nq, "Cannot set container metadata if no queue available.")
    };
    _.h.yc = function() {
        var a = [],
            b = wj(this.g);
        b && (a = b.yc(!0));
        return cast.B.L.ao(a)
    };
    _.h.ec = function() {
        var a = null,
            b = wj(this.g);
        b && (a = b.ec());
        return cast.B.L.$n(a)
    };
    _.h.Md = function() {
        var a = -1,
            b = wj(this.g);
        b && (a = b.Md());
        return a
    };
    _.h.Pg = function(a, b) {
        a = new fp(a);
        a.insertBefore = b;
        this.h.Ab(a)
    };
    _.h.Fh = function(a) {
        this.h.Ab(new hp(a))
    };
    _.h.Wh = function(a) {
        var b = new gp;
        b.items = a;
        this.h.Ab(b)
    };
    _.v("cast.framework.QueueManager", oq, void 0);
    oq.prototype.updateItems = oq.prototype.Wh;
    oq.prototype.removeItems = oq.prototype.Fh;
    oq.prototype.insertItems = oq.prototype.Pg;
    oq.prototype.getCurrentItemIndex = oq.prototype.Md;
    oq.prototype.getCurrentItem = oq.prototype.ec;
    oq.prototype.getItems = oq.prototype.yc;
    oq.prototype.setContainerMetadata = oq.prototype.uq;
    oq.prototype.getContainerMetadata = oq.prototype.ug;
    oq.prototype.setQueueStatusLimit = oq.prototype.Bq;
    var nq = _.F("cast.framework.PlayerManager");
    _.v("cast.framework.Stats", function() {}, void 0);
    _.h = uq.prototype;
    _.h.reset = function() {
        this.g = null
    };
    _.h.getTracks = function() {
        vq(this);
        return this.g.ma().getTracks("TEXT")
    };
    _.h.getTrackById = function(a) {
        vq(this);
        if (0 > a) throw Error("Invalid input.");
        return cast.B.media.Qa.getTrackById(a, this.getTracks())
    };
    _.h.Ve = function(a) {
        if (!a) throw Error("Need language as input.");
        return cast.B.media.Qa.yg(a, this.getTracks())
    };
    _.h.Wi = function() {
        var a = this.getTracks(),
            b = this.g.ma().o.sort(),
            c = [];
        a = _.p(a);
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, b.includes(d.trackId) && c.push(d);
        return c
    };
    _.h.mo = function() {
        vq(this);
        return this.g.ma().o.sort()
    };
    _.h.Xc = function() {
        vq(this);
        return this.g.ma().Xc("TEXT")
    };
    _.h.Hm = function(a) {
        vq(this);
        cast.B.media.Qa.jr(a);
        fr(this.g.ma(), a);
        this.h && Rj(this.h, cast.B.L.Pc(this.g.ma().getTracksInfo()))
    };
    _.h.qq = function(a) {
        vq(this);
        null === a || 0 === a.length ? ir(this.g.ma(), []) : (cast.B.media.Qa.qk(a, this.getTracks()), ir(this.g.ma(), a), this.h && Rj(this.h, cast.B.L.Pc(this.g.ma().getTracksInfo()), !1))
    };
    _.h.Lf = function(a) {
        vq(this);
        if (!cast.B.media.Qa.ej(a, this.getTracks())) throw Error("No matching track.");
        jr(this.g.ma(), a);
        this.h && Rj(this.h, cast.B.L.Pc(this.g.ma().getTracksInfo()), !1)
    };
    _.h.pb = function(a) {
        vq(this);
        this.g.ma().pb(a);
        this.h && Rj(this.h, cast.B.L.Pc(this.g.ma().getTracksInfo()))
    };
    _.h.Cc = function() {
        vq(this);
        return this.g.ma().Cc()
    };
    _.h.getTracksInfo = function() {
        vq(this);
        return this.g.ma().getTracksInfo()
    };
    _.h.er = function() {
        vq(this)
    };
    _.v("cast.framework.TextTracksManager", uq, void 0);
    uq.prototype.useForcedCaptions = uq.prototype.er;
    uq.prototype.getTextTracksStyle = uq.prototype.Cc;
    uq.prototype.setTextTrackStyle = uq.prototype.pb;
    uq.prototype.setActiveByLanguage = uq.prototype.Lf;
    uq.prototype.setActiveByIds = uq.prototype.qq;
    uq.prototype.addTracks = uq.prototype.Hm;
    uq.prototype.createTrack = uq.prototype.Xc;
    uq.prototype.getActiveIds = uq.prototype.mo;
    uq.prototype.getActiveTracks = uq.prototype.Wi;
    uq.prototype.getTracksByLanguage = uq.prototype.Ve;
    uq.prototype.getTrackById = uq.prototype.getTrackById;
    uq.prototype.getTracks = uq.prototype.getTracks;
    var tq = _.F("cast.framework.TextTracksManager");
    cast.B.common = {};
    wq.prototype.Nc = function(a, b) {
        this.h[a] = b || _.w
    };
    wq.prototype.w = function(a) {
        var b = a.type;
        _.I(By, "onEvent for " + b);
        var c = this.h[b],
            d = this.l[b],
            e = this.o[b];
        d && d(a);
        c && (a = c(a));
        return Promise.resolve(a).then(function(f) {
            return f && f.type == b && e ? e(f) : f
        })
    };
    var By = _.F("cast.framework.common.EventHandler");
    var $r = {
        NONE: "none",
        CLEARKEY: "clearkey",
        PLAYREADY: "playready",
        WIDEVINE: "widevine",
        AES_128: "aes_128",
        AES_128_CKP: "aes_128_ckp"
    };
    _.v("cast.framework.ContentProtection", $r, void 0);
    var Cq = _.F("cast.framework.events.EventTarget");
    _.q(Bq, _.C);
    _.h = Bq.prototype;
    _.h.addEventListener = function(a, b, c) {
        if (this.Ta()) _.G(Cq, "Trying to add an event listener for " + a + " to a disposed EventTarget");
        else {
            this.g[a] || (this.g[a] = []);
            for (var d = _.p(this.g[a]), e = d.next(); !e.done; e = d.next())
                if (e.value.handleEvent === b) return;
            this.g[a].push(new Aq(b, c))
        }
    };
    _.h.removeEventListener = function(a, b) {
        if (this.Ta()) _.G(Cq, "Trying to remove an event listener for " + a + " from a disposed EventTarget");
        else if (a = this.g[a]) {
            var c = a.findIndex(function(d) {
                return d.handleEvent === b
            });
            0 <= c && a.splice(c, 1)
        }
    };
    _.h.Of = function(a) {
        this.Ta() ? _.G(Cq, "Trying to set a parent EventTarget for a disposed EventTarget") : this.l = a
    };
    _.h.dispatchEvent = function(a) {
        var b = a.type;
        this.Ta() ? _.G(Cq, "Trying to dispatch an event (" + a.type + ") on a disposed EventTarget") : (this.l && this.l.dispatchEvent(a), Dq(this, b, a), Dq(this, "*", a))
    };
    _.h.ha = function() {
        this.g = {};
        this.h = this.l = null
    };
    var tu = {
        ALL: "*",
        ABORT: "ABORT",
        CAN_PLAY: "CAN_PLAY",
        CAN_PLAY_THROUGH: "CAN_PLAY_THROUGH",
        DURATION_CHANGE: "DURATION_CHANGE",
        EMPTIED: "EMPTIED",
        ENDED: "ENDED",
        LOADED_DATA: "LOADED_DATA",
        LOADED_METADATA: "LOADED_METADATA",
        LOAD_START: "LOAD_START",
        PAUSE: "PAUSE",
        PLAY: "PLAY",
        PLAYING: "PLAYING",
        PROGRESS: "PROGRESS",
        RATE_CHANGE: "RATE_CHANGE",
        SEEKED: "SEEKED",
        SEEKING: "SEEKING",
        STALLED: "STALLED",
        TIME_UPDATE: "TIME_UPDATE",
        SUSPEND: "SUSPEND",
        WAITING: "WAITING",
        BITRATE_CHANGED: "BITRATE_CHANGED",
        BREAK_STARTED: "BREAK_STARTED",
        BREAK_ENDED: "BREAK_ENDED",
        BREAK_CLIP_LOADING: "BREAK_CLIP_LOADING",
        BREAK_CLIP_STARTED: "BREAK_CLIP_STARTED",
        BREAK_CLIP_ENDED: "BREAK_CLIP_ENDED",
        BUFFERING: "BUFFERING",
        CACHE_LOADED: "CACHE_LOADED",
        CACHE_HIT: "CACHE_HIT",
        CACHE_INSERTED: "CACHE_INSERTED",
        CLIP_STARTED: "CLIP_STARTED",
        CLIP_ENDED: "CLIP_ENDED",
        EMSG: "EMSG",
        ERROR: "ERROR",
        ID3: "ID3",
        MEDIA_STATUS: "MEDIA_STATUS",
        CUSTOM_STATE: "CUSTOM_STATE",
        MEDIA_INFORMATION_CHANGED: "MEDIA_INFORMATION_CHANGED",
        MEDIA_FINISHED: "MEDIA_FINISHED",
        PLAYER_PRELOADING: "PLAYER_PRELOADING",
        PLAYER_PRELOADING_CANCELLED: "PLAYER_PRELOADING_CANCELLED",
        PLAYER_LOAD_COMPLETE: "PLAYER_LOAD_COMPLETE",
        PLAYER_LOADING: "PLAYER_LOADING",
        SEGMENT_DOWNLOADED: "SEGMENT_DOWNLOADED",
        REQUEST_SEEK: "REQUEST_SEEK",
        REQUEST_LOAD: "REQUEST_LOAD",
        REQUEST_STOP: "REQUEST_STOP",
        REQUEST_PAUSE: "REQUEST_PAUSE",
        REQUEST_PRECACHE: "REQUEST_PRECACHE",
        REQUEST_PLAY: "REQUEST_PLAY",
        REQUEST_SKIP_AD: "REQUEST_SKIP_AD",
        REQUEST_PLAY_AGAIN: "REQUEST_PLAY_AGAIN",
        REQUEST_PLAYBACK_RATE_CHANGE: "REQUEST_PLAYBACK_RATE_CHANGE",
        REQUEST_VOLUME_CHANGE: "REQUEST_VOLUME_CHANGE",
        REQUEST_EDIT_TRACKS_INFO: "REQUEST_EDIT_TRACKS_INFO",
        REQUEST_EDIT_AUDIO_TRACKS: "REQUEST_EDIT_AUDIO_TRACKS",
        REQUEST_SET_CREDENTIALS: "REQUEST_SET_CREDENTIALS",
        REQUEST_LOAD_BY_ENTITY: "REQUEST_LOAD_BY_ENTITY",
        REQUEST_USER_ACTION: "REQUEST_USER_ACTION",
        REQUEST_DISPLAY_STATUS: "REQUEST_DISPLAY_STATUS",
        REQUEST_CUSTOM_COMMAND: "REQUEST_CUSTOM_COMMAND",
        REQUEST_FOCUS_STATE: "REQUEST_FOCUS_STATE",
        REQUEST_QUEUE_LOAD: "REQUEST_QUEUE_LOAD",
        REQUEST_QUEUE_INSERT: "REQUEST_QUEUE_INSERT",
        REQUEST_QUEUE_UPDATE: "REQUEST_QUEUE_UPDATE",
        REQUEST_QUEUE_REMOVE: "REQUEST_QUEUE_REMOVE",
        REQUEST_QUEUE_REORDER: "REQUEST_QUEUE_REORDER",
        REQUEST_QUEUE_GET_ITEM_RANGE: "REQUEST_QUEUE_GET_ITEM_RANGE",
        REQUEST_QUEUE_GET_ITEMS: "REQUEST_QUEUE_GET_ITEMS",
        REQUEST_QUEUE_GET_ITEM_IDS: "REQUEST_QUEUE_GET_ITEM_IDS",
        INBAND_TRACK_ADDED: "INBAND_TRACK_ADDED",
        LIVE_IS_MOVING_WINDOW_CHANGED: "LIVE_IS_MOVING_WINDOW_CHANGED",
        LIVE_ENDED: "LIVE_ENDED",
        REQUEST_STORE_SESSION: "REQUEST_STORE_SESSION",
        REQUEST_RESUME_SESSION: "REQUEST_RESUME_SESSION"
    };
    _.v("cast.framework.events.EventType", tu, void 0);
    cast.B.common.ua = {};
    var S = {},
        Cy = (S["*"] = 1, S.ABORT = 2, S.CAN_PLAY = 3, S.CAN_PLAY_THROUGH = 4, S.DURATION_CHANGE = 5, S.EMPTIED = 6, S.ENDED = 7, S.LOADED_DATA = 8, S.LOADED_METADATA = 9, S.LOAD_START = 10, S.PAUSE = 11, S.PLAY = 12, S.PLAYING = 13, S.PROGRESS = 14, S.RATE_CHANGE = 15, S.SEEKED = 16, S.SEEKING = 17, S.STALLED = 18, S.TIME_UPDATE = 19, S.SUSPEND = 20, S.WAITING = 21, S.BITRATE_CHANGED = 22, S.BREAK_STARTED = 23, S.BREAK_ENDED = 24, S.BREAK_CLIP_LOADING = 25, S.BREAK_CLIP_STARTED = 26, S.BREAK_CLIP_ENDED = 27, S.BUFFERING = 28, S.CACHE_LOADED = 29, S.CACHE_HIT = 30, S.CACHE_INSERTED = 31,
            S.CLIP_STARTED = 32, S.CLIP_ENDED = 33, S.EMSG = 34, S.ERROR = 35, S.ID3 = 36, S.MEDIA_STATUS = 37, S.MEDIA_FINISHED = 38, S.PLAYER_PRELOADING = 39, S.PLAYER_PRELOADING_CANCELLED = 40, S.PLAYER_LOAD_COMPLETE = 41, S.PLAYER_LOADING = 42, S.SEGMENT_DOWNLOADED = 43, S.REQUEST_SEEK = 44, S.REQUEST_LOAD = 45, S.REQUEST_STOP = 46, S.REQUEST_PAUSE = 47, S.REQUEST_PLAY = 48, S.REQUEST_SKIP_AD = 49, S.REQUEST_PLAY_AGAIN = 50, S.REQUEST_PLAYBACK_RATE_CHANGE = 51, S.REQUEST_VOLUME_CHANGE = 52, S.REQUEST_EDIT_TRACKS_INFO = 53, S.REQUEST_EDIT_AUDIO_TRACKS = 54, S.REQUEST_SET_CREDENTIALS =
            55, S.REQUEST_LOAD_BY_ENTITY = 56, S.REQUEST_USER_ACTION = 57, S.REQUEST_DISPLAY_STATUS = 58, S.REQUEST_CUSTOM_COMMAND = 59, S.REQUEST_FOCUS_STATE = 60, S.REQUEST_QUEUE_LOAD = 61, S.REQUEST_QUEUE_INSERT = 62, S.REQUEST_QUEUE_UPDATE = 63, S.REQUEST_QUEUE_REMOVE = 64, S.REQUEST_QUEUE_REORDER = 65, S.REQUEST_QUEUE_GET_ITEM_RANGE = 66, S.REQUEST_QUEUE_GET_ITEMS = 67, S.REQUEST_QUEUE_GET_ITEM_IDS = 68, S.INBAND_TRACK_ADDED = 69, S.REQUEST_PRECACHE = 70, S.LIVE_IS_MOVING_WINDOW_CHANGED = 71, S.LIVE_ENDED = 72, S.MEDIA_INFORMATION_CHANGED = 73, S.REQUEST_STORE_SESSION =
            74, S.REQUEST_RESUME_SESSION = 75, S.CUSTOM_STATE = 76, S),
        T = {},
        Dy = (T.MEDIA_STATUS = 1, T.CLOUD_STATUS = 2, T.QUEUE_CHANGE = 3, T.QUEUE_ITEMS = 4, T.QUEUE_ITEM_IDS = 5, T.GET_STATUS = 6, T.LOAD = 7, T.PAUSE = 8, T.STOP = 9, T.PLAY = 10, T.SKIP_AD = 11, T.PLAY_AGAIN = 12, T.SEEK = 13, T.SET_PLAYBACK_RATE = 14, T.SET_VOLUME = 15, T.EDIT_TRACKS_INFO = 16, T.EDIT_AUDIO_TRACKS = 17, T.PRECACHE = 18, T.PRELOAD = 19, T.QUEUE_LOAD = 20, T.QUEUE_INSERT = 21, T.QUEUE_UPDATE = 22, T.QUEUE_REMOVE = 23, T.QUEUE_REORDER = 24, T.QUEUE_NEXT = 25, T.QUEUE_PREV = 26, T.QUEUE_GET_ITEM_RANGE = 27, T.QUEUE_GET_ITEMS =
            28, T.QUEUE_GET_ITEM_IDS = 29, T.QUEUE_SHUFFLE = 30, T.SET_CREDENTIALS = 31, T.LOAD_BY_ENTITY = 32, T.USER_ACTION = 33, T.DISPLAY_STATUS = 34, T.FOCUS_STATE = 35, T.CUSTOM_COMMAND = 36, T.STORE_SESSION = 37, T.RESUME_SESSION = 38, T.SESSION_STATE = 39, T),
        Ey = {},
        Fy = (Ey.INVALID_COMMAND = 0, Ey.INVALID_PARAMS = 1, Ey.INVALID_MEDIA_SESSION_ID = 2, Ey.SKIP_LIMIT_REACHED = 3, Ey.NOT_SUPPORTED = 4, Ey.LANGUAGE_NOT_SUPPORTED = 5, Ey.END_OF_QUEUE = 6, Ey.DUPLICATE_REQUEST_ID = 7, Ey.APP_ERROR = 8, Ey.AUTHENTICATION_EXPIRED = 9, Ey.PREMIUM_ACCOUNT_REQUIRED = 10, Ey.CONCURRENT_STREAM_LIMIT =
            11, Ey.PARENTAL_CONTROL_RESTRICTED = 12, Ey.NOT_AVAILABLE_IN_REGION = 13, Ey.CONTENT_ALREADY_PLAYING = 14, Ey.INVALID_REQUEST = 15, Ey.GENERIC_LOAD_ERROR = 16, Ey.VIDEO_DEVICE_REQUIRED = 17, Ey.CONTENT_FILTERED = 18, Ey);
    cast.B.common.ua.Bd = {
        el: 1,
        fm: 2,
        km: 3,
        rm: 4,
        xk: 5
    };
    cast.B.common.ua.Xi = function(a) {
        return Cy[a]
    };
    cast.B.common.ua.uo = function(a) {
        return Dy[a]
    };
    cast.B.common.ua.Fo = function(a) {
        return Fy[void 0 === a ? "GENERIC_LOAD_ERROR" : a]
    };
    cast.B.common.ua.ep = function() {
        B("Cast.CAF.Version", Number(cast.B.VERSION.split(".")[2]))
    };
    cast.B.common.ua.pj = function(a, b) {
        B("Cast.CAF.PlayerStarted", a);
        b && b.protectionSystem && Gy[b.protectionSystem] && B("Cast.CAF.PlayerProtectionSystem", Gy[b.protectionSystem])
    };
    var Hy = {},
        Gy = (Hy.none = 1, Hy.clearkey = 2, Hy.playready = 3, Hy.widevine = 4, Hy.aes_128 = 5, Hy.aes_128_ckp = 6, Hy);
    cast.B.common.Cq = function(a, b) {
        (new Fq(a, b)).start()
    };
    cast.B.common.bl = {
        no_media: 5,
        loading: 5,
        paused: 20
    };
    _.h = Fq.prototype;
    _.h.start = function() {
        var a = this.l;
        a.addEventListener("ERROR", this.Lj.bind(this));
        a.addEventListener("MEDIA_FINISHED", this.Lj.bind(this));
        a.addEventListener("PAUSE", this.Rp.bind(this));
        a.addEventListener("PLAYER_LOADING", this.Qp.bind(this));
        a.addEventListener("PLAYER_LOAD_COMPLETE", this.Pp.bind(this));
        a.addEventListener("TIME_UPDATE", this.Sp.bind(this));
        Iq(this, "no_media")
    };
    _.h.Lj = function() {
        _.qe(Hq, "onPlayerIdle");
        Iq(this, "no_media")
    };
    _.h.Rp = function() {
        _.qe(Hq, "onPlayerPaused");
        Iq(this, "paused")
    };
    _.h.Qp = function() {
        _.qe(Hq, "onPlayerLoading");
        Iq(this, "loading")
    };
    _.h.Pp = function() {
        _.qe(Hq, "onPlayerLoadComplete");
        "PAUSED" === this.l.getPlayerState() && Iq(this, "paused")
    };
    _.h.Sp = function() {
        this.h = null;
        Gq(this)
    };
    var Hq = _.F("cast.framework.common.IdleTimeoutManager");
    cast.B.Ea.Fr = {};
    _.v("cast.framework.events.Event", Jq, void 0);
    _.q(Kq, Jq);
    _.v("cast.framework.events.BitrateChangedEvent", Kq, void 0);
    _.q(Lq, Jq);
    _.v("cast.framework.events.EmsgEvent", Lq, void 0);
    _.q(Mq, Jq);
    _.v("cast.framework.events.ErrorEvent", Mq, void 0);
    _.q(Nq, Jq);
    _.v("cast.framework.events.Id3Event", Nq, void 0);
    _.q(Oq, Jq);
    _.v("cast.framework.events.MediaElementEvent", Oq, void 0);
    _.q(Pq, Oq);
    _.v("cast.framework.events.MediaPauseEvent", Pq, void 0);
    _.q(Qq, Jq);
    _.v("cast.framework.events.MediaStatusEvent", Qq, void 0);
    _.q(Rq, Jq);
    _.v("cast.framework.events.CustomStateEvent", Rq, void 0);
    _.q(Sq, Jq);
    _.v("cast.framework.events.MediaFinishedEvent", Sq, void 0);
    _.q(Tq, Jq);
    _.v("cast.framework.events.RequestEvent", Tq, void 0);
    _.q(Uq, Jq);
    _.v("cast.framework.events.LoadEvent", Uq, void 0);
    _.q(Vq, Uq);
    _.v("cast.framework.events.MediaInformationChangedEvent", Vq, void 0);
    _.q(Wq, Jq);
    _.v("cast.framework.events.BreaksEvent", Wq, void 0);
    _.q(Xq, Jq);
    _.v("cast.framework.events.BufferingEvent", Xq, void 0);
    _.q(Yq, Jq);
    _.v("cast.framework.events.ClipEndedEvent", Yq, void 0);
    _.q(Zq, Jq);
    _.v("cast.framework.events.SegmentDownloadedEvent", Zq, void 0);
    _.q($q, Jq);
    _.v("cast.framework.events.CacheLoadedEvent", $q, void 0);
    _.q(ar, Jq);
    _.v("cast.framework.events.InbandTrackAddedEvent", ar, void 0);
    _.q(br, Jq);
    _.v("cast.framework.events.CacheItemEvent", br, void 0);
    _.q(cr, Jq);
    _.v("cast.framework.events.LiveStatusEvent", cr, void 0);
    _.v("cast.framework.events.EndedReason", {
        END_OF_STREAM: "END_OF_STREAM",
        ERROR: "ERROR",
        STOPPED: "STOPPED",
        INTERRUPTED: "INTERRUPTED",
        SKIPPED: "SKIPPED",
        BREAK_SWITCH: "BREAK_SWITCH"
    }, void 0);
    _.q(dr, _.C);
    _.h = dr.prototype;
    _.h.Xc = function(a) {
        return new Dp(this.K++, a)
    };
    _.h.getTracks = function(a) {
        return void 0 !== a ? this.tracks.filter(function(b) {
            return b.type == a
        }) : this.tracks
    };
    _.h.getTracksInfo = function() {
        var a = new Ep;
        a.tracks = this.tracks;
        a.activeTrackIds = this.A;
        a.textTrackStyle = cast.B.L.Ri(this.w.Cc());
        return a
    };
    _.h.ne = function(a) {
        a && a.tracksInfo && hr(this, a.tracksInfo)
    };
    _.h.Zc = function() {};
    _.h.ud = function() {};
    _.h.vg = function() {
        return null
    };
    _.h.Rg = function(a) {
        return !a.trackContentId
    };
    _.h.Vj = function(a, b, c, d, e) {
        1 < c.length && (_.H(gr, "Cannot enable more than one inband tracks. Will only enable track " + c[0] + "."), c = [c[0]]);
        kr(this, b, c.concat(null != d ? d : [], e));
        this.Zc(c);
        mr(this, d, this.ignoreTtmlPositionInfo);
        null != b && this.ud(a, b)
    };
    _.h.pb = function(a) {
        this.Ta() ? _.G(gr, "Cannot change tracks style in disposed state") : this.w.pb(cast.B.L.jk(a))
    };
    _.h.Cc = function() {
        return cast.B.L.Ri(this.w.Cc())
    };
    _.h.ha = function() {
        this.l && this.l.unload();
        _.C.prototype.ha.call(this)
    };
    var gr = _.F("cast.framework.media.TracksManager");
    _.v("cast.framework.ContentConfig", or, void 0);
    var nr = _.F("cast.framework.ContentConfig");
    cast.B.media.util = {};
    var Iy = _.F("cast.framework.media.util"),
        tr = {
            m3u8: "application/x-mpegurl",
            manifest: "application/vnd.ms-sstr+xml",
            mpd: "application/dash+xml",
            ism: "application/vnd.ms-sstr+xml",
            m4v: "video/mp4",
            mp4: "video/mp4",
            ogv: "video/ogg",
            aac: "audio/aac",
            m4a: "audio/mp4",
            mp3: "audio/mp3",
            oga: "audio/ogg",
            wav: "audio/wav",
            jpg: "image/jpg",
            gif: "image/gif",
            png: "image/png"
        },
        Jy = {
            video: "VIDEO",
            audio: "AUDIO",
            image: "IMAGE"
        };
    cast.B.media.util.Re = function(a) {
        a = a.split("?")[0] || "";
        a = a.split("/").pop() || "";
        return a.split(".").pop() || ""
    };
    cast.B.media.util.Xe = function(a, b) {
        b = void 0 === b ? "video/mp4" : b;
        if (a = tr[a]) return a;
        _.H(Iy, "cannot guess mime type from given contenId/Type. Assume that this is " + b);
        return b
    };
    cast.B.media.util.Lo = function(a, b, c, d, e) {
        c = vr(d || a.contentUrl || a.contentId, a.contentType, c, a.hlsSegmentFormat, a.hlsVideoSegmentFormat);
        c.media = a;
        c.startTime = b;
        e && (c.tracksInfo = e);
        return c
    };
    cast.B.media.util.Ko = function(a, b) {
        b = vr(String(a.contentUrl || a.contentId), a.contentType, b, a.hlsSegmentFormat);
        b.breakClip = a;
        return b
    };
    cast.B.media.util.cj = function(a) {
        return (a = Jy[a.split("/")[0]]) ? a : "VIDEO"
    };
    _.h = xr.prototype;
    _.h.yi = function(a) {
        var b = this;
        Object.keys(Ky).forEach(function(c) {
            Er(b, a, c, function() {
                var d = new Oq(Ky[c], b.getCurrentTimeSec());
                yr(b, d)
            })
        });
        Er(this, a, "playing", this.Ap.bind(this));
        Er(this, a, "ended", function() {
            b.end("END_OF_STREAM")
        });
        Er(this, a, "pause", function() {
            var c = new Pq(b.getCurrentTimeSec(), a.ended);
            yr(b, c)
        });
        Er(this, a, "ratechange", function() {
            b.Vc(a.playbackRate)
        })
    };
    _.h.zc = function() {
        return 0
    };
    _.h.Ap = function() {
        4 > this.o && (this.o = 4, yr(this, new Jq("CLIP_STARTED")))
    };
    _.h.Jj = function() {};
    _.h.dg = function() {
        return {}
    };
    _.h.pause = function() {
        if (!this.mediaElement) return Qe("INVALID_REQUEST");
        this.H = !0;
        Gr(this);
        this.pc(!1);
        return this.Oj()
    };
    _.h.Oj = function() {
        this.mediaElement.pause();
        return _.J()
    };
    _.h.play = function() {
        this.H = !1;
        var a = this.Pj();
        Ar(this);
        return a
    };
    _.h.Pj = function() {
        return _.J(this.mediaElement && this.mediaElement.play())
    };
    _.h.seek = function(a, b) {
        var c = this;
        b = void 0 === b ? null : b;
        if (!this.mediaElement) return _.H(Ly, "could not seek while media was not loaded yet"), Qe("INVALID_REQUEST");
        if (this.isLiveStream()) {
            var d = this.getLiveSeekableRange();
            if (!d) return _.H(Ly, "No seekable range available, could not seek."), Qe("INVALID_REQUEST");
            a < d.start ? (_.H(Ly, "Seek time is not available any more, jump to seek start point."), a = d.start) : a > d.end && (_.H(Ly, "Seek time is not available yet, jump to live edge."), a = d.end)
        }
        1 > Math.abs(this.getCurrentTimeSec() -
            a) ? (_.I(Ly, "ignore seek which tries to jump to too close time"), a = _.J()) : (a = this.Ee(a), this.H || a.then(function() {
            Ar(c)
        }));
        return b ? a.then(function() {
            if (c.mediaElement && c.mediaElement.paused && "PLAYBACK_START" == b) return c.play();
            if (!(c.mediaElement && c.mediaElement.paused || "PLAYBACK_PAUSE" != b)) return c.pause()
        }) : a
    };
    _.h.Ee = function(a) {
        this.mediaElement.currentTime = a;
        return _.J()
    };
    _.h.getMediaCategory = function() {
        return this.Kd
    };
    _.h.eg = function() {
        return this.H && this.mediaElement && this.mediaElement.paused ? "PAUSED" : this.isBuffering() ? "BUFFERING" : "PLAYING"
    };
    _.h.isLiveStream = function() {
        return !1
    };
    _.h.Uc = function() {};
    _.h.isLiveDone = function() {};
    _.h.bb = function() {
        return null
    };
    _.h.getLiveSeekableRange = function() {
        return null
    };
    _.h.getCurrentTimeSec = function() {
        return this.ca ? this.ca : this.mediaElement ? this.mediaElement.currentTime : 0
    };
    _.h.getDurationSec = function() {
        return this.mediaElement ? this.mediaElement.duration : 0
    };
    _.h.getPlaybackRate = function() {
        return this.mediaElement ? this.mediaElement.playbackRate : 1
    };
    _.h.Vc = function(a) {
        this.wa = a;
        Ar(this)
    };
    _.h.getBufferedRanges = function() {
        if (!this.mediaElement) return [];
        for (var a = [], b = this.mediaElement.buffered, c = 0; c < b.length; c++) a.push(new So(b.start(c), b.end(c)));
        return a
    };
    _.h.De = function(a, b) {
        this.mediaElement = a;
        this.ab = b;
        this.H = !b;
        this.C = We();
        cast.B.common.ua.pj(this.zc(), this.h.playbackConfig);
        this.yi(a);
        this.Sd(a, b);
        return this.C.g
    };
    _.h.Sd = function() {
        _.G(Ly, "Load not implemented");
        zr(this, 104)
    };
    _.h.Jc = function() {
        this.zh()
    };
    _.h.zh = function() {};
    _.h.end = function(a, b) {
        var c = this;
        b = void 0 === b ? null : b;
        Gr(this);
        this.pc(!1);
        if (6 == this.o) return this.A.g;
        this.o = 6;
        this.Jj();
        var d = this.getCurrentTimeSec();
        this.ca = d;
        this.Gd(a);
        this.mediaElement && Fr(this, this.mediaElement);
        this.mediaElement = null;
        this.ka = this.l && this.l.getTracksInfo();
        this.l && this.l.ga();
        this.l = null;
        this.C && ("ERROR" == a ? this.C.reject(b) : this.C.resolve());
        return this.A.g.then(function() {
            yr(c, new Yq(d, a));
            c.va.ga()
        })
    };
    _.h.isBuffering = function() {
        return this.M
    };
    _.h.Gd = function() {
        var a = this.mediaElement;
        a && (a.removeAttribute("src"), a.load());
        setTimeout(this.A.resolve, 0)
    };
    _.h.pc = function(a) {
        a !== this.M && (this.M = a, yr(this, new Xq(this.M)));
        a ? !this.D && 4 <= this.o && (this.D = (0, _.M)()) : this.D && (B("Cast.CAF.Buffering", (0, _.M)() - this.D), this.D = null)
    };
    _.h.Qm = function() {
        this.pc(1E3 * (this.getCurrentTimeSec() - this.sa) < 100 * this.wa);
        var a = this.getLiveSeekableRange();
        !this.O && this.isLiveDone() && a && (yr(this, new cr("LIVE_ENDED", a)), this.O = !0);
        !this.R && this.Uc() && a && (yr(this, new cr("LIVE_IS_MOVING_WINDOW_CHANGED", a)), this.R = !0);
        Ar(this)
    };
    _.h.setPlaybackRate = function(a) {
        var b = this;
        return this.mediaElement ? this.Yj((void 0 === a ? 1 : a) || 1).then(function() {
            b.Vc(b.getPlaybackRate())
        }) : Qe("INVALID_REQUEST")
    };
    _.h.Yj = function(a) {
        this.mediaElement.playbackRate = a;
        return _.J()
    };
    var Ly = _.F("cast.framework.media.BasePlayer"),
        Ky = {
            abort: "ABORT",
            canplay: "CAN_PLAY",
            canplaythrough: "CAN_PLAY_THROUGH",
            durationchange: "DURATION_CHANGE",
            ended: "ENDED",
            emptied: "EMPTIED",
            loadeddata: "LOADED_DATA",
            loadedmetadata: "LOADED_METADATA",
            loadstart: "LOAD_START",
            play: "PLAY",
            playing: "PLAYING",
            progress: "PROGRESS",
            ratechange: "RATE_CHANGE",
            seeked: "SEEKED",
            seeking: "SEEKING",
            stalled: "STALLED",
            suspend: "SUSPEND",
            timeupdate: "TIME_UPDATE",
            waiting: "WAITING"
        };
    _.h = P.prototype;
    _.h.setEventsListener = function() {};
    _.h.getPlayerVersion = function() {};
    _.h.getPlayerState = function() {};
    _.h.getDurationSec = function() {};
    _.h.getCurrentTimeSec = function() {};
    _.h.getMediaCategory = function() {};
    _.h.isLiveStream = function() {};
    _.h.getPlaybackRate = function() {};
    _.h.getLiveSeekableRange = function() {};
    _.h.getBufferedRanges = function() {};
    _.h.getTracksInfo = function() {};
    _.h.getCurrentBitRate = function() {};
    _.h.preload = function() {};
    _.h.load = function() {};
    _.h.unload = function() {};
    _.h.play = function() {};
    _.h.pause = function() {};
    _.h.seek = function() {};
    _.h.setPlaybackRate = function() {};
    _.h.setActiveAudioTrack = function() {};
    _.h.setActiveTextTracks = function() {};
    _.v("cast.framework.PlayerInterface", P, void 0);
    P.prototype.setActiveTextTracks = P.prototype.setActiveTextTracks;
    P.prototype.setActiveAudioTrack = P.prototype.setActiveAudioTrack;
    P.prototype.setPlaybackRate = P.prototype.setPlaybackRate;
    P.prototype.seek = P.prototype.seek;
    P.prototype.pause = P.prototype.pause;
    P.prototype.play = P.prototype.play;
    P.prototype.unload = P.prototype.unload;
    P.prototype.load = P.prototype.load;
    P.prototype.preload = P.prototype.preload;
    P.prototype.getCurrentBitRate = P.prototype.getCurrentBitRate;
    P.prototype.getTracksInfo = P.prototype.getTracksInfo;
    P.prototype.getBufferedRanges = P.prototype.getBufferedRanges;
    P.prototype.getLiveSeekableRange = P.prototype.getLiveSeekableRange;
    P.prototype.getPlaybackRate = P.prototype.getPlaybackRate;
    P.prototype.isLiveStream = P.prototype.isLiveStream;
    P.prototype.getMediaCategory = P.prototype.getMediaCategory;
    P.prototype.getCurrentTimeSec = P.prototype.getCurrentTimeSec;
    P.prototype.getDurationSec = P.prototype.getDurationSec;
    P.prototype.getPlayerState = P.prototype.getPlayerState;
    P.prototype.getPlayerVersion = P.prototype.getPlayerVersion;
    P.prototype.setEventsListener = P.prototype.setEventsListener;
    P.EventType = {
        STATE_CHANGED: "STATE_CHANGED",
        CLIP_ENDED: "CLIP_ENDED",
        ERROR: "ERROR",
        TIME_UPDATE: "TIME_UPDATE",
        DURATION_CHANGED: "DURATION_CHANGED",
        RATE_CHANGED: "RATE_CHANGED",
        TEXT_TRACKS_CHANGED: "TEXT_TRACKS_CHANGED",
        AUDIO_TRACKS_CHANGED: "AUDIO_TRACKS_CHANGED",
        BITRATE_CHANGED: "BITRATE_CHANGED",
        TIME_TO_TARGET_BITRATE: "TIME_TO_TARGET_BITRATE"
    };
    P.Event = Hr;
    _.q(Ir, Hr);
    P.BitrateChangedEvent = Ir;
    _.q(Jr, Hr);
    P.TargetBitrateEvent = Jr;
    var Lr = _.F("cast.framework.media.CustomPlayer");
    _.q(Kr, xr);
    _.h = Kr.prototype;
    _.h.zc = function() {
        return cast.B.common.ua.Bd.xk
    };
    _.h.yi = function() {};
    _.h.Sd = function(a, b) {
        var c = this;
        Mr(this, function() {
            return c.g.load(a, b)
        }).then(function() {
            var d = c.getLiveSeekableRange();
            return c.isLiveStream() && void 0 === c.h.startTime && d && d.end && !d.isLiveDone ? c.seek(d.end) : _.J()
        }).then(function() {
            Br(c)
        }, function(d) {
            zr(c, d && d.detailedErrorCode || 900, d && d.error, d)
        })
    };
    _.h.zh = function() {
        if (this.g.preload) {
            try {
                this.g.preload()
            } catch (a) {
                _.G(Lr, "preload failed ", a)
            }
            this.o = 2
        }
    };
    _.h.Gd = function(a) {
        var b = this;
        this.A.resolve(new Me(function(c) {
            return c(b.g.unload(a))
        }))
    };
    _.h.Pj = function() {
        var a = this;
        return Mr(this, function() {
            return a.g.play()
        })
    };
    _.h.Oj = function() {
        var a = this;
        return Mr(this, function() {
            return a.g.pause()
        })
    };
    _.h.Ee = function(a) {
        var b = this;
        if (this.g.seek) return Mr(this, function() {
            return b.g.seek(a)
        });
        _.H(Lr, "Seek is not supported");
        return Qe("NOT_SUPPORTED")
    };
    _.h.Yj = function(a) {
        var b = this;
        if (this.g.setPlaybackRate) return Mr(this, function() {
            return b.g.setPlaybackRate(a)
        });
        _.H(Lr, "Set playback rate is not supported");
        return Qe("NOT_SUPPORTED")
    };
    _.h.getDurationSec = function() {
        return this.g.getDurationSec()
    };
    _.h.getCurrentTimeSec = function() {
        return this.g.getCurrentTimeSec()
    };
    _.h.getPlaybackRate = function() {
        return this.g.getPlaybackRate ? this.g.getPlaybackRate() : 1
    };
    _.h.getBufferedRanges = function() {
        return this.g.getBufferedRanges ? this.g.getBufferedRanges() : []
    };
    _.h.isLiveStream = function() {
        return !!this.g.isLiveStream && this.g.isLiveStream()
    };
    _.h.getLiveSeekableRange = function() {
        return this.g.getLiveSeekableRange ? this.g.getLiveSeekableRange() : null
    };
    _.h.bb = function() {
        var a = this.getLiveSeekableRange();
        return a ? new So(a.start || 0, a.end || 0) : null
    };
    _.q(Nr, dr);
    Nr.prototype.ne = function(a) {
        var b = this.g.getTracksInfo ? this.g.getTracksInfo() : null;
        b = b || a.tracksInfo;
        hr(this, b)
    };
    Nr.prototype.Rg = function(a) {
        return a && !!a.isInband
    };
    Nr.prototype.Zc = function(a) {
        this.g.setActiveTextTracks(a)
    };
    Nr.prototype.ud = function(a, b) {
        this.g.setActiveAudioTrack(b)
    };
    cast.B.media.Lk = Nr;
    _.q(Or, xr);
    _.h = Or.prototype;
    _.h.De = function(a) {
        var b = this;
        _.I(My, "loadContent");
        this.mediaElement = a;
        cast.B.common.ua.pj(this.zc(), this.h.playbackConfig);
        var c = this.h.url;
        return Pr(c).then(function() {
            a.style.backgroundImage = cast.receiver.J.aa.lb(c);
            b.g = a;
            _.I(My, "image is set");
            b.l = b.Na(b, a)
        }, function() {
            zr(b, 903);
            return Qe()
        })
    };
    _.h.getDurationSec = function() {
        return 0
    };
    _.h.zc = function() {
        return cast.B.common.ua.Bd.el
    };
    _.h.eg = function() {
        return "PAUSED"
    };
    _.h.Jc = function() {
        _.I(My, "ImagePlayer does not handle preload")
    };
    _.h.play = function() {
        _.I(My, "ImagePlayer does not support PLAY");
        return Qe("NOT_SUPPORTED")
    };
    _.h.pause = function() {
        _.I(My, "ImagePlayer does not support PAUSE");
        return Qe("NOT_SUPPORTED")
    };
    _.h.seek = function() {
        _.I(My, "ImagePlayer does not support SEEK");
        return Qe("NOT_SUPPORTED")
    };
    _.h.Gd = function() {
        this.g && (this.g.style.backgroundImage = "none");
        this.A.resolve()
    };
    _.h.pc = function() {};
    var My = _.F("cast.framework.media.ImagePlayer");
    var Qr = _.F("cast.framework.common.libraryloader"),
        Ny = {
            Vl: "js/media_player.js",
            gm: "//ajax.googleapis.com/ajax/libs/shaka-player/2.5.8/shaka-player.compiled.js",
            Pl: "//ajax.googleapis.com/ajax/libs/shaka-player/2.5.8/mux.min.js"
        };
    Ny.ai = document.currentScript.src;
    var Oy = We(),
        Py = We(),
        Qy = We();
    Ny.Qj = Oy.g;
    Ny.$j = Py.g;
    Ny.pp = Qy.g;
    Ny.nk = !1;
    Ny.load = function(a, b, c, d) {
        a = void 0 === a ? !1 : a;
        d = void 0 === d ? !1 : d;
        Rr(b || Ny.Vl, Oy);
        a || (Rr(c || Ny.gm, Py), Ny.nk = !0);
        d && Rr(Ny.Pl, Qy)
    };
    Ny.cp = function() {
        var a = Ny.ai.replace(/cast_receiver_framework(_debug|_dogfood)?\.js/, "cast_receiver_framework$1_vast_module.js");
        if (a === Ny.ai) throw Error("Fail to calculate VAST lib URL");
        var b = We();
        Rr(a, b);
        return b.g.then(function() {
            if (cast.Ck !== cast.Dk) return _.G(Qr, "Wrong version of VAST module is loaded."), Qe("Wrong version of VAST module is loaded.")
        })
    };
    Ny.reset = function() {
        Oy = We();
        Py = We();
        Qy = We();
        Ny.Qj = Oy.g;
        Ny.$j = Py.g;
        Ny.Ps = We();
        Ny.pp = Qy.g
    };
    cast.B.common.Rd = Ny;
    cast.B.media.ak = {};
    cast.B.media.ak.wg = function(a) {
        switch (a.code) {
            case shaka.util.Error.Code.LOAD_INTERRUPTED:
                return 904;
            case shaka.util.Error.Code.LICENSE_REQUEST_FAILED:
                return 201;
            case shaka.util.Error.Code.NO_RECOGNIZED_KEY_SYSTEMS:
            case shaka.util.Error.Code.REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:
                return 202;
            case shaka.util.Error.Code.NO_PERIODS:
                return 421
        }
        switch (a.category) {
            case shaka.util.Error.Category.NETWORK:
                return 321;
            case shaka.util.Error.Category.TEXT:
                return 600;
            case shaka.util.Error.Category.MEDIA:
                return 100;
            case shaka.util.Error.Category.MANIFEST:
                return 420;
            case shaka.util.Error.Category.DRM:
                return 200
        }
        return 999
    };
    _.q(Sr, xr);
    _.h = Sr.prototype;
    _.h.zc = function() {
        return cast.B.common.ua.Bd.fm
    };
    _.h.Ee = function(a) {
        return xr.prototype.Ee.call(this, a + this.w)
    };
    _.h.isLiveStream = function() {
        this.na || (this.na = !!this.g && (this.g.isLive() || this.g.isInProgress()));
        return this.na
    };
    _.h.Uc = function() {
        return !!this.g && !this.g.isInProgress()
    };
    _.h.isLiveDone = function() {
        return !!this.g && !this.g.isLive() && !this.g.isInProgress()
    };
    _.h.bb = function() {
        var a = this.g.seekRange();
        return a ? new So(a.start, a.end) : null
    };
    _.h.dg = function() {
        var a = this.g.getStats();
        return {
            height: a.height,
            estimatedBandwidth: a.estimatedBandwidth,
            streamBandwidth: a.streamBandwidth,
            width: a.width
        }
    };
    _.h.getLiveSeekableRange = function() {
        if (!this.isLiveStream()) return null;
        var a = this.bb();
        if (!a || "number" !== typeof a.start || "number" !== typeof a.end) return null;
        this.w || (this.w = a.start);
        var b = this.Uc(),
            c = this.isLiveDone();
        return new qp(a.start - this.w, a.end - this.w, b, c)
    };
    _.h.getCurrentTimeSec = function() {
        var a = xr.prototype.getCurrentTimeSec.call(this);
        if (6 != this.o && this.isLiveStream() && a) {
            if (!this.w) return 0;
            a -= this.w
        }
        return a
    };
    _.h.Sd = function(a, b) {
        var c = this;
        _.I(Tr, "load: " + this.h.startTime);
        if (a.autoplay = b) this.Y = (0, _.M)();
        this.g = new this.I.Player(a);
        this.g.addEventListener("error", function(d) {
            bs(c, d.detail)
        });
        this.g.addEventListener("adaptation", this.Mi.bind(this));
        this.g.addEventListener("emsg", function(d) {
            yr(c, new Lq(d.detail))
        });
        this.g.addEventListener("buffering", function() {
            c.N || c.pc(c.g.isBuffering())
        });
        Zr(this);
        this.U = We();
        this.N = !0;
        this.g.load(this.Ca.url, this.h.startTime).then(function() {
            return c.U.g
        }).then(function() {
            c.N = !1;
            fs(c)
        }).catch(function(d) {
            c.N = !1;
            bs(c, d)
        });
        cs(this, a)
    };
    _.h.Vc = function(a) {
        a && xr.prototype.Vc.call(this, a)
    };
    _.h.Mi = function() {
        var a = this.da;
        this.da = this.g.getVariantTracks().reduce(function(b, c) {
            return c.active ? b + c.bandwidth : b
        }, 0);
        a !== this.da && yr(this, new Kq(this.da))
    };
    _.h.pc = function(a) {
        xr.prototype.pc.call(this, a);
        this.isBuffering() && this.G ? (this.Ci(), this.za || (this.W = (0, _.M)(), B("Cast.Shaka.PlayTimeBeforeAutoPause", (0, _.M)() - this.G)), this.G = null) : this.isBuffering() || this.G || (this.za = !1, this.G = (0, _.M)(), this.W && (B("Cast.Shaka.AutoPauseTime", this.G - this.W), this.W = null), this.Y && (B("Cast.Shaka.AutoplayStartupLatency", this.G - this.Y), this.Y = null), this.Z && (B("Cast.Shaka.PlayLatency", this.G - this.Z), this.Z = null))
    };
    _.h.Tm = function() {
        this.U && this.U.resolve()
    };
    _.h.getDurationSec = function() {
        return this.isLiveStream() ? -1 : xr.prototype.getDurationSec.call(this)
    };
    _.h.Ci = function() {
        hd("Cast.Shaka.Pause")
    };
    _.h.Um = function() {
        this.Z = (0, _.M)();
        this.w || (this.w = this.g.seekRange().start);
        if (this.pa) {
            var a = this.h.startTime + this.w,
                b = this.g.seekRange();
            a < b.start ? (_.H(Tr, "Start time is out of seek range, jump to the seek start point."), a = b.start) : a > b.end && (_.H(Tr, "Start time is out of seek range, jump to live."), a = b.end);
            this.mediaElement.currentTime = a;
            this.pa = !1
        }
    };
    _.h.Tp = function() {
        hd("Cast.Shaka.Playing")
    };
    _.h.Jj = function() {
        hd("Cast.Shaka.Ended")
    };
    _.h.Gd = function() {
        var a = this;
        this.g ? this.g.destroy().then(function() {
            a.A.resolve()
        }) : this.A.resolve()
    };
    var Tr = _.F("cast.framework.media.ShakaPlayer"),
        Wr = {
            maxAttempts: 4,
            baseDelay: 400,
            backoffFactor: 2
        },
        Ry = {},
        as = (Ry.clearkey = "org.w3.clearkey", Ry.playready = "com.chromecast.playready", Ry.widevine = "com.widevine.alpha", Ry);
    _.q(hs, dr);
    _.h = hs.prototype;
    _.h.ne = function(a) {
        hr(this, a.tracksInfo);
        a = js(this.g.getVariantTracks());
        var b = this.g.getTextTracks(),
            c = [];
        c = c.concat(a);
        c = c.concat(b);
        a = _.p(c);
        for (b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var d = "variant" === b.type ? "AUDIO" : b.type.toUpperCase();
            c = "variant" === b.type ? b.audioCodec ? b.audioCodec : void 0 : b.mimeType ? b.mimeType : void 0;
            var e = b.kind ? b.kind.toUpperCase() : void 0,
                f = "variant" === b.type ? b.audioRoles : b.roles;
            null === f && (f = void 0);
            var g = er(this, {
                type: d,
                language: b.language,
                trackContentType: c,
                subtype: e,
                roles: f
            });
            g ? d = g : (d = this.Xc(d), d.language = b.language, d.trackContentType = c, d.subtype = e, d.roles = f, fr(this, [d]));
            "AUDIO" == d.type ? this.D.set(d.trackId, b.audioId) : this.D.set(d.trackId, b.id)
        }
    };
    _.h.Zc = function(a) {
        var b = this;
        if (a && 0 !== a.length) {
            a = a.map(function(e) {
                return b.D.get(e)
            });
            for (var c = _.p(this.g.getTextTracks()), d = c.next(); !d.done; d = c.next()) d = d.value, a.includes(d.id) && this.g.selectTextTrack(d);
            this.g.setTextTrackVisibility(!0)
        } else this.g.setTextTrackVisibility(!1)
    };
    _.h.ud = function(a, b) {
        if (null !== b) {
            var c = null;
            null !== a && (c = this.D.get(a));
            var d = this.D.get(b);
            if (c !== d) {
                a = this.g.getVariantTracks();
                var e = a.find(function(f) {
                    return f.active
                }).videoId;
                (a = a.find(function(f) {
                    return f.audioId === d && f.videoId === e
                })) ? (a.language ? this.g.selectAudioLanguage(a.language) : (this.g.configure({
                    abr: {
                        enabled: !1
                    }
                }), this.g.selectVariantTrack(a, !0)), this.H && this.H()) : _.G(Sy, "cannot find matching shaka variant track")
            }
        }
    };
    _.h.vg = function() {
        for (var a = -1, b = _.p(js(this.g.getVariantTracks())), c = b.next(); !c.done; c = b.next())
            if (c = c.value, c.primary) {
                a = c.audioId;
                break
            }
        b = null;
        c = _.p(this.D);
        for (var d = c.next(); !d.done; d = c.next()) {
            d = _.p(d.value);
            var e = d.next().value;
            if (d.next().value === a) {
                b = e;
                break
            }
        }
        0 > b && _.G(Sy, "cannot find default shaka audio track");
        return b
    };
    _.h.ha = function() {
        this.H = null;
        dr.prototype.ha.call(this)
    };
    var Sy = _.F("cast.framework.media.ShakaTracksManager");
    _.q(ks, xr);
    ks.prototype.Sd = function(a, b) {
        _.I(Ty, "loadContent: autoplay = " + b + ", initial_time = " + this.h.startTime);
        ls(this, a);
        a.src = this.h.url;
        a.autoplay = b
    };
    ks.prototype.g = function(a) {
        var b = this.h.startTime || 0;
        0 > b && (b += a.duration);
        0 <= b && b != a.currentTime && (a.currentTime = b);
        Br(this)
    };
    ks.prototype.zc = function() {
        return cast.B.common.ua.Bd.km
    };
    var Ty = _.F("cast.framework.media.SimplePlayer");
    _.q(ms, dr);
    ms.prototype.ne = function(a) {
        hr(this, a.tracksInfo);
        a = "AUDIO" == this.player.getMediaCategory() ? "AUDIO" : "VIDEO";
        er(this, {
            type: a
        }) || (a = this.Xc(a), fr(this, [a]))
    };
    cast.B.media.Tb = {};
    cast.B.media.Tb.kn = function(a) {
        var b = a.getStreamCount(),
            c = 0;
        fa();
        na();
        var d = {};
        return d[Symbol.iterator] = function() {
            return {
                next: function() {
                    return c < b ? {
                        done: !1,
                        value: a.getStreamInfo(c++)
                    } : {
                        done: !0
                    }
                }
            }
        }, d
    };
    cast.B.media.Tb.wg = function(a) {
        switch (a) {
            case cast.player.api.ErrorCode.PLAYBACK:
                return 100;
            case cast.player.api.ErrorCode.MEDIAKEYS:
                return 200;
            case cast.player.api.ErrorCode.NETWORK:
                return 300;
            case cast.player.api.ErrorCode.MANIFEST:
                return 400;
            default:
                return _.Wa("Cannot reach"), 999
        }
    };
    cast.B.media.Tb.qo = function(a) {
        switch (a) {
            case "aac":
                return cast.player.api.HlsSegmentFormat.MPEG_AUDIO_ES;
            case "ac3":
                return cast.player.api.HlsSegmentFormat.PACKED_AUDIO_AC3;
            case "mp3":
                return cast.player.api.HlsSegmentFormat.MPEG_LAYER_3;
            case "ts":
                return cast.player.api.HlsSegmentFormat.MPEG2_TS;
            case "ts_aac":
                return cast.player.api.HlsSegmentFormat.TS_AAC;
            case "e_ac3":
                return cast.player.api.HlsSegmentFormat.PACKED_AUDIO_E_AC3;
            case "fmp4":
                return cast.player.api.HlsSegmentFormat.FMP4
        }
    };
    cast.B.media.Tb.ro = function(a) {
        switch (a) {
            case "mpeg2_ts":
                return cast.player.api.HlsVideoSegmentFormat.MPEG2_TS;
            case "fmp4":
                return cast.player.api.HlsVideoSegmentFormat.FMP4
        }
    };
    cast.B.media.Tb.Bs = function(a) {
        switch (a) {
            case "application/x-mpegurl":
            case "application/vnd.apple.mpegurl":
                return cast.player.api.StreamingProtocolType.HLS;
            case "application/vnd.ms-sstr+xml":
                return cast.player.api.StreamingProtocolType.SMOOTH_STREAMING;
            case "application/dash+xml":
                return cast.player.api.StreamingProtocolType.MPEG_DASH;
            default:
                _.Wa("Not supported mimeType " + a)
        }
        return cast.player.api.StreamingProtocolType.UNKNOWN
    };
    _.q(ss, xr);
    _.h = ss.prototype;
    _.h.zc = function() {
        return cast.B.common.ua.Bd.rm
    };
    _.h.Sd = function(a, b) {
        _.I(us, "load: " + this.h.startTime);
        vs(this);
        this.w.mediaElement = a;
        a.autoplay = b;
        2 == this.o ? this.G.load() : this.G.load(this.g, this.h.startTime);
        Er(this, a, "loadedmetadata", this.Vm.bind(this, a))
    };
    _.h.zh = function() {
        vs(this);
        this.G.preload(this.g, this.h.startTime);
        this.o = 2
    };
    _.h.Cp = function(a, b) {
        a = cast.B.media.Tb.wg(a);
        zr(this, a, {
            requestStatus: b
        })
    };
    _.h.xp = function() {};
    _.h.Wm = function(a, b, c) {
        yr(this, new Zq(b, c))
    };
    _.h.dg = function() {
        return {
            streamBandwidth: this.I
        }
    };
    _.h.Bo = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = b,
            f = this.h.playbackConfig.mplConfig || {};
        f.getQualityLevel && (e = f.getQualityLevel(a, b, void 0 === c ? b : c, d));
        b = this.I;
        for (d = c = 0; d < this.g.getStreamCount(); d++)
            if (this.g.isStreamEnabled(d) && !wc(this.g.getStreamInfo(d).mimeType)) {
                f = d === a ? e : this.g.getQualityLevel(d);
                if (0 > f) return e;
                c += this.g.getStreamInfo(d).bitrates[f]
            }
        this.I = c;
        b !== this.I && yr(this, new Kq(this.I));
        return e
    };
    _.h.getDurationSec = function() {
        return this.g ? this.g.getDuration() : 0
    };
    _.h.isLiveStream = function() {
        return !!(this.g && this.g.isLiveStream && this.g.isLiveStream())
    };
    _.h.Uc = function() {
        return this.g.isLiveSeekableRangeMovingWindow && this.g.isLiveSeekableRangeMovingWindow()
    };
    _.h.isLiveDone = function() {
        return this.g.isLiveDone && this.g.isLiveDone()
    };
    _.h.bb = function() {
        var a = this.G.getState(cast.player.api.Player.State.SEEKABLE);
        return a && a.seekable ? new So(a.seekable.start, a.seekable.end) : null
    };
    _.h.getLiveSeekableRange = function() {
        if (!this.isLiveStream()) return null;
        var a = this.bb(),
            b = this.Uc(),
            c = this.isLiveDone();
        return a ? new qp(a.start, a.end, b, c) : null
    };
    _.h.Vm = function() {
        var a = this,
            b = _.J();
        if (this.isLiveStream() && void 0 === this.h.startTime) {
            var c = this.bb();
            c && c.end && (b = this.seek(c.end))
        }
        if (0 > this.h.startTime) {
            c = this.h.startTime;
            if (this.isLiveStream()) {
                var d = this.bb();
                d && d.end && (c += d.end)
            } else c += this.getDurationSec();
            0 < c && 1 < Math.abs(c - this.getCurrentTimeSec()) && (b = this.seek(c))
        }
        b.then(function() {
            return Br(a)
        })
    };
    _.h.Gd = function() {
        this.G.unload();
        this.A.resolve()
    };
    var us = _.F("cast.framework.media.StreamingPlayer");
    _.q(xs, dr);
    _.h = xs.prototype;
    _.h.ne = function(a) {
        hr(this, a.tracksInfo);
        var b = cast.B.media.Tb.kn(this.H);
        a = 0;
        b = _.p(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = c.mimeType;
            if (d) {
                var e;
                var f = d;
                var g = c.codecs;
                f = f.toLowerCase();
                wc(f) || "application/mp4" == f && "stpp" == g ? f = "TEXT" : (!(e = xb(f, "audio/")) && (e = g) && (g = g.toLowerCase(), e = !g.includes(",") && !!g.match(/^(mp4a|[ae]c-3)/)), f = e ? "AUDIO" : xb(f, "video/") ? "VIDEO" : null);
                f && ("TEXT" == f && (d = Bs(d, c.codecs)), (g = er(this, {
                        type: f,
                        name: c.name,
                        language: c.language,
                        trackContentType: d
                    })) ? f =
                    g : (f = this.Xc(f), f.name = c.name, f.language = c.language, f.trackContentType = d, c.hlsMediaInfo && (f.forced = c.hlsMediaInfo.forced, f.assocLanguage = c.hlsMediaInfo.assocLanguage), fr(this, [f])), this.D.set(f.trackId, a), a++)
            }
        }
    };
    _.h.ud = function(a, b) {
        var c = -1,
            d = -1,
            e = this.H;
        null == a ? c = e.getDefaultAudioStreamIndex() : -1 < a && (c = this.D.get(a));
        null == b ? d = e.getDefaultAudioStreamIndex() : -1 < b && (d = this.D.get(b));
        c != d && (e.enableStream(c, !1), e.enableStream(d, !0), this.g.onAudioChanged())
    };
    _.h.vg = function() {
        for (var a = this.H.getDefaultAudioStreamIndex(), b = null, c = _.p(this.D), d = c.next(); !d.done; d = c.next()) {
            d = _.p(d.value);
            var e = d.next().value;
            if (d.next().value === a) {
                b = e;
                break
            }
        }
        return b
    };
    _.h.Vj = function(a, b, c, d, e) {
        1 < c.length + (null == d ? 0 : 1) && (_.H(As, "Can only enable one track. Will enable track " + c[0]), c = [c[0]], d = null);
        kr(this, b, c.concat(null != d ? d : [], e));
        null == d ? (mr(this, d, this.ignoreTtmlPositionInfo), this.Zc(c)) : (this.Zc(c), mr(this, d, this.ignoreTtmlPositionInfo));
        null != b && this.ud(a, b)
    };
    _.h.Zc = function(a) {
        var b = 0 == a.length ? null : a[0];
        a = null != b ? this.D.get(b) : void 0;
        for (var c = !1, d = this.H, e = d.getStreamCount(), f = void 0 === a, g = 0; g < e; g++) {
            var k = d.getStreamInfo(g).mimeType;
            k && wc(k) && (g == a ? "text/mp2t" == k ? this.g.enableCaptions(!0, cast.player.api.CaptionsType.CEA608) : (f = !0, d.isStreamEnabled(g) || (d.enableStream(g, !0), c = !0)) : g !== a && d.isStreamEnabled(g) && (d.enableStream(g, !1), c = !0))
        }
        null != b && void 0 == a && this.tracks.find(function(l) {
            return l.trackId == b && "text/cea608" == l.trackContentType
        }) ? this.g.enableCaptions(!0,
            cast.player.api.CaptionsType.CEA608) : f && this.g.enableCaptions(!1, cast.player.api.CaptionsType.CEA608);
        c && this.g.enableCaptions(!0)
    };
    _.h.pb = function(a) {
        dr.prototype.pb.call(this, a);
        var b = [];
        void 0 !== a.foregroundColor && b.push("color");
        void 0 !== a.backgroundColor && b.push("background-color");
        void 0 !== a.fontScale && b.push("font-size");
        void 0 === a.fontGenericFamily && void 0 === a.fontFamily || b.push("font-family");
        void 0 !== a.fontStyle && b.push("font-weight");
        void 0 !== a.edgeType && b.push("text-shadow");
        a: {
            var c = Uy,
                d;
            for (d in a)
                if (!(d in c) || a[d] !== c[d]) {
                    a = !1;
                    break a
                }
            for (var e in c)
                if (!(e in a)) {
                    a = !1;
                    break a
                }
            a = !0
        }
        a && (b = []);
        this.g.setSenderTrackStyles &&
            this.g.setSenderTrackStyles(b)
    };
    var Uy = {
            foregroundColor: "#FFFFFFFF",
            backgroundColor: "#00000000",
            fontFamily: "Helvetica",
            fontScale: 1,
            windowColor: "#00000080",
            windowRoundedCornerRadius: 8,
            windowType: "ROUNDED_CORNERS",
            fontStyle: "NORMAL",
            fontGenericFamily: "SANS_SERIF",
            customData: void 0,
            edgeColor: void 0,
            edgeType: void 0
        },
        As = _.F("cast.framework.media.StreamingTracksManager");
    var Gs = _.F("cast.framework.media.BasePlayerFactory");
    _.Ga(Cs);
    cast.B.breaks = {};
    _.v("cast.framework.breaks.BreakSeekData", Hs, void 0);
    _.v("cast.framework.breaks.BreakClipLoadInterceptorContext", Is, void 0);
    _.h = Ms.prototype;
    _.h.$c = function() {
        return Array.from(this.o.values())
    };
    _.h.Ld = function(a) {
        return this.o.get(a) || null
    };
    _.h.xc = function() {
        return Array.from(this.w.values())
    };
    _.h.tb = function(a) {
        return this.w.get(a) || null
    };
    _.h.Ed = function(a, b) {
        var c = this;
        if (!Os(this, a, b)) return !1;
        b.forEach(function(d) {
            c.w.set(d.id, d)
        });
        this.o.set(a.id, a);
        B("Cast.CAF.DynamicBreakAdded", a.duration || 0);
        Ks(this);
        return !0
    };
    _.h.Eh = function(a) {
        var b = this,
            c = this.o.get(a);
        if (!c) return _.G(Ns, "Unknown break id " + a), !1;
        this.o.delete(c.id);
        c.breakClipIds.forEach(function(d) {
            return b.w.delete(d)
        });
        hd("Cast.CAF.DynamicBreakRemoved");
        Ks(this);
        return !0
    };
    _.h.Ib = function() {
        if (this.g) return this.g.duration || null;
        var a = this.h.g;
        return a ? a.Ib() : null
    };
    _.h.Xa = function() {
        if (this.g) return this.h.getCurrentTimeSec() - this.C;
        var a = this.h.g;
        return a ? a.Xa() : null
    };
    var Ns = _.F("cast.framework.media.DynamicBreaksManager");
    cast.B.breaks.Rk = Ms;
    _.h = Qs.prototype;
    _.h.Bb = function(a) {
        this.A = a;
        this.h && this.h.Wj(a)
    };
    _.h.reset = function() {
        this.l = null;
        this.h && this.h.reset()
    };
    _.h.$c = function() {
        var a = [];
        this.g && (a = this.g.$c());
        this.l && (a = a.concat(this.l.g));
        return a
    };
    _.h.Ld = function(a) {
        var b = null;
        this.g && (b = this.g.Ld(a));
        !b && this.l && (b = this.l.Ld(a));
        return b
    };
    _.h.xc = function() {
        var a = [];
        this.g && (a = this.g.xc());
        this.l && (a = a.concat(this.l.xc()));
        return a
    };
    _.h.tb = function(a) {
        var b = null;
        this.g && (b = this.g.tb(a));
        !b && this.l && (b = this.l.tb(a));
        return b
    };
    _.h.Ed = function(a, b) {
        return this.g.Ed(a, b)
    };
    _.h.Eh = function(a) {
        return this.g.Eh(a)
    };
    _.h.Ib = function() {
        return this.g.Ib()
    };
    _.h.Xa = function() {
        return this.g.Xa()
    };
    _.h.tq = function(a) {
        a && Us(a);
        this.H = a || this.Ki.bind(this)
    };
    _.h.Ki = function(a) {
        var b = this,
            c = a.seekFrom > a.seekTo,
            d = a.breaks.reverse().find(function(e) {
                return !e.isWatched || b.o
            });
        a.breaks = c || !d ? [] : [d];
        return a
    };
    _.h.sq = function(a) {
        a && Us(a);
        this.D = a || this.Ji.bind(this)
    };
    _.h.Ji = function(a) {
        return a
    };
    _.h.Pf = function(a) {
        this.o = a
    };
    _.h.vo = function() {
        return this.o
    };
    _.h.Qf = function(a) {
        null === a || _.z(a) ? (this.G = a, this.h && this.h.Qf(a)) : _.G(Ts, "setVastTrackingInterceptor failed since handler is not a function")
    };
    _.h.qp = function(a) {
        a = this.tb(a.breakClipId);
        this.h.$o(a) && this.h.Pm(a)
    };
    _.v("cast.framework.breaks.BreakManager", Qs, void 0);
    Qs.prototype.setVastTrackingInterceptor = Qs.prototype.Qf;
    Qs.prototype.getPlayWatchedBreak = Qs.prototype.vo;
    Qs.prototype.setPlayWatchedBreak = Qs.prototype.Pf;
    Qs.prototype.setBreakClipLoadInterceptor = Qs.prototype.sq;
    Qs.prototype.setBreakSeekInterceptor = Qs.prototype.tq;
    Qs.prototype.getBreakClipCurrentTimeSec = Qs.prototype.Xa;
    Qs.prototype.getBreakClipDurationSec = Qs.prototype.Ib;
    Qs.prototype.removeBreakById = Qs.prototype.Eh;
    Qs.prototype.addBreak = Qs.prototype.Ed;
    Qs.prototype.getBreakClipById = Qs.prototype.tb;
    Qs.prototype.getBreakClips = Qs.prototype.xc;
    Qs.prototype.getBreakById = Qs.prototype.Ld;
    Qs.prototype.getBreaks = Qs.prototype.$c;
    var Ts = _.F("cast.framework.breaks.BreakManager");
    cast.B.timeline = {};
    at.prototype.getPosition = function() {
        return this.h.position
    };
    var gt = _.F("cast.framework.timeline.Timeline");
    _.h = et.prototype;
    _.h.Ed = function(a) {
        if (ht(this, a))
            if (0 > a.position) 0 == this.g.length || 0 <= this.g[this.g.length - 1].position ? this.g.push(a) : this.g[this.g.length - 1].breakClipIds.push.apply(this.g[this.g.length - 1].breakClipIds, _.oa(a.breakClipIds));
            else {
                for (var b = 0; b < this.g.length; b++) {
                    var c = this.g[b];
                    if (c.position == a.position) {
                        c.breakClipIds.push.apply(c.breakClipIds, _.oa(a.breakClipIds));
                        return
                    }
                    if (c.position > a.position || 0 > c.position) {
                        this.g.splice(b, 0, a);
                        return
                    }
                }
                this.g.push(a)
            }
    };
    _.h.tb = function(a) {
        return this.l.get(a)
    };
    _.h.xc = function() {
        return Array.from(this.l.values())
    };
    _.h.Ld = function(a) {
        return this.g.find(function(b) {
            return a == b.id
        }) || null
    };
    _.h.kg = function() {
        _.Wa("Should be implemented")
    };
    _.h.Qe = function() {
        _.Wa("Should be implemented")
    };
    _.h.tg = function() {
        _.Wa("Should be implemented")
    };
    var Vy = _.F("cast.framework.timeline.EmbeddedTimeline");
    nt.prototype.cache = function(a, b, c) {
        this.g = a;
        this.l = b;
        this.h = c
    };
    _.q(qt, et);
    qt.prototype.Qe = function(a) {
        if (this.h) return this.h.seekTo;
        var b = this.o.slice(0).reverse().find(function(c) {
            return c.g <= a
        });
        return b ? b.l + Math.max(0, a - b.h) : a
    };
    qt.prototype.kg = function(a, b) {
        var c = tt(this, b),
            d = 0,
            e = 0;
        c ? (d = b - c.A, e = b - c.g) : _.I(Vy, "No matching break for break status, aassuming beginning of break.");
        b = new Ic(d, e);
        bt(a, b);
        return b
    };
    qt.prototype.tg = function(a) {
        var b = tt(this, a);
        return b ? a - b.g : null
    };
    _.h = zt.prototype;
    _.h.Xq = function() {
        null != this.Z && B("Cast.CAF.VideoToAdLatency", (0, _.M)() - this.Z)
    };
    _.h.Wq = function() {
        this.U = (0, _.M)()
    };
    _.h.$q = function() {
        null != this.U && (B("Cast.CAF.AdToVideoLatency", (0, _.M)() - this.U), this.U = null)
    };
    _.h.Zq = function() {
        this.Z = (0, _.M)()
    };
    _.h.load = function() {};
    _.h.reset = function(a) {
        _.I(At, "reset()");
        this.end(a && Wy[a] || "STOPPED")
    };
    _.h.getVolume = function() {
        var a = new Bc;
        a.level = this.mediaElement.volume;
        a.muted = this.mediaElement.muted;
        return a
    };
    _.h.setVolume = function(a) {
        void 0 !== a.level && (this.mediaElement.volume = a.level);
        void 0 !== a.muted && (this.mediaElement.muted = a.muted)
    };
    _.h.getDurationSec = function() {
        return this.O
    };
    _.h.getCurrentTimeSec = function() {
        return this.Pe()
    };
    _.h.editTracksInfo = function(a) {
        return this.g ? Cr(this.g, cast.B.L.Si(a)) : (_.G(At, "Can not edit tracks info, player is not available"), [])
    };
    _.h.registerErrorCallback = function(a) {
        this.I = a
    };
    _.h.registerEndedCallback = function(a) {
        this.da = a
    };
    _.h.registerLoadCallback = function(a) {
        this.na = a
    };
    _.h.unregisterErrorCallback = function() {
        this.I = _.w
    };
    _.h.unregisterEndedCallback = function() {
        this.da = _.w
    };
    _.h.unregisterLoadCallback = function() {
        this.na = _.w
    };
    _.h.pause = function() {
        if (!this.g) return _.G(At, "Can not pause, player is not available"), _.J();
        _.qe(At, "pause");
        return this.g.pause()
    };
    _.h.play = function() {
        if (!this.g) return _.G(At, "Can not play, player is not available"), _.J();
        _.qe(At, "play");
        return this.g.play()
    };
    _.h.Sh = function() {
        return Qe("NOT_SUPPORTED")
    };
    _.h.bh = function() {
        _.H(At, "Seek Not implemented");
        return Qe("NOT_SUPPORTED")
    };
    _.h.seek = function(a, b) {
        var c = this;
        if (this.isPlayingBreak) return _.H(At, "seek request during break was ignored."), Qe("INVALID_REQUEST");
        0 > a && (_.I(At, "Invalid seek value - " + a), a = 0);
        return this.R ? (_.H(At, "seek request before previous seek was finished was ignored."), Qe("INVALID_REQUEST")) : this.R = Ye(this.bh(a, b), function() {
            c.R = null
        })
    };
    _.h.getState = function() {
        switch (this.A) {
            case 1:
            case 2:
                return "BUFFERING";
            case 3:
            case 4:
                return this.g ? cast.B.L.Sq(this.g.eg()) : "PLAYING";
            case 5:
            case 6:
                return "IDLE";
            default:
                return _.Wa(), "IDLE"
        }
    };
    _.h.isLiveStream = function() {
        return this.g ? this.g.isLiveStream() : !1
    };
    _.h.getLiveSeekableRange = function() {
        return this.g ? this.g.getLiveSeekableRange() : null
    };
    _.h.bb = function() {
        return this.g ? this.g.bb() : null
    };
    _.h.getMediaCategory = function() {
        return this.g ? this.g.getMediaCategory() : null
    };
    _.h.Jc = function() {
        this.Ah()
    };
    _.h.Ib = function() {
        return this.h ? this.h.g.duration || null : null
    };
    _.h.Xa = function() {
        return this.h ? this.timeline.tg(Ft(this)) : null
    };
    _.h.getPlaybackRate = function() {
        return this.g ? this.g.getPlaybackRate() : 1
    };
    _.h.Pe = function() {
        var a = Ft(this);
        return this.timeline.Qe(a)
    };
    _.h.Ag = function() {
        return this.g ? this.g.getDurationSec() : 0
    };
    _.h.Ac = function() {
        return this.Na
    };
    _.h.af = function() {
        if (!this.g) return !1;
        var a = this.g.getBufferedRanges();
        if (1 > a.length) return !1;
        var b = a.length - 1,
            c = a[b].end;
        return a[b].start <= Ft(this) && c >= this.Ag()
    };
    _.h.eh = function(a) {
        if (a.media) {
            var b = a.media;
            b.breakClips = cast.B.L.Kq(this.timeline.xc() || void 0);
            b.breaks = cast.B.L.Jq(this.timeline.g || void 0)
        }
        a.currentTime = this.Pe();
        a.liveSeekableRange = cast.B.L.hk(this.getLiveSeekableRange()) || void 0;
        this.h ? (a.playbackRate = 0, a.supportedMediaCommands &= -3, Bt(this) && (a.supportedMediaCommands |= 512), b = this.timeline.kg(this.h, Ft(this)), a.breakStatus = b) : 0 < this.Ca.$c().length && (a.breakStatus = new Ic(void 0, void 0))
    };
    _.h.end = function(a) {
        var b = this;
        if (6 == this.A) return this.H.g;
        void 0 === this.D && (this.D = this.getCurrentTimeSec());
        var c = this.A;
        this.A = 6;
        this.I = _.w;
        this.wj(a);
        this.isPlayingBreak && Kt(this, "BREAK_ENDED", null, a);
        return this.H.g.then(function() {
            "END_OF_STREAM" !== a && "SKIPPED" !== a || b.da();
            5 > c && b.va.dispatchEvent(new Sq(b.D, a));
            b.va.ga()
        })
    };
    _.h.wj = function(a) {
        var b = this;
        _.I(At, "endInternal()");
        this.g ? (this.g.end(a).then(function() {
            b.H.resolve()
        }), this.g = null) : this.H.resolve()
    };
    _.h.Ug = function() {
        _.Wa("This should be implemented");
        return Qe("INVALID_COMMAND")
    };
    _.h.Ah = function() {};
    _.h.xf = function(a) {
        _.I(At, "player event: error");
        this.W || (this.W = !0, this.I(a))
    };
    _.h.$d = function() {
        var a = Bt(this);
        a != this.N && (this.N = a, It(this))
    };
    _.h.ah = function(a) {
        if (this.g) return Dr(this.g, a) || void 0;
        _.G(At, "Can not edit audio track, player is not available")
    };
    _.h.setPlaybackRate = function(a) {
        return this.g ? this.g.setPlaybackRate(a) : (_.G(At, "Can not set playback rate, player is not available"), _.J())
    };
    _.h.ma = function() {
        return this.g && this.g.l
    };
    var At = _.F("cast.framework.media.Player"),
        Xy = {},
        Wy = (Xy.CANCELLED = "STOPPED", Xy.INTERRUPTED = "INTERRUPTED", Xy.FINISHED = "END_OF_STREAM", Xy.ERROR = "ERROR", Xy);
    cast.B.media.Player = zt;
    _.q(Pt, cast.B.media.Player);
    _.h = Pt.prototype;
    _.h.Ug = function(a) {
        var b = this;
        return (this.C || Qt(this)).then(function(c) {
            b.g = c;
            Nt(b);
            Lt(b, "CLIP_STARTED", b.Sm);
            Lt(b, "CLIP_ENDED", b.Rm);
            return c.De(b.mediaElement, a)
        })
    };
    _.h.Ah = function() {
        this.C = Qt(this).then(function(a) {
            a.Jc();
            return a
        })
    };
    _.h.bh = function(a, b) {
        function c() {
            return d.g.seek(rt(e, a), b)
        }
        var d = this;
        if (this.l) return _.H(Yy, "Seek is in progress, new seek is ignored."), _.J();
        _.I(Yy, "seek: " + a);
        var e = this.timeline;
        return Ot(this, a).then(function(f) {
            if (f && (a = f.seekTo, f.breaks && 0 < f.breaks.length)) {
                var g = jt(e, f);
                if (0 < g.breakClipIds.length) {
                    for (var k = [], l = 0, m = _.p(f.breaks), n = m.next(); !n.done; n = m.next()) {
                        n = n.value;
                        for (var u = _.p(n.breakClipIds), r = u.next(); !r.done; r = u.next()) {
                            r = r.value;
                            var x = e.H.get(n.id + "___" + r);
                            x ? (k.push(new pt(g,
                                x.breakClip, x.l, x.A, x.g, x.h, l)), l++) : _.G(Vy, "Invalid break id and break clip id combination in BreakSeekData. break id = " + (n.id + "; break clip id = ") + r)
                        }
                    }
                    e.h = new mt(g, k, f.seekTo);
                    d.l = We();
                    d.o = d.l.g.then(c);
                    return Rt(d)
                }
            }
            _.I(Yy, "No seek break.");
            return c()
        })
    };
    _.h.Sh = function() {
        var a = Ft(this);
        return this.g.seek(xt(this.timeline, a), "PLAYBACK_START")
    };
    _.h.$d = function(a) {
        Rt(this);
        cast.B.media.Player.prototype.$d.call(this, a)
    };
    _.h.Sm = function() {
        _.I(Yy, "started");
        Jt(this)
    };
    _.h.Rm = function(a) {
        _.I(Yy, "ended");
        5 > this.A && (Kt(this, "BREAK_ENDED", null, a.endedReason), this.g = null, this.D = a.currentMediaTime, this.end(a.endedReason))
    };
    var Yy = _.F("cast.framework.media.EmbeddedPlayer");
    St.prototype.isPlayingBreak = function() {
        return null != this.breakStatus
    };
    _.q(Tt, et);
    Tt.prototype.kg = function(a, b) {
        for (var c = a.h, d = a.l, e = 0, f = 0; f < d; f++) {
            var g = this.tb(c.breakClipIds[f]);
            g && g.duration && (e += g.duration)
        }
        b = new Ic(e + b, b);
        bt(a, b);
        return b
    };
    Tt.prototype.tg = function(a) {
        return a
    };
    Tt.prototype.Qe = function(a) {
        return a
    };
    var Vt = _.F("cast.framework.timeline.StitchingTimeline");
    _.q($t, cast.B.media.Player);
    _.h = $t.prototype;
    _.h.setPlaybackRate = function(a) {
        this.wa = a || 1;
        return this.o.breakStatus ? _.J() : cast.B.media.Player.prototype.setPlaybackRate.call(this, a)
    };
    _.h.wj = function(a) {
        var b = this;
        _.I(bu, "endInternal()");
        var c = [];
        this.g && (Kt(this, "BREAK_ENDED", null, a), Mt(this, this.fh), c.push(this.g.end(a)), this.g = null);
        this.l && (this.l.cancel("Main video ends"), this.l = null);
        this.C && (c.push(this.C.then(function(d) {
            if (d) return d.end(a)
        })), this.C = null);
        Ue(c).then(function() {
            b.H.resolve()
        })
    };
    _.h.bh = function(a, b) {
        var c = this;
        _.I(bu, "seek: " + a);
        return $e(Ot(this, a).then(function(d) {
            if (d && (a = d.seekTo, d.breaks && 0 < d.breaks.length && (d = jt(c.timeline, d), 0 < d.breakClipIds.length))) return eu(c, d, a, b);
            _.I(bu, "No seek break.");
            return !1
        }), function() {
            _.I(bu, "Fail to create seek clip");
            return !1
        }).then(function(d) {
            if (!d) {
                d = a;
                if (d >= c.o.endTime || d < c.o.startTime) au(c), c.o.endTime = Wt(c.M, d), gu(c, c.o);
                c.o.startTime = d;
                c.g.seek(d, b)
            }
        })
    };
    _.h.Sh = function() {
        return this.g.end("SKIPPED")
    };
    _.h.Ah = function() {
        this.ka = Es(Cs.F(), this.w).then(function(a) {
            a.Jc();
            return a
        })
    };
    _.h.Ug = function(a) {
        var b = this,
            c = this.w.startTime || 0;
        return Xt(this.M, c, this.w).then(function(d) {
            if (d.breakStatus) {
                var e = ju(b),
                    f, g = cu(b, d).then(function(k) {
                        f = k;
                        k.Jc()
                    });
                b.G = c;
                Te([e, g]).then(function() {
                    return du(b, f, d, a)
                });
                return e
            }
            return (b.ka || cu(b, d)).then(function(k) {
                return du(b, k, d, a).then(function() {
                    iu(b, k)
                })
            })
        })
    };
    _.h.ma = function() {
        return this.la
    };
    _.h.editTracksInfo = function(a) {
        return this.h || !this.g ? null : Cr(this.g, cast.B.L.Si(a))
    };
    _.h.ah = function(a) {
        if (!this.h && this.g) return Dr(this.g, a) || void 0
    };
    _.h.Ag = function() {
        return this.pa
    };
    _.h.getMediaCategory = function() {
        return this.sa
    };
    _.h.Pe = function() {
        return null !== this.G ? this.G : Ft(this)
    };
    _.h.af = function() {
        return this.l ? !1 : cast.B.media.Player.prototype.af.call(this)
    };
    _.h.up = function() {
        _.I(bu, "clip started");
        4 > this.A && Jt(this);
        var a = this.o.breakStatus;
        if (a) {
            var b = this.g.getDurationSec();
            a.g.duration = b;
            this.ca = !0;
            Kt(this, "BREAK_CLIP_STARTED", a)
        } else this.G = null
    };
    _.h.fh = function(a) {
        var b = this;
        _.I(bu, "clip ended");
        this.K = a.endedReason;
        var c = null;
        this.o.breakStatus ? c = $e(_.J(this.l), function() {
            return null
        }).then(function(d) {
            d && d.breakStatus || (_.I(bu, "onClipEnded_: " + (d ? "Next clip is not a break clip" : "No next clip")), Kt(b, "BREAK_ENDED", null, b.K), b.K = void 0)
        }) : (this.G = this.g.getCurrentTimeSec(), this.g.ka && (this.za = this.g.ka || null));
        _.J(c).then(function() {
            return 5 > b.A ? hu(b) : !1
        }).then(function(d) {
            d && (_.I(bu, "breakList player ends since there is no more player to switch to"),
                b.g = null, b.D = a.currentMediaTime, b.end(a.endedReason))
        })
    };
    _.h.xf = function(a) {
        this.o.breakStatus ? _.I(bu, "player event: break clip error") : cast.B.media.Player.prototype.xf.call(this, a)
    };
    _.h.$d = function(a) {
        var b = this.g.getDurationSec();
        cast.B.media.Player.prototype.$d.call(this, a);
        a = Ft(this);
        var c = this.g.getBufferedRanges();
        if (1 <= c.length) {
            var d = c.length - 1,
                e = c[d].end;
            b = Math.min(this.o.endTime, b);
            c[d].start <= a && e >= b && this.Y.resolve()
        }
        a >= this.o.endTime && this.g.end("BREAK_SWITCH")
    };
    _.h.eh = function(a) {
        cast.B.media.Player.prototype.eh.call(this, a);
        this.h && (a.currentTime = this.h.getPosition())
    };
    var bu = _.F("StitchingPlayer");
    cast.B.media.sm = $t;
    _.h = Q.prototype;
    _.h.Yq = function(a) {
        ru(this);
        this.Y = a.isBuffering
    };
    _.h.getStats = function() {
        ru(this);
        var a = {};
        a.bufferingTime = this.na;
        a.playTime = this.wa;
        if (!this.Z) return a;
        Object.assign(a, su(this));
        if (!this.g) return a;
        Object.assign(a, Dt(this.g));
        return a
    };
    _.h.Wp = function() {
        hd("Cast.CAF.RequestPrecache")
    };
    _.h.Xj = function(a) {
        this.ca = a
    };
    _.h.wo = function() {
        return this.ca
    };
    _.h.yo = function() {
        return this.C
    };
    _.h.zo = function() {
        return this.M
    };
    _.h.Ao = function() {
        return this.U
    };
    _.h.oo = function() {
        return this.N
    };
    _.h.Eo = function() {
        return this.I
    };
    _.h.Co = function() {
        return this.W
    };
    _.h.po = function() {
        return this.D
    };
    _.h.Bp = function() {
        ru(this);
        this.Y = !1;
        this.g = null;
        this.da = !1;
        this.N.reset();
        this.I.reset();
        this.D.reset()
    };
    _.h.Up = function() {
        var a = this.g.getPlaybackRate();
        null === this.Xa() && this.C !== a && (this.C = a, a = this.g.getPlaybackRate(), this.l.A = a, this.ba(!1))
    };
    _.h.Zp = function(a) {
        this.O = a.credentials;
        return new ii
    };
    _.h.yp = function(a) {
        var b = new Vo;
        b.media = new Uo;
        b.autoplay = !0;
        b.media.entity = a.entity;
        this.O && (b.credentials = this.O, b.credentialsType = "cloud");
        if (void 0 != a.shuffle) {
            var c = new rp;
            c.repeatMode = a.shuffle ? "REPEAT_ALL_AND_SHUFFLE" : "REPEAT_OFF";
            b.queueData = c
        }
        b.loadOptions = cast.B.L.Vn(a.loadOptions);
        return this.load(b).then(function() {
            return new ii
        }, function(d) {
            var e = "APP_ERROR";
            d && d.reason && _.pb(ix, d.type) && (e = d.reason);
            return new ai(e)
        })
    };
    _.h.Nm = function(a) {
        B("Cast.CAF.Error", a.detailedErrorCode || 0)
    };
    _.h.addEventListener = function(a, b) {
        var c = this;
        if (!_.z(b)) throw _.G(nu, "addEventListener failed since handler is not a function"), Error("addEventListener failed since handler is not a function");
        _.Ia(a) ? a.forEach(function(d) {
            uu(c, d, b)
        }) : uu(this, a, b)
    };
    _.h.removeEventListener = function(a, b) {
        var c = this;
        _.Ia(a) ? a.forEach(function(d) {
            vu(c, d, b)
        }) : vu(this, a, b)
    };
    _.h.Nc = function(a, b) {
        var c = this,
            d = null;
        _.pb(Ay, a) ? null == b || _.z(b) || (d = "setMessageInterceptor(" + a + ") failed since handler is not a function") : d = "setMessageInterceptor(" + a + ") failed due to invalid request type";
        if (d) throw _.G(nu, d), Error(d);
        B("Cast.CAF.MessageInterceptorSet", cast.B.common.ua.uo(a));
        var e = b && yu(b);
        switch (a) {
            case "MEDIA_STATUS":
                this.pa = e;
                break;
            case "CLOUD_STATUS":
                this.K.g.then(function() {
                    return c.l.Na = e
                });
                break;
            case "GET_STATUS":
            case "LOAD":
            case "PAUSE":
            case "STOP":
            case "PLAY":
            case "PLAY_AGAIN":
            case "SEEK":
            case "SET_PLAYBACK_RATE":
            case "SET_VOLUME":
            case "SKIP_AD":
            case "EDIT_TRACKS_INFO":
            case "EDIT_AUDIO_TRACKS":
            case "PRECACHE":
            case "PRELOAD":
            case "QUEUE_LOAD":
            case "QUEUE_INSERT":
            case "QUEUE_UPDATE":
            case "QUEUE_REMOVE":
            case "QUEUE_REORDER":
            case "QUEUE_GET_ITEM_RANGE":
            case "QUEUE_GET_ITEMS":
            case "QUEUE_GET_ITEM_IDS":
            case "STORE_SESSION":
            case "RESUME_SESSION":
                b =
                    e && this.mr.bind(this, a, e);
                if ("LOAD" == a) {
                    d = yq(this.h, Zy.LOAD);
                    var f = yq(this.h, Zy.PRELOAD),
                        g = yq(this.h, Zy.PRECACHE);
                    f && f !== d || this.h.Nc(Zy.PRELOAD, b);
                    g && g !== d || this.h.Nc(Zy.PRECACHE, b)
                }
                this.h.Nc(Zy[a], b);
                break;
            case "SET_CREDENTIALS":
            case "LOAD_BY_ENTITY":
            case "DISPLAY_STATUS":
            case "FOCUS_STATE":
            case "CUSTOM_COMMAND":
                this.A.Nc(a, e && this.uk.bind(this, a, e));
                break;
            case "SESSION_STATE":
                this.za = e;
                break;
            case "USER_ACTION":
                this.A.Nc(a, e && this.uk.bind(this, a, e));
                var k = e && this.ir.bind(this, e);
                this.K.g.then(function() {
                    return c.l.Ca =
                        k
                });
                break;
            default:
                throw d = "Unknown message type - " + a, _.G(nu, d), Error(d);
        }
    };
    _.h.ir = function(a, b) {
        var c = this;
        this.Gg(b);
        var d = null;
        try {
            d = a(cast.B.L.Pi(b.data))
        } catch (e) {
            throw _.G(nu, "UserAction Interceptor Exception " + e), wu(this, b), e;
        }
        Promise.resolve(d).then(function(e) {
            if (e && _.pb(Du, e.type)) return Promise.reject(e);
            c.ba(!0, b.data.requestId)
        }).then(_.w, function(e) {
            _.G(nu, "UserAction failed " + e);
            wu(c, b);
            if (e instanceof Error) throw e;
        })
    };
    _.h.mr = function(a, b, c) {
        function d(g) {
            "LOAD" == a ? (e.l.Eg(null, g), e.o.dispatchEvent(new Mq(905, g)), Bu(e, c.data.requestId, g)) : wu(e, c, g.type, g.reason, g.customData)
        }
        var e = this,
            f = null;
        try {
            f = b(cast.B.L.Pi(c.data))
        } catch (g) {
            throw d(g), g;
        }
        return Promise.resolve(f).then(function(g) {
            if (!g) return Au(e, c.data.requestId), null;
            if (g && _.pb(Du, g.type)) return d(g), null;
            c.data = g;
            return c
        }).catch(function(g) {
            g && _.pb(Du, g.type) || _.G(nu, a + " Interceptor Error " + g);
            d(g);
            if (g instanceof Error) throw g;
            return null
        })
    };
    _.h.uk = function(a, b, c) {
        a = b(c);
        return Promise.resolve(a).then(function(d) {
            return d ? _.pb(ix, d.type) ? new ai(d.reason || "APP_ERROR") : d : new ii
        }, function(d) {
            var e = "APP_ERROR";
            d && d.reason && _.pb(ix, d.type) && (e = d.reason);
            return new ai(e)
        })
    };
    _.h.yq = function(a) {
        null == a || _.z(a) ? this.la = a : _.G(nu, "setMediaPlaybackInfoHandler() cannot set handler since it's not a function")
    };
    _.h.zq = function(a) {
        null == a || _.z(a) ? this.sa = a : _.G(nu, "setMediaUrlHandler() cannot set handler since it's not a function")
    };
    _.h.xh = function(a, b) {
        return this.w.xh(a, b).then(function(c) {
            var d = null;
            "ERROR" == c.type && (d = new Ro("ERROR"), d.reason = c.code);
            return d
        })
    };
    _.h.Dh = function() {
        return this.w.Dh().then(function(a) {
            if ("ERROR" == a.type) {
                var b = new Ro("ERROR");
                b.reason = a.code;
                return Promise.reject(b)
            }
        })
    };
    _.h.Bb = function(a) {
        var b = this;
        this.ka = _.J(a);
        this.ka.then(function(c) {
            b.Z = c;
            if (!b.g && b.l) {
                b.l.Bb(c);
                b.D.Bb(c);
                try {
                    uy.C = c
                } catch (d) {
                    _.G(nu, "debug overlay update failed", d)
                }
            }
        })
    };
    _.h.ub = function() {
        return this.l ? cast.B.L.Xn(this.l.ub()) : null
    };
    _.h.sd = function(a, b) {
        this.l && (this.g && Gt(this.g, cast.B.L.Oc(a)), this.l.sd(cast.B.L.Oc(a), b), this.o.dispatchEvent(new Vq(a)))
    };
    _.h.Bc = function() {
        return this.l ? this.l.Bc() : (_.G(nu, "getSupportedMediaCommands should not be called before start"), 0)
    };
    _.h.je = function(a, b) {
        var c = this;
        b = void 0 === b ? !0 : b;
        this.K.g.then(function() {
            return c.l.je(a, b)
        })
    };
    _.h.we = function(a, b) {
        var c = this;
        b = void 0 === b ? !0 : b;
        this.K.g.then(function() {
            return c.l.we(a, b)
        })
    };
    _.h.Gh = function(a, b) {
        var c = this;
        b = void 0 === b ? !0 : b;
        this.K.g.then(function() {
            return c.l.Gh(a, b)
        })
    };
    _.h.ba = function(a, b, c, d) {
        this.l && this.l.ba(void 0 === a ? !1 : a, b, c, d)
    };
    _.h.Kf = function(a, b, c, d, e) {
        this.l && this.l.Kf(a, b, void 0 === c ? !1 : c, d, e)
    };
    _.h.nq = function(a) {
        this.l && (this.l.w.send("*:*", new To(a)), this.o.dispatchEvent(new Rq(a)))
    };
    _.h.Mh = function(a) {
        this.l && this.l.Mh(cast.B.L.Pq(a))
    };
    _.h.Ja = function(a, b, c, d, e) {
        this.l && this.l.Ja(a, b, cast.B.L.Oq(c), cast.B.L.Nq(void 0 === d ? null : d), void 0 === e ? null : e)
    };
    _.h.getCurrentTimeSec = function() {
        return this.g ? this.g.Pe() : 0
    };
    _.h.Ac = function() {
        return this.g ? this.g.Ac() : null
    };
    _.h.ko = function(a) {
        var b = this.Ac();
        return null === b ? null : a + b
    };
    _.h.to = function(a) {
        var b = this.Ac();
        return null === b ? null : a - b
    };
    _.h.getPlayerState = function() {
        return this.g ? cast.B.L.Yn(this.g.getState()) : "IDLE"
    };
    _.h.getDurationSec = function() {
        return this.g ? this.g.O : NaN
    };
    _.h.Xa = function() {
        return this.D.Xa()
    };
    _.h.getPlaybackRate = function() {
        return this.l ? this.l.getPlaybackRate() : 1
    };
    _.h.Ib = function() {
        return this.D.Ib()
    };
    _.h.$c = function() {
        return this.g ? this.g.timeline.g : []
    };
    _.h.getLiveSeekableRange = function() {
        return this.g ? this.g.getLiveSeekableRange() : null
    };
    _.h.bb = function() {
        return this.g ? this.g.bb() : null
    };
    _.h.load = function(a) {
        var b = this,
            c = zu(this, a);
        this.K.g.then(function() {
            return b.l.load(cast.B.L.Qq(a))
        });
        return c
    };
    _.h.pause = function() {
        this.Ab(new O("PAUSE"))
    };
    _.h.play = function() {
        this.Ab(new O("PLAY"))
    };
    _.h.seek = function(a) {
        var b = new bp;
        b.currentTime = a;
        this.Ab(b)
    };
    _.h.stop = function() {
        this.Ab(new O("STOP"))
    };
    _.h.Ab = function(a) {
        var b = this;
        this.K.g.then(function() {
            return b.l.Ab(cast.B.L.Uq(a))
        })
    };
    _.h.Aq = function(a) {
        var b = Cs.F();
        hd("Cast.CAF.PlayerProvided");
        b.g = a
    };
    _.h.Fp = function(a) {
        var b = this;
        _.I(nu, "MediaManagerLoad");
        var c = cast.B.L.Wn(a.data),
            d = c.media;
        (a = nb(c, "queueData", "items")) && B("Cast.CAF.QueueItems", a.length);
        var e, f = !1;
        this.g ? (a = this.g.end("INTERRUPTED"), ru(this), this.g = null, this.da = this.Y = !1) : a = _.J();
        var g = this.l;
        d != g.ub() && this.sd(d, !0);
        $e(a.then(function() {
            b.N.reset();
            b.I.reset();
            b.G && Bu(b, b.G, void 0);
            b.G = c.requestId;
            d && (d.contentUrl || d.contentId) ? b.H && b.H.ab == (d.contentUrl || d.contentId) ? (e = _.J(b.H), b.H = null) : e = Ku(b, c) : (_.G(nu, "LoadRequest data was corrupted"),
                e = Qe());
            return e
        }).then(function(k) {
            g.Bb(k);
            k.va.Of(b.o);
            ru(b);
            b.g = k;
            return b.ka
        }).then(function(k) {
            if (!k) return Qe(Error("No media element"));
            var l = void 0 !== c.autoplay ? c.autoplay : !0;
            b.C = c.playbackRate || b.C;
            b.o.dispatchEvent(new Uq("PLAYER_LOADING", d));
            f = !0;
            return Et(b.g, k, l, b.C)
        }).then(function() {
            b.G == c.requestId && (b.N.g = b.g, b.I.g = b.g, Qj(g, cast.B.L.Pc(b.g.ma().getTracksInfo())), Vj(g, b.g.getPlaybackRate()), Au(b, b.G), Lu(b, !0), Gt(b.g, cast.B.L.Oc(d)), b.o.dispatchEvent(new Uq("PLAYER_LOAD_COMPLETE", d)),
                Gu(b), Ju(b), ru(b), b.da = !0, rq(b.W), qq(b.W, !1), Sj(g), b.g.va.addEventListener("ERROR", function(k) {
                    Gj(b.l, k)
                }))
        }), function(k) {
            k && k.message && _.G(nu, "Load failed: " + k.message);
            f || (Jj(g, "LOAD_FAILED", k && k.customData, k && k.reason), b.o.dispatchEvent(new Sq(void 0, "ERROR")));
            B("Cast.CAF.LoadError", cast.B.common.ua.Fo(k && k.reason) || 0);
            b.o.dispatchEvent(new Mq(905, k))
        })
    };
    _.h.Jp = function(a) {
        var b = this,
            c = cast.B.L.Zn(a.data),
            d = c.media;
        if (!d || !d.contentUrl && !d.contentId) return _.G(nu, "PreloadRequest data was corrupted"), !1;
        this.H ? (a = this.H.end("STOPPED"), this.H = null) : a = _.J();
        a.then(function() {
            return Ku(b, c)
        }).then(function(e) {
            b.o.dispatchEvent(new Uq("PLAYER_PRELOADING", d));
            b.H = e;
            e.Jc()
        }, function() {
            _.G(nu, "Cannot create player on preload")
        });
        return !0
    };
    _.h.Ep = function() {
        this.o.dispatchEvent(new Uq("PLAYER_PRELOADING_CANCELLED"));
        return !0
    };
    _.h.Kp = function(a) {
        var b = this;
        if (this.g) {
            var c = a.data,
                d = void 0 !== c.relativeTime ? this.getCurrentTimeSec() + c.relativeTime : Number(c.currentTime);
            Promise.resolve(this.g.seek(d, c.resumeState)).then(function() {
                b.ba(!1, c.requestId)
            }, function(e) {
                Fu(b, a, e)
            })
        } else wu(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.wp = function(a) {
        var b = this;
        this.g && this.g.eh(a);
        Rs(this.D, cast.B.L.Oi(a));
        a && !a.breakStatus && ["PLAYING", "PAUSED"].includes(a.playerState) && Lu(this, !1);
        var c = a;
        this.pa && (c = this.pa(a));
        return Promise.resolve(c).then(function(d) {
            d = sb(d);
            b.o.dispatchEvent(new Qq(cast.B.L.Oi(d)));
            return d
        })
    };
    _.h.Mp = function(a) {
        var b = this;
        this.g ? Ct(this.g).then(function() {
            b.ba(!1, a.data.requestId)
        }, function(c) {
            Fu(b, a, c)
        }) : wu(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.Gp = function(a) {
        Bu(this, this.G, a)
    };
    _.h.Ip = function(a) {
        var b = this;
        if (this.g) {
            if (this.g.isLiveStream()) {
                var c = this.g.getLiveSeekableRange(),
                    d = this.Bc(),
                    e = this.getCurrentTimeSec(),
                    f = e;
                c ? d & 2 ? e < c.start && (_.I(nu, "seek to seekable range start " + c.start), f = c.start) : (_.I(nu, "SEEK command is not supported. Jump to live head"), f = Infinity) : (_.I(nu, "No seekable range. Jump to live head"), f = Infinity);
                if (f !== e) {
                    this.g.seek(f, "PLAYBACK_START").then(function() {
                        b.ba(!1, a.data.requestId)
                    }, function(g) {
                        Fu(b, a, g)
                    });
                    return
                }
            }
            this.g.play().then(function() {
                b.ba(!1,
                    a.data.requestId)
            }, function(g) {
                Fu(b, a, g)
            })
        } else wu(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.Hp = function(a) {
        var b = this;
        this.g ? this.g.pause().then(function() {
            b.ba(!1, a.data.requestId)
        }, function(c) {
            Fu(b, a, c)
        }) : wu(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.Lp = function(a) {
        var b = this;
        if (this.g) {
            var c = a.data;
            c = c.playbackRate ? c.playbackRate : this.g.getPlaybackRate() * c.relativePlaybackRate;
            this.g.setPlaybackRate(Number(c)).then(function() {
                b.C = b.g.getPlaybackRate();
                b.l.A = b.C;
                b.ba(!1, a.data.requestId)
            }, function(d) {
                Fu(b, a, d)
            })
        } else wu(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.$p = function(a) {
        var b = this,
            c = this.ub();
        if (c) {
            var d = new Vo;
            d.autoplay = "PAUSED" !== this.getPlayerState();
            d.media = c;
            if (d.media && this.g) {
                c = this.g.timeline.I;
                var e = _.rb(d.media);
                e.breaks = c.breaks;
                e.breakClips = c.breakClips;
                d.media = e
            }
            d.playbackRate = this.getPlaybackRate();
            d.currentTime = this.getCurrentTimeSec();
            if (c = this.getLiveSeekableRange()) d.currentTime -= c.end;
            d.activeTrackIds = vj(this.l) || void 0;
            if (c = wj(this.l))
                if (e = c.w) d.queueData = _.rb(e), c = c.Md(), 0 <= c && (d.queueData.startIndex = c, d.queueData.startTime =
                    d.currentTime);
            d.customData = uj(this.l);
            c = new lp;
            c.loadRequestData = d;
            d = c;
            this.za && (d = this.za(c));
            Promise.resolve(d).then(function(f) {
                    if (f) {
                        var g = b.l,
                            k = a.senderId,
                            l = a.data.requestId;
                        (f = cast.B.L.Vq(f)) ? (le(N, pe, "Sending SessionState in StoreSessionResponse.\n         SessionState=" + JSON.stringify(f)), le(N, Ax, "Sending store session response message to " + k), f = new kk(f), f.requestId = l, g.w.send(k, f)) : _.G(N, "Cannot send store session response. Miss SessionState object.")
                    } else wu(b, a, "ERROR", "NOT_SUPPORTED")
                },
                function() {
                    wu(b, a, "ERROR", "APP_ERROR")
                })
        } else _.G(nu, "No media is being played on StoreSession"), wu(this, a, "INVALID_PLAYER_STATE")
    };
    _.h.Xp = function(a) {
        var b = cast.B.L.bo(a.data);
        b.sessionState.loadRequestData ? (a = b.sessionState.loadRequestData, a.requestId = b.requestId, this.O && (a.credentials = this.O, a.credentialsType = "cloud"), this.load(a)) : wu(this, a, "INVALID_REQUEST")
    };
    _.h.Gg = function(a) {
        var b = a.type;
        this.o.dispatchEvent(new Tq(pu[a.type] || qu[b], _.rb(a.data), a.senderId))
    };
    _.h.Pf = function(a) {
        this.D.Pf(a)
    };
    _.v("cast.framework.PlayerManager", Q, void 0);
    Q.prototype.setPlayerFactory = Q.prototype.Aq;
    Q.prototype.sendLocalMediaRequest = Q.prototype.Ab;
    Q.prototype.stop = Q.prototype.stop;
    Q.prototype.seek = Q.prototype.seek;
    Q.prototype.play = Q.prototype.play;
    Q.prototype.pause = Q.prototype.pause;
    Q.prototype.load = Q.prototype.load;
    Q.prototype.getRawSeekableRange = Q.prototype.bb;
    Q.prototype.getLiveSeekableRange = Q.prototype.getLiveSeekableRange;
    Q.prototype.getBreaks = Q.prototype.$c;
    Q.prototype.getBreakClipDurationSec = Q.prototype.Ib;
    Q.prototype.getPlaybackRate = Q.prototype.getPlaybackRate;
    Q.prototype.getBreakClipCurrentTimeSec = Q.prototype.Xa;
    Q.prototype.getDurationSec = Q.prototype.getDurationSec;
    Q.prototype.getPlayerState = Q.prototype.getPlayerState;
    Q.prototype.getMediaTimeForAbsoluteTime = Q.prototype.to;
    Q.prototype.getAbsoluteTimeForMediaTime = Q.prototype.ko;
    Q.prototype.getStartAbsoluteTime = Q.prototype.Ac;
    Q.prototype.getCurrentTimeSec = Q.prototype.getCurrentTimeSec;
    Q.prototype.sendError = Q.prototype.Ja;
    Q.prototype.setIdleReason = Q.prototype.Mh;
    Q.prototype.sendCustomState = Q.prototype.nq;
    Q.prototype.sendStatus = Q.prototype.Kf;
    Q.prototype.broadcastStatus = Q.prototype.ba;
    Q.prototype.removeSupportedMediaCommands = Q.prototype.Gh;
    Q.prototype.addSupportedMediaCommands = Q.prototype.we;
    Q.prototype.setSupportedMediaCommands = Q.prototype.je;
    Q.prototype.getSupportedMediaCommands = Q.prototype.Bc;
    Q.prototype.setMediaInformation = Q.prototype.sd;
    Q.prototype.getMediaInformation = Q.prototype.ub;
    Q.prototype.setMediaElement = Q.prototype.Bb;
    Q.prototype.refreshCredentials = Q.prototype.Dh;
    Q.prototype.playString = Q.prototype.xh;
    Q.prototype.setMediaUrlResolver = Q.prototype.zq;
    Q.prototype.setMediaPlaybackInfoHandler = Q.prototype.yq;
    Q.prototype.setMessageInterceptor = Q.prototype.Nc;
    Q.prototype.removeEventListener = Q.prototype.removeEventListener;
    Q.prototype.addEventListener = Q.prototype.addEventListener;
    Q.prototype.getBreakManager = Q.prototype.po;
    Q.prototype.getQueueManager = Q.prototype.Co;
    Q.prototype.getTextTracksManager = Q.prototype.Eo;
    Q.prototype.getAudioTracksManager = Q.prototype.oo;
    Q.prototype.getPreferredTextStyle = Q.prototype.Ao;
    Q.prototype.getPreferredTextLanguage = Q.prototype.zo;
    Q.prototype.getPreferredPlaybackRate = Q.prototype.yo;
    Q.prototype.getPlaybackConfig = Q.prototype.wo;
    Q.prototype.setPlaybackConfig = Q.prototype.Xj;
    Q.prototype.getStats = Q.prototype.getStats;
    var nu = _.F("cast.framework.PlayerManager"),
        $y = {},
        Zy = ($y.GET_STATUS = "getstatus", $y.LOAD = "load", $y.PAUSE = "pause", $y.STOP = "stop", $y.PLAY = "play", $y.SKIP_AD = "skipad", $y.PLAY_AGAIN = "playagain", $y.SEEK = "seek", $y.SET_PLAYBACK_RATE = "setplaybackrate", $y.SET_VOLUME = "setvolume", $y.EDIT_TRACKS_INFO = "edittracksinfo", $y.EDIT_AUDIO_TRACKS = "editaudiotracks", $y.PRECACHE = "precache", $y.PRELOAD = "preload", $y.QUEUE_LOAD = "queueload", $y.QUEUE_INSERT = "queueinsert", $y.QUEUE_UPDATE = "queueupdate", $y.QUEUE_REMOVE = "queueremove",
            $y.QUEUE_REORDER = "queuereorder", $y.QUEUE_GET_ITEM_RANGE = "getitemsrange", $y.QUEUE_GET_ITEMS = "getitemsinfo", $y.QUEUE_GET_ITEM_IDS = "getqueueids", $y.USER_ACTION = "useraction", $y.STORE_SESSION = "storesession", $y.RESUME_SESSION = "resumesession", $y),
        az = {},
        pu = (az.load = "REQUEST_LOAD", az.stop = "REQUEST_STOP", az.pause = "REQUEST_PAUSE", az.precache = "REQUEST_PRECACHE", az.play = "REQUEST_PLAY", az.skipad = "REQUEST_SKIP_AD", az.playagain = "REQUEST_PLAY_AGAIN", az.seek = "REQUEST_SEEK", az.setplaybackrate = "REQUEST_PLAYBACK_RATE_CHANGE",
            az.setvolume = "REQUEST_VOLUME_CHANGE", az.edittracksinfo = "REQUEST_EDIT_TRACKS_INFO", az.editaudiotracks = "REQUEST_EDIT_AUDIO_TRACKS", az.queueload = "REQUEST_QUEUE_LOAD", az.queueinsert = "REQUEST_QUEUE_INSERT", az.queueupdate = "REQUEST_QUEUE_UPDATE", az.queueremove = "REQUEST_QUEUE_REMOVE", az.queuereorder = "REQUEST_QUEUE_REORDER", az.getitemsrange = "REQUEST_QUEUE_GET_ITEM_RANGE", az.getitemsinfo = "REQUEST_QUEUE_GET_ITEMS", az.getqueueids = "REQUEST_QUEUE_GET_ITEM_IDS", az.useraction = "REQUEST_USER_ACTION", az.storesession =
            "REQUEST_STORE_SESSION", az.resumesession = "REQUEST_RESUME_SESSION", az),
        bz = {},
        qu = (bz.SET_CREDENTIALS = "REQUEST_SET_CREDENTIALS", bz.LOAD_BY_ENTITY = "REQUEST_LOAD_BY_ENTITY", bz.USER_ACTION = "REQUEST_USER_ACTION", bz.DISPLAY_STATUS = "REQUEST_DISPLAY_STATUS", bz.CUSTOM_COMMAND = "REQUEST_CUSTOM_COMMAND", bz.FOCUS_STATE = "REQUEST_FOCUS_STATE", bz),
        cz = {},
        Hu = (cz.BUFFERED = 1, cz.LIVE = 2, cz.NONE = 3, cz),
        dz = {},
        Iu = (dz.VIDEO = 1, dz.AUDIO = 2, dz.IMAGE = 3, dz);
    cast.B.J.fa = _.F("cast.framework.ui");
    cast.B.J.Wo = function() {
        if (document.getElementsByTagName("cast-media-player")[0]) {
            var a = document.getElementsByClassName("castSplashScreen")[0];
            cast.B.J.Xo(document.getElementsByClassName("castWelcomeScreen")[0] || a)
        }
    };
    cast.B.J.Xo = function(a) {
        a = void 0 === a ? null : a;
        var b = cast.B.J.fa;
        a && (_.I(b, "remove welcome screen"), a.remove())
    };
    _.h = R.prototype;
    _.h.reset = function() {
        this.g = null;
        this.w = !1
    };
    _.h.bp = function(a) {
        Ou(this, void 0 === a ? !1 : a)
    };
    _.h.initialize = function() {
        this.g.jq && (this.h = this.g.jq);
        this.g.yh && (this.l = this.g.yh);
        this.g.playbackConfig && this.l.Xj(this.g.playbackConfig);
        this.g.preferredPlaybackRate && (this.l.C = this.g.preferredPlaybackRate);
        this.g.preferredTextLanguage && (this.l.M = this.g.preferredTextLanguage);
        this.g.hq && (this.l.U = this.g.hq);
        if (this.g.customNamespaces)
            for (var a in this.g.customNamespaces) this.g.customNamespaces.hasOwnProperty(a) && Ag(this.h, a, cast.B.L.ik(this.g.customNamespaces[a]));
        this.l.Pf(!!this.g.playWatchedBreak);
        a = this.h;
        a.ca = this.Yp.bind(this);
        a.da = this.fq.bind(this);
        a.Z = this.Mm.bind(this);
        this.isRemoteControl() || this.g.skipPlayersLoad || Ou(this, this.g.useLegacyDashSupport, this.g.mplUrl, this.g.shakaUrl, this.g.loadMux)
    };
    _.h.xo = function() {
        return this.l
    };
    _.h.getSenders = function() {
        var a = this;
        return this.h.getSenders().map(function(b) {
            return cast.B.L.Qi(a.h.Te(b))
        })
    };
    _.h.Te = function(a) {
        return cast.B.L.Qi(this.h.Te(a))
    };
    _.h.start = function(a) {
        _.I(Nu, "start");
        a || (a = new kq);
        var b = a;
        if (this.g) throw Error("Cast receiver options already provided");
        this.g = b;
        for (var c in ez) void 0 !== b[c] && B("Cast.CAF.StartOption", ez[c]);
        this.initialize();
        b = {
            addEventListener: _.w
        };
        a = a.Is || new tj(this.g.mediaElement || b, this.g.supportedCommands || void 0, this.g.localSenderId || void 0);
        void 0 === this.g.supportedCommands && a.we(262144);
        void 0 !== this.g.queue && (hd("Cast.CAF.Queue"), a.Nh(cast.B.L.Iq(this.g.queue)));
        b = this.l;
        b.l = a;
        b.K.resolve();
        b.N.h =
            a;
        b.I.h = a;
        a.Yd = b.Fp.bind(b);
        a.ae = b.Jp.bind(b);
        a.Xd = b.Ep.bind(b);
        a.lg = b.wp.bind(b);
        a.qh = _.w;
        a.Zd = b.Gp.bind(b);
        a.ee = b.Mp.bind(b);
        a.Jd = b.Kp.bind(b);
        a.Id = b.Ip.bind(b);
        a.Hd = b.Hp.bind(b);
        a.de = b.Lp.bind(b);
        xq(b.h, "load", a.Yd.bind(a));
        a.Yd = b.h.g;
        xq(b.h, "preload", a.ae.bind(a));
        a.ae = b.h.g;
        a.rh = b.h.g;
        xq(b.h, "cancelpreload", a.Xd.bind(a));
        a.Xd = b.h.g;
        xq(b.h, "stop", a.Fe.bind(a));
        a.Fe = b.h.g;
        xq(b.h, "pause", a.Hd.bind(a));
        a.Hd = b.h.g;
        xq(b.h, "play", a.Id.bind(a));
        a.Id = b.h.g;
        xq(b.h, "playagain", a.wf.bind(a));
        a.wf = b.h.g;
        xq(b.h, "skipad", a.ee.bind(a));
        a.ee = b.h.g;
        xq(b.h, "seek", a.Jd.bind(a));
        a.Jd = b.h.g;
        xq(b.h, "setplaybackrate", a.de.bind(a));
        a.de = b.h.g;
        xq(b.h, "setvolume", a.Cf.bind(a));
        a.Cf = b.h.g;
        xq(b.h, "getstatus", a.vf.bind(a));
        a.vf = b.h.g;
        xq(b.h, "editaudiotracks", a.tf.bind(a));
        a.tf = b.h.g;
        xq(b.h, "edittracksinfo", a.uf.bind(a));
        a.uf = b.h.g;
        xq(b.h, "queueload", a.zf.bind(a));
        a.zf = b.h.g;
        xq(b.h, "queueinsert", a.yf.bind(a));
        a.yf = b.h.g;
        xq(b.h, "queueupdate", a.be.bind(a));
        a.be = b.h.g;
        xq(b.h, "queueremove", a.Af.bind(a));
        a.Af = b.h.g;
        xq(b.h,
            "queuereorder", a.Bf.bind(a));
        a.Bf = b.h.g;
        a.Vh = !0;
        a.fe = b.$p.bind(b);
        xq(b.h, "storesession", a.fe.bind(a));
        a.fe = b.h.g;
        a.ce = b.Xp.bind(b);
        xq(b.h, "resumesession", a.ce.bind(a));
        a.ce = b.h.g;
        b = b.W;
        b.g = a;
        b.g.R = b.l;
        (a = this.g.mediaElement || Qu()) && this.l.Bb(a);
        b = Pu();
        a = this.h;
        b = !!(this.g.uiConfig && this.g.uiConfig.touchScreenOptimizedApp || this.g.touchScreenOptimizedApp || b);
        a.Fc() ? _.G(Ug, "initTouchScreenOptimizedApp() method cannot be called after CastReceiverManager.start() has been called") : (void 0 === b && _.G(Ug, "setTouchScreenOptimizedApp() has to be called with 1 required argument"),
            xh(a, b));
        this.h.start(cast.B.L.Lq(this.g));
        return this
    };
    _.h.stop = function() {
        this.h.stop()
    };
    _.h.isRemoteControl = function() {
        return this.h.isRemoteControl()
    };
    _.h.Fc = function() {
        return this.h.Fc()
    };
    _.h.Dg = function() {
        return cast.B.L.io(this.h.Dg())
    };
    _.h.Bg = function() {
        return cast.B.L.eo(this.h.Bg())
    };
    _.h.Ue = function() {
        return cast.B.L.fo(this.h.Ue())
    };
    _.h.Oe = function() {
        return cast.B.L.Tn(this.h.Oe())
    };
    _.h.ie = function(a) {
        this.h.ie(a)
    };
    _.h.Ph = function(a) {
        this.h.Ph(a)
    };
    _.h.Qh = function(a) {
        this.h.Qh(a)
    };
    _.h.Od = function() {
        return cast.B.L.ho(this.h.Od())
    };
    _.h.Nf = function(a) {
        this.h.Nf(a)
    };
    _.h.wq = function(a) {
        this.o = a
    };
    _.h.Jf = function(a) {
        this.h.Jf(a)
    };
    _.h.xi = function(a, b) {
        a = Ru(this, a);
        if (!_.z(b)) throw Error("listener on custom channel should be a function");
        a.l = b
    };
    _.h.kq = function(a) {
        Ru(this, a).l = null
    };
    _.h.Uj = function(a, b, c) {
        void 0 === b && (b = "*:*");
        Ru(this, a).send(b, c)
    };
    _.h.Yp = function(a) {
        _.I(Nu, "onSenderDisconnected");
        if (void 0 === a.senderId || void 0 === a.reason) _.I(Nu, "SenderDisconnectedEvent is corrupted");
        else {
            var b = a.userAgent.split(","),
                c = 0 == this.h.getSenders().length,
                d = "requested_by_sender" == a.reason,
                e = b[1];
            b = "iOS CastSDK" == b[0] && 0 >= _.Kb(e, "2.2.0") && "0.0.0" != e;
            c && d && !b && (this.o ? this.o(cast.B.L.co(a)) : this.stop())
        }
    };
    _.h.fq = function(a) {
        _.I(Nu, "onVisibilityChanged");
        void 0 === a.isVisible ? _.I(Nu, "VisibilityChangedEvent is corrupted") : a.isVisible || "IDLE" === this.l.getPlayerState() || this.l.pause()
    };
    _.h.Mm = function() {
        _.I(Nu, "onReady");
        if (!this.isRemoteControl()) {
            this.g.disableIdleTimeout || cast.B.common.Cq(this.l, this.stop.bind(this));
            var a = this.l;
            a.addEventListener("PLAYER_LOADING", this.rq.bind(this));
            a.addEventListener("MEDIA_FINISHED", this.mq.bind(this))
        }
        cast.B.J.Wo()
    };
    _.h.addEventListener = function(a, b) {
        this.h.addEventListener(a, b)
    };
    _.h.removeEventListener = function(a, b) {
        this.h.removeEventListener(a, b)
    };
    _.h.mq = function() {
        this.h.ie("")
    };
    _.h.rq = function(a) {
        (a = a.media.metadata) && a.title && this.h.ie("Casting: " + a.title)
    };
    _.h.ad = function() {
        return this.h.ad()
    };
    _.h.canDisplayType = function(a, b, c, d, e) {
        return this.h.canDisplayType(a, b, c, d, e)
    };
    _.h.setLoggerLevel = function(a) {
        cast.receiver.Rb.w(a)
    };
    _.v("cast.framework.CastReceiverContext", R, void 0);
    R.getInstance = Tu;
    R.prototype.setLoggerLevel = R.prototype.setLoggerLevel;
    R.prototype.canDisplayType = R.prototype.canDisplayType;
    R.prototype.getDeviceCapabilities = R.prototype.ad;
    R.prototype.removeEventListener = R.prototype.removeEventListener;
    R.prototype.addEventListener = R.prototype.addEventListener;
    R.prototype.sendCustomMessage = R.prototype.Uj;
    R.prototype.removeCustomMessageListener = R.prototype.kq;
    R.prototype.addCustomMessageListener = R.prototype.xi;
    R.prototype.sendFeedbackMessage = R.prototype.Jf;
    R.prototype.setLastSenderDisconnectedHandler = R.prototype.wq;
    R.prototype.setInactivityTimeout = R.prototype.Nf;
    R.prototype.getSystemVolume = R.prototype.Od;
    R.prototype.setSystemVolumeMuted = R.prototype.Qh;
    R.prototype.setSystemVolumeLevel = R.prototype.Ph;
    R.prototype.setApplicationState = R.prototype.ie;
    R.prototype.getApplicationData = R.prototype.Oe;
    R.prototype.getSystemState = R.prototype.Ue;
    R.prototype.getStandbyState = R.prototype.Bg;
    R.prototype.getVisibilityState = R.prototype.Dg;
    R.prototype.isSystemReady = R.prototype.Fc;
    R.prototype.isRemoteControl = R.prototype.isRemoteControl;
    R.prototype.stop = R.prototype.stop;
    R.prototype.start = R.prototype.start;
    R.prototype.getSender = R.prototype.Te;
    R.prototype.getSenders = R.prototype.getSenders;
    R.prototype.getPlayerManager = R.prototype.xo;
    R.prototype.loadPlayerLibraries = R.prototype.bp;
    var Su = null,
        Nu = _.F("cast.framework.Application"),
        ez = {
            useLegacyDashSupport: 1,
            loadMux: 2,
            localSenderId: 3,
            mediaElement: 4,
            statusText: 5,
            maxInactivity: 6,
            disableIdleTimeout: 7,
            mplUrl: 8,
            shakaUrl: 9,
            supportedCommands: 10,
            playbackConfig: 11,
            queue: 12,
            customNamespaces: 13,
            versionCode: 14,
            preferredPlaybackRate: 15,
            preferredTextLanguage: 16,
            preferredTextStyle: 17,
            playWatchedBreak: 18,
            uiConfig: 19,
            touchScreenOptimizedApp: 20
        };
    var Uu = _.F("cast.framework.RemoteMedia");
    Wu.prototype.o = function(a) {
        a.data && a.data.type ? this.h.dispatchEvent(a.data) : _.G(Uu, "Bad message on remote control channel" + JSON.stringify(a))
    };
    Wu.prototype.addEventListener = function(a, b) {
        this.h.addEventListener(a, b)
    };
    Wu.prototype.removeEventListener = function(a, b) {
        this.h.removeEventListener(a, b)
    };
    var fz = new Wu;
    cast.B.Cd = Wu;
    cast.B.Cd.F = function() {
        return fz
    };
    Xu.prototype.then = function(a) {
        this.h.then(a)
    };
    Xu.prototype.resolve = function() {
        this.g.resolve()
    };
    cast.B.Ea.category = {};
    cast.B.Ea.category.Zl = "REQUEST_SEEK REQUEST_LOAD REQUEST_STOP REQUEST_PAUSE REQUEST_PLAY REQUEST_PLAY_AGAIN REQUEST_PLAYBACK_RATE_CHANGE REQUEST_VOLUME_CHANGE REQUEST_EDIT_TRACKS_INFO REQUEST_EDIT_AUDIO_TRACKS REQUEST_SET_CREDENTIALS REQUEST_SKIP_AD REQUEST_LOAD_BY_ENTITY REQUEST_USER_ACTION REQUEST_DISPLAY_STATUS REQUEST_CUSTOM_COMMAND REQUEST_STORE_SESSION REQUEST_RESUME_SESSION REQUEST_FOCUS_STATE REQUEST_PRECACHE REQUEST_QUEUE_LOAD REQUEST_QUEUE_INSERT REQUEST_QUEUE_UPDATE REQUEST_QUEUE_REMOVE REQUEST_QUEUE_REORDER REQUEST_QUEUE_GET_ITEM_RANGE REQUEST_QUEUE_GET_ITEMS REQUEST_QUEUE_GET_ITEM_IDS".split(" ");
    _.v("cast.framework.events.category.REQUEST", cast.B.Ea.category.Zl, void 0);
    cast.B.Ea.category.Hk = "REQUEST_SEEK REQUEST_LOAD REQUEST_STOP REQUEST_PAUSE REQUEST_PLAY REQUEST_PLAY_AGAIN REQUEST_PLAYBACK_RATE_CHANGE REQUEST_PRECACHE REQUEST_SKIP_AD REQUEST_VOLUME_CHANGE REQUEST_EDIT_TRACKS_INFO REQUEST_EDIT_AUDIO_TRACKS REQUEST_SET_CREDENTIALS REQUEST_LOAD_BY_ENTITY REQUEST_USER_ACTION REQUEST_DISPLAY_STATUS REQUEST_CUSTOM_COMMAND REQUEST_STORE_SESSION REQUEST_RESUME_SESSION REQUEST_FOCUS_STATE REQUEST_QUEUE_LOAD REQUEST_QUEUE_INSERT REQUEST_QUEUE_UPDATE REQUEST_QUEUE_REMOVE REQUEST_QUEUE_REORDER REQUEST_QUEUE_GET_ITEM_RANGE REQUEST_QUEUE_GET_ITEMS REQUEST_QUEUE_GET_ITEM_IDS BREAK_ENDED BREAK_STARTED BREAK_CLIP_ENDED BREAK_CLIP_LOADING BREAK_CLIP_STARTED BUFFERING ERROR LIVE_ENDED LIVE_IS_MOVING_WINDOW_CHANGED MEDIA_FINISHED MEDIA_STATUS CUSTOM_STATE MEDIA_INFORMATION_CHANGED PAUSE PLAYER_LOADING PLAYER_LOAD_COMPLETE PLAYER_PRELOADING PLAYER_PRELOADING_CANCELLED PLAYING RATE_CHANGE SEEKED SEEKING".split(" ");
    _.v("cast.framework.events.category.CORE", cast.B.Ea.category.Hk, void 0);
    cast.B.Ea.category.DEBUG = "ABORT BITRATE_CHANGED CAN_PLAY CAN_PLAY_THROUGH CLIP_STARTED CLIP_ENDED CACHE_LOADED CACHE_HIT CACHE_INSERTED DURATION_CHANGE EMPTIED EMSG ENDED ID3 LOADED_DATA LOADED_METADATA LOAD_START PLAY STALLED INBAND_TRACK_ADDED WAITING".split(" ");
    _.v("cast.framework.events.category.DEBUG", cast.B.Ea.category.DEBUG, void 0);
    cast.B.Ea.category.Xk = ["SEGMENT_DOWNLOADED", "PROGRESS", "SUSPEND", "TIME_UPDATE"];
    _.v("cast.framework.events.category.FINE", cast.B.Ea.category.Xk, void 0);
    _.v("cast.framework.ui.BrowseContent", function(a, b) {
        this.title = b;
        this.items = a;
        this.targetAspectRatio = void 0
    }, void 0);
    _.v("cast.framework.ui.BrowseItem", function(a, b, c, d) {
        this.entity = a;
        this.title = b;
        this.subtitle = c;
        this.image = d;
        this.mediaBadge = this.imageType = this.duration = void 0
    }, void 0);
    _.v("cast.framework.ui.BrowseImageType", {
        MUSIC_TRACK: "MUSIC_TRACK",
        MUSIC_ALBUM: "MUSIC_ALBUM",
        ARTIST: "ARTIST",
        PLAYLIST: "PLAYLIST",
        EPISODE: "EPISODE",
        MOVIE: "MOVIE",
        PHOTO: "PHOTO",
        PODCAST: "PODCAST",
        MUSIC_GENRE: "MUSIC_GENRE",
        AUDIO_BOOK: "AUDIO_BOOK",
        RADIO_STATION: "RADIO_STATION",
        MUSIC_MIX: "MUSIC_MIX",
        VIDEO: "VIDEO",
        TV_SHOW: "TV_SHOW",
        NEWS: "NEWS"
    }, void 0);
    _.v("cast.framework.ui.BrowseImageAspectRatio", {
        SQUARE_1_TO_1: "SQUARE_1_TO_1",
        PORTRAIT_2_TO_3: "PORTRAIT_2_TO_3",
        LANDSCAPE_16_TO_9: "LANDSCAPE_16_TO_9"
    }, void 0);
    _.v("cast.framework.ui.BrowseMediaBadge", {
        LIVE: "LIVE"
    }, void 0);
    _.q(ko, tk);
    ko.prototype.g = function(a) {
        this.A ? (this.o && (a.mediaSessionId = this.o), Vu(this.C, a)) : tk.prototype.g.call(this, a)
    };
    ko.prototype.H = function(a) {
        this.A ? Vu(this.C, a) : tk.prototype.H.call(this, a)
    };
    _.v("cast.framework.ui.State", {
        LAUNCHING: "launching",
        IDLE: "idle",
        LOADING: "loading",
        BUFFERING: "buffering",
        PAUSED: "paused",
        PLAYING: "playing"
    }, void 0);
    _.v("cast.framework.ui.ContentType", {
        VIDEO: "video",
        AUDIO: "audio",
        IMAGE: "image"
    }, void 0);
    _.v("cast.framework.ui.DisplayType", {
        TV: "tv",
        TOUCH: "touch"
    }, void 0);
    _.v("cast.framework.ui.ApplicationData", Yu, void 0);
    _.v("cast.framework.ui.PlayerData", Zu, void 0);
    cast.B.J.ea = "Changed";
    var Nw = "applicationData" + cast.B.J.ea,
        Gw = "state" + cast.B.J.ea,
        gz = "isSeeking" + cast.B.J.ea,
        Yv = "duration" + cast.B.J.ea,
        Xv = "currentTime" + cast.B.J.ea,
        Fw = "metadata" + cast.B.J.ea,
        Cw = "media" + cast.B.J.ea,
        Dw = "queueData" + cast.B.J.ea,
        hz = "thumbnailUrl" + cast.B.J.ea,
        iz = "nextMetadata" + cast.B.J.ea,
        Zv = "supportedMediaCommands" + cast.B.J.ea,
        Sv = "isLive" + cast.B.J.ea,
        Lw = "isAtLiveEdge" + cast.B.J.ea,
        Kw = "breakPercentagePositions" + cast.B.J.ea,
        Iw = "isPlayingBreak" + cast.B.J.ea,
        Mw = "whenSkippable" + cast.B.J.ea,
        Pw = "numberBreakClips" + cast.B.J.ea,
        Ow = "currentBreakClipNumber" + cast.B.J.ea,
        Jw = "breakTitle" + cast.B.J.ea,
        jz = "displayType" + cast.B.J.ea,
        Kv = "liveSeekableRange" + cast.B.J.ea,
        Uv = "mediaStartAbsoluteTime" + cast.B.J.ea,
        Vv = "sectionStartTimeInMedia" + cast.B.J.ea,
        Wv = "sectionDuration" + cast.B.J.ea,
        Ew = "activeTrackIds" + cast.B.J.ea;
    _.v("cast.framework.ui.PlayerDataEventType", {
        ANY_CHANGE: "*",
        APPLICATION_DATA_CHANGED: Nw,
        STATE_CHANGED: Gw,
        IS_SEEKING_CHANGED: gz,
        DURATION_CHANGED: Yv,
        CURRENT_TIME_CHANGED: Xv,
        PLAYBACK_RATE_CHANGED: "playbackRate" + cast.B.J.ea,
        METADATA_CHANGED: Fw,
        MEDIA_SESSION_ID_CHANGED: "mediaSessionId" + cast.B.J.ea,
        MEDIA_CHANGED: Cw,
        QUEUE_DATA_CHANGED: Dw,
        TITLE_CHANGED: "title" + cast.B.J.ea,
        SUBTITLE_CHANGED: "subtitle" + cast.B.J.ea,
        THUMBNAIL_URL_CHANGED: hz,
        NEXT_TITLE_CHANGED: "nextTitle" + cast.B.J.ea,
        NEXT_SUBTITLE_CHANGED: "nextSubtitle" +
            cast.B.J.ea,
        NEXT_THUMBNAIL_URL_CHANGED: "nextThumbnailUrl" + cast.B.J.ea,
        NEXT_METADATA_CHANGED: iz,
        PRELOADING_NEXT_CHANGED: "preloadingNext" + cast.B.J.ea,
        CONTENT_TYPE_CHANGED: "contentType" + cast.B.J.ea,
        MEDIA_CATEGORY_CHANGED: "mediaCategory" + cast.B.J.ea,
        SUPPORTED_MEDIA_COMMANDS_CHANGED: Zv,
        IS_LIVE_CHANGED: Sv,
        IS_AT_LIVE_EDGE_CHANGED: Lw,
        BREAK_PERCENTAGE_POSITIONS_CHANGED: Kw,
        IS_PLAYING_BREAK_CHANGED: Iw,
        IS_BREAK_SKIPPABLE_CHANGED: "isBreakSkippable" + cast.B.J.ea,
        WHEN_SKIPPABLE_CHANGED: Mw,
        NUMBER_BREAK_CLIPS_CHANGED: Pw,
        CURRENT_BREAK_CLIP_NUMBER_CHANGED: Ow,
        BREAK_TITLE_CHANGED: Jw,
        DISPLAY_STATUS_CHANGED: "displayStatus" + cast.B.J.ea,
        DISPLAY_TYPE_CHANGED: jz,
        LIVE_SEEKABLE_RANGE_CHANGED: Kv,
        MEDIA_START_ABSOLUTE_TIME_CHANGED: Uv,
        SECTION_START_TIME_IN_MEDIA_CHANGED: Vv,
        SECTION_DURATION_CHANGED: Wv,
        PRESENTATION_CHANGED: "presentation" + cast.B.J.ea,
        CUSTOM_STATE_CHANGED: "customState" + cast.B.J.ea,
        ACTIVE_TRACK_IDS_CHANGED: Ew
    }, void 0);
    _.v("cast.framework.ui.PlayerDataChangedEvent", $u, void 0);
    _.q(av, Yc);
    av.prototype.createdCallback = function() {
        (0, cast.B.cl)(this.attachShadow ? this.attachShadow({
            mode: "open"
        }) : this.createShadowRoot());
        this.g = null;
        this.l = this.shadowRoot.getElementById("loading-animation");
        this.h = this.shadowRoot.getElementById("image")
    };
    window.customElements && window.customElements.define ? window.customElements.define("image-loader", av) : document.registerElement("image-loader", {
        prototype: av.prototype
    });
    cast.B.J.Sr = av;
    gv.prototype.addEventListener = function(a, b) {
        this.C.addEventListener(a, b)
    };
    gv.prototype.removeEventListener = function(a, b) {
        this.C.removeEventListener(a, b)
    };
    _.v("cast.framework.ui.PlayerDataBinder", gv, void 0);
    gv.prototype.removeEventListener = gv.prototype.removeEventListener;
    gv.prototype.addEventListener = gv.prototype.addEventListener;
    var Lv = new Zu;
    new gv(Lv);
    var Jv = _.F("cast.framework.ui.PlayerDataBinder");
    Mv.prototype.start = function() {
        var a = this;
        this.g = Ov(this);
        2 > this.g.length || (this.w = Qv(this, "--animation-duration"), this.A = Math.max(Qv(this, "--interval-duration"), this.w), 0 < this.A && (this.C = setInterval(function() {
            return a.next()
        }, this.A)))
    };
    Mv.prototype.stop = function() {
        clearInterval(this.C);
        this.C = void 0;
        clearInterval(this.G);
        this.G = void 0;
        for (var a = _.p(this.g), b = a.next(); !b.done; b = a.next()) b.value.classList.remove("visible", "top");
        this.l = void 0
    };
    Mv.prototype.next = function() {
        this.o = this.l;
        this.l = void 0 === this.l ? 0 : (this.l + 1) % this.g.length;
        this.g[this.l].classList.add("top", "visible");
        void 0 !== this.o && this.g[this.o].classList.remove("top");
        Nv(this)
    };
    var Pv = _.F("cast.framework.ui.SlideshowManager");
    $v.prototype.addEventListener = function(a, b) {
        this.h.addEventListener(a, b)
    };
    $v.prototype.removeEventListener = function(a, b) {
        this.h.removeEventListener(a, b)
    };
    _.q(ow, Yc);
    _.h = ow.prototype;
    _.h.createdCallback = function() {
        var a = this;
        (0, cast.B.Kk)(this.attachShadow ? this.attachShadow({
            mode: "open"
        }) : this.createShadowRoot());
        this.h = Aw(this, "castPlayer");
        this.Y = Aw(this, "castMediaElement");
        this.wc = Aw(this, "castMetadataTitle");
        this.l = Aw(this, "castMetadataSubtitle");
        this.w = Aw(this, "castMetadataSubtitle2");
        this.W = Aw(this, "metadataImageLoader");
        this.Z = Aw(this, "castMetadataImage");
        this.I = Aw(this, "castControlsProgress");
        this.K = Aw(this, "castControlsProgressInner");
        this.M = Aw(this, "castControlsSeekable");
        this.N = Aw(this, "castControlsSeekablePlayed");
        this.da = Aw(this, "castControlsTotalTime");
        this.Na = Aw(this, "castControlsCurTime");
        this.R = Aw(this, "castBreakPosition");
        this.U = Aw(this, "castBreakTime");
        this.O = Aw(this, "repeatStatus");
        this.Ca = Aw(this, "shuffleStatus");
        this.la = Aw(this, "nextMetadataCountdown");
        this.wa = Aw(this, "nextMetadataTitle");
        this.pa = Aw(this, "nextMetadataSubtitle");
        this.sa = Aw(this, "nextMetadataImage");
        this.ka = Aw(this, "nextContentRating");
        this.C = Aw(this, "castBreakSkippableTime");
        this.G = Aw(this,
            "castSkipBreakMessage");
        this.ab = this.shadowRoot.querySelectorAll(".liveLabel");
        this.za = this.D = this.o = null;
        this.A = "";
        this.g = new Zu;
        this.H = new gv(this.g);
        this.Gb = cast.B.Cd.F();
        yw(this);
        this.H.addEventListener("*", this.Op.bind(this));
        this.ca = new $v(this.H);
        this.ca.addEventListener("changed", function() {
            var d = a.ca;
            a.Na.innerText = dw(d);
            var e = ew(d);
            a.da.classList.toggle("hidden", !e);
            e && (a.da.innerText = gw(d));
            e = hw(d);
            a.K.classList.toggle("hidden", !e);
            e && (e = iw(d), a.K.style.left = (e ? e / fw(d) * 100 : 0) + "%", e = iw(d),
                a.K.style.width = ("number" !== typeof e ? 0 : (cw(d) - e) / fw(d) * 100) + "%");
            e = jw(d);
            a.N.classList.toggle("hidden", !e);
            a.M.classList.toggle("hidden", !e);
            e && (a.N.style.left = lw(d) + "%", a.N.style.width = mw(d) + "%", a.M.style.left = lw(d) + "%", a.M.style.width = nw(d) + "%")
        });
        this.Gb.addEventListener("APPLICATION_CHANGED", function(d) {
            a.h.setAttribute("isBluetooth", 5 === d.playbackType)
        });
        var b = this.g,
            c;
        for (c in b) this.h.setAttribute(c, b[c]);
        uf() && this.h.setAttribute("dpadUi", !0);
        xw(this, Nw, function() {
            pw(a, a.g.applicationData);
            rw(a)
        });
        xw(this, gz, function() {
            zw(a, !!a.g.isSeeking)
        });
        xw(this, hz, function() {
            var d = String(a.g.thumbnailUrl);
            d ? ("touch" === a.g.displayType && cv(a.W, d), d = cast.receiver.J.aa.lb(d), a.Z.style.backgroundImage = d, a.h.style.setProperty("--album-art-image", d)) : (a.h.style.removeProperty("--album-art-image"), a.Z.style.removeProperty("background-image"), cv(a.W, null))
        });
        xw(this, jz, function() {
            rw(a)
        });
        xw(this, Fw, function() {
            var d = a.g.metadata;
            sw(a.l);
            sw(a.w);
            a.A = "";
            a.Y.setAttribute("poster", d && d.posterUrl || "");
            if (d) switch (a.A =
                d.title, d.metadataType) {
                case 1:
                    tw(a.l, d.subtitle);
                    tw(a.w, d.studio);
                    (d = d.releaseDate) && tw(a.w, d.substr(0, 4));
                    break;
                case 2:
                    (d.season || d.episode) && tw(a.l, cast.receiver.V.sg(d.season, d.episode));
                    var e = d.originalAirdate;
                    e && tw(a.l, e.substr(0, 4));
                    tw(a.w, d.seriesTitle);
                    break;
                case 3:
                    tw(a.l, d.artist || d.albumArtist || d.composer);
                    tw(a.w, d.albumName);
                    break;
                case 5:
                    d.chapterTitle && (a.A = d.chapterTitle);
                    tw(a.l, d.bookTitle || d.subtitle);
                    break;
                default:
                    d.subtitle && (a.l.innerText = d.subtitle)
            }
            rw(a)
        });
        xw(this, Xv, function() {
            a.g.isPlayingBreak &&
                vw(a);
            if (a.g.preloadingNext) {
                var d = cast.receiver.V.jo((a.g.duration - a.g.currentTime).toFixed(0));
                a.la.innerText !== d && (a.la.innerText = d)
            }
            a.h.classList.toggle("showNextOverlay", !a.g.isPlayingBreak && !a.g.isSeeking && a.g.preloadingNext && 20 > a.g.duration - a.g.currentTime)
        });
        xw(this, Pw, function() {
            uw(a, a.g.currentBreakClipNumber, a.g.numberBreakClips)
        });
        xw(this, Ow, function() {
            uw(a, a.g.currentBreakClipNumber, a.g.numberBreakClips)
        });
        xw(this, Kw, function() {
            ww(a, a.g.breakPercentagePositions)
        });
        xw(this, Mw, function() {
            vw(a)
        });
        xw(this, Iw, function() {
            vw(a)
        });
        xw(this, iz, function() {
            var d = a.g.nextMetadata;
            if (d) {
                var e = d.title || "",
                    f = d.subtitle || "",
                    g = d.images && d.images[0] && d.images[0].url || "";
                2 === d.metadataType ? f = cast.receiver.V.sg(d.season, d.episode) || "" : 3 === d.metadataType ? f = d.artist || d.albumArtist || d.composer || "" : 5 === d.metadataType && (e = d.chapterTitle || "", f = d.bookTitle || d.subtitle || "");
                a.wa.innerText = e;
                a.pa.innerText = f;
                qw(a.sa, g);
                d = d.contentRating;
                qw(a.ka, d && d.ratingIcon && d.ratingIcon.url || null)
            } else a.wa.innerText = "", a.pa.innerText =
                "", qw(a.sa, ""), qw(a.ka, "")
        });
        xw(this, Dw, function() {
            var d = a.g.queueData;
            if (d) {
                if (d.repeatMode) {
                    var e = d.repeatMode;
                    "REPEAT_ALL_AND_SHUFFLE" === e && (e = "REPEAT_ALL");
                    a.O.dataset.state = e
                } else a.O.dataset.state = "REPEAT_OFF";
                L(a.Ca, d.shuffle)
            } else a.O.dataset.state = "REPEAT_OFF", L(a.Ca, !1)
        });
        xw(this, Gw, function() {
            if (a.D) {
                var d = a.D,
                    e = a.g.state;
                d.stop();
                "idle" === e ? (d.h.classList.add("active"), d.start()) : d.h.classList.remove("active")
            }
        });
        xw(this, Lw, function() {
            a.ab.forEach(function(d) {
                d.classList.toggle("live-edge",
                    a.g.isAtLiveEdge)
            })
        })
    };
    _.h.attachedCallback = function() {
        this.hasAttribute("crossorigin") && "" !== this.getAttribute("crossorigin") && this.getMediaElement().setAttribute("crossorigin", this.getAttribute("crossorigin"));
        this.D = new Mv(Aw(this, "castSlideshowElement"));
        "idle" == this.g.state && this.D.start()
    };
    _.h.connectedCallback = function() {
        this.attachedCallback()
    };
    _.h.getMediaElement = function() {
        return this.Y
    };
    _.h.Op = function(a) {
        if (a.type !== gz) {
            if (a.type === Gw) {
                if ("loading" === this.za && "buffering" === this.g.state) return;
                this.za = this.g.state
            }
            this.h.setAttribute(a.field, a.value)
        }
    };
    ow.prototype.getMediaElement = ow.prototype.getMediaElement;
    window.customElements && window.customElements.define ? window.customElements.define("cast-media-player", ow) : document.registerElement("cast-media-player", {
        prototype: ow.prototype
    });
    cast.B.J.zr = ow;
    var kz = {},
        Hw = (kz.launching = "IDLE", kz.idle = "IDLE", kz.loading = "LOADING", kz.buffering = "BUFFERING", kz.paused = "PAUSED", kz.playing = "PLAYING", kz);
    _.q(Qw, Tn);
    Qw.prototype.U = function() {
        return new ko("__touch_controls__")
    };
    Qw.prototype.ac = function(a, b, c) {
        Wn(this, a, b, c)
    };
    Qw.prototype.Mc = function(a) {
        ed("Cast.Controls.MediaBrowseContentSet", !!a);
        a = Jh(a ? a : null);
        document.documentElement.dataset.castExtendedControls = a ? "true" : "";
        a && B("Cast.Controls.MediaBrowseAspectRatio", nx[a.targetAspectRatio] || 0);
        this.K && this.K.h.setAttribute("mediaBrowse", a ? "true" : "false");
        this.g.Mc(a)
    };
    _.q(Rw, mo);
    cast.B.J.kl = Rw;
    _.Ga(Rw);
    Rw.F();
    _.h = Tw.prototype;
    _.h.ac = function(a, b) {
        var c = this;
        Uw(this, function() {
            c.g.ac(a, b, !0)
        })
    };
    _.h.Mc = function(a) {
        var b = this;
        Uw(this, function() {
            b.g.Mc(a)
        })
    };
    _.h.fg = function() {
        var a = this;
        Uw(this, function() {
            a.g.fg()
        })
    };
    _.h.Zj = function() {
        hd("Cast.Receiver.setScrubberVisibility")
    };
    _.h.vq = function(a) {
        var b = this;
        ed("Cast.Receiver.setDcVisibility", a);
        Uw(this, function() {
            var c = b.g.g.l;
            c.G = a;
            Uh(c)
        })
    };
    _.h.Do = function() {
        var a = window.document.createElement("div");
        a.style.position = "absolute";
        a.style.visibility = "hidden";
        a.style.left = "-1000px";
        a.style.setProperty("height", "var(--cast-controls-safe-area-height)");
        window.document.body.appendChild(a);
        var b = parseInt(window.getComputedStyle(a, null).height, 10);
        a.remove();
        return b
    };
    _.v("cast.framework.ui.Controls", Tw, void 0);
    Tw.prototype.getSafeAreaHeight = Tw.prototype.Do;
    Tw.prototype.setDcVisibility = Tw.prototype.vq;
    Tw.prototype.setScrubberVisibility = Tw.prototype.Zj;
    Tw.prototype.clearDefaultSlotAssignments = Tw.prototype.fg;
    Tw.prototype.setBrowseContent = Tw.prototype.Mc;
    Tw.prototype.assignButton = Tw.prototype.ac;
    var Sw = _.F("cast.framework.ui.Controls");
    _.Ga(Tw);
    Tw.getInstance = Tw.F;
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", function() {
        Tw.F()
    }) : Tw.F();
    _.v("cast.framework.ui.ControlsButton", {
        QUEUE_NEXT: "queue-next",
        QUEUE_PREV: "queue-prev",
        SEEK_FORWARD_10: "seek-forward-10",
        SEEK_FORWARD_15: "seek-forward-15",
        SEEK_FORWARD_30: "seek-forward-30",
        SEEK_BACKWARD_10: "seek-backward-10",
        SEEK_BACKWARD_15: "seek-backward-15",
        SEEK_BACKWARD_30: "seek-backward-30",
        CAPTIONS: "captions",
        NO_BUTTON: "no-button",
        REPEAT: "repeat",
        SHUFFLE: "shuffle",
        LIKE: "like",
        DISLIKE: "dislike"
    }, void 0);
    _.v("cast.framework.ui.ControlsSlot", {
        SLOT_1: "slot-1",
        SLOT_2: "slot-2",
        SLOT_3: "slot-3",
        SLOT_4: "slot-4",
        SLOT_PRIMARY_1: "slot-primary-1",
        SLOT_PRIMARY_2: "slot-primary-2",
        SLOT_SECONDARY_1: "slot-secondary-1",
        SLOT_SECONDARY_2: "slot-secondary-2"
    }, void 0);
    _.v("cast.framework.LoggerLevel", {
        DEBUG: 0,
        VERBOSE: 500,
        INFO: 800,
        WARNING: 900,
        ERROR: 1E3,
        NONE: 1500
    }, void 0);
    _.h = Vw.prototype;
    _.h.initialize = function() {
        return null
    };
    _.h.onCurrentItemIdChanged = function() {};
    _.h.nextItems = function() {
        return []
    };
    _.h.prevItems = function() {
        return []
    };
    _.h.fetchItems = function() {
        return []
    };
    _.h.onItemsInserted = function() {};
    _.h.onItemsRemoved = function() {};
    _.h.shuffle = function() {
        return null
    };
    _.h.Tf = function() {
        return null
    };
    _.v("cast.framework.QueueBase", Vw, void 0);
    Vw.prototype.unshuffle = Vw.prototype.Tf;
    Vw.prototype.shuffle = Vw.prototype.shuffle;
    Vw.prototype.onItemsRemoved = Vw.prototype.onItemsRemoved;
    Vw.prototype.onItemsInserted = Vw.prototype.onItemsInserted;
    Vw.prototype.fetchItems = Vw.prototype.fetchItems;
    Vw.prototype.prevItems = Vw.prototype.prevItems;
    Vw.prototype.nextItems = Vw.prototype.nextItems;
    Vw.prototype.onCurrentItemIdChanged = Vw.prototype.onCurrentItemIdChanged;
    Vw.prototype.initialize = Vw.prototype.initialize;
})();