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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Balance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Change"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, data.map(function (element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, element.day), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, element.balance), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, element.change));
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
/******/ 	__webpack_require__.h = () => ("fba05d37b3aa9c83d8e0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZTgyNDUzY2E5ODk5NTQ2YzAxNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRTtBQUV4QyxTQUFTRyxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7RUFDeEIsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBaENHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFFcEJKLHdEQUFPLENBQUNRLElBQUksQ0FBQyxVQUFBRixJQUFJLEVBQUk7SUFDakI7SUFDQUMsT0FBTyxDQUFDRCxJQUFJLENBQUM7RUFDakIsQ0FBQyxDQUFDO0VBRUYsSUFBSUEsSUFBSSxFQUFFO0lBQ04sb0JBQ0lSLDBEQUFBLDZCQUNJQSwwREFBQSw2QkFDQUEsMERBQUEsMEJBQ0lBLDBEQUFBLGFBQUksS0FBTyxDQUFDLGVBQ1pBLDBEQUFBLGFBQUksU0FBVyxDQUFDLGVBQ2hCQSwwREFBQSxhQUFJLFFBQVUsQ0FDZCxDQUNHLENBQUMsZUFDUkEsMERBQUEsZ0JBQ0NRLElBQUksQ0FBQ0ksR0FBRyxDQUFDLFVBQUFDLE9BQU8sRUFBSTtNQUNqQixvQkFDSWIsMERBQUEsMEJBQ0lBLDBEQUFBLGFBQUthLE9BQU8sQ0FBQ0MsR0FBUSxDQUFDLGVBQ3RCZCwwREFBQSxhQUFLYSxPQUFPLENBQUNFLE9BQVksQ0FBQyxlQUMxQmYsMERBQUEsYUFBS2EsT0FBTyxDQUFDRyxNQUFXLENBQ3hCLENBQUM7SUFFYixDQUFDLENBQ00sQ0FDSixDQUFDO0VBRWhCLENBQUMsTUFBTTtJQUNILE9BQU8sSUFBSTtFQUNmO0FBRUo7QUFFQSxpRUFBZWIsV0FBVzs7Ozs7Ozs7VUN4QzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wM19XYXJ1bmtvd2VfYmxva293YW5pZV93eXN3aWV0bGFuaWEvMDJfWmFkYW5pZV8yL2pzL0FjY291bnREYXRhLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZha2VBUEkgZnJvbSBcIi4vZGF0YS9mYWtlQVBJLmpzXCI7XG5cbmZ1bmN0aW9uIEFjY291bnREYXRhKHByb3BzKSB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBGYWtlQVBJLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIHNldERhdGEoZGF0YSlcbiAgICB9KTtcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkRheTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5CYWxhbmNlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkNoYW5nZTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsZW1lbnQuZGF5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbGVtZW50LmJhbGFuY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsZW1lbnQuY2hhbmdlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50RGF0YSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZiYTA1ZDM3YjNhYTljODNkOGUwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYWtlQVBJIiwiQWNjb3VudERhdGEiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImRhdGEiLCJzZXREYXRhIiwidGhlbiIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbGVtZW50IiwiZGF5IiwiYmFsYW5jZSIsImNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=