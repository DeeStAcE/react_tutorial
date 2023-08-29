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


var Register = function Register() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      firstName: '',
      lastName: '',
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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
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
  var handleChange = function handleChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, name, value)));
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    validateForm();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Dane osobowe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Imi\u0119 i Nazwisko:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "firstName",
    value: formData.firstName,
    onChange: handleChange
  }), errors.firstName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.firstName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    value: formData.email,
    onChange: handleChange
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Has\u0142o:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "password",
    value: formData.password,
    onChange: handleChange
  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.password)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Powt\xF3rz has\u0142o:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "confirmPassword",
    value: formData.confirmPassword,
    onChange: handleChange
  }), errors.confirmPassword && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.confirmPassword)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "P\u0142e\u0107:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "gender",
    value: formData.gender,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Wybierz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "male"
  }, "M\u0119\u017Cczyzna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "female"
  }, "Kobieta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "other"
  }, "Inna")), errors.gender && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.gender))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Dane do wysy\u0142ki"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Adres:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "address",
    value: formData.address,
    onChange: handleChange
  }), errors.address && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Kod pocztowy:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "postalCode",
    value: formData.postalCode,
    onChange: handleChange
  }), errors.postalCode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.postalCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Miasto:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "city",
    value: formData.city,
    onChange: handleChange
  }), errors.city && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.city))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Zapisz")), summary && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, summary));
};
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
/******/ 	__webpack_require__.h = () => ("3219bfb4e4cf198ceafd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQ050QixPQUFPLGlCQUFJeEIsMERBQUEsY0FBTXdCLE9BQWEsQ0FDNUIsQ0FBQztBQUVWLENBQUM7QUFFRCxTQUFTd0IsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU9oRCwwREFBQSxDQUFDRyxRQUFRLE1BQUMsQ0FBQztBQUN0QjtBQUVBLElBQU04QyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdsRCw0REFBVSxDQUFDK0MsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3JELDBEQUFBLENBQUNnRCxHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3hMbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8xOS0yMS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0TmFtZTogJycsXG4gICAgbGFzdE5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgICBnZW5kZXI6ICcnLFxuICAgIGFkZHJlc3M6ICcnLFxuICAgIHBvc3RhbENvZGU6ICcnLFxuICAgIGNpdHk6ICcnLFxuICB9KTtcblxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbc3VtbWFyeSwgc2V0U3VtbWFyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHt9O1xuXG4gICAgaWYgKGZvcm1EYXRhLmZpcnN0TmFtZS5sZW5ndGggPCA1KSB7XG4gICAgICBuZXdFcnJvcnMuZmlyc3ROYW1lID0gJ0ltacSZIGkgTmF6d2lza28gbXVzaSBtaWXEhyBjbyBuYWptbmllaiA1IHpuYWvDs3cnO1xuICAgIH1cblxuICAgIGlmIChmb3JtRGF0YS5lbWFpbC5sZW5ndGggPCAzIHx8ICFmb3JtRGF0YS5lbWFpbC5pbmNsdWRlcygnQCcpKSB7XG4gICAgICBuZXdFcnJvcnMuZW1haWwgPSAnTmllcHJhd2lkxYJvd3kgYWRyZXMgZW1haWwnO1xuICAgIH1cblxuICAgIGlmIChmb3JtRGF0YS5wYXNzd29yZC5sZW5ndGggPCA0KSB7XG4gICAgICBuZXdFcnJvcnMucGFzc3dvcmQgPSAnSGFzxYJvIG11c2kgbWllxIcgY28gbmFqbW5pZWogNCB6bmFraSc7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCAhPT0gZm9ybURhdGEucGFzc3dvcmQpIHtcbiAgICAgIG5ld0Vycm9ycy5jb25maXJtUGFzc3dvcmQgPSAnSGFzxYJhIG5pZSBwYXN1asSFIGRvIHNpZWJpZSc7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5nZW5kZXIpIHtcbiAgICAgIG5ld0Vycm9ycy5nZW5kZXIgPSAnV3liaWVyeiBwxYJlxIcnO1xuICAgIH1cblxuICAgIGlmIChmb3JtRGF0YS5hZGRyZXNzLmxlbmd0aCA8IDMpIHtcbiAgICAgIG5ld0Vycm9ycy5hZGRyZXNzID0gJ0FkcmVzIG11c2kgbWllxIcgY28gbmFqbW5pZWogMyB6bmFraSc7XG4gICAgfVxuXG4gICAgY29uc3QgcG9zdGFsQ29kZVJlZ2V4ID0gL15cXGR7NX0oLVxcZHszfSk/JC87XG4gICAgaWYgKCFwb3N0YWxDb2RlUmVnZXgudGVzdChmb3JtRGF0YS5wb3N0YWxDb2RlKSkge1xuICAgICAgbmV3RXJyb3JzLnBvc3RhbENvZGUgPSAnTmllcHJhd2lkxYJvd3kga29kIHBvY3p0b3d5JztcbiAgICB9XG5cbiAgICBpZiAoZm9ybURhdGEuY2l0eS5sZW5ndGggPCAyKSB7XG4gICAgICBuZXdFcnJvcnMuY2l0eSA9ICdNaWFzdG8gbXVzaSBtaWXEhyBjbyBuYWptbmllaiAyIHpuYWtpJztcbiAgICB9XG5cbiAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcblxuICAgIGlmIChPYmplY3Qua2V5cyhuZXdFcnJvcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0U3VtbWFyeSgnUmVqZXN0cmFjamEgemFrb8WEY3pvbmEgcG9tecWbbG5pZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdW1tYXJ5KCcnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhbGlkYXRlRm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5SZWdpc3RlcjwvaDI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+RGFuZSBvc29ib3dlPC9oMz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPkltacSZIGkgTmF6d2lza286PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3ROYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtlcnJvcnMuZmlyc3ROYW1lICYmIDxwPntlcnJvcnMuZmlyc3ROYW1lfTwvcD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxwPntlcnJvcnMuZW1haWx9PC9wPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPkhhc8WCbzo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIDxwPntlcnJvcnMucGFzc3dvcmR9PC9wPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPlBvd3TDs3J6IGhhc8WCbzo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtlcnJvcnMuY29uZmlybVBhc3N3b3JkICYmIDxwPntlcnJvcnMuY29uZmlybVBhc3N3b3JkfTwvcD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5QxYJlxIc6PC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5nZW5kZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5XeWJpZXJ6PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYWxlXCI+TcSZxbxjenl6bmE8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZlbWFsZVwiPktvYmlldGE8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm90aGVyXCI+SW5uYTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICB7ZXJyb3JzLmdlbmRlciAmJiA8cD57ZXJyb3JzLmdlbmRlcn08L3A+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+RGFuZSBkbyB3eXN5xYJraTwvaDM+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5BZHJlczo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuYWRkcmVzc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLmFkZHJlc3MgJiYgPHA+e2Vycm9ycy5hZGRyZXNzfTwvcD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5Lb2QgcG9jenRvd3k6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwb3N0YWxDb2RlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBvc3RhbENvZGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Vycm9ycy5wb3N0YWxDb2RlICYmIDxwPntlcnJvcnMucG9zdGFsQ29kZX08L3A+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+TWlhc3RvOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5jaXR5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtlcnJvcnMuY2l0eSAmJiA8cD57ZXJyb3JzLmNpdHl9PC9wPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlphcGlzejwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAge3N1bW1hcnkgJiYgPGRpdj57c3VtbWFyeX08L2Rpdj59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxSZWdpc3Rlci8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzIxOWJmYjRlNGNmMTk4Y2VhZmRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJSZWdpc3RlciIsIl91c2VTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImdlbmRlciIsImFkZHJlc3MiLCJwb3N0YWxDb2RlIiwiY2l0eSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImVycm9ycyIsInNldEVycm9ycyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJ2YWxpZGF0ZUZvcm0iLCJuZXdFcnJvcnMiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInBvc3RhbENvZGVSZWdleCIsInRlc3QiLCJPYmplY3QiLCJrZXlzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJfZXZlbnQkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIm9uU3VibWl0IiwidHlwZSIsIm9uQ2hhbmdlIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9