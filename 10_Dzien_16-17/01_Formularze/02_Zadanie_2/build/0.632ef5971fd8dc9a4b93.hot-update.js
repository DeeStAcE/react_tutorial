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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    loggedInUser = _useState6[0],
    setLoggedInUser = _useState6[1];
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
        setLoggedInUser(user);
      })["catch"](function (err) {
        return alert(err);
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, loggedInUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Hello ", loggedInUser.name, " ", loggedInUser.username) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Login", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
  })));
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
/******/ 	__webpack_require__.h = () => ("6ba470c40e09f2ce64e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdyQyw0REFBVSxDQUFDa0MsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3hDLDBEQUFBLENBQUNtQyxHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3pEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgRmFrZUFQSSBmcm9tIFwiLi9kYXRhL2Zha2VBUElcIjtcblxuXG5mdW5jdGlvbiBGb3JtKCkge1xuXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbbG9nZ2VkSW5Vc2VyLCBzZXRMb2dnZWRJblVzZXJdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IGhhbmRsZVZhbGlkYXRpb24gPSAoZSkgPT4ge1xuICAgICAgICBpZiAobG9naW4ubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiTG9naW4gbXVzdCBiZSBhdCBsZWFzdCAzIGxldHRlcnMgbG9uZ1wiKVxuICAgICAgICB9IGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8PSA0KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNSBsZXR0ZXJzIGxvbmdcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEZha2VBUEkubG9naW4oe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBsb2dpbixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgICAgIH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TG9nZ2VkSW5Vc2VyKHVzZXIpXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydChlcnIpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2xvZ2dlZEluVXNlciA/IChcbiAgICAgICAgICAgICAgICA8aDI+SGVsbG8ge2xvZ2dlZEluVXNlci5uYW1lfSB7bG9nZ2VkSW5Vc2VyLnVzZXJuYW1lfTwvaDI+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsb2dpbn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2dpbihlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkhhc8WCb1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiWmFsb2d1alwiIG9uQ2xpY2s9e2hhbmRsZVZhbGlkYXRpb259Lz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiA8Rm9ybS8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmJhNDcwYzQwZTA5ZjJjZTY0ZTRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJGYWtlQVBJIiwiRm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxvZ2luIiwic2V0TG9naW4iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImxvZ2dlZEluVXNlciIsInNldExvZ2dlZEluVXNlciIsImhhbmRsZVZhbGlkYXRpb24iLCJlIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInVzZXJuYW1lIiwidGhlbiIsInVzZXIiLCJlcnIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJuYW1lIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbkNsaWNrIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9