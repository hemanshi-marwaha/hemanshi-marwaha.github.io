(function() {
    function t() {
        return b.pageYOffset || x.scrollTop
    }

    function e() {
        return Math.max(R.scrollHeight, R.offsetHeight, x.clientHeight, x.scrollHeight, x.offsetHeight)
    }

    function n(t, e, n) {
        n === void 0 && (n = A);
        var r = T.createElement("canvas");
        return l("width", t * n, r), l("height", e * n, r), r
    }

    function r(t, e, n, r, i) {
        i.save(), i.translate(t, e), i.scale(r, r), i.rotate(Math.PI / 4), i.fillRect(-n / 2, -n / 2, n, n), i.restore()
    }

    function i(t) {
        return T.querySelector(t)
    }

    function a(t) {
        var e = T.querySelectorAll(t);
        return [].slice.call(e)
    }

    function o(t) {
        return t.getContext("2d", {})
    }

    function u(t) {
        return t.getBoundingClientRect()
    }

    function l(t, e, n) {
        n.setAttribute(t, e)
    }

    function s(t, e) {
        e.fillStyle = t
    }

    function c(t) {
        return Math.random() * t
    }

    function h(t) {
        return t * t * (3 - 2 * t)
    }

    function f(t, e) {
        for (var n = 0; t > n; n++) e(n)
    }

    function d(t, e) {
        for (var n = 0; t.length > n; n++) e(t[n], n)
    }

    function g(t, e, n) {
        l("width", t.width * e, n), l("height", t.height * e, n)
    }

    function p() {
        var r = !1,
            i = a(".Scene-mountains"),
            l = null;
        return d(i, function(i) {
            function a() {
                function n() {
                    function t() {
                        return v.getUniformLocation.apply(v, arguments)
                    }

                    function e() {
                        return v.texParameteri.apply(v, arguments)
                    }
                    try {
                        v = i.getContext("experimental-webgl", {
                            premultipliedAlpha: !0,
                            alpha: !0
                        })
                    } catch (n) {}
                    if (!v) return !1;
                    if (k = v.createBuffer(), v.bindBuffer(v.ARRAY_BUFFER, k), v.bufferData(v.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]), v.STATIC_DRAW), s = a(j, m), null == s) return !1;
                    c = t(s, "t"), d = t(s, "r"), g = t(s, "s"), f = t(s, "sunSize");
                    var r = v.TEXTURE_2D,
                        o = v.createTexture();
                    return v.bindTexture(r, o), e(r, v.TEXTURE_WRAP_S, v.CLAMP_TO_EDGE), e(r, v.TEXTURE_WRAP_T, v.CLAMP_TO_EDGE), e(r, v.TEXTURE_MIN_FILTER, v.LINEAR), e(r, v.TEXTURE_MAG_FILTER, v.LINEAR), v.texImage2D(r, 0, v.RGBA, v.RGBA, v.UNSIGNED_BYTE, p), !0
                }

                function a(t, e) {
                    var n = v.createProgram(),
                        r = o(t, v.VERTEX_SHADER),
                        i = o("#ifdef GL_ES\nprecision highp float;\n#endif\n\n" + e, v.FRAGMENT_SHADER);
                    return null == r || null == i ? null : (v.attachShader(n, r), v.attachShader(n, i), v.deleteShader(r), v.deleteShader(i), v.linkProgram(n), v.getProgramParameter(n, v.LINK_STATUS) ? n : null)
                }

                function o(t, e) {
                    var n = v.createShader(e);
                    return v.shaderSource(n, t), v.compileShader(n), v.getShaderParameter(n, v.COMPILE_STATUS) ? n : null
                }

                function u() {
                    var n = "true" == i.getAttribute("data-stop-on-scroll"),
                        a = t();
                    (n && b.innerHeight > a || !n && a > e() - b.innerHeight - 200) && l(), r || _(u)
                }

                function l() {
                    if (s) {
                        var e = Math.max(0, 1 - t() / (.5 * b.innerHeight));
                        if (0 != e || 0 != y) {
                            y = e, E = (new Date).getTime() - w, v.clearColor(0, 0, 0, 0), v.clear(v.COLOR_BUFFER_BIT | v.DEPTH_BUFFER_BIT), v.useProgram(s), v.uniform1f(c, E / 1e3), v.uniform1f(g, "true" == i.getAttribute("data-stop-on-scroll") ? e : 0), v.uniform2f(d, h.width * A, h.height * A), v.uniform1f(f, S), v.bindBuffer(v.ARRAY_BUFFER, k);
                            var n;
                            v.vertexAttribPointer(n, 2, v.FLOAT, !1, 0, 0), v.enableVertexAttribArray(n), v.drawArrays(v.TRIANGLES, 0, 6), v.disableVertexAttribArray(n), v.viewport(0, 0, h.width * A, h.height * A)
                        }
                    }
                }
                var s, c, f, d, g, k, v, j = L.vert,
                    m = L.frag,
                    w = (new Date).getTime(),
                    E = 0;
                if (!n()) return !1;
                u();
                var y = -1;
                return !0
            }

            function c() {
                function t(t, e, n) {
                    i.beginPath();
                    var r = 0,
                        a = !1;
                    f(t.length, function(o) {
                        var u = t.charAt(o);
                        r += "." == u ? 0 : "j" == u ? -1 : 1, 0 == r || a || (a = !0, i.moveTo((d.x + (o - 1) * l * e) * A, d.y * A)), i.lineTo((d.x + o * l * e) * A, (d.y + r * l * n) * A)
                    }), i.closePath(), i.fill()
                }

                function e(e, n, r) {
                    s(n, i), i.strokeStyle = n, i.lineWidth = 4, i.lineJoin = "round", t(c.left[e], -1, -1), t(c.right[e], 1, -1), s(r, i), i.strokeStyle = r, t(c.left[e], -1, 1), t(c.right[e], 1, 1), i.strokeStyle = "transparent"
                }
                var r = n(h.width, h.height);
                g(h, A, r);
                var i = o(r),
                    a = 20;
                700 > b.innerWidth && (a = 15);
                var u = Math.round(h.width / a),
                    l = h.width / u,
                    c = {
                        left: ["......kkkkjjjkkjjkjkkjjkkkkkjjjjjj..kkjj", "....kkkjjj..kkkkjkkjjjj.......kkkkjjjjj", "...kkjj...kkkkjjj..kkkjkjjjj.....kkkkjjkjjj"],
                        right: ["......kkkkjjjkkjjjkkkjjkkkkkjjjjjkjj..kkkjjj", "....kkkjjjkkkkjjjkkjj.......kkkkjjjjj", "...kkjj.kkkkjjkkjjjjkkkkjkjjjj...kkkkjkjjjj"]
                    };
                e(2, w.pink, w.green), e(1, w.purple, w.pink), e(0, w.blackish, w.purple);
                var p = n(h.width, h.height),
                    k = o(p);
                return k.drawImage(r, 0, 0), i.save(), i.globalCompositeOperation = "source-atop", i.drawImage(p, 0, 0), k.clearRect(0, 0, h.width * A, h.height * A), k.restore(), k.drawImage(r, 0, 0), i.clearRect(0, 0, h.width * A, h.height * A), i.restore(), s(w.whiteish, i), i.beginPath(), S = 2.5 * l * A, i.arc(d.x * A, d.y * A, S, Math.PI, 2 * Math.PI), i.fill(), i.drawImage(p, 0, 0), r
            }
            var h = u(i);
            g(h, A, i);
            var d = {
                x: h.width / 2,
                y: h.height / 2
            };
            null == l && (l = c());
            var p = l;
            a(), i.style.opacity = .9999
        }), {
            stop: function() {
                r = !0
            }
        }
    }

    function k() {
        function e() {
            return {
                x: c(f.width),
                y: c(f.height),
                s: 0,
                speed: .01 + c(.035),
                growing: !0,
                maxSize: 1 + 10 * Math.pow(c(1), 4)
            }
        }
        var n = i(".Scene-stars"),
            a = !1,
            l = o(n),
            f = u(n);
        g(f, A, n);
        var p = [],
            k = [{
                p: 2.1,
                a: .01,
                s: 50
            }, {
                p: 1.7,
                a: .01,
                s: 30
            }, {
                p: 1.5,
                a: .01,
                s: 350
            }, {
                p: 1.3,
                a: .012,
                s: 35
            }, {
                p: 1,
                a: .02,
                s: 100
            }, {
                p: .94,
                a: .025,
                s: 50
            }, {
                p: .85,
                a: .036,
                s: 60
            }, {
                p: .65,
                a: .03,
                s: 50
            }, {
                p: .5,
                a: .035,
                s: 150
            }, {
                p: .47,
                a: .05,
                s: 40
            }, {
                p: .4,
                a: .055,
                s: 50
            }, {
                p: .25,
                a: .07,
                s: 70
            }, {
                p: -.19,
                a: .06,
                s: 30
            }, {
                p: -.3,
                a: .06,
                s: 70
            }, {
                p: -.6,
                a: .04,
                s: 45
            }, {
                p: -.9,
                a: .07,
                s: 30
            }, {
                p: -1.2,
                a: .06,
                s: 25
            }, {
                p: -1.5,
                a: .04,
                s: 50
            }, {
                p: -1.9,
                a: .02,
                s: 100
            }];
        return function v() {
            var n = t();
            if (b.innerHeight > n) {
                l.clearRect(0, 0, f.width * A, f.height * A), s(w.whiteish, l);
                var i = [];
                d(p, function(t) {
                    t.s += t.speed * (t.growing ? 1 : -1), t.s > 1 && (t.growing = !1), 0 > t.s || (i.push(t), r(t.x * A, t.y * A, 1, h(t.s) * t.maxSize * A, l))
                }), c(1) < 5e-7 * b.innerWidth * b.innerHeight && i.push(e()), p = i;
                var o = .75 * y - n;
                d(k, function(t) {
                    l.globalAlpha = t.a;
                    var e = t.p,
                        i = 1 - e,
                        a = n + o * i + (y - o) * e;
                    r(f.width / 2 * A, a * A, 1, t.s * A, l)
                }), l.globalAlpha = 1
            }
            a || _(v)
        }(), {
            stop: function() {
                a = !0
            }
        }
    }

    function v() {
        var t = document.createElement("div");
        t.style.position = "absolute", t.style.height = "100vh", document.body.appendChild(t);
        var e = t.getBoundingClientRect().height;
        return t.remove(), 0 == e && (e = b.innerHeight), e
    }

    function j(e) {
        var n = u(e.video);
        n = {
            top: n.top + t(),
            height: n.height
        }, e.bounds = n
    }

    function m() {
        void 0 !== F && d(F, j)
    }
    var w = {
            whiteish: "#FFEDDB",
            yellow: "#F7F7B6",
            pink: "#E96F92",
            purple: "#75517D",
            blackish: "#1B2947",
            green: "#54fad4"
        },
        E = 120,
        y = 0,
        b = window,
        A = b.devicePixelRatio,
        T = document,
        R = T.body,
        x = T.documentElement,
        S = 100,
        L = {
            vert: "attribute vec3 position;void main(){gl_Position=vec4(position,1.0);}",
            frag: "uniform float t;uniform float s;uniform vec2 r;uniform sampler2D i;void main(){vec2 pixel=vec2(1.0)/r;vec2 p=gl_FragCoord.xy/r;p=vec2(p.x,1.0-p.y);if(p.y>0.5){float dist=(p.y-0.5)/0.5;float w=(dist*8.5)-t*1.0;float x=(sin(w*3.0-(t*4.0))+3.0)*0.5;w-=x*0.15;w=w-floor(w);w=(floor(w*4.0)-0.4)/4.0;p.y+=w*0.35*dist*s;}gl_FragColor=texture2D(i,p);}"
        };
    L.frag = document.getElementById("fs").textContent;
    var _ = requestAnimationFrame;
    (function() {
        var t = p(),
            e = k(),
            n = b.innerWidth,
            r = b.innerHeight,
            i = null;
        b.addEventListener("resize", function() {
            function o() {
                var i = b.innerWidth,
                    o = b.innerHeight;
                if (i != n) {
                    n = i, t.stop(), e.stop();
                    var u = a(".Scene-mountains");
                    d(u, function(t) {
                        t.removeAttribute("width"), t.removeAttribute("height")
                    }), _(function() {
                        t = p(), e = k()
                    })
                }
                Math.abs(o - r) > E && (r = o, e.stop(), _(function() {
                    e = k()
                }))
            }
            null != i && (clearTimeout(i), i = null), i = setTimeout(o, 1e3)
        })
    })(),
    function() {
        function t() {
            var t = v();
            d(a(".js-HasVH"), function(e) {
                e.style.height = t * parseFloat(e.getAttribute("data-vh")) + "px"
            }), y = t, m()
        }
        var e = b.innerHeight;
        t(), b.addEventListener("resize", function() {
            var n = b.innerHeight;
            Math.abs(n - e) > E && (t(), e = n)
        })
    }(),
    function() {
        d(a(".js-Lazyload"), function(t) {
            t.classList.remove("js-Lazyload--hidden");
            var e = document.createElement("img"),
                n = "true" == t.getAttribute("data-hires") && A > 1,
                r = t.getAttribute("data-image");
            if (n) {
                var i = r.lastIndexOf(".");
                r = r.substr(0, i) + "@2x" + r.substr(i)
            }
            l("src", r, e), l("role", "presentation", e), t.appendChild(e)
        })
    }();
    var F = a(".Work-video").map(function(t) {
        function e() {
            n.initialized || (t.play(), t.pause(), n.initialized = !0)
        }
        var n = {
            video: t,
            bounds: null,
            initialized: !1,
            playing: !1
        };
        return j(n), t.addEventListener("play", function() {
            n.playing = !0, t.classList.add("Work-video--playing"), t.classList.remove("Work-video--paused")
        }), t.addEventListener("pause", function() {
            n.playing = !1, t.classList.remove("Work-video--playing"), t.classList.add("Work-video--paused")
        }), t.classList.add("Work-video--paused"), document.addEventListener("touchstart", function r() {
            e(), document.removeEventListener("touchstart", r)
        }), n
    });
    (function() {
        var e = 0;
        (function n() {
            var r = t();
            if (r != e) {
                var i = r + y / 2;
                d(F, function(t) {
                    var e = 120,
                        n = t.bounds.top + t.bounds.height / 2;
                    i > n - e && n + e > i ? t.playing || t.video.play() : t.playing && t.video.pause()
                })
            }
            _(n)
        })()
    })(),
    function() {
        var t = i(".Email");
        l("href", "mailto:marwaha.hemanshi@gmail.com", t), t.innerHTML = "<strong>marwaha.hemanshi</strong>@<strong>gmail</strong>.com"
    }();
    var H = !1;
    window.addEventListener("hashchange", function(t) {
            H && t.preventDefault()
        }),
        function() {
            var t = a(".Nav-link");
            d(t, function(t) {
                t.addEventListener("click", function(n) {
                    n.preventDefault();
                    var r = i(".ScrollWrapper"),
                        a = t.getAttribute("href"),
                        o = 768 >= b.innerWidth ? 60 : 80;
                    "#about" != a && (o = 30), H = !0, window.history.pushState("", {}, a), requestAnimationFrame(function() {
                        H = !1
                    }), a = i(a);
                    var l = u(a),
                        s = Math.round(l.top) - o,
                        c = e();
                    s + b.innerHeight > c && (s = c - b.innerHeight), b.scrollTo(0, s), r.style.transform = "translate3d(0," + s + "px,0)";
                    var h = 300 + .3 * s,
                        f = 0,
                        d = s,
                        g = 0,
                        p = g - d,
                        k = d,
                        v = function(t) {
                            return .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t
                        },
                        j = function(t) {
                            return .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
                        },
                        m = s > 1e3,
                        w = function(t) {
                            return m ? j(t) : v(t)
                        };
                    _(function() {
                        var t = Date.now(),
                            e = Date.now(),
                            n = 0,
                            i = [];
                        (function a() {
                            var o = Date.now();
                            e = o, f = (e - t) / h, f > 1 && (f = 1);
                            var u = d + w(f) * p,
                                l = Math.min(0, u - k + 5);
                            i = 1 > f ? [l].concat(i.slice(0, 2)) : i.slice(0, i.length - 1), k = u, n += l, r.style.transform = "translate3d(0," + u + "px,0)", (1 > f || i.length > 0) && _(a)
                        })()
                    })
                })
            })
        }()
})();
/*
//@ sourceMappingURL=/js/main.map.js
*/

