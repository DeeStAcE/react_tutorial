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
/******/ 	__webpack_require__.h = () => ("2cea762de229ba5467de")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MTYtMTcvMDFfRm9ybXVsYXJ6ZS8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBTZWxlY3RPclR5cGUocHJvcHMpIHtcblxuICAgIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtsYXN0LCBzZXRMYXN0XSA9IHVzZVN0YXRlKFwiSW5uZVwiKVxuICAgIGNvbnN0IFtpc0xhc3RTZWxlY3RlZCwgc2V0SXNMYXN0U2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IGxhc3QpIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkSXRlbShcIlwiKVxuICAgICAgICAgICAgc2V0SXNMYXN0U2VsZWN0ZWQodHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkSXRlbShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIHNldElzTGFzdFNlbGVjdGVkKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKGxhc3QpXG4gICAgICAgIHNldElzTGFzdFNlbGVjdGVkKGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRJdGVtfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuaXRlbXMubWFwKGl0ZW0gPT4gPG9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtsYXN0fT57bGFzdH08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGRpdiBoaWRkZW49eyFpc0xhc3RTZWxlY3RlZH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xhc3R9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5abWllxYQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxTZWxlY3RPclR5cGUgaXRlbXM9e1tcIkJNV1wiLCBcIkphZ3VhclwiLCBcIlBvcnNjaGVcIl19Lz5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyY2VhNzYyZGUyMjliYTU0NjdkZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlNlbGVjdE9yVHlwZSIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsYXN0Iiwic2V0TGFzdCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXNMYXN0U2VsZWN0ZWQiLCJzZXRJc0xhc3RTZWxlY3RlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwib25DaGFuZ2UiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJoaWRkZW4iLCJ0eXBlIiwib25DbGljayIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==