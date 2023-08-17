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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ColorfulBoxes() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    counter = _useState2[0],
    setCounter = _useState2[1];
  var handleClick = function handleClick() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setCounter([].concat(_toConsumableArray(counter), [randomColor]));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "Dodaj Boxa!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, counter.map(function (element) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundColor: element,
        height: "200px",
        width: "200px"
      }
    });
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorfulBoxes);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4898c8d864d8a2a9c665")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40N2UyYWM1NzgxZmQ2Y2QyNGNmNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsU0FBU0UsYUFBYUEsQ0FBQSxFQUFHO0VBQ3JCLElBQUFDLFNBQUEsR0FBOEJGLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQW5DRyxPQUFPLEdBQUFGLFVBQUE7SUFBRUcsVUFBVSxHQUFBSCxVQUFBO0VBRTFCLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEIsSUFBTUMsV0FBVyxHQUFHLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUMzRU4sVUFBVSxJQUFBTyxNQUFBLENBQUFDLGtCQUFBLENBQUtULE9BQU8sSUFBRUcsV0FBVyxFQUFDLENBQUM7RUFDekMsQ0FBQztFQUVELG9CQUNJVCwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUE7SUFBUWtCLE9BQU8sRUFBRVY7RUFBWSxHQUFDLGFBQW1CLENBQUMsZUFDbERSLDBEQUFBLGFBQ0tNLE9BQU8sQ0FBQ2EsR0FBRyxDQUFDLFVBQUFDLE9BQU8sRUFBSTtJQUNwQixvQkFDSXBCLDBEQUFBO01BQUtxQixLQUFLLEVBQUU7UUFBQ0MsZUFBZSxFQUFFRixPQUFPO1FBQUVHLE1BQU0sRUFBRSxPQUFPO1FBQUVDLEtBQUssRUFBRTtNQUFPO0lBQUUsQ0FBQyxDQUFDO0VBRWxGLENBQUMsQ0FDRCxDQUNOLENBQUM7QUFFWDtBQUVBLGlFQUFldEIsYUFBYTs7Ozs7Ozs7VUN4QjVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV91c2VTdGF0ZS8wMl9aYWRhbmllXzIvanMvQ29sb3JmdWxCb3hlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQ29sb3JmdWxCb3hlcygpIHtcbiAgICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZShbXSlcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21Db2xvciA9ICcjJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XG4gICAgICAgIHNldENvdW50ZXIoWy4uLmNvdW50ZXIsIHJhbmRvbUNvbG9yXSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+RG9kYWogQm94YSE8L2J1dHRvbj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7Y291bnRlci5tYXAoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBlbGVtZW50LCBoZWlnaHQ6IFwiMjAwcHhcIiwgd2lkdGg6IFwiMjAwcHhcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvcmZ1bEJveGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDg5OGM4ZDg2NGQ4YTJhOWM2NjVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbG9yZnVsQm94ZXMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjb3VudGVyIiwic2V0Q291bnRlciIsImhhbmRsZUNsaWNrIiwicmFuZG9tQ29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJtYXAiLCJlbGVtZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=