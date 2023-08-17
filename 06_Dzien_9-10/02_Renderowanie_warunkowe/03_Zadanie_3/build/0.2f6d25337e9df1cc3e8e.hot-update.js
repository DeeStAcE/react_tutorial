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
  for (var i = 2; i <= props.number; i++) {
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
/******/ 	__webpack_require__.h = () => ("908264dc1f9d51c1a1bf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yZjZkMjUzMzdlOWRmMWNjM2U4ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxTQUFTRSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFFdkIsSUFBSUMsT0FBTyxHQUFHLElBQUk7RUFDbEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUlGLEtBQUssQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUNwQyxJQUFJRixLQUFLLENBQUNHLE1BQU0sR0FBR0QsQ0FBQyxLQUFLLENBQUMsRUFBRTtNQUN4QkQsT0FBTyxHQUFHLEtBQUs7TUFDZjtJQUNKO0VBQ0o7RUFDQUcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FBQztFQUVwQixvQkFDSUosMERBQUEsMEJBQ0lBLDBEQUFBLGFBQUtHLEtBQUssQ0FBQ0csTUFBVyxDQUFDLGVBQ3ZCTiwwREFBQSxhQUFLRyxLQUFLLENBQUNHLE1BQU0sR0FBRyxDQUFDLEdBQUcsYUFBYSxHQUFHLFVBQWUsQ0FBQyxFQUN2REYsT0FBTyxpQkFBSUosMERBQUEsYUFBSSxxQkFBcUIsQ0FDckMsQ0FBQztBQUViO0FBRUEsaUVBQWVFLFVBQVU7Ozs7Ozs7O1VDdEJ6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDJfUmVuZGVyb3dhbmllX3dhcnVua293ZS8wM19aYWRhbmllXzMvanMvTnVtYmVySW5mby5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTnVtYmVySW5mbyhwcm9wcykge1xuXG4gICAgbGV0IGlzUHJpbWUgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHByb3BzLm51bWJlcjsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9wcy5udW1iZXIgJSBpID09PSAwKSB7XG4gICAgICAgICAgICBpc1ByaW1lID0gZmFsc2VcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coaXNQcmltZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT57cHJvcHMubnVtYmVyfTwvbGk+XG4gICAgICAgICAgICA8bGk+e3Byb3BzLm51bWJlciAlIDIgPyBcIk5pZXBhcnp5c3RhXCIgOiBcIlBhcnp5c3RhXCJ9PC9saT5cbiAgICAgICAgICAgIHtpc1ByaW1lICYmIDxsaT5cIkxpY3piYSBwaWVyd3N6YVwiPC9saT59XG4gICAgICAgIDwvdWw+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbmZvIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTA4MjY0ZGMxZjlkNTFjMWExYmZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk51bWJlckluZm8iLCJwcm9wcyIsImlzUHJpbWUiLCJpIiwibnVtYmVyIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9