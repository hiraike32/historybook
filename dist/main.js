!(function(n) {
  function e(e) {
    for (
      var o, s, c = e[0], i = e[1], l = e[2], m = 0, u = [];
      m < c.length;
      m++
    )
      (s = c[m]), r[s] && u.push(r[s][0]), (r[s] = 0);
    for (o in i) Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    for (d && d(e); u.length; ) u.shift()();
    return a.push.apply(a, l || []), t();
  }
  function t() {
    for (var n, e = 0; e < a.length; e++) {
      for (var t = a[e], o = !0, c = 1; c < t.length; c++) {
        var i = t[c];
        0 !== r[i] && (o = !1);
      }
      o && (a.splice(e--, 1), (n = s((s.s = t[0]))));
    }
    return n;
  }
  var o = {},
    r = { 0: 0 },
    a = [];
  function s(e) {
    if (o[e]) return o[e].exports;
    var t = (o[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, s), (t.l = !0), t.exports;
  }
  (s.m = n),
    (s.c = o),
    (s.d = function(n, e, t) {
      s.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
    }),
    (s.r = function(n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (s.t = function(n, e) {
      if ((1 & e && (n = s(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (s.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var o in n)
          s.d(
            t,
            o,
            function(e) {
              return n[e];
            }.bind(null, o)
          );
      return t;
    }),
    (s.n = function(n) {
      var e =
        n && n.__esModule
          ? function() {
              return n.default;
            }
          : function() {
              return n;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function(n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (s.p = "");
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    i = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var l = 0; l < c.length; l++) e(c[l]);
  var d = i;
  a.push([31, 1]), t();
})([
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.circleAnime = {
        targets: "#sideIcon",
        borderColor: [
          { value: "#ff0000" },
          { value: "#0df400" },
          { value: "#ffff1e" },
          { value: "#e60aff" },
          { value: "#0afffb" },
          { value: "#f49e00" }
        ],
        rotate: { value: "4turn", duration: 2e4, easing: "easeInOutSine" },
        duration: 2e4,
        loop: !0
      }),
      (e.Menus = [
        { link: "/", style: "redHover", name: "HOME" },
        { link: "/about", style: "greenHover", name: "ABOUT" },
        { link: "/works", style: "blueHover", name: "WORKS" },
        { link: "/contact", style: "orangeHover", name: "CONTACT" }
      ]);
  },
  ,
  ,
  ,
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.default = [
      "#ff0000",
      "#0afffb",
      "#f49e00",
      "#ffff1e",
      "#0df400",
      "#e60aff",
      "#004aff"
    ];
  },
  ,
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(40);
    e.About = o.default;
    var r = t(18);
    e.Contact = r.default;
    var a = t(57);
    e.Sidebar = a.default;
    var s = t(65);
    e.Top = s.default;
    var c = t(76);
    e.Works = c.default;
    var i = t(88);
    e.Root = i.default;
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(42);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(48);
    e.default = o.default;
  },
  ,
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(67);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(78);
    e.default = o.default;
  },
  ,
  ,
  ,
  ,
  ,
  function(n, e, t) {
    var o = t(96);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    var o = t(97);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(98);
    e.About = o.default;
    var r = t(104);
    e.Sidebar = r.default;
    var a = t(112);
    e.Top = a.default;
    var s = t(120);
    e.Works = s.default;
    var c = t(18);
    e.Contact = c.default;
    var i = t(128);
    e.Root = i.default;
  },
  ,
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(1)),
      a = o(t(13)),
      s = t(9),
      c = o(t(39));
    a.default.render(
      r.default.createElement(
        s.BrowserRouter,
        { basename: "historybook" },
        r.default.createElement(c.default, null)
      ),
      document.getElementById("app")
    );
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(1)),
      a = t(16),
      s = t(29);
    t(129);
    e.default = () => {
      const n = window.innerWidth > 960;
      return r.default.createElement(
        r.default.Fragment,
        null,
        n
          ? r.default.createElement(a.Root, null)
          : r.default.createElement(s.Root, null)
      );
    };
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(41);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(5)),
      a = o(t(1)),
      s = o(t(14)),
      c = o(t(17)),
      i = o(t(46)),
      l = r.default.bind(i.default);
    e.default = () =>
      a.default.createElement(
        "div",
        { className: l("container") },
        s.default.map(n =>
          a.default.createElement("div", {
            className: l("background"),
            style: { background: n },
            key: n
          })
        ),
        a.default.createElement(
          "div",
          { className: l("title") },
          a.default.createElement("h1", { className: l("titleFont") }, "ABOUT")
        ),
        a.default.createElement(
          "div",
          { className: l("detailContainer"), id: "detailContainer" },
          a.default.createElement(
            "div",
            { className: l("detailTitle") },
            "Takuya Hiraike（24）"
          ),
          c.default.map(n =>
            a.default.createElement(
              "div",
              { className: l("detailText"), key: n.title },
              n.title,
              a.default.createElement(
                "div",
                { className: l("darkFont") },
                n.detail
              )
            )
          )
        )
      );
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(5)),
      a = o(t(1)),
      s = o(t(43)),
      c = r.default.bind(s.default),
      i = [
        {
          title: "Front End Engineer",
          detail: a.default.createElement(
            "span",
            null,
            "HTML / CSS / SCSS",
            a.default.createElement("br", null),
            "ES6+ / TypeScript",
            a.default.createElement("br", null),
            "react / redux",
            a.default.createElement("br", null),
            "webpack / yarn / storybook",
            a.default.createElement("br", null),
            "git / fish / prettier",
            a.default.createElement("br", null)
          )
        },
        {
          title: "Source Code",
          detail: a.default.createElement(
            "a",
            { href: "https://github.com/hiraike32", target: "_blank" },
            "Github"
          )
        },
        {
          title: "Carrer",
          detail: a.default.createElement(
            "span",
            null,
            a.default.createElement(
              "div",
              { className: c("workPeriod") },
              "2018/08~"
            ),
            "Dwango / Front End (JS - React)",
            a.default.createElement(
              "div",
              { className: c("workPeriod") },
              "2018/06~"
            ),
            "Smiloops / Back End (PHP - Laravel)",
            a.default.createElement(
              "div",
              { className: c("workPeriod") },
              "2017/09~"
            ),
            "Bravesoft / Front End (JS - jQuery)"
          )
        }
      ];
    e.default = i;
  },
  function(n, e, t) {
    var o = t(44);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-Common-About-assets-_smallFont_3FMiz {\n  font-size: 0.8rem;\n  margin: -0.5rem 0; }\n\n.src-components-Common-About-assets-_workPeriod_3XbFp {\n  font-size: 0.8rem;\n  margin-bottom: -0.5rem; }\n",
      ""
    ]),
      (e.locals = {
        smallFont: "src-components-Common-About-assets-_smallFont_3FMiz",
        workPeriod: "src-components-Common-About-assets-_workPeriod_3XbFp"
      });
  },
  ,
  function(n, e, t) {
    var o = t(47);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-PC-About-_container_2SaGM {\n  overflow: hidden; }\n\n.src-components-PC-About-_background_2Da6G {\n  width: 70vw;\n  height: 100vh;\n  position: fixed;\n  left: -70vw;\n  opacity: 0.7;\n  animation: src-components-PC-About-_slide_4kuVb 5s ease-in-out infinite alternate;\n  z-index: 10; }\n  .src-components-PC-About-_background_2Da6G:nth-child(1) {\n    animation-delay: -1.2s; }\n  .src-components-PC-About-_background_2Da6G:nth-child(2) {\n    animation-delay: 0s; }\n  .src-components-PC-About-_background_2Da6G:nth-child(3) {\n    animation-delay: 1.2s; }\n  .src-components-PC-About-_background_2Da6G:nth-child(4) {\n    animation-delay: 2.4s; }\n  .src-components-PC-About-_background_2Da6G:nth-child(5) {\n    animation-delay: 3.6s; }\n  .src-components-PC-About-_background_2Da6G:nth-child(6) {\n    animation-delay: 4.8s; }\n\n@keyframes src-components-PC-About-_slide_4kuVb {\n  0% {\n    transform: translateX(-70vw); }\n  100% {\n    transform: translateX(70vw); } }\n\n.src-components-PC-About-_title_3LX3Z {\n  width: 70vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .src-components-PC-About-_title_3LX3Z .src-components-PC-About-_titleFont_3tUb6 {\n    z-index: 20;\n    opacity: 0.7; }\n\n.src-components-PC-About-_detailContainer_1rnX- {\n  width: 30vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 30;\n  padding: 3rem 1.5rem;\n  color: #c4c4c4;\n  overflow: scroll; }\n  .src-components-PC-About-_detailContainer_1rnX- .src-components-PC-About-_detailTitle_2X9zx {\n    font-weight: bold;\n    margin-bottom: 0.8rem;\n    font-size: 1rem; }\n  .src-components-PC-About-_detailContainer_1rnX- .src-components-PC-About-_detailText_3f3Bt {\n    line-height: 200%;\n    margin-bottom: 1.5rem;\n    font-size: 0.9rem; }\n    .src-components-PC-About-_detailContainer_1rnX- .src-components-PC-About-_detailText_3f3Bt a {\n      color: #798bd8; }\n      .src-components-PC-About-_detailContainer_1rnX- .src-components-PC-About-_detailText_3f3Bt a:hover {\n        text-decoration: none; }\n    .src-components-PC-About-_detailContainer_1rnX- .src-components-PC-About-_detailText_3f3Bt .src-components-PC-About-_darkFont_36_kO {\n      color: #8c8c8c; }\n",
      ""
    ]),
      (e.locals = {
        container: "src-components-PC-About-_container_2SaGM",
        background: "src-components-PC-About-_background_2Da6G",
        slide: "src-components-PC-About-_slide_4kuVb",
        title: "src-components-PC-About-_title_3LX3Z",
        titleFont: "src-components-PC-About-_titleFont_3tUb6",
        detailContainer: "src-components-PC-About-_detailContainer_1rnX-",
        detailTitle: "src-components-PC-About-_detailTitle_2X9zx",
        detailText: "src-components-PC-About-_detailText_3f3Bt",
        darkFont: "src-components-PC-About-_darkFont_36_kO"
      });
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(5)),
      a = o(t(1)),
      s = o(t(49)),
      c = o(t(50)),
      i = o(t(51)),
      l = o(t(55)),
      d = r.default.bind(l.default);
    e.default = () =>
      a.default.createElement(
        "div",
        { className: d("container") },
        a.default.createElement(i.default, null),
        a.default.createElement("h1", null, "Contact"),
        a.default.createElement(
          "a",
          {
            href: "https://twitter.com/hiraike32",
            target: "_blank",
            className: d("contact")
          },
          a.default.createElement(
            "div",
            { className: d("icon") },
            a.default.createElement("img", { src: c.default })
          ),
          "hiraike32"
        ),
        a.default.createElement(
          "a",
          { href: "mailto:hiraike32@gmail.com", className: d("contact") },
          a.default.createElement(
            "div",
            { className: d("icon") },
            a.default.createElement("img", { src: s.default })
          ),
          "hiraike32@gmail.com"
        )
      );
  },
  function(n, e, t) {
    n.exports = t.p + "src/components/Common/Contact/mail.png";
  },
  function(n, e, t) {
    n.exports = t.p + "src/components/Common/Contact/twittter.png";
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(52);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(5)),
      a = o(t(1)),
      s = o(t(53)),
      c = r.default.bind(s.default),
      i = [...Array(14).keys()];
    e.default = () =>
      a.default.createElement(
        a.default.Fragment,
        null,
        i.map(n =>
          a.default.createElement("div", {
            className: c("geometory", `geometory${n}`),
            key: `geometory${n}`
          })
        )
      );
  },
  function(n, e, t) {
    var o = t(54);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-Common-Contact-Background-_geometory_1u_Qs {\n  position: absolute;\n  top: 100vh; }\n\n.src-components-Common-Contact-Background-_geometory0_16nin {\n  left: 20vw;\n  width: 5rem;\n  height: 5rem;\n  background: #f00;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation0_3fFS2 3s ease-out infinite both; }\n\n.src-components-Common-Contact-Background-_geometory1_3rb8c {\n  left: 30vw;\n  width: 0;\n  height: 0;\n  border: 3rem solid transparent;\n  border-top: 5rem solid #0afffb;\n  transform-origin: 50% 25%;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation1_39I3c 4s ease-out infinite both 1s; }\n\n.src-components-Common-Contact-Background-_geometory2_4ZYSm {\n  left: 45vw;\n  width: 0;\n  height: 0;\n  border: 5rem solid transparent;\n  border-top: 8rem solid #f49e00;\n  transform-origin: 50% 25%;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation2_1-iLf 3s ease-out infinite both; }\n\n.src-components-Common-Contact-Background-_geometory3_3zSna {\n  left: 55vw;\n  width: 7rem;\n  height: 7rem;\n  background: #ffff1e;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation3_AXMOY 4s ease-out infinite both 2s; }\n\n.src-components-Common-Contact-Background-_geometory4_2yTSv {\n  left: 60vw;\n  width: 4rem;\n  height: 4rem;\n  background: #0df400;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation4_1bMVp 5s ease-out infinite both 1s; }\n\n.src-components-Common-Contact-Background-_geometory5_3akrt {\n  left: 65vw;\n  width: 0;\n  height: 0;\n  border: 4rem solid transparent;\n  border-top: 7.5rem solid #e60aff;\n  transform-origin: 50% 25%;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation5_18Re- 4s ease-out infinite both; }\n\n.src-components-Common-Contact-Background-_geometory6_1ia0a {\n  left: 75vw;\n  width: 0;\n  height: 0;\n  border: 3rem solid transparent;\n  border-top: 5rem solid #004aff;\n  transform-origin: 50% 25%;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation6_1ZzKD 5s ease-out infinite both; }\n\n.src-components-Common-Contact-Background-_geometory7_3JhrI {\n  left: 90vw;\n  width: 6rem;\n  height: 6rem;\n  border-radius: 6rem;\n  background: #f00;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation7_28VgC 4s ease-out infinite both 1s; }\n\n.src-components-Common-Contact-Background-_geometory8_3QlML {\n  left: 80vw;\n  width: 7rem;\n  height: 7rem;\n  background: #0afffb;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation8_tKgza 5s ease-out infinite both 3s; }\n\n.src-components-Common-Contact-Background-_geometory9_2jDX1 {\n  left: 10vw;\n  width: 7rem;\n  height: 7rem;\n  border-radius: 7rem;\n  background: #f49e00;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation9_3Axwa 4s ease-out infinite both 3s; }\n\n.src-components-Common-Contact-Background-_geometory10_1KQI- {\n  left: 15vw;\n  width: 0;\n  height: 0;\n  border: 5rem solid transparent;\n  border-top: 8rem solid #ffff1e;\n  transform-origin: 50% 25%;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation10_AO-r9 3.5s ease-out infinite both 1s; }\n\n.src-components-Common-Contact-Background-_geometory11_3jWhE {\n  left: 25vw;\n  width: 3rem;\n  height: 3rem;\n  background: #0df400;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation11_2A8du 5s ease-out infinite both 3s; }\n\n.src-components-Common-Contact-Background-_geometory12_16TSL {\n  left: 35vw;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 4rem;\n  background: #e60aff;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation12_2J3R_ 4s ease-out infinite both 2s; }\n\n.src-components-Common-Contact-Background-_geometory13_2gje- {\n  left: 30vw;\n  width: 0;\n  height: 0;\n  border: 6rem solid transparent;\n  border-top: 10rem solid #004aff;\n  transform-origin: 50% 25%;\n  opacity: 0.5;\n  animation: src-components-Common-Contact-Background-_rotation13_16RBd 5s ease-out infinite both 2s; }\n\n@keyframes src-components-Common-Contact-Background-_rotation0_3fFS2 {\n  0% {\n    top: 150vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 70vh;\n    transform: rotate(360deg);\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation1_39I3c {\n  0% {\n    top: 120vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 60vh;\n    transform: rotate(400deg);\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation2_1-iLf {\n  0% {\n    top: 130vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 75vh;\n    transform: rotate(360deg);\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation3_AXMOY {\n  0% {\n    top: 110vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 55vh;\n    transform: rotate(500deg);\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation4_1bMVp {\n  0% {\n    top: 130vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 65vh;\n    transform: rotate(450deg);\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation5_18Re- {\n  0% {\n    top: 110vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 55vh;\n    transform: rotate(300deg);\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation6_1ZzKD {\n  0% {\n    top: 130vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 70vh;\n    transform: rotate(350deg);\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation7_28VgC {\n  0% {\n    top: 140vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 50vh;\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation8_tKgza {\n  0% {\n    top: 110vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 65vh;\n    transform: rotate(500deg);\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation9_3Axwa {\n  0% {\n    top: 140vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 55vh;\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation10_AO-r9 {\n  0% {\n    top: 150vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 65vh;\n    transform: rotate(200deg);\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation11_2A8du {\n  0% {\n    top: 110vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 85vh;\n    transform: rotate(500deg);\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation12_2J3R_ {\n  0% {\n    top: 120vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 80vh;\n    opacity: 0; } }\n\n@keyframes src-components-Common-Contact-Background-_rotation13_16RBd {\n  0% {\n    top: 130vh; }\n  75% {\n    opacity: 0.4; }\n  100% {\n    top: 50vh;\n    transform: rotate(600deg);\n    opacity: 0; } }\n",
      ""
    ]),
      (e.locals = {
        geometory: "src-components-Common-Contact-Background-_geometory_1u_Qs",
        geometory0:
          "src-components-Common-Contact-Background-_geometory0_16nin",
        rotation0: "src-components-Common-Contact-Background-_rotation0_3fFS2",
        geometory1:
          "src-components-Common-Contact-Background-_geometory1_3rb8c",
        rotation1: "src-components-Common-Contact-Background-_rotation1_39I3c",
        geometory2:
          "src-components-Common-Contact-Background-_geometory2_4ZYSm",
        rotation2: "src-components-Common-Contact-Background-_rotation2_1-iLf",
        geometory3:
          "src-components-Common-Contact-Background-_geometory3_3zSna",
        rotation3: "src-components-Common-Contact-Background-_rotation3_AXMOY",
        geometory4:
          "src-components-Common-Contact-Background-_geometory4_2yTSv",
        rotation4: "src-components-Common-Contact-Background-_rotation4_1bMVp",
        geometory5:
          "src-components-Common-Contact-Background-_geometory5_3akrt",
        rotation5: "src-components-Common-Contact-Background-_rotation5_18Re-",
        geometory6:
          "src-components-Common-Contact-Background-_geometory6_1ia0a",
        rotation6: "src-components-Common-Contact-Background-_rotation6_1ZzKD",
        geometory7:
          "src-components-Common-Contact-Background-_geometory7_3JhrI",
        rotation7: "src-components-Common-Contact-Background-_rotation7_28VgC",
        geometory8:
          "src-components-Common-Contact-Background-_geometory8_3QlML",
        rotation8: "src-components-Common-Contact-Background-_rotation8_tKgza",
        geometory9:
          "src-components-Common-Contact-Background-_geometory9_2jDX1",
        rotation9: "src-components-Common-Contact-Background-_rotation9_3Axwa",
        geometory10:
          "src-components-Common-Contact-Background-_geometory10_1KQI-",
        rotation10:
          "src-components-Common-Contact-Background-_rotation10_AO-r9",
        geometory11:
          "src-components-Common-Contact-Background-_geometory11_3jWhE",
        rotation11:
          "src-components-Common-Contact-Background-_rotation11_2A8du",
        geometory12:
          "src-components-Common-Contact-Background-_geometory12_16TSL",
        rotation12:
          "src-components-Common-Contact-Background-_rotation12_2J3R_",
        geometory13:
          "src-components-Common-Contact-Background-_geometory13_2gje-",
        rotation13: "src-components-Common-Contact-Background-_rotation13_16RBd"
      });
  },
  function(n, e, t) {
    var o = t(56);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-Common-Contact-_container_16Pqn {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  overflow: hidden; }\n  .src-components-Common-Contact-_container_16Pqn .src-components-Common-Contact-_contact_2RX75 {\n    display: flex;\n    color: #c4c4c4;\n    margin: 0.25rem 0; }\n    .src-components-Common-Contact-_container_16Pqn .src-components-Common-Contact-_contact_2RX75 .src-components-Common-Contact-_icon_1MXfv {\n      width: 1rem;\n      height: 1rem;\n      margin-right: 0.5rem; }\n      .src-components-Common-Contact-_container_16Pqn .src-components-Common-Contact-_contact_2RX75 .src-components-Common-Contact-_icon_1MXfv img {\n        width: 100%; }\n",
      ""
    ]),
      (e.locals = {
        container: "src-components-Common-Contact-_container_16Pqn",
        contact: "src-components-Common-Contact-_contact_2RX75",
        icon: "src-components-Common-Contact-_icon_1MXfv"
      });
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(58);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(8)),
      a = o(t(5)),
      s = o(t(1)),
      c = t(10),
      i = o(t(59)),
      l = o(t(61)),
      d = a.default.bind(i.default);
    e.default = class extends s.default.Component {
      constructor() {
        super(...arguments),
          (this.state = { isOpenSidebar: !1 }),
          (this.changeSidebar = () => {
            this.setState({ isOpenSidebar: !this.state.isOpenSidebar });
          });
      }
      componentDidMount() {
        r.default(c.circleAnime);
      }
      render() {
        return s.default.createElement(
          s.default.Fragment,
          null,
          s.default.createElement(
            "div",
            { className: d("sideIconContainer"), onClick: this.changeSidebar },
            s.default.createElement("div", {
              id: "sideIcon",
              className: d("sideIcon")
            })
          ),
          s.default.createElement(l.default, {
            isOpenSidebar: !this.state.isOpenSidebar,
            changeSidebar: this.changeSidebar
          })
        );
      }
    };
  },
  function(n, e, t) {
    var o = t(60);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-PC-Sidebar-_sideIconContainer_417mw {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  background: #272727;\n  width: 5rem;\n  height: 5rem;\n  z-index: 20;\n  cursor: pointer; }\n\n.src-components-PC-Sidebar-_sideIcon_SgEDO {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  width: 50%;\n  height: 50%;\n  fill: none;\n  border: 3px inset #f49e00;\n  border-radius: 50%;\n  vertical-align: middle; }\n",
      ""
    ]),
      (e.locals = {
        sideIconContainer: "src-components-PC-Sidebar-_sideIconContainer_417mw",
        sideIcon: "src-components-PC-Sidebar-_sideIcon_SgEDO"
      });
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(62);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
        (this && this.__importDefault) ||
        function(n) {
          return n && n.__esModule ? n : { default: n };
        },
      r =
        (this && this.__importStar) ||
        function(n) {
          if (n && n.__esModule) return n;
          var e = {};
          if (null != n)
            for (var t in n) Object.hasOwnProperty.call(n, t) && (e[t] = n[t]);
          return (e.default = n), e;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const a = o(t(8)),
      s = o(t(5)),
      c = r(t(1)),
      i = t(9),
      l = t(10),
      d = o(t(63)),
      m = s.default.bind(d.default);
    e.default = class extends c.Component {
      componentWillReceiveProps() {
        a.default({
          targets: "#openSideMenu",
          left: "0",
          opacity: "0.8",
          easing: "easeInOutQuint"
        }),
          a.default({
            targets: "#closeSideMenu",
            left: "-20vw",
            opacity: "0",
            easing: "easeInOutQuart"
          });
      }
      render() {
        const { isOpenSidebar: n, changeSidebar: e } = this.props;
        return c.default.createElement(
          "div",
          {
            className: m("sideMenuContainer"),
            id: n ? "openSideMenu" : "closeSideMenu"
          },
          c.default.createElement(
            "div",
            { className: m("sideMenuBox") },
            l.Menus.map(n =>
              c.default.createElement(
                i.Link,
                { to: n.link, key: n.link },
                c.default.createElement(
                  "div",
                  { className: m("sideMenu", n.style), onClick: () => e() },
                  n.name
                )
              )
            )
          )
        );
      }
    };
  },
  function(n, e, t) {
    var o = t(64);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-PC-Sidebar-SideMenu-_sideMenuContainer_3NIyY {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -15rem;\n  margin: auto;\n  background: #0f0f0f;\n  width: 15rem;\n  height: 30rem;\n  opacity: 0;\n  z-index: 10; }\n\n.src-components-PC-Sidebar-SideMenu-_sideMenuBox_2jlyo {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 7.5rem;\n  margin: auto;\n  height: 60%;\n  padding: 10% 0;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between; }\n\n.src-components-PC-Sidebar-SideMenu-_sideMenu_1hleI {\n  font-size: 0.8rem;\n  color: #c4c4c4;\n  cursor: pointer;\n  position: relative; }\n\n.src-components-PC-Sidebar-SideMenu-_redHover_1URzA:hover {\n  color: #f00; }\n\n.src-components-PC-Sidebar-SideMenu-_greenHover_25Lzn:hover {\n  color: #0df400; }\n\n.src-components-PC-Sidebar-SideMenu-_blueHover_2ILvs:hover {\n  color: #0afffb; }\n\n.src-components-PC-Sidebar-SideMenu-_orangeHover_2Bhui:hover {\n  color: #f49e00; }\n\n.src-components-PC-Sidebar-SideMenu-_sideMenuBox_2jlyo a:hover {\n  text-decoration: none; }\n",
      ""
    ]),
      (e.locals = {
        sideMenuContainer:
          "src-components-PC-Sidebar-SideMenu-_sideMenuContainer_3NIyY",
        sideMenuBox: "src-components-PC-Sidebar-SideMenu-_sideMenuBox_2jlyo",
        sideMenu: "src-components-PC-Sidebar-SideMenu-_sideMenu_1hleI",
        redHover: "src-components-PC-Sidebar-SideMenu-_redHover_1URzA",
        greenHover: "src-components-PC-Sidebar-SideMenu-_greenHover_25Lzn",
        blueHover: "src-components-PC-Sidebar-SideMenu-_blueHover_2ILvs",
        orangeHover: "src-components-PC-Sidebar-SideMenu-_orangeHover_2Bhui"
      });
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(66);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(5)),
      a = o(t(1)),
      s = o(t(20)),
      c = o(t(70)),
      i = o(t(72)),
      l = r.default.bind(c.default);
    e.default = () =>
      a.default.createElement(
        "div",
        { className: l("container"), id: "container" },
        a.default.createElement(s.default, null),
        a.default.createElement(i.default, null)
      );
  },
  function(n, e, t) {
    "use strict";
    var o =
        (this && this.__importStar) ||
        function(n) {
          if (n && n.__esModule) return n;
          var e = {};
          if (null != n)
            for (var t in n) Object.hasOwnProperty.call(n, t) && (e[t] = n[t]);
          return (e.default = n), e;
        },
      r =
        (this && this.__importDefault) ||
        function(n) {
          return n && n.__esModule ? n : { default: n };
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const a = o(t(8)),
      s = r(t(5)),
      c = o(t(1)),
      i = r(t(14)),
      l = r(t(68)),
      d = s.default.bind(l.default);
    e.default = class extends c.Component {
      constructor() {
        super(...arguments), (this.state = { animes: [] });
      }
      componentDidMount() {
        const n = [];
        for (let e = 0; e < 40; e++) {
          let e = "";
          for (let n = 0; n < a.random(35, 40); n++) {
            const n = a.random(2, 4),
              t = `radial-gradient(${
                i.default[a.random(0, i.default.length - 1)]
              } 30%,transparent 50%) ${a.random(15, 85)}% ${a.random(
                15,
                85
              )}% / ${n}% ${n}% no-repeat`;
            e += "" === e ? t : ", " + t;
          }
          n.push(e);
        }
        this.setState({ animes: n }),
          a.default({
            targets: "#bgContainer",
            opacity: 1,
            delay: 3e3,
            duration: 3e3,
            easing: "easeInOutQuart"
          });
      }
      render() {
        return c.default.createElement(
          "div",
          { className: d("bgContainer"), id: "bgContainer" },
          this.state.animes.map((n, e) =>
            c.default.createElement("div", {
              className: d("background", `bgRotate${a.random(1, 8)}`),
              style: { background: n, animationDelay: `-${e}s` },
              key: e
            })
          )
        );
      }
    };
  },
  function(n, e, t) {
    var o = t(69);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-Common-Top-TopBackground-_bgContainer_33OLO {\n  width: 100vw;\n  height: 100vh;\n  perspective: 5vmin;\n  transform-style: preserve-3d;\n  opacity: 0; }\n\n.src-components-Common-Top-TopBackground-_background_2hdOB {\n  width: 30vmin;\n  height: 30vmin;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto; }\n\n.src-components-Common-Top-TopBackground-_bgRotate1_pAytk {\n  animation: src-components-Common-Top-TopBackground-_scaleup1_228WK 20s linear infinite; }\n\n.src-components-Common-Top-TopBackground-_bgRotate2_3hmHL {\n  animation: src-components-Common-Top-TopBackground-_scaleup2_HYC0P 20s linear infinite; }\n\n.src-components-Common-Top-TopBackground-_bgRotate3_2LueY {\n  animation: src-components-Common-Top-TopBackground-_scaleup3_rnEjG 20s linear infinite; }\n\n.src-components-Common-Top-TopBackground-_bgRotate4_1zl-U {\n  animation: src-components-Common-Top-TopBackground-_scaleup4_1xrbw 20s linear infinite; }\n\n.src-components-Common-Top-TopBackground-_bgRotate5_2ZPIj {\n  animation: src-components-Common-Top-TopBackground-_scaleup5_DWQrL 20s linear infinite; }\n\n.src-components-Common-Top-TopBackground-_bgRotate6_1QwGl {\n  animation: src-components-Common-Top-TopBackground-_scaleup6_23fUu 20s linear infinite; }\n\n.src-components-Common-Top-TopBackground-_bgRotate7_1Rwp7 {\n  animation: src-components-Common-Top-TopBackground-_scaleup7_3lX1q 20s linear infinite; }\n\n.src-components-Common-Top-TopBackground-_bgRotate8_t08sd {\n  animation: src-components-Common-Top-TopBackground-_scaleup8_1nnVK 20s linear infinite; }\n\n@keyframes src-components-Common-Top-TopBackground-_scaleup1_228WK {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 0, 0) rotate(0); }\n  10% {\n    opacity: 1; }\n  90% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 0, 6vmin) rotate(90deg); } }\n\n@keyframes src-components-Common-Top-TopBackground-_scaleup2_HYC0P {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 0, 0) rotate(0); }\n  10% {\n    opacity: 1; }\n  90% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 0, 6vmin) rotate(150deg); } }\n\n@keyframes src-components-Common-Top-TopBackground-_scaleup3_rnEjG {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 0, 0) rotate(0); }\n  10% {\n    opacity: 1; }\n  90% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 0, 6vmin) rotate(220deg); } }\n\n@keyframes src-components-Common-Top-TopBackground-_scaleup4_1xrbw {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 0, 0) rotate(0); }\n  10% {\n    opacity: 1; }\n  90% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 0, 6vmin) rotate(-75deg); } }\n\n@keyframes src-components-Common-Top-TopBackground-_scaleup5_DWQrL {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 0, 0) rotate(0); }\n  10% {\n    opacity: 1; }\n  90% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 0, 6vmin) rotate(-105deg); } }\n\n@keyframes src-components-Common-Top-TopBackground-_scaleup6_23fUu {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 0, 0) rotate(0); }\n  10% {\n    opacity: 1; }\n  90% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 0, 6vmin) rotate(-160deg); } }\n\n@keyframes src-components-Common-Top-TopBackground-_scaleup7_3lX1q {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 0, 0) rotate(0); }\n  10% {\n    opacity: 1; }\n  90% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 0, 6vmin) rotate(-190deg); } }\n\n@keyframes src-components-Common-Top-TopBackground-_scaleup8_1nnVK {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 0, 0) rotate(0); }\n  10% {\n    opacity: 1; }\n  90% {\n    opacity: 0.8; }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, 0, 6vmin) rotate(170deg); } }\n",
      ""
    ]),
      (e.locals = {
        bgContainer:
          "src-components-Common-Top-TopBackground-_bgContainer_33OLO",
        background: "src-components-Common-Top-TopBackground-_background_2hdOB",
        bgRotate1: "src-components-Common-Top-TopBackground-_bgRotate1_pAytk",
        scaleup1: "src-components-Common-Top-TopBackground-_scaleup1_228WK",
        bgRotate2: "src-components-Common-Top-TopBackground-_bgRotate2_3hmHL",
        scaleup2: "src-components-Common-Top-TopBackground-_scaleup2_HYC0P",
        bgRotate3: "src-components-Common-Top-TopBackground-_bgRotate3_2LueY",
        scaleup3: "src-components-Common-Top-TopBackground-_scaleup3_rnEjG",
        bgRotate4: "src-components-Common-Top-TopBackground-_bgRotate4_1zl-U",
        scaleup4: "src-components-Common-Top-TopBackground-_scaleup4_1xrbw",
        bgRotate5: "src-components-Common-Top-TopBackground-_bgRotate5_2ZPIj",
        scaleup5: "src-components-Common-Top-TopBackground-_scaleup5_DWQrL",
        bgRotate6: "src-components-Common-Top-TopBackground-_bgRotate6_1QwGl",
        scaleup6: "src-components-Common-Top-TopBackground-_scaleup6_23fUu",
        bgRotate7: "src-components-Common-Top-TopBackground-_bgRotate7_1Rwp7",
        scaleup7: "src-components-Common-Top-TopBackground-_scaleup7_3lX1q",
        bgRotate8: "src-components-Common-Top-TopBackground-_bgRotate8_t08sd",
        scaleup8: "src-components-Common-Top-TopBackground-_scaleup8_1nnVK"
      });
  },
  function(n, e, t) {
    var o = t(71);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-PC-Top-_container_1vkaX {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  overflow: hidden; }\n",
      ""
    ]),
      (e.locals = { container: "src-components-PC-Top-_container_1vkaX" });
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(73);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
        (this && this.__importDefault) ||
        function(n) {
          return n && n.__esModule ? n : { default: n };
        },
      r =
        (this && this.__importStar) ||
        function(n) {
          if (n && n.__esModule) return n;
          var e = {};
          if (null != n)
            for (var t in n) Object.hasOwnProperty.call(n, t) && (e[t] = n[t]);
          return (e.default = n), e;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const a = o(t(8)),
      s = o(t(5)),
      c = r(t(1)),
      i = o(t(74)),
      l = s.default.bind(i.default),
      d = ["T", "a", "k", "u", "y", "a", "/", "H", "i", "r", "i", "k", "e"];
    e.default = class extends c.Component {
      componentDidMount() {
        a.default({
          targets: "#name span",
          opacity: [0, 0.7],
          delay: (n, e) => 200 * e
        });
      }
      render() {
        return c.default.createElement(
          "h1",
          { id: "name", className: l("name") },
          d.map((n, e) =>
            c.default.createElement(
              "span",
              { className: l("letter"), key: e },
              "/" !== n ? n : c.default.createElement("span", null, " ")
            )
          )
        );
      }
    };
  },
  function(n, e, t) {
    var o = t(75);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-PC-Top-TopLogo-_name_2fT3V {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  pointer-events: none; }\n",
      ""
    ]),
      (e.locals = { name: "src-components-PC-Top-TopLogo-_name_2fT3V" });
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(77);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(5)),
      a = o(t(1)),
      s = o(t(21)),
      c = o(t(82)),
      i = o(t(86)),
      l = r.default.bind(i.default);
    e.default = () =>
      a.default.createElement(
        "div",
        { className: l("container") },
        a.default.createElement(c.default, null),
        a.default.createElement(
          "h1",
          { className: l("pageTitle") },
          "Works",
          a.default.createElement(
            "div",
            { className: l("pageDetail") },
            "from time to time update"
          )
        ),
        s.default.map((n, e) =>
          a.default.createElement(
            "div",
            { className: l(n.item, "work"), key: e },
            a.default.createElement(
              "a",
              { href: n.url, target: "_blank" },
              a.default.createElement(
                "div",
                { className: l("flame") },
                a.default.createElement("img", {
                  src: n.src,
                  className: l("thumbnail")
                })
              ),
              a.default.createElement(
                "div",
                { className: l("description") },
                a.default.createElement(
                  "div",
                  { className: l("title") },
                  n.title
                ),
                a.default.createElement(
                  "div",
                  { className: l("detail") },
                  n.detail
                )
              )
            )
          )
        )
      );
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(1)),
      a = o(t(79)),
      s = o(t(80)),
      c = [
        {
          item: "qiita",
          url: "https://qiita.com/hiraike32",
          src: o(t(81)).default,
          title: "Qiita",
          detail: r.default.createElement(
            "span",
            null,
            "技術に関する記事を投稿",
            r.default.createElement("br", null),
            "『新人プログラマをレビューで殺さない方法』",
            r.default.createElement("br", null),
            "『コミット時にtslintとstylelintを回してコードの品質を保証する』"
          )
        },
        {
          item: "codepen",
          url: "https://codepen.io/dashboard/",
          src: s.default,
          title: "codepen",
          detail: r.default.createElement(
            "span",
            null,
            "Post some design",
            r.default.createElement("br", null),
            "『Rotate cube』",
            r.default.createElement("br", null),
            "『Three.js Hello World!』"
          )
        },
        {
          item: "blog",
          url: "https://hiraike32.hatenablog.com/",
          src: a.default,
          title: "blog",
          detail: r.default.createElement(
            "span",
            null,
            "技術以外で考えたことなどを投稿",
            r.default.createElement("br", null),
            "『ドワンゴでの内定者アルバイトを終えて』",
            r.default.createElement("br", null),
            "『2019年の目標』"
          )
        }
      ];
    e.default = c;
  },
  function(n, e, t) {
    n.exports = t.p + "src/components/Common/Works/assets/img/blog.png";
  },
  function(n, e, t) {
    n.exports = t.p + "src/components/Common/Works/assets/img/codepen.png";
  },
  function(n, e, t) {
    n.exports = t.p + "src/components/Common/Works/assets/img/qiita.png";
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(83);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(8)),
      a = o(t(5)),
      s = o(t(1)),
      c = o(t(84)),
      i = a.default.bind(c.default),
      l = [0, 1, 2, 3, 4, 5, 6, 7];
    e.default = class extends s.default.Component {
      componentDidMount() {
        r.default({
          targets: "#lines span",
          width: [0, "100vw"],
          duration: 2500,
          easing: "linear",
          direction: "alternate",
          loop: !0,
          delay: (n, e) => 1200 * e + 500
        });
      }
      render() {
        return s.default.createElement(
          "div",
          { className: i("container"), id: "lines" },
          l.map((n, e) =>
            s.default.createElement("span", {
              className: i("border", `border${n}`),
              key: e
            })
          )
        );
      }
    };
  },
  function(n, e, t) {
    var o = t(85);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-PC-Works-Background-_container_f-U7Z {\n  overflow: hidden; }\n  .src-components-PC-Works-Background-_container_f-U7Z .src-components-PC-Works-Background-_border_3-kwl {\n    position: absolute; }\n  .src-components-PC-Works-Background-_container_f-U7Z .src-components-PC-Works-Background-_border0_sQNv1 {\n    border-bottom: 2px dashed #f00;\n    top: 80vh;\n    left: 0;\n    transform: rotate(-55deg);\n    transform-origin: 0 0;\n    width: 80vw; }\n  .src-components-PC-Works-Background-_container_f-U7Z .src-components-PC-Works-Background-_border1_4b79Q {\n    border-bottom: 2px dashed #0afffb;\n    top: 0;\n    left: 35vw;\n    transform: rotate(15deg);\n    transform-origin: 0 0;\n    width: 100vw; }\n  .src-components-PC-Works-Background-_container_f-U7Z .src-components-PC-Works-Background-_border2_1f4UM {\n    border-bottom: 2px dashed #f49e00;\n    top: 10vh;\n    left: 100vw;\n    transform: rotate(100deg);\n    transform-origin: 0 0;\n    width: 80vw; }\n  .src-components-PC-Works-Background-_container_f-U7Z .src-components-PC-Works-Background-_border3_NIgCH {\n    border-bottom: 2px dashed #ffff1e;\n    top: 70vh;\n    left: 100vw;\n    transform: rotate(150deg);\n    transform-origin: 0 0;\n    width: 80vw; }\n  .src-components-PC-Works-Background-_container_f-U7Z .src-components-PC-Works-Background-_border4_KQGQY {\n    border-bottom: 2px dashed #0df400;\n    top: 100vh;\n    left: 80vw;\n    transform: rotate(-170deg);\n    transform-origin: 0 0;\n    width: 100vw; }\n  .src-components-PC-Works-Background-_container_f-U7Z .src-components-PC-Works-Background-_border5_2s_mx {\n    border-bottom: 2px dashed #e60aff;\n    top: 100vh;\n    left: 10vw;\n    transform: rotate(-100deg);\n    transform-origin: 0 0;\n    width: 100vw; }\n  .src-components-PC-Works-Background-_container_f-U7Z .src-components-PC-Works-Background-_border6_g0w89 {\n    border-bottom: 2px dashed #004aff;\n    top: 15vh;\n    left: 0;\n    transform: rotate(-5deg);\n    transform-origin: 0 0;\n    width: 100vw; }\n",
      ""
    ]),
      (e.locals = {
        container: "src-components-PC-Works-Background-_container_f-U7Z",
        border: "src-components-PC-Works-Background-_border_3-kwl",
        border0: "src-components-PC-Works-Background-_border0_sQNv1",
        border1: "src-components-PC-Works-Background-_border1_4b79Q",
        border2: "src-components-PC-Works-Background-_border2_1f4UM",
        border3: "src-components-PC-Works-Background-_border3_NIgCH",
        border4: "src-components-PC-Works-Background-_border4_KQGQY",
        border5: "src-components-PC-Works-Background-_border5_2s_mx",
        border6: "src-components-PC-Works-Background-_border6_g0w89"
      });
  },
  function(n, e, t) {
    var o = t(87);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-PC-Works-_container_G3ROY {\n  overflow: hidden;\n  padding: 5vh 5vw;\n  display: grid;\n  grid-template-rows: 35vh 20vh 35vh;\n  grid-template-columns: repeat(9, 10vw);\n  position: relative; }\n  .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_pageTitle_37b0J {\n    grid-row: 2;\n    grid-column: 4/7;\n    color: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    text-align: center; }\n    .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_pageTitle_37b0J .src-components-PC-Works-_pageDetail_OOQL6 {\n      font-size: 1rem; }\n  .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_work_3JMoV {\n    background: #fff;\n    position: relative; }\n    .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_work_3JMoV a {\n      text-decoration: none; }\n      .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_work_3JMoV a .src-components-PC-Works-_flame__1wrs {\n        width: 100%;\n        height: 100%;\n        padding: 0.25rem;\n        position: absolute; }\n        .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_work_3JMoV a .src-components-PC-Works-_flame__1wrs .src-components-PC-Works-_thumbnail_32bjt {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n          object-position: 50% 0%; }\n      .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_work_3JMoV a .src-components-PC-Works-_description_1Bi4V {\n        display: absolute;\n        width: 100%;\n        height: 100%;\n        background: #000;\n        opacity: 0;\n        transition: opacity 0.5s ease-out;\n        padding: 1rem; }\n        .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_work_3JMoV a .src-components-PC-Works-_description_1Bi4V:hover {\n          opacity: 0.8; }\n        .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_work_3JMoV a .src-components-PC-Works-_description_1Bi4V .src-components-PC-Works-_title_Duc8T {\n          color: #fff;\n          margin-bottom: 0.5rem;\n          font-size: 1.2rem; }\n        .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_work_3JMoV a .src-components-PC-Works-_description_1Bi4V .src-components-PC-Works-_detail_xI0c1 {\n          color: #8c8c8c; }\n  .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_qiita_1uFII {\n    grid-row: 1;\n    grid-column: 4/7; }\n  .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_codepen_2m-_k {\n    grid-row: 3;\n    grid-column: 2/5; }\n  .src-components-PC-Works-_container_G3ROY .src-components-PC-Works-_blog_he6P3 {\n    grid-row: 3;\n    grid-column: 6/9; }\n",
      ""
    ]),
      (e.locals = {
        container: "src-components-PC-Works-_container_G3ROY",
        pageTitle: "src-components-PC-Works-_pageTitle_37b0J",
        pageDetail: "src-components-PC-Works-_pageDetail_OOQL6",
        work: "src-components-PC-Works-_work_3JMoV",
        flame: "src-components-PC-Works-_flame__1wrs",
        thumbnail: "src-components-PC-Works-_thumbnail_32bjt",
        description: "src-components-PC-Works-_description_1Bi4V",
        title: "src-components-PC-Works-_title_Duc8T",
        detail: "src-components-PC-Works-_detail_xI0c1",
        qiita: "src-components-PC-Works-_qiita_1uFII",
        codepen: "src-components-PC-Works-_codepen_2m-_k",
        blog: "src-components-PC-Works-_blog_he6P3"
      });
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(5)),
      a = o(t(1)),
      s = t(9),
      c = t(22),
      i = t(16);
    t(27);
    const l = o(t(28)),
      d = r.default.bind(l.default);
    e.default = s.withRouter(({ location: n }) => {
      const e = "/" + n.pathname.split("/")[1];
      return a.default.createElement(
        a.default.Fragment,
        null,
        a.default.createElement(
          c.TransitionGroup,
          null,
          a.default.createElement(
            c.CSSTransition,
            {
              key: e,
              classNames: {
                enter: d("enter"),
                enterActive: d("enterActive"),
                exit: d("exit"),
                exitActive: d("exitActive"),
                exitDone: d("exitDone")
              },
              timeout: 3e3
            },
            a.default.createElement(
              "div",
              { className: d("routeWrapper") },
              a.default.createElement(
                s.Switch,
                { location: n },
                a.default.createElement(s.Route, {
                  exact: !0,
                  path: "/",
                  component: i.Top
                }),
                a.default.createElement(s.Route, {
                  path: "/about",
                  component: i.About
                }),
                a.default.createElement(s.Route, {
                  path: "/works",
                  component: i.Works
                }),
                a.default.createElement(s.Route, {
                  path: "/contact",
                  component: i.Contact
                })
              )
            )
          )
        ),
        a.default.createElement(i.Sidebar, null)
      );
    });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(n, e, t) {
    (n.exports = t(2)(!1)).push([
      n.i,
      '/*!\n * Bootstrap Reboot v4.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle,\naside,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex="-1"]:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent; }\n\na:hover {\n  color: #0056b3;\n  text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n\na:not([href]):not([tabindex]):hover,\na:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none; }\n\na:not([href]):not([tabindex]):focus {\n  outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem; }\n\nbutton {\n  border-radius: 0; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput[type="radio"],\ninput[type="checkbox"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type="date"],\ninput[type="time"],\ninput[type="datetime-local"],\ninput[type="month"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type="search"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n',
      ""
    ]);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-styles-_routeWrapper_1C_6r {\n  position: absolute;\n  width: 100vw;\n  height: 100vh; }\n\n.src-styles-_enter_3pS5f {\n  animation: src-styles-_fadeIn_1rf11 4s; }\n\n.src-styles-_exit_33ZCq {\n  animation: src-styles-_fadeOut_9R24z 2s;\n  opacity: 0; }\n\n@keyframes src-styles-_fadeIn_1rf11 {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes src-styles-_fadeOut_9R24z {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n",
      ""
    ]),
      (e.locals = {
        routeWrapper: "src-styles-_routeWrapper_1C_6r",
        enter: "src-styles-_enter_3pS5f",
        fadeIn: "src-styles-_fadeIn_1rf11",
        exit: "src-styles-_exit_33ZCq",
        fadeOut: "src-styles-_fadeOut_9R24z"
      });
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(99);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
        (this && this.__importDefault) ||
        function(n) {
          return n && n.__esModule ? n : { default: n };
        },
      r =
        (this && this.__importStar) ||
        function(n) {
          if (n && n.__esModule) return n;
          var e = {};
          if (null != n)
            for (var t in n) Object.hasOwnProperty.call(n, t) && (e[t] = n[t]);
          return (e.default = n), e;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const a = t(12),
      s = t(100),
      c = t(101),
      i = o(t(8)),
      l = o(t(5)),
      d = r(t(1)),
      m = o(t(14)),
      u = o(t(17)),
      p = o(t(102)),
      f = l.default.bind(p.default);
    a.library.add(s.faTimes);
    e.default = class extends d.Component {
      constructor() {
        super(...arguments),
          (this.openDetail = () => {
            i.default
              .timeline()
              .add({ targets: "#detailContainer", zIndex: 30, duration: 10 })
              .add({
                targets: "#detailContainer",
                opacity: 0.9,
                easing: "easeInOutSine",
                duration: 500
              })
              .add({
                targets: "#detailContainer div",
                opacity: [0, 0.9],
                easing: "easeInOutSine",
                delay: (n, e) => 50 * e
              });
          }),
          (this.closeDetail = () => {
            i.default
              .timeline()
              .add({
                targets: "#detailContainer",
                opacity: 0,
                easing: "easeInOutSine"
              })
              .add({ targets: "#detailContainer", zIndex: 0 });
          });
      }
      render() {
        return d.default.createElement(
          "div",
          { className: f("container") },
          m.default.map(n =>
            d.default.createElement("div", {
              className: f("background"),
              style: { background: n },
              key: n
            })
          ),
          d.default.createElement(
            "div",
            { className: f("title") },
            d.default.createElement(
              "h1",
              { className: f("titleFont") },
              "ABOUT"
            ),
            d.default.createElement(
              "div",
              { className: f("spButton"), onClick: this.openDetail },
              "more"
            )
          ),
          d.default.createElement(
            "div",
            { className: f("detailContainer"), id: "detailContainer" },
            d.default.createElement(
              "div",
              { className: f("detail") },
              d.default.createElement(
                "div",
                { onClick: this.closeDetail, className: f("closeDetail") },
                d.default.createElement(c.FontAwesomeIcon, {
                  icon: "times",
                  className: f("closeIcon")
                })
              ),
              d.default.createElement(
                "div",
                { className: f("detailTitle") },
                "Takuya Hiraike（24）"
              ),
              u.default.map(n =>
                d.default.createElement(
                  "div",
                  { className: f("detailText"), key: n.title },
                  n.title,
                  d.default.createElement(
                    "div",
                    { className: f("darkFont") },
                    n.detail
                  )
                )
              )
            )
          )
        );
      }
    };
  },
  ,
  ,
  function(n, e, t) {
    var o = t(103);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-SP-About-_container_RhP0w {\n  overflow: hidden; }\n\n.src-components-SP-About-_background_AAfM3 {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  left: -100vw;\n  opacity: 0.7;\n  animation: src-components-SP-About-_slide_2wkK7 5s ease-in-out infinite alternate; }\n  .src-components-SP-About-_background_AAfM3:nth-child(1) {\n    animation-delay: -1.2s; }\n  .src-components-SP-About-_background_AAfM3:nth-child(2) {\n    animation-delay: 0s; }\n  .src-components-SP-About-_background_AAfM3:nth-child(3) {\n    animation-delay: 1.2s; }\n  .src-components-SP-About-_background_AAfM3:nth-child(4) {\n    animation-delay: 2.4s; }\n  .src-components-SP-About-_background_AAfM3:nth-child(5) {\n    animation-delay: 3.6s; }\n  .src-components-SP-About-_background_AAfM3:nth-child(6) {\n    animation-delay: 4.8s; }\n\n@keyframes src-components-SP-About-_slide_2wkK7 {\n  0% {\n    transform: translateX(-100vw); }\n  100% {\n    transform: translateX(100vw); } }\n\n.src-components-SP-About-_title_6Pwpb {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; }\n  .src-components-SP-About-_title_6Pwpb .src-components-SP-About-_titleFont_8xs0t {\n    z-index: 10;\n    opacity: 0.7; }\n  .src-components-SP-About-_title_6Pwpb .src-components-SP-About-_spButton_jQ89v {\n    z-index: 10;\n    opacity: 0.7;\n    margin-top: 1rem;\n    padding: 0.5rem 1rem;\n    border: 1px solid;\n    cursor: pointer; }\n\n.src-components-SP-About-_detailContainer_5CIej {\n  width: 100vw;\n  height: 100vh;\n  background: #000;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 0; }\n  .src-components-SP-About-_detailContainer_5CIej .src-components-SP-About-_detail_3ogw2 {\n    width: 100%;\n    height: 100%;\n    padding: 3rem 1.5rem;\n    color: #c4c4c4;\n    overflow: scroll; }\n    .src-components-SP-About-_detailContainer_5CIej .src-components-SP-About-_detail_3ogw2 .src-components-SP-About-_closeDetail_mVV3- {\n      position: fixed;\n      top: 2rem;\n      right: 2rem;\n      cursor: pointer;\n      width: 1rem;\n      text-align: center; }\n    .src-components-SP-About-_detailContainer_5CIej .src-components-SP-About-_detail_3ogw2 .src-components-SP-About-_detailTitle_2zpnZ {\n      font-weight: bold;\n      margin-bottom: 0.9rem; }\n    .src-components-SP-About-_detailContainer_5CIej .src-components-SP-About-_detail_3ogw2 .src-components-SP-About-_detailText_3Cj18 {\n      line-height: 200%;\n      margin-bottom: 1.5rem;\n      font-size: 0.9rem; }\n      .src-components-SP-About-_detailContainer_5CIej .src-components-SP-About-_detail_3ogw2 .src-components-SP-About-_detailText_3Cj18 a {\n        color: #798bd8; }\n        .src-components-SP-About-_detailContainer_5CIej .src-components-SP-About-_detail_3ogw2 .src-components-SP-About-_detailText_3Cj18 a:hover {\n          text-decoration: none; }\n      .src-components-SP-About-_detailContainer_5CIej .src-components-SP-About-_detail_3ogw2 .src-components-SP-About-_detailText_3Cj18 .src-components-SP-About-_darkFont_2Fcqk {\n        color: #8c8c8c; }\n",
      ""
    ]),
      (e.locals = {
        container: "src-components-SP-About-_container_RhP0w",
        background: "src-components-SP-About-_background_AAfM3",
        slide: "src-components-SP-About-_slide_2wkK7",
        title: "src-components-SP-About-_title_6Pwpb",
        titleFont: "src-components-SP-About-_titleFont_8xs0t",
        spButton: "src-components-SP-About-_spButton_jQ89v",
        detailContainer: "src-components-SP-About-_detailContainer_5CIej",
        detail: "src-components-SP-About-_detail_3ogw2",
        closeDetail: "src-components-SP-About-_closeDetail_mVV3-",
        detailTitle: "src-components-SP-About-_detailTitle_2zpnZ",
        detailText: "src-components-SP-About-_detailText_3Cj18",
        darkFont: "src-components-SP-About-_darkFont_2Fcqk"
      });
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(105);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
        (this && this.__importDefault) ||
        function(n) {
          return n && n.__esModule ? n : { default: n };
        },
      r =
        (this && this.__importStar) ||
        function(n) {
          if (n && n.__esModule) return n;
          var e = {};
          if (null != n)
            for (var t in n) Object.hasOwnProperty.call(n, t) && (e[t] = n[t]);
          return (e.default = n), e;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const a = o(t(8)),
      s = o(t(5)),
      c = r(t(1)),
      i = t(10),
      l = o(t(106)),
      d = o(t(108)),
      m = s.default.bind(l.default);
    e.default = class extends c.Component {
      constructor() {
        super(...arguments),
          (this.state = { isOpenSidebar: !1 }),
          (this.changeSidebar = () => {
            this.setState({ isOpenSidebar: !this.state.isOpenSidebar });
          });
      }
      componentDidMount() {
        a.default(i.circleAnime);
      }
      render() {
        return c.default.createElement(
          c.default.Fragment,
          null,
          c.default.createElement(
            "div",
            { className: m("sideIconContainer"), onClick: this.changeSidebar },
            c.default.createElement("div", {
              id: "sideIcon",
              className: m("sideIcon")
            })
          ),
          c.default.createElement(d.default, {
            isOpenSidebar: !this.state.isOpenSidebar,
            changeSidebar: this.changeSidebar
          })
        );
      }
    };
  },
  function(n, e, t) {
    var o = t(107);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-SP-Sidebar-_sideIconContainer_boNa5 {\n  position: absolute;\n  top: 0;\n  right: 3vw;\n  background: #272727;\n  width: 3rem;\n  height: 3rem;\n  z-index: 20;\n  cursor: pointer; }\n\n.src-components-SP-Sidebar-_sideIcon_zxpov {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  width: 50%;\n  height: 50%;\n  fill: none;\n  border: 3px inset #f49e00;\n  border-radius: 50%;\n  vertical-align: middle; }\n",
      ""
    ]),
      (e.locals = {
        sideIconContainer: "src-components-SP-Sidebar-_sideIconContainer_boNa5",
        sideIcon: "src-components-SP-Sidebar-_sideIcon_zxpov"
      });
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(109);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
        (this && this.__importDefault) ||
        function(n) {
          return n && n.__esModule ? n : { default: n };
        },
      r =
        (this && this.__importStar) ||
        function(n) {
          if (n && n.__esModule) return n;
          var e = {};
          if (null != n)
            for (var t in n) Object.hasOwnProperty.call(n, t) && (e[t] = n[t]);
          return (e.default = n), e;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const a = o(t(8)),
      s = o(t(5)),
      c = r(t(1)),
      i = t(9),
      l = t(10),
      d = o(t(110)),
      m = s.default.bind(d.default);
    e.default = class extends c.Component {
      componentWillReceiveProps() {
        a.default({
          targets: "#openSideMenu",
          top: "0",
          opacity: "0.8",
          easing: "easeInOutQuint"
        }),
          a.default({
            targets: "#closeSideMenu",
            top: "-100vh",
            opacity: "0",
            easing: "easeInOutQuart"
          });
      }
      render() {
        const { isOpenSidebar: n, changeSidebar: e } = this.props;
        return c.default.createElement(
          "div",
          {
            className: m("sideMenuContainer"),
            id: n ? "openSideMenu" : "closeSideMenu"
          },
          c.default.createElement(
            "div",
            { className: m("sideMenuBox") },
            l.Menus.map(n =>
              c.default.createElement(
                i.Link,
                { to: n.link, key: n.link },
                c.default.createElement(
                  "div",
                  { className: m("sideMenu", n.style), onClick: () => e() },
                  n.name
                )
              )
            )
          )
        );
      }
    };
  },
  function(n, e, t) {
    var o = t(111);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-SP-Sidebar-SideMenu-_sideMenuContainer_3VG4W {\n  position: absolute;\n  top: -100vh;\n  right: 0;\n  left: 0;\n  margin: auto;\n  background: #0f0f0f;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0;\n  z-index: 10; }\n\n.src-components-SP-Sidebar-SideMenu-_sideMenuBox_2Jbko {\n  height: 100%;\n  padding: 10rem 0;\n  display: flex;\n  align-items: center;\n  flex-flow: column;\n  justify-content: space-between; }\n\n.src-components-SP-Sidebar-SideMenu-_sideMenu_ybRNE {\n  font-size: 0.8rem;\n  color: #c4c4c4;\n  cursor: pointer;\n  position: relative; }\n\n.src-components-SP-Sidebar-SideMenu-_redHover_1AdOs:hover {\n  color: #f00; }\n\n.src-components-SP-Sidebar-SideMenu-_greenHover_24avq:hover {\n  color: #0df400; }\n\n.src-components-SP-Sidebar-SideMenu-_blueHover_3b0m8:hover {\n  color: #0afffb; }\n\n.src-components-SP-Sidebar-SideMenu-_orangeHover_2e242:hover {\n  color: #f49e00; }\n\n.src-components-SP-Sidebar-SideMenu-_sideMenuBox_2Jbko a:hover {\n  text-decoration: none; }\n",
      ""
    ]),
      (e.locals = {
        sideMenuContainer:
          "src-components-SP-Sidebar-SideMenu-_sideMenuContainer_3VG4W",
        sideMenuBox: "src-components-SP-Sidebar-SideMenu-_sideMenuBox_2Jbko",
        sideMenu: "src-components-SP-Sidebar-SideMenu-_sideMenu_ybRNE",
        redHover: "src-components-SP-Sidebar-SideMenu-_redHover_1AdOs",
        greenHover: "src-components-SP-Sidebar-SideMenu-_greenHover_24avq",
        blueHover: "src-components-SP-Sidebar-SideMenu-_blueHover_3b0m8",
        orangeHover: "src-components-SP-Sidebar-SideMenu-_orangeHover_2e242"
      });
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(113);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(5)),
      a = o(t(1)),
      s = o(t(20)),
      c = o(t(114)),
      i = o(t(116)),
      l = r.default.bind(c.default);
    e.default = () =>
      a.default.createElement(
        "div",
        { className: l("container"), id: "container" },
        a.default.createElement(s.default, null),
        a.default.createElement(i.default, null)
      );
  },
  function(n, e, t) {
    var o = t(115);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-SP-Top-_container_SFF5B {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  overflow: hidden; }\n",
      ""
    ]),
      (e.locals = { container: "src-components-SP-Top-_container_SFF5B" });
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(117);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
        (this && this.__importDefault) ||
        function(n) {
          return n && n.__esModule ? n : { default: n };
        },
      r =
        (this && this.__importStar) ||
        function(n) {
          if (n && n.__esModule) return n;
          var e = {};
          if (null != n)
            for (var t in n) Object.hasOwnProperty.call(n, t) && (e[t] = n[t]);
          return (e.default = n), e;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const a = o(t(8)),
      s = o(t(5)),
      c = r(t(1)),
      i = o(t(118)),
      l = s.default.bind(i.default),
      d = ["T", "a", "k", "u", "y", "a", "/", "H", "i", "r", "i", "k", "e"];
    e.default = class extends c.Component {
      componentDidMount() {
        a.default
          .timeline()
          .add({
            targets: "#name span",
            opacity: [0, 0.7],
            delay: (n, e) => 200 * e
          });
      }
      render() {
        return c.default.createElement(
          "h1",
          { id: "name", className: l("name") },
          d.map((n, e) =>
            c.default.createElement(
              "span",
              { className: l("letter"), key: e },
              "/" !== n ? n : c.default.createElement("span", null, " ")
            )
          )
        );
      }
    };
  },
  function(n, e, t) {
    var o = t(119);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-SP-Top-TopLogo-_name_1tCSw {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  pointer-events: none; }\n",
      ""
    ]),
      (e.locals = { name: "src-components-SP-Top-TopLogo-_name_1tCSw" });
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(121);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(5)),
      a = o(t(1)),
      s = o(t(21)),
      c = o(t(122)),
      i = o(t(126)),
      l = r.default.bind(i.default);
    e.default = () =>
      a.default.createElement(
        "div",
        { className: l("container") },
        a.default.createElement(c.default, null),
        a.default.createElement(
          "h1",
          { className: l("pageTitle") },
          "Works",
          a.default.createElement(
            "div",
            { className: l("pageDetail") },
            "from time to time update"
          )
        ),
        s.default.map((n, e) =>
          a.default.createElement(
            a.default.Fragment,
            { key: e },
            a.default.createElement(
              "div",
              { className: l("workImage") },
              a.default.createElement(
                "a",
                { href: n.url, target: "_blank" },
                a.default.createElement(
                  "div",
                  { className: l("flame") },
                  a.default.createElement("img", {
                    src: n.src,
                    className: l("thumbnail")
                  })
                )
              )
            ),
            a.default.createElement(
              "div",
              { className: l("description") },
              a.default.createElement(
                "div",
                { className: l("title") },
                n.title
              ),
              a.default.createElement(
                "div",
                { className: l("detail") },
                n.detail
              )
            )
          )
        )
      );
  },
  function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = t(123);
    e.default = o.default;
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(8)),
      a = o(t(5)),
      s = o(t(1)),
      c = o(t(124)),
      i = a.default.bind(c.default),
      l = [0, 1, 2, 3, 4, 5, 6, 7];
    e.default = class extends s.default.Component {
      componentDidMount() {
        r.default({
          targets: "#lines span",
          width: [0, "110vh"],
          duration: 2e3,
          easing: "linear",
          direction: "alternate",
          loop: !0,
          delay: (n, e) => 1e3 * e + 500
        });
      }
      render() {
        return s.default.createElement(
          "div",
          { className: i("container"), id: "lines" },
          l.map((n, e) =>
            s.default.createElement("span", {
              className: i("border", `border${n}`),
              key: e
            })
          )
        );
      }
    };
  },
  function(n, e, t) {
    var o = t(125);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-SP-Works-Background-_container_1vngO {\n  overflow: hidden; }\n  .src-components-SP-Works-Background-_container_1vngO .src-components-SP-Works-Background-_border_1nlAe {\n    position: fixed; }\n  .src-components-SP-Works-Background-_container_1vngO .src-components-SP-Works-Background-_border0_2wtVK {\n    border-bottom: 2px dashed #f00;\n    top: 60vh;\n    left: 0;\n    transform: rotate(-75deg);\n    transform-origin: 0 0;\n    width: 80vw; }\n  .src-components-SP-Works-Background-_container_1vngO .src-components-SP-Works-Background-_border1_3k8Y8 {\n    border-bottom: 2px dashed #0afffb;\n    top: 0;\n    left: 35vw;\n    transform: rotate(15deg);\n    transform-origin: 0 0;\n    width: 100vw; }\n  .src-components-SP-Works-Background-_container_1vngO .src-components-SP-Works-Background-_border2_5Oj6E {\n    border-bottom: 2px dashed #f49e00;\n    top: 10vh;\n    left: 100vw;\n    transform: rotate(95deg);\n    transform-origin: 0 0;\n    width: 80vw; }\n  .src-components-SP-Works-Background-_container_1vngO .src-components-SP-Works-Background-_border3_XPncv {\n    border-bottom: 2px dashed #ffff1e;\n    top: 70vh;\n    left: 100vw;\n    transform: rotate(150deg);\n    transform-origin: 0 0;\n    width: 80vw; }\n  .src-components-SP-Works-Background-_container_1vngO .src-components-SP-Works-Background-_border4_2PIOc {\n    border-bottom: 2px dashed #0df400;\n    top: 100vh;\n    left: 80vw;\n    transform: rotate(-170deg);\n    transform-origin: 0 0;\n    width: 100vw; }\n  .src-components-SP-Works-Background-_container_1vngO .src-components-SP-Works-Background-_border5_82kNF {\n    border-bottom: 2px dashed #e60aff;\n    top: 100vh;\n    left: 10vw;\n    transform: rotate(-100deg);\n    transform-origin: 0 0;\n    width: 100vw; }\n  .src-components-SP-Works-Background-_container_1vngO .src-components-SP-Works-Background-_border6_jms9Y {\n    border-bottom: 2px dashed #004aff;\n    top: 15vh;\n    left: 0;\n    transform: rotate(-5deg);\n    transform-origin: 0 0;\n    width: 100vw; }\n",
      ""
    ]),
      (e.locals = {
        container: "src-components-SP-Works-Background-_container_1vngO",
        border: "src-components-SP-Works-Background-_border_1nlAe",
        border0: "src-components-SP-Works-Background-_border0_2wtVK",
        border1: "src-components-SP-Works-Background-_border1_3k8Y8",
        border2: "src-components-SP-Works-Background-_border2_5Oj6E",
        border3: "src-components-SP-Works-Background-_border3_XPncv",
        border4: "src-components-SP-Works-Background-_border4_2PIOc",
        border5: "src-components-SP-Works-Background-_border5_82kNF",
        border6: "src-components-SP-Works-Background-_border6_jms9Y"
      });
  },
  function(n, e, t) {
    var o = t(127);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      ".src-components-SP-Works-_container_3Cq5d {\n  overflow: hidden;\n  padding: 1rem 2rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .src-components-SP-Works-_container_3Cq5d .src-components-SP-Works-_pageTitle_7-M6g {\n    color: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    padding: 1rem 0; }\n    .src-components-SP-Works-_container_3Cq5d .src-components-SP-Works-_pageTitle_7-M6g .src-components-SP-Works-_pageDetail_zxafd {\n      font-size: 1rem; }\n  .src-components-SP-Works-_container_3Cq5d .src-components-SP-Works-_workImage_sV4-O {\n    margin-top: 1rem;\n    width: 70vw;\n    height: 45vw;\n    position: relative; }\n    .src-components-SP-Works-_container_3Cq5d .src-components-SP-Works-_workImage_sV4-O .src-components-SP-Works-_flame_3asDu {\n      width: 100%;\n      height: 100%;\n      padding: 0.25rem;\n      position: absolute;\n      background: #fff; }\n      .src-components-SP-Works-_container_3Cq5d .src-components-SP-Works-_workImage_sV4-O .src-components-SP-Works-_flame_3asDu .src-components-SP-Works-_thumbnail_1HyC1 {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        object-position: 50% 0%; }\n  .src-components-SP-Works-_container_3Cq5d .src-components-SP-Works-_description_1TvwV {\n    width: 70vw;\n    padding: 1rem 0; }\n    .src-components-SP-Works-_container_3Cq5d .src-components-SP-Works-_description_1TvwV .src-components-SP-Works-_title_iGnA6 {\n      color: #fff;\n      margin-bottom: 0.5rem; }\n    .src-components-SP-Works-_container_3Cq5d .src-components-SP-Works-_description_1TvwV .src-components-SP-Works-_detail_2na9R {\n      color: #8c8c8c; }\n",
      ""
    ]),
      (e.locals = {
        container: "src-components-SP-Works-_container_3Cq5d",
        pageTitle: "src-components-SP-Works-_pageTitle_7-M6g",
        pageDetail: "src-components-SP-Works-_pageDetail_zxafd",
        workImage: "src-components-SP-Works-_workImage_sV4-O",
        flame: "src-components-SP-Works-_flame_3asDu",
        thumbnail: "src-components-SP-Works-_thumbnail_1HyC1",
        description: "src-components-SP-Works-_description_1TvwV",
        title: "src-components-SP-Works-_title_iGnA6",
        detail: "src-components-SP-Works-_detail_2na9R"
      });
  },
  function(n, e, t) {
    "use strict";
    var o =
      (this && this.__importDefault) ||
      function(n) {
        return n && n.__esModule ? n : { default: n };
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const r = o(t(5)),
      a = o(t(1)),
      s = t(9),
      c = t(22),
      i = t(29);
    t(27);
    const l = o(t(28)),
      d = r.default.bind(l.default);
    e.default = s.withRouter(({ location: n }) => {
      const e = "/" + n.pathname.split("/")[1];
      return a.default.createElement(
        a.default.Fragment,
        null,
        a.default.createElement(
          c.TransitionGroup,
          null,
          a.default.createElement(
            c.CSSTransition,
            {
              key: e,
              classNames: {
                enter: d("enter"),
                enterActive: d("enterActive"),
                exit: d("exit"),
                exitActive: d("exitActive"),
                exitDone: d("exitDone")
              },
              timeout: 3e3
            },
            a.default.createElement(
              "div",
              { className: d("routeWrapper") },
              a.default.createElement(
                s.Switch,
                { location: n },
                a.default.createElement(s.Route, {
                  exact: !0,
                  path: "/",
                  component: i.Top
                }),
                a.default.createElement(s.Route, {
                  path: "/about",
                  component: i.About
                }),
                a.default.createElement(s.Route, {
                  path: "/works",
                  component: i.Works
                }),
                a.default.createElement(s.Route, {
                  path: "/contact",
                  component: i.Contact
                })
              )
            )
          )
        ),
        a.default.createElement(i.Sidebar, null)
      );
    });
  },
  function(n, e, t) {
    var o = t(130);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { sourceMap: !0, hmr: !0, transform: void 0, insertInto: void 0 };
    t(3)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (e = n.exports = t(2)(!1)).push([
      n.i,
      "@import url(https://fonts.googleapis.com/css?family=Libre+Baskerville|Sawarabi+Mincho);",
      ""
    ]),
      e.push([
        n.i,
        'body {\n  background: #232323;\n  font-family: "Libre Baskerville", "Sawarabi Mincho", sans-serif; }\n\n@media (max-width: 960px) {\n  h1 {\n    font-size: 1.5rem; } }\n',
        ""
      ]);
  }
]);
//# sourceMappingURL=main.js.map
