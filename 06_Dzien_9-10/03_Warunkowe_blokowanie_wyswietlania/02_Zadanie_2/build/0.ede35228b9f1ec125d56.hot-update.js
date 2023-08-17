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
/* harmony import */ var _data_fakeAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function AccountData(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  _data_fakeAPI_js__WEBPACK_IMPORTED_MODULE_1__["default"].then(function (data) {
    console.log(data);
    setData(data);
  });
  if (data) {
    return null;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "za\u0142dowane");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountData);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("925ef24ea5e57867301a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZGUzNTIyOGI5ZjFlYzEyNWQ1Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRTtBQUV4QyxTQUFTRyxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7RUFDeEIsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBaENHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFFcEJKLHdEQUFPLENBQUNRLElBQUksQ0FBQyxVQUFBRixJQUFJLEVBQUk7SUFDakJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUM7SUFDakJDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO0VBQ2pCLENBQUMsQ0FBQztFQUVGLElBQUlBLElBQUksRUFBRTtJQUNOLE9BQU8sSUFBSTtFQUNmLENBQUMsTUFBTTtJQUNILG9CQUNJUiwwREFBQSxhQUFJLGdCQUFhLENBQUM7RUFFMUI7QUFFSjtBQUVBLGlFQUFlRyxXQUFXOzs7Ozs7OztVQ3JCMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAzX1dhcnVua293ZV9ibG9rb3dhbmllX3d5c3dpZXRsYW5pYS8wMl9aYWRhbmllXzIvanMvQWNjb3VudERhdGEuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmFrZUFQSSBmcm9tIFwiLi9kYXRhL2Zha2VBUEkuanNcIjtcblxuZnVuY3Rpb24gQWNjb3VudERhdGEocHJvcHMpIHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIEZha2VBUEkudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgc2V0RGF0YShkYXRhKVxuICAgIH0pO1xuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGgxPnphxYJkb3dhbmU8L2gxPlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnREYXRhIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTI1ZWYyNGVhNWU1Nzg2NzMwMWFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZha2VBUEkiLCJBY2NvdW50RGF0YSIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZGF0YSIsInNldERhdGEiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9