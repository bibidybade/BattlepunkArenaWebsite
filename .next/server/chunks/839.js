"use strict";
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 5356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.9f11d143.png","height":1311,"width":2912,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfklEQVR42mNABrsatu/Y0bJxM4rgxRm/uH9u+c+yp/Wo3pqKtddWFm+9e6j7kPKTVf/ZHy39z8EwJfTC/okRx7Z1BRxdOTdl++7FmcdP9IWenD855vj5aVHnpjPkCi5RZWBYJHp6voXriZmpF45OT911eGaAOwNDnVAIQ5UcAGehOQK3SmlGAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 9839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(2947);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./public/assets/images/still-assets/splashbg.png
/* harmony default export */ const splashbg = ({"src":"/_next/static/media/splashbg.be69070c.png","height":4220,"width":2000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAaElEQVR42i2LMQrCQBQF55mFHxHMIh7FQ3j/WrBME4SQxv1L9otJumGY0fB4erzeUFc49ySmD+QB3W9gxol5hq6DtiKJFGiDGCfCR5LMiNbQ9QLFSUj7kjP0RqJ82eSyHOKfeyHcoVZ+gOolPEHeoEIAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./public/assets/images/still-assets/logo.png
var logo = __webpack_require__(5356);
// EXTERNAL MODULE: ./components/header/Header.jsx + 2 modules
var Header = __webpack_require__(2828);
;// CONCATENATED MODULE: ./pages/splashscreen.js

/* eslint-disable */ 







function Home(props) {
    const { 0: scrolled , 1: setScrolled  } = (0,external_react_.useState)(false);
    const { 0: offsetY , 1: setOffsetY  } = (0,external_react_.useState)(0);
    const handleScroll1 = ()=>setOffsetY(window.pageYOffset)
    ;
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll1);
        return ()=>window.removeEventListener("scroll", handleScroll1)
        ;
    }, []);
    (0,external_react_.useLayoutEffect)(()=>{
        const handleScroll = (e)=>{
            setScrolled(window.scrollY > 5500);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                overflow: "hidden"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    bgImage: `url(${splashbg.src})`,
                    zIndex: 99999999999,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            className: "bgtop",
                            pos: "fixed",
                            top: "0",
                            left: "0"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                            position: "fixed",
                            top: "0%",
                            left: "0%",
                            w: "100%",
                            spacing: "0",
                            zIndex: 100,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: splashbg
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                            className: "coinfloat",
                            position: "fixed",
                            top: "45%",
                            left: "41%",
                            w: "20%",
                            spacing: "0",
                            zIndex: 101,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: logo/* default */.Z
                            })
                        })
                    ]
                })
            ]
        })
    }));
};


/***/ })

};
;