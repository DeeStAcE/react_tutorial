"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    var updatedToDoArray = toDoArray.map(function (item) {
      return tem.id = id ? _objectSpread(_objectSpread({}, item), {}, {
        done: !item.done
      }) : item;
    });
    setArray(updatedToDoArray);
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
/******/ 	__webpack_require__.h = () => ("b3e580070bd9804fa666")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxHQUFHekMsNERBQVUsQ0FBQ3NDLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUM1QywwREFBQSxDQUFDdUMsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNwRG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTBfRHppZW5fMTYtMTcvMDFfRm9ybXVsYXJ6ZS8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBUb0RvTGlzdCgpIHtcblxuICAgIGNvbnN0IFt0b0RvQXJyYXksIHNldEFycmF5XSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtuZXdJdGVtLCBzZXROZXdJdGVtXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBuZXdUb0RvSXRlbSA9IHtcbiAgICAgICAgICAgIGlkOiB0b0RvQXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgbmFtZTogbmV3SXRlbSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgc2V0QXJyYXkoWy4uLnRvRG9BcnJheSwgbmV3VG9Eb0l0ZW1dKVxuICAgICAgICBzZXROZXdJdGVtKFwiXCIpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUb0RvQXJyYXkgPSB0b0RvQXJyYXkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRlbS5pZCA9IGlkID8gey4uLml0ZW0sIGRvbmU6ICFpdGVtLmRvbmV9IDogaXRlbVxuICAgICAgICB9KVxuICAgICAgICBzZXRBcnJheSh1cGRhdGVkVG9Eb0FycmF5KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9Eb0xpc3RcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMj5Ud29qYSBsaXN0YSB6YWRhxYQ8L2gyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwibnAuIFpyb2JpxIcgemFrdXB5XCIgdmFsdWU9e25ld0l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SXRlbShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1hZGRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+RG9kYWo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0b0RvQXJyYXkubWFwKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soZWwuaWQpfSBrZXk9e2VsLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZWwuZG9uZSA/IFwiZG9uZVwiIDogXCJcIn0+e2VsLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxUb0RvTGlzdC8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjNlNTgwMDcwYmQ5ODA0ZmE2NjZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJUb0RvTGlzdCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRvRG9BcnJheSIsInNldEFycmF5IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJuZXdJdGVtIiwic2V0TmV3SXRlbSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV3VG9Eb0l0ZW0iLCJpZCIsImxlbmd0aCIsIm5hbWUiLCJkb25lIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaGFuZGxlSXRlbUNsaWNrIiwidXBkYXRlZFRvRG9BcnJheSIsIm1hcCIsIml0ZW0iLCJ0ZW0iLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbkNsaWNrIiwiZWwiLCJrZXkiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=