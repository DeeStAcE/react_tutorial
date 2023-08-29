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
  }))), "div", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "P\u0142e\u0107:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Adres:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
/******/ 	__webpack_require__.h = () => ("8348591f2ac718a87d85")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ZmE0ZjFmODE4NDM1MWU4MTBiZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxRQUFRQSxDQUFBLEVBQUc7RUFFaEIsSUFBQUMsU0FBQSxHQUFnQ0gsK0NBQVEsQ0FBQztNQUNyQ0ksSUFBSSxFQUFFLEVBQUU7TUFDUkMsS0FBSyxFQUFFLEVBQUU7TUFDVEMsUUFBUSxFQUFFLEVBQUU7TUFDWkMsZUFBZSxFQUFFLEVBQUU7TUFDbkJDLE1BQU0sRUFBRSxFQUFFO01BQ1ZDLE9BQU8sRUFBRSxFQUFFO01BQ1hDLFVBQVUsRUFBRSxFQUFFO01BQ2RDLElBQUksRUFBRTtJQUNWLENBQUMsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQVYsU0FBQTtJQVRLVyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBVTVCLElBQUFJLFVBQUEsR0FBNEJoQiwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUFpQixVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFqQ0UsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUN4QixJQUFBRyxVQUFBLEdBQThCcEIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXFCLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQW5DRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBRTFCLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7SUFDdkIsSUFBTUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUVwQixJQUFJWCxRQUFRLENBQUNZLFNBQVMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUMvQkYsU0FBUyxDQUFDQyxTQUFTLEdBQUcsZ0RBQWdEO0lBQzFFO0lBRUEsSUFBSVosUUFBUSxDQUFDVCxLQUFLLENBQUNzQixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUNiLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDdUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQzVESCxTQUFTLENBQUNwQixLQUFLLEdBQUcsMkJBQTJCO0lBQ2pEO0lBRUEsSUFBSVMsUUFBUSxDQUFDUixRQUFRLENBQUNxQixNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzlCRixTQUFTLENBQUNuQixRQUFRLEdBQUcscUNBQXFDO0lBQzlEO0lBRUEsSUFBSVEsUUFBUSxDQUFDUCxlQUFlLEtBQUtPLFFBQVEsQ0FBQ1IsUUFBUSxFQUFFO01BQ2hEbUIsU0FBUyxDQUFDbEIsZUFBZSxHQUFHLDRCQUE0QjtJQUM1RDtJQUVBLElBQUksQ0FBQ08sUUFBUSxDQUFDTixNQUFNLEVBQUU7TUFDbEJpQixTQUFTLENBQUNqQixNQUFNLEdBQUcsY0FBYztJQUNyQztJQUVBLElBQUlNLFFBQVEsQ0FBQ0wsT0FBTyxDQUFDa0IsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUM3QkYsU0FBUyxDQUFDaEIsT0FBTyxHQUFHLHFDQUFxQztJQUM3RDtJQUVBLElBQU1vQixlQUFlLEdBQUcsa0JBQWtCO0lBQzFDLElBQUksQ0FBQ0EsZUFBZSxDQUFDQyxJQUFJLENBQUNoQixRQUFRLENBQUNKLFVBQVUsQ0FBQyxFQUFFO01BQzVDZSxTQUFTLENBQUNmLFVBQVUsR0FBRyw0QkFBNEI7SUFDdkQ7SUFFQSxJQUFJSSxRQUFRLENBQUNILElBQUksQ0FBQ2dCLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDMUJGLFNBQVMsQ0FBQ2QsSUFBSSxHQUFHLHNDQUFzQztJQUMzRDtJQUVBUSxTQUFTLENBQUNNLFNBQVMsQ0FBQztJQUVwQixJQUFJTSxNQUFNLENBQUNDLElBQUksQ0FBQ1AsU0FBUyxDQUFDLENBQUNFLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDckNKLFVBQVUsQ0FBQyxrQ0FBa0MsQ0FBQztJQUNsRCxDQUFDLE1BQU07TUFDSEEsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNsQjtFQUNKLENBQUM7RUFFRCxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCLElBQUFDLFNBQUEsR0FBc0JELENBQUMsQ0FBQ0UsTUFBTTtNQUF2QmhDLElBQUksR0FBQStCLFNBQUEsQ0FBSi9CLElBQUk7TUFBRWlDLEtBQUssR0FBQUYsU0FBQSxDQUFMRSxLQUFLO0lBQ2xCdEIsV0FBVyxDQUFBdUIsYUFBQSxDQUFBQSxhQUFBLEtBQ0p4QixRQUFRLE9BQUF5QixlQUFBLEtBQ1ZuQyxJQUFJLEVBQUdpQyxLQUFLLEVBQ2hCLENBQUM7RUFDTixDQUFDO0VBRUQsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlOLENBQUMsRUFBSztJQUN4QkEsQ0FBQyxDQUFDTyxjQUFjLENBQUMsQ0FBQztJQUNsQmpCLFlBQVksQ0FBQyxDQUFDO0VBQ2xCLENBQUM7RUFFRCxvQkFDSXpCLDBEQUFBLDRCQUNJQSwwREFBQSxhQUFJLGNBQWdCLENBQUMsZUFDckJBLDBEQUFBLDJCQUNJQSwwREFBQSxnQkFBTyx1QkFDSCxlQUFBQSwwREFBQTtJQUFPNEMsSUFBSSxFQUFDLE1BQU07SUFBQ04sS0FBSyxFQUFFdkIsUUFBUSxDQUFDVixJQUFLO0lBQUN3QyxRQUFRLEVBQUVYO0VBQWEsQ0FBQyxDQUM5RCxDQUNOLENBQUMsZUFDTmxDLDBEQUFBLDJCQUNJQSwwREFBQSxnQkFBTyxRQUNILGVBQUFBLDBEQUFBO0lBQU80QyxJQUFJLEVBQUMsT0FBTztJQUFDTixLQUFLLEVBQUV2QixRQUFRLENBQUNULEtBQU07SUFBQ3VDLFFBQVEsRUFBRVg7RUFBYSxDQUFDLENBQ2hFLENBQ04sQ0FBQyxlQUNObEMsMERBQUEsMkJBQ0lBLDBEQUFBLGdCQUFPLGFBQ0gsZUFBQUEsMERBQUE7SUFBTzRDLElBQUksRUFBQyxVQUFVO0lBQUNOLEtBQUssRUFBRXZCLFFBQVEsQ0FBQ1IsUUFBUztJQUFDc0MsUUFBUSxFQUFFWDtFQUFhLENBQUMsQ0FDdEUsQ0FDTixDQUFDLGVBQ05sQywwREFBQSwyQkFDSUEsMERBQUEsZ0JBQU8sd0JBQ0gsZUFBQUEsMERBQUE7SUFBTzRDLElBQUksRUFBQyxVQUFVO0lBQUNOLEtBQUssRUFBRXZCLFFBQVEsQ0FBQ1AsZUFBZ0I7SUFBQ3FDLFFBQVEsRUFBRVg7RUFBYSxDQUFDLENBQzdFLENBQ04sQ0FBQyxPQUVOLGVBQUFsQywwREFBQSxnQkFBTyxpQkFDSCxlQUFBQSwwREFBQSxlQUVRLENBQ0wsQ0FBQyxlQUNSQSwwREFBQSxnQkFBTyxRQUNILGVBQUFBLDBEQUFBO0lBQU80QyxJQUFJLEVBQUMsTUFBTTtJQUFDTixLQUFLLEVBQUV2QixRQUFRLENBQUNMLE9BQVE7SUFBQ21DLFFBQVEsRUFBRVg7RUFBYSxDQUFDLENBQ2pFLENBQUMsZUFDUmxDLDBEQUFBLGdCQUFPLGVBQ0gsZUFBQUEsMERBQUE7SUFBTzRDLElBQUksRUFBQyxNQUFNO0lBQUNOLEtBQUssRUFBRXZCLFFBQVEsQ0FBQ0osVUFBVztJQUFDa0MsUUFBUSxFQUFFWDtFQUFhLENBQUMsQ0FDcEUsQ0FBQyxlQUNSbEMsMERBQUEsZ0JBQU8sVUFDSCxlQUFBQSwwREFBQTtJQUFPNEMsSUFBSSxFQUFDLE1BQU07SUFBQ04sS0FBSyxFQUFFdkIsUUFBUSxDQUFDSCxJQUFLO0lBQUNpQyxRQUFRLEVBQUVYO0VBQWEsQ0FBQyxDQUM5RCxDQUFDLGVBQ1JsQywwREFBQTtJQUFROEMsT0FBTyxFQUFFTDtFQUFhLEdBQUMsUUFBYyxDQUMzQyxDQUFDO0FBRWY7QUFFQSxTQUFTTSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBTy9DLDBEQUFBLENBQUNHLFFBQVEsTUFBQyxDQUFDO0FBQ3RCO0FBRUEsSUFBTTZDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR2pELDREQUFVLENBQUM4QyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDcEQsMERBQUEsQ0FBQytDLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDN0huQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzE5LTIxLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBSZWdpc3RlcigpIHtcblxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICBwb3N0YWxDb2RlOiAnJyxcbiAgICAgICAgY2l0eTogJycsXG4gICAgfSlcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pXG4gICAgY29uc3QgW3N1bW1hcnksIHNldFN1bW1hcnldID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RXJyb3JzID0ge307XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLmZpcnN0TmFtZS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMuZmlyc3ROYW1lID0gJ0ltacSZIGkgTmF6d2lza28gbXVzaSBtaWXEhyBjbyBuYWptbmllaiA1IHpuYWvDs3cnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLmVtYWlsLmxlbmd0aCA8IDMgfHwgIWZvcm1EYXRhLmVtYWlsLmluY2x1ZGVzKCdAJykpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5lbWFpbCA9ICdOaWVwcmF3aWTFgm93eSBhZHJlcyBlbWFpbCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9ybURhdGEucGFzc3dvcmQubGVuZ3RoIDwgNCkge1xuICAgICAgICAgICAgbmV3RXJyb3JzLnBhc3N3b3JkID0gJ0hhc8WCbyBtdXNpIG1pZcSHIGNvIG5ham1uaWVqIDQgem5ha2knO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCAhPT0gZm9ybURhdGEucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5jb25maXJtUGFzc3dvcmQgPSAnSGFzxYJhIG5pZSBwYXN1asSFIGRvIHNpZWJpZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZvcm1EYXRhLmdlbmRlcikge1xuICAgICAgICAgICAgbmV3RXJyb3JzLmdlbmRlciA9ICdXeWJpZXJ6IHDFgmXEhyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9ybURhdGEuYWRkcmVzcy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMuYWRkcmVzcyA9ICdBZHJlcyBtdXNpIG1pZcSHIGNvIG5ham1uaWVqIDMgem5ha2knO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG9zdGFsQ29kZVJlZ2V4ID0gL15cXGR7NX0oLVxcZHszfSk/JC87XG4gICAgICAgIGlmICghcG9zdGFsQ29kZVJlZ2V4LnRlc3QoZm9ybURhdGEucG9zdGFsQ29kZSkpIHtcbiAgICAgICAgICAgIG5ld0Vycm9ycy5wb3N0YWxDb2RlID0gJ05pZXByYXdpZMWCb3d5IGtvZCBwb2N6dG93eSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9ybURhdGEuY2l0eS5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBuZXdFcnJvcnMuY2l0eSA9ICdNaWFzdG8gbXVzaSBtaWXEhyBjbyBuYWptbmllaiAyIHpuYWtpJztcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEVycm9ycyhuZXdFcnJvcnMpO1xuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdFcnJvcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2V0U3VtbWFyeSgnUmVqZXN0cmFjamEgemFrb8WEY3pvbmEgcG9tecWbbG5pZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U3VtbWFyeSgnJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB2YWxpZGF0ZUZvcm0oKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGgzPkRhbmUgb3NvYm93ZTwvaDM+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5JbWnEmSBpIG5hendpc2tvOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybURhdGEubmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+SGFzxYJvOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UG93dMOzcnogaGFzxYJvOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e2Zvcm1EYXRhLmNvbmZpcm1QYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGRpdlxuICAgICAgICAgICAgPGxhYmVsPlDFgmXEhzpcbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPkFkcmVzOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5hZGRyZXNzfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPktvZCBwb2N6dG93eTpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybURhdGEucG9zdGFsQ29kZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5NaWFzdG86OlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmb3JtRGF0YS5jaXR5fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlphcGlzejwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxSZWdpc3Rlci8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODM0ODU5MWYyYWM3MThhODdkODVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJSZWdpc3RlciIsIl91c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiZ2VuZGVyIiwiYWRkcmVzcyIsInBvc3RhbENvZGUiLCJjaXR5IiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsInZhbGlkYXRlRm9ybSIsIm5ld0Vycm9ycyIsImZpcnN0TmFtZSIsImxlbmd0aCIsImluY2x1ZGVzIiwicG9zdGFsQ29kZVJlZ2V4IiwidGVzdCIsIk9iamVjdCIsImtleXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiX2UkdGFyZ2V0IiwidGFyZ2V0IiwidmFsdWUiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsIm9uQ2hhbmdlIiwib25DbGljayIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==