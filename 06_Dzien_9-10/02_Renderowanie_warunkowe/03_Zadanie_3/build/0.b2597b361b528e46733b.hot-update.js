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
  // is the number a prime number
  var isPrime = true;
  for (var i = 2; i <= props.number / 2; i++) {
    if (props.number % i === 0) {
      isPrime = false;
      break;
    }
  }
  var isPowerTo2 = false;
  for (var _i = 1; _i <= props.number; _i++) {
    var powerTo2 = Math.pow(2, _i);
    if (powerTo2 > props.number) {
      break;
    } else if (powerTo2 === props.number) {
      isPowerTo2 = true;
      break;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, props.number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, props.number % 2 ? "Nieparzysta" : "Parzysta"), isPrime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\"Liczba pierwsza\""), isPowerTo2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\"Pot\u0119ga liczby 2\""));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberInfo);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b6daf02a52b29eb9b3fa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMjU5N2IzNjFiNTI4ZTQ2NzMzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxTQUFTRSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdkI7RUFDQSxJQUFJQyxPQUFPLEdBQUcsSUFBSTtFQUNsQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSUYsS0FBSyxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUN4QyxJQUFJRixLQUFLLENBQUNHLE1BQU0sR0FBR0QsQ0FBQyxLQUFLLENBQUMsRUFBRTtNQUN4QkQsT0FBTyxHQUFHLEtBQUs7TUFDZjtJQUNKO0VBQ0o7RUFFQSxJQUFJRyxVQUFVLEdBQUcsS0FBSztFQUN0QixLQUFLLElBQUlGLEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsSUFBSUYsS0FBSyxDQUFDRyxNQUFNLEVBQUVELEVBQUMsRUFBRSxFQUFFO0lBQ3BDLElBQUlHLFFBQVEsR0FBQUMsSUFBQSxDQUFBQyxHQUFBLENBQUcsQ0FBQyxFQUFJTCxFQUFDO0lBQ3JCLElBQUlHLFFBQVEsR0FBR0wsS0FBSyxDQUFDRyxNQUFNLEVBQUU7TUFDekI7SUFDSixDQUFDLE1BQU0sSUFBSUUsUUFBUSxLQUFLTCxLQUFLLENBQUNHLE1BQU0sRUFBRTtNQUNsQ0MsVUFBVSxHQUFHLElBQUk7TUFDakI7SUFDSjtFQUNKO0VBRUEsb0JBQ0lQLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFLRyxLQUFLLENBQUNHLE1BQVcsQ0FBQyxlQUN2Qk4sMERBQUEsYUFBS0csS0FBSyxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLGFBQWEsR0FBRyxVQUFlLENBQUMsRUFDdkRGLE9BQU8saUJBQUlKLDBEQUFBLGFBQUkscUJBQXFCLENBQUMsRUFDckNPLFVBQVUsaUJBQUlQLDBEQUFBLGFBQUksMEJBQXFCLENBQ3hDLENBQUM7QUFFYjtBQUVBLGlFQUFlRSxVQUFVOzs7Ozs7OztVQ2xDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAyX1JlbmRlcm93YW5pZV93YXJ1bmtvd2UvMDNfWmFkYW5pZV8zL2pzL051bWJlckluZm8uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE51bWJlckluZm8ocHJvcHMpIHtcblxuICAgIC8vIGlzIHRoZSBudW1iZXIgYSBwcmltZSBudW1iZXJcbiAgICBsZXQgaXNQcmltZSA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcHJvcHMubnVtYmVyIC8gMjsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9wcy5udW1iZXIgJSBpID09PSAwKSB7XG4gICAgICAgICAgICBpc1ByaW1lID0gZmFsc2VcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaXNQb3dlclRvMiA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHByb3BzLm51bWJlcjsgaSsrKSB7XG4gICAgICAgIGxldCBwb3dlclRvMiA9IDIgKiogaTtcbiAgICAgICAgaWYgKHBvd2VyVG8yID4gcHJvcHMubnVtYmVyKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChwb3dlclRvMiA9PT0gcHJvcHMubnVtYmVyKSB7XG4gICAgICAgICAgICBpc1Bvd2VyVG8yID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPntwcm9wcy5udW1iZXJ9PC9saT5cbiAgICAgICAgICAgIDxsaT57cHJvcHMubnVtYmVyICUgMiA/IFwiTmllcGFyenlzdGFcIiA6IFwiUGFyenlzdGFcIn08L2xpPlxuICAgICAgICAgICAge2lzUHJpbWUgJiYgPGxpPlwiTGljemJhIHBpZXJ3c3phXCI8L2xpPn1cbiAgICAgICAgICAgIHtpc1Bvd2VyVG8yICYmIDxsaT5cIlBvdMSZZ2EgbGljemJ5IDJcIjwvbGk+fVxuICAgICAgICA8L3VsPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5mbyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI2ZGFmMDJhNTJiMjllYjliM2ZhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOdW1iZXJJbmZvIiwicHJvcHMiLCJpc1ByaW1lIiwiaSIsIm51bWJlciIsImlzUG93ZXJUbzIiLCJwb3dlclRvMiIsIk1hdGgiLCJwb3ciLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==