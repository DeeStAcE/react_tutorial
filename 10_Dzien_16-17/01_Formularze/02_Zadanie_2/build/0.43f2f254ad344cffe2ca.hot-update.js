"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _data_fakeAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Form() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    login = _useState2[0],
    setLogin = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var handleValidation = function handleValidation(e) {
    if (login.length <= 2) {
      e.preventDefault();
      return alert("Login must be at least 3 letters long");
    } else if (password.length <= 4) {
      e.preventDefault();
      return alert("Password must be at least 5 letters long");
    } else {
      _data_fakeAPI__WEBPACK_IMPORTED_MODULE_2__["default"].login({
        username: login,
        password: password
      }).then(function (user) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hello ", user.name, " ", user.username));
      })["catch"](function (err) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, err));
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Login", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: login,
    onChange: function onChange(e) {
      return setLogin(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Has\u0142o", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    value: "Zaloguj",
    onClick: handleValidation
  }));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Form, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c09d45be4804ce00793")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7VUN6RG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTBfRHppZW5fMTYtMTcvMDFfRm9ybXVsYXJ6ZS8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEZha2VBUEkgZnJvbSBcIi4vZGF0YS9mYWtlQVBJXCI7XG5cblxuZnVuY3Rpb24gRm9ybSgpIHtcblxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCBoYW5kbGVWYWxpZGF0aW9uID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGxvZ2luLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkxvZ2luIG11c3QgYmUgYXQgbGVhc3QgMyBsZXR0ZXJzIGxvbmdcIilcbiAgICAgICAgfSBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPD0gNCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDUgbGV0dGVycyBsb25nXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBGYWtlQVBJLmxvZ2luKHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogbG9naW4sXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgICAgICB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGVsbG8ge3VzZXIubmFtZX0ge3VzZXIudXNlcm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntlcnJ9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8bGFiZWw+TG9naW5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bG9naW59IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9naW4oZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPkhhc8WCb1xuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiWmFsb2d1alwiIG9uQ2xpY2s9e2hhbmRsZVZhbGlkYXRpb259Lz5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiA8Rm9ybS8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWMwOWQ0NWJlNDgwNGNlMDA3OTNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJGYWtlQVBJIiwiRm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxvZ2luIiwic2V0TG9naW4iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVWYWxpZGF0aW9uIiwiZSIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJ1c2VybmFtZSIsInRoZW4iLCJ1c2VyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibmFtZSIsImVyciIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25DbGljayIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==