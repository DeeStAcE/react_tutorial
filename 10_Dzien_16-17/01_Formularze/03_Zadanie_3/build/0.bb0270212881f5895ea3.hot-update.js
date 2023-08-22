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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    newLast = _useState6[0],
    setNewLast = _useState6[1];
  var handleChange = function handleChange(e) {
    if (e.target.value === last) {
      setIsLastSelected(true);
    }
  };
  var handleClick = function handleClick(e) {
    e.preventDefault();
    setNewLast(last);
    setIsLastSelected(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: handleChange
  }, props.items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: item
    }, item);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: newLast ? newLast : "Inne"
  }, newLast ? newLast : "Inne")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ 	__webpack_require__.h = () => ("ab63145911b30b53b48a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iYjAyNzAyMTI4ODFmNTg5NWVhMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFFekIsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQyxNQUFNLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBakNHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFDcEIsSUFBQUksVUFBQSxHQUE0Q1QsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBcERFLGNBQWMsR0FBQUQsVUFBQTtJQUFFRSxpQkFBaUIsR0FBQUYsVUFBQTtFQUN4QyxJQUFBRyxVQUFBLEdBQThCYiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBYyxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUFuQ0UsT0FBTyxHQUFBRCxVQUFBO0lBQUVFLFVBQVUsR0FBQUYsVUFBQTtFQUUxQixJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUtiLElBQUksRUFBRTtNQUN6QkssaUJBQWlCLENBQUMsSUFBSSxDQUFDO0lBQzNCO0VBQ0osQ0FBQztFQUVELElBQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJSCxDQUFDLEVBQUs7SUFDdkJBLENBQUMsQ0FBQ0ksY0FBYyxDQUFDLENBQUM7SUFDbEJOLFVBQVUsQ0FBQ1QsSUFBSSxDQUFDO0lBQ2hCSyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7RUFDNUIsQ0FBQztFQUVELG9CQUNJYiwwREFBQSw0QkFDSUEsMERBQUE7SUFBUXlCLFFBQVEsRUFBRVA7RUFBYSxHQUMxQmQsS0FBSyxDQUFDc0IsS0FBSyxDQUFDQyxHQUFHLENBQUMsVUFBQUMsSUFBSTtJQUFBLG9CQUFJNUIsMERBQUE7TUFBUXFCLEtBQUssRUFBRU87SUFBSyxHQUFFQSxJQUFhLENBQUM7RUFBQSxFQUFDLGVBQzlENUIsMERBQUE7SUFBUXFCLEtBQUssRUFBRUwsT0FBTyxHQUFHQSxPQUFPLEdBQUc7RUFBTyxHQUFFQSxPQUFPLEdBQUdBLE9BQU8sR0FBRyxNQUFlLENBQzNFLENBQUMsZUFDVGhCLDBEQUFBO0lBQUs2QixNQUFNLEVBQUUsQ0FBQ2pCO0VBQWUsZ0JBQ3pCWiwwREFBQTtJQUFPOEIsSUFBSSxFQUFDLE1BQU07SUFBQ1QsS0FBSyxFQUFFYixJQUFLO0lBQUNpQixRQUFRLEVBQUUsU0FBQUEsU0FBQ04sQ0FBQztNQUFBLE9BQUtWLE9BQU8sQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUFDLGVBQzNFckIsMERBQUE7SUFBUStCLE9BQU8sRUFBRVQ7RUFBWSxHQUFDLFlBQWEsQ0FDMUMsQ0FDSCxDQUFDO0FBRWY7QUFFQSxTQUFTVSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT2hDLDBEQUFBLENBQUNHLFlBQVk7SUFBQ3VCLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUztFQUFFLENBQUMsQ0FBQztBQUMvRDtBQUVBLElBQU1PLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR2xDLDREQUFVLENBQUMrQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDckMsMERBQUEsQ0FBQ2dDLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDekNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gU2VsZWN0T3JUeXBlKHByb3BzKSB7XG5cbiAgICBjb25zdCBbbGFzdCwgc2V0TGFzdF0gPSB1c2VTdGF0ZShcIklubmVcIilcbiAgICBjb25zdCBbaXNMYXN0U2VsZWN0ZWQsIHNldElzTGFzdFNlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtuZXdMYXN0LCBzZXROZXdMYXN0XSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IGxhc3QpIHtcbiAgICAgICAgICAgIHNldElzTGFzdFNlbGVjdGVkKHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXROZXdMYXN0KGxhc3QpXG4gICAgICAgIHNldElzTGFzdFNlbGVjdGVkKGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuaXRlbXMubWFwKGl0ZW0gPT4gPG9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtuZXdMYXN0ID8gbmV3TGFzdCA6IFwiSW5uZVwifT57bmV3TGFzdCA/IG5ld0xhc3QgOiBcIklubmVcIn08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGRpdiBoaWRkZW49eyFpc0xhc3RTZWxlY3RlZH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xhc3R9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5abWllxYQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxTZWxlY3RPclR5cGUgaXRlbXM9e1tcIkJNV1wiLCBcIkphZ3VhclwiLCBcIlBvcnNjaGVcIl19Lz5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhYjYzMTQ1OTExYjMwYjUzYjQ4YVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlNlbGVjdE9yVHlwZSIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibGFzdCIsInNldExhc3QiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImlzTGFzdFNlbGVjdGVkIiwic2V0SXNMYXN0U2VsZWN0ZWQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIm5ld0xhc3QiLCJzZXROZXdMYXN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNoYW5nZSIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImhpZGRlbiIsInR5cGUiLCJvbkNsaWNrIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9