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
    if (formData.name.length < 5) {
      newErrors.name = 'Imię i Nazwisko musi mieć co najmniej 5 znaków';
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Dane osobowe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Imi\u0119 i nazwisko:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "name",
    value: formData.name,
    onChange: handleChange
  })), errors.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    value: formData.email,
    onChange: handleChange
  })), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Has\u0142o:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "password",
    value: formData.password,
    onChange: handleChange
  })), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.password)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Powt\xF3rz has\u0142o:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "confirmPassword",
    value: formData.confirmPassword,
    onChange: handleChange
  })), errors.confirmPassword && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.confirmPassword)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "P\u0142e\u0107:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: formData.gender,
    name: "gender",
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Wybierz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "male"
  }, "M\u0119\u017Cczyzna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "female"
  }, "Kobieta"))), errors.gender && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.gender)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Adres:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "address",
    value: formData.address,
    onChange: handleChange
  })), errors.address && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Kod pocztowy:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "postalCode",
    value: formData.postalCode,
    onChange: handleChange
  })), errors.postalCode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.postalCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Miasto::", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "city",
    value: formData.city,
    onChange: handleChange
  })), errors.city && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.city)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleSubmit
  }, "Zapisz")), summary && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, summary));
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
/******/ 	__webpack_require__.h = () => ("7a98270a6e541342ec6b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUMsSUFBSSxHQUFHakQsNERBQVUsQ0FBQzhDLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNwRCwwREFBQSxDQUFDK0MsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNqSm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMTktMjEvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xuXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgICAgICAgZ2VuZGVyOiAnJyxcbiAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgIHBvc3RhbENvZGU6ICcnLFxuICAgICAgICBjaXR5OiAnJyxcbiAgICB9KVxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSlcbiAgICBjb25zdCBbc3VtbWFyeSwgc2V0U3VtbWFyeV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdFcnJvcnMgPSB7fTtcblxuICAgICAgICBpZiAoZm9ybURhdGEubmFtZS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMubmFtZSA9ICdJbWnEmSBpIE5hendpc2tvIG11c2kgbWllxIcgY28gbmFqbW5pZWogNSB6bmFrw7N3JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtRGF0YS5lbWFpbC5sZW5ndGggPCAzIHx8ICFmb3JtRGF0YS5lbWFpbC5pbmNsdWRlcygnQCcpKSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMuZW1haWwgPSAnTmllcHJhd2lkxYJvd3kgYWRyZXMgZW1haWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLnBhc3N3b3JkLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5wYXNzd29yZCA9ICdIYXPFgm8gbXVzaSBtaWXEhyBjbyBuYWptbmllaiA0IHpuYWtpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtRGF0YS5jb25maXJtUGFzc3dvcmQgIT09IGZvcm1EYXRhLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMuY29uZmlybVBhc3N3b3JkID0gJ0hhc8WCYSBuaWUgcGFzdWrEhSBkbyBzaWViaWUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmb3JtRGF0YS5nZW5kZXIpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5nZW5kZXIgPSAnV3liaWVyeiBwxYJlxIcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLmFkZHJlc3MubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgbmV3RXJyb3JzLmFkZHJlc3MgPSAnQWRyZXMgbXVzaSBtaWXEhyBjbyBuYWptbmllaiAzIHpuYWtpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBvc3RhbENvZGVSZWdleCA9IC9eXFxkezV9KC1cXGR7M30pPyQvO1xuICAgICAgICBpZiAoIXBvc3RhbENvZGVSZWdleC50ZXN0KGZvcm1EYXRhLnBvc3RhbENvZGUpKSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMucG9zdGFsQ29kZSA9ICdOaWVwcmF3aWTFgm93eSBrb2QgcG9jenRvd3knO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLmNpdHkubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgbmV3RXJyb3JzLmNpdHkgPSAnTWlhc3RvIG11c2kgbWllxIcgY28gbmFqbW5pZWogMiB6bmFraSc7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV3RXJyb3JzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNldFN1bW1hcnkoJ1JlamVzdHJhY2phIHpha2/FhGN6b25hIHBvbXnFm2xuaWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFN1bW1hcnkoJycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHZhbGlkYXRlRm9ybSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxoMz5EYW5lIG9zb2Jvd2U8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JbWnEmSBpIG5hendpc2tvOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17Zm9ybURhdGEubmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgPHA+e2Vycm9ycy5uYW1lfTwvcD59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxwPntlcnJvcnMuZW1haWx9PC9wPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SGFzxYJvOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIDxwPntlcnJvcnMucGFzc3dvcmR9PC9wPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UG93dMOzcnogaGFzxYJvOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIiB2YWx1ZT17Zm9ybURhdGEuY29uZmlybVBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuY29uZmlybVBhc3N3b3JkICYmIDxwPntlcnJvcnMuY29uZmlybVBhc3N3b3JkfTwvcD59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlDFgmXEhzpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2Zvcm1EYXRhLmdlbmRlcn0gbmFtZT1cImdlbmRlclwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5XeWJpZXJ6PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hbGVcIj5NxJnFvGN6eXpuYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZW1hbGVcIj5Lb2JpZXRhPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5nZW5kZXIgJiYgPHA+e2Vycm9ycy5nZW5kZXJ9PC9wPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRyZXM6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc1wiIHZhbHVlPXtmb3JtRGF0YS5hZGRyZXNzfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuYWRkcmVzcyAmJiA8cD57ZXJyb3JzLmFkZHJlc3N9PC9wPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+S29kIHBvY3p0b3d5OlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBvc3RhbENvZGVcIiB2YWx1ZT17Zm9ybURhdGEucG9zdGFsQ29kZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBvc3RhbENvZGUgJiYgPHA+e2Vycm9ycy5wb3N0YWxDb2RlfTwvcD59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1pYXN0bzo6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIHZhbHVlPXtmb3JtRGF0YS5jaXR5fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuY2l0eSAmJiA8cD57ZXJyb3JzLmNpdHl9PC9wPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+WmFwaXN6PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB7c3VtbWFyeSAmJiA8ZGl2PntzdW1tYXJ5fTwvZGl2Pn1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxSZWdpc3Rlci8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2E5ODI3MGE2ZTU0MTM0MmVjNmJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJSZWdpc3RlciIsIl91c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiZ2VuZGVyIiwiYWRkcmVzcyIsInBvc3RhbENvZGUiLCJjaXR5IiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsInZhbGlkYXRlRm9ybSIsIm5ld0Vycm9ycyIsImxlbmd0aCIsImluY2x1ZGVzIiwicG9zdGFsQ29kZVJlZ2V4IiwidGVzdCIsIk9iamVjdCIsImtleXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiX2UkdGFyZ2V0IiwidGFyZ2V0IiwidmFsdWUiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ0eXBlIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9