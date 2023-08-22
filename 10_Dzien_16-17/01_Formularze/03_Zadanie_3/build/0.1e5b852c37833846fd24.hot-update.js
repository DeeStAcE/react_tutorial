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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.items),
    _useState2 = _slicedToArray(_useState, 2),
    array = _useState2[0],
    setArray = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Inne"),
    _useState4 = _slicedToArray(_useState3, 2),
    last = _useState4[0],
    setLast = _useState4[1];
  var handleChange = function handleChange(e) {
    console.log(e.target);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: array[2],
    onClick: handleChange
  }, array.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: item
    }, item);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: last
  }, last)));
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
/******/ 	__webpack_require__.h = () => ("aa44e939f2a545233851")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZTViODUyYzM3ODMzODQ2ZmQyNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFFekIsSUFBQUMsU0FBQSxHQUEwQkosK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxLQUFLLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBeENJLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDdEIsSUFBQUksVUFBQSxHQUF3QlYsK0NBQVEsQ0FBQyxNQUFNLENBQUM7SUFBQVcsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBakNFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFFcEIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDO0VBQ3pCLENBQUM7RUFFRCxvQkFDSW5CLDBEQUFBLDRCQUNJQSwwREFBQTtJQUFRcUIsS0FBSyxFQUFFWixLQUFLLENBQUMsQ0FBQyxDQUFFO0lBQUNhLE9BQU8sRUFBRVA7RUFBYSxHQUMxQ04sS0FBSyxDQUFDYyxHQUFHLENBQUMsVUFBQUMsSUFBSTtJQUFBLG9CQUFJeEIsMERBQUE7TUFBUXFCLEtBQUssRUFBRUc7SUFBSyxHQUFFQSxJQUFhLENBQUM7RUFBQSxFQUFDLGVBQ3hEeEIsMERBQUE7SUFBUXFCLEtBQUssRUFBRVI7RUFBSyxHQUFFQSxJQUFhLENBQy9CLENBQ04sQ0FBQztBQUVmO0FBRUEsU0FBU1ksR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU96QiwwREFBQSxDQUFDRyxZQUFZO0lBQUNHLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUztFQUFFLENBQUMsQ0FBQztBQUMvRDtBQUVBLElBQU1vQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUczQiw0REFBVSxDQUFDd0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzlCLDBEQUFBLENBQUN5QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQzVCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFNlbGVjdE9yVHlwZShwcm9wcykge1xuXG4gICAgY29uc3QgW2FycmF5LCBzZXRBcnJheV0gPSB1c2VTdGF0ZShwcm9wcy5pdGVtcylcbiAgICBjb25zdCBbbGFzdCwgc2V0TGFzdF0gPSB1c2VTdGF0ZShcIklubmVcIilcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17YXJyYXlbMl19IG9uQ2xpY2s9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAge2FycmF5Lm1hcChpdGVtID0+IDxvcHRpb24gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bGFzdH0+e2xhc3R9PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiA8U2VsZWN0T3JUeXBlIGl0ZW1zPXtbXCJCTVdcIiwgXCJKYWd1YXJcIiwgXCJQb3JzY2hlXCJdfS8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWE0NGU5MzlmMmE1NDUyMzM4NTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJTZWxlY3RPclR5cGUiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIml0ZW1zIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYXJyYXkiLCJzZXRBcnJheSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibGFzdCIsInNldExhc3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJtYXAiLCJpdGVtIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9