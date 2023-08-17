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
    // console.log(data)
    setData(data);
  });
  if (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Balance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Change"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, data.map(function (element, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, element.day), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, element.balance), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, element.change));
    })));
  } else {
    return null;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountData);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c247e7c94f8d967a9a53")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mYmEwNWQzN2IzYWE5YzgzZDhlMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRTtBQUV4QyxTQUFTRyxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7RUFDeEIsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBaENHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFFcEJKLHdEQUFPLENBQUNRLElBQUksQ0FBQyxVQUFBRixJQUFJLEVBQUk7SUFDakI7SUFDQUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7RUFDakIsQ0FBQyxDQUFDO0VBRUYsSUFBSUEsSUFBSSxFQUFFO0lBQ04sb0JBQ0lSLDBEQUFBLDZCQUNJQSwwREFBQSw2QkFDQUEsMERBQUEsMEJBQ0lBLDBEQUFBLGFBQUksS0FBTyxDQUFDLGVBQ1pBLDBEQUFBLGFBQUksU0FBVyxDQUFDLGVBQ2hCQSwwREFBQSxhQUFJLFFBQVUsQ0FDZCxDQUNHLENBQUMsZUFDUkEsMERBQUEsZ0JBQ0NRLElBQUksQ0FBQ0ksR0FBRyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFLO01BQzFCLG9CQUNJZCwwREFBQTtRQUFJZSxHQUFHLEVBQUVEO01BQU0sZ0JBQ1hkLDBEQUFBLGFBQUthLE9BQU8sQ0FBQ0csR0FBUSxDQUFDLGVBQ3RCaEIsMERBQUEsYUFBS2EsT0FBTyxDQUFDSSxPQUFZLENBQUMsZUFDMUJqQiwwREFBQSxhQUFLYSxPQUFPLENBQUNLLE1BQVcsQ0FDeEIsQ0FBQztJQUViLENBQUMsQ0FDTSxDQUNKLENBQUM7RUFFaEIsQ0FBQyxNQUFNO0lBQ0gsT0FBTyxJQUFJO0VBQ2Y7QUFFSjtBQUVBLGlFQUFlZixXQUFXOzs7Ozs7OztVQ3hDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAzX1dhcnVua293ZV9ibG9rb3dhbmllX3d5c3dpZXRsYW5pYS8wMl9aYWRhbmllXzIvanMvQWNjb3VudERhdGEuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmFrZUFQSSBmcm9tIFwiLi9kYXRhL2Zha2VBUEkuanNcIjtcblxuZnVuY3Rpb24gQWNjb3VudERhdGEocHJvcHMpIHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIEZha2VBUEkudGhlbihkYXRhID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgc2V0RGF0YShkYXRhKVxuICAgIH0pO1xuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+RGF5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkJhbGFuY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+Q2hhbmdlPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsZW1lbnQuZGF5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbGVtZW50LmJhbGFuY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsZW1lbnQuY2hhbmdlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50RGF0YSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMyNDdlN2M5NGY4ZDk2N2E5YTUzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYWtlQVBJIiwiQWNjb3VudERhdGEiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImRhdGEiLCJzZXREYXRhIiwidGhlbiIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJrZXkiLCJkYXkiLCJiYWxhbmNlIiwiY2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==