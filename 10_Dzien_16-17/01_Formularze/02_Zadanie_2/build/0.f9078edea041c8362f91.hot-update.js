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
/******/ 	__webpack_require__.h = () => ("e309812ac1c9337d0c6d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mOTA3OGVkZWEwNDFjODM2MmY5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFDUDtBQUdyQyxTQUFTSSxJQUFJQSxDQUFBLEVBQUc7RUFFWixJQUFBQyxTQUFBLEdBQTBCSiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBSyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEvQkcsS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUN0QixJQUFBSSxVQUFBLEdBQWdDVCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBVSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFyQ0UsUUFBUSxHQUFBRCxVQUFBO0lBQUVFLFdBQVcsR0FBQUYsVUFBQTtFQUU1QixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJQyxDQUFDLEVBQUs7SUFDNUIsSUFBSVAsS0FBSyxDQUFDUSxNQUFNLElBQUksQ0FBQyxFQUFFO01BQ25CRCxDQUFDLENBQUNFLGNBQWMsQ0FBQyxDQUFDO01BQ2xCLE9BQU9DLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQztJQUN6RCxDQUFDLE1BQU0sSUFBSU4sUUFBUSxDQUFDSSxNQUFNLElBQUksQ0FBQyxFQUFFO01BQzdCRCxDQUFDLENBQUNFLGNBQWMsQ0FBQyxDQUFDO01BQ2xCLE9BQU9DLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQztJQUM1RCxDQUFDLE1BQU07TUFDSDtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUFBO0VBR1IsQ0FBQztFQUVELG9CQUNJbEIsMERBQUEsNEJBQ0lBLDBEQUFBLGdCQUFPLE9BQ0gsZUFBQUEsMERBQUE7SUFBT29CLElBQUksRUFBQyxNQUFNO0lBQUNDLEtBQUssRUFBRWIsS0FBTTtJQUFDYyxRQUFRLEVBQUUsU0FBQUEsU0FBQ1AsQ0FBQztNQUFBLE9BQUtOLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDUSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUN6RSxDQUFDLGVBQ1JyQiwwREFBQSxnQkFBTyxZQUNILGVBQUFBLDBEQUFBO0lBQU9vQixJQUFJLEVBQUMsTUFBTTtJQUFDQyxLQUFLLEVBQUVULFFBQVM7SUFBQ1UsUUFBUSxFQUFFLFNBQUFBLFNBQUNQLENBQUM7TUFBQSxPQUFLRixXQUFXLENBQUNFLENBQUMsQ0FBQ1EsTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLENBQUMsQ0FDL0UsQ0FBQyxlQUNSckIsMERBQUE7SUFBT29CLElBQUksRUFBQyxRQUFRO0lBQUNDLEtBQUssRUFBQyxTQUFTO0lBQUNHLE9BQU8sRUFBRVY7RUFBaUIsQ0FBQyxDQUM5RCxDQUFDO0FBRWY7QUFFQSxTQUFTVyxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT3pCLDBEQUFBLENBQUNJLElBQUksTUFBQyxDQUFDO0FBQ2xCO0FBRUEsSUFBTXNCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBRzNCLDREQUFVLENBQUN3QixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDOUIsMERBQUEsQ0FBQ3lCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDekRuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBGYWtlQVBJIGZyb20gXCIuL2RhdGEvZmFrZUFQSVwiO1xuXG5cbmZ1bmN0aW9uIEZvcm0oKSB7XG5cbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3QgaGFuZGxlVmFsaWRhdGlvbiA9IChlKSA9PiB7XG4gICAgICAgIGlmIChsb2dpbi5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJMb2dpbiBtdXN0IGJlIGF0IGxlYXN0IDMgbGV0dGVycyBsb25nXCIpXG4gICAgICAgIH0gZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoIDw9IDQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA1IGxldHRlcnMgbG9uZ1wiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFrZUFQSS5sb2dpbih7XG4gICAgICAgICAgICAvLyAgICAgdXNlcm5hbWU6IGxvZ2luLFxuICAgICAgICAgICAgLy8gICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICAgICAgLy8gfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gKFxuICAgICAgICAgICAgLy8gICAgICAgICA8PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGgxPkhlbGxvIHt1c2VyLm5hbWV9IHt1c2VyLnVzZXJuYW1lfTwvaDE+XG4gICAgICAgICAgICAvLyAgICAgICAgIDwvPlxuICAgICAgICAgICAgLy8gICAgIClcbiAgICAgICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vICAgICAgICAgPD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxoMz57ZXJyfTwvaDM+XG4gICAgICAgICAgICAvLyAgICAgICAgIDwvPlxuICAgICAgICAgICAgLy8gICAgIClcbiAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGxhYmVsPkxvZ2luXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xvZ2lufSBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5IYXPFgm9cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlphbG9ndWpcIiBvbkNsaWNrPXtoYW5kbGVWYWxpZGF0aW9ufS8+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPEZvcm0vPlxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUzMDk4MTJhYzFjOTMzN2QwYzZkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiRmFrZUFQSSIsIkZvcm0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsb2dpbiIsInNldExvZ2luIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlVmFsaWRhdGlvbiIsImUiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25DbGljayIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==