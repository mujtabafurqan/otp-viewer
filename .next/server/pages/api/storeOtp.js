"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/storeOtp";
exports.ids = ["pages/api/storeOtp"];
exports.modules = {

/***/ "ioredis":
/*!**************************!*\
  !*** external "ioredis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ "react-uuid":
/*!*****************************!*\
  !*** external "react-uuid" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("react-uuid");

/***/ }),

/***/ "(api)/./pages/api/storeOtp.js":
/*!*******************************!*\
  !*** ./pages/api/storeOtp.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ioredis */ \"ioredis\");\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ioredis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ \"react-uuid\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet redis = new (ioredis__WEBPACK_IMPORTED_MODULE_0___default())(process.env.REDIS_URL);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const otpId = react_uuid__WEBPACK_IMPORTED_MODULE_1___default()();\n    const otp = Math.floor(100000 + Math.random() * 900000);\n    const otpRedis = await redis.set(otpId, otp, \"EX\", 60);\n    res.status(200).json({\n        otpId\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RvcmVPdHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkI7QUFDRztBQUU5QixJQUFJRSxRQUFRLElBQUlGLGdEQUFLQSxDQUFDRyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7QUFFM0MsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUMvQixNQUFNQyxRQUFRUCxpREFBSUE7SUFDbEIsTUFBTVEsTUFBTUMsS0FBS0MsS0FBSyxDQUFDLFNBQVNELEtBQUtFLE1BQU0sS0FBSztJQUNoRCxNQUFNQyxXQUFXLE1BQU1YLE1BQU1ZLEdBQUcsQ0FBQ04sT0FBT0MsS0FBSyxNQUFNO0lBQ25ERixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVSO0lBQU07QUFDakMsR0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL290cHZpZXdlci8uL3BhZ2VzL2FwaS9zdG9yZU90cC5qcz8zYjQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWRpcyBmcm9tICdpb3JlZGlzJ1xuaW1wb3J0IHV1aWQgZnJvbSAncmVhY3QtdXVpZCc7XG5cbmxldCByZWRpcyA9IG5ldyBSZWRpcyhwcm9jZXNzLmVudi5SRURJU19VUkwpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG90cElkID0gdXVpZCgpO1xuICAgIGNvbnN0IG90cCA9IE1hdGguZmxvb3IoMTAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMCk7XG4gICAgY29uc3Qgb3RwUmVkaXMgPSBhd2FpdCByZWRpcy5zZXQob3RwSWQsIG90cCwgJ0VYJywgNjApO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgb3RwSWQgfSlcbn0iXSwibmFtZXMiOlsiUmVkaXMiLCJ1dWlkIiwicmVkaXMiLCJwcm9jZXNzIiwiZW52IiwiUkVESVNfVVJMIiwicmVxIiwicmVzIiwib3RwSWQiLCJvdHAiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJvdHBSZWRpcyIsInNldCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/storeOtp.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/storeOtp.js"));
module.exports = __webpack_exports__;

})();