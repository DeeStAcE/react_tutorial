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
  })), errors.confirmPassword && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.confirmPassword)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "P\u0142e\u0107:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: formData.gender,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Wybierz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "male"
  }, "M\u0119\u017Cczyzna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "female"
  }, "Kobieta"))), errors.gender && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, errors.gender)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Adres:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
/******/ 	__webpack_require__.h = () => ("90245412c0979b7da735")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LTIxLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBSZWdpc3RlcigpIHtcblxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICBwb3N0YWxDb2RlOiAnJyxcbiAgICAgICAgY2l0eTogJycsXG4gICAgfSlcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pXG4gICAgY29uc3QgW3N1bW1hcnksIHNldFN1bW1hcnldID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RXJyb3JzID0ge307XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLm5hbWUubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgbmV3RXJyb3JzLm5hbWUgPSAnSW1pxJkgaSBOYXp3aXNrbyBtdXNpIG1pZcSHIGNvIG5ham1uaWVqIDUgem5ha8Ozdyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9ybURhdGEuZW1haWwubGVuZ3RoIDwgMyB8fCAhZm9ybURhdGEuZW1haWwuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgICAgICAgbmV3RXJyb3JzLmVtYWlsID0gJ05pZXByYXdpZMWCb3d5IGFkcmVzIGVtYWlsJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtRGF0YS5wYXNzd29yZC5sZW5ndGggPCA0KSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMucGFzc3dvcmQgPSAnSGFzxYJvIG11c2kgbWllxIcgY28gbmFqbW5pZWogNCB6bmFraSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9ybURhdGEuY29uZmlybVBhc3N3b3JkICE9PSBmb3JtRGF0YS5wYXNzd29yZCkge1xuICAgICAgICAgICAgbmV3RXJyb3JzLmNvbmZpcm1QYXNzd29yZCA9ICdIYXPFgmEgbmllIHBhc3VqxIUgZG8gc2llYmllJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZm9ybURhdGEuZ2VuZGVyKSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMuZ2VuZGVyID0gJ1d5YmllcnogcMWCZcSHJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtRGF0YS5hZGRyZXNzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5hZGRyZXNzID0gJ0FkcmVzIG11c2kgbWllxIcgY28gbmFqbW5pZWogMyB6bmFraSc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwb3N0YWxDb2RlUmVnZXggPSAvXlxcZHs1fSgtXFxkezN9KT8kLztcbiAgICAgICAgaWYgKCFwb3N0YWxDb2RlUmVnZXgudGVzdChmb3JtRGF0YS5wb3N0YWxDb2RlKSkge1xuICAgICAgICAgICAgbmV3RXJyb3JzLnBvc3RhbENvZGUgPSAnTmllcHJhd2lkxYJvd3kga29kIHBvY3p0b3d5JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JtRGF0YS5jaXR5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5jaXR5ID0gJ01pYXN0byBtdXNpIG1pZcSHIGNvIG5ham1uaWVqIDIgem5ha2knO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0RXJyb3JzKG5ld0Vycm9ycyk7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG5ld0Vycm9ycykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzZXRTdW1tYXJ5KCdSZWplc3RyYWNqYSB6YWtvxYRjem9uYSBwb215xZtsbmllJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTdW1tYXJ5KCcnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB2YWxpZGF0ZUZvcm0oKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aDM+RGFuZSBvc29ib3dlPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SW1pxJkgaSBuYXp3aXNrbzpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIDxwPntlcnJvcnMubmFtZX08L3A+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17Zm9ybURhdGEuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiA8cD57ZXJyb3JzLmVtYWlsfTwvcD59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkhhc8WCbzpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiA8cD57ZXJyb3JzLnBhc3N3b3JkfTwvcD59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBvd3TDs3J6IGhhc8WCbzpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17Zm9ybURhdGEuY29uZmlybVBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuY29uZmlybVBhc3N3b3JkICYmIDxwPntlcnJvcnMuY29uZmlybVBhc3N3b3JkfTwvcD59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlDFgmXEhzpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2Zvcm1EYXRhLmdlbmRlcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPld5Ymllcno8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFsZVwiPk3EmcW8Y3p5em5hPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZlbWFsZVwiPktvYmlldGE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmdlbmRlciAmJiA8cD57ZXJyb3JzLmdlbmRlcn08L3A+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZHJlczpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5hZGRyZXNzfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuYWRkcmVzcyAmJiA8cD57ZXJyb3JzLmFkZHJlc3N9PC9wPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+S29kIHBvY3p0b3d5OlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zvcm1EYXRhLnBvc3RhbENvZGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5wb3N0YWxDb2RlICYmIDxwPntlcnJvcnMucG9zdGFsQ29kZX08L3A+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NaWFzdG86OlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Zvcm1EYXRhLmNpdHl9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5jaXR5ICYmIDxwPntlcnJvcnMuY2l0eX08L3A+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5aYXBpc3o8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIHtzdW1tYXJ5ICYmIDxkaXY+e3N1bW1hcnl9PC9kaXY+fVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFJlZ2lzdGVyLz5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MDI0NTQxMmMwOTc5YjdkYTczNVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlJlZ2lzdGVyIiwiX3VzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJnZW5kZXIiLCJhZGRyZXNzIiwicG9zdGFsQ29kZSIsImNpdHkiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInN1bW1hcnkiLCJzZXRTdW1tYXJ5IiwidmFsaWRhdGVGb3JtIiwibmV3RXJyb3JzIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJwb3N0YWxDb2RlUmVnZXgiLCJ0ZXN0IiwiT2JqZWN0Iiwia2V5cyIsImhhbmRsZUNoYW5nZSIsImUiLCJfZSR0YXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInR5cGUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=