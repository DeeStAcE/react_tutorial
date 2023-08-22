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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    selectedItem = _useState2[0],
    setSelectedItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    last = _useState4[0],
    setLast = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLastSelected = _useState6[0],
    setIsLastSelected = _useState6[1];
  var handleChange = function handleChange(e) {
    if (e.target.value === last) {
      setIsLastSelected(true);
    }
  };
  var handleClick = function handleClick(e) {
    e.preventDefault();
    setIsLastSelected(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: handleChange
  }, props.items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: item
    }, item);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: lastCar
  }, lastCar)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    hidden: !isLastSelected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: last,
    onChange: function onChange(e) {
      return setLast(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "Zmie\u0144")));
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
/******/ 	__webpack_require__.h = () => ("b092f2522c2ce6cd2066")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNzI3ZjgzMTgyOTA2MWIwZWUyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFFekIsSUFBQUMsU0FBQSxHQUF3Q0osK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0NHLFlBQVksR0FBQUYsVUFBQTtJQUFFRyxlQUFlLEdBQUFILFVBQUE7RUFDcEMsSUFBQUksVUFBQSxHQUF3QlQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBN0JFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUE0Q2IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWMsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBcERFLGNBQWMsR0FBQUQsVUFBQTtJQUFFRSxpQkFBaUIsR0FBQUYsVUFBQTtFQUV4QyxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUtULElBQUksRUFBRTtNQUN6QkssaUJBQWlCLENBQUMsSUFBSSxDQUFDO0lBQzNCO0VBQ0osQ0FBQztFQUVELElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJSCxDQUFDLEVBQUs7SUFDdkJBLENBQUMsQ0FBQ0ksY0FBYyxDQUFDLENBQUM7SUFDbEJOLGlCQUFpQixDQUFDLEtBQUssQ0FBQztFQUM1QixDQUFDO0VBRUQsb0JBQ0lqQiwwREFBQSw0QkFDSUEsMERBQUE7SUFBUXlCLFFBQVEsRUFBRVA7RUFBYSxHQUMxQmQsS0FBSyxDQUFDc0IsS0FBSyxDQUFDQyxHQUFHLENBQUMsVUFBQUMsSUFBSTtJQUFBLG9CQUFJNUIsMERBQUE7TUFBUXFCLEtBQUssRUFBRU87SUFBSyxHQUFFQSxJQUFhLENBQUM7RUFBQSxFQUFDLGVBQzlENUIsMERBQUE7SUFBUXFCLEtBQUssRUFBRVE7RUFBUSxHQUFFQSxPQUFnQixDQUNyQyxDQUFDLGVBQ1Q3QiwwREFBQTtJQUFLOEIsTUFBTSxFQUFFLENBQUNkO0VBQWUsZ0JBQ3pCaEIsMERBQUE7SUFBTytCLElBQUksRUFBQyxNQUFNO0lBQUNWLEtBQUssRUFBRVQsSUFBSztJQUFDYSxRQUFRLEVBQUUsU0FBQUEsU0FBQ04sQ0FBQztNQUFBLE9BQUtOLE9BQU8sQ0FBQ00sQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUFDLGVBQzNFckIsMERBQUE7SUFBUWdDLE9BQU8sRUFBRVY7RUFBWSxHQUFDLFlBQWEsQ0FDMUMsQ0FDSCxDQUFDO0FBRWY7QUFFQSxTQUFTVyxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT2pDLDBEQUFBLENBQUNHLFlBQVk7SUFBQ3VCLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUztFQUFFLENBQUMsQ0FBQztBQUMvRDtBQUVBLElBQU1RLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR25DLDREQUFVLENBQUNnQyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDdEMsMERBQUEsQ0FBQ2lDLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDeENuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gU2VsZWN0T3JUeXBlKHByb3BzKSB7XG5cbiAgICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbbGFzdCwgc2V0TGFzdF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtpc0xhc3RTZWxlY3RlZCwgc2V0SXNMYXN0U2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IGxhc3QpIHtcbiAgICAgICAgICAgIHNldElzTGFzdFNlbGVjdGVkKHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRJc0xhc3RTZWxlY3RlZChmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAge3Byb3BzLml0ZW1zLm1hcChpdGVtID0+IDxvcHRpb24gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bGFzdENhcn0+e2xhc3RDYXJ9PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxkaXYgaGlkZGVuPXshaXNMYXN0U2VsZWN0ZWR9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsYXN0fSBvbkNoYW5nZT17KGUpID0+IHNldExhc3QoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+Wm1pZcWEPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiA8U2VsZWN0T3JUeXBlIGl0ZW1zPXtbXCJCTVdcIiwgXCJKYWd1YXJcIiwgXCJQb3JzY2hlXCJdfS8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjA5MmYyNTIyYzJjZTZjZDIwNjZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJTZWxlY3RPclR5cGUiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibGFzdCIsInNldExhc3QiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzTGFzdFNlbGVjdGVkIiwic2V0SXNMYXN0U2VsZWN0ZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwibGFzdENhciIsImhpZGRlbiIsInR5cGUiLCJvbkNsaWNrIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9