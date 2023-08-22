"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function SelectOrType(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Inne"),
    _useState2 = _slicedToArray(_useState, 2),
    last = _useState2[0],
    setLast = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLastSelected = _useState4[0],
    setIsLastSelected = _useState4[1];
  var handleChange = function handleChange(e) {
    if (e.target.value === last) {
      setIsLastSelected(true);
    }
  };
  var handleClick = function handleClick(e) {
    e.preventDefault();
    setIsLastSelected(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: handleChange
  }, props.items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: item
    }, item);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: lastCar
  }, lastCar)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    hidden: !isLastSelected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: last,
    onChange: function onChange(e) {
      return setLast(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "Zmie\u0144")));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectOrType, {
    items: ["BMW", "Jaguar", "Porsche"]
  });
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("32eb199a607c6acf7b6c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MTg1ODk1YzU4ZWEyOGFkOWI2Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFFekIsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQyxNQUFNLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBakNHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFDcEIsSUFBQUksVUFBQSxHQUE0Q1QsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBcERFLGNBQWMsR0FBQUQsVUFBQTtJQUFFRSxpQkFBaUIsR0FBQUYsVUFBQTtFQUV4QyxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUtULElBQUksRUFBRTtNQUN6QkssaUJBQWlCLENBQUMsSUFBSSxDQUFDO0lBQzNCO0VBQ0osQ0FBQztFQUVELElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJSCxDQUFDLEVBQUs7SUFDdkJBLENBQUMsQ0FBQ0ksY0FBYyxDQUFDLENBQUM7SUFDbEJOLGlCQUFpQixDQUFDLEtBQUssQ0FBQztFQUM1QixDQUFDO0VBRUQsb0JBQ0liLDBEQUFBLDRCQUNJQSwwREFBQTtJQUFRcUIsUUFBUSxFQUFFUDtFQUFhLEdBQzFCVixLQUFLLENBQUNrQixLQUFLLENBQUNDLEdBQUcsQ0FBQyxVQUFBQyxJQUFJO0lBQUEsb0JBQUl4QiwwREFBQTtNQUFRaUIsS0FBSyxFQUFFTztJQUFLLEdBQUVBLElBQWEsQ0FBQztFQUFBLEVBQUMsZUFDOUR4QiwwREFBQTtJQUFRaUIsS0FBSyxFQUFFUTtFQUFRLEdBQUVBLE9BQWdCLENBQ3JDLENBQUMsZUFDVHpCLDBEQUFBO0lBQUswQixNQUFNLEVBQUUsQ0FBQ2Q7RUFBZSxnQkFDekJaLDBEQUFBO0lBQU8yQixJQUFJLEVBQUMsTUFBTTtJQUFDVixLQUFLLEVBQUVULElBQUs7SUFBQ2EsUUFBUSxFQUFFLFNBQUFBLFNBQUNOLENBQUM7TUFBQSxPQUFLTixPQUFPLENBQUNNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFBQTtFQUFDLENBQUMsQ0FBQyxlQUMzRWpCLDBEQUFBO0lBQVE0QixPQUFPLEVBQUVWO0VBQVksR0FBQyxZQUFhLENBQzFDLENBQ0gsQ0FBQztBQUVmO0FBRUEsU0FBU1csR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU83QiwwREFBQSxDQUFDRyxZQUFZO0lBQUNtQixLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVM7RUFBRSxDQUFDLENBQUM7QUFDL0Q7QUFFQSxJQUFNUSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUcvQiw0REFBVSxDQUFDNEIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ2xDLDBEQUFBLENBQUM2QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3ZDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFNlbGVjdE9yVHlwZShwcm9wcykge1xuXG4gICAgY29uc3QgW2xhc3QsIHNldExhc3RdID0gdXNlU3RhdGUoXCJJbm5lXCIpXG4gICAgY29uc3QgW2lzTGFzdFNlbGVjdGVkLCBzZXRJc0xhc3RTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gbGFzdCkge1xuICAgICAgICAgICAgc2V0SXNMYXN0U2VsZWN0ZWQodHJ1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNldElzTGFzdFNlbGVjdGVkKGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuaXRlbXMubWFwKGl0ZW0gPT4gPG9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtsYXN0Q2FyfT57bGFzdENhcn08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGRpdiBoaWRkZW49eyFpc0xhc3RTZWxlY3RlZH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xhc3R9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5abWllxYQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxTZWxlY3RPclR5cGUgaXRlbXM9e1tcIkJNV1wiLCBcIkphZ3VhclwiLCBcIlBvcnNjaGVcIl19Lz5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMmViMTk5YTYwN2M2YWNmN2I2Y1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlNlbGVjdE9yVHlwZSIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibGFzdCIsInNldExhc3QiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImlzTGFzdFNlbGVjdGVkIiwic2V0SXNMYXN0U2VsZWN0ZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwibGFzdENhciIsImhpZGRlbiIsInR5cGUiLCJvbkNsaWNrIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9