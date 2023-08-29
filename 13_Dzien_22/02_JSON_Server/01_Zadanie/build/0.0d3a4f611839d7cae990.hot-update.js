"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
// fetch(url, {
// headers: {
//   'Content-Type': 'application/json',
// }
// })

function AddCar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: "",
      brand: "",
      engine: {
        type: "",
        hp: 0
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    newCar = _useState2[0],
    setNewCar = _useState2[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setNewCar(_objectSpread(_objectSpread({}, newCar), {}, _defineProperty({}, name, value)));
  };
  var handleAddNewCar = function handleAddNewCar(e) {
    e.preventDefault();
    console.log(newCar);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Nazwa", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "name",
    value: newCar.name,
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Marka", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "brand",
    value: newCar.brand,
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Typ silnika", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "type",
    value: newCar.engine.type,
    onChange: function onChange(e) {
      return setNewCar(_objectSpread(_objectSpread({}, newCar), {}, {
        engine: _objectSpread(_objectSpread({}, newCar.engine), {}, {
          type: e.target.value
        })
      }));
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Moc silnika", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "hp",
    value: newCar.engine.hp,
    onChange: function onChange(e) {
      return setNewCar(_objectSpread(_objectSpread({}, newCar.engine), {}, {
        hp: e.target.value
      }));
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleAddNewCar
  }, "Dodaj auto"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCar);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("31214bc20082a209d906")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQ05sQiwwREFBQTtJQUFRMkIsT0FBTyxFQUFFTjtFQUFnQixHQUFDLFlBQWtCLENBQ2xELENBQUM7QUFFZjtBQUVBLGlFQUFlbEIsTUFBTTs7Ozs7Ozs7VUM1RHJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTNfRHppZW5fMjIvMDJfSlNPTl9TZXJ2ZXIvMDFfWmFkYW5pZS9qcy9BZGRDYXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmZXRjaCh1cmwsIHtcbi8vIGhlYWRlcnM6IHtcbi8vICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vIH1cbi8vIH0pXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEFkZENhcigpIHtcblxuICAgIGNvbnN0IFtuZXdDYXIsIHNldE5ld0Nhcl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGJyYW5kOiBcIlwiLFxuICAgICAgICBlbmdpbmU6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiXCIsXG4gICAgICAgICAgICBocDogMFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxuICAgICAgICBzZXROZXdDYXIoe1xuICAgICAgICAgICAgLi4ubmV3Q2FyLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBZGROZXdDYXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2cobmV3Q2FyKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TmF6d2FcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17bmV3Q2FyLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5NYXJrYVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYnJhbmRcIiB2YWx1ZT17bmV3Q2FyLmJyYW5kfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+VHlwIHNpbG5pa2FcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR5cGVcIiB2YWx1ZT17bmV3Q2FyLmVuZ2luZS50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXIoey4uLm5ld0NhciwgZW5naW5lOiB7Li4ubmV3Q2FyLmVuZ2luZSwgdHlwZTogZS50YXJnZXQudmFsdWV9fSl9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5Nb2Mgc2lsbmlrYVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJocFwiIHZhbHVlPXtuZXdDYXIuZW5naW5lLmhwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXIoey4uLm5ld0Nhci5lbmdpbmUsIGhwOiBlLnRhcmdldC52YWx1ZX0pfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGROZXdDYXJ9PkRvZGFqIGF1dG88L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkQ2FyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMxMjE0YmMyMDA4MmEyMDlkOTA2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBZGRDYXIiLCJfdXNlU3RhdGUiLCJuYW1lIiwiYnJhbmQiLCJlbmdpbmUiLCJ0eXBlIiwiaHAiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuZXdDYXIiLCJzZXROZXdDYXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiX2UkdGFyZ2V0IiwidGFyZ2V0IiwidmFsdWUiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiaGFuZGxlQWRkTmV3Q2FyIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hhbmdlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=