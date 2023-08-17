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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Balance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Change"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, data.map(function (element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, element), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, element), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, element));
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
/******/ 	__webpack_require__.h = () => ("16044caf9988c7ae60ae")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jNDY5Yzg2ZjlkY2QxNjczNzA5Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRTtBQUV4QyxTQUFTRyxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7RUFDeEIsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBaENHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFFcEJKLHdEQUFPLENBQUNRLElBQUksQ0FBQyxVQUFBRixJQUFJLEVBQUk7SUFDakJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUM7SUFDakJDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO0VBQ2pCLENBQUMsQ0FBQztFQUVGLElBQUlBLElBQUksRUFBRTtJQUNOLG9CQUNJUiwwREFBQSw2QkFDSUEsMERBQUEsNkJBQ0FBLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFJLEtBQU8sQ0FBQyxlQUNaQSwwREFBQSxhQUFJLFNBQVcsQ0FBQyxlQUNoQkEsMERBQUEsYUFBSSxRQUFVLENBQ2QsQ0FDRyxDQUFDLGVBQ1JBLDBEQUFBLGdCQUNDUSxJQUFJLENBQUNNLEdBQUcsQ0FBQyxVQUFBQyxPQUFPLEVBQUk7TUFDakIsb0JBQ0lmLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFLZSxPQUFZLENBQUMsZUFDbEJmLDBEQUFBLGFBQUtlLE9BQVksQ0FBQyxlQUNsQmYsMERBQUEsYUFBS2UsT0FBWSxDQUNqQixDQUFDO0lBRWIsQ0FBQyxDQUNNLENBQ0osQ0FBQztFQUVoQixDQUFDLE1BQU07SUFDSCxPQUFPLElBQUk7RUFDZjtBQUVKO0FBRUEsaUVBQWVaLFdBQVc7Ozs7Ozs7O1VDeEMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDNfV2FydW5rb3dlX2Jsb2tvd2FuaWVfd3lzd2lldGxhbmlhLzAyX1phZGFuaWVfMi9qcy9BY2NvdW50RGF0YS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGYWtlQVBJIGZyb20gXCIuL2RhdGEvZmFrZUFQSS5qc1wiO1xuXG5mdW5jdGlvbiBBY2NvdW50RGF0YShwcm9wcykge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgRmFrZUFQSS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBzZXREYXRhKGRhdGEpXG4gICAgfSk7XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5EYXk8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+QmFsYW5jZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5DaGFuZ2U8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbGVtZW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbGVtZW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbGVtZW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50RGF0YSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE2MDQ0Y2FmOTk4OGM3YWU2MGFlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYWtlQVBJIiwiQWNjb3VudERhdGEiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImRhdGEiLCJzZXREYXRhIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=