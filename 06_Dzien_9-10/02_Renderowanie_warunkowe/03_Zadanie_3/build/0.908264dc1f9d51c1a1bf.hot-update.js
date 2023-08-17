"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function NumberInfo(props) {
  var isPrime = true;
  for (var i = 2; i <= props.number / 2; i++) {
    if (props.number % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, props.number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, props.number % 2 ? "Nieparzysta" : "Parzysta"), isPrime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\"Liczba pierwsza\""));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberInfo);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ad87305c7fb644cff91")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MDgyNjRkYzFmOWQ1MWMxYTFiZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxTQUFTRSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdkIsSUFBSUMsT0FBTyxHQUFHLElBQUk7RUFDbEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUlGLEtBQUssQ0FBQ0csTUFBTSxHQUFHLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7SUFDeEMsSUFBSUYsS0FBSyxDQUFDRyxNQUFNLEdBQUdELENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDeEJELE9BQU8sR0FBRyxLQUFLO01BQ2Y7SUFDSjtFQUNKO0VBQ0FHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQUM7RUFFcEIsb0JBQ0lKLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFLRyxLQUFLLENBQUNHLE1BQVcsQ0FBQyxlQUN2Qk4sMERBQUEsYUFBS0csS0FBSyxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLGFBQWEsR0FBRyxVQUFlLENBQUMsRUFDdkRGLE9BQU8saUJBQUlKLDBEQUFBLGFBQUkscUJBQXFCLENBQ3JDLENBQUM7QUFFYjtBQUVBLGlFQUFlRSxVQUFVOzs7Ozs7OztVQ3RCekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAyX1JlbmRlcm93YW5pZV93YXJ1bmtvd2UvMDNfWmFkYW5pZV8zL2pzL051bWJlckluZm8uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE51bWJlckluZm8ocHJvcHMpIHtcblxuICAgIGxldCBpc1ByaW1lID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBwcm9wcy5udW1iZXIgLyAyOyBpKyspIHtcbiAgICAgICAgaWYgKHByb3BzLm51bWJlciAlIGkgPT09IDApIHtcbiAgICAgICAgICAgIGlzUHJpbWUgPSBmYWxzZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhpc1ByaW1lKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPntwcm9wcy5udW1iZXJ9PC9saT5cbiAgICAgICAgICAgIDxsaT57cHJvcHMubnVtYmVyICUgMiA/IFwiTmllcGFyenlzdGFcIiA6IFwiUGFyenlzdGFcIn08L2xpPlxuICAgICAgICAgICAge2lzUHJpbWUgJiYgPGxpPlwiTGljemJhIHBpZXJ3c3phXCI8L2xpPn1cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckluZm8iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YWQ4NzMwNWM3ZmI2NDRjZmY5MVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTnVtYmVySW5mbyIsInByb3BzIiwiaXNQcmltZSIsImkiLCJudW1iZXIiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=