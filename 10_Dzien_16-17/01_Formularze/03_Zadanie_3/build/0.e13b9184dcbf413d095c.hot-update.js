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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLastSelected = _useState6[0],
    setIsLastSelected = _useState6[1];
  var handleChange = function handleChange(e) {
    if (e.target.value === last) {
      setIsLastSelected(true);
    }
  };
  var handleClick = function handleClick(e) {
    e.preventDefault();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: handleChange
  }, array.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: item
    }, item);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: last
  }, last)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: last,
    onChange: function onChange(e) {
      return setLast(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "Zmie\u0144"));
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
/******/ 	__webpack_require__.h = () => ("021592394277430f8b5d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMTNiOTE4NGRjYmY0MTNkMDk1Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFFekIsSUFBQUMsU0FBQSxHQUEwQkosK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxLQUFLLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBeENJLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDdEIsSUFBQUksVUFBQSxHQUF3QlYsK0NBQVEsQ0FBQyxNQUFNLENBQUM7SUFBQVcsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBakNFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUE0Q2QsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWUsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBcERFLGNBQWMsR0FBQUQsVUFBQTtJQUFFRSxpQkFBaUIsR0FBQUYsVUFBQTtFQUV4QyxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUtULElBQUksRUFBRTtNQUN6QkssaUJBQWlCLENBQUMsSUFBSSxDQUFDO0lBQzNCO0VBQ0osQ0FBQztFQUVELElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJSCxDQUFDLEVBQUs7SUFDdkJBLENBQUMsQ0FBQ0ksY0FBYyxDQUFDLENBQUM7RUFDdEIsQ0FBQztFQUVELG9CQUNJeEIsMERBQUEsNEJBQ0lBLDBEQUFBO0lBQVEwQixRQUFRLEVBQUVQO0VBQWEsR0FDMUJWLEtBQUssQ0FBQ2tCLEdBQUcsQ0FBQyxVQUFBQyxJQUFJO0lBQUEsb0JBQUk1QiwwREFBQTtNQUFRc0IsS0FBSyxFQUFFTTtJQUFLLEdBQUVBLElBQWEsQ0FBQztFQUFBLEVBQUMsZUFDeEQ1QiwwREFBQTtJQUFRc0IsS0FBSyxFQUFFVDtFQUFLLEdBQUVBLElBQWEsQ0FDL0IsQ0FBQyxlQUNUYiwwREFBQTtJQUFPNkIsSUFBSSxFQUFDLE1BQU07SUFBQ1AsS0FBSyxFQUFFVCxJQUFLO0lBQUNhLFFBQVEsRUFBRSxTQUFBQSxTQUFDTixDQUFDO01BQUEsT0FBS04sT0FBTyxDQUFDTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQUMsZUFDM0V0QiwwREFBQTtJQUFROEIsT0FBTyxFQUFFUDtFQUFZLEdBQUMsWUFBYSxDQUN6QyxDQUFDO0FBRWY7QUFFQSxTQUFTUSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBTy9CLDBEQUFBLENBQUNHLFlBQVk7SUFBQ0csS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTO0VBQUUsQ0FBQyxDQUFDO0FBQy9EO0FBRUEsSUFBTTBCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR2pDLDREQUFVLENBQUM4QixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDcEMsMERBQUEsQ0FBQytCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDckNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gU2VsZWN0T3JUeXBlKHByb3BzKSB7XG5cbiAgICBjb25zdCBbYXJyYXksIHNldEFycmF5XSA9IHVzZVN0YXRlKHByb3BzLml0ZW1zKVxuICAgIGNvbnN0IFtsYXN0LCBzZXRMYXN0XSA9IHVzZVN0YXRlKFwiSW5uZVwiKVxuICAgIGNvbnN0IFtpc0xhc3RTZWxlY3RlZCwgc2V0SXNMYXN0U2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IGxhc3QpIHtcbiAgICAgICAgICAgIHNldElzTGFzdFNlbGVjdGVkKHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7YXJyYXkubWFwKGl0ZW0gPT4gPG9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtsYXN0fT57bGFzdH08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xhc3R9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlptaWXFhDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxTZWxlY3RPclR5cGUgaXRlbXM9e1tcIkJNV1wiLCBcIkphZ3VhclwiLCBcIlBvcnNjaGVcIl19Lz5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMjE1OTIzOTQyNzc0MzBmOGI1ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlNlbGVjdE9yVHlwZSIsInByb3BzIiwiX3VzZVN0YXRlIiwiaXRlbXMiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnJheSIsInNldEFycmF5IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsYXN0Iiwic2V0TGFzdCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXNMYXN0U2VsZWN0ZWQiLCJzZXRJc0xhc3RTZWxlY3RlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwib25DaGFuZ2UiLCJtYXAiLCJpdGVtIiwidHlwZSIsIm9uQ2xpY2siLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=