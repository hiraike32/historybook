module.exports = {

"[project]/src/const/bgColors.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
const bgColors = [
    "#ff0000",
    "#0afffb",
    "#f49e00",
    "#ffff1e",
    "#0df400",
    "#e60aff",
    "#004aff"
];
const __TURBOPACK__default__export__ = bgColors;
}),
"[project]/src/app/Common/Top/TopBackground/TopBackground.module.scss.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "background": "TopBackground-module-scss-module__Z8xRjW__background",
  "bgContainer": "TopBackground-module-scss-module__Z8xRjW__bgContainer",
  "bgRotate1": "TopBackground-module-scss-module__Z8xRjW__bgRotate1",
  "bgRotate2": "TopBackground-module-scss-module__Z8xRjW__bgRotate2",
  "bgRotate3": "TopBackground-module-scss-module__Z8xRjW__bgRotate3",
  "bgRotate4": "TopBackground-module-scss-module__Z8xRjW__bgRotate4",
  "bgRotate5": "TopBackground-module-scss-module__Z8xRjW__bgRotate5",
  "bgRotate6": "TopBackground-module-scss-module__Z8xRjW__bgRotate6",
  "scaleup1": "TopBackground-module-scss-module__Z8xRjW__scaleup1",
  "scaleup2": "TopBackground-module-scss-module__Z8xRjW__scaleup2",
  "scaleup3": "TopBackground-module-scss-module__Z8xRjW__scaleup3",
  "scaleup4": "TopBackground-module-scss-module__Z8xRjW__scaleup4",
  "scaleup5": "TopBackground-module-scss-module__Z8xRjW__scaleup5",
  "scaleup6": "TopBackground-module-scss-module__Z8xRjW__scaleup6",
});
}),
"[project]/src/app/Common/Top/TopBackground/TopBackground.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$animejs__$5b$external$5d$__$28$animejs$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/animejs [external] (animejs, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2f$bgColors$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const/bgColors.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopBackground$2f$TopBackground$2e$module$2e$scss$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/Common/Top/TopBackground/TopBackground.module.scss.module.css [ssr] (css module)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$animejs__$5b$external$5d$__$28$animejs$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$animejs__$5b$external$5d$__$28$animejs$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const NUM_ANIMATIONS = 10; // アニメーションの数を定数化
const NUM_COLOR_BALLS = 128;
// 乱数生成関数
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const TopBackground = ()=>{
    const [animes, setAnimes] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const randomCache = Array.from({
        length: NUM_ANIMATIONS
    }, ()=>random(1, 6));
    const bgColorCache = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return Array.from({
            length: NUM_COLOR_BALLS
        }, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2f$bgColors$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"][random(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2f$bgColors$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"].length - 1)]);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // 背景アニメーション用のcssを作成
        const animesCreate = [];
        for(let i = 0; i < NUM_ANIMATIONS; i++){
            let anime = "";
            for(let j = 0; j < NUM_COLOR_BALLS; j++){
                const scale = random(2, 4);
                const tmpAnime = `radial-gradient(${bgColorCache[j]} 30%,transparent 50%) ${random(15, 85)}% ${random(15, 85)}% / ${scale}% ${scale}% no-repeat`;
                if (anime === "") {
                    anime += tmpAnime;
                } else {
                    anime += ", " + tmpAnime;
                }
            }
            animesCreate.push(anime);
        }
        setAnimes(animesCreate);
        // 文字のアニメーションが完了してから背景を出す
        const animation = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$animejs__$5b$external$5d$__$28$animejs$2c$__esm_import$29$__["animate"])("#bgContainer", {
            opacity: 1,
            delay: 3000,
            duration: 3000,
            easing: "easeInOutQuart"
        });
        // GPUアクセラレーションを有効化
        const bgContainer = document.getElementById("bgContainer");
        if (bgContainer) {
            bgContainer.style.willChange = "opacity, transform";
        }
        // クリーンアップ処理
        return ()=>{
            if (bgContainer) {
                bgContainer.style.willChange = "";
            }
            animation.pause();
        };
    }, [
        bgColorCache
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopBackground$2f$TopBackground$2e$module$2e$scss$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].bgContainer,
        id: "bgContainer",
        children: animes.map((anime, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopBackground$2f$TopBackground$2e$module$2e$scss$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].background} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopBackground$2f$TopBackground$2e$module$2e$scss$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"][`bgRotate${randomCache[index % randomCache.length]}`]}`,
                style: {
                    background: anime,
                    animationDelay: `-${index * 2}s`
                }
            }, index, false, {
                fileName: "[project]/src/app/Common/Top/TopBackground/TopBackground.tsx",
                lineNumber: 77,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/app/Common/Top/TopBackground/TopBackground.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TopBackground;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/Common/Top/Top.module.scss.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "Top-module-scss-module__Scm6tq__container",
});
}),
"[project]/src/app/Common/Top/TopLogo/TopLogo.module.scss.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "name": "TopLogo-module-scss-module__6ySxXq__name",
});
}),
"[project]/src/app/Common/Top/TopLogo/TopLogo.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$animejs__$5b$external$5d$__$28$animejs$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/animejs [external] (animejs, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopLogo$2f$TopLogo$2e$module$2e$scss$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/Common/Top/TopLogo/TopLogo.module.scss.module.css [ssr] (css module)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$animejs__$5b$external$5d$__$28$animejs$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$animejs__$5b$external$5d$__$28$animejs$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const names = [
    "h",
    "i",
    "r",
    "a",
    "i",
    "k",
    "e",
    "3",
    "2"
];
const TopLogo = ()=>{
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$animejs__$5b$external$5d$__$28$animejs$2c$__esm_import$29$__["animate"])("#name span", {
            opacity: [
                0,
                0.7
            ],
            delay (el, index) {
                return index * 200;
            }
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
        id: "name",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopLogo$2f$TopLogo$2e$module$2e$scss$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].name,
        children: names.map((name, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopLogo$2f$TopLogo$2e$module$2e$scss$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].letter,
                children: name !== "/" ? name : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    children: " "
                }, void 0, false, {
                    fileName: "[project]/src/app/Common/Top/TopLogo/TopLogo.tsx",
                    lineNumber: 22,
                    columnNumber: 34
                }, ("TURBOPACK compile-time value", void 0))
            }, index, false, {
                fileName: "[project]/src/app/Common/Top/TopLogo/TopLogo.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/app/Common/Top/TopLogo/TopLogo.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TopLogo;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopBackground$2f$TopBackground$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Common/Top/TopBackground/TopBackground.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$Top$2e$module$2e$scss$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/Common/Top/Top.module.scss.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopLogo$2f$TopLogo$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Common/Top/TopLogo/TopLogo.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopBackground$2f$TopBackground$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopLogo$2f$TopLogo$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopBackground$2f$TopBackground$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopLogo$2f$TopLogo$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const Top = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$Top$2e$module$2e$scss$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container,
        id: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopBackground$2f$TopBackground$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Common$2f$Top$2f$TopLogo$2f$TopLogo$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = Top;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__34bd3272._.js.map