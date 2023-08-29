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
  var initialCar = {
    name: "",
    brand: "",
    engine: {
      type: "",
      hp: 0
    }
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialCar),
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
    setNewCar(initialCar);
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
      return setNewCar(_objectSpread(_objectSpread({}, newCar), {}, {
        engine: _objectSpread(_objectSpread({}, newCar.engine), {}, {
          hp: parseInt(e.target.value)
        })
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
/******/ 	__webpack_require__.h = () => ("6766c442e4d25a10d2dd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQ04sTUFBTTtVQUFFRSxFQUFFLEVBQUVtQixRQUFRLENBQUNaLENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBQUM7TUFBQyxFQUMzRCxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQ1IsQ0FDTixDQUFDLGVBQ05uQiwwREFBQTtJQUFRNkIsT0FBTyxFQUFFUDtFQUFnQixHQUFDLFlBQWtCLENBQ2xELENBQUM7QUFFZjtBQUVBLGlFQUFlbkIsTUFBTTs7Ozs7Ozs7VUNqRXJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTNfRHppZW5fMjIvMDJfSlNPTl9TZXJ2ZXIvMDFfWmFkYW5pZS9qcy9BZGRDYXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmZXRjaCh1cmwsIHtcbi8vIGhlYWRlcnM6IHtcbi8vICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vIH1cbi8vIH0pXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEFkZENhcigpIHtcblxuICAgIGNvbnN0IGluaXRpYWxDYXIgPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGJyYW5kOiBcIlwiLFxuICAgICAgICBlbmdpbmU6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiXCIsXG4gICAgICAgICAgICBocDogMFxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtuZXdDYXIsIHNldE5ld0Nhcl0gPSB1c2VTdGF0ZShpbml0aWFsQ2FyKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIHNldE5ld0Nhcih7XG4gICAgICAgICAgICAuLi5uZXdDYXIsXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFkZE5ld0NhciA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdDYXIpXG4gICAgICAgIHNldE5ld0Nhcihpbml0aWFsQ2FyKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TmF6d2FcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17bmV3Q2FyLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5NYXJrYVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYnJhbmRcIiB2YWx1ZT17bmV3Q2FyLmJyYW5kfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+VHlwIHNpbG5pa2FcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR5cGVcIiB2YWx1ZT17bmV3Q2FyLmVuZ2luZS50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXIoey4uLm5ld0NhciwgZW5naW5lOiB7Li4ubmV3Q2FyLmVuZ2luZSwgdHlwZTogZS50YXJnZXQudmFsdWV9fSl9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5Nb2Mgc2lsbmlrYVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJocFwiIHZhbHVlPXtuZXdDYXIuZW5naW5lLmhwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0NhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmU6IHsuLi5uZXdDYXIuZW5naW5lLCBocDogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZE5ld0Nhcn0+RG9kYWogYXV0bzwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRDYXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjc2NmM0NDJlNGQyNWExMGQyZGRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFkZENhciIsImluaXRpYWxDYXIiLCJuYW1lIiwiYnJhbmQiLCJlbmdpbmUiLCJ0eXBlIiwiaHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuZXdDYXIiLCJzZXROZXdDYXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiX2UkdGFyZ2V0IiwidGFyZ2V0IiwidmFsdWUiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiaGFuZGxlQWRkTmV3Q2FyIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hhbmdlIiwicGFyc2VJbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==