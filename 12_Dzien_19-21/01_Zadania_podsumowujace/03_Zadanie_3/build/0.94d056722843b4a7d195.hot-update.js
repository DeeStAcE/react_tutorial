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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Dane osobowe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Imi\u0119 i nazwisko:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: formData.name,
    onChange: handleChange
  })), errors.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    value: formData.email,
    onChange: handleChange
  })), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Has\u0142o:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    value: formData.password,
    onChange: handleChange
  })), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.password)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Powt\xF3rz has\u0142o:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    value: formData.confirmPassword,
    onChange: handleChange
  })), errors.confirmPassword && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.confirmPassword)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "P\u0142e\u0107:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", null)), errors.gender && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.gender)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Adres:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: formData.address,
    onChange: handleChange
  })), errors.address && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Kod pocztowy:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: formData.postalCode,
    onChange: handleChange
  })), errors.postalCode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.postalCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Miasto::", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: formData.city,
    onChange: handleChange
  })), errors.city && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.city)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = () => ("d52a86e8648d4a83cfb1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1IsVUFBYyxDQUM5QyxDQUFDLGVBQ05YLDBEQUFBLDJCQUNJQSwwREFBQSxnQkFBTyxVQUNILGVBQUFBLDBEQUFBO0lBQU8yQyxJQUFJLEVBQUMsTUFBTTtJQUFDTixLQUFLLEVBQUV0QixRQUFRLENBQUNILElBQUs7SUFBQ2dDLFFBQVEsRUFBRVg7RUFBYSxDQUFDLENBQzlELENBQUMsRUFDUGQsTUFBTSxDQUFDUCxJQUFJLGlCQUFJWiwwREFBQSxZQUFJbUIsTUFBTSxDQUFDUCxJQUFRLENBQ2xDLENBQUMsZUFDTlosMERBQUE7SUFBUTZDLE9BQU8sRUFBRUw7RUFBYSxHQUFDLFFBQWMsQ0FDM0MsQ0FBQztBQUVmO0FBRUEsU0FBU00sR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU85QywwREFBQSxDQUFDRyxRQUFRLE1BQUMsQ0FBQztBQUN0QjtBQUVBLElBQU00QyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdoRCw0REFBVSxDQUFDNkMsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ25ELDBEQUFBLENBQUM4QyxHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQzVJbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8xOS0yMS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XG5cbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICcnLFxuICAgICAgICBnZW5kZXI6ICcnLFxuICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgcG9zdGFsQ29kZTogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgIH0pXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KVxuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0Vycm9ycyA9IHt9O1xuXG4gICAgICAgIGlmIChmb3JtRGF0YS5uYW1lLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5uYW1lID0gJ0ltacSZIGkgTmF6d2lza28gbXVzaSBtaWXEhyBjbyBuYWptbmllaiA1IHpuYWvDs3cnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLmVtYWlsLmxlbmd0aCA8IDMgfHwgIWZvcm1EYXRhLmVtYWlsLmluY2x1ZGVzKCdAJykpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5lbWFpbCA9ICdOaWVwcmF3aWTFgm93eSBhZHJlcyBlbWFpbCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9ybURhdGEucGFzc3dvcmQubGVuZ3RoIDwgNCkge1xuICAgICAgICAgICAgbmV3RXJyb3JzLnBhc3N3b3JkID0gJ0hhc8WCbyBtdXNpIG1pZcSHIGNvIG5ham1uaWVqIDQgem5ha2knO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCAhPT0gZm9ybURhdGEucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5jb25maXJtUGFzc3dvcmQgPSAnSGFzxYJhIG5pZSBwYXN1asSFIGRvIHNpZWJpZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZvcm1EYXRhLmdlbmRlcikge1xuICAgICAgICAgICAgbmV3RXJyb3JzLmdlbmRlciA9ICdXeWJpZXJ6IHDFgmXEhyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9ybURhdGEuYWRkcmVzcy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMuYWRkcmVzcyA9ICdBZHJlcyBtdXNpIG1pZcSHIGNvIG5ham1uaWVqIDMgem5ha2knO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG9zdGFsQ29kZVJlZ2V4ID0gL15cXGR7NX0oLVxcZHszfSk/JC87XG4gICAgICAgIGlmICghcG9zdGFsQ29kZVJlZ2V4LnRlc3QoZm9ybURhdGEucG9zdGFsQ29kZSkpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5wb3N0YWxDb2RlID0gJ05pZXByYXdpZMWCb3d5IGtvZCBwb2N6dG93eSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9ybURhdGEuY2l0eS5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMuY2l0eSA9ICdNaWFzdG8gbXVzaSBtaWXEhyBjbyBuYWptbmllaiAyIHpuYWtpJztcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdFcnJvcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2V0U3VtbWFyeSgnUmVqZXN0cmFjamEgemFrb8WEY3pvbmEgcG9tecWbbG5pZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U3VtbWFyeSgnJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB2YWxpZGF0ZUZvcm0oKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGgzPkRhbmUgb3NvYm93ZTwvaDM+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbWnEmSBpIG5hendpc2tvOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybURhdGEubmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIDxwPntlcnJvcnMubmFtZX08L3A+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiA8cD57ZXJyb3JzLmVtYWlsfTwvcD59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkhhc8WCbzpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiA8cD57ZXJyb3JzLnBhc3N3b3JkfTwvcD59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlBvd3TDs3J6IGhhc8WCbzpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtmb3JtRGF0YS5jb25maXJtUGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMuY29uZmlybVBhc3N3b3JkICYmIDxwPntlcnJvcnMuY29uZmlybVBhc3N3b3JkfTwvcD59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlDFgmXEhzpcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMuZ2VuZGVyICYmIDxwPntlcnJvcnMuZ2VuZGVyfTwvcD59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkFkcmVzOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybURhdGEuYWRkcmVzc30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5hZGRyZXNzICYmIDxwPntlcnJvcnMuYWRkcmVzc308L3A+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5Lb2QgcG9jenRvd3k6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5wb3N0YWxDb2RlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnBvc3RhbENvZGUgJiYgPHA+e2Vycm9ycy5wb3N0YWxDb2RlfTwvcD59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk1pYXN0bzo6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5jaXR5fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmNpdHkgJiYgPHA+e2Vycm9ycy5jaXR5fTwvcD59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5aYXBpc3o8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiA8UmVnaXN0ZXIvPlxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ1MmE4NmU4NjQ4ZDRhODNjZmIxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiUmVnaXN0ZXIiLCJfdXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImdlbmRlciIsImFkZHJlc3MiLCJwb3N0YWxDb2RlIiwiY2l0eSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImVycm9ycyIsInNldEVycm9ycyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJ2YWxpZGF0ZUZvcm0iLCJuZXdFcnJvcnMiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInBvc3RhbENvZGVSZWdleCIsInRlc3QiLCJPYmplY3QiLCJrZXlzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIl9lJHRhcmdldCIsInRhcmdldCIsInZhbHVlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=