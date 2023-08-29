"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
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


function WhoIsPresent() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa']),
    _useState2 = _slicedToArray(_useState, 2),
    selectFrom = _useState2[0],
    setSelectFrom = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var handleChange = function handleChange(e) {
    console.log(e.target.value);
    setSelected([].concat(_toConsumableArray(selected), [e.target.value]));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: handleChange
  }, selectFrom.map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: index
    }, el);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, selected.map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, el);
  })));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WhoIsPresent, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c6f4320d1acb13f81d27")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZGJlMmZhN2NmZjQ4OGQ5ZGZkNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFFNUMsU0FBU0csWUFBWUEsQ0FBQSxFQUFHO0VBRXBCLElBQUFDLFNBQUEsR0FBb0NILCtDQUFRLENBQUMsQ0FBQyxlQUFlLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdkhHLFVBQVUsR0FBQUYsVUFBQTtJQUFFRyxhQUFhLEdBQUFILFVBQUE7RUFDaEMsSUFBQUksVUFBQSxHQUFnQ1IsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVMsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFFNUIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDM0JOLFdBQVcsSUFBQU8sTUFBQSxDQUFBQyxrQkFBQSxDQUFLVCxRQUFRLElBQUVHLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLEVBQUMsQ0FBQztFQUM5QyxDQUFDO0VBRUQsb0JBQ0lsQiwwREFBQSw0QkFDSUEsMERBQUE7SUFBUXNCLFFBQVEsRUFBRVQ7RUFBYSxHQUMxQk4sVUFBVSxDQUFDZ0IsR0FBRyxDQUFDLFVBQUNDLEVBQUUsRUFBRUMsS0FBSyxFQUFLO0lBQzNCLG9CQUFPekIsMERBQUE7TUFBUTBCLEdBQUcsRUFBRUQ7SUFBTSxHQUFFRCxFQUFXLENBQUM7RUFDNUMsQ0FBQyxDQUNHLENBQUMsZUFDVHhCLDBEQUFBLGFBQ0tXLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDLFVBQUNDLEVBQUUsRUFBRUMsS0FBSztJQUFBLG9CQUFLekIsMERBQUE7TUFBSTBCLEdBQUcsRUFBRUQ7SUFBTSxHQUFFRCxFQUFPLENBQUM7RUFBQSxFQUN0RCxDQUNGLENBQUM7QUFFZjtBQUVBLFNBQVNHLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUFPM0IsMERBQUEsQ0FBQ0csWUFBWSxNQUFDLENBQUM7QUFDMUI7QUFFQSxJQUFNeUIsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHN0IsNERBQVUsQ0FBQzBCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNoQywwREFBQSxDQUFDMkIsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNqQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMTktMjEvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFdob0lzUHJlc2VudCgpIHtcblxuICAgIGNvbnN0IFtzZWxlY3RGcm9tLCBzZXRTZWxlY3RGcm9tXSA9IHVzZVN0YXRlKFsnQW5uYSBLb3dhbHNrYScsICdKYW4gS293YWxza2knLCAnTWFjaWVqIHZvbiBIYW5kZXJidXJnJywgJ0p1cmFuZCB6ZSBTcHljaG93YSddKVxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgc2V0U2VsZWN0ZWQoWy4uLnNlbGVjdGVkLCBlLnRhcmdldC52YWx1ZV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIHtzZWxlY3RGcm9tLm1hcCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9PntlbH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZC5tYXAoKGVsLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9PntlbH08L2xpPil9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxXaG9Jc1ByZXNlbnQvPlxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzZmNDMyMGQxYWNiMTNmODFkMjdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJXaG9Jc1ByZXNlbnQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RGcm9tIiwic2V0U2VsZWN0RnJvbSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjcmVhdGVFbGVtZW50Iiwib25DaGFuZ2UiLCJtYXAiLCJlbCIsImluZGV4Iiwia2V5IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9