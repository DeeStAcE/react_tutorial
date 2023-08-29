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
      return setNewCar(_objectSpread(_objectSpread({}, newCar), {}, {
        engine: _objectSpread(_objectSpread({}, newCar.engine), {}, {
          hp: e.target.value
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
/******/ 	__webpack_require__.h = () => ("d25eb580b32f8b8bb709")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO01BQUMsRUFBQyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQzdGLENBQ04sQ0FBQyxlQUNObEIsMERBQUE7SUFBUTJCLE9BQU8sRUFBRU47RUFBZ0IsR0FBQyxZQUFrQixDQUNsRCxDQUFDO0FBRWY7QUFFQSxpRUFBZWxCLE1BQU07Ozs7Ozs7O1VDNURyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEzX0R6aWVuXzIyLzAyX0pTT05fU2VydmVyLzAxX1phZGFuaWUvanMvQWRkQ2FyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZmV0Y2godXJsLCB7XG4vLyBoZWFkZXJzOiB7XG4vLyAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyB9XG4vLyB9KVxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBBZGRDYXIoKSB7XG5cbiAgICBjb25zdCBbbmV3Q2FyLCBzZXROZXdDYXJdID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBicmFuZDogXCJcIixcbiAgICAgICAgZW5naW5lOiB7XG4gICAgICAgICAgICB0eXBlOiBcIlwiLFxuICAgICAgICAgICAgaHA6IDBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgc2V0TmV3Q2FyKHtcbiAgICAgICAgICAgIC4uLm5ld0NhcixcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQWRkTmV3Q2FyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0NhcilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hendhXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e25ld0Nhci5uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TWFya2FcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJyYW5kXCIgdmFsdWU9e25ld0Nhci5icmFuZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlR5cCBzaWxuaWthXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9e25ld0Nhci5lbmdpbmUudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2FyKHsuLi5uZXdDYXIsIGVuZ2luZTogey4uLm5ld0Nhci5lbmdpbmUsIHR5cGU6IGUudGFyZ2V0LnZhbHVlfX0pfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TW9jIHNpbG5pa2FcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiaHBcIiB2YWx1ZT17bmV3Q2FyLmVuZ2luZS5ocH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2FyKHsuLi5uZXdDYXIsIGVuZ2luZTogey4uLm5ld0Nhci5lbmdpbmUsIGhwOiBlLnRhcmdldC52YWx1ZX19KX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkTmV3Q2FyfT5Eb2RhaiBhdXRvPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENhcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMjVlYjU4MGIzMmY4YjhiYjcwOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWRkQ2FyIiwiX3VzZVN0YXRlIiwibmFtZSIsImJyYW5kIiwiZW5naW5lIiwidHlwZSIsImhwIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibmV3Q2FyIiwic2V0TmV3Q2FyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIl9lJHRhcmdldCIsInRhcmdldCIsInZhbHVlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImhhbmRsZUFkZE5ld0NhciIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJvbkNoYW5nZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9