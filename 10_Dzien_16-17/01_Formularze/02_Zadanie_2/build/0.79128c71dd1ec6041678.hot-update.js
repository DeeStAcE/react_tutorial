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
        return alert("Wrong data");
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
/******/ 	__webpack_require__.h = () => ("8a887eaab0d258e38284")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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czYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgRmFrZUFQSSBmcm9tIFwiLi9kYXRhL2Zha2VBUElcIjtcblxuXG5mdW5jdGlvbiBGb3JtKCkge1xuXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IGhhbmRsZVZhbGlkYXRpb24gPSAoZSkgPT4ge1xuICAgICAgICBpZiAobG9naW4ubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiTG9naW4gbXVzdCBiZSBhdCBsZWFzdCAzIGxldHRlcnMgbG9uZ1wiKVxuICAgICAgICB9IGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8PSA0KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNSBsZXR0ZXJzIGxvbmdcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEZha2VBUEkubG9naW4oe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBsb2dpbixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgICAgIH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5IZWxsbyB7dXNlci5uYW1lfSB7dXNlci51c2VybmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydChcIldyb25nIGRhdGFcIilcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGxhYmVsPkxvZ2luXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xvZ2lufSBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5IYXPFgm9cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlphbG9ndWpcIiBvbkNsaWNrPXtoYW5kbGVWYWxpZGF0aW9ufS8+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPEZvcm0vPlxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhhODg3ZWFhYjBkMjU4ZTM4Mjg0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiRmFrZUFQSSIsIkZvcm0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsb2dpbiIsInNldExvZ2luIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlVmFsaWRhdGlvbiIsImUiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwidXNlcm5hbWUiLCJ0aGVuIiwidXNlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm5hbWUiLCJlcnIiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uQ2xpY2siLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=