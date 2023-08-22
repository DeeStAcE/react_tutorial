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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.items[0]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedItem = _useState2[0],
    setSelectedItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Inne"),
    _useState4 = _slicedToArray(_useState3, 2),
    last = _useState4[0],
    setLast = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLastSelected = _useState6[0],
    setIsLastSelected = _useState6[1];
  var handleChange = function handleChange(e) {
    if (e.target.value === last) {
      setSelectedItem("");
      setIsLastSelected(true);
    } else {
      setSelectedItem(e.target.value);
      setIsLastSelected(false);
    }
  };
  var handleClick = function handleClick(e) {
    e.preventDefault();
    setSelectedItem(last);
    setIsLastSelected(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: selectedItem,
    onChange: handleChange
  }, props.items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: item
    }, item);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: last
  }, last)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ 	__webpack_require__.h = () => ("caf4aa0fbdf17a9c6799")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vZXM2LXJlYWN0Ly4vMTBfRHppZW5fMTYtMTcvMDFfRm9ybXVsYXJ6ZS8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBTZWxlY3RPclR5cGUocHJvcHMpIHtcblxuICAgIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSB1c2VTdGF0ZShwcm9wcy5pdGVtc1swXSlcbiAgICBjb25zdCBbbGFzdCwgc2V0TGFzdF0gPSB1c2VTdGF0ZShcIklubmVcIilcbiAgICBjb25zdCBbaXNMYXN0U2VsZWN0ZWQsIHNldElzTGFzdFNlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBsYXN0KSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZEl0ZW0oXCJcIilcbiAgICAgICAgICAgIHNldElzTGFzdFNlbGVjdGVkKHRydWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZEl0ZW0oZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICBzZXRJc0xhc3RTZWxlY3RlZChmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNldFNlbGVjdGVkSXRlbShsYXN0KVxuICAgICAgICBzZXRJc0xhc3RTZWxlY3RlZChmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkSXRlbX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAge3Byb3BzLml0ZW1zLm1hcChpdGVtID0+IDxvcHRpb24gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bGFzdH0+e2xhc3R9PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxkaXYgaGlkZGVuPXshaXNMYXN0U2VsZWN0ZWR9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsYXN0fSBvbkNoYW5nZT17KGUpID0+IHNldExhc3QoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+Wm1pZcWEPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiA8U2VsZWN0T3JUeXBlIGl0ZW1zPXtbXCJCTVdcIiwgXCJKYWd1YXJcIiwgXCJQb3JzY2hlXCJdfS8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2FmNGFhMGZiZGYxN2E5YzY3OTlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJTZWxlY3RPclR5cGUiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIml0ZW1zIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsYXN0Iiwic2V0TGFzdCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXNMYXN0U2VsZWN0ZWQiLCJzZXRJc0xhc3RTZWxlY3RlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwib25DaGFuZ2UiLCJtYXAiLCJpdGVtIiwiaGlkZGVuIiwidHlwZSIsIm9uQ2xpY2siLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=