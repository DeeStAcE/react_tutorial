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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "dupa");
      // FakeAPI.login({
      //     username: login,
      //     password: password
      // }).then(user => {
      //     return (
      //         <>
      //             <h1>Hello {user.name} {user.username}</h1>
      //         </>
      //     )
      // }).catch(err => {
      //     return (
      //         <>
      //             <h3>{err}</h3>
      //         </>
      //     )
      // })
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
/******/ 	__webpack_require__.h = () => ("f9078edea041c8362f91")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMDc5NzM4OGJlYzcxOGU4NWYxMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFDUDtBQUdyQyxTQUFTSSxJQUFJQSxDQUFBLEVBQUc7RUFFWixJQUFBQyxTQUFBLEdBQTBCSiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBSyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEvQkcsS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUN0QixJQUFBSSxVQUFBLEdBQWdDVCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBVSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFyQ0UsUUFBUSxHQUFBRCxVQUFBO0lBQUVFLFdBQVcsR0FBQUYsVUFBQTtFQUU1QixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJQyxDQUFDLEVBQUs7SUFDNUIsSUFBSVAsS0FBSyxDQUFDUSxNQUFNLElBQUksQ0FBQyxFQUFFO01BQ25CRCxDQUFDLENBQUNFLGNBQWMsQ0FBQyxDQUFDO01BQ2xCLE9BQU9DLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQztJQUN6RCxDQUFDLE1BQU0sSUFBSU4sUUFBUSxDQUFDSSxNQUFNLElBQUksQ0FBQyxFQUFFO01BQzdCRCxDQUFDLENBQUNFLGNBQWMsQ0FBQyxDQUFDO01BQ2xCLE9BQU9DLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQztJQUM1RCxDQUFDLE1BQU07TUFDSCxvQkFBT2xCLDBEQUFBLGFBQUksTUFBUSxDQUFDO01BQ3BCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBRUo7RUFDSixDQUFDOztFQUVELG9CQUNJQSwwREFBQSw0QkFDSUEsMERBQUEsZ0JBQU8sT0FDSCxlQUFBQSwwREFBQTtJQUFPb0IsSUFBSSxFQUFDLE1BQU07SUFBQ0MsS0FBSyxFQUFFYixLQUFNO0lBQUNjLFFBQVEsRUFBRSxTQUFBQSxTQUFDUCxDQUFDO01BQUEsT0FBS04sUUFBUSxDQUFDTSxDQUFDLENBQUNRLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQ3pFLENBQUMsZUFDUnJCLDBEQUFBLGdCQUFPLFlBQ0gsZUFBQUEsMERBQUE7SUFBT29CLElBQUksRUFBQyxNQUFNO0lBQUNDLEtBQUssRUFBRVQsUUFBUztJQUFDVSxRQUFRLEVBQUUsU0FBQUEsU0FBQ1AsQ0FBQztNQUFBLE9BQUtGLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDUSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUMvRSxDQUFDLGVBQ1JyQiwwREFBQTtJQUFPb0IsSUFBSSxFQUFDLFFBQVE7SUFBQ0MsS0FBSyxFQUFDLFNBQVM7SUFBQ0csT0FBTyxFQUFFVjtFQUFpQixDQUFDLENBQzlELENBQUM7QUFFZjtBQUVBLFNBQVNXLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUFPekIsMERBQUEsQ0FBQ0ksSUFBSSxNQUFDLENBQUM7QUFDbEI7QUFFQSxJQUFNc0IsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHM0IsNERBQVUsQ0FBQ3dCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUM5QiwwREFBQSxDQUFDeUIsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUMxRG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTBfRHppZW5fMTYtMTcvMDFfRm9ybXVsYXJ6ZS8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEZha2VBUEkgZnJvbSBcIi4vZGF0YS9mYWtlQVBJXCI7XG5cblxuZnVuY3Rpb24gRm9ybSgpIHtcblxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCBoYW5kbGVWYWxpZGF0aW9uID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGxvZ2luLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkxvZ2luIG11c3QgYmUgYXQgbGVhc3QgMyBsZXR0ZXJzIGxvbmdcIilcbiAgICAgICAgfSBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPD0gNCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDUgbGV0dGVycyBsb25nXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gPGgxPmR1cGE8L2gxPlxuICAgICAgICAgICAgLy8gRmFrZUFQSS5sb2dpbih7XG4gICAgICAgICAgICAvLyAgICAgdXNlcm5hbWU6IGxvZ2luLFxuICAgICAgICAgICAgLy8gICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICAgICAgLy8gfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gKFxuICAgICAgICAgICAgLy8gICAgICAgICA8PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGgxPkhlbGxvIHt1c2VyLm5hbWV9IHt1c2VyLnVzZXJuYW1lfTwvaDE+XG4gICAgICAgICAgICAvLyAgICAgICAgIDwvPlxuICAgICAgICAgICAgLy8gICAgIClcbiAgICAgICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vICAgICAgICAgPD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxoMz57ZXJyfTwvaDM+XG4gICAgICAgICAgICAvLyAgICAgICAgIDwvPlxuICAgICAgICAgICAgLy8gICAgIClcbiAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGxhYmVsPkxvZ2luXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xvZ2lufSBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5IYXPFgm9cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlphbG9ndWpcIiBvbkNsaWNrPXtoYW5kbGVWYWxpZGF0aW9ufS8+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPEZvcm0vPlxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY5MDc4ZWRlYTA0MWM4MzYyZjkxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiRmFrZUFQSSIsIkZvcm0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsb2dpbiIsInNldExvZ2luIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlVmFsaWRhdGlvbiIsImUiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25DbGljayIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==