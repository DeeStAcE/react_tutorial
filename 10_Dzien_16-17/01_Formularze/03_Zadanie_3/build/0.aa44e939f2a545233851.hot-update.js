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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.items),
    _useState2 = _slicedToArray(_useState, 2),
    array = _useState2[0],
    setArray = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Inne"),
    _useState4 = _slicedToArray(_useState3, 2),
    last = _useState4[0],
    setLast = _useState4[1];
  var handleChange = function handleChange(e) {
    console.log(e.target.value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: array[2],
    onClick: handleChange
  }, array.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: item
    }, item);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: last
  }, last)));
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
/******/ 	__webpack_require__.h = () => ("6a8610213d6a42a809af")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hYTQ0ZTkzOWYyYTU0NTIzMzg1MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFFekIsSUFBQUMsU0FBQSxHQUEwQkosK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxLQUFLLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBeENJLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDdEIsSUFBQUksVUFBQSxHQUF3QlYsK0NBQVEsQ0FBQyxNQUFNLENBQUM7SUFBQVcsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBakNFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFFcEIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDL0IsQ0FBQztFQUVELG9CQUNJcEIsMERBQUEsNEJBQ0lBLDBEQUFBO0lBQVFvQixLQUFLLEVBQUVYLEtBQUssQ0FBQyxDQUFDLENBQUU7SUFBQ2EsT0FBTyxFQUFFUDtFQUFhLEdBQzFDTixLQUFLLENBQUNjLEdBQUcsQ0FBQyxVQUFBQyxJQUFJO0lBQUEsb0JBQUl4QiwwREFBQTtNQUFRb0IsS0FBSyxFQUFFSTtJQUFLLEdBQUVBLElBQWEsQ0FBQztFQUFBLEVBQUMsZUFDeER4QiwwREFBQTtJQUFRb0IsS0FBSyxFQUFFUDtFQUFLLEdBQUVBLElBQWEsQ0FDL0IsQ0FDTixDQUFDO0FBRWY7QUFFQSxTQUFTWSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT3pCLDBEQUFBLENBQUNHLFlBQVk7SUFBQ0csS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTO0VBQUUsQ0FBQyxDQUFDO0FBQy9EO0FBRUEsSUFBTW9CLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBRzNCLDREQUFVLENBQUN3QixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDOUIsMERBQUEsQ0FBQ3lCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDNUJuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gU2VsZWN0T3JUeXBlKHByb3BzKSB7XG5cbiAgICBjb25zdCBbYXJyYXksIHNldEFycmF5XSA9IHVzZVN0YXRlKHByb3BzLml0ZW1zKVxuICAgIGNvbnN0IFtsYXN0LCBzZXRMYXN0XSA9IHVzZVN0YXRlKFwiSW5uZVwiKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXthcnJheVsyXX0gb25DbGljaz17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7YXJyYXkubWFwKGl0ZW0gPT4gPG9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtsYXN0fT57bGFzdH08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxTZWxlY3RPclR5cGUgaXRlbXM9e1tcIkJNV1wiLCBcIkphZ3VhclwiLCBcIlBvcnNjaGVcIl19Lz5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2YTg2MTAyMTNkNmE0MmE4MDlhZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlNlbGVjdE9yVHlwZSIsInByb3BzIiwiX3VzZVN0YXRlIiwiaXRlbXMiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnJheSIsInNldEFycmF5IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsYXN0Iiwic2V0TGFzdCIsImhhbmRsZUNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=