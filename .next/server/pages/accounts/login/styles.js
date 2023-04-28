"use strict";
(() => {
var exports = {};
exports.id = 318;
exports.ids = [318,359];
exports.modules = {

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "InputFormBottom": () => (/* binding */ InputFormBottom),
/* harmony export */   "InputFormTop": () => (/* binding */ InputFormTop),
/* harmony export */   "InputFormWrap": () => (/* binding */ InputFormWrap),
/* harmony export */   "Title": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

const InputFormWrap = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("div")`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const InputFormTop = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 8.5;
  justify-content: center;
  margin: 0 0 10px;

  border: 1px solid #dbdbdb;
  border-radius: 1px;
`;
const Title = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("div")`
  margin: 32px auto 12px;
  width: 180px;

  font-family: Lobstar;
  font-size: 28px;
`;
const Input = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`;
const InputFormBottom = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("div")`
  width: 100%;
  height: 100%;
  flex: 1.5;

  border: 1px solid #dbdbdb;
  border-radius: 1px;
`;


/***/ }),

/***/ 442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(894));
module.exports = __webpack_exports__;

})();