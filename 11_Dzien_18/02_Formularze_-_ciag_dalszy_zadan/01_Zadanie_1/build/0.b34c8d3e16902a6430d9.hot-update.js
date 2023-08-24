"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var PESELInput = function PESELInput() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    pesel = _useState2[0],
    setPesel = _useState2[1];
  var submitButton = null;
  if (pesel.length === 11 && /^[0-9]+$/.test(pesel)) {
    submitButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "submit",
      value: "Prze\u015Blij"
    });
  }
  var infoMessage = '';
  if (pesel.length !== 0 && (pesel.length !== 11 || !/^[0-9]+$/.test(pesel))) {
    infoMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "info"
    }, "Niepoprawny numer PESEL");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: pesel,
    onChange: function onChange(e) {
      return setPesel(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, submitButton), infoMessage);
};
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PESELInput, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f81b660d6816154c7bbf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMzRjOGQzZTE2OTAyYTY0MzBkOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3JCLElBQUFDLFNBQUEsR0FBMEJKLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFLLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQS9CRyxLQUFLLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBRXRCLElBQUlJLFlBQVksR0FBRyxJQUFJO0VBQ3ZCLElBQUlGLEtBQUssQ0FBQ0csTUFBTSxLQUFLLEVBQUUsSUFBSSxVQUFVLENBQUNDLElBQUksQ0FBQ0osS0FBSyxDQUFDLEVBQUU7SUFDL0NFLFlBQVksZ0JBQUdWLDBEQUFBO01BQU9jLElBQUksRUFBQyxRQUFRO01BQUNDLEtBQUssRUFBQztJQUFVLENBQUMsQ0FBQztFQUMxRDtFQUVBLElBQUlDLFdBQVcsR0FBRyxFQUFFO0VBQ3BCLElBQUlSLEtBQUssQ0FBQ0csTUFBTSxLQUFLLENBQUMsS0FBS0gsS0FBSyxDQUFDRyxNQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDQyxJQUFJLENBQUNKLEtBQUssQ0FBQyxDQUFDLEVBQUU7SUFDeEVRLFdBQVcsZ0JBQUdoQiwwREFBQTtNQUFLaUIsU0FBUyxFQUFDO0lBQU0sR0FBQyx5QkFBNEIsQ0FBQztFQUNyRTtFQUVBLG9CQUNJakIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQU9jLElBQUksRUFBQyxNQUFNO0lBQUNDLEtBQUssRUFBRVAsS0FBTTtJQUFDVSxRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsQ0FBQztNQUFBLE9BQUtWLFFBQVEsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFNLENBQUNMLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUFDLGVBQzdFZiwwREFBQSxjQUNLVSxZQUNBLENBQUMsRUFDTE0sV0FDQSxDQUFDO0FBRWQsQ0FBQztBQUVELFNBQVNLLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUFPckIsMERBQUEsQ0FBQ0ksVUFBVSxNQUFDLENBQUM7QUFDeEI7QUFFQSxJQUFNa0IsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHdEIsNERBQVUsQ0FBQ21CLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUMxQiwwREFBQSxDQUFDcUIsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNqQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgvMDJfRm9ybXVsYXJ6ZV8tX2NpYWdfZGFsc3p5X3phZGFuLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgUEVTRUxJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCBbcGVzZWwsIHNldFBlc2VsXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGxldCBzdWJtaXRCdXR0b24gPSBudWxsO1xuICAgIGlmIChwZXNlbC5sZW5ndGggPT09IDExICYmIC9eWzAtOV0rJC8udGVzdChwZXNlbCkpIHtcbiAgICAgICAgc3VibWl0QnV0dG9uID0gPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlByemXFm2xpalwiLz47XG4gICAgfVxuXG4gICAgbGV0IGluZm9NZXNzYWdlID0gJyc7XG4gICAgaWYgKHBlc2VsLmxlbmd0aCAhPT0gMCAmJiAocGVzZWwubGVuZ3RoICE9PSAxMSB8fCAhL15bMC05XSskLy50ZXN0KHBlc2VsKSkpIHtcbiAgICAgICAgaW5mb01lc3NhZ2UgPSA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5OaWVwb3ByYXdueSBudW1lciBQRVNFTDwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Blc2VsfSBvbkNoYW5nZT17KGUpID0+IHNldFBlc2VsKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7c3VibWl0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aW5mb01lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFBFU0VMSW5wdXQvPlxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY4MWI2NjBkNjgxNjE1NGM3YmJmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVSb290IiwiUEVTRUxJbnB1dCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInBlc2VsIiwic2V0UGVzZWwiLCJzdWJtaXRCdXR0b24iLCJsZW5ndGgiLCJ0ZXN0IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJ2YWx1ZSIsImluZm9NZXNzYWdlIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9