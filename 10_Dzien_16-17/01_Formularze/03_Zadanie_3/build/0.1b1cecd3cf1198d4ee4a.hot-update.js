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


function SelectOrType(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("You"),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", null, props.items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: item
    }, item);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Inne"
  }, "Inne")));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectOrType, {
    items: ["BMW", "Jaguar", "Porsche"]
  });
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("842c71ac7960a8591511")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xYjFjZWNkM2NmMTE5OGQ0ZWU0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFFekIsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBaENHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFFcEIsb0JBQ0lOLDBEQUFBLDRCQUNJQSwwREFBQSxpQkFDS0ksS0FBSyxDQUFDTyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxVQUFBQyxJQUFJO0lBQUEsb0JBQUliLDBEQUFBO01BQVFjLEtBQUssRUFBRUQ7SUFBSyxHQUFFQSxJQUFhLENBQUM7RUFBQSxFQUFDLGVBQzlEYiwwREFBQTtJQUFRYyxLQUFLLEVBQUM7RUFBTSxHQUFDLE1BQVksQ0FDN0IsQ0FDTixDQUFDO0FBRWY7QUFFQSxTQUFTQyxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT2YsMERBQUEsQ0FBQ0csWUFBWTtJQUFDUSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVM7RUFBRSxDQUFDLENBQUM7QUFDL0Q7QUFFQSxJQUFNSyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdqQiw0REFBVSxDQUFDYyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDcEIsMERBQUEsQ0FBQ2UsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUN2Qm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTBfRHppZW5fMTYtMTcvMDFfRm9ybXVsYXJ6ZS8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBTZWxlY3RPclR5cGUocHJvcHMpIHtcblxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiWW91XCIpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAge3Byb3BzLml0ZW1zLm1hcChpdGVtID0+IDxvcHRpb24gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklubmVcIj5Jbm5lPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiA8U2VsZWN0T3JUeXBlIGl0ZW1zPXtbXCJCTVdcIiwgXCJKYWd1YXJcIiwgXCJQb3JzY2hlXCJdfS8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODQyYzcxYWM3OTYwYTg1OTE1MTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJTZWxlY3RPclR5cGUiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJzZXROYW1lIiwiY3JlYXRlRWxlbWVudCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9