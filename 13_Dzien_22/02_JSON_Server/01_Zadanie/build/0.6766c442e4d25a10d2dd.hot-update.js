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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Typ silnika", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: newCar.engine.type,
    onChange: function onChange(e) {
      return setNewCar(_objectSpread(_objectSpread({}, newCar), {}, {
        engine: _objectSpread(_objectSpread({}, newCar.engine), {}, {
          type: e.target.value
        })
      }));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Wybierz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "petrol"
  }, "Petrol"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "electric"
  }, "Electric")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Moc silnika", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
/******/ 	__webpack_require__.h = () => ("cdee6092f98a9d45d185")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLFNBQUFBLFNBQUNYLENBQUM7TUFBQSxPQUFLRixTQUFTLENBQUFNLGFBQUEsQ0FBQUEsYUFBQSxLQUNuQlAsTUFBTTtRQUNUTixNQUFNLEVBQUFhLGFBQUEsQ0FBQUEsYUFBQSxLQUFNUCxNQUFNLENBQUNOLE1BQU07VUFBRUUsRUFBRSxFQUFFbUIsUUFBUSxDQUFDWixDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztRQUFDO01BQUMsRUFDM0QsQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUNSLENBQ04sQ0FBQyxlQUNObkIsMERBQUE7SUFBUTZCLE9BQU8sRUFBRVA7RUFBZ0IsR0FBQyxZQUFrQixDQUNsRCxDQUFDO0FBRWY7QUFFQSxpRUFBZW5CLE1BQU07Ozs7Ozs7O1VDckVyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEzX0R6aWVuXzIyLzAyX0pTT05fU2VydmVyLzAxX1phZGFuaWUvanMvQWRkQ2FyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZmV0Y2godXJsLCB7XG4vLyBoZWFkZXJzOiB7XG4vLyAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyB9XG4vLyB9KVxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBBZGRDYXIoKSB7XG5cbiAgICBjb25zdCBpbml0aWFsQ2FyID0ge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBicmFuZDogXCJcIixcbiAgICAgICAgZW5naW5lOiB7XG4gICAgICAgICAgICB0eXBlOiBcIlwiLFxuICAgICAgICAgICAgaHA6IDBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbbmV3Q2FyLCBzZXROZXdDYXJdID0gdXNlU3RhdGUoaW5pdGlhbENhcilcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxuICAgICAgICBzZXROZXdDYXIoe1xuICAgICAgICAgICAgLi4ubmV3Q2FyLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBZGROZXdDYXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2cobmV3Q2FyKVxuICAgICAgICBzZXROZXdDYXIoaW5pdGlhbENhcilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hendhXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e25ld0Nhci5uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TWFya2FcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJyYW5kXCIgdmFsdWU9e25ld0Nhci5icmFuZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlR5cCBzaWxuaWthXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e25ld0Nhci5lbmdpbmUudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0Nhcih7Li4ubmV3Q2FyLCBlbmdpbmU6IHsuLi5uZXdDYXIuZW5naW5lLCB0eXBlOiBlLnRhcmdldC52YWx1ZX19KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+V3liaWVyejwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBldHJvbFwiPlBldHJvbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVsZWN0cmljXCI+RWxlY3RyaWM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TW9jIHNpbG5pa2FcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiaHBcIiB2YWx1ZT17bmV3Q2FyLmVuZ2luZS5ocH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2FyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdDYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lOiB7Li4ubmV3Q2FyLmVuZ2luZSwgaHA6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGROZXdDYXJ9PkRvZGFqIGF1dG88L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkQ2FyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNkZWU2MDkyZjk4YTlkNDVkMTg1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBZGRDYXIiLCJpbml0aWFsQ2FyIiwibmFtZSIsImJyYW5kIiwiZW5naW5lIiwidHlwZSIsImhwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibmV3Q2FyIiwic2V0TmV3Q2FyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIl9lJHRhcmdldCIsInRhcmdldCIsInZhbHVlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImhhbmRsZUFkZE5ld0NhciIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJvbkNoYW5nZSIsInBhcnNlSW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=