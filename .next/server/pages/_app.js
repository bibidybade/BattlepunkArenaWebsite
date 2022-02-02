"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./components/header/Header.jsx + 4 modules
var Header = __webpack_require__(3378);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/assets/images/still-assets/punkon.png
/* harmony default export */ const punkon = ({"src":"/_next/static/media/punkon.4461dfb6.png","height":1585,"width":3840,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAV0lEQVR42mOAAdWMLaIaBQcMNAoOGignrhSFS/Cou2sKGER2irtU3pD0bv4AwmLO5TcE9MM7uVWcNBm4lexOskub/GdkYPjPAMVMTAz/2aUM/3Mp2pwEAF7xGTXYz1mbAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./public/assets/images/still-assets/discord.png
var discord = __webpack_require__(9160);
// EXTERNAL MODULE: ./public/assets/images/still-assets/insta.png
var insta = __webpack_require__(9261);
// EXTERNAL MODULE: ./public/assets/images/still-assets/twitter.png
var twitter = __webpack_require__(61);
// EXTERNAL MODULE: ./public/assets/images/still-assets/last-social.png
var last_social = __webpack_require__(3356);
// EXTERNAL MODULE: ./public/assets/images/still-assets/site-bg.png
var site_bg = __webpack_require__(8937);
;// CONCATENATED MODULE: ./components/footer/Footer.jsx





// import footerlogo from "../../public/assets/images/footerlogo.webp"
// import socialfb from "../../public/assets/images/fb.svg"
// import socialtwet from "../../public/assets/images/twet.svg"
// import socialdecort from "../../public/assets/images/decort.svg"
// import socialinsta from "../../public/assets/images/insta.svg"
// import socialreddit from "../../public/assets/images/reddit.svg"
// import socialsubstack from "../../public/assets/images/substack.png"
// import socialtiktok from "../../public/assets/images/tiktok.svg"
// import fnewsleter from "../../public/assets/images/fnewsleter.webp"
// import footerbg from "../../public/assets/images/stars_tile_01.svg"







const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    }));
};
/* harmony default export */ const footer_Footer = (Footer);

;// CONCATENATED MODULE: ./styles/theme/Theme.js


const theme = (0,react_.extendTheme)({
    fonts: {
        heading: 'Obvia',
        body: 'Obvia'
    },
    shadows: {
        outline: 'none'
    },
    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                _focus: {
                    boxShadow: 'none'
                }
            }
        }
    }
});
/* harmony default export */ const Theme = (theme);

;// CONCATENATED MODULE: external "use-pan-and-zoom"
const external_use_pan_and_zoom_namespaceObject = require("use-pan-and-zoom");
var external_use_pan_and_zoom_default = /*#__PURE__*/__webpack_require__.n(external_use_pan_and_zoom_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js

/* eslint no-undef: "off"*/ 





function MyApp({ Component , pageProps  }) {
    const { transform , setContainer , panZoomHandlers  } = external_use_pan_and_zoom_default()();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        theme: Theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 4787:
/***/ ((module) => {

module.exports = require("@tippyjs/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,952,455], () => (__webpack_exec__(9343)));
module.exports = __webpack_exports__;

})();