document.addEventListener('DOMContentLoaded', function () {
    const textArray = ["Data Analyst", "Market Intelligence Analyst"];
    const typingSpeed = 100; // Speed of typing in milliseconds
    const deletingSpeed = 50; // Speed of deleting in milliseconds
    const delayBetweenCycles = 1500; // Delay between typing cycles in milliseconds

    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isTyping = true;
    const textElement = document.querySelector('.typing-container');

    function type() {
      if (isTyping) {
        if (currentCharIndex < textArray[currentTextIndex].length) {
          textElement.textContent += textArray[currentTextIndex][currentCharIndex];
          currentCharIndex++;
          setTimeout(type, typingSpeed);
        } else {
          isTyping = false;
          setTimeout(deleteText, delayBetweenCycles);
        }
      }
    }

    function deleteText() {
      if (!isTyping) {
        if (currentCharIndex > 0) {
          textElement.textContent = textElement.textContent.slice(0, -1);
          currentCharIndex--;
          setTimeout(deleteText, deletingSpeed);
        } else {
          isTyping = true;
          currentTextIndex = (currentTextIndex + 1) % textArray.length;
          setTimeout(type, typingSpeed);
        }
      }
    }

    // Initial call
    type();
  });

// Get the elements
const viewProjectBtn = document.getElementById('viewProjectBtn');
const popupWindow = document.getElementById('popupWindow');
const popupClose = document.querySelector('.popup-close');

// Open the popup when the button is clicked
viewProjectBtn.addEventListener('click', function(event) {
  event.preventDefault();
  popupWindow.style.display = 'flex'; // Display the popup
});

// Close the popup when the close button is clicked
popupClose.addEventListener('click', function() {
  popupWindow.style.display = 'none'; // Hide the popup
});

// Close the popup when clicking outside the popup content
window.addEventListener('click', function(event) {
  if (event.target === popupWindow) {
    popupWindow.style.display = 'none';
  }
});



var currentImageIndex = 0;
var images = [
  "img/a2.png",
  "img/a4.png",
  "img/a6.png"
];

function openImageViewer(index) {
  currentImageIndex = index;
  document.getElementById("imageViewerImg").src = images[index];
  document.getElementById("imageViewer").style.display = "flex";
}

function closeImageViewer() {
  document.getElementById("imageViewer").style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  document.getElementById("imageViewerImg").src = images[currentImageIndex];
}
