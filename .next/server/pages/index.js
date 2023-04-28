"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,500,359];
exports.modules = {

/***/ 60:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(442);
;// CONCATENATED MODULE: ./src/components/common/Card/styles.ts

const WholeWrap = (0,styles_.styled)("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`;
const CardWrap = (0,styles_.styled)("div")`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0;
  order: 4;
  padding: 0;
  position: relative;
  justify-content: center;
`;

// EXTERNAL MODULE: ./src/pages/accounts/login/index.tsx + 8 modules
var login = __webpack_require__(108);
// EXTERNAL MODULE: ./src/pages/styles.ts
var styles = __webpack_require__(901);
;// CONCATENATED MODULE: ./src/pages/index.tsx





function Root() {
    return /*#__PURE__*/ jsx_runtime_.jsx(WholeWrap, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(CardWrap, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.Article, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(styles.PictureWrap, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(styles.Picture, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(login["default"], {})
                ]
            })
        })
    });
}
/* harmony default export */ const pages = (Root);


/***/ }),

/***/ 13:
/***/ ((module) => {

module.exports = require("@mui/base");

/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
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
var __webpack_exports__ = __webpack_require__.X(0, [901,108], () => (__webpack_exec__(60)));
module.exports = __webpack_exports__;

})();