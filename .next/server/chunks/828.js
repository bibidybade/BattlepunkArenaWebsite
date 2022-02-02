"use strict";
exports.id = 828;
exports.ids = [828];
exports.modules = {

/***/ 2828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@tippyjs/react"
var external_tippyjs_react_ = __webpack_require__(4787);
var external_tippyjs_react_default = /*#__PURE__*/__webpack_require__.n(external_tippyjs_react_);
// EXTERNAL MODULE: ./node_modules/tippy.js/dist/tippy.css
var tippy = __webpack_require__(8933);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/assets/images/still-assets/navbar.png
/* harmony default export */ const navbar = ({"src":"/_next/static/media/navbar.e74cd084.png","height":150,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKklEQVR4nGO08Q5r/v/rx9dv37+/FJdTTGRg+M/w8tGD+VycnOIMrGzcACXaDl7/9Y+xAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ./components/home/MobileHeader.jsx









const MobileHeader = ()=>{
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    const btnRef = external_react_default().useRef();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                height: '30px',
                ref: btnRef,
                bg: "transparent",
                color: "white",
                onClick: onOpen,
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.HamburgerIcon, {
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Drawer, {
                isOpen: isOpen,
                placement: "top",
                onClose: onClose,
                finalFocusRef: btnRef,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerOverlay, {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerContent, {
                        bg: "rgba(0, 0, 0, 0.70)",
                        color: "white",
                        h: "full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                height: '30px',
                                bg: "transparent",
                                color: "white",
                                onClick: onClose,
                                _hover: "bg: transparent",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerCloseButton, {
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerBody, {
                                fontSize: 'lg',
                                fontWeight: 'medium',
                                filter: "drop-shadow(4px 4px 4px #000000)",
                                textAlign: 'center',
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        mb: "4",
                                        pl: {
                                            base: '0',
                                            md: '0',
                                            lg: '4'
                                        },
                                        mx: "2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            _hover: {
                                                bg: '#ebedf0'
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Home"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        mb: "4",
                                        mx: "2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                                theme: "bigger",
                                                content: "Sale Not Active",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Mint"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        mb: "4",
                                        mx: "2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                                theme: "bigger",
                                                content: "Coming Very Soon!",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Punkydex"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        mb: "4",
                                        mx: "2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/axs",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                                theme: "bigger",
                                                content: "Under Construction",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Arena Market"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        mb: "4",
                                        mx: "2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                                theme: "bigger",
                                                content: "Coming Soon: See Battlepaper for planned Release Date",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Play"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        mb: "4",
                                        mx: "2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/lsd",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "$LSD"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        mb: "4",
                                        mx: "2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                                theme: "bigger",
                                                content: "Coming Soon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Punkon"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        mb: "4",
                                        mx: "2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "https://s3.eu-central-1.amazonaws.com/lunarsystem.co/Battlepaper.pdf",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Battlepaper"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        mb: "4",
                                        mx: "2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                                theme: "bigger",
                                                content: "Coming Soon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "FAQ"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        mb: "4",
                                        mx: "2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                                theme: "bigger",
                                                content: "Coming Soon: email us at info@lunarsystem.co about partnership inquiries",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Partners"
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerFooter, {
                                justifyContent: 'flex-start'
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const home_MobileHeader = (MobileHeader);

;// CONCATENATED MODULE: ./components/header/Header.jsx









const Header = ()=>{
    const ChakraNextImage = (0,react_.chakra)(next_image["default"]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            className: "header-wrapper",
            position: "fixed",
            top: "-4.6px",
            zIndex: "1000",
            px: {
                base: "5",
                md: "2"
            },
            h: [
                "7rem",
                "6rem",
                "6rem",
                "5.5rem",
                "7rem",
                "14vh"
            ],
            w: "full",
            bgPos: "center",
            justifyContent: {
                base: "right",
                md: "right",
                lg: "space-between"
            },
            alignSelf: "center",
            bgImage: `url(${navbar.src})`,
            bgRepeat: "no-repeat",
            bgSize: {
                base: "cover",
                md: "cover",
                lg: "contain"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    alignItems: "start",
                    pt: {
                        base: "0",
                        md: "0",
                        lg: "0",
                        xl: "0",
                        "2xl": "2"
                    },
                    d: {
                        base: "none",
                        md: "none",
                        lg: "flex",
                        xl: "flex"
                    },
                    mx: "auto",
                    w: [
                        "100%",
                        "100%",
                        "100%",
                        "100%",
                        "86%",
                        "86%"
                    ],
                    px: "0 !Important",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        color: "white",
                        fontSize: "sm, sm, sm, lg, lg, lg",
                        fontWeight: "medium",
                        filter: "drop-shadow(4px 4px 4px #000000)",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        w: "full",
                        className: "headrLink",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                pl: "8",
                                mx: "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mx: "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/mint",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                        theme: "bigger",
                                        content: "Sale Not Active",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Mint"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mx: "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/punkydex",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                        theme: "bigger",
                                        content: "Coming Very Soon!",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Punkydex"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mx: "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/market",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                        theme: "bigger",
                                        content: "Under Construction",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Arena Market"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mx: "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/play",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                        theme: "bigger",
                                        content: "Coming Soon: See Battlepaper for planned Release Date",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Play"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mx: "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/lsd",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "$LSD"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mx: "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                        theme: "bigger",
                                        content: "Coming Soon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Punkon"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mx: "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://s3.eu-central-1.amazonaws.com/lunarsystem.co/Battlepaper.pdf",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Battlepaper"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mx: "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                        theme: "bigger",
                                        content: "Coming Soon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "FAQ"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mx: "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_tippyjs_react_default()), {
                                        theme: "bigger",
                                        content: "Coming Soon: email us at info@lunarsystem.co about partnership inquiries",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Partners"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mx: "2",
                                color: "white"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    d: {
                        base: "block",
                        md: "block",
                        lg: "none",
                        xl: "none"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(home_MobileHeader, {
                        d: {
                            base: "block",
                            md: "block",
                            lg: "flex"
                        }
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const header_Header = (Header);


/***/ })

};
;