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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Register() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      address: '',
      postalCode: '',
      city: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    summary = _useState6[0],
    setSummary = _useState6[1];
  var validateForm = function validateForm() {
    var newErrors = {};
    if (formData.firstName.length < 5) {
      newErrors.firstName = 'Imię i Nazwisko musi mieć co najmniej 5 znaków';
    }
    if (formData.email.length < 3 || !formData.email.includes('@')) {
      newErrors.email = 'Nieprawidłowy adres email';
    }
    if (formData.password.length < 4) {
      newErrors.password = 'Hasło musi mieć co najmniej 4 znaki';
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Hasła nie pasują do siebie';
    }
    if (!formData.gender) {
      newErrors.gender = 'Wybierz płeć';
    }
    if (formData.address.length < 3) {
      newErrors.address = 'Adres musi mieć co najmniej 3 znaki';
    }
    var postalCodeRegex = /^\d{5}(-\d{3})?$/;
    if (!postalCodeRegex.test(formData.postalCode)) {
      newErrors.postalCode = 'Nieprawidłowy kod pocztowy';
    }
    if (formData.city.length < 2) {
      newErrors.city = 'Miasto musi mieć co najmniej 2 znaki';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSummary('Rejestracja zakończona pomyślnie');
    } else {
      setSummary('');
    }
  };
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, name, value)));
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    validateForm();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Dane osobowe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Imi\u0119 i nazwisko:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: formData.name,
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    value: formData.email,
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Has\u0142o:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    value: formData.password,
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Powt\xF3rz has\u0142o:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    value: formData.confirmPassword,
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "P\u0142e\u0107:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Adres:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: formData.address,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Kod pocztowy:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: formData.postalCode,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Miasto::", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: formData.city,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleSubmit
  }, "Zapisz"));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Register, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4fa4f1f8184351e810be")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li8xMl9Eemllbl8xOS0yMS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XG5cbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICcnLFxuICAgICAgICBnZW5kZXI6ICcnLFxuICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgcG9zdGFsQ29kZTogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgIH0pXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KVxuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0Vycm9ycyA9IHt9O1xuXG4gICAgICAgIGlmIChmb3JtRGF0YS5maXJzdE5hbWUubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgbmV3RXJyb3JzLmZpcnN0TmFtZSA9ICdJbWnEmSBpIE5hendpc2tvIG11c2kgbWllxIcgY28gbmFqbW5pZWogNSB6bmFrw7N3JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtRGF0YS5lbWFpbC5sZW5ndGggPCAzIHx8ICFmb3JtRGF0YS5lbWFpbC5pbmNsdWRlcygnQCcpKSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMuZW1haWwgPSAnTmllcHJhd2lkxYJvd3kgYWRyZXMgZW1haWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLnBhc3N3b3JkLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5wYXNzd29yZCA9ICdIYXPFgm8gbXVzaSBtaWXEhyBjbyBuYWptbmllaiA0IHpuYWtpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtRGF0YS5jb25maXJtUGFzc3dvcmQgIT09IGZvcm1EYXRhLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMuY29uZmlybVBhc3N3b3JkID0gJ0hhc8WCYSBuaWUgcGFzdWrEhSBkbyBzaWViaWUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmb3JtRGF0YS5nZW5kZXIpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5nZW5kZXIgPSAnV3liaWVyeiBwxYJlxIcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLmFkZHJlc3MubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgbmV3RXJyb3JzLmFkZHJlc3MgPSAnQWRyZXMgbXVzaSBtaWXEhyBjbyBuYWptbmllaiAzIHpuYWtpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBvc3RhbENvZGVSZWdleCA9IC9eXFxkezV9KC1cXGR7M30pPyQvO1xuICAgICAgICBpZiAoIXBvc3RhbENvZGVSZWdleC50ZXN0KGZvcm1EYXRhLnBvc3RhbENvZGUpKSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMucG9zdGFsQ29kZSA9ICdOaWVwcmF3aWTFgm93eSBrb2QgcG9jenRvd3knO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLmNpdHkubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgbmV3RXJyb3JzLmNpdHkgPSAnTWlhc3RvIG11c2kgbWllxIcgY28gbmFqbW5pZWogMiB6bmFraSc7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV3RXJyb3JzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNldFN1bW1hcnkoJ1JlamVzdHJhY2phIHpha2/FhGN6b25hIHBvbXnFm2xuaWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFN1bW1hcnkoJycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdmFsaWRhdGVGb3JtKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxoMz5EYW5lIG9zb2Jvd2U8L2gzPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SW1pxJkgaSBuYXp3aXNrbzpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkhhc8WCbzpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlBvd3TDs3J6IGhhc8WCbzpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtmb3JtRGF0YS5jb25maXJtUGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bGFiZWw+UMWCZcSHOlxuICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+QWRyZXM6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zvcm1EYXRhLmFkZHJlc3N9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+S29kIHBvY3p0b3d5OlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5wb3N0YWxDb2RlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPk1pYXN0bzo6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zvcm1EYXRhLmNpdHl9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+WmFwaXN6PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFJlZ2lzdGVyLz5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ZmE0ZjFmODE4NDM1MWU4MTBiZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlJlZ2lzdGVyIiwiX3VzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJnZW5kZXIiLCJhZGRyZXNzIiwicG9zdGFsQ29kZSIsImNpdHkiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInN1bW1hcnkiLCJzZXRTdW1tYXJ5IiwidmFsaWRhdGVGb3JtIiwibmV3RXJyb3JzIiwiZmlyc3ROYW1lIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJwb3N0YWxDb2RlUmVnZXgiLCJ0ZXN0IiwiT2JqZWN0Iiwia2V5cyIsImhhbmRsZUNoYW5nZSIsImUiLCJfZSR0YXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9