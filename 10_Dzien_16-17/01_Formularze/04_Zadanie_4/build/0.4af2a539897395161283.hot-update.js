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


function ToDoList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    toDoArray = _useState2[0],
    setArray = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    newItem = _useState4[0],
    setNewItem = _useState4[1];
  var handleClick = function handleClick(e) {
    e.preventDefault();
    var newToDoItem = {
      id: toDoArray.length,
      name: newItem,
      done: false
    };
    setArray([].concat(_toConsumableArray(toDoArray), [newToDoItem]));
    setNewItem("");
  };
  var handleToDoItem = function handleToDoItem(id) {
    toDoArray.forEach(function (el) {
      if (el.id === id) {
        el.done = !el.done;
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toDoList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Twoja lista zada\u0144"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "np. Zrobi\u0107 zakupy",
    value: newItem,
    onChange: function onChange(e) {
      return setNewItem(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn-add",
    onClick: handleClick
  }, "Dodaj")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, toDoArray.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      onClick: handleToDoItem(el.id),
      key: el.id,
      className: el.done ? "done" : ""
    }, el.name);
  })));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ToDoList, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e9732bc0d9697c80309d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDRfWmFkYW5pZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gVG9Eb0xpc3QoKSB7XG5cbiAgICBjb25zdCBbdG9Eb0FycmF5LCBzZXRBcnJheV0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbbmV3SXRlbSwgc2V0TmV3SXRlbV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgbmV3VG9Eb0l0ZW0gPSB7XG4gICAgICAgICAgICBpZDogdG9Eb0FycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIG5hbWU6IG5ld0l0ZW0sXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHNldEFycmF5KFsuLi50b0RvQXJyYXksIG5ld1RvRG9JdGVtXSlcbiAgICAgICAgc2V0TmV3SXRlbShcIlwiKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVRvRG9JdGVtID0gKGlkKSA9PiB7XG4gICAgICAgIHRvRG9BcnJheS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGlmIChlbC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBlbC5kb25lID0gIWVsLmRvbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvRG9MaXN0XCI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+VHdvamEgbGlzdGEgemFkYcWEPC9oMj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm5wLiBacm9iacSHIHpha3VweVwiIHZhbHVlPXtuZXdJdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0l0ZW0oZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tYWRkXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PkRvZGFqPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dG9Eb0FycmF5Lm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgb25DbGljaz17aGFuZGxlVG9Eb0l0ZW0oZWwuaWQpfSBrZXk9e2VsLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZWwuZG9uZSA/IFwiZG9uZVwiIDogXCJcIn0+e2VsLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxUb0RvTGlzdC8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTk3MzJiYzBkOTY5N2M4MDMwOWRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJUb0RvTGlzdCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRvRG9BcnJheSIsInNldEFycmF5IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJuZXdJdGVtIiwic2V0TmV3SXRlbSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV3VG9Eb0l0ZW0iLCJpZCIsImxlbmd0aCIsIm5hbWUiLCJkb25lIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaGFuZGxlVG9Eb0l0ZW0iLCJmb3JFYWNoIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uQ2xpY2siLCJtYXAiLCJrZXkiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=