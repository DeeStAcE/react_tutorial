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
  var handleItemClick = function handleItemClick(id) {
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
      onClick: function onClick() {
        return handleItemClick(el.id);
      },
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
/******/ 	__webpack_require__.h = () => ("beb4d829432f18a9e027")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDOzs7Ozs7OztVQ3JEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFRvRG9MaXN0KCkge1xuXG4gICAgY29uc3QgW3RvRG9BcnJheSwgc2V0QXJyYXldID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW25ld0l0ZW0sIHNldE5ld0l0ZW1dID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IG5ld1RvRG9JdGVtID0ge1xuICAgICAgICAgICAgaWQ6IHRvRG9BcnJheS5sZW5ndGgsXG4gICAgICAgICAgICBuYW1lOiBuZXdJdGVtLFxuICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBzZXRBcnJheShbLi4udG9Eb0FycmF5LCBuZXdUb0RvSXRlbV0pXG4gICAgICAgIHNldE5ld0l0ZW0oXCJcIilcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPSAoaWQpID0+IHtcbiAgICAgICAgdG9Eb0FycmF5LmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgaWYgKGVsLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGVsLmRvbmUgPSAhZWwuZG9uZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9Eb0xpc3RcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMj5Ud29qYSBsaXN0YSB6YWRhxYQ8L2gyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwibnAuIFpyb2JpxIcgemFrdXB5XCIgdmFsdWU9e25ld0l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SXRlbShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1hZGRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+RG9kYWo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0b0RvQXJyYXkubWFwKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soZWwuaWQpfSBrZXk9e2VsLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZWwuZG9uZSA/IFwiZG9uZVwiIDogXCJcIn0+e2VsLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxUb0RvTGlzdC8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmViNGQ4Mjk0MzJmMThhOWUwMjdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJUb0RvTGlzdCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRvRG9BcnJheSIsInNldEFycmF5IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJuZXdJdGVtIiwic2V0TmV3SXRlbSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV3VG9Eb0l0ZW0iLCJpZCIsImxlbmd0aCIsIm5hbWUiLCJkb25lIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaGFuZGxlSXRlbUNsaWNrIiwiZm9yRWFjaCIsImVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbkNsaWNrIiwibWFwIiwia2V5IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9