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
    if (Math.pow(2, _i) === props.number) {
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
/******/ 	__webpack_require__.h = () => ("b2597b361b528e46733b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMzU1NzQxZDdhNzM5MWIxZmZlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxTQUFTRSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdkI7RUFDQSxJQUFJQyxPQUFPLEdBQUcsSUFBSTtFQUNsQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSUYsS0FBSyxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUN4QyxJQUFJRixLQUFLLENBQUNHLE1BQU0sR0FBR0QsQ0FBQyxLQUFLLENBQUMsRUFBRTtNQUN4QkQsT0FBTyxHQUFHLEtBQUs7TUFDZjtJQUNKO0VBQ0o7RUFFQSxJQUFJRyxVQUFVLEdBQUcsS0FBSztFQUN0QixLQUFLLElBQUlGLEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsSUFBSUYsS0FBSyxDQUFDRyxNQUFNLEVBQUVELEVBQUMsRUFBRSxFQUFFO0lBQ3BDLElBQUlHLElBQUEsQ0FBQUMsR0FBQSxFQUFDLEVBQUlKLEVBQUMsTUFBS0YsS0FBSyxDQUFDRyxNQUFNLEVBQUU7TUFDekJDLFVBQVUsR0FBRyxJQUFJO01BQ2pCO0lBQ0o7RUFDSjtFQUVBLG9CQUNJUCwwREFBQSwwQkFDSUEsMERBQUEsYUFBS0csS0FBSyxDQUFDRyxNQUFXLENBQUMsZUFDdkJOLDBEQUFBLGFBQUtHLEtBQUssQ0FBQ0csTUFBTSxHQUFHLENBQUMsR0FBRyxhQUFhLEdBQUcsVUFBZSxDQUFDLEVBQ3ZERixPQUFPLGlCQUFJSiwwREFBQSxhQUFJLHFCQUFxQixDQUFDLEVBQ3JDTyxVQUFVLGlCQUFJUCwwREFBQSxhQUFJLDBCQUFxQixDQUN4QyxDQUFDO0FBRWI7QUFFQSxpRUFBZUUsVUFBVTs7Ozs7Ozs7VUMvQnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMl9SZW5kZXJvd2FuaWVfd2FydW5rb3dlLzAzX1phZGFuaWVfMy9qcy9OdW1iZXJJbmZvLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBOdW1iZXJJbmZvKHByb3BzKSB7XG5cbiAgICAvLyBpcyB0aGUgbnVtYmVyIGEgcHJpbWUgbnVtYmVyXG4gICAgbGV0IGlzUHJpbWUgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHByb3BzLm51bWJlciAvIDI7IGkrKykge1xuICAgICAgICBpZiAocHJvcHMubnVtYmVyICUgaSA9PT0gMCkge1xuICAgICAgICAgICAgaXNQcmltZSA9IGZhbHNlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGlzUG93ZXJUbzIgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwcm9wcy5udW1iZXI7IGkrKykge1xuICAgICAgICBpZiAoMiAqKiBpID09PSBwcm9wcy5udW1iZXIpIHtcbiAgICAgICAgICAgIGlzUG93ZXJUbzIgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+e3Byb3BzLm51bWJlcn08L2xpPlxuICAgICAgICAgICAgPGxpPntwcm9wcy5udW1iZXIgJSAyID8gXCJOaWVwYXJ6eXN0YVwiIDogXCJQYXJ6eXN0YVwifTwvbGk+XG4gICAgICAgICAgICB7aXNQcmltZSAmJiA8bGk+XCJMaWN6YmEgcGllcndzemFcIjwvbGk+fVxuICAgICAgICAgICAge2lzUG93ZXJUbzIgJiYgPGxpPlwiUG90xJlnYSBsaWN6YnkgMlwiPC9saT59XG4gICAgICAgIDwvdWw+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbmZvIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjI1OTdiMzYxYjUyOGU0NjczM2JcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk51bWJlckluZm8iLCJwcm9wcyIsImlzUHJpbWUiLCJpIiwibnVtYmVyIiwiaXNQb3dlclRvMiIsIk1hdGgiLCJwb3ciLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